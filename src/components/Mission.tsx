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
      { threshold: 0.5 }
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
      className="w-full min-h-screen bg-[#C6441C] flex items-center justify-center p-6 sm:p-10 overflow-hidden"
    >
      <div className="w-full max-w-7xl rounded-xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Content Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-white py-10 px-4 sm:px-8 lg:px-12">
            <div className="w-full max-w-lg">
              <div className="border-l-4 border-orange-500 pl-4 mb-6">
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-[#561A16]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Misión
                </motion.h2>
                <motion.h3
                  className="text-xl sm:text-2xl font-semibold text-[#561A16] mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Colombo Farmacéutica S.A.S
                </motion.h3>
              </div>

              <motion.div
                className="text-[#561A16] text-base sm:text-lg leading-relaxed"
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
          <div className="w-full md:w-1/2 h-80 md:h-auto relative">
            <div
              className="absolute inset-0 bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url('/assets/img-bodega.jpg')`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center right'
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;