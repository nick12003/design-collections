import { useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const boxes = Array(4).fill(Array(4).fill());

const getWidth = () => {
  if (window.innerWidth > 1280) return 125;
  return 60;
};

const useWidth = () => {
  const [width, setWidth] = useState(getWidth());
  const handleRWD = () => {
    setWidth(getWidth());
  };
  useEffect(() => {
    window.addEventListener('resize', handleRWD);
    handleRWD();
    return () => {
      window.removeEventListener('resize', handleRWD);
    };
  }, []);
  return width;
};

const ThreeDBackgroundBoxes = () => {
  const [active, setActive] = useState(false);
  const width = useWidth();
  return (
    <div className={styles.ThreeDBackgroundBoxes}>
      <button
        className={styles.magic}
        onClick={() => {
          setActive(!active);
        }}
      >
        Magic 🎩
      </button>
      <div className={classNames(styles.boxes, { [styles.big]: !active })}>
        {boxes.map((row, i) => (
          <div key={i} className={styles.row}>
            {row.map((_, j) => (
              <div
                key={j}
                className={styles.box}
                style={{ backgroundPosition: `${-j * width}px ${-i * width}px` }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDBackgroundBoxes;
