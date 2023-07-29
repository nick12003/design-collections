import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const AnimatedCountdown = () => {
  const [finish, setFinish] = useState(true);
  const [numbers, setNumbers] = useState(Array(4).fill(''));

  const setAnimate = (index, type) => {
    setNumbers((preList) => preList.map((item, i) => (index === i ? type : item)));
  };
  const start = (i) => {
    if (i < 0) {
      setFinish(true);
      return;
    }
    setFinish(false);
    setAnimate(i, styles.in);
    setTimeout(() => {
      start(i - 1);
    }, 1000);
  };

  return (
    <div className={styles.AnimatedCountdown}>
      <div className={classNames(styles.counter, { [styles.hide]: finish })}>
        <div className={styles.numList}>
          {numbers.map((num, i) => {
            return (
              <span
                key={i}
                className={num}
                onAnimationEnd={(e) => {
                  if (e.animationName === styles.goIn) {
                    setAnimate(i, styles.out);
                  }
                }}
              >
                {i}
              </span>
            );
          })}
        </div>
        <h4>Get Ready</h4>
      </div>
      <div className={classNames(styles.final, { [styles.show]: finish })}>
        <h1>GO</h1>
        <button
          className={styles.button}
          onClick={() => {
            start(numbers.length - 1);
          }}
        >
          Replay
        </button>
      </div>
    </div>
  );
};

export default AnimatedCountdown;
