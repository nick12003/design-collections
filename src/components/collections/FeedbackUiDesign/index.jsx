import { useState } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';

const option = [
  { img: '187150', text: 'Unhappy' },
  { img: '187136', text: 'Neutral' },
  { img: '187133', text: 'Satisfied' },
];

const FeedbackUiDesign = () => {
  const [active, setActive] = useState(2);
  const [send, setSend] = useState(false);
  return (
    <div className={styles.FeedbackUiDesign}>
      <div id="panel" className={styles['panel-container']}>
        {send ? (
          <>
            <strong>Thank You!</strong>
            <br />
            <strong>Feedback: {option[active].text}</strong>
            <p>We'll use your feedback to improve our customer support</p>
          </>
        ) : (
          <>
            <strong>
              How satisfied are you with our <br /> customer support performance?
            </strong>
            <div className={styles['ratings-container']}>
              {option.map(({ img, text, icon }, i) => {
                return (
                  <div
                    key={i}
                    className={classNames(styles.rating, { [styles.active]: active === i })}
                    onClick={() => {
                      setActive(i);
                    }}
                  >
                    <small>{text}</small>
                  </div>
                );
              })}
            </div>
            <button
              className={styles.btn}
              onClick={() => {
                setSend(true);
              }}
            >
              Send Review
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FeedbackUiDesign;
