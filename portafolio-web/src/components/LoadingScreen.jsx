import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #000000 70%, #000000 100%)'
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Estrellas doradas MÁS SUTILES de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-stellar-bright opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              boxShadow: '0 0 4px rgba(212, 175, 55, 0.4)',
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Logo espacial oscuro MÁS SUTIL */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-32 h-32 mx-auto relative">
            {/* Anillos orbitales dorados MÁS SUTILES */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-stellar-bright opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ borderStyle: 'dashed' }}
            />
            <motion.div
              className="absolute inset-3 rounded-full border border-stellar-glow opacity-20"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Núcleo central oscuro */}
            <div className="absolute inset-6 rounded-full glass-dark flex items-center justify-center">
              <motion.span 
                className="text-4xl font-bold text-gradient font-mono"
                animate={{ 
                  textShadow: [
                    '0 0 8px rgba(212, 175, 55, 0.3)',
                    '0 0 15px rgba(212, 175, 55, 0.5)',
                    '0 0 8px rgba(212, 175, 55, 0.3)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                G
              </motion.span>
            </div>

            {/* Partículas orbitales doradas MÁS SUTILES */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-stellar-bright rounded-full opacity-60"
                style={{
                  top: '50%',
                  left: '50%',
                  marginTop: '-2px',
                  marginLeft: '-2px',
                  boxShadow: '0 0 4px rgba(212, 175, 55, 0.6)',
                }}
                animate={{
                  rotate: 360,
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  rotate: {
                    duration: 5 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.8,
                  }
                }}
                transformTemplate={({ rotate }) => 
                  `rotate(${rotate}) translateX(${35 + i * 10}px) rotate(-${rotate})`
                }
              />
            ))}
          </div>
        </motion.div>

        {/* Texto de carga */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h2 
            className="text-2xl font-medium text-stellar-bright font-mono opacity-80"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Inicializando Sistema...
          </motion.h2>
          
          {/* Barra de progreso dorada MÁS SUTIL */}
          <div className="w-80 mx-auto">
            <div className="relative h-2 bg-space-900 rounded-full overflow-hidden border border-space-700">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-stellar-deep via-stellar-bright to-stellar-glow rounded-full opacity-70"
                initial={{ width: "0%", x: "-100%" }}
                animate={{ width: "100%", x: "0%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-stellar-bright to-transparent opacity-40"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            {/* Texto de estado MÁS SUTIL */}
            <motion.div 
              className="mt-4 text-stellar-glow text-sm font-mono opacity-70"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className="inline-block w-1.5 h-1.5 bg-stellar-bright rounded-full mr-2 animate-pulse-stellar-subtle"></span>
              Cargando recursos del portafolio...
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;