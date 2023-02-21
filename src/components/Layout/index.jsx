import { useState } from 'react';

import Navbar from './Navbar';
import Menu from './Menu';

const Layout = ({ children }) => {
  const [isMenuOpen, setMenuState] = useState(false);

  const menuHandle = () => setMenuState((pre) => !pre);

  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <div>
        <Navbar isMenuOpen={isMenuOpen} onClickMenu={menuHandle} />
        <Menu isMenuOpen={isMenuOpen}>list</Menu>
        <div className={`h-[calc(100vh-64px)]`}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
