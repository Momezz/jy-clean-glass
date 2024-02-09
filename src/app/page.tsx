import Banner from '../components/Banner/Banner';
import CardsLayout from '../components/CardsLayout/CardsLayout';
import ContactForm from '../components/ContactForm/ContactForm'

export default function Home() {
  return (
    <main className="flex">
      <article className="w-full grid place-items-center">
        <Banner />
        <article>
          <CardsLayout />
        </article>
        <article>
          <ContactForm />
        </article>
      </article>
    </main>
  );
}
