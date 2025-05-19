
import { TechItem } from "../types";
import { 
  MessageSquarePlus, 
  Database, 
  Workflow, 
  Figma as FigmaIcon, 
  FileSpreadsheet, 
  CreditCard, 
  Cpu, 
  Github, 
  Code, 
  Hammer, 
  Network, 
  LayoutDashboard
} from "lucide-react";

const TechStack = () => {
  const technologies: TechItem[] = [
    { name: "Flutter", icon: MessageSquarePlus },
    { name: "Firebase", icon: Database },
    { name: "Python", icon: Code },
    { name: "FastAPI", icon: Workflow },
    { name: "MySQL", icon: Database },
    { name: "WebSocket", icon: Network },
    { name: "Stripe", icon: CreditCard },
    { name: "ESP32", icon: Cpu },
    { name: "MQTT", icon: Network },
    { name: "Figma", icon: FigmaIcon },
    { name: "GitHub", icon: Github },
    { name: "Data Analysis", icon: FileSpreadsheet },
    { name: "UI/UX", icon: LayoutDashboard },
    { name: "IoT", icon: Hammer }
  ];

  return (
    <div className="section-container">
      <h2 className="numbered-heading">Tecnologías</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-8">
        {technologies.map((tech, index) => (
          <div 
            key={index}
            className="group flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-navy-light border border-navy-lighter group-hover:border-teal/30 transition-colors mb-3">
              <tech.icon size={28} className="text-teal group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-slate text-sm font-mono">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
