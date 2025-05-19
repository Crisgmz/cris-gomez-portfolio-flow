
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MouseTracker from "../components/MouseTracker";

const Index = () => {
  // Update page title
  useEffect(() => {
    document.title = "Cristian Gómez | Desarrollador Multiplataforma";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="tech">
          <TechStack />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      
      {/* Custom cursor */}
      <MouseTracker />
    </div>
  );
};

export default Index;
