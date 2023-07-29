import { useState, useDeferredValue } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import classNames from "classnames";

import MenuList from "./MenuList";

type MenuProps = {
  guidedEnabled: boolean;
  isMenuOpen: boolean;
  isOpened: boolean;
  closeMenu: () => void;
};

const Menu = ({ guidedEnabled, isMenuOpen, isOpened, closeMenu }: MenuProps) => {
  const [searchText, setSearchText] = useState("");
  const deferredSearch = useDeferredValue(searchText);
  const [focus, setFocus] = useState(false);

  const isStale = searchText !== deferredSearch;

  return (
    <div
      id='Menu'
      className={classNames(
        "backdrop-blur min-w-[350px] h-full w-full md:w-3/12 border fixed z-50 overflow-y-auto overscroll-y-none scrollbar-hide -left-full",
        {
          "animate-ShowMenu": isOpened && isMenuOpen,
          "animate-HideMenu": isOpened && !isMenuOpen,
          "overflow-y-hidden": guidedEnabled,
        }
      )}
    >
      {/* 使用者引導時避免點擊到選單的遮罩 */}
      {guidedEnabled && <div className='w-full h-full fixed z-[52]' />}
      {/* 搜尋框 */}
      <div className='bg-white w-full p-4 flex flex-col gap-2 items-center justify-center sticky top-0 z-[51]'>
        <div className='w-full text-right'>
          <button
            className='text-2xl hover:scale-125 transition duration-300 ease-out text-primary'
            onClick={closeMenu}
          >
            <FaTimes />
          </button>
        </div>
        <div
          className={classNames(
            "w-[90%] flex items-center self-start ite relative border rounded-[6px] overflow-hidden shadow-xl",
            { "border-primary": focus }
          )}
        >
          <input
            value={searchText}
            type='text'
            className='w-full relative py-2 px-10 text-xl focus:outline-none'
            placeholder='Search...'
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className='h-10 w-10 bg-transparent absolute left-0 flex items-center justify-center pointer-events-none'>
            <FaSearch className='w-1/2 h-1/2' />
          </div>
          <div
            className={classNames(
              "h-10 w-10 bg-transparent absolute right-0 flex items-center justify-center cursor-pointer hover:scale-125 duration-200",
              {
                hidden: searchText?.length === 0,
              }
            )}
            onClick={() => setSearchText("")}
          >
            <FaTimes className='w-1/2 h-1/2 ' />
          </div>
        </div>
      </div>
      {/* 選單列表 */}
      <div
        className={classNames("transition-opacity duration-200 ease-linear", {
          "opacity-50": isStale,
          "opacity-100": !isStale,
        })}
      >
        <MenuList searchText={deferredSearch} closeMenu={closeMenu} />
      </div>
    </div>
  );
};
export default Menu;
