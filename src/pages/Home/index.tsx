import React from 'react';
import classNames from 'classnames';

import Section from './Section';
import Experience from './Experience';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  main?: boolean;
};

const Link = ({ children, href, main }: LinkProps) => (
  <a
    href={href}
    className={classNames(
      'w-[calc(50%-2rem)] m-2 p-3 flex items-center justify-center border border-solid rounded-md',
      {
        'bg-primary text-white hover:bg-primary-light': main,
        'border-gray-400 hover:border-primary hover:text-primary': !main,
      }
    )}
  >
    {children}
  </a>
);
const Home = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="w-full bg-slate-200 flex flex-wrap items-center justify-center">
        <Section className="h-[80vh] md:bg-[url('/HomeBackgroundKnockout.png')] bg-no-repeat bg-contain bg-right flex items-center justify-center md:justify-start">
          <div>
            <h1 className="text-6xl lg:text-8xl">
              <span className="text-4xl lg:text-6xl">Hello, I am</span>
              <div className="font-black mt-6"> Nick Chen</div>
            </h1>
            <p className="underline decoration-primary md:text-lg lg:text-2xl font-bold my-4">
              a Front-end Developer
            </p>
            <div className="md:w-[250px] lg:w-[350px] flex flex-wrap mt-2 md:text-xs lg:text-lg font-semibold">
              <Link href="#aboutMe" main>
                About me
              </Link>
              <Link href="#experience">Experience</Link>
            </div>
          </div>
        </Section>
      </div>
      <Section className="flex flex-col items-center justify-center" id="aboutMe" title="About Me">
        <div className="w-full flex flex-col md:flex-row mt-8">
          <div className="w-full min-h-[450px] bg-[url('/ShinyStar.png')] bg-no-repeat bg-contain bg-center" />
          <div className="w-full flex flex-col p-10">
            <h3 className="text-3xl font-bold">我是誰?</h3>
            <p className="text-gray-600 mt-3">
              我是一位畢業於龍華科技大學資訊管理系的工程師，從小因熱愛玩電腦遊戲而對遊戲設計感興趣，但在進入大學之前，我從未真正接觸過程式設計
            </p>
            <p className="text-lg text-gray-600 mt-3">
              然而，在我轉入資訊管理系的大學生活中，我開始接觸到了程式設計課程。這是一個開啟了我的世界的旅程，我開始意識到程式設計的力量和重要性，也開始對它產生了濃厚的興趣。
            </p>
            <p className="text-lg text-gray-600 mt-3">
              經過在學校專題以及職場上的歷練，我不斷學習，寫代碼，將學到的知識應用到解決現實世界中的問題。隨著時間的推移，我逐漸成長為一名優秀的工程師。
            </p>
            <p className="text-lg text-gray-600 mt-3">
              現在，我是一名有豐富經驗的工程師，有著對程式設計的深厚理解和熱情，並不斷在自己的工作中追求更高的技術水平。我相信，我的熱情、學習能力和才華會讓我在這個行業中做出更好的貢獻。
            </p>
          </div>
        </div>
      </Section>
      <Section
        className="flex flex-col items-center justify-center"
        id="experience"
        title="Experience"
      >
        <Experience />
      </Section>
    </div>
  );
};

export default Home;
