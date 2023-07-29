import { useLocation, Link } from 'react-router-dom';
import { ImHome } from 'react-icons/im';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isMenuOpen, openMenu, closeMenu }) => {
  const location = useLocation();
  return (
    <nav className="sticky top-0 z-10 py-3 h-[52px] md:h-[64px] border-b border-slate-900/10 backdrop-blur flex items-center">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6">
        <div className="flex items-center justify-between md:justify-center text-xl md:text-4xl relative">
          <Link
            to="/"
            className="hover:scale-125 transition duration-300 ease-out flex items-center justify-between md:absolute md:left-[1.5rem] text-primary"
            onClick={closeMenu}
          >
            <span className="hidden lg:block">Nick Chen</span>
            <ImHome className="block lg:hidden" />
          </Link>
          <div>{location.pathname.substring(1)}</div>
          <button
            id="HamBtn"
            className="hover:scale-125 transition duration-300 ease-out md:absolute md:right-[1.5rem] text-primary"
            onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
