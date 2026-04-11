import { loadNpmPackages } from './_services/npm';
import { Footer } from './_components/Footer';
import { Header } from './_components/Header';
import { Hero } from './_components/Hero';
import { OpenSource } from './_components/OpenSource';
import { Stack } from './_components/Stack';
import { Trajectory } from './_components/Trajectory';

export default async function Home() {
  const packages = await loadNpmPackages();

  return (
    <div id="home">
      <Header />
      <main>
        <Hero />
        <Trajectory />
        <OpenSource packages={packages} />
        <Stack />
      </main>
      <Footer />
    </div>
  );
}
