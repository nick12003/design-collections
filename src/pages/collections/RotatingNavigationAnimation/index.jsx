import { useState } from 'react';
import { FaTimes, FaBars, FaHome, FaUserAlt, FaEnvelope } from 'react-icons/fa';
import classNames from 'classnames';

import styles from './style.module.scss';

const RotatingNavigationAnimation = () => {
  const [rotate, setRotate] = useState(false);
  return (
    <div className={styles.RotatingNavigationAnimation}>
      <div className={styles['circle-container']}>
        <div className={classNames(styles.circle, { [styles.rotate]: rotate })}>
          <button
            className={styles.close}
            onClick={() => {
              setRotate(false);
            }}
          >
            <FaTimes />
          </button>
          <button
            className={styles.open}
            onClick={() => {
              setRotate(true);
            }}
          >
            <FaBars />
          </button>
        </div>
      </div>
      <div className={classNames(styles.container, { [styles['show-nav']]: rotate })}>
        <div className={styles.content}>
          <h1>Amazing Article</h1>
          <small>Florin Pop</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione
            dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore
            modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur,
            consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident
            natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem,
            molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos
            in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe
            voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem
            molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
          </p>

          <h3>My Dog</h3>
          <img
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80"
            alt="doggy"
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo,
            incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis
            magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima
            doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam
            ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint,
            neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <FaHome /> Home
          </li>
          <li>
            <FaUserAlt /> About
          </li>
          <li>
            <FaEnvelope /> Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default RotatingNavigationAnimation;
