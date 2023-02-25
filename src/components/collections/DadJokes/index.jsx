import { useEffect, useState } from 'react';

import styles from './style.module.scss';

const DadJokes = () => {
  const [joke, setJoke] = useState('Joke goes here');

  async function generateJoke() {
    const res = await fetch('https://icanhazdadjoke.com', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const data = await res.json();
    setJoke(data.joke);
  }

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <div className={styles.DadJokes}>
      <div className={styles.container}>
        <h3>Don't Laugh Challenge</h3>
        <div className={styles.joke}>{joke}</div>
        <button
          className={styles.btn}
          onClick={() => {
            generateJoke();
          }}
        >
          Get Another Joke
        </button>
      </div>
    </div>
  );
};

export default DadJokes;
