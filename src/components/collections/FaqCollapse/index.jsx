import { useState } from 'react';
import { AiFillCaretDown, AiOutlineClose } from 'react-icons/ai';
import classNames from 'classnames';
import styles from './style.module.scss';

const questions = [
  {
    question: "Why shouldn't we trust atoms?",
    answer: 'They make up everything',
  },
  {
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows.',
  },
  {
    question: "What's the object-oriented way to become wealthy?",
    answer: 'Inheritance.',
  },
  {
    question: 'How many tickles does it take to tickle an octopus?',
    answer: 'Ten-tickles!',
  },
  {
    question: 'What is: 1 + 1?',
    answer: 'Depends on who are you asking.',
  },
  {
    question: 'where are you?',
    answer: 'here.',
  },
];

const FaqCard = ({ question, answer, df }) => {
  const [active, setActive] = useState(df);
  return (
    <>
      <div className={classNames(styles.faq, { [styles.active]: active })}>
        <h3 className={styles['faq-title']}>{question}</h3>
        <p className={styles['faq-text']}>{answer}</p>
        <button
          className={styles['faq-toggle']}
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? <AiOutlineClose /> : <AiFillCaretDown />}
        </button>
      </div>
    </>
  );
};

const FaqCollapse = () => {
  return (
    <div className={styles.FaqCollapse}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles['faq-container']}>
        {questions.map((item, i) => {
          return <FaqCard key={i} {...item}></FaqCard>;
        })}
      </div>
    </div>
  );
};

export default FaqCollapse;
