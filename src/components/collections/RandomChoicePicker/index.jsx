import { useState } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const RandomChoicePicker = () => {
  const [textarea, setTextarea] = useState('');
  const [disable, setDisable] = useState(false);
  const [tags, setTags] = useState([]);

  const startDrawing = () => {
    setDisable(true);
    const times = 30;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * tags.length);
      setTags((preTags) =>
        preTags.map((item, index) => (randomIndex === index ? { ...item, highlight: true } : item))
      );
      setTimeout(() => {
        setTags((preTags) =>
          preTags.map((item, index) =>
            randomIndex === index ? { ...item, highlight: false } : item
          )
        );
      }, 100);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * tags.length);
        setTags((preTags) =>
          preTags.map((item, index) =>
            randomIndex === index ? { ...item, highlight: true } : item
          )
        );
        setDisable(false);
        setTextarea('');
      }, 100);
    }, times * 100);
  };

  return (
    <div className={styles.RandomChoicePicker}>
      <div className={styles.container}>
        <h3>
          Enter all of the choices divided by a comma (','). <br /> Press enter when you're done
        </h3>
        <textarea
          placeholder="Enter choices here..."
          value={textarea}
          disabled={disable}
          onChange={(e) => {
            setTextarea(e.target.value);
            setTags(
              e.target.value
                .split(',')
                .filter((tag) => tag.trim() !== '')
                .map((tag) => ({ tag: tag.trim(), highlight: false }))
            );
          }}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              startDrawing();
            }
          }}
        ></textarea>
        <div>
          {tags.map(({ tag, highlight }, i) => (
            <span key={i} className={classNames(styles.tag, { [styles.highlight]: highlight })}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomChoicePicker;
