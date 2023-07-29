import { useState, createRef } from 'react';

import styles from './style.module.scss';

const VerifyAccountUi = () => {
  const [codes, setCodes] = useState(
    Array(6)
      .fill()
      .map(() => ({ value: '', ref: createRef() }))
  );

  return (
    <div className={styles.VerifyAccountUi}>
      <div className={styles.container}>
        <h2>Verify Your Account</h2>
        <p>
          We emailed you the six digit code to cool_guy@email.com <br /> Enter the code below to
          confirm your email address.
        </p>
        <div className={styles['code-container']}>
          {codes.map(({ value, ref }, i) => (
            <input
              key={i}
              ref={ref}
              type="number"
              className={styles.code}
              placeholder="0"
              min="0"
              max="9"
              value={value}
              required
              onChange={({ target: { value: inputValue } }) => {
                if (inputValue.length > 0) {
                  const finalValue = inputValue[inputValue.length - 1];
                  if (parseInt(finalValue) >= 0 && parseInt(finalValue) <= 9) {
                    setCodes((preCodes) =>
                      preCodes.map((code, index) =>
                        i === index ? { ...code, value: finalValue } : code
                      )
                    );
                    if (i < codes.length - 1) {
                      codes[i + 1].ref.current.focus();
                    }
                  }
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Backspace') {
                  setCodes((preCodes) =>
                    preCodes.map((code, index) => (i === index ? { ...code, value: '' } : code))
                  );
                  if (i > 0) {
                    codes[i - 1].ref.current.focus();
                  }
                }
              }}
            />
          ))}
        </div>
        <small className={styles.info}>
          This is design only. We didn't actually send you an email as we don't have your email,
          right?
        </small>
      </div>
    </div>
  );
};

export default VerifyAccountUi;
