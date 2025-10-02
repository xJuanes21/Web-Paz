'use client';
import { motion } from 'framer-motion';
import TypingText from './CustomText'; // Asegúrate de tener este componente si lo vas a usar
import { fadeIn, staggerContainer } from '../utils/utils';
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Activar cuando al menos el 30% del componente esté visible
    );
    const element = document.getElementById("about-section");
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <motion.section
      id="about-section"
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      className="relative min-h-[80vh] py-24 bg-transparent text-white"
    >
      {/* Fondo con gradiente de izquierda a derecha */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="text-center px-4"
      >
        <div className="flex justify-center mt-8">
          <TypingText
            title="| ¿Quiénes somos?"
            textStyles="text-center " // Aumenté el tamaño del texto
          />
        </div>
        <p className="text-xl sm:text-2xl mt-4 max-w-4xl mx-auto font-open">
          {`Somos una empresa familiar
vallecaucana con más de diez
años de experiencia en el
sector salud. Dedicada al
comercio al por mayor de
productos farmacéuticos,
medicinales, quirúrgicos,
ortopédicos, hospitalarios,
odontológicos, veterinarios,
cosméticos y de aseo.
Destacada por ofrecer
servicios de alta calidad y
cumplir oportunamente las
necesidades del mercado.
Actualmente con dos líneas de
distribución: Entidades
prestadoras de salud y
Droguerías o farmacias a nivel
del Valle del Cauca, Antioquia,
Quindío, Caldas, y Risaralda.
`}
        </p>
      </motion.div>

      {/* Flecha hacia abajo */}
      <div className="flex justify-center mt-12">
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white animate-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </motion.section>

  );
};

export default About;
