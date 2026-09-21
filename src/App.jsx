import Loader from './components/Loader/index.jsx';
import Background from './components/Background/index.jsx';
import Navbar from './components/Navbar/index.jsx';
import ScrollProgress from './components/ScrollProgress/index.jsx';
import ScrollTopButton from './components/ScrollTopButton/index.jsx';
import Hero from './sections/Hero/index.jsx';
import About from './sections/About/index.jsx';
import Projects from './sections/Projects/index.jsx';
import Contact from './sections/Contact/index.jsx';
import Footer from './sections/Footer/index.jsx';

export default function App() {
  return (
    <>
      <Loader />
      <Background />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}
