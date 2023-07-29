import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const useClock = () => {
  const [now, setNow] = useState(() => new Date());

  const timer = useRef();
  useEffect(() => {
    timer.current = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const h = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const ap = now.getHours() > 12 ? 'PM' : 'AM';

  return {
    h,
    hStrokeDashoffset: 440 - (440 * h) / 12,
    m,
    mStrokeDashoffset: 440 - (440 * m) / 60,
    s,
    sStrokeDashoffset: 440 - (440 * s) / 60,
    ap,
  };
};

const DigitalClock = () => {
  const { h, hStrokeDashoffset, m, mStrokeDashoffset, s, sStrokeDashoffset, ap } = useClock();

  return (
    <div className={styles.DigitalClock}>
      <div className={styles.container}>
        <div className={styles.circle} style={{ '--clr': '#ff2972' }}>
          <div
            className={classNames(styles.dots, styles.hrDot)}
            style={{
              transform: `rotate(${h * 30}deg)`,
            }}
          />
          <svg>
            <circle cx="70" cy="70" r="70" />
            <circle cx="70" cy="70" r="70" strokeDashoffset={hStrokeDashoffset} />
          </svg>
          <div className={styles.hours}>{h.toString().padStart(2, '0')}</div>
        </div>
        <div className={styles.circle} style={{ '--clr': '#fee800' }}>
          <div
            className={classNames(styles.dots, styles.minDot)}
            style={{
              transform: `rotate(${m * 6}deg)`,
            }}
          />
          <svg>
            <circle cx="70" cy="70" r="70" />
            <circle cx="70" cy="70" r="70" strokeDashoffset={mStrokeDashoffset} />
          </svg>
          <div className={styles.minutes}>{m.toString().padStart(2, '0')}</div>
        </div>
        <div className={styles.circle} style={{ '--clr': '#04fc43' }}>
          <div
            className={classNames(styles.dots, styles.secDot)}
            style={{
              transform: `rotate(${s * 6}deg)`,
            }}
          />
          <svg>
            <circle cx="70" cy="70" r="70" />
            <circle cx="70" cy="70" r="70" strokeDashoffset={sStrokeDashoffset} />
          </svg>
          <div className={styles.seconds}>{s.toString().padStart(2, '0')}</div>
        </div>
        <div className={styles.ap}>
          <div className={styles.ampm}>{ap}</div>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
