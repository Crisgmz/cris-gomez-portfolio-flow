
import { ChevronRight } from "lucide-react";
import { scrollToSection } from "../utils/scrollUtils";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="section-container pt-32">
        <div className="max-w-3xl space-y-5">
          <p className="text-teal font-mono mb-5 opacity-0 animate-fade-in">Hola, me llamo</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white opacity-0 animate-fade-in-delay-1">
            Cristian Gómez.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-light opacity-0 animate-fade-in-delay-2">
            Desarrollador Multiplataforma
          </h2>
          <p className="text-slate-light text-lg max-w-xl mt-6 opacity-0 animate-fade-in-delay-3">
            Conecto ideas con tecnología funcional. Flutter, Firebase, IoT y visión integral.
          </p>
          <div className="pt-10 opacity-0 animate-fade-in-delay-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="hoverable group flex items-center bg-transparent hover:bg-teal/10 border border-teal text-teal px-6 py-4 rounded-md font-mono transition duration-300"
            >
              Ver mis proyectos
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
