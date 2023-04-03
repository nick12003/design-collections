import { useState, useEffect } from 'react';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineCamera,
  AiOutlineSetting,
} from 'react-icons/ai';
import classNames from 'classnames';
import styles from './style.module.scss';

const Items = [
  {
    title: 'Home',
    Icon: AiOutlineHome,
  },
  {
    title: 'Profile',
    Icon: AiOutlineUser,
  },
  {
    title: 'Message',
    Icon: AiOutlineMessage,
  },
  {
    title: 'Photos',
    Icon: AiOutlineCamera,
  },
  {
    title: 'Settings',
    Icon: AiOutlineSetting,
  },
];

const NavigationMenuIndicator = () => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.NavigationMenuIndicator}>
      <div className={styles.navigation}>
        <ul>
          {Items.map(({ title, Icon }, i) => {
            return (
              <li
                key={title}
                className={classNames(styles.list, {
                  [styles.active]: i === active,
                })}
                onClick={() => setActive(i)}
              >
                <a href="#">
                  <span className={styles.icon}>
                    <Icon />
                  </span>
                  <span className={styles.text}>{title}</span>
                </a>
              </li>
            );
          })}
          <div
            className={styles.indicator}
            style={{
              transform: `translateX(${70 * active}px)`,
            }}
          />
        </ul>
      </div>
    </div>
  );
};

export default NavigationMenuIndicator;
