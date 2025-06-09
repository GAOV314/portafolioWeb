import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationLinks = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Acerca' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/GAOV314',
      label: 'GitHub',
      username: '@GAOV314'
    },
    {
      icon: FiLinkedin,
      href: 'https://www.linkedin.com/in/gadiel-amir-oca%C3%B1a-veliz-1970692a1/',
      label: 'LinkedIn',
      username: 'Gadiel Amir Ocaña Veliz'
    },
    {
      icon: FiMail,
      href: 'mailto:ocanagadiel59@gmail.com',
      label: 'Email',
      username: 'ocanagadiel59@gmail.com'
    }
  ];

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'ocanagadiel59@gmail.com',
      href: 'mailto:ocanagadiel59@gmail.com'
    },
    {
      icon: FiPhone,
      label: 'Teléfono',
      value: '+502 4477 9557',
      href: 'tel:+50244779557'
    },
    {
      icon: FiMapPin,
      label: 'Ubicación',
      value: 'Guatemala',
      href: null
    }
  ];

  return (
    <footer className="bg-space-900 border-t border-stellar-bright/10 relative overflow-hidden">
      {/* Background decorativo sutil */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-stellar-muted rounded-full mix-blend-soft-light filter blur-3xl opacity-4"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-stellar-deep rounded-full mix-blend-soft-light filter blur-3xl opacity-3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Contenido principal del footer */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          
          {/* Información personal */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-stellar-bright to-stellar-warm rounded-lg flex items-center justify-center">
                <span className="text-black font-bold font-mono text-lg">G</span>
              </div>
              <span className="text-white font-bold text-xl font-mono">Gadiel Ocaña</span>
            </div>
            <p className="text-space-secondary mb-6 leading-relaxed font-mono">
              Estudiante de Ciencias de la Computación apasionado por crear soluciones tecnológicas innovadoras.
            </p>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={item.label} className="flex items-center space-x-3 text-sm">
                  <item.icon className="text-stellar-bright flex-shrink-0" size={16} />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-space-secondary hover:text-stellar-bright transition-colors font-mono"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-space-secondary font-mono">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enlaces de navegación */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-mono">Navegación</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-space-secondary hover:text-stellar-bright transition-colors font-mono text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Proyectos destacados */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-mono">Proyectos Destacados</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/GAOV314/portafolioWeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-space-secondary hover:text-stellar-bright transition-colors font-mono"
                >
                  Portafolio Web Personal
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Emadlgg/MoneyFlow_Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-space-secondary hover:text-stellar-bright transition-colors font-mono"
                >
                  MoneyFlow - Sistema Financiero
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GAOV314/CssDitto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-space-secondary hover:text-stellar-bright transition-colors font-mono"
                >
                  CSS Ditto - Arte en Código
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GAOV314/ChatClass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-space-secondary hover:text-stellar-bright transition-colors font-mono"
                >
                  ChatClass - Chat Grupal
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-mono">Sígueme</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-space-secondary hover:text-stellar-bright transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 bg-stellar-bright/10 rounded-lg flex items-center justify-center group-hover:bg-stellar-bright/20 transition-colors">
                    <social.icon size={16} />
                  </div>
                  <div>
                    <div className="font-medium font-mono text-sm">{social.label}</div>
                    <div className="text-xs font-mono opacity-70">{social.username}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-stellar-bright/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-space-muted text-sm font-mono">
              <p>
                Copyright © {currentYear} Gadiel Amir Ocaña Veliz. Todos los derechos reservados.
              </p>
            </div>

            {/* Información adicional */}
            <div className="flex items-center space-x-6 text-space-muted text-sm">
              <span className="font-mono">Hecho con React & Tailwind CSS</span>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-space-secondary hover:text-stellar-bright transition-colors"
              >
                <span className="font-mono">Volver arriba</span>
                <FiArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Información académica */}
        <div className="mt-8 pt-6 border-t border-stellar-bright/5">
          <div className="text-center">
            <p className="text-space-muted text-sm font-mono">
              Estudiante de 3er año en Ciencias de la Computación - Universidad del Valle de Guatemala
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;