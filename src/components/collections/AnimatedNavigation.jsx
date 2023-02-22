import { useState } from 'react';
import classNames from 'classnames';

const AnimatedNavigation = () => {
  const [stretch, setStretch] = useState(false);
  return (
    <div className="h-full bg-gradient-to-b from-[#eafbff] to-[#5290f9] flex items-center justify-center">
      <nav
        className={classNames(
          'bg-white p-5 w-20 flex items-center justify-center rounded-sm shadow-[0_2px_5px_rgba(0,0,0,0.3)] transition-[width] duration-500 ease-linear overflow-x-hidden',
          {
            'w-[350px]': stretch,
          }
        )}
      >
        <ul
          className={classNames(
            'flex list-none p-0 m-0 w-0 transition-[width] duration-500 ease-linear',
            { 'w-full': stretch }
          )}
        >
          {['Home', 'Works', 'About', 'Contact'].map((item) => (
            <li
              key={item}
              className={classNames(
                'rotate-y-0 opacity-0 transition-[transform,opacity] duration-500 ease-linear',
                {
                  'opacity-100 rotate-y-360': stretch,
                }
              )}
            >
              <span className="relative text-black my-0 mx-[10px] cursor-pointer">{item}</span>
            </li>
          ))}
        </ul>
        <button
          className="bg-white cursor-pointer p-0 relative h-[30px] w-[30px] focus:outline-none"
          onClick={() => {
            setStretch(!stretch);
          }}
        >
          <div
            className={classNames(
              'bg-[#5290f9] h-[2px] w-[20px] absolute top-[10px] left-[5px] transition-[transform] duration-500 ease-linear',
              { 'rotate-[-765deg] translate-y-[5.5px]': stretch }
            )}
          ></div>
          <div
            className={classNames(
              'bg-[#5290f9] h-[2px] w-[20px] absolute bottom-[8px] left-[5px] transition-[transform] duration-500 ease-linear',
              { 'rotate-[765deg] translate-y-[-5.5px]': stretch }
            )}
          ></div>
        </button>
      </nav>
    </div>
  );
};

export default AnimatedNavigation;
