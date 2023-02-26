import { useState } from 'react';

import styles from './style.module.scss';

const PasswordStrengthBackground = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className={styles.PasswordStrengthBackground}>
      <div
        className={styles.background}
        style={{ filter: `blur(${20 - password.length * 2}px)` }}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Image Password Strength</h1>
        <p className={styles['title-sub']}>Change the password to see the effect</p>
        <div className={styles.box}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="text"
            className={styles.input}
            id="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.box}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            className={styles.input}
            id="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className={styles.button}>Submit</button>
      </div>
    </div>
  );
};

export default PasswordStrengthBackground;
