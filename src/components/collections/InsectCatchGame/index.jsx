import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const useTimer = (isStart) => {
  const [sec, setSec] = useState(0);
  const timer = useRef();
  timer.current = () => {
    setSec(sec + 1);
  };

  useEffect(() => {
    if (isStart) {
      const id = setInterval(() => {
        timer.current();
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }
  }, [isStart]);

  return sec;
};

const insectTypes = [
  { name: 'Fly', img: 'fly/fly_PNG3946.png' },
  { name: 'Mosquito', img: 'mosquito/mosquito_PNG18175.png' },
  { name: 'Spider', img: 'spider/spider_PNG12.png' },
  { name: 'Roach', img: 'roach/roach_PNG12163.png' },
];

const timeFormat = (sec) => {
  let m = Math.floor(sec / 60);
  let s = sec - m * 60;

  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

const getRandomLocation = (areaDom) => {
  const { width, height } = areaDom.getBoundingClientRect();

  const x = Math.random() * (width - 100) + 50;
  const y = Math.random() * (height - 100) + 50;

  return { x, y };
};

const InsectCatchGame = () => {
  const [start, setStart] = useState(false);
  const [insect, setInsect] = useState('');
  const [insectImg, setInsectImg] = useState('');
  const [insects, setInsects] = useState([]);
  const [score, setScore] = useState(0);
  const second = useTimer(insect ? true : false);

  const container = useRef();
  const gameArea = useRef();

  const createInsect = () => {
    setInsects((preList) =>
      preList.concat(getRandomLocation(gameArea.current), getRandomLocation(gameArea.current))
    );
  };

  const deleteInsect = (index) => {
    setInsects((preList) =>
      preList.reduce((acc, current, currentIndex) => {
        if (index === currentIndex) return acc;
        return [...acc, current];
      }, [])
    );

    setTimeout(() => {
      createInsect();
    }, 500);
  };

  return (
    <div className={styles.InsectCatchGame} ref={container}>
      <div
        className={styles.screen}
        style={{ marginTop: start ? -container.current.clientHeight : 0 }}
      >
        <h1>Catch The Insect</h1>
        <button
          className={styles.btn}
          onClick={() => {
            setStart(true);
          }}
        >
          Play Game
        </button>
      </div>

      <div
        className={styles.screen}
        style={{ marginTop: insect ? -container.current.clientHeight : 0 }}
      >
        <h1>What is your "favorite" insect?</h1>
        <ul className={styles['insects-list']}>
          {insectTypes.map(({ name, img }, i) => {
            return (
              <li key={i}>
                <button
                  className={styles['choose-insect-btn']}
                  onClick={() => {
                    setInsect(name);
                    setInsectImg(`http://pngimg.com/uploads/${img}`);
                    createInsect();
                  }}
                >
                  <p>{name}</p>
                  <img src={`http://pngimg.com/uploads/${img}`} alt={name.toLowerCase()} />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={classNames(styles.screen, styles['game-container'])} ref={gameArea}>
        <h3 id="time" className={styles.time}>
          Time: {timeFormat(second)}
        </h3>
        <h3 id="score" className={styles.score}>
          Score: {score}
        </h3>
        <h5 className={classNames(styles.message, { [styles.visible]: score > 15 })}>
          Are you annnoyed yet? <br />
          You are playing an impossible game!!
        </h5>
        {insects.map(({ x, y }, i) => {
          return (
            <div
              key={i}
              className={styles.insect}
              style={{ top: `${y}px`, left: `${x}px` }}
              onClick={() => {
                setScore((preScore) => preScore + 1);
                deleteInsect(i);
              }}
            >
              <img
                src={insectImg}
                alt={insect.toLowerCase()}
                style={{ transform: `rotate(${Math.random() * 360}deg)` }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsectCatchGame;
