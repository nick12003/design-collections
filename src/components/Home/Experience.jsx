import React, { useState, useEffect, useRef } from 'react';
import { FaCalendar } from 'react-icons/fa';
import classNames from 'classnames';

const Step = ({ title, company, during, right }) => (
  <div className="w-[20px] h-[20px] rounded-[50%] bg-primary z-10">
    <div
      className={classNames('w-[200px] relative', {
        '-translate-x-full': !right,
        'translate-x-1/2': right,
      })}
    >
      <h5 className="text-lg font-bold">{title}</h5>
      <div className="text-gray-400">{company}</div>
      <div className="flex items-center text-gray-400 mt-4">
        <FaCalendar />
        <span className="ml-1">{during}</span>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const [start, setStart] = useState(false);

  const experienceRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setStart(true);
      } else {
        setStart(false);
      }
    });
    observer.observe(experienceRef.current);
  }, []);

  return (
    <div className="w-full h-[60vh] flex items-center md:flex-row">
      <div
        ref={experienceRef}
        className={classNames(
          'w-full h-[70%] flex flex-col items-center justify-between relative -translate-y-1/2 opacity-0',
          {
            'animate-ShoExperience': start,
          }
        )}
      >
        <div className="absolute w-1 h-full bg-primary/50"></div>
        <Step title="大學生" company="龍華科技大學" during="2015-2018" />
        <Step title="高級專案工程師" company="人工智能股份有限公司" during="2017-2021" right />
        <Step title="前端工程師" company="聯合智網股份有限公司" during="2021-2022" />
        <Step title="your partner" company="your company" during="2023-feature" right />
      </div>
    </div>
  );
};

export default Experience;
