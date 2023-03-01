import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const DrinkWater = () => {
  const [cups, setCups] = useState(
    Array(8)
      .fill()
      .map((i) => {
        return { full: false };
      })
  );
  const [percent, setPercent] = useState(0);
  return (
    <div className={styles.DrinkWater}>
      <div className={styles.cup}>
        {percent === 8 ? (
          ''
        ) : (
          <div
            className={styles.remained}
            style={{
              visibility: `${percent === 8 ? 'hidden' : 'visible'}`,
            }}
          >
            <span>{2 - (percent * 250) / 1000}L</span>
            <small>Remained</small>
          </div>
        )}
        <div
          className={styles.percentage}
          style={{
            visibility: `${percent === 0 ? 'hidden' : 'visible'}`,
            height: `${(percent / 8) * 100}%`,
          }}
        >
          {`${(percent / 8) * 100}%`}
        </div>
      </div>
      <div className={styles.cupsWrapper}>
        <p className={styles.text}>Select how many glasses of water that you have drank</p>
        <div className={styles.cups}>
          {cups.map(({ full }, i) => {
            return (
              <div
                key={i}
                className={classNames(styles.cup, styles['cup-small'], { [styles.full]: full })}
                onClick={() => {
                  let copyCups = [...cups];
                  setCups(
                    copyCups.map((cup, j) => {
                      if (j === i && cup.full && i === percent - 1) {
                        return { full: false };
                      }
                      if (j <= i) return { full: true };
                      else return { full: false };
                    })
                  );
                  if (i + 1 === percent) setPercent(i);
                  else setPercent(i + 1);
                }}
              >
                250 ml
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DrinkWater;
