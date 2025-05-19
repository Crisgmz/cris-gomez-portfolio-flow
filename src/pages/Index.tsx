
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);
  
  // Update page title
  useEffect(() => {
    document.title = "Cristian Gómez | Desarrollador Multiplataforma";
  }, []);

  // Mouse tracking for custom cursor
  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const mouseOverHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || 
          target.tagName.toLowerCase() === 'button' ||
          target.closest('[role="button"]') ||
          target.tagName.toLowerCase() === 'input' ||
          target.tagName.toLowerCase() === 'textarea' ||
          target.tagName.toLowerCase() === 'select') {
        setCursorHovered(true);
      } else {
        setCursorHovered(false);
      }
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseover", mouseOverHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseover", mouseOverHandler);
    };
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
      <div 
        className="cursor-dot"
        style={{ 
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      ></div>
      <div 
        className={`cursor-outline ${cursorHovered ? 'hoverable' : ''}`}
        style={{ 
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: cursorHovered ? '60px' : '40px',
          height: cursorHovered ? '60px' : '40px',
          backgroundColor: cursorHovered ? 'rgba(100, 255, 218, 0.08)' : 'rgba(100, 255, 218, 0.15)',
        }}
      ></div>
    </div>
  );
};

export default Index;
