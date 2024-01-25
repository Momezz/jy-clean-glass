import styles from '../Banner/banner.module.css';

const Banner = () => {
  return (
    <article className={styles.banner__container}>
      <h1 className={styles.banner__title}>¿Ya limpiaste tu parabrisas?</h1>
      <p className={styles.banner__text}>
        Cristales impecables para una visión clara! Descubre nuestro Shampoo
        Especial para Parabrisas: la fórmula perfecta para mantener tus ventanas
        siempre transparentes. Dale a tu conducción la nitidez que se merece.
        ¡Haz que cada viaje sea una experiencia clara y segura!
      </p>
    </article>
  );
};

export default Banner;
