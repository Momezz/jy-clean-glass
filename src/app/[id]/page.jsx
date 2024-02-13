import styles from '../[id]/id.module.css';
import Image from 'next/image';
import { formatPrice } from '@/services/utilities';
import { getProductsById } from '@/services/products';

const SeeDetails = async ({ params }) => {
  const { id } = params;
  const element = await getProductsById(id);

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
        <h2 className={styles.see_details__title}>{element.name}</h2>
        <p className={styles.see_details___paragraph}>
          {element.description}
        </p>
        <span className={styles.see_details__price}>{formatPrice(element.price)}</span>
      </div>
    </article>
  );
};

export default SeeDetails;
