import { useState, useRef, useEffect } from 'react';

import styles from './style.module.scss';

const checkSize = () => {
  if (window.innerWidth > 1280) return 'xl';
  if (window.innerWidth > 1024) return 'lg';
  else if (window.innerWidth > 768) return 'md';
  else return 'sm';
};

const useRWD = () => {
  const [device, setDevice] = useState(checkSize());
  const handleRWD = () => {
    setDevice(checkSize(window.innerWidth));
  };
  useEffect(() => {
    window.addEventListener('resize', handleRWD);
    handleRWD();
    return () => {
      window.removeEventListener('resize', handleRWD);
    };
  }, []);
  return device;
};

const DrawingApp = () => {
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(10);
  const [width, setW] = useState(0);
  const [height, setH] = useState(0);
  const canvasRef = useRef();
  const context = useRef();
  const [pressed, setPressed] = useState(false);
  const [offsetX, setOffsetX] = useState(undefined);
  const [offsetY, setOffsetY] = useState(undefined);

  const drawCircle = (x, y) => {
    context.current.beginPath();
    context.current.arc(x, y, size, 0, Math.PI * 2);
    context.current.fillStyle = color;
    context.current.fill();
  };

  const drawLine = (x1, y1, x2, y2) => {
    context.current.beginPath();
    context.current.moveTo(x1, y1);
    context.current.lineTo(x2, y2);
    context.current.strokeStyle = color;
    context.current.lineWidth = size * 2;
    context.current.stroke();
  };

  const drawClear = () => {
    context.current.clearRect(0, 0, width, height);
  };

  const device = useRWD();
  useEffect(() => {
    switch (device) {
      case 'xl':
        setW(600);
        setH(600);
        break;
      case 'lg':
        setW(400);
        setH(600);
        break;
      case 'md':
        setW(600);
        setH(250);
        break;
      default:
        setW(300);
        setH(200);
        break;
    }
  }, [device]);
  useEffect(() => {
    context.current = canvasRef.current.getContext('2d');
  }, []);
  return (
    <div className={styles.DrawingApp}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={(e) => {
          const rect = e.target.getBoundingClientRect();
          setPressed(true);
          let x = e.clientX - rect.left;
          let y = e.clientY - rect.top;
          setOffsetX(x);
          setOffsetY(y);
        }}
        onMouseUp={(e) => {
          setPressed(false);
          setOffsetX(undefined);
          setOffsetY(undefined);
        }}
        onMouseMove={(e) => {
          if (pressed) {
            const rect = e.target.getBoundingClientRect();
            let x2 = e.clientX - rect.left;
            let y2 = e.clientY - rect.top;
            drawCircle(x2, y2);
            drawLine(offsetX, offsetY, x2, y2);
            setOffsetX(x2);
            setOffsetY(y2);
          }
        }}
      />
      <div className={styles.toolbox} style={{ width: width + 'px' }}>
        <button
          onClick={() => {
            if (size > 5) setSize(size - 5);
          }}
        >
          -
        </button>
        <span>{size}</span>
        <button
          onClick={() => {
            if (size < 50) setSize(size + 5);
          }}
        >
          +
        </button>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button onClick={drawClear}>X</button>
      </div>
    </div>
  );
};

export default DrawingApp;
