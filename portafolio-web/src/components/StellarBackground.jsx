import React from 'react';
import { motion } from 'framer-motion';

const StellarBackground = () => {
  // Generar estrellas doradas MÁS SUTILES
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5, // Tamaños más pequeños
      duration: Math.random() * 5 + 4, // Animaciones más lentas
      delay: Math.random() * 4,
    }));
  };

  const stars = generateStars(30); // Menos estrellas
  const shootingStars = generateStars(1); // Solo una estrella fugaz

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Estrellas doradas MÁS SUTILES */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-stellar-bright"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 1.5}px rgba(212, 175, 55, 0.25)`, // Brillo más sutil
          }}
          animate={{
            opacity: [0.15, 0.5, 0.15], // Opacidades más bajas
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Estrella fugaz dorada MÁS SUTIL */}
      {shootingStars.map((star) => (
        <motion.div
          key={`shooting-${star.id}`}
          className="absolute h-0.5 bg-gradient-to-r from-stellar-bright to-transparent opacity-60"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: '60px', // Más corta
            transformOrigin: 'left center',
            rotate: '45deg',
            boxShadow: '0 0 4px rgba(212, 175, 55, 0.4)', // Brillo más sutil
          }}
          animate={{
            x: [0, 200],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 5, // Más lenta
            repeat: Infinity,
            delay: star.delay * 6,
            ease: "linear",
          }}
        />
      ))}

      {/* Nebulosas oscuras de fondo MÁS SUTILES */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stellar-muted rounded-full mix-blend-soft-light filter blur-3xl opacity-6 animate-float-stellar"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-space-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-4 animate-float-stellar" style={{ animationDelay: '5s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-stellar-warm rounded-full mix-blend-soft-light filter blur-3xl opacity-3 animate-float-stellar" style={{ animationDelay: '10s' }}></div>
      
      {/* Partículas orbitales doradas MÁS SUTILES */}
      <div className="absolute top-1/3 left-1/2 w-0.5 h-0.5">
        <div className="w-0.5 h-0.5 bg-stellar-bright rounded-full animate-orbit opacity-60" style={{ boxShadow: '0 0 3px rgba(212, 175, 55, 0.5)' }}></div>
      </div>
      <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5">
        <div className="w-0.5 h-0.5 bg-stellar-glow rounded-full animate-orbit opacity-40" style={{ animationDuration: '18s', animationDelay: '7s', boxShadow: '0 0 2px rgba(218, 165, 32, 0.4)' }}></div>
      </div>

      {/* Polvo estelar MÁS SUTIL */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-stellar-muted/3 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-stellar-warm/2 to-transparent"></div>
      </div>
    </div>
  );
};

export default StellarBackground;