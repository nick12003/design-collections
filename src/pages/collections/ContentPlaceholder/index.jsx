import classNames from 'classnames';

import styles from './style.module.scss';

const ContentPlaceholder = () => {
  return (
    <div className={styles.ContentPlaceholder}>
      <div className={styles.card}>
        <div className={classNames(styles['card-header'], styles.bgAnimated)}></div>
        <div className={styles['card-content']}>
          <h3
            className={classNames(styles['card-title'], styles.bgAnimated, styles.txtAnimated)}
          ></h3>
          <p className={styles['card-excerpt']}>
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
      </div>
    </div>
  );
};

export default ContentPlaceholder;
