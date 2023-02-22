import { useState } from 'react';
import classNames from 'classnames';

const getImgPath = (key, size) => {
  return `https://images.unsplash.com/photo-${key}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=${size}&q=80`;
};
const imgArray = [
  { key: '1549880338-65ddcdfd017b', size: '2100' },
  { key: '1511593358241-7eea1f3c84e5', size: '1934' },
  { key: '1495467033336-2effd8753d51', size: '2100' },
  { key: '1522735338363-cc7313be0ae0', size: '2689' },
  { key: '1559087867-ce4c91325525', size: '2100' },
];

/**
 * 待處理: 聚焦與背後背景圖沒有對齊
 */

const BackgroundSlider = () => {
  const [img, setImg] = useState(0);
  return (
    <div
      className="h-full relative flex items-center justify-center bg-center bg-cover duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/70 z-0 "
      style={{ backgroundImage: `url('${getImgPath(imgArray[img].key, imgArray[img].size)}')` }}
    >
      <div className="h-[70%] w-[70%] relative overflow-hidden">
        {imgArray.map(({ key, size }, i) => {
          console.log(img, i);
          return (
            <div
              key={i}
              className={classNames(
                'opacity-0 h-[140%] w-[140%] bg-center bg-cover duration-500 ease-in z-[1] absolute top-[-15%] left-[-15%]',
                { 'opacity-100': i === img }
              )}
              style={{ backgroundImage: `url('${getImgPath(key, size)}')` }}
            ></div>
          );
        })}
        <button
          className="fixed bg-transparent text-white p-[20px] text-3xl border-2 border-solid border-orange-300 top-1/2 -rotate-y-50% cursor-pointer left-[calc(15vw-65px)]"
          onClick={() => {
            setImg(img - 1 < 0 ? imgArray.length - 1 : img - 1);
          }}
        >
          &lt;
        </button>

        <button
          className="fixed bg-transparent text-white p-[20px] text-3xl border-2 border-solid border-orange-300 top-1/2 -rotate-y-50% cursor-pointer right-[calc(15vw-65px)]"
          onClick={() => {
            setImg(img + 1 > imgArray.length - 1 ? 0 : img + 1);
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BackgroundSlider;
