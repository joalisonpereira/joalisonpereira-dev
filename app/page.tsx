import Footer from './_components/Footer';
import Header from './_components/Header';
import Hero from './_components/Hero';

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
