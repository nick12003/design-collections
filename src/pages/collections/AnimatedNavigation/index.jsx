import { useState } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const AnimatedNavigation = () => {
  const [stretch, setStretch] = useState(false);
  return (
    <div className={styles.AnimatedNavigation}>
      <nav className={classNames({ [styles.active]: stretch })}>
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Works</span>
          </li>
          <li>
            <span>About</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul>
        <button
          className={styles.icon}
          onClick={() => {
            setStretch(!stretch);
          }}
        >
          <div className={classNames(styles.line, styles.line1)}></div>
          <div className={classNames(styles.line, styles.line2)}></div>
        </button>
      </nav>
    </div>
  );
};

export default AnimatedNavigation;
