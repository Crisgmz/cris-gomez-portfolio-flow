
import { ServiceItem } from "../types";
import { 
  Smartphone, 
  Palette, 
  Cpu, 
  BarChart, 
  Server, 
  Wrench 
} from "lucide-react";

const Services = () => {
  const services: ServiceItem[] = [
    {
      title: "Desarrollo de Apps",
      description: "Aplicaciones móviles multiplataforma en Flutter con interfaces atractivas y funcionales.",
      icon: Smartphone
    },
    {
      title: "Diseño UI/UX",
      description: "Interfaces de usuario modernas, intuitivas y orientadas a la experiencia del usuario.",
      icon: Palette
    },
    {
      title: "Consultoría IoT",
      description: "Soluciones de Internet de las Cosas para automatización y monitoreo de sistemas.",
      icon: Cpu
    },
    {
      title: "Análisis de Datos",
      description: "Procesamiento y visualización de datos para toma de decisiones empresariales.",
      icon: BarChart
    },
    {
      title: "Backend & APIs",
      description: "Desarrollo de servicios web y APIs robustas con Firebase y FastAPI.",
      icon: Server
    },
    {
      title: "Soluciones Personalizadas",
      description: "Desarrollo de aplicaciones y sistemas a medida para necesidades específicas.",
      icon: Wrench
    }
  ];

  return (
    <div className="section-container">
      <h2 className="numbered-heading">Servicios</h2>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group p-6 bg-navy-light rounded-lg border border-navy-lighter hover:border-teal/30 transition-all duration-300"
          >
            <div className="mb-4 text-teal p-3 inline-block rounded-lg bg-teal/10 group-hover:bg-teal/20 transition-colors">
              <service.icon size={24} />
            </div>
            <h3 className="text-xl font-medium text-slate-lighter mb-2">
              {service.title}
            </h3>
            <p className="text-slate">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
