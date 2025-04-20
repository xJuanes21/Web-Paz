'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
const Mission = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Activar la animación cuando al menos el 50% del componente esté visible
    );

    const element = document.getElementById('mission-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="mission-section"
      className="w-full min-h-screen bg-red-600 overflow-hidden relative"
    >
      <div className="flex flex-col md:flex-row h-[90vh] p-20">
        {/* Left Content Section */}
        <div className="p-8 md:w-1/2 flex flex-col bg-white justify-center">
          <div className="max-w-2xl mx-auto">
            <div className="border-l-4 border-orange-500 pl-4 mb-6">
              <motion.h2
                className="text-4xl font-bold text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Misión
              </motion.h2>
              <motion.h3
                className="text-2xl font-semibold text-gray-800 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Colombo Farmacéutica S.A.S
              </motion.h3>
            </div>

            <motion.div
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p>
                Colombo Farmacéutica S.A.S es una empresa que brinda productos farmacéuticos, medicinales,
                cosméticos, insumos hospitalarios y artículos de tocador, facilitando soluciones a las
                necesidades de la comunidad, con calidad, eficiencia y trabajo en equipo, enfocadas al
                bienestar y satisfacción de nuestros clientes, con un equipo humano calificado, responsable y
                competente, generando desarrollo económico y social a nuestra región.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 relative h-screen md:h-auto">
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url('/assets/img-bodega.jpg')`,
              backgroundAttachment: "fixed"
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Red border on top */}
    </section>
  );
};

export default Mission;
