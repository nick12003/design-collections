import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import Navbar from './Navbar';
import Menu from './Menu';

const Layout = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const openMenu = () => setMenuState(true);
  const closeMenu = () => setMenuState(false);

  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <div>
        <Navbar {...{ isMenuOpen, openMenu, closeMenu }} />
        <Menu {...{ isMenuOpen, closeMenu }} />
        <div className={`h-[calc(100vh-52px)] md:h-[calc(100vh-64px)]`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
