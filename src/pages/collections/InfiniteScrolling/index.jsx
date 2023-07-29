import React, { useState, useRef, useCallback } from 'react';
import styles from './style.module.scss';

const getRandomImgUrl = () =>
  `https://source.unsplash.com/random/${Math.floor(Math.random() * 10) + 300}x${
    Math.floor(Math.random() * 10) + 300
  }`;

const InfiniteScrolling = () => {
  const [imgArray, setImgArray] = useState(
    Array(20)
      .fill()
      .map((_, i) => ({ id: i, imageUrl: getRandomImgUrl() }))
  );

  const observer = useRef();

  const lastElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setImgArray((preImgArray) => [
          ...preImgArray,
          ...Array(20)
            .fill()
            .map((_, i) => ({ id: i + preImgArray.length, imageUrl: getRandomImgUrl() })),
        ]);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    <div className={styles.InfiniteScrolling}>
      <div className={styles.container}>
        {imgArray.map(({ id, imageUrl }) => (
          <img ref={lastElementRef} key={id} src={imageUrl} alt="" />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrolling;
