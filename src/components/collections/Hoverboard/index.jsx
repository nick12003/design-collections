import { useState } from 'react';

import styles from './style.module.scss';

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * 待處理: 光點未消除
 */

const Hoverboard = () => {
  const [squares, setSquares] = useState(Array(500).fill());
  return (
    <div className={styles.Hoverboard}>
      <div className={styles.container}>
        {squares.map((square, i) => {
          return (
            <div
              key={i}
              className={styles.square}
              style={
                square
                  ? {
                      backgroundColor: getRandomColor(),
                    }
                  : {}
              }
              onMouseOver={(e) => {
                setSquares((preList) => preList.map((item, j) => (i === j ? true : item)));
              }}
              onMouseOut={(e) => {
                setSquares((preList) => preList.map((item, j) => (i === j ? false : item)));
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Hoverboard;
