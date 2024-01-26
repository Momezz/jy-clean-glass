"use client";

import Link from 'next/link';
import styles from '../NavBar/navbar.module.css';
import { useState } from 'react';
import Image from 'next/image';

const Navigation = () => {
  const [toogleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toogleMenu);
  };

  return (
    <>
      <div
        className={
          !toogleMenu ? styles.navigation__icon_none : styles.navigation__icon
        }
      >
        <button className={styles.navigation__button} onClick={handleToggle}>
          |||
        </button>
      </div>
      <header
        className={
          toogleMenu
            ? styles.navigation__container_none + " " + styles.navigation__container
            : styles.navigation__container
        }
      >
        <Link
          className={styles.navigation__navlink_logo}
          href="/"
        >
          <div className={styles.navigation__cont_logo}>
          <Image
          className={styles.card__image}
          src={'https://res.cloudinary.com/dgouwu7h7/image/upload/v1706065612/portfolio/3f49a2ca156d2d98781cecd3f50af8ce.png'}
          alt={'Logo empresa'}
          width={110}
          height={100}
          priority
        />
          </div>
        </Link>
        <nav className={styles.navigation__nav}>
          <ul className={styles.navigation__ul_nav}>
            <li className={styles.navigation__li_nav}>
              <Link
                onClick={handleToggle}
                className={styles.navigation__navlink}
                href="/"
              >
                Inicio
              </Link>
            </li>
            <li className={styles.navigation__li_nav}>
              <Link
                onClick={handleToggle}
                className={styles.navigation__navlink}
                href="/"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
