import { loadNpmPackages } from './_services/npm';
import Footer from './_components/Footer';
import Header from './_components/Header';
import Hero from './_components/Hero';
import OpenSource from './_components/OpenSource';
import Trajectory from './_components/Trajectory';

export default async function Home() {
  const packages = await loadNpmPackages();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trajectory />
        <OpenSource packages={packages} />
      </main>
      <Footer />
    </>
  );
}
