
import { useState, useEffect } from "react";
import { scrollToSection } from "../utils/scrollUtils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavItem } from "../types";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation items
  const navItems: NavItem[] = [
    { label: "Sobre mí", href: "about" },
    { label: "Experiencia", href: "experience" },
    { label: "Proyectos", href: "projects" },
    { label: "Servicios", href: "services" },
    { label: "Tecnologías", href: "tech" },
    { label: "Contacto", href: "contact" },
  ];

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    scrollToSection(href);
  };

  // Handle clicking the logo to scroll to top
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/90 backdrop-blur py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div
          className="text-teal text-3xl font-semibold cursor-pointer"
          onClick={handleLogoClick}
        >
          CG
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-slate hover:text-teal transition-colors duration-300 link-underline"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-teal text-xs mr-1">{`0${index + 1}.`}</span> {item.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal border border-teal rounded-md px-4 py-2 hover:bg-teal/10 transition-colors duration-300"
          >
            Currículum
          </a>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-slate-lighter hover:bg-navy-lighter"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-navy-light z-40 flex flex-col">
            <nav className="flex flex-col items-center justify-center flex-1 space-y-8 p-6">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-slate-lighter hover:text-teal text-lg transition-colors duration-300"
                >
                  <span className="text-teal text-sm mr-1">{`0${index + 1}.`}</span> {item.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal border border-teal rounded-md px-5 py-2 hover:bg-teal/10 transition-colors duration-300 mt-4"
              >
                Currículum
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
