import React, { useState, useCallback } from 'react';

import styles from './style.module.scss';

const buttons = [
  { text: '/' },
  { text: '*' },
  { text: '7' },
  { text: '8' },
  { text: '9' },
  { text: '-' },
  { text: '4' },
  { text: '5' },
  { text: '6' },
  { text: '+', className: styles.plus },
  { text: '1' },
  { text: '2' },
  { text: '3' },
  { text: '0' },
  { text: '00' },
  { text: '.' },
  { text: '=', className: styles.equal },
];

const Calculator = () => {
  const [value, setValue] = useState('');

  const clear = () => setValue('');

  const handleClick = useCallback(
    (input) => {
      const isLastSymbol = ['/', '*', '+', '-', '.'].includes(value.charAt(value.length - 1));

      if (input === '=') {
        if (isLastSymbol) {
          return;
        }
        setValue((pre) => eval(pre)?.toString() ?? '');
        return;
      }

      if (input === '0' && value === '0') {
        return;
      }

      if (input === '.' && value.includes('.')) {
        return;
      }

      if (
        input !== '.' &&
        value.charAt(value.length - 1) === '0' &&
        ['/', '*', '+', '-'].includes(value.charAt(value.length - 2))
      ) {
        return;
      }

      if (['/', '*', '00'].includes(input) && !value) {
        return;
      }

      if (['/', '*', '+', '-', '.', '00'].includes(input) && isLastSymbol) {
        return;
      }

      setValue((pre) => `${pre}${input}`);
    },
    [value]
  );

  return (
    <div className={styles.Calculator}>
      <div className={styles.buttons}>
        <h2 className={styles.value}>{value}</h2>
        <div className={styles.clear} onClick={clear}>
          Clear
        </div>
        {buttons.map(({ text, className }, i) => (
          <div key={i} className={className} onClick={() => handleClick(text)}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
