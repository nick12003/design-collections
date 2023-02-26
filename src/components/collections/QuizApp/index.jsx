import { useState, useEffect } from 'react';

import styles from './style.module.scss';

const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const QuizApp = () => {
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState(null);

  const onChangeAnswer = (e) => {
    setCurrentAnswer(e.target.id);
  };

  const checkAnswer = () => {
    let score = 0;
    answers.forEach((a, i) => {
      if (a === quizData[i].correct) score = score + 1;
    });
    return `${score}/${quizData.length}`;
  };
  return (
    <div className={styles.QuizApp}>
      <div className={styles['quiz-container']}>
        {answers.length === quizData.length ? (
          <>
            <h2>You answered {checkAnswer()} questions correctly</h2>
            <button
              onClick={() => {
                setAnswers([]);
                setCurrentAnswer(null);
              }}
            >
              Reload
            </button>
          </>
        ) : (
          <>
            <div className={styles['quiz-header']}>
              <h2>{quizData[answers.length].question}</h2>
              <ul>
                <li>
                  <input
                    type="radio"
                    name="answer"
                    id="a"
                    className={styles.answer}
                    onChange={onChangeAnswer}
                    checked={currentAnswer === 'a'}
                  />
                  <label htmlFor="a">{quizData[answers.length].a}</label>
                </li>

                <li>
                  <input
                    type="radio"
                    name="answer"
                    id="b"
                    className={styles.answer}
                    onChange={onChangeAnswer}
                    checked={currentAnswer === 'b'}
                  />
                  <label htmlFor="b">{quizData[answers.length].b}</label>
                </li>

                <li>
                  <input
                    type="radio"
                    name="answer"
                    id="c"
                    className={styles.answer}
                    onChange={onChangeAnswer}
                    checked={currentAnswer === 'c'}
                  />
                  <label htmlFor="c">{quizData[answers.length].c}</label>
                </li>

                <li>
                  <input
                    type="radio"
                    name="answer"
                    id="d"
                    className={styles.answer}
                    onChange={onChangeAnswer}
                    checked={currentAnswer === 'd'}
                  />
                  <label htmlFor="d">{quizData[answers.length].d}</label>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setAnswers((preAnswers) => [...preAnswers, currentAnswer]);
                setCurrentAnswer(null);
              }}
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
