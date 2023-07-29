const Loading = () => {
  return (
    <div className="h-full flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center text-center  ">
        <div className="flex mb-[20px] ">
          <div className="m-[2px] w-[12px] h-[12px] bg-[#9814a0] rounded-[50%] animate-Loading" />
          <div className="m-[2px] w-[12px] h-[12px] bg-[#9814a0] rounded-[50%] animate-Loading animationDelay-100" />
          <div className="m-[2px] w-[12px] h-[12px] bg-[#9814a0] rounded-[50%] animate-Loading animationDelay-200" />
        </div>
        <h1 className="text-4xl mb-4">Loading...</h1>
        <p className="text-gray-400">please wait</p>
      </div>
    </div>
  );
};

export default Loading;
