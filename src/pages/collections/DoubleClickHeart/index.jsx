import React, { useState } from 'react';
import classNames from 'classnames';
import { AiFillHeart } from 'react-icons/ai';

import styles from './style.module.scss';

const DoubleClickHeart = () => {
  const [count, setCount] = useState(0);
  const [heartTop, setHeartTop] = useState(0);
  const [heartLeft, setHeartLeft] = useState(0);
  const [heart, setHeart] = useState(false);

  const beat = () => {
    setHeart(true);
    setTimeout(() => {
      setHeart(false);
    }, 500);
  };

  return (
    <div className={styles.DoubleClickHeart}>
      <h3>
        Double click on the image to{' '}
        <AiFillHeart className={classNames('fas inline-block', styles['fa-heart'])} /> it
      </h3>
      <small>
        You liked it <span id="times">{count}</span> times
      </small>

      <div
        className={styles.loveMe}
        onDoubleClick={(e) => {
          setCount(count + 1);
          setHeartLeft(e.clientX - e.target.offsetLeft);
          setHeartTop(e.clientY - 220 - e.target.offsetTop);
          beat();
        }}
      >
        <AiFillHeart
          className={classNames('fas inline-block', { [styles['fa-heart']]: heart })}
          style={{
            top: `${heartTop}px`,
            left: `${heartLeft}px`,
          }}
        />
      </div>
    </div>
  );
};

export default DoubleClickHeart;
