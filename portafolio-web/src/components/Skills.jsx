import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaPython, FaJava, FaJs, FaNodeJs, FaReact, FaDocker, FaDatabase, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiCplusplus, SiCsharp, SiC, SiKotlin, SiPostgresql, SiMongodb, 
  SiDjango, SiJavascript, SiStreamlit, SiOpenai, SiNeo4J, SiMariadb,
  SiSqlite, SiPostman
} from 'react-icons/si';
import { FiCpu, FiCode } from 'react-icons/fi'; // Para Assembly y otros

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

  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      skills: [
        { name: "Java", icon: FaJava, level: 90, color: "#f89820", description: "Avanzado" },
        { name: "Python", icon: FaPython, level: 90, color: "#3776ab", description: "Avanzado" },
        { name: "JavaScript", icon: SiJavascript, level: 85, color: "#f7df1e", description: "Avanzado" },
        { name: "C++", icon: SiCplusplus, level: 85, color: "#00599c", description: "Avanzado" },
        { name: "C#", icon: SiCsharp, level: 70, color: "#239120", description: "Intermedio" },
        { name: "C", icon: SiC, level: 75, color: "#a8b9cc", description: "Intermedio" },
        { name: "Kotlin", icon: SiKotlin, level: 65, color: "#7f52ff", description: "Intermedio" },
        { name: "Assembly", icon: FiCpu, level: 60, color: "#654ff0", description: "Básico" },
      ]
    },
    {
      title: "Bases de Datos",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, level: 90, color: "#336791", description: "Avanzado" },
        { name: "SQL", icon: FaDatabase, level: 85, color: "#d4af37", description: "Avanzado" },
        { name: "SQLite", icon: SiSqlite, level: 75, color: "#003b57", description: "Intermedio" },
        { name: "Neo4j", icon: SiNeo4J, level: 70, color: "#008cc1", description: "Intermedio" },
        { name: "MariaDB", icon: SiMariadb, level: 50, color: "#003545", description: "Básico" },
      ]
    },
    {
      title: "Frameworks & Tecnologías",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 80, color: "#339933", description: "Intermedio-Avanzado" },
        { name: "React Native", icon: FaReact, level: 75, color: "#61dafb", description: "Intermedio" },
        { name: "Django", icon: SiDjango, level: 45, color: "#092e20", description: "Básico" },
        { name: "Docker", icon: FaDocker, level: 65, color: "#2496ed", description: "Intermedio" },
        { name: "Streamlit", icon: SiStreamlit, level: 70, color: "#ff4b4b", description: "Intermedio" },
        { name: "OpenAI API", icon: SiOpenai, level: 65, color: "#412991", description: "Intermedio" },
      ]
    },
    {
      title: "Herramientas & Otros",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 85, color: "#f05032", description: "Avanzado" },
        { name: "Postman", icon: SiPostman, level: 80, color: "#ff6c37", description: "Intermedio-Avanzado" },
        { name: "Estructuras de Datos", icon: FaDatabase, level: 90, color: "#d4af37", description: "Avanzado" },
        { name: "Algoritmos", icon: FiCode, level: 90, color: "#d4af37", description: "Avanzado" },
        { name: "Paralelismo", icon: SiCplusplus, level: 75, color: "#00599c", description: "Intermedio" },
        { name: "LLM Development", icon: SiOpenai, level: 60, color: "#412991", description: "Básico-Intermedio" },
      ]
    }
  ];

  const SkillBar = ({ skill, index }) => (
    <motion.div
      className="mb-6"
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center glass"
            style={{ backgroundColor: `${skill.color}15` }}
          >
            <skill.icon 
              size={20} 
              style={{ color: skill.color }}
            />
          </div>
          <div>
            <span className="text-white font-medium font-mono">{skill.name}</span>
            <p className="text-space-muted text-xs font-mono">{skill.description}</p>
          </div>
        </div>
        <span className="text-stellar-bright font-semibold font-mono">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-space-800 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}60, ${skill.color})`
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-4 bg-space-900/30 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-stellar-deep rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-float-stellar"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-stellar-warm rounded-full mix-blend-soft-light filter blur-3xl opacity-8 animate-float-stellar" style={{ animationDelay: '2s' }}></div>
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
              💻 Mis habilidades técnicas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Stack <span className="text-gradient">Tecnológico</span>
            </h2>
            <p className="text-space-secondary text-lg max-w-2xl mx-auto font-mono">
              Tecnologías y herramientas que he aprendido durante mi formación académica y proyectos personales
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-stellar-bright to-stellar-warm mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Grid de categorías */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass rounded-2xl p-8 hover:bg-stellar-bright/5 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center font-mono">
                  {category.title}
                </h3>
                
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={categoryIndex * category.skills.length + skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Especialidades adicionales */}
          <motion.div variants={itemVariants} className="text-center mb-12">
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
                  className="p-6 glass rounded-xl hover:bg-stellar-bright/5 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.5 + index * 0.2 }}
                >
                  <span className="text-4xl mb-4 block">{specialty.icon}</span>
                  <h4 className="text-xl font-bold text-white mb-2 font-mono">{specialty.title}</h4>
                  <p className="text-space-secondary text-sm font-mono">{specialty.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Estadísticas académicas */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Lenguajes", value: "7+", icon: "💻" },
              { label: "Tecnologías", value: "15+", icon: "⚡" },
              { label: "Años Estudiando", value: "3+", icon: "📚" },
              { label: "Universidad", value: "UVG", icon: "🎓" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 glass rounded-xl hover:bg-stellar-bright/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 2 + index * 0.1 }}
              >
                <span className="text-3xl mb-2 block">{stat.icon}</span>
                <h4 className="text-2xl font-bold text-white mb-1 font-mono">{stat.value}</h4>
                <p className="text-space-muted text-sm font-mono">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;