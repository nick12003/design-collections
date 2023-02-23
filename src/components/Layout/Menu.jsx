import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { config } from '../../routerConfig';

/**
 * 待處理: 第一次render時menu會先出現再收合
 */

const Menu = ({ isMenuOpen, closeMenu }) => {
  const location = useLocation();
  return (
    <div
      className={classNames('bg-slate-800 min-w-[300px] w-3/12 min-h-screen fixed z-10', {
        'animate-ShowMenu': isMenuOpen,
        'animate-HideMenu': !isMenuOpen,
      })}
    >
      {config.children
        .filter(({ index, path }) => !index && path !== '*')
        .map(({ path }, i) => (
          <Link
            to={`/${path}`}
            onClick={closeMenu}
            className=" block text-white no-underline w-full overflow-hidden"
            key={path}
          >
            <div
              className={classNames(
                'w-full p-4 hover:bg-[#f00946] hover:scale-125 transition origin-left duration-300 ease-out',
                {
                  'bg-[#f00946] scale-125': location.pathname.substring(1) === path,
                }
              )}
            >
              {`${i + 1}. ${path}`}
            </div>
          </Link>
        ))}
    </div>
  );
};
export default Menu;
