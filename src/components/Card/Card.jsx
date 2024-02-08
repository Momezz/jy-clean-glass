import styles from '../Card/card.module.css';
import { formatPrice, limitCharacters } from '../../services/utilities';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Card = ({ element }) => {
  return (
    <article className={styles.card__container}>
      <h2 className={styles.card__title}>{element.title}</h2>
      <div className={styles.card__skill_type_cont}>
        <p className={styles.card__skill_type_paragraph}>
          {limitCharacters(element.description, 80)}
        </p>
      </div>
      <span className={styles.card__price}>{formatPrice(element.price)}</span>
      <div className={styles.card__image_cont}>
        {
          <Image
            className={styles.card__image}
            src={element.image}
            alt={element.name}
            width={110}
            height={120}
            priority
          />}
      </div>
    </article>
  );
};

Card.propTypes = {
  element: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default Card;
