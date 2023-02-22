import { useState, useRef, useEffect } from 'react';

const AutoTextEffect = () => {
  const txt = '看好了世界，台灣只示範一次，一個禮拜停電兩次!';
  const timer = useRef();
  const [speed, setSpeed] = useState(1);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (index + 1 > txt.length) {
        setIndex(1);
      } else {
        setIndex(index + 1);
      }
    }, 1000 / speed);
    return () => {
      clearInterval(timer.current);
    };
  }, [index, speed]);

  return (
    <div className="h-full bg-[darksalmon] flex flex-col items-center justify-center overflow-hidden text-lg">
      <div className="text-3xl font-black">{txt.slice(0, index)}</div>
      <div className="absolute bottom-[20px] bg-black/10 px-[20px] py-[10px]">
        <label htmlFor="speed">speed:</label>
        <input
          id="speed"
          className="bg-[darksalmon] w-[50px] p-[5px] text-center"
          type="number"
          name="speed"
          value={speed}
          min="1"
          max="10"
          step="1"
          onChange={(e) => {
            setSpeed(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default AutoTextEffect;
