import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaPython, FaJava, FaJs, FaReact, FaDocker, FaDatabase, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiCplusplus, SiC, SiKotlin, SiPostgresql, SiJavascript, SiSqlite
} from 'react-icons/si';
import { FiCode } from 'react-icons/fi';

const Skills = () => {
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
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const allSkills = [
    // Lenguajes de Programación
    { name: "Python", icon: FaPython, color: "#3776ab", category: "language" },
    { name: "Java", icon: FaJava, color: "#f89820", category: "language" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", category: "language" },
    { name: "C++", icon: SiCplusplus, color: "#00599c", category: "language" },
    { name: "C", icon: SiC, color: "#a8b9cc", category: "language" },
    { name: "Kotlin", icon: SiKotlin, color: "#7f52ff", category: "language" },
    
    // Bases de Datos
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "database" },
    { name: "SQLite", icon: SiSqlite, color: "#003b57", category: "database" },
    { name: "SQL", icon: FaDatabase, color: "#d4af37", category: "database" },
    
    // Frameworks & Tecnologías
    { name: "React Native", icon: FaReact, color: "#61dafb", category: "framework" },
    { name: "Docker", icon: FaDocker, color: "#2496ed", category: "framework" },
    
    // Herramientas & Conceptos
    { name: "Git", icon: FaGitAlt, color: "#f05032", category: "tool" },
    { name: "Estructuras de Datos", icon: FaDatabase, color: "#d4af37", category: "concept" },
    { name: "Algoritmos", icon: FiCode, color: "#d4af37", category: "concept" },
    { name: "Programación Paralela", icon: SiCplusplus, color: "#00599c", category: "concept" },
  ];

  const SkillItem = ({ skill, index }) => (
    <motion.div
      className="flex items-center space-x-3 hover:bg-stellar-bright/5 p-3 rounded-lg transition-all duration-300 group"
      variants={itemVariants}
      whileHover={{ scale: 1.05, x: 5 }}
    >
      <div 
        className="w-8 h-8 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: `${skill.color}20` }}
      >
        <skill.icon 
          size={18} 
          style={{ color: skill.color }}
        />
      </div>
      <span className="text-white font-mono text-base group-hover:text-stellar-bright transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-4 bg-space-900/30 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-stellar-deep rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-float-stellar"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-stellar-warm rounded-full mix-blend-soft-light filter blur-3xl opacity-8 animate-float-stellar" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Título de sección */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-stellar-bright/10 text-stellar-bright rounded-full text-sm font-medium mb-4 font-mono">
              💻 Mis habilidades técnicas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Stack <span className="text-gradient">Tecnológico</span>
            </h2>
            <p className="text-space-secondary text-lg max-w-2xl mx-auto font-mono">
              Tecnologías y herramientas que domino a través de mi formación académica y proyectos personales
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-stellar-bright to-stellar-warm mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Skills organizadas en columnas */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
              {allSkills.map((skill, index) => (
                <SkillItem 
                  key={skill.name} 
                  skill={skill} 
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Especialidades */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8 font-mono">Áreas de Especialización</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Desarrollo Full-Stack",
                  description: "Frontend y backend para web y móviles",
                  icon: "🌐"
                },
                {
                  title: "Teoría Computacional",
                  description: "Algoritmos, estructuras de datos y complejidad",
                  icon: "🧮"
                },
                {
                  title: "Sistemas de Bases de Datos",
                  description: "Diseño, modelado y optimización de BD",
                  icon: "🗄️"
                }
              ].map((specialty, index) => (
                <motion.div
                  key={specialty.title}
                  className="p-6 hover:bg-stellar-bright/5 rounded-xl transition-colors"
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <span className="text-4xl mb-4 block">{specialty.icon}</span>
                  <h4 className="text-xl font-bold text-white mb-2 font-mono">{specialty.title}</h4>
                  <p className="text-space-secondary text-sm font-mono">{specialty.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;