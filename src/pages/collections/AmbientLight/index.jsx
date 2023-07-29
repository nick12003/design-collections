import styles from './style.module.scss';

const AmbientLight = () => {
  return (
    <div className={styles.AmbientLight}>
      <div className={styles.cube}>
        <div className={styles.top}></div>
        <div>
          <span style={{ '--i': 0 }}></span>
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span>
        </div>
      </div>
    </div>
  );
};

export default AmbientLight;
