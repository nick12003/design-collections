import { useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const ProgressSteps = () => {
  const [currentActive, setCurrentActive] = useState(0);
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);
  const [progress, setProgress] = useState('0');

  const onPrev = () => {
    if (currentActive > 0) setCurrentActive(currentActive - 1);
  };

  const onNext = () => {
    if (currentActive < 3) setCurrentActive(currentActive + 1);
  };

  useEffect(() => {
    if (currentActive === 0) {
      setPrevDisable(true);
    } else {
      setPrevDisable(false);
    }
    if (currentActive === 3) {
      setNextDisable(true);
    } else {
      setNextDisable(false);
    }
    setProgress((currentActive / 3) * 100);
  }, [currentActive]);

  return (
    <div className={styles.ProgressSteps}>
      <div className={styles.container}>
        <div className={styles['progress-container']}>
          <div className={styles.progress} style={{ width: `${progress}%` }}></div>
          {Array(4)
            .fill()
            .map((_, i) => i)
            .map((i) => {
              return (
                <div
                  key={i}
                  className={classNames(styles.circle, { [styles.active]: currentActive >= i })}
                >
                  {i + 1}
                </div>
              );
            })}
        </div>

        <button className={styles.btn} onClick={onPrev} disabled={prevDisable}>
          Prev
        </button>
        <button className={styles.btn} onClick={onNext} disabled={nextDisable}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressSteps;
