import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

const Menu = ({ children, isMenuOpen }) => {
  return (
    <div
      className={classNames('bg-slate-800 min-h-screen min-w-[300px] w-3/12 fixed', {
        'animate-ShowMenu': isMenuOpen,
        'animate-HideMenu': !isMenuOpen,
      })}
    >
      {children}
    </div>
  );
};
export default Menu;
