
const About = () => {
  return (
    <div className="section-container">
      <h2 className="numbered-heading">Sobre mí</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4 text-slate">
          <p>
            Soy un desarrollador enfocado en soluciones tecnológicas integrales: desde aplicaciones móviles 
            en Flutter hasta sistemas backend en Firebase y FastAPI. Mi pasión es convertir ideas en 
            soluciones funcionales, modernas y escalables.
          </p>
          <p>
            Mi formación académica incluye Ingeniería en Telecomunicaciones en PUCMM (en curso) 
            y un Técnico en Contabilidad de INFOTEP. Además, cuento con certificaciones en Figma, 
            Flutter, Data Analytics, entre otros.
          </p>
          <p>
            Mi experiencia combinando desarrollo software y hardware (IoT) me permite tener 
            una visión integral de los proyectos, desde el diseño de la experiencia de usuario 
            hasta la implementación técnica de soluciones complejas.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-teal rounded-full opacity-25 group-hover:opacity-50 blur transition duration-500"></div>
            <div className="relative max-w-[250px] aspect-square rounded-full overflow-hidden">
              <img
                src="https://via.placeholder.com/400x400"
                alt="Cristian Gómez"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
