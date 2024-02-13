import styles from '../WhatsAppButton/whatsapp-button.module.css';
import { PiWhatsappLogoDuotone } from "react-icons/pi";

const WhatsAppButton = () => {
  return (
    <article className={styles.whatsapp_button__container}>
      <span className={styles.whatsapp_button__icon}></span>
      <a
        className={styles.whatsapp_button__icon}
        href="http://wa.me/573219959570?text=Hola ."
        target="_blank"
        rel="noopener noreferrer"
      >
        <PiWhatsappLogoDuotone />
      </a>
    </article>
  )
}

export default WhatsAppButton;
