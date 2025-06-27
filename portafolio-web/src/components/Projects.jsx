import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiGithub, FiExternalLink, FiCode, FiUsers, FiCalendar, 
  FiX, FiArrowRight, FiStar, FiEye 
} from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

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

  const projects = [
    {
      id: 1,
      title: "Portafolio Web Personal",
      shortDescription: "Portafolio web moderno y responsive desarrollado con React y diseño espacial",
      fullDescription: "Mi portafolio web personal es una aplicación completa desarrollada con React, Vite y Tailwind CSS. Presenta un diseño único con temática espacial, animaciones fluidas con Framer Motion, y una experiencia de usuario completamente responsive. El sitio incluye secciones para mostrar mis habilidades, experiencia académica, proyectos y información de contacto.",
      technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "Framer Motion", "React Icons"],
      category: "frontend",
      status: "Completado",
      role: "Desarrollador único",
      teamSize: 1,
      github: {
        main: "https://github.com/GAOV314/portafolioWeb"
      },
      features: [
        "Diseño responsive y moderno",
        "Animaciones fluidas con Framer Motion",
        "Temática espacial única",
        "Navegación suave entre secciones",
        "Formulario de contacto funcional",
        "Optimizado para performance"
      ],
      challenges: [
        "Crear un diseño único y atractivo",
        "Implementar animaciones complejas pero elegantes",
        "Optimizar rendimiento con muchas animaciones",
        "Asegurar compatibilidad responsive en todos los dispositivos"
      ],
      learned: [
        "Desarrollo avanzado con React y Vite",
        "Animaciones profesionales con Framer Motion",
        "Diseño UX/UI moderno",
        "Optimización de performance web"
      ],
      image: "🌐",
      color: "#3b82f6"
    },
    {
      id: 2,
      title: "MoneyFlow - Sistema Financiero",
      shortDescription: "Sistema completo de gestión financiera para manejo de gastos, ingresos y presupuestos",
      fullDescription: "MoneyFlow es un sistema financiero integral desarrollado en colaboración con dos compañeros. Me encargué específicamente del desarrollo del frontend, creando una interfaz intuitiva y responsive para la gestión completa de finanzas personales. El sistema permite a los usuarios gestionar gastos, ingresos, presupuestos, y obtener análisis detallados de su comportamiento financiero.",
      technologies: ["React", "JavaScript", "CSS", "Node.js", "PostgreSQL", "Git"],
      category: "full-stack",
      status: "En desarrollo",
      role: "Frontend Developer",
      teamSize: 3,
      github: {
        frontend: "https://github.com/Emadlgg/MoneyFlow_Frontend",
        backend: "https://github.com/Emadlgg/MoneyFlow_Backend",
        deploy: "https://github.com/Emadlgg/MoneyFlow_deploy"
      },
      features: [
        "Gestión completa de gastos e ingresos",
        "Sistema de presupuestos inteligente",
        "Dashboard con análisis financiero",
        "Reportes y gráficos detallados",
        "Interfaz responsive y moderna",
        "Autenticación de usuarios"
      ],
      challenges: [
        "Diseño de UX/UI intuitivo para datos financieros complejos",
        "Implementación de gráficos interactivos",
        "Optimización de rendimiento para grandes volúmenes de datos",
        "Coordinación efectiva en equipo de desarrollo"
      ],
      learned: [
        "Desarrollo frontend avanzado",
        "Trabajo colaborativo en Git",
        "Diseño de interfaces complejas",
        "Integración frontend-backend"
      ],
      image: "💰",
      color: "#10b981"
    },
    {
      id: 3,
      title: "CSS Ditto - Arte en Código",
      shortDescription: "Recreación artística del Pokémon Ditto usando únicamente CSS puro",
      fullDescription: "Proyecto académico del curso de Desarrollo Web donde creé una representación visual completa del Pokémon Ditto utilizando exclusivamente CSS. Este proyecto demuestra dominio avanzado de CSS, incluyendo animaciones, transformaciones, y técnicas de diseño creativo sin usar imágenes externas.",
      technologies: ["HTML5", "CSS3", "Animations", "Transforms", "Pure CSS"],
      category: "frontend",
      status: "Completado",
      role: "Desarrollador único",
      teamSize: 1,
      github: {
        main: "https://github.com/GAOV314/CssDitto"
      },
      features: [
        "Dibujo completo en CSS puro",
        "Animaciones suaves y naturales",
        "Diseño responsive",
        "Efectos visuales creativos",
        "Código limpio y bien estructurado"
      ],
      challenges: [
        "Crear formas complejas solo con CSS",
        "Implementar animaciones fluidas",
        "Mantener proporciones correctas",
        "Optimizar código CSS para rendimiento"
      ],
      learned: [
        "CSS avanzado y técnicas creativas",
        "Animaciones CSS complejas",
        "Pensamiento visual en código",
        "Optimización de estilos"
      ],
      image: "🎨",
      color: "#8b5cf6"
    },
    {
      id: 4,
      title: "ChatClass - Chat Grupal",
      shortDescription: "Sistema de chat en tiempo real para comunicación grupal en clase",
      fullDescription: "Aplicación de chat desarrollada para facilitar la comunicación entre estudiantes de la clase. Implementa funcionalidades de mensajería en tiempo real, gestión de usuarios, y una interfaz intuitiva para conversaciones grupales académicas.",
      technologies: ["JavaScript", "Node.js", "WebSockets", "HTML5", "CSS3", "Real-time"],
      category: "full-stack",
      status: "Completado",
      role: "Desarrollador único",
      teamSize: 1,
      github: {
        main: "https://github.com/GAOV314/ChatClass"
      },
      features: [
        "Mensajería en tiempo real",
        "Interfaz intuitiva y moderna",
        "Gestión de usuarios",
        "Historial de conversaciones",
        "Diseño responsive"
      ],
      challenges: [
        "Implementación de WebSockets",
        "Sincronización en tiempo real",
        "Gestión de estados de conexión",
        "Diseño de interfaz eficiente"
      ],
      learned: [
        "Desarrollo con WebSockets",
        "Programación en tiempo real",
        "Arquitectura cliente-servidor",
        "Gestión de conexiones concurrentes"
      ],
      image: "💬",
      color: "#f59e0b"
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos los Proyectos', count: projects.length },
    { id: 'full-stack', name: 'Full-Stack', count: projects.filter(p => p.category === 'full-stack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const ProjectCard = ({ project, index }) => (
    <motion.div
      className="glass rounded-2xl overflow-hidden hover:bg-stellar-bright/5 transition-all duration-300 cursor-pointer group"
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => setSelectedProject(project)}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.2 }}
    >
      {/* Header del proyecto */}
      <div className="p-6 border-b border-stellar-bright/10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: `${project.color}20` }}
            >
              {project.image}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-mono group-hover:text-stellar-bright transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-space-muted mt-1">
                <span className="flex items-center space-x-1">
                  <FiUsers size={12} />
                  <span className="font-mono">{project.teamSize} {project.teamSize > 1 ? 'personas' : 'persona'}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <FiCode size={12} />
                  <span className="font-mono">{project.role}</span>
                </span>
              </div>
            </div>
          </div>
          <span 
            className={`px-3 py-1 rounded-full text-xs font-medium font-mono ${
              project.status === 'Completado' 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-yellow-500/20 text-yellow-400'
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-space-secondary leading-relaxed font-mono text-sm">
          {project.shortDescription}
        </p>
      </div>

      {/* Tecnologías */}
      <div className="p-6 border-b border-stellar-bright/10">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-stellar-bright/10 text-stellar-bright rounded-full text-xs font-mono border border-stellar-bright/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-space-700 text-space-muted rounded-full text-xs font-mono">
              +{project.technologies.length - 4} más
            </span>
          )}
        </div>
      </div>

      {/* Footer con botones */}
      <div className="p-6 flex items-center justify-between">
        <button className="flex items-center space-x-2 text-stellar-bright hover:text-stellar-glow transition-colors font-mono">
          <FiEye size={16} />
          <span>Ver detalles</span>
        </button>

        <div className="flex items-center space-x-3">
          {project.github.main && (
            <motion.a
              href={project.github.main}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 glass rounded-lg flex items-center justify-center text-space-secondary hover:text-stellar-bright transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub size={16} />
            </motion.a>
          )}
          {project.github.frontend && (
            <motion.a
              href={project.github.frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 glass rounded-lg flex items-center justify-center text-space-secondary hover:text-stellar-bright transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              title="Frontend Repository"
            >
              <FiCode size={16} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  const ProjectModal = ({ project }) => (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        className="max-w-4xl w-full max-h-[90vh] overflow-y-auto glass rounded-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 border-b border-stellar-bright/10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: `${project.color}20` }}
              >
                {project.image}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white font-mono">{project.title}</h2>
                <div className="flex items-center space-x-4 text-space-muted mt-2">
                  <span className="flex items-center space-x-1 font-mono">
                    <FiUsers size={14} />
                    <span>{project.teamSize} {project.teamSize > 1 ? 'personas' : 'persona'}</span>
                  </span>
                  <span className="flex items-center space-x-1 font-mono">
                    <FiCode size={14} />
                    <span>{project.role}</span>
                  </span>
                  <span 
                    className={`px-3 py-1 rounded-full text-xs font-medium font-mono ${
                      project.status === 'Completado' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="w-10 h-10 glass rounded-lg flex items-center justify-center text-space-muted hover:text-white transition-colors"
            >
              <FiX size={20} />
            </button>
          </div>

          <p className="text-space-secondary leading-relaxed font-mono">
            {project.fullDescription}
          </p>
        </div>

        {/* Contenido principal */}
        <div className="p-8 space-y-8">
          {/* Tecnologías */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-mono">Tecnologías Utilizadas</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-stellar-bright/10 text-stellar-bright rounded-lg font-mono border border-stellar-bright/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Características */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-mono">Características Principales</h3>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-space-secondary">
                  <span className="text-stellar-bright mt-1 font-mono">▸</span>
                  <span className="font-mono">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Desafíos */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-mono">Desafíos Enfrentados</h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-space-secondary">
                  <span className="text-stellar-warm mt-1 font-mono">•</span>
                  <span className="font-mono">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Aprendizajes */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-mono">Lo que Aprendí</h3>
            <div className="flex flex-wrap gap-2">
              {project.learned.map((learning, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-stellar-warm/20 text-stellar-warm rounded-full text-sm border border-stellar-warm/30 font-mono"
                >
                  {learning}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer con enlaces */}
        <div className="p-8 border-t border-stellar-bright/10">
          <div className="flex flex-wrap gap-4">
            {project.github.main && (
              <motion.a
                href={project.github.main}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 btn-stellar rounded-lg font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub size={18} />
                <span>Ver en GitHub</span>
              </motion.a>
            )}
            {project.github.frontend && (
              <motion.a
                href={project.github.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 btn-stellar-outline rounded-lg font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCode size={18} />
                <span>Frontend</span>
              </motion.a>
            )}
            {project.github.backend && (
              <motion.a
                href={project.github.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 btn-stellar-outline rounded-lg font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCode size={18} />
                <span>Backend</span>
              </motion.a>
            )}
            {project.github.deploy && (
              <motion.a
                href={project.github.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 btn-stellar-outline rounded-lg font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink size={18} />
                <span>Deploy</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-4 bg-space-900/30 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-stellar-deep rounded-full mix-blend-soft-light filter blur-3xl opacity-8 animate-float-stellar"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-stellar-warm rounded-full mix-blend-soft-light filter blur-3xl opacity-6 animate-float-stellar" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Título de sección */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-stellar-bright/10 text-stellar-bright rounded-full text-sm font-medium mb-4 font-mono">
              💼 Mi trabajo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Mis <span className="text-gradient">Proyectos</span>
            </h2>
            <p className="text-space-secondary text-lg max-w-2xl mx-auto font-mono">
              Una colección de proyectos que he desarrollado durante mi formación académica y experiencia personal
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-stellar-bright to-stellar-warm mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Filtros */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 font-mono ${
                  filter === category.id
                    ? 'bg-stellar-bright text-black'
                    : 'glass text-space-secondary hover:text-stellar-bright hover:bg-stellar-bright/10'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>

          {/* Grid de proyectos */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal de proyecto */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;