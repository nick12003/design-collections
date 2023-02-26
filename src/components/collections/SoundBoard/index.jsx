import { createRef } from 'react';

import styles from './style.module.scss';

const soundUrl = 'https://50projects50days.com/projects/sound-board/sounds/';
const files = [
  { file: 'applause' },
  { file: 'boo' },
  { file: 'gasp' },
  { file: 'tada' },
  { file: 'victory' },
  { file: 'wrong' },
].map((file) => ({ ...file, ref: createRef() }));

const SoundBoard = () => {
  return (
    <div className={styles.SoundBoard}>
      {files.map(({ file, ref }, i) => (
        <audio key={i} src={`${soundUrl + file}.mp3`} ref={ref}></audio>
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
