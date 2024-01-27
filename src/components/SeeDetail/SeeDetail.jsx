import styles from '@/components/SeeDetail/see-detail.module.css';
import { formatPrice } from '../../services/utilities'
import PropTypes from 'prop-types';
import Image from 'next/image';

const SeeDetail = ({ element }) => {
  return (
    <article className={styles.see_details__container}>
      <div className={styles.see_details__image_cont}>
        {
          <Image
            className={styles.see_details__image}
            src={element.image}
            alt={element.title}
            width={110}
            height={120}
            priority
          />}
      </div>
      <div className={styles.see_details__cont_text}>
        <h2 className={styles.see_details__title}>{element.title}</h2>
        <p className={styles.see_details___paragraph}>
          {element.description}
        </p>
        <span className={styles.see_details__price}>{formatPrice(element.price)}</span>
      </div>
    </article>
  );
};

SeeDetail.propTypes = {
  element: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default SeeDetail;
