import { useState } from 'react';
import classNames from 'classnames';

const ButtonRippleEffect = () => {
  const [circleTop, setCircleTop] = useState(0);
  const [circleLeft, setCircleLeft] = useState(0);
  const [circle, setCircle] = useState(false);

  const Ripple = () => {
    setCircle(true);
    setTimeout(() => {
      setCircle(false);
    }, 500);
  };

  return (
    <div className="h-full flex items-center justify-center bg-black relative">
      <button
        className=" bg-purple-800 text-white border-[1px] border-solid border-purple-800 uppercase text-sm tracking-[2px] px-[30px] py-[20px] mx-[10px] my-0 cursor-pointer relative  overflow-hidden"
        onClick={(e) => {
          setCircleLeft(e.clientX - e.target.offsetLeft);
          setCircleTop(e.clientY - 80 - e.target.offsetTop);
          Ripple();
        }}
      >
        Click Me
        <span
          className={classNames({
            'absolute bg-white w-[100px] h-[100px] rounded-[50%] -translate-x-1/2 -translate-y-1/2 scale-0 animate-ButtonRippleEffect_scale':
              circle,
          })}
          style={{
            top: `${circleTop}px`,
            left: `${circleLeft}px`,
          }}
        ></span>
      </button>
    </div>
  );
};

export default ButtonRippleEffect;
