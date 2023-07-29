import { useState, useRef, useEffect } from 'react';
import { FaClipboard } from 'react-icons/fa';
import classNames from 'classnames';

import styles from './style.module.scss';

const randomFunc = {
  lowercase: () => String.fromCharCode(Math.floor(Math.random() * 26) + 97),
  uppercase: () => String.fromCharCode(Math.floor(Math.random() * 26) + 65),
  numbers: () => String.fromCharCode(Math.floor(Math.random() * 10) + 48),
  symbols: () => {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  },
};

const PasswordGenerator = () => {
  const [rules, setValue] = useState({
    length: 20,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [password, setPassword] = useState('');

  const onRulesChange = ({ target: { name, type, checked, value } }) => {
    setValue((preRules) => ({ ...preRules, [name]: type === 'checkbox' ? checked : value }));
  };

  const generator = () => {
    const typesCount = rules.lowercase + rules.uppercase + rules.numbers + rules.symbols;
    const typesArr = [
      { type: 'lowercase', check: rules.lowercase },
      { type: 'uppercase', check: rules.uppercase },
      { type: 'numbers', check: rules.numbers },
      { type: 'symbols', check: rules.symbols },
    ];

    if (typesCount === 0) {
      return;
    }
    let generatedPassword = '';
    for (let i = 0; i < rules.length; i += typesCount) {
      generatedPassword = typesArr.reduce(
        (acc, { type, check }) => acc + (check ? randomFunc[type]() : ''),
        generatedPassword
      );
    }

    setPassword(generatedPassword.slice(0, rules.length));
  };
  return (
    <div className={styles.PasswordGenerator}>
      <div className={styles.container}>
        <h2>Password Generator</h2>
        <div className={styles['result-container']}>
          <span className={styles.result}>{password}</span>
          <button
            className={styles.btn}
            onClick={() => {
              navigator.clipboard.writeText(password);
            }}
          >
            <FaClipboard />
          </button>
        </div>
        <div className={styles.settings}>
          <div className={styles.setting}>
            <label>Password Length</label>
            <input
              type="number"
              name="length"
              min="4"
              max="20"
              value={rules.length}
              onChange={onRulesChange}
            />
          </div>
          <div className={styles.setting}>
            <label>Include uppercase letters</label>
            <input
              type="checkbox"
              name="uppercase"
              checked={rules.uppercase}
              onChange={onRulesChange}
            />
          </div>
          <div className={styles.setting}>
            <label>Include lowercase letters</label>
            <input
              type="checkbox"
              name="lowercase"
              checked={rules.lowercase}
              onChange={onRulesChange}
            />
          </div>
          <div className={styles.setting}>
            <label>Include numbers</label>
            <input
              type="checkbox"
              name="numbers"
              checked={rules.numbers}
              onChange={onRulesChange}
            />
          </div>
          <div className={styles.setting}>
            <label>Include symbols</label>
            <input
              type="checkbox"
              name="symbols"
              checked={rules.symbols}
              onChange={onRulesChange}
            />
          </div>
        </div>
        <button className={classNames(styles.btn, styles['btn-large'])} onClick={generator}>
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
