import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';

const Items = ['Home', 'About', 'Work', 'Contact'];

const ParallaxScrolling = () => {
  const bodyRef = useRef(null);
  const [active, setActive] = useState(0);
  const [value, setValue] = useState(0);

  const handleScroll = () => {
    setValue(bodyRef.current.scrollTop);
  };

  useEffect(() => {
    bodyRef.current.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={bodyRef} className={styles.ParallaxScrolling}>
      <div className={styles.container}>
        <header
          style={{
            top: value * 0.5,
          }}
        >
          <a href="#" className={styles.logo}>
            Logo
          </a>
          <ul>
            {Items.map((item, i) => (
              <li key={item} onClick={() => setActive(i)}>
                <a
                  className={classNames({
                    [styles.active]: active === i,
                  })}
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </header>
        <section>
          <img
            src="https://drive.google.com/uc?export=download&id=15tVpDoxd26lVoKt8lt1Rkn-0-V1MIh-1"
            className={styles.stars}
            style={{
              left: value * 0.25,
            }}
          />
          <img
            src="https://drive.google.com/uc?export=download&id=12QbSnS1CAOaI-9N1G2XPinHMIxIrBuR0"
            className={styles.moon}
            style={{
              top: value * 1.05,
            }}
          />
          <img
            src="https://drive.google.com/uc?export=download&id=1rJqQNfeOuRhPObSTOyj6j692vYeGOGQI"
            className={styles.mountainsBehind}
            style={{
              top: value * 0.5,
            }}
          />
          <h2
            className={styles.text}
            style={{
              marginRight: value * 4,
              marginTop: value * 1.5,
            }}
          >
            Moon Light
          </h2>
          <a
            href="#sec"
            className={styles.btn}
            style={{
              marginTop: value * 1.5,
            }}
          >
            Explore
          </a>
          <img
            src="https://drive.google.com/uc?export=download&id=14BR__3gEy8HB4i9c6iMEYmdHwQ-g5AMg"
            className={styles.mountainsFront}
            style={{
              top: value * 0.5,
            }}
          />
        </section>
        <div className={styles.sec} id="sec">
          <h2>Parallax Scrolling Effects</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum doloremque, libero
            fugiat assumenda commodi deserunt error tempore nihil nisi suscipit sapiente cupiditate
            vero, voluptatem ab iste eius inventore, incidunt similique? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Saepe, nobis officia! Commodi, maiores praesentium autem
            libero voluptas dolorum repudiandae exercitationem repellat? Sapiente placeat et harum
            modi numquam qui enim fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto nulla laudantium odit voluptatem minus alias fugiat fuga eligendi. Molestiae
            quibusdam consequuntur doloribus ab quaerat reiciendis, unde cumque voluptatem. Iste,
            <br />
            <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum doloremque,
            libero fugiat assumenda commodi deserunt error tempore nihil nisi suscipit sapiente
            cupiditate vero, voluptatem ab iste eius inventore, incidunt similique? Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Saepe, nobis officia! Commodi, maiores
            praesentium autem libero voluptas dolorum repudiandae exercitationem repellat? Sapiente
            placeat et harum modi numquam qui enim fugiat? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iusto nulla laudantium odit voluptatem minus alias fugiat fuga
            eligendi. Molestiae quibusdam consequuntur doloribus ab quaerat reiciendis, unde cumque
            voluptatem. Iste, <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum doloremque, libero
            fugiat assumenda commodi deserunt error tempore nihil nisi suscipit sapiente cupiditate
            vero, voluptatem ab iste eius inventore, incidunt similique? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Saepe, nobis officia! Commodi, maiores praesentium autem
            libero voluptas dolorum repudiandae exercitationem repellat? Sapiente placeat et harum
            modi numquam qui enim fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto nulla laudantium odit voluptatem minus alias fugiat fuga eligendi. Molestiae
            quibusdam consequuntur doloribus ab quaerat reiciendis, unde cumque voluptatem. Iste,
            nisi!
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum doloremque, libero
            fugiat assumenda commodi deserunt error tempore nihil nisi suscipit sapiente cupiditate
            vero, voluptatem ab iste eius inventore, incidunt similique? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Saepe, nobis officia! Commodi, maiores praesentium autem
            libero voluptas dolorum repudiandae exercitationem repellat? Sapiente placeat et harum
            modi numquam qui enim fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto nulla laudantium odit voluptatem minus alias fugiat fuga eligendi. Molestiae
            quibusdam consequuntur doloribus ab quaerat reiciendis, unde cumque voluptatem. Iste,
            nisi!
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum doloremque, libero
            fugiat assumenda commodi deserunt error tempore nihil nisi suscipit sapiente cupiditate
            vero, voluptatem ab iste eius inventore, incidunt similique? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Saepe, nobis officia! Commodi, maiores praesentium autem
            libero voluptas dolorum repudiandae exercitationem repellat? Sapiente placeat et harum
            modi numquam qui enim fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto nulla laudantium odit voluptatem minus alias fugiat fuga eligendi. Molestiae
            quibusdam consequuntur doloribus ab quaerat reiciendis, unde cumque voluptatem. Iste,
            nisi!
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum doloremque, libero
            fugiat assumenda commodi deserunt error tempore nihil nisi suscipit sapiente cupiditate
            vero, voluptatem ab iste eius inventore, incidunt similique? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Saepe, nobis officia! Commodi, maiores praesentium autem
            libero voluptas dolorum repudiandae exercitationem repellat? Sapiente placeat et harum
            modi numquam qui enim fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto nulla laudantium odit voluptatem minus alias fugiat fuga eligendi. Molestiae
            quibusdam consequuntur doloribus ab quaerat reiciendis, unde cumque voluptatem. Iste,
            nisi!
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum doloremque, libero
            fugiat assumenda commodi deserunt error tempore nihil nisi suscipit sapiente cupiditate
            vero, voluptatem ab iste eius inventore, incidunt similique? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Saepe, nobis officia! Commodi, maiores praesentium autem
            libero voluptas dolorum repudiandae exercitationem repellat? Sapiente placeat et harum
            modi numquam qui enim fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto nulla laudantium odit voluptatem minus alias fugiat fuga eligendi. Molestiae
            quibusdam consequuntur doloribus ab quaerat reiciendis, unde cumque voluptatem. Iste,
            nisi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxScrolling;
