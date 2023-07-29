import { useState, useEffect } from 'react';

import styles from './style.module.scss';

const EventKeyCodes = () => {
  const [keyDown, setKeyDown] = useState(false);
  const [key, setKey] = useState('');
  const [keyCode, setKeyCode] = useState('');
  const [code, setCode] = useState('');
  const onKeyDown = (e) => {
    setKeyDown(true);
    setKey(e.key);
    setKeyCode(e.keyCode);
    setCode(e.code);
  };
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);
  return (
    <div className={styles.EventKeyCodes}>
      <div id="insert">
        {!keyDown ? (
          <div className={styles.key}>Press any key to get the keyCode</div>
        ) : (
          <>
            <div className={styles.key}>
              {key}
              <small>event.key</small>
            </div>
            <div className={styles.key}>
              {keyCode}
              <small>event.keyCode</small>
            </div>
            <div className={styles.key}>
              {code}
              <small>event.code</small>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EventKeyCodes;
