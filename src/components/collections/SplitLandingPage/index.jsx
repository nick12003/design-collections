import { useState } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const SplitLandingPage = () => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  return (
    <div className={styles.SplitLandingPage}>
      <div
        className={classNames(styles.container, {
          [styles['hover-left']]: left,
          [styles['hover-right']]: right,
        })}
      >
        <div
          className={classNames(styles.split, styles.left)}
          onMouseEnter={() => {
            setLeft(true);
          }}
          onMouseLeave={() => {
            setLeft(false);
          }}
        >
          <h1>Playstation 5</h1>
          <span href="#" className={styles.btn}>
            Buy Now
          </span>
        </div>
        <div
          className={classNames(styles.split, styles.right)}
          onMouseEnter={() => {
            setRight(true);
          }}
          onMouseLeave={() => {
            setRight(false);
          }}
        >
          <h1>XBox Series X</h1>
          <span href="#" className={styles.btn}>
            Buy Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default SplitLandingPage;
