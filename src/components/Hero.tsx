'use client';
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileParallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
    transition: 'transform 0.5s ease-out',
  };

  return (
    <div className="relative w-full h-[600px] md:h-[750px] overflow-hidden">
      {/* Imagen fondo estilo fijo: simulada en mobile con transform, real en desktop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mobile: fondo con parallax simulado */}
        <div className="block md:hidden w-full h-full overflow-hidden">
          <img
            src="/assets/hero.png"
            alt="Hero mobile"
            className="w-full h-full object-cover"
            style={mobileParallaxStyle}
          />
        </div>

        {/* Desktop: parallax real */}
        <div
          className="hidden md:block w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/assets/hero.jpg')" }}
        ></div>
      </div>

      {/* Capa oscura para ambos modos */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 flex flex-col justify-center text-white w-full h-full px-4 md:px-6">
        <div className="max-w-3xl mb-6">
          <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-3 md:mb-4 font-poppins bg-orange-600 text-white text-sm md:text-base">
            COLOMBO FARMACEUTICA S.A.S
          </div>
          <h1 className="text-3xl font-poppins md:text-6xl text-white mb-4 md:mb-6 leading-tight">
            <span className="text-orange-500">Calidad</span> en productos y servicios
          </h1>
          <p className="text-base md:text-xl font-open text-gray-200 mb-6 md:mb-8">
            Descubre nuestra línea de productos farmacéuticos desarrollados con los más altos estándares de calidad y basados en la última investigación científica.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
            <button className="bg-[#D4741C] hover:bg-red-800 text-white py-2.5 md:py-3 px-6 md:px-8 rounded-lg font-medium font-poppins flex items-center justify-center transition-colors duration-300 text-sm md:text-base">
              Conoce nuestros productos
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button className="bg-[#C6441C] hover:bg-orange-700 text-white py-2.5 md:py-3 px-6 md:px-8 rounded-lg font-medium font-poppins transition-colors duration-300 text-sm md:text-base">
              Contactar a un especialista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
