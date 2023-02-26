import { useState, useEffect, useRef, createRef } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const useRWD = () => {
  const [device, setDevice] = useState('mobile');
  const handleRWD = () => {
    if (window.innerWidth > 768) setDevice('PC');
    else if (window.innerWidth > 576) setDevice('tablet');
    else setDevice('mobile');
  };
  useEffect(() => {
    window.addEventListener('resize', handleRWD);
    handleRWD();
    return () => {
      window.removeEventListener('resize', handleRWD);
    };
  }, []);
  return device;
};

const ScrollAnimation = () => {
  const device = useRWD();
  const bodyRef = useRef();
  const [boxes, setBoxes] = useState(
    Array(10)
      .fill()
      .map(() => createRef())
  );
  const [getting, setGetting] = useState(false);
  useEffect(() => {
    const body = bodyRef.current;
    const checkBoxes = () => {
      let ch = body.clientHeight;
      const triggerBottom = ch + 80 - (device === 'mobile' ? 100 : 200);
      boxes.forEach(({ current: box }, i) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          box.classList.add(styles.show);
        } else {
          box.classList.remove(styles.show);
        }
      });
      let st = body.scrollTop;
      let sh = body.scrollHeight;
      if (st > sh - ch - 100 && !getting) {
        setGetting(true);
        setTimeout(() => {
          setBoxes((preBoxes) => [
            ...preBoxes,
            ...Array(5)
              .fill()
              .map(() => createRef()),
          ]);
          setGetting(false);
        }, 1);
      }
    };
    checkBoxes();

    body.addEventListener('scroll', checkBoxes);
    return () => {
      body.removeEventListener('scroll', checkBoxes);
    };
  }, [device, boxes, getting]);
  return (
    <div className={styles.ScrollAnimation} ref={bodyRef}>
      <h1>Scroll to see the animation {device}</h1>
      {boxes.map((current, i) => (
        <div key={i} className={classNames(styles.box, styles.show)} ref={current}>
          <h2>Content</h2>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
