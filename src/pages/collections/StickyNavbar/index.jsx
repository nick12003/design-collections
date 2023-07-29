import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import styles from './style.module.scss';

const StickyNavbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef();
  const bodyRef = useRef();
  const fixNav = () => {
    if (bodyRef.current.scrollTop > navRef.current.offsetHeight) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    bodyRef.current.addEventListener('scroll', fixNav);
  }, []);

  return (
    <div className={styles.StickyNavbar} ref={bodyRef}>
      <nav className={classNames(styles.nav, { [styles.active]: nav })} ref={navRef}>
        <div className={styles.container}>
          <h1>
            <a to="#">My Website</a>
          </h1>
          <ul>
            <li>
              <a to="#" className={styles.current}>
                Home
              </a>
            </li>
            <li>
              <a to="#">About</a>
            </li>
            <li>
              <a to="#">Services</a>
            </li>
            <li>
              <a to="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>Welcome To My Website</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
        </div>
      </div>

      <section className={classNames(styles.container, styles.content)}>
        <h2>Content One</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates
          eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque
          perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos
          tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur
          dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a
          dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis
          delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste
          eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et
          iste dolorum obcaecati minus odio eligendi!
        </p>

        <h3>Content Two</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum
          possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis distinctio!
          Maxime distinctio impedit provident, voluptates illo odio nostrum minima beatae similique
          a sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque quae iste
          aperiam hic cumque repellat?
        </p>
      </section>
    </div>
  );
};

export default StickyNavbar;
