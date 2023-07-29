import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Steps } from 'intro.js-react';
import classNames from 'classnames';

import Navbar from './Navbar';
import Menu from './Menu';
import Footer from './Footer';

const steps = [
  {
    element: '#HamBtn',
    intro: '開啟選單',
  },
  {
    element: '#Menu',
    intro: '選擇作品進行觀看',
  },
];

const Layout = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isMenuOpen, setMenuState] = useState(false);
  const [guidedEnabled, setGuidedEnabled] = useState(true);

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  /**
   * 設定為 true，代表開啟過menu，避免初次render就先跑一次關閉動畫
   */
  useEffect(() => {
    if (isMenuOpen) {
      setIsOpened(true);
    }
  }, [isMenuOpen]);

  /**
   * 第一次進入非首頁則關閉使用者引導
   */
  useEffect(() => {
    if (!isHomePage) {
      setGuidedEnabled(false);
    }
  }, []);

  const openMenu = () => setMenuState(true);
  const closeMenu = () => setMenuState(false);

  return (
    <div className="flex h-screen w-full flex-col justify-between relative">
      {/* 首頁才需要使用者引導 */}
      {isHomePage && (
        <Steps
          enabled={guidedEnabled}
          steps={steps}
          initialStep={0}
          onBeforeChange={(e) => {
            if (e === 1) {
              return new Promise((resolve) => {
                openMenu();
                setTimeout(resolve, 600);
              });
            }
          }}
          onBeforeExit={() => {
            closeMenu();
          }}
          onExit={() => {
            setGuidedEnabled(false);
          }}
          options={{}}
        />
      )}
      <div className="h-full overflow-y-auto scrollbar-hide scroll-smooth">
        <Navbar {...{ isMenuOpen, openMenu, closeMenu }} />
        <Menu {...{ guidedEnabled, isMenuOpen, isOpened, closeMenu }} />
        <div
          className={classNames(
            'h-[calc(100vh-122px)] md:h-[calc(100vh-64px)] w-full absolute bg-black/60 opacity-0',
            {
              'animate-ShowMask': isOpened && isMenuOpen,
              'animate-HideMask': isOpened && !isMenuOpen,
            }
          )}
          onClick={closeMenu}
        />
        <div
          className={classNames('relative', {
            'h-[calc(100vh-122px)] md:h-[calc(100vh-164px)]': !isHomePage,
          })}
        >
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
