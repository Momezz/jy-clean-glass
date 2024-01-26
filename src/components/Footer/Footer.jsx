import Link from 'next/link';
import styles from '@/components/Footer/footer.module.css';
import {
  AiFillPhone,
  AiFillEnvironment,
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <section className={styles.footer__sub_container}>
        <div className={styles.footer__half_container}>
          <div className={styles.footer__icon_container}>
            <span className={styles.footer__icon}>
              <AiFillEnvironment />
            </span>
            <p className={styles.footer__icon_text}>Fresno, Tolima</p>
          </div>
          <div className={styles.footer__icon_container}>
            <span className={styles.footer__icon}>
              <AiFillPhone />
            </span>
            <p className={styles.footer__icon_text}>
              <a
                className={styles.footer__icon_a}
                href="http://wa.me/573219959570?text=Hola ."
                target="_blank"
                rel="noopener noreferrer"
              >
                +57 3219959570
              </a>
            </p>
          </div>
          <div className={styles.footer__icon_container}>
            <span className={styles.footer__icon}>
              <AiFillMail />
            </span>
            <Link className={styles.footer__icon_a} href="/">
              <p className={styles.footer__icon_text}>cleanglassjy@gmail.com</p>
            </Link>
          </div>
          <div className={styles.footer__links_container}>
            <a
              href="https://github.com/Momezz"
              target="_blank"
              className={styles.footer__link}
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/juliangomezmejiamedellin/"
              target="_blank"
              className={styles.footer__link}
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <div className={styles.footer__half_container}>
          <div>
            <p className={styles.footer__paragraph}>
              Haz que cada viaje sea claro y seguro con nuestros shampoos
              especializados para limpiar parabrisas! Descubre la fórmula que
              brinda máxima claridad, eliminando la suciedad y garantizando una
              visión impecable en cada aventura. Tu seguridad y comodidad son
              nuestra prioridad. ¡Bienvenido a la experiencia de conducción más
              clara y nítida con JY Clean Glass!
            </p>
          </div>
        </div>
      </section>
      <div>
        <p className={styles.footer__bottom_paragraph}>
          <a
            href="https://julian-gomez-m.vercel.app/"
            target="_blank"
            className={styles.footer__momezz_link}
          >
            © 2024 - Momezz
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
