import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { config } from '../../routerConfig';

const Menu = ({ isMenuOpen, closeMenu }) => {
  const [isOpened, setIsOpened] = useState(false);
  const location = useLocation();

  /**
   * 設定為 true，代表開啟過menu，避免初次render就先跑一次關閉動畫
   */
  useEffect(() => {
    if (isMenuOpen) {
      setIsOpened(true);
    }
  }, [isMenuOpen]);

  return (
    <div
      className={classNames(
        'bg-slate-800 min-w-[350px] h-[calc(100vh-52px)] md:h-[calc(100vh-64px)] w-full  md:w-3/12 fixed z-50 overflow-y-auto overscroll-y-none scrollbar-hide -left-full',
        {
          'animate-ShowMenu': isOpened && isMenuOpen,
          'animate-HideMenu': isOpened && !isMenuOpen,
        }
      )}
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
