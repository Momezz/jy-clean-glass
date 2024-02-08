import styles from '@/components/CardsLayout/cardsLayout.module.css';
import Card from '@/components/Card/Card';
import { getProducts } from '@/services/products';

const CardsLayout = async () => {
  const products = await getProducts();

  return (
    <section className={styles.products_layout__container}>
      <h1 className={styles.products_layout__title}>Nuestros productos</h1>
      <ul className={styles.products_layout__list}>
        {
          products.map((value) => (
            <li className={styles.products_layout__link} key={value._id}>
              <Card element={value} />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default CardsLayout;
