import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/GAOV314",
      color: "#333",
      description: "Repositorios y proyectos"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/tu-perfil", // Cambia por tu LinkedIn real
      color: "#0077b5",
      description: "Perfil profesional"
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:tu-email@ejemplo.com", // Cambia por tu email real
      color: "#ea4335",
      description: "Contacto directo"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-space-900/50 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-stellar-bright rounded-full mix-blend-soft-light filter blur-3xl opacity-5 animate-float-stellar"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-stellar-warm rounded-full mix-blend-soft-light filter blur-3xl opacity-5 animate-float-stellar" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Título de sección */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-stellar-bright/10 text-stellar-bright rounded-full text-sm font-medium mb-4 font-mono">
              🤝 Conectemos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Redes <span className="text-gradient">Sociales</span>
            </h2>
            <p className="text-space-secondary text-lg max-w-2xl mx-auto font-mono leading-relaxed">
              Estas son mis redes sociales para contactarme. Estoy abierto a oportunidades laborales 
              y colaboraciones con equipos de desarrollo innovadores.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-stellar-bright to-stellar-warm mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Redes sociales */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="glass rounded-2xl p-8 text-center hover:bg-stellar-bright/5 transition-all duration-300 h-full">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${social.color}15` }}
                    >
                      <social.icon 
                        size={32} 
                        style={{ color: social.color }}
                        className="group-hover:text-stellar-bright transition-colors duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-mono group-hover:text-stellar-bright transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-space-secondary text-sm font-mono">
                      {social.description}
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-stellar-bright text-sm font-mono">
                        Ir a {social.name} →
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Mensaje profesional */}
          <motion.div 
            variants={itemVariants} 
            className="text-center bg-stellar-bright/5 rounded-2xl p-8 border border-stellar-bright/10"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                ¿Buscas talento en desarrollo?
              </h3>
              <p className="text-space-secondary font-mono leading-relaxed mb-6">
                Soy un estudiante de Ciencias de la Computación apasionado por la tecnología, 
                con experiencia en desarrollo full-stack y bases de datos. Estoy disponible para 
                pasantías, proyectos colaborativos y oportunidades de crecimiento profesional.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;