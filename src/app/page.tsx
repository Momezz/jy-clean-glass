import Banner from '../components/Banner/Banner';
import CardsLayout from '../components/CardsLayout/CardsLayout';
import ContactForm from '../components/ContactForm/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';

export default function Home() {
  return (
    <main className="flex">
      <article className="w-full grid place-items-center">
        <Banner />
        <article>
          <CardsLayout />
        </article>
        <article className="w-full grid place-items-center">
          <ContactForm />
        </article>
        <div className="fixed bottom-4 right-4 p-3">
          <WhatsAppButton />
        </div>
      </article>
    </main>
  );
}
