import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/GAOV314',
      label: 'GitHub'
    },
    {
      icon: FiLinkedin,
      href: 'https://www.linkedin.com/in/gadiel-amir-oca%C3%B1a-veliz-1970692a1/',
      label: 'LinkedIn'
    },
    {
      icon: FiMail,
      href: 'mailto:ocanagadiel59@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-4 text-center overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stellar-bright rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-float-stellar"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stellar-warm rounded-full mix-blend-soft-light filter blur-3xl opacity-8 animate-float-stellar" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-stellar-muted rounded-full mix-blend-soft-light filter blur-3xl opacity-6 animate-float-stellar" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Saludo */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-stellar-bright/10 text-stellar-bright rounded-full text-sm font-medium mb-4 font-mono">
            Hola, soy
          </span>
        </motion.div>

        {/* Nombre principal */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-mono"
        >
          <span className="text-white">Gadiel Amir</span>
          <br />
          <span className="text-gradient">Ocaña Véliz</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-space-secondary mb-4 font-mono">
            Estudiante de Ciencias de la Computación
          </h2>
          <p className="text-lg md:text-xl text-space-muted max-w-2xl mx-auto leading-relaxed font-mono">
            Apasionado por la programación, los algoritmos y crear soluciones tecnológicas innovadoras
          </p>
        </motion.div>

        {/* Botones de acción */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <motion.a
            href="#contact"
            className="btn-stellar px-8 py-4 rounded-lg font-semibold transition-all duration-300 font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contactar
          </motion.a>
          <motion.a
            href="#projects"
            className="btn-stellar-outline px-8 py-4 rounded-lg font-semibold transition-all duration-300 font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver Proyectos
          </motion.a>
        </motion.div>

        {/* Redes sociales */}
        <motion.div variants={itemVariants} className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-space-secondary hover:text-stellar-bright hover:bg-stellar-bright/10 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;