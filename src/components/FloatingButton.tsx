'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const FloatingButtons = ({ 
  onWhatsAppClick = () => window.open('https://wa.me/573173543906'), 
  onEmailClick = () => window.location.href = 'mailto:compras@colombofarmaceutica.com', 
  onCallClick = () => window.location.href = 'tel:3154484953',
  whatsappNumber = '+573173543906',
  email = 'compras@colombofarmaceutica.com',
  phoneNumber = '3154484953'
}) => {
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

  // Funciones para manejar los clics si no se proporcionan handlers personalizados
  const handleWhatsAppClick = () => {
    if (onWhatsAppClick) {
      onWhatsAppClick();
    } else {
      // Comportamiento predeterminado: abrir WhatsApp con el número proporcionado
      window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`, '_blank');
    }
  };

  const handleEmailClick = () => {
    if (onEmailClick) {
      onEmailClick();
    } else {
      // Comportamiento predeterminado: abrir el cliente de correo
      window.location.href = `mailto:${email}`;
    }
  };

  const handleCallClick = () => {
    if (onCallClick) {
      onCallClick();
    } else {
      // Comportamiento predeterminado: iniciar llamada
      window.location.href = `tel:${phoneNumber.replace(/[^0-9]/g, '')}`;
    }
  };

  // Datos de los botones con sus respectivas acciones
  const buttons = [
    { 
      color: 'bg-[#D4741C]', 
      icon: <MessageCircle className="h-5 w-5" />, 
      label: 'WhatsApp',
      onClick: handleWhatsAppClick
    },
    { 
      color: 'bg-[#D4741C]', 
      icon: <Mail className="h-5 w-5" />, 
      label: 'Email',
      onClick: handleEmailClick
    },
    { 
      color: 'bg-[#D4741C]', 
      icon: <Phone className="h-5 w-5" />, 
      label: 'Llamar',
      onClick: handleCallClick
    },
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
                  className={`${button.color} w-12 h-12 rounded-full shadow-lg focus:outline-none flex items-center justify-center text-white relative group`}
                  variants={buttonVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={button.onClick}
                  aria-label={button.label}
                >
                  {button.icon}
                  {/* Tooltip con el nombre del botón */}
                  <span className="absolute right-16 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {button.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón principal */}
        <motion.button
          className="bg-[#C6441C] hover:bg-red-700 w-16 h-16 rounded-full shadow-lg focus:outline-none flex items-center justify-center text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowButtons(prev => !prev)} // También permite hacer clic para mostrar/ocultar
          aria-label="Mostrar opciones de contacto"
        >
          <span className="text-2xl font-bold">+</span>
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingButtons;