'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingButtons = () => {
  const [showButtons, setShowButtons] = useState(false);

  // Configuración de las variantes de animación
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };

  // Datos de los botones para facilitar la generación
  const buttons = [
    { color: 'bg-orange-600',  icon: '💬' },
    { color: 'bg-orange-600',  icon: '📌' },
    { color: 'bg-orange-600',  icon: '📁' },
    { color: 'bg-orange-600',  icon: '⚙️' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className="relative"
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        {/* Contenedor para los botones animados */}
        <AnimatePresence>
          {showButtons && (
            <motion.div
              className="absolute bottom-20 right-1 flex flex-col-reverse gap-3"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
            >
              {buttons.map((button, index) => (
                <motion.button
                  key={index}
                  className={`${button.color} hover:${button.hoverColor} w-12 h-12 rounded-full shadow-lg focus:outline-none flex items-center justify-center text-white`}
                  variants={buttonVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => console.log(`Botón ${index + 1} clickeado`)}
                >
                  <span className="text-lg">{button.icon}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón principal */}
        <motion.button
          className="bg-red-600 hover:bg-red-400 w-16 h-16 rounded-full shadow-lg focus:outline-none flex items-center justify-center text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl font-bold">+</span>
        </motion.button>
      </div>
    </div>
  );
};


export default FloatingButtons;