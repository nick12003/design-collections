import { useState, useMemo, memo, useDeferredValue } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';
import classNames from 'classnames';

import { config } from '../../routerConfig';

const MenuList = memo(({ searchText, closeMenu }) => {
  const location = useLocation();

  const menuList = useMemo(
    () =>
      config?.children
        .filter(({ index, path }) => !index && path !== '*')
        .map((item, i) => ({ ...item, no: `${i + 1}` }))
        .filter(
          ({ path, no }) =>
            path.toUpperCase().includes(searchText.toUpperCase()) || no.includes(searchText)
        ) ?? [],
    [config, searchText]
  );

  return (
    <>
      {menuList.map(({ path, no }, i) => (
        <Link
          to={`/${path}`}
          onClick={closeMenu}
          className="block text-white no-underline w-full border-r border-b overflow-hidden"
          key={`${path}-${i}`}
        >
          <div
            className={classNames(
              'w-full flex p-4 hover:bg-primary hover:scale-125 transition origin-left duration-300 ease-out',
              {
                'bg-primary scale-125': location.pathname.substring(1) === path,
              }
            )}
          >
            {/* 序號 */}
            <div className="w-[30px]">{`${no}.`}</div>
            {/* 選項名稱 */}
            <div>{path}</div>
          </div>
        </Link>
      ))}
    </>
  );
});

MenuList.displayName = 'MenuList';

const Menu = ({ guidedEnabled, isMenuOpen, isOpened, closeMenu }) => {
  const [searchText, setSearchText] = useState('');
  const deferredSearch = useDeferredValue(searchText);
  const [focus, setFocus] = useState(false);

  const isStale = searchText !== deferredSearch;

  return (
    <div
      id="Menu"
      className={classNames(
        'backdrop-blur min-w-[350px] h-[calc(100vh-52px)] md:h-[calc(100vh-64px)] w-full md:w-3/12 fixed z-50 overflow-y-auto overscroll-y-none scrollbar-hide -left-full',
        {
          'animate-ShowMenu': isOpened && isMenuOpen,
          'animate-HideMenu': isOpened && !isMenuOpen,
          'overflow-y-hidden': guidedEnabled,
        }
      )}
    >
      {/* 使用者引導時避免點擊到選單的遮罩 */}
      {guidedEnabled && (
        <div className="w-full h-[calc(100vh-52px)] md:h-[calc(100vh-64px)]  fixed z-[52]" />
      )}
      {/* 搜尋框 */}
      <div className="bg-white w-full h-[80px] flex items-center justify-center sticky top-0 z-[51]">
        <div
          className={classNames(
            'h-[40px] w-[80%] flex items-center relative border rounded-[6px] overflow-hidden shadow-xl',
            { 'border-primary': focus }
          )}
        >
          <input
            value={searchText}
            type="text"
            className="h-full w-full relative pl-[40px] pr-[40px] text-xl focus:outline-none"
            placeholder="Search..."
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(false);
            }}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <div className="h-[40px] w-[40px] bg-transparent absolute left-0 flex items-center justify-center pointer-events-none">
            <FaSearch className="w-[50%] h-[50%]" />
          </div>
          <div
            className={classNames(
              'h-[40px] w-[40px] bg-transparent absolute right-0 flex items-center justify-center cursor-pointer hover:scale-125 duration-200',
              {
                hidden: searchText?.length === 0,
              }
            )}
            onClick={() => {
              setSearchText('');
            }}
          >
            <FaTimes className="w-[50%] h-[50%] " />
          </div>
        </div>
      </div>
      {/* 選單列表 */}
      <div
        className={classNames('transition-opacity duration-200 ease-linear', {
          'opacity-50': isStale,
          'opacity-100': !isStale,
        })}
      >
        <MenuList searchText={deferredSearch} closeMenu={closeMenu} />
      </div>
    </div>
  );
};
export default Menu;
