import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import SeeDetail from '../components/SeeDetail/SeeDetail';

export default function Home() {
  const elements = {
    image:
      "https://res.cloudinary.com/dgouwu7h7/image/upload/v1701025063/portfolio/b82394ee3a3c3ae0776afa340d59e319.png",
    title: "shampoo",
    contenido: "1000 ml",
    description:
      "aseder lorem insupt aseder lorem insupt aseder lorem insupt aseder",
    price: 16000
  };
  return (
    <main className="flex">
      <article className="w-full grid place-items-center">
        <Banner />
        <article>
          <Card element={elements} />
        </article>
        <article>
          <SeeDetail element={elements}/>
        </article>
      </article>
    </main>
  );
}
