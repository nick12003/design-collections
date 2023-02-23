import { useState } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const CustomRangeSlider = () => {
  const [value, setValue] = useState(50);
  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      <div className="relative">
        <input
          className={classNames(
            'w-[300px] mx-0 my-[18px] appearance-none focus:outline-none ',
            styles.customerSlider
          )}
          type="range"
          value={value}
          min="0"
          max="100"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <label
          htmlFor="range"
          className=" bg-white absolute top-[-20px] left-[110px] w-[80px] py-0 px-[5px] text-center rounded-[4px] shadow-[0_0px_5px_rgba(0,0,0,0.3)]"
          style={{ left: `${2.8 * value - 30}px` }}
        >
          {value}
        </label>
      </div>
    </div>
  );
};

export default CustomRangeSlider;
