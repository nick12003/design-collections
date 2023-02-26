import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';

import Navbar from './Navbar';
import Menu from './Menu';

const Layout = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isMenuOpen, setMenuState] = useState(false);

  /**
   * 設定為 true，代表開啟過menu，避免初次render就先跑一次關閉動畫
   */
  useEffect(() => {
    if (isMenuOpen) {
      setIsOpened(true);
    }
  }, [isMenuOpen]);

  const openMenu = () => setMenuState(true);
  const closeMenu = () => setMenuState(false);

  return (
    <div className="flex min-h-screen w-full flex-col justify-between relative">
      <div>
        <Navbar {...{ isMenuOpen, openMenu, closeMenu }} />
        <Menu {...{ isMenuOpen, isOpened, closeMenu }} />
        <div
          className={classNames(
            'h-[calc(100vh-52px)] md:h-[calc(100vh-64px)] w-full absolute bg-black/60 opacity-0',
            {
              'animate-ShowMask': isOpened && isMenuOpen,
              'animate-HideMask': isOpened && !isMenuOpen,
            }
          )}
          onClick={closeMenu}
        />
        <div className={`h-[calc(100vh-52px)] md:h-[calc(100vh-64px)]`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
