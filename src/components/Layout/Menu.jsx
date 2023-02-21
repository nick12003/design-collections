import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { config } from '../../routerConfig';

const Menu = ({ isMenuOpen, closeMenu }) => {
  return (
    <div
      className={classNames('bg-slate-800 min-h-screen min-w-[300px] w-3/12 fixed', {
        'animate-ShowMenu': isMenuOpen,
        'animate-HideMenu': !isMenuOpen,
      })}
    >
      {config.children
        .filter(({ index, path }) => !index && path !== '*')
        .map(({ path }) => (
          <Link
            to={`/${path}`}
            onClick={closeMenu}
            className=" block text-white no-underline w-full overflow-hidden"
            key={path}
          >
            <div className="w-full p-4 hover:bg-[#f00946] hover:scale-125 transition origin-left duration-300 ease-out">
              {path}
            </div>
          </Link>
        ))}
    </div>
  );
};
export default Menu;
