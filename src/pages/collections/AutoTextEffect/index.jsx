import { useState, useRef, useEffect } from 'react';

import styles from './style.module.scss';

const AutoTextEffect = () => {
  const txt = '看好了世界，台灣只示範一次，一個禮拜停電兩次!';
  const timer = useRef();
  const [speed, setSpeed] = useState(1);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (index + 1 > txt.length) {
        setIndex(1);
      } else {
        setIndex((preIndex) => preIndex + 1);
      }
    }, 1000 / speed);
    return () => {
      clearInterval(timer.current);
    };
  }, [index, speed]);

  return (
    <div className={styles.AutoTextEffect}>
      <h1>{txt.slice(0, index)}</h1>
      <div className={styles.control}>
        <label htmlFor="speed">speed:</label>
        <input
          id="speed"
          type="number"
          name="speed"
          value={speed}
          min="1"
          max="10"
          step="1"
          onChange={(e) => {
            setSpeed(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default AutoTextEffect;
