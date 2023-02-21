import { useLocation, Link } from 'react-router-dom';
import { ImHome } from 'react-icons/im';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isMenuOpen, openMenu, closeMenu }) => {
  const location = useLocation();
  return (
    <nav className="sticky top-0 z-10 py-3 bg-slate-800">
      <div className="mx-auto max-w-full px-4 sm:px-6">
        <div className="flex items-center justify-between text-4xl text-white">
          <Link
            to="/"
            className="hover:scale-125 transition duration-300 ease-out"
            onClick={closeMenu}
          >
            <ImHome />
          </Link>
          <div>{location.pathname.substring(1) || 'Home'}</div>
          <div
            className="cursor-pointer hover:scale-125 transition duration-300 ease-out"
            onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
