import { useState, useRef, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import classNames from 'classnames';

import styles from './style.module.scss';

const HiddenSearchWidget = () => {
  const [stretch, setStretch] = useState(false);
  const input = useRef();

  useEffect(() => {
    if (stretch) input.current.focus();
  }, [stretch]);

  return (
    <div className={styles.HiddenSearchWidget}>
      <div className={classNames(styles.search, { [styles.active]: stretch })}>
        <input type="text" className={styles.input} placeholder="Search..." ref={input} />
        <button
          className={styles.btn}
          onClick={() => {
            setStretch(!stretch);
          }}
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default HiddenSearchWidget;
