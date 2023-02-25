import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import classNames from 'classnames';

import styles from './style.module.scss';

const MobileNavigation = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.MobileNavigation}>
      <button
        className={classNames(styles['nav-btn'], styles['open-btn'])}
        onClick={() => {
          setActive(true);
        }}
      >
        <FaBars />
      </button>

      <img
        src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
        alt="Logo"
        className={styles.logo}
      />

      <p className={styles.text}>Mobile Navigation</p>

      <div className={classNames(styles.nav, styles['nav-black'], { [styles.visible]: active })}>
        <div className={classNames(styles.nav, styles['nav-red'], { [styles.visible]: active })}>
          <div
            className={classNames(styles.nav, styles['nav-white'], { [styles.visible]: active })}
          >
            <button
              className={classNames(styles['nav-btn'], styles['close-btn'])}
              onClick={() => {
                setActive(false);
              }}
            >
              <FaTimes />
            </button>

            <img
              src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
              alt="Logo"
              className={styles.logo}
            />

            <ul className={styles.list}>
              <li>
                <a to="#">Teams</a>
              </li>
              <li>
                <a to="#">Locations</a>
              </li>
              <li>
                <a to="#">Life at Netflix</a>
              </li>
              <li>
                <ul>
                  <li>
                    <a to="#">Netflix culture memo</a>
                  </li>
                  <li>
                    <a to="#">Work life balance</a>
                  </li>
                  <li>
                    <a to="#">Inclusion & diversity</a>
                  </li>
                  <li>
                    <a to="#">Blog</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
