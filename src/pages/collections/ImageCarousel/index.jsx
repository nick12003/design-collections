import { useState, useRef, useEffect } from 'react';

import styles from './style.module.scss';

const imgList = [
  { key: '1599394022918-6c2776530abb', width: '1458', alt: 'first-image' },
  { key: '1593642632559-0c6d3fc62b89', width: '1500', alt: 'second-image' },
  { key: '1599423300746-b62533397364', width: '1500', alt: 'third-image' },
  { key: '1599561046251-bfb9465b4c44', width: '1492', alt: 'fourth-image' },
];

const getImgPath = (key, width) =>
  `https://images.unsplash.com/photo-${key}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${width}&q=80`;

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const timer = useRef();

  const changePage = (isNext, current, max) => {
    if (isNext) {
      if (current === max - 1) {
        setIndex(0);
      } else {
        setIndex(current + 1);
      }
    } else {
      if (current === 0) {
        setIndex(max - 1);
      } else {
        setIndex(current - 1);
      }
    }
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      changePage(true, index, imgList.length);
    }, 2000);
    return () => {
      clearInterval(timer.current);
    };
  }, [index, imgList.length]);

  return (
    <div className={styles.ImageCarousel}>
      <div className={styles.carousel}>
        <div
          className={styles['image-container']}
          style={{ transform: `translateX(-${index * 500}px)` }}
        >
          {imgList.map(({ key, width, alt }, i) => {
            return <img key={i} src={getImgPath(key, width)} alt={alt} />;
          })}
        </div>
        <div className={styles['buttons-container']}>
          <button
            className={styles.btn}
            onClick={() => {
              changePage(false, index, imgList.length);
            }}
          >
            Prev
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              changePage(true, index, imgList.length);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
