import { useState, useRef, useEffect } from 'react';

import styles from './style.module.scss';

const useRate = (value) => {
  const [rate, setRate] = useState(0);
  const mounted = useRef();
  const tm = useRef();
  const tmTwo = useRef();

  useEffect(() => {
    if (!mounted.current) {
      setRate(value);
      mounted.current = true;
    } else {
      if (rate > value) {
        if (tm.current) clearTimeout(tm.current);
        tmTwo.current = setTimeout(() => {
          setRate(rate - 1);
        }, 20);
      } else if (rate < value) {
        if (tmTwo.current) clearTimeout(tmTwo.current);
        tm.current = setTimeout(() => {
          setRate(rate + 1);
        }, 20);
      }
    }
  }, [value, rate]);
  return rate;
};

const BlurryLoading = () => {
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(100);
  const positiveP = useRate(positive);
  const negativeP = useRate(negative);
  useEffect(() => {
    if (positiveP < 100) setPositive(positiveP + 1);
  }, [positiveP]);
  useEffect(() => {
    if (negativeP > 0) setNegative(negativeP - 1);
  }, [negativeP]);
  return (
    <div className={styles.BlurryLoading}>
      <div className={styles.bg} style={{ filter: `blur(${negativeP / 10}px)` }}></div>
      <div className={styles['loading-text']}>{positiveP}%</div>
    </div>
  );
};

export default BlurryLoading;
