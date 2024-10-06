import About from './components/about';
import Hero from './components/hero';
import Services from './components/services';
import Steps from './components/steps';
import Faq from './components/faq';
import Contact from './components/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Steps />
      <Faq />
      <Contact />
    </>
  );
}
