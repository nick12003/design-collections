import { useState } from 'react';
import styles from './style.module.scss';

const CustomRangeSlider = () => {
  const [value, setValue] = useState(50);
  return (
    <div className={styles.CustomRangeSlider}>
      <div className={styles['range-container']}>
        <input
          type="range"
          value={value}
          min="0"
          max="100"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <label htmlFor="range" style={{ left: `${2.8 * value - 30}px` }}>
          {value}
        </label>
      </div>
    </div>
  );
};

export default CustomRangeSlider;
