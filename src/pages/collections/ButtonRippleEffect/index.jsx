import { useState } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const ButtonRippleEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const Ripple = (x, y) => {
    setPosition({ x, y });
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  return (
    <div className={styles.ButtonRippleEffect}>
      <div
        className={styles.button}
        onClick={(e) => {
          Ripple(e.clientX - e.target.offsetLeft, e.clientY - e.target.offsetTop);
        }}
      >
        Click Me
        <span
          className={classNames({
            [styles.circle]: show,
          })}
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}
        ></span>
      </div>
    </div>
  );
};

export default ButtonRippleEffect;
