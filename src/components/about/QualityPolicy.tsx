'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Award, CheckCircle, Shield, Target } from 'lucide-react';

const QualityPolicy = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('quality-policy-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const qualityPillars = [
    {
      icon: Shield,
      title: 'Cumplimiento',
      description: 'Requisitos legales y reglamentarios'
    },
    {
      icon: Target,
      title: 'Excelencia',
      description: 'Altos estándares de calidad'
    },
    {
      icon: CheckCircle,
      title: 'Mejora Continua',
      description: 'Optimización de procesos'
    },
    {
      icon: Award,
      title: 'Sostenibilidad',
      description: 'Prácticas responsables'
    }
  ];

  return (
    <section
      id="quality-policy-section"
      className="w-full min-h-screen bg-gradient-to-br from-[#561A16] via-[#C6441C] to-[#D4741C] flex items-center justify-center p-6 sm:p-10 lg:p-16 overflow-hidden relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4741C]/20 rounded-full blur-3xl"></div>

      <div className="w-full max-w-6xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 mb-6">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Políticas de Calidad
          </h2>
          <div className="w-24 h-1 bg-white/60 mx-auto mb-4"></div>
          <h3 className="text-xl sm:text-2xl text-white/90 font-semibold">
            Colombo Farmacéutica S.A.S
          </h3>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-12 mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="prose prose-lg max-w-none">
            <motion.p
              className="text-[#561A16] text-base sm:text-lg leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              En <span className="font-semibold text-[#C6441C]">Colombo Farmacéutica S.A.S.</span>, la calidad es un principio fundamental que guía
              todas nuestras actividades. Estamos comprometidos con la satisfacción de nuestros
              clientes y demás partes interesadas, mediante el cumplimiento riguroso de los
              requisitos legales, reglamentarios y contractuales aplicables a nuestros productos y
              servicios.
            </motion.p>
            
            <motion.p
              className="text-[#561A16] text-base sm:text-lg leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Nuestro objetivo es ofrecer productos farmacéuticos y hospitalarios que sean
              seguros, eficaces y oportunos, garantizando altos estándares de calidad en cada
              etapa de nuestros procesos.
            </motion.p>
            
            <motion.p
              className="text-[#561A16] text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Mantenemos un firme compromiso con la mejora continua, el fortalecimiento de las
              competencias de nuestros colaboradores y el trabajo conjunto con proveedores
              confiables, promoviendo prácticas responsables que contribuyan a la sostenibilidad
              de la empresa y del entorno.
            </motion.p>
          </div>
        </motion.div>

        {/* Quality Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityPillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:bg-white transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C6441C] to-[#D4741C] flex items-center justify-center mb-4">
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-[#561A16] mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-[#561A16]/70">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
