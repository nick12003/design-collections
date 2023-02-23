import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const DragNDrop = () => {
  const [container, setContainer] = useState(0);
  const [dragIn, setDragIn] = useState(null);
  const [drag, setDrag] = useState(false);

  return (
    <div className={styles.DragNDrop}>
      {Array(5)
        .fill()
        .map((_, i) => {
          return (
            <div
              key={i}
              className={classNames(styles.empty, { [styles['hovered']]: dragIn === i })}
              onDragOver={(e) => {
                e.preventDefault();
                setDragIn(i);
              }}
              onDragEnter={(e) => {
                setDragIn(i);
              }}
              onDragLeave={(e) => {
                setDragIn(null);
              }}
              onDrop={(e) => {
                setContainer(i);
              }}
            >
              {i === container ? (
                <div
                  className={classNames(styles.fill, { [styles['hold']]: drag })}
                  draggable="true"
                  onDragStart={(e) => {
                    setDrag(true);
                  }}
                  onDragEnd={(e) => {
                    setDrag(false);
                    setDragIn(null);
                  }}
                ></div>
              ) : (
                ''
              )}
            </div>
          );
        })}
    </div>
  );
};

export default DragNDrop;
