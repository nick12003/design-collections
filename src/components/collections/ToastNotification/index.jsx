import { useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four'];
const types = ['info', 'success', 'error'];

const getRandomMessage = () => messages[Math.floor(Math.random() * messages.length)];

const getRandomType = () => types[Math.floor(Math.random() * types.length)];

const ToastNotification = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toasts.length) {
        setToasts((preToasts) =>
          preToasts.reduce((acc, cur, i) => (i === 0 ? acc : [...acc, cur]), [])
        );
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [toasts]);

  return (
    <div className={styles.ToastNotification}>
      <div className={styles.toasts}>
        {toasts.map(({ type, message }, i) => (
          <div key={i} className={classNames(styles.toast, styles[type])}>
            {message}
          </div>
        ))}
      </div>
      <button
        className={styles.btn}
        onClick={() => {
          setToasts((preToasts) => [
            ...preToasts,
            { type: getRandomType(), message: getRandomMessage() },
          ]);
        }}
      >
        Show Notification
      </button>
    </div>
  );
};

export default ToastNotification;
