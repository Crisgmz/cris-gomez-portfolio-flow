
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, Instagram, Linkedin, Github } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { SocialLink } from "../types";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks: SocialLink[] = [
    { platform: "Email", url: "mailto:articadom@gmail.com", icon: Mail },
    { platform: "WhatsApp", url: "https://wa.me/18492678985", icon: Phone },
    { platform: "Instagram", url: "https://instagram.com/cristian.gmz_", icon: Instagram },
    { platform: "LinkedIn", url: "https://linkedin.com/in/cristian-gómez-9a2951287", icon: Linkedin },
    { platform: "GitHub", url: "https://github.com/Crisgmz", icon: Github },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme, te responderé lo antes posible.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="section-container pb-32">
      <h2 className="numbered-heading">Contacto</h2>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-slate-lighter mb-4">¡Hablemos!</h3>
          <p className="text-slate mb-6">
            Estoy disponible para nuevos proyectos, consultoría o simplemente charlar sobre tecnología. 
            Completa el formulario o contáctame directamente a través de cualquiera de estos canales.
          </p>
          
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate hover:text-teal transition-colors group"
              >
                <span className="p-2 rounded-full bg-navy-light group-hover:bg-teal/10 transition-colors">
                  <link.icon size={18} className="text-teal" />
                </span>
                <span>{link.platform}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-navy-light border-navy-lighter focus:border-teal"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Tu correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-navy-light border-navy-lighter focus:border-teal"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] bg-navy-light border-navy-lighter focus:border-teal"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal text-navy hover:bg-teal-dark"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
