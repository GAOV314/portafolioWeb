import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiUsers, FiBook, FiStar } from 'react-icons/fi';

const Experience = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const experiences = [
    {
      id: 1,
      title: "Auxiliar de Cátedra - Estructura de Datos",
      company: "Universidad del Valle de Guatemala",
      location: "Guatemala",
      period: "2024",
      type: "Académico",
      description: "Apoyo académico en el curso de Estructura de Datos, ayudando a estudiantes con conceptos fundamentales de algoritmos y estructuras de datos.",
      technologies: ["Java", "C++", "Algoritmos", "Estructuras de Datos", "Análisis de Complejidad"],
      achievements: [
        "Análisis y revisión de código de otros estudiantes",
        "Apoyo personalizado a estudiantes con dudas del curso",
        "Refuerzo de conceptos de algoritmos y estructuras de datos",
        "Desarrollo de habilidades de enseñanza y comunicación técnica"
      ],
      skills_gained: [
        "Análisis de código",
        "Mentoring técnico",
        "Comunicación efectiva",
        "Resolución de problemas complejos"
      ]
    },
    {
      id: 2,
      title: "Estudiante de Ciencias de la Computación",
      company: "Universidad del Valle de Guatemala",
      location: "Guatemala",
      period: "2022 - Presente",
      type: "Educación",
      description: "Formación académica integral en ciencias de la computación, con enfoque en teoría computacional, algoritmos y desarrollo de software.",
      technologies: ["Java", "Python", "C++", "C", "JavaScript", "PostgreSQL", "Git"],
      achievements: [
        "Completado 5 semestres de la carrera con enfoque en teoría computacional",
        "Proyectos académicos en múltiples lenguajes de programación",
        "Experiencia en desarrollo full-stack web y móvil",
        "Conocimientos avanzados en bases de datos y diseño de sistemas"
      ],
      skills_gained: [
        "Pensamiento algorítmico",
        "Diseño de software",
        "Trabajo en equipo",
        "Gestión de proyectos"
      ]
    }
  ];

  const TimelineItem = ({ experience, index, isLast }) => (
    <motion.div
      className="relative"
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.2 }}
    >
      {/* Línea del timeline */}
      {!isLast && (
        <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-stellar-bright to-transparent"></div>
      )}
      
      {/* Punto del timeline */}
      <div className="absolute left-6 top-6 w-4 h-4 bg-stellar-bright rounded-full border-4 border-space-900 z-10 shadow-glow"></div>
      
      {/* Contenido */}
      <div className="ml-20 pb-12">
        <motion.div
          className="glass rounded-2xl p-8 hover:bg-stellar-bright/5 transition-all duration-300"
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between mb-6">
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                {experience.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-space-secondary mb-3">
                <div className="flex items-center space-x-2">
                  <FiBriefcase size={16} />
                  <span className="font-mono">{experience.company}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiMapPin size={16} />
                  <span className="font-mono">{experience.location}</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center space-x-2 text-stellar-bright">
                  <FiCalendar size={14} />
                  <span className="font-mono">{experience.period}</span>
                </div>
                <span className="px-3 py-1 bg-stellar-bright/20 text-stellar-bright rounded-full text-xs font-mono">
                  {experience.type}
                </span>
              </div>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-space-secondary mb-6 leading-relaxed font-mono">
            {experience.description}
          </p>

          {/* Logros */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2 font-mono">
              <FiStar size={18} />
              Logros y responsabilidades:
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-space-secondary">
                  <span className="text-stellar-warm mt-1 font-mono">▸</span>
                  <span className="font-mono">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Habilidades desarrolladas */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2 font-mono">
              <FiBook size={18} />
              Habilidades desarrolladas:
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills_gained.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-stellar-warm/20 text-stellar-warm rounded-full text-sm border border-stellar-warm/30 font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tecnologías */}
          <div>
            <h4 className="text-white font-semibold mb-3 font-mono">Tecnologías utilizadas:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-stellar-bright/20 text-stellar-bright rounded-full text-sm border border-stellar-bright/30 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-stellar-muted rounded-full mix-blend-soft-light filter blur-3xl opacity-8 animate-float-stellar"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-stellar-deep rounded-full mix-blend-soft-light filter blur-3xl opacity-6 animate-float-stellar" style={{ animationDelay: '3s' }}></div>
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
              📚 Mi trayectoria académica
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Experiencia <span className="text-gradient">Académica</span>
            </h2>
            <p className="text-space-secondary text-lg max-w-2xl mx-auto font-mono">
              Mi crecimiento académico y profesional en el mundo de la computación
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-stellar-bright to-stellar-warm mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>

          {/* Información adicional */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-mono">
                  <FiUsers size={20} />
                  Educación Actual
                </h3>
                <div className="space-y-3 text-space-secondary font-mono">
                  <p><span className="text-stellar-bright">Carrera:</span> Ciencias de la Computación</p>
                  <p><span className="text-stellar-bright">Universidad:</span> Universidad del Valle de Guatemala</p>
                  <p><span className="text-stellar-bright">Año Actual:</span> 3er año (cursando)</p>
                  <p><span className="text-stellar-bright">Período:</span> Segundo semestre de 3er año</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-mono">
                  <FiStar size={20} />
                  Enfoque Académico
                </h3>
                <div className="space-y-2 text-space-secondary font-mono">
                  <p>• Teoría computacional avanzada</p>
                  <p>• Algoritmos y estructuras de datos</p>
                  <p>• Desarrollo de software full-stack</p>
                  <p>• Bases de datos y sistemas</p>
                  <p>• Programación en múltiples paradigmas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;