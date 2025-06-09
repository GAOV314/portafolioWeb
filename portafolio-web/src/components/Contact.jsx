import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'ocanagadiel59@gmail.com',
      href: 'mailto:ocanagadiel59@gmail.com',
      description: 'Respuesta en 24 horas'
    },
    {
      icon: FiPhone,
      label: 'Teléfono',
      value: '+502 4477 9557',
      href: 'tel:+50244779557',
      description: 'Disponible 9 AM - 6 PM'
    },
    {
      icon: FiMapPin,
      label: 'Ubicación',
      value: 'Guatemala',
      href: null,
      description: 'GMT-6 (CST)'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'gadiel-amir-ocaña-veliz',
      href: 'https://www.linkedin.com/in/gadiel-amir-oca%C3%B1a-veliz-1970692a1/',
      description: 'Perfil profesional'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      // Aquí puedes integrar con un servicio de email como EmailJS
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-stellar-muted rounded-full mix-blend-soft-light filter blur-3xl opacity-8 animate-float-stellar"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-stellar-deep rounded-full mix-blend-soft-light filter blur-3xl opacity-6 animate-float-stellar" style={{ animationDelay: '3s' }}></div>
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
              Conectemos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
              Ponte en <span className="text-gradient">Contacto</span>
            </h2>
            <p className="text-space-secondary text-lg max-w-2xl mx-auto font-mono">
              ¿Tienes un proyecto en mente? ¿Quieres colaborar? Me encantaría escuchar de ti.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-stellar-bright to-stellar-warm mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Información de contacto */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                  Información de Contacto
                </h3>
                <p className="text-space-secondary mb-8 leading-relaxed font-mono">
                  Estoy siempre abierto a discutir nuevas oportunidades, proyectos interesantes, 
                  o simplemente charlar sobre tecnología y programación.
                </p>
              </div>

              {/* Lista de contacto */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start space-x-4 p-4 glass rounded-xl hover:bg-stellar-bright/5 transition-all duration-300"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-stellar-bright to-stellar-warm rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-black" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold font-mono">{item.label}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-stellar-bright hover:text-stellar-glow transition-colors font-mono block truncate"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-stellar-bright font-mono">{item.value}</p>
                      )}
                      <p className="text-space-muted text-sm font-mono">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Formulario de contacto */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                  Envíame un Mensaje
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-space-secondary font-medium mb-2 font-mono">
                        Nombre
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-space-muted" size={18} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-space-800 border border-space-600 rounded-lg text-white placeholder-space-muted focus:border-stellar-bright focus:ring-2 focus:ring-stellar-bright/20 transition-colors font-mono"
                          placeholder="Tu nombre"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-space-secondary font-medium mb-2 font-mono">
                        Email
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-space-muted" size={18} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-space-800 border border-space-600 rounded-lg text-white placeholder-space-muted focus:border-stellar-bright focus:ring-2 focus:ring-stellar-bright/20 transition-colors font-mono"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-space-secondary font-medium mb-2 font-mono">
                      Mensaje
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3 text-space-muted" size={18} />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-12 pr-4 py-3 bg-space-800 border border-space-600 rounded-lg text-white placeholder-space-muted focus:border-stellar-bright focus:ring-2 focus:ring-stellar-bright/20 transition-colors resize-none font-mono"
                        placeholder="Cuéntame sobre tu proyecto o idea..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-lg font-semibold transition-all duration-300 font-mono ${
                      isSubmitting
                        ? 'bg-space-700 text-space-muted cursor-not-allowed'
                        : 'btn-stellar hover:shadow-stellar'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-space-muted border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <FiSend size={18} />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-6 pt-6 border-t border-stellar-bright/10">
                  <p className="text-space-muted text-sm text-center font-mono">
                    También puedes contactarme directamente por{' '}
                    <a 
                      href="mailto:ocanagadiel59@gmail.com" 
                      className="text-stellar-bright hover:text-stellar-glow transition-colors"
                    >
                      email
                    </a>
                    {' '}o{' '}
                    <a 
                      href="tel:+50244779557" 
                      className="text-stellar-bright hover:text-stellar-glow transition-colors"
                    >
                      teléfono
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Estadísticas de contacto */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="glass rounded-xl p-6">
                <h3 className="text-2xl font-bold text-stellar-bright mb-2 font-mono">24h</h3>
                <p className="text-space-muted font-mono">Tiempo de respuesta promedio</p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-2xl font-bold text-stellar-bright mb-2 font-mono">Guatemala</h3>
                <p className="text-space-muted font-mono">Ubicación actual (GMT-6)</p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-2xl font-bold text-stellar-bright mb-2 font-mono">3 años</h3>
                <p className="text-space-muted font-mono">Experiencia en desarrollo</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;