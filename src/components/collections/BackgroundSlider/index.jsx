import { useState } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const getImgPath = (key, size) => {
  return `https://images.unsplash.com/photo-${key}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${size}&q=80`;
};
const imgArray = [
  { key: '1549880338-65ddcdfd017b', size: '2100' },
  { key: '1511593358241-7eea1f3c84e5', size: '1934' },
  { key: '1495467033336-2effd8753d51', size: '2100' },
  { key: '1522735338363-cc7313be0ae0', size: '2689' },
  { key: '1559087867-ce4c91325525', size: '2100' },
];

/**
 * 待處理: 聚焦與背後背景圖沒有對齊
 */

const BackgroundSlider = () => {
  const [img, setImg] = useState(0);
  return (
    <div
      className={styles.BackgroundSlider}
      style={{ backgroundImage: `url('${getImgPath(imgArray[img].key, imgArray[img].size)}')` }}
    >
      <div className={styles['slider-container']}>
        {imgArray.map(({ key, size }, i) => (
          <div
            key={i}
            className={classNames(styles.slide, { [styles.active]: i === img })}
            style={{ backgroundImage: `url('${getImgPath(key, size)}')` }}
          ></div>
        ))}
        <button
          className={classNames(styles.arrow, styles.left)}
          onClick={() => {
            setImg(img - 1 < 0 ? imgArray.length - 1 : img - 1);
          }}
        >
          &lt;
        </button>

        <button
          className={classNames(styles.arrow, styles.right)}
          onClick={() => {
            setImg(img + 1 > imgArray.length - 1 ? 0 : img + 1);
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BackgroundSlider;
