import Link from 'next/link';
import { PiArrowFatLinesLeft } from 'react-icons/pi';
import styles from '@/components/BackButton/back-button.module.css';

const BackButton = () => {
  return (
    <div className={styles.back_button__continer}>
      <Link href="/">
        <PiArrowFatLinesLeft />
      </Link>
    </div>
  );
};

export default BackButton;
