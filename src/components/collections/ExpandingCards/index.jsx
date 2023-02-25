import { useState } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';

const photoList = [
  { title: 'Explore The World', backgroundUrl: '1558979158-65a1eaa08691?ixlib' },
  { title: 'Wild Forest', backgroundUrl: '1572276596237-5db2c3e16c5d?ixlib' },
  { title: 'Sunny Beach', backgroundUrl: '1507525428034-b723cf961d3e?ixlib' },
  { title: 'City on Winter', backgroundUrl: '1551009175-8a68da93d5f9?ixlib' },
  { title: 'Mountains - Clouds', backgroundUrl: '1549880338-65ddcdfd017b?ixlib' },
];

const Image = ({ title, backgroundUrl, active, onClick }) => {
  return (
    <div
      className={classNames(styles.panel, { [styles.active]: active })}
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-${backgroundUrl}=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
      }}
      onClick={onClick}
    >
      <h3>{title}</h3>
    </div>
  );
};

const ExpandingCards = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.ExpandingCards}>
      <div className={styles.container}>
        {photoList.map((item, i) => {
          return (
            <Image
              key={i}
              active={active === i}
              {...item}
              onClick={() => {
                setActive(i);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExpandingCards;
