import { useState } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const boxes = Array(4).fill(Array(4).fill());

const ThreeDBackgroundBoxes = () => {
  const [active, setActive] = useState(false);
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
                style={{ backgroundPosition: `${-j * 125}px ${-i * 125}px` }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDBackgroundBoxes;
