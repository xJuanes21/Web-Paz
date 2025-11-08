'use client';
import React, { useState } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const FloatingButtons = ({
  onWhatsAppClick = () => window.open('https://wa.me/573173543906'),
  onEmailClick = () => window.location.href = 'mailto:compras@colombofarmaceutica.com',
  onCallClick = () => window.location.href = 'tel:3154484953',
  whatsappNumber = '+573173543906',
  email = 'compras@colombofarmaceutica.com',
  phoneNumber = '3154484953',
  mascotImage = '/assets/MascotaColombo.png'
}) => {
  const [showButtons, setShowButtons] = useState(false);

  const handleWhatsAppClick = () => {
    if (onWhatsAppClick) {
      onWhatsAppClick();
    } else {
      window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`, '_blank');
    }
  };

  const handleEmailClick = () => {
    if (onEmailClick) {
      onEmailClick();
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  const handleCallClick = () => {
    if (onCallClick) {
      onCallClick();
    } else {
      window.location.href = `tel:${phoneNumber.replace(/[^0-9]/g, '')}`;
    }
  };

  const buttons = [
    {
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#20BA5A]',
      icon: (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-5.99C.122 5.3 5.421 0 12.057 0c3.17 0 6.155 1.237 8.413 3.49a11.82 11.82 0 013.49 8.41c-.003 6.637-5.304 11.936-11.94 11.936a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.593 5.448 0 9.886-4.434 9.889-9.882.002-5.462-4.415-9.89-9.881-9.892-5.451 0-9.89 4.434-9.892 9.884a9.86 9.86 0 001.468 5.18l-.967 3.533 3.991-1.416zM17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.149-.198.297-.77.966-.944 1.164-.173.198-.347.223-.644.074-1.758-.867-2.91-1.546-4.086-3.5-.309-.531.309-.49.886-1.637.098-.198.049-.37-.025-.519-.074-.149-.672-1.611-.922-2.206-.242-.579-.487-.5-.672-.51l-.57-.01c-.198 0-.52.074-.792.37-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
      ),
      label: 'WhatsApp',
      onClick: handleWhatsAppClick
    },
    {
      color: 'bg-[#D4741C]',
      hoverColor: 'hover:bg-[#B85F15]',
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      onClick: handleEmailClick
    },
    {
      color: 'bg-[#C6441C]',
      hoverColor: 'hover:bg-[#A73817]',
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
        {/* Bocadillo de mensaje */}
        <AnimatePresence>
          {showButtons && (
            <motion.div
              className="absolute bottom-32 -left-48 pointer-events-none"
              initial={{ opacity: 0, y: 10, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: 10, x: 20 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
            >
              <div className="relative">
                <div className="bg-white px-5 py-3 rounded-2xl shadow-xl border-2 border-[#D4741C]">
                  <p className="text-gray-800 font-medium text-sm whitespace-nowrap">
                    ¿En qué puedo ayudarte? 😊
                  </p>
                </div>
                {/* Flecha del bocadillo apuntando hacia la mascota */}
                <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r-2 border-b-2 border-[#D4741C] transform rotate-45"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botones de contacto */}
        <AnimatePresence>
          {showButtons && (
            <motion.div
              className="absolute bottom-28 right-0 flex flex-col-reverse gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {buttons.map((button, index) => (
                <motion.button
                  key={index}
                  className={`${button.color} ${button.hoverColor} w-14 h-14 rounded-full shadow-lg focus:outline-none flex items-center justify-center text-white relative group transition-colors`}
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      delay: index * 0.08,
                      type: 'spring',
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={button.onClick}
                  aria-label={button.label}
                >
                  {button.icon}
                  {/* Tooltip */}
                  <span className="absolute right-16 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                    {button.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón principal con la mascota */}
        <motion.button
          className="relative w-24 h-24 rounded-full overflow-visible shadow-2xl focus:outline-none bg-gradient-to-br from-[#D4741C] to-[#C6441C] p-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowButtons(prev => !prev)}
          aria-label="Mostrar opciones de contacto"
        >
          {/* Efecto de pulso cuando está cerrado */}
          {!showButtons && (
            <motion.div
              className="absolute inset-0 rounded-full bg-[#D4741C]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}

          {/* Contenedor de la imagen con fondo blanco */}
          <div className="relative w-full h-full rounded-full bg-[#D4741C] overflow-hidden flex items-center justify-center p-1">
            <img
              src={mascotImage}
              alt="Mascota Colombo"
              className="w-full h-full object-contain scale-110"
              draggable={false}
            />
          </div>

        </motion.button>
      </div>
    </div>
  );
};

export default FloatingButtons;