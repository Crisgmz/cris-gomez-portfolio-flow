
import { useState } from "react";
import { ProjectItem } from "../types";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  const projects: ProjectItem[] = [
    {
      title: "Shop+",
      description: "CRM para gestión de ventas e inventario con funcionalidades de reportes, facturación y análisis de datos.",
      technologies: ["PHP", "MySQL", "Apache"],
      link: "#",
      status: "Completado",
      role: "Desarrollador principal"
    },
    {
      title: "Plataforma IoT de Monitoreo Meteorológico",
      description: "Sistema de monitoreo en tiempo real de variables meteorológicas utilizando sensores IoT y visualización de datos.",
      technologies: ["ESP32", "MQTT", "Flutter", "Firebase"],
      link: "https://github.com/Crisgmz/grupo-4",
      status: "En desarrollo",
      role: "Desarrollador Full-stack"
    },
    {
      title: "Sistema de Renta de Vehículos",
      description: "Aplicación para gestión de reservas, inventario y facturación para empresas de renta de vehículos.",
      technologies: ["Flutter", "FastAPI", "MySQL"],
      link: "https://github.com/Crisgmz/SRC",
      status: "Completado",
      role: "Desarrollador backend y móvil"
    },
    {
      title: "Curamed",
      description: "Aplicación para gestión de citas médicas, expedientes electrónicos y seguimiento de tratamientos.",
      technologies: ["Flutter", "Firebase", "Stripe"],
      status: "Completado",
      role: "Desarrollador móvil"
    },
    {
      title: "Proyecto Confidencial",
      description: "Detalles próximamente disponibles. Solución empresarial para optimización de procesos logísticos.",
      technologies: ["React", "Node.js", "WebSockets"],
      status: "En desarrollo",
      role: "Consultor técnico"
    }
  ];

  // Display all projects or just the first 3
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="section-container">
      <h2 className="numbered-heading">Proyectos</h2>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <Card 
            key={index}
            className="flex flex-col bg-navy-light border-navy-lighter hover:border-teal/50 transition-colors duration-300 h-full"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="px-3 py-1 text-xs rounded-full bg-teal/10 text-teal font-mono">
                    {project.status}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-lighter mb-2">{project.title}</h3>
              <p className="text-slate mb-4 flex-grow">{project.description}</p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-mono py-1 px-2 rounded-sm bg-navy-lighter text-slate">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate">{project.role}</span>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal hover:text-teal-dark flex items-center gap-1 text-sm"
                    >
                      Ver más <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {projects.length > 3 && (
        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            className="border border-teal text-teal hover:bg-teal/10 font-mono"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Mostrar menos" : "Ver más proyectos"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Projects;
