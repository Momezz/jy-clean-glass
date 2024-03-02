"use client";

import styles from './administrator-portal.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { GiKeyLock } from 'react-icons/gi';

const AdministratorPortal = () => {
  const [seeModal, setSeeModal] = useState(false);
  const changeStatus = () => {
    setSeeModal(!seeModal);
  };

  return (
    <article>
      {seeModal ? (
        <div className={styles.administrator_portal__container}>
          <p>Tienes permiso para gestionar el contenido.</p>
          <div className={styles.administrator_portal__button_cont}>
            <button
              onClick={changeStatus}
              className={styles.administrator_portal__button}
              type="button"
            >
              No
            </button>
            <Link href="/login">
              <button
                className={`${styles.administrator_portal__button} ${styles.administrator_portal__button_left}`}
                type="button"
                onClick={changeStatus}
              >
                Si
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <button type="button" onClick={changeStatus}>
          <GiKeyLock />
        </button>
      )}
    </article>
  );
};

export default AdministratorPortal;
