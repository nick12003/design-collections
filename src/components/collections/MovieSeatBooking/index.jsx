import { useState } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const initSeats = Array(6)
  .fill()
  .map(() =>
    Array(8)
      .fill()
      .map(() => Math.floor(Math.random() * 10) === 0)
  );

const Seat = ({ row, col, occupied, ticketHandle }) => {
  const [book, setBook] = useState(false);
  return (
    <div
      key={col}
      className={classNames(styles.seat, { [styles.occupied]: occupied, [styles.selected]: book })}
      onClick={() => {
        if (occupied) return;
        ticketHandle(book ? 'return' : 'book', { row, col });
        setBook(!book);
      }}
    ></div>
  );
};

const MovieSeatBooking = () => {
  const [tickets, setTickets] = useState([]);

  const ticketHandle = (type, seat) => {
    if (type === 'book') {
      setTickets((preTickets) => [...preTickets, seat]);
    }

    if (type === 'return') {
      const { row: Row, col: Col } = seat;
      setTickets((preTickets) =>
        preTickets.reduce(
          (acc, { row, col }) => (row === Row && col === Col ? acc : [...acc, { row, col }]),
          []
        )
      );
    }
  };

  return (
    <div className={styles.MovieSeatBooking}>
      <div className={styles.movieName}>復仇者聯盟：終局之戰</div>

      <ul className={styles.showcase}>
        <li>
          <div className={styles.seat}></div>
          <small>可選</small>
        </li>
        <li>
          <div className={classNames(styles.seat, styles.selected)}></div>
          <small>已選</small>
        </li>
        <li>
          <div className={classNames(styles.seat, styles.occupied)}></div>
          <small>不可選</small>
        </li>
      </ul>

      <div className={styles.container}>
        <div className={styles.screen}></div>
        {initSeats.map((_, i) => (
          <div key={i} className={styles.row}>
            {initSeats[i].map((col, j) => (
              <Seat key={j} row={i} col={j} occupied={col} ticketHandle={ticketHandle} />
            ))}
          </div>
        ))}
      </div>
      <div className={styles.price}>
        您一共訂購 <span>{tickets.length}</span> 張票，總共是 <span>{tickets.length * 220}</span> 元
      </div>
    </div>
  );
};

export default MovieSeatBooking;
