import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
    
      <Hero />
      <Stats />
      <About />
      <Gallery />
      <Projects />
      <Blogs />
      <Contact />
      {/* Add more components as needed */}
    </main>
  );
}
