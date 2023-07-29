import { useMemo, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import { config } from "@/routerConfig";

type MenuListProps = {
  searchText: string;
  closeMenu: () => void;
};

const MenuList = memo(({ searchText, closeMenu }: MenuListProps) => {
  const location = useLocation();

  const menuList = useMemo(
    () =>
      config?.children
        .filter(({ index, path }) => !index && path !== "*")
        .map((item, i) => ({ ...item, no: `${i + 1}` }))
        .filter(
          ({ path, no }) =>
            path?.toUpperCase().includes(searchText.toUpperCase()) || no.includes(searchText)
        ) ?? [],
    [searchText]
  );

  if (menuList.length === 0) return <div className='pt-8 text-white text-center'>No Result</div>;

  return menuList.map(({ path, no }, i) => (
    <Link
      to={`/${path}`}
      onClick={closeMenu}
      className='block text-white no-underline w-full border-r border-b overflow-hidden'
      key={`${path}-${i}`}
    >
      <div
        className={classNames(
          "w-full flex p-4 hover:bg-primary hover:scale-125 transition origin-left duration-300 ease-out",
          {
            "bg-primary scale-125": location.pathname.substring(1) === path,
          }
        )}
      >
        {/* 序號 */}
        <div className='w-8'>{`${no}.`}</div>
        {/* 選項名稱 */}
        <div>{path}</div>
      </div>
    </Link>
  ));
});

export default MenuList;
