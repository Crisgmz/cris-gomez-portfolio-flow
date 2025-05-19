
const Footer = () => {
  return (
    <footer className="bg-navy py-8 text-center border-t border-navy-lighter">
      <div className="container mx-auto">
        <p className="text-slate text-sm">
          © {new Date().getFullYear()} Cristian Gómez. Todos los derechos reservados.
        </p>
        <p className="text-slate text-xs mt-1">
          Desarrollado con React y Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
