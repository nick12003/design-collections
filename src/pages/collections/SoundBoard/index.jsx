import { createRef } from 'react';

import styles from './style.module.scss';

const soundUrl = 'https://drive.google.com/uc?export=download&id=';
const files = [
  { file: 'applause', id: '18uCTT-VUf74lxnN75LV0k-8WEuVbqQXN' },
  { file: 'boo', id: '1WtMz0Oo1Cpexx6iwRxyTdRGG1kD3u26f' },
  { file: 'gasp', id: '1qDjGll9mWtSgXil9lT0Yd10gavC1G27u' },
  { file: 'tada', id: '1qCePcg7VcinF3Ks7tFOKrU3_nvEABkME' },
  { file: 'victory', id: '1arW_nhEs45TghI4dmzMXHuL9pIbvJ9Yh' },
  { file: 'wrong', id: '1Nltxj9D3Ep93PAKzxJeqP72G4GAe28ic' },
].map((file) => ({ ...file, ref: createRef() }));

const SoundBoard = () => {
  return (
    <div className={styles.SoundBoard}>
      {files.map(({ id, ref }) => (
        <audio key={id} src={`${soundUrl}${id}`} ref={ref}></audio>
      ))}
      <div>
        {files.map(({ file }) => (
          <button
            key={file}
            className={styles.btn}
            onClick={() => {
              files.forEach(({ ref }) => {
                ref.current.pause();
                ref.current.currentTime = 0;
              });
              files
                .filter((i) => {
                  return i.file === file;
                })[0]
                .ref.current.play();
            }}
          >
            {file}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SoundBoard;
