import { useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const ContentPlaceholder = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={styles.ContentPlaceholder}>
      <div className={styles.card}>
        {loading ? (
          <>
            <div className={classNames(styles['card-header'], styles.bgAnimated)}></div>
            <div className={styles['card-content']}>
              <h3
                className={classNames(styles['card-title'], styles.bgAnimated, styles.txtAnimated)}
              ></h3>
              <p className={styles['card-excerpt']}>
                <span className={classNames(styles.bgAnimated, styles.txtAnimated)}></span>
                <span className={classNames(styles.bgAnimated, styles.txtAnimated)}></span>
                <span className={classNames(styles.bgAnimated, styles.txtAnimated)}></span>
              </p>
              <div className={styles.author}>
                <div className={classNames(styles['profile-img'], styles.bgAnimated)}></div>
                <div className={styles['author-info']}>
                  <strong className={classNames(styles.bgAnimated, styles.txtAnimated)}></strong>
                  <small className={classNames(styles.bgAnimated, styles.txtAnimated)}></small>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles['card-header']}>
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                alt=""
              />
            </div>
            <div className={styles['card-content']}>
              <h3 className={styles['card-title']}>Lorem ipsum dolor sit amet</h3>
              <p className={styles['card-excerpt']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis
              </p>
              <div className={styles.author}>
                <div className={styles['profile-img']}>
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
                </div>
                <div className={styles['author-info']}>
                  <strong>John Doe</strong>
                  <small>Oct 08, 2020</small>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentPlaceholder;
