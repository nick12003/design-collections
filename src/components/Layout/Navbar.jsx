import { ImHome } from 'react-icons/im';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isMenuOpen, onClickMenu }, ref) => {
  return (
    <nav className="sticky top-0 z-10 py-3 bg-slate-800">
      <div className="mx-auto max-w-full px-4 sm:px-6">
        <div className="flex items-center justify-between text-4xl text-white">
          <a className="hover:scale-125 transition duration-300 ease-out hover:ease-in cursor-pointer">
            <ImHome className="" />
          </a>
          <div>title</div>
          <div
            className="hover:scale-125 transition duration-300 ease-out hover:ease-in cursor-pointer"
            onClick={onClickMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
