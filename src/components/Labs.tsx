'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { logosHumanos, logosVet } from '@/constants/logos';

export default function Labs() {
  // Animaciones para los contenedores
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Animaciones para cada logo
  const logoVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.1, // Escala moderada al hacer hover
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-12 ">
      {/* Sección de logos humanos */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-[#561A16] relative inline-block">
          Línea Humanos
          <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-red-600 rounded-full"></span>
        </h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {logosHumanos.map((logo, index) => (
            <motion.div
              key={`human-${index}`}
              className="flex justify-center items-center h-24 px-4"
              variants={logoVariants}
              whileHover="hover"
            >
              <Image
                src={logo.path}
                alt={logo.alt}
                width={130} // 30% más grande (100 * 1.3 = 130)
                height={65} // 30% más grande (50 * 1.3 = 65)
                className="object-contain max-h-16 transition-all duration-300" // Eliminé grayscale y aumenté max-h
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Sección de logos veterinarios */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-[#561A16] relative inline-block">
          Línea Veterinaria
          <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-red-600 rounded-full"></span>
        </h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {logosVet.map((logo, index) => (
            <motion.div
              key={`vet-${index}`}
              className="flex justify-center items-center h-24 px-4"
              variants={logoVariants}
              whileHover="hover"
            >
              <Image
                src={logo.path}
                alt={logo.alt}
                width={130} // 30% más grande
                height={65} // 30% más grande
                className="object-contain max-h-16 transition-all duration-300" // Eliminé grayscale y aumenté max-h
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}