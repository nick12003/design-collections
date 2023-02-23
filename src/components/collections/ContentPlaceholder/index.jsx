import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';

const ContentPlaceholder = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="h-full flex items-center justify-center bg-[#ecf0f1] font-sans">
      <div className="shadow-[0_2px_10px_rgba(0,0,0,0.2)] rounded-[10px] w-[350px] overflow-hidden">
        {loading ? (
          <>
            <div className={classNames('h-[200px]', styles.bgAnimated)}></div>
            <div className="bg-white p-[30px]">
              <h3
                className={classNames(
                  'text-lg font-black h-[20px] m-0 animated-bg',
                  styles.bgAnimated,
                  styles.txtAnimated
                )}
              ></h3>
              <p className="text-[#777] mt-[10px] mb-[20px] mx-0" id="excerpt">
                <span className={classNames(styles.bgAnimated, styles.txtAnimated)}></span>
                <span className={classNames(styles.bgAnimated, styles.txtAnimated)}></span>
                <span className={classNames(styles.bgAnimated, styles.txtAnimated)}></span>
              </p>
              <div className="flex">
                <div
                  className={classNames(
                    'rounded-[50%] overflow-hidden h-[40px] w-[40px] animated-bg',
                    styles.bgAnimated,
                    styles.txtAnimated
                  )}
                ></div>
                <div className="flex flex-col justify-around ml-[10px] w-[100px]">
                  <strong
                    className={classNames(
                      'animated-bg animated-bg-text',
                      styles.bgAnimated,
                      styles.txtAnimated
                    )}
                  ></strong>
                  <small
                    className={classNames(
                      'text-[#aaa] mt-[5px] animated-bg animated-bg-text',
                      styles.bgAnimated,
                      styles.txtAnimated
                    )}
                  ></small>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="h-[200px]">
              <img
                className="object-cover h-full w-full"
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                alt=""
              />
            </div>
            <div className="bg-white p-[30px]">
              <h3 className="text-lg font-black h-[20px] m-0">Lorem ipsum dolor sit amet</h3>
              <p className="text-[#777] mt-[10px] mb-[20px] mx-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis
              </p>
              <div className="flex">
                <div className="rounded-[50%] overflow-hidden h-[40px] w-[40px]">
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />
                </div>
                <div className="flex flex-col justify-around ml-[10px] w-[100px]">
                  <strong>John Doe</strong>
                  <small className="text-[#aaa] mt-[5px]">Oct 08, 2020</small>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentPlaceholder;
