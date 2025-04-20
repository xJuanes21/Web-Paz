'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Vision = () => {
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

    const element = document.getElementById('vision-section');
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
      id="vision-section"
      className="w-full min-h-screen bg-[#D4741C] flex items-center justify-center p-6 sm:p-10 overflow-hidden"
    >
      <div className="w-full max-w-7xl rounded-xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 h-80 md:h-auto relative order-2 md:order-1">
            <div
              className="absolute inset-0 bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url('/assets/img-oficinas.jpg')`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center left'
              }}
              aria-hidden="true"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-white py-10 px-4 sm:px-8 lg:px-12 order-1 md:order-2">
            <div className="w-full max-w-lg">
              <div className="border-l-4 border-orange-500 pl-4 mb-6">
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-[#561A16]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isInView ? 1 : 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Visión
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
                  Colombo Farmacéutica S.A.S será una empresa líder en la distribución de medicamentos farmacéuticos e insumos hospitalarios, para el sector salud; seremos reconocidos por brindar soluciones oportunas a nuestros clientes con calidad, responsabilidad y compromiso.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;