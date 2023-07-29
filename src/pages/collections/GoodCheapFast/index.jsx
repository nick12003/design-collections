import { useState } from 'react';

import styles from './style.module.scss';

const GoodCheapFast = () => {
  const [value, setValue] = useState([
    {
      id: 'Good',
      check: false,
    },
    {
      id: 'Cheap',
      check: false,
    },
    {
      id: 'Fast',
      check: false,
    },
  ]);

  const inputHandle = (e) => {
    let items = [...value];
    items.forEach(({ id }, i) => {
      if (id === e.target.name) items[i].check = e.target.checked;
    });
    setValue(items);
  };
  return (
    <div className={styles.GoodCheapFast}>
      <h2>How do you want your project to be?</h2>
      {value.map(({ id, check }, i) => {
        return (
          <div key={i} className={styles['toggle-container']}>
            <input
              type="checkbox"
              checked={check}
              name={id}
              id={id}
              className={styles.toggle}
              onChange={inputHandle}
            />
            <label htmlFor={id} className={styles.label}>
              <div className={styles.ball}></div>
            </label>
            <span>{id}</span>
          </div>
        );
      })}
    </div>
  );
};

export default GoodCheapFast;
