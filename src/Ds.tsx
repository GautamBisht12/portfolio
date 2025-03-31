import About from "./ds/About.tsx";
import Contact from "./ds/Contact.tsx";
import Experience from "./ds/Experience.tsx";
import Footer from "./ds/Footer.tsx";
import Hero from "./ds/Hero.tsx";
import Navbar from "./ds/Navbar.tsx";
import Projects from "./ds/Projects.tsx";
import TechStack from "./ds/TechStack.tsx";

const Ds = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Ds;
