import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', 'Saturday'];
const h_total = 24 * 60 * 60;
const m_total = 60 * 60;
const s_total = 60;

const padL = (str) => str.toString().padStart(2, '0');

const useClock = (nowDateTime) => {
  const hours = nowDateTime.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = nowDateTime.getMinutes();
  const seconds = nowDateTime.getSeconds();
  const year = nowDateTime.getFullYear();
  const month = nowDateTime.getMonth();
  const date = nowDateTime.getDate();
  const day = nowDateTime.getDay();

  return {
    deg: {
      h: ((hoursForClock * 60 * 60 + minutes * 60 + seconds) / h_total) * 360,
      m: ((minutes * 60 + seconds) / m_total) * 360,
      s: (seconds / s_total) * 360,
    },
    dateString: `${year} - ${padL(month + 1)} - ${padL(date)} ${days[day]}`,
    timeString: `${hours}:${padL(minutes)}:${padL(seconds)}`,
  };
};

const ThemeClock = () => {
  const [mode, setMode] = useState(true);
  const [now, setNow] = useState(() => new Date());
  const timer = useRef();
  const { deg, dateString, timeString } = useClock(now);
  useEffect(() => {
    timer.current = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);
  return (
    <div className={classNames(styles.ThemeClock, { [styles.dark]: !mode })}>
      <button
        className={styles.toggle}
        onClick={() => {
          setMode(!mode);
        }}
      >
        {mode ? 'Dark mode' : 'Light mode'}
      </button>
      <div className={styles['clock-container']}>
        <div className={styles.clock}>
          <div
            className={classNames(styles.needle, styles.hour)}
            style={{ transform: `translate(-50%, -100%) rotate(${deg.h}deg)` }}
          />
          <div
            className={classNames(styles.needle, styles.minute)}
            style={{ transform: `translate(-50%, -100%) rotate(${deg.m}deg)` }}
          />
          <div
            className={classNames(styles.needle, styles.second)}
            style={{ transform: `translate(-50%, -100%) rotate(${deg.s}deg)` }}
          />
          <div className={styles['center-point']}></div>
        </div>

        <div className={styles.time}>{timeString}</div>
        <div className={styles.date}>{dateString}</div>
      </div>
    </div>
  );
};

export default ThemeClock;
