import { useState } from 'react';
import classNames from 'classnames';

/**
 * 待處理: 數字切換時閃爍，推測goIn切換goOut時render發生問題
 */

const AnimatedCountdown = () => {
  const [finish, setFinish] = useState(true);
  const [numbers, setNumbers] = useState(Array(4).fill(''));

  const setAnimate = (index, type) => {
    let items = [...numbers];
    items[index] = type;
    setNumbers(items);
  };
  const start = (i) => {
    if (i < 0) {
      setFinish(true);
      return;
    }
    setFinish(false);
    setAnimate(i, 'in');
    setTimeout(() => {
      start(i - 1);
    }, 1000);
  };

  return (
    <div className="h-full flex items-center justify-center font-sans">
      <div
        className={classNames(
          'fixed top-1/2 left-1/2 text-center translate-x-[-50%] translate-y-[-50%]',
          { '-translate-y-1/2 -translate-x-1/2 scale-0 animate-AnimatedCountdown_Hide': finish }
        )}
      >
        <div className=" text-[#3498db] text-[50px] relative overflow-hidden w-[250px] h-[50px]">
          {numbers.map((num, i) => (
            <span
              key={i}
              className={classNames(
                'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rotate-[120deg] origin-bottom',
                {
                  'animate-AnimatedCountdown_goIn': num === 'in',
                  'animate-AnimatedCountdown_goOut': num === 'out',
                }
              )}
              onAnimationEnd={(e) => {
                if (e.animationName === 'AnimatedCountdown_goIn') {
                  setAnimate(i, 'out');
                }
              }}
            >
              {i}
            </span>
          ))}
        </div>
        <div className="uppercase m-2 text-xl">Get Ready</div>
      </div>
      <div
        className={classNames(
          'fixed top-1/2 left-1/2 text-center -translate-y-1/2 -translate-x-1/2 scale-0',
          {
            '-translate-y-1/2 -translate-x-1/2 scale-100 animate-AnimatedCountdown_Show': finish,
          }
        )}
      >
        <div className="text-3xl font-black">GO</div>
        <button
          className="border-solid border-2 border-green-400 rounded-lg p-1 text-xl hover:bg-green-400 hover:text-white"
          onClick={() => {
            start(numbers.length - 1);
          }}
        >
          Replay
        </button>
      </div>
    </div>
  );
};

export default AnimatedCountdown;
