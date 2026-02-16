import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Internship from "./components/Internship";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills/>
      <Internship/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
