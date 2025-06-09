import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiMapPin, FiCalendar, FiBook, FiCode, FiDatabase } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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

  const stats = [
    { icon: FiCode, label: 'Lenguajes de Programación', value: '7+' },
    { icon: FiDatabase, label: 'Tecnologías Dominadas', value: '15+' },
    { icon: FiBook, label: 'Año Universitario', value: '3ro' },
    { icon: FiUser, label: 'Experiencia Académica', value: '3+ años' },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-stellar-muted rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-float-stellar"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-stellar-warm rounded-full mix-blend-soft-light filter blur-3xl opacity-8 animate-float-stellar" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Título de la sección */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-stellar-bright/10 text-stellar-bright rounded-full text-sm font-medium mb-4 font-mono">
              🧑‍💻 Conoce más sobre mí
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Acerca de <span className="text-gradient">Mí</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-stellar-bright to-stellar-warm mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Imagen y info personal */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Avatar/Imagen */}
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="relative">
                  <div className="w-80 h-80 mx-auto glass rounded-2xl overflow-hidden">
                    {/* Avatar con iniciales */}
                    <div className="w-full h-full bg-gradient-to-br from-stellar-bright to-stellar-warm flex items-center justify-center">
                      <span className="text-8xl font-bold text-black opacity-80 font-mono">GAO</span>
                    </div>
                  </div>
                  
                  {/* Decoraciones */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-stellar-bright rounded-full opacity-20 animate-float-stellar"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-stellar-warm rounded-full opacity-15 animate-float-stellar" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>

              {/* Info personal */}
              <div className="space-y-4">
                {[
                  { icon: FiUser, label: 'Nombre', value: 'Gadiel Amir Ocaña Veliz' },
                  { icon: FiMapPin, label: 'Ubicación', value: 'Guatemala' },
                  { icon: FiCalendar, label: 'Edad', value: '20 años' },
                  { icon: FiBook, label: 'Universidad', value: 'Universidad del Valle de Guatemala' },
                ].map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover:bg-stellar-bright/5 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-stellar-bright to-stellar-warm rounded-full flex items-center justify-center">
                      <info.icon className="text-black" size={18} />
                    </div>
                    <div>
                      <p className="text-space-muted text-sm font-mono">{info.label}</p>
                      <p className="text-white font-medium font-mono">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contenido principal */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white font-mono">
                  Estudiante de Ciencias de la Computación
                </h3>
                
                <div className="space-y-4 text-space-secondary leading-relaxed font-mono">
                  <p>
                    ¡Hola! Soy Gadiel, estudiante de 
                    <span className="text-stellar-bright font-semibold"> Ciencias de la Computación</span> en la 
                    Universidad del Valle de Guatemala. Actualmente curso el 3er año de mi carrera 
                    y mi pasión por la programación crece cada día.
                  </p>
                  
                  <p>
                    Me fascina la 
                    <span className="text-stellar-warm font-semibold"> teoría computacional</span> y 
                    la complejidad que hay detrás de crear soluciones grandiosas. Disfruto usar la lógica 
                    para resolver problemas cada vez más desafiantes y escribir código limpio y organizado.
                  </p>
                  
                  <p>
                    Tengo experiencia como 
                    <span className="text-stellar-bright font-semibold"> auxiliar del curso de Estructura de Datos</span>, 
                    donde desarrollé habilidades para analizar código, ayudar a otros estudiantes y profundizar 
                    en algoritmos y estructuras de datos.
                  </p>
                </div>

                {/* Skills destacadas */}
                <div className="flex flex-wrap gap-3">
                  {['Java', 'Python', 'JavaScript', 'PostgreSQL', 'C++', 'React Native', 'Node.js', 'Django'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-stellar-bright/20 to-stellar-warm/20 text-stellar-bright rounded-full text-sm font-medium border border-stellar-bright/30 font-mono"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Estadísticas */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 glass rounded-xl hover:bg-stellar-bright/5 transition-colors"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-stellar-bright to-stellar-warm rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-black" size={24} />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 font-mono">{stat.value}</h4>
                  <p className="text-space-muted text-sm font-mono">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;