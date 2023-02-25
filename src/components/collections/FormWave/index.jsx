import styles from './style.module.scss';

const FormWave = () => {
  return (
    <div className={styles.FormWave}>
      <div className={styles.container}>
        <h1>Please Login</h1>
        <div>
          <div className={styles['form-control']}>
            <input type="text" required="" />
            <label>
              {'Email'.split('').map((letter, i) => {
                return (
                  <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
                    {letter}
                  </span>
                );
              })}
            </label>
          </div>

          <div className={styles['form-control']}>
            <input type="password" required="" />
            <label>
              {'Password'.split('').map((letter, i) => {
                return (
                  <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
                    {letter}
                  </span>
                );
              })}
            </label>
          </div>

          <button className={styles.btn}>Login</button>

          <p className={styles.text}>
            Don't have an account? <span className={styles.register}>Register</span>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormWave;
