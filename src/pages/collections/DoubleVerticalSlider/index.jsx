import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

import styles from './style.module.scss';

const imgArray = [
  {
    key1: '1508768787810-6adc1f613514',
    key2: 'e27f6661df21ed17ab5355b28af8df4e',
    width: '1350',
    color: '#FD3555',
    h1: 'Nature flower',
    p: 'all in pink',
  },
  {
    key1: '1519981593452-666cf05569a9',
    key2: '90ed8055f06493290dad8da9584a13f7',
    width: '715',
    color: '#2A86BA',
    h1: 'Bluuue Sky',
    p: "with it's mountains",
  },
  {
    key1: '1486899430790-61dbf6f6d98b',
    key2: '8ecdee5d1b3ed78ff16053b0227874a2',
    width: '1002',
    color: '#252E33',
    h1: 'Lonely castle',
    p: 'in the wilderness',
  },
  {
    key1: '1510942201312-84e7962f6dbb',
    key2: 'da4ca7a78004349f1b63f257e50e4360',
    width: '1050',
    color: '#FFB866',
    h1: 'Flying eagle',
    p: 'in the sunset',
  },
];

const getImgPath = (key1, key2, width) =>
  `https://images.unsplash.com/photo-${key1}?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=${key2}&auto=format&fit=crop&w=${width}&q=80`;

const DoubleVerticalSlider = () => {
  const [clientH, setClientH] = useState(0);

  const [active, setActive] = useState(0);

  const container = useRef();

  const changeSlide = (direction) => {
    let newActive = active;
    if (direction === 'up') {
      newActive = newActive + 1;
      if (newActive > imgArray.length - 1) {
        newActive = 0;
      }
    } else if (direction === 'down') {
      newActive = newActive - 1;
      if (newActive < 0) {
        newActive = imgArray.length - 1;
      }
    }
    setClientH(container.current.clientHeight);
    setActive(newActive);
  };

  useEffect(() => {
    setClientH(container.current.clientHeight);
  }, []);

  return (
    <div className={styles.DoubleVerticalSlider}>
      <div className={styles['slider-container']} ref={container}>
        <div
          className={styles['left-slide']}
          style={{
            transform: `translateY(${active * clientH}px)`,
            top: `-${(imgArray.length - 1) * clientH}px`,
          }}
        >
          {imgArray.map(({ color, h1, p }, i) => {
            return (
              <div key={i} style={{ backgroundColor: color }}>
                <h1>{h1}</h1>
                <p>{p}</p>
              </div>
            );
          })}
        </div>
        <div
          className={styles['right-slide']}
          style={{ transform: `translateY(-${active * clientH}px)` }}
        >
          {imgArray.map(({ key1, key2, width }, i) => {
            return (
              <div
                key={i}
                style={{ backgroundImage: `url(${getImgPath(key1, key2, width)})` }}
              ></div>
            );
          })}
        </div>
        <div className={styles['action-buttons']}>
          <button
            className={styles['down-button']}
            onClick={() => {
              changeSlide('down');
            }}
          >
            <AiOutlineArrowDown />
          </button>
          <button
            className={styles['up-button']}
            onClick={() => {
              changeSlide('up');
            }}
          >
            <AiOutlineArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoubleVerticalSlider;
