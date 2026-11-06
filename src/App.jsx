import Header from './sections/Header';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Experience from './sections/Experience';
import Workflow from './sections/Workflow';
import Gear from './sections/Gear';
import Words from './sections/Words';
import OffTheClock from './sections/OffTheClock';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Workflow />
        <Gear />
        <Words />
        <OffTheClock />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
