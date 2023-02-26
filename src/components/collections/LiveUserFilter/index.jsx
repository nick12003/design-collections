import { useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const LiveUserFilter = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const res = await fetch('https://randomuser.me/api?results=50');
    const { results } = await res.json();
    setUsers(
      results.map(
        ({ picture: { large }, name: { first, last }, location: { city, country } }, i) => {
          return { large, first, last, city, country, hide: false };
        }
      )
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.LiveUserFilter}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h4 className={styles.title}>Live User Filter</h4>
          <small className={styles.subtitle}>Search by name and/or location</small>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setUsers(
                users.map((item) => {
                  const { large, first, last, city, country } = item;
                  return {
                    ...item,
                    hide: !(large + ' ' + first + ' ' + last + ' ' + city + ' ' + country)
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase()),
                  };
                })
              );
            }}
          />
        </header>

        <ul className={styles['user-list']}>
          {users.map(({ hide, large, first, last, city, country }, i) => (
            <li key={i} className={classNames({ [styles.hide]: hide })}>
              <img src={large} alt={first} />
              <div className={styles['user-info']}>
                <h4>{`${first} ${last}`}</h4>
                <p>{`${city}, ${country}`}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LiveUserFilter;
