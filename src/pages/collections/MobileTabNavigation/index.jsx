import { useState, cloneElement } from 'react';
import { MdHome, MdWork, MdBook, MdPeople } from 'react-icons/md';
import classNames from 'classnames';

import styles from './style.module.scss';

const imgList = [
  { key: '1480074568708-e7b720bb3f09', width: '1053', alt: 'home' },
  { key: '1454165804606-c3d57bc86b40', width: '1050', alt: 'work' },
  { key: '1471107340929-a87cd0f5b5f3', width: '1266', alt: 'blog' },
  { key: '1522202176988-66273c2fd55f', width: '1351', alt: 'about' },
];

const getImgUrl = (key, width) =>
  `https://images.unsplash.com/photo-${key}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${width}&q=80`;

const buttons = [
  { text: 'Home', icon: <MdHome /> },
  { text: 'Work', icon: <MdWork /> },
  { text: 'Blog', icon: <MdBook /> },
  { text: 'About Us', icon: <MdPeople /> },
];

const MobileTabNavigation = () => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.MobileTabNavigation}>
      <div className={styles.phone}>
        {imgList.map(({ key, width, alt }, i) => (
          <img
            key={i}
            src={getImgUrl(key, width)}
            alt={alt}
            className={classNames(styles.content, { [styles.show]: active === i })}
          />
        ))}
        <nav>
          <ul>
            {buttons.map(({ text, icon }, i) => (
              <li
                key={i}
                className={classNames({ [styles.active]: active === i })}
                onClick={() => {
                  setActive(i);
                }}
              >
                {cloneElement(icon, { className: styles.icon })}
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileTabNavigation;
