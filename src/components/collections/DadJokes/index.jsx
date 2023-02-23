import { useEffect, useState } from 'react';

const DadJokes = () => {
  const [joke, setJoke] = useState('Joke goes here');

  async function generateJoke() {
    const res = await fetch('https://icanhazdadjoke.com', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const data = await res.json();
    setJoke(data.joke);
  }

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <div className="h-full bg-[#686de0] flex flex-col items-center justify-center p-5">
      <div className=" bg-white rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] py-[20px] px-[50px] text-center w-[800px] max-w-full">
        <h3 className="m-0 opacity-60 tracking-[2px] font-black">Don't Laugh Challenge</h3>
        <div className=" text-3xl tracking-1 leading-[40px] mx-auto my-[50px] max-w-[600px]">
          {joke}
        </div>
        <button
          className="bg-[#9f68e0] text-white border-0 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.5)] py-[14px] px-[40px] cursor-pointer active:scale-95"
          onClick={generateJoke}
        >
          Get Another Joke
        </button>
      </div>
    </div>
  );
};

export default DadJokes;
