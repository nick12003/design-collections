import { useState, useEffect, useCallback } from 'react';
import { AiFillFacebook, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';

import styles from './style.module.scss';

const IncrementingCounter = () => {
  const [twitter, setTwitter] = useState(0);
  const [youTube, setYouTube] = useState(0);
  const [facebook, setFacebook] = useState(0);

  const timer = useCallback((v, target, handle) => {
    let increment = target / 500;
    if (v < target) {
      handle(v + increment);
      setTimeout(() => {
        timer(v + increment, target, handle);
      }, 1);
    } else {
      handle(target);
    }
  }, []);

  useEffect(() => {
    timer(0, 12000, setTwitter);
    timer(0, 5000, setYouTube);
    timer(0, 7500, setFacebook);
  }, [timer]);

  return (
    <div className={styles.IncrementingCounter}>
      <div className={styles['counter-container']}>
        <AiOutlineTwitter />
        <div className={styles.counter} data-target="12000">
          {twitter}
        </div>
        <span>Twitter Followers</span>
      </div>

      <div className={styles['counter-container']}>
        <AiFillYoutube />
        <div className={styles.counter} data-target="5000">
          {youTube}
        </div>
        <span>YouTube Subscribers</span>
      </div>
      <div className={styles['counter-container']}>
        <AiFillFacebook />
        <div className={styles.counter} data-target="7500">
          {facebook}
        </div>
        <span>Facebook Fans</span>
      </div>
    </div>
  );
};

export default IncrementingCounter;
