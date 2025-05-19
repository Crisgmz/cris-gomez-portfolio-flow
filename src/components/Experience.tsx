
import { useState } from "react";
import { ExperienceItem } from "../types";
import { Button } from "../components/ui/button";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences: ExperienceItem[] = [
    {
      company: "Support Services Group",
      position: "Workforce Manager",
      period: "2022 - presente",
      description: [
        "Gestión y optimización de equipos de trabajo",
        "Análisis de datos y métricas de rendimiento",
        "Implementación de soluciones tecnológicas para mejorar procesos",
        "Desarrollo de herramientas para análisis y seguimiento de KPIs"
      ],
      technologies: ["Data Analysis", "Process Optimization", "Team Management"]
    },
    {
      company: "Data Vimenca",
      position: "Real Time Analyst",
      period: "2020 - 2022",
      description: [
        "Análisis de datos en tiempo real para toma de decisiones",
        "Monitoreo de métricas operativas y de rendimiento",
        "Generación de reportes y visualizaciones de datos",
        "Optimización de flujos de trabajo basados en análisis de datos"
      ],
      technologies: ["Data Visualization", "Real-time Analysis", "Reporting"]
    },
    {
      company: "Data Vimenca",
      position: "Customer Service",
      period: "2018 - 2020",
      description: [
        "Atención y soporte a clientes",
        "Resolución de problemas y gestión de casos",
        "Documentación y seguimiento de incidencias",
        "Mejora continua de procesos de atención al cliente"
      ],
      technologies: ["Customer Support", "Problem Solving", "Documentation"]
    },
    {
      company: "ARTICA.DO",
      position: "Fundador",
      period: "Proyecto personal",
      description: [
        "Desarrollo de soluciones tecnológicas personalizadas",
        "Diseño e implementación de aplicaciones multiplataforma",
        "Gestión de proyectos de software y hardware",
        "Consultoría tecnológica para pequeñas empresas"
      ],
      technologies: ["Flutter", "Firebase", "IoT", "UI/UX Design"]
    },
    {
      company: "Pinares Films",
      position: "Fundador",
      period: "Proyecto personal",
      description: [
        "Producción audiovisual y fotografía",
        "Edición de video y postproducción",
        "Desarrollo de marca y estrategias de marketing",
        "Gestión de proyectos creativos"
      ],
      technologies: ["Content Creation", "Video Production", "Brand Development"]
    }
  ];

  return (
    <div className="section-container">
      <h2 className="numbered-heading">Experiencia</h2>
      
      <div className="flex flex-col md:flex-row gap-4 md:gap-10">
        {/* Tab list for companies */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible md:min-w-[200px] border-b md:border-b-0 md:border-l border-navy-lighter">
          {experiences.map((exp, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`px-5 py-3 justify-start font-mono text-sm rounded-none border-b-2 md:border-b-0 md:border-l-2 transition-all duration-200 ${
                activeTab === index
                  ? "text-teal border-teal md:bg-navy-lighter"
                  : "border-transparent text-slate hover:text-teal hover:bg-navy-lighter/50"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {exp.company}
            </Button>
          ))}
        </div>

        {/* Content for active tab */}
        <div className="py-6 md:py-0 min-h-[320px]">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`space-y-5 transition-opacity duration-300 ${
                activeTab === index ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <h3 className="text-xl text-slate-lighter font-medium">
                <span>{exp.position}</span>{" "}
                <span className="text-teal">@ {exp.company}</span>
              </h3>
              <p className="text-slate font-mono text-sm">{exp.period}</p>
              <ul className="space-y-2.5">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex text-slate">
                    <span className="text-teal mr-2">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {exp.technologies && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono py-1 px-3 rounded-full bg-navy-lighter text-slate"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
