import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full h-[750px] overflow-hidden">
      {/* Contenedor de la imagen de fondo */}
      <div className="absolute inset-0 bg-[url('/assets/hero.png')] bg-cover bg-center bg-fixed"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenedor de texto sobre la imagen */}
      <div className="relative z-10 flex flex-col justify-center text-white w-full h-full px-6">
        <div className="max-w-3xl mb-6">
          <div className="inline-block px-4 py-1.5 rounded-full mb-4 font-poppins  bg-orange-600 text-white">
            COLOMBO FARMACEUTICA S.A.S
          </div>
          <h1 className="text-4xl font-poppins  md:text-6xl  text-white mb-6">
            <span className="text-orange-500">Calidad</span> en productos y
            servicios
          </h1>
          <p className="text-lg md:text-xl font-open  text-gray-200 mb-8">
            Descubre nuestra línea de productos farmacéuticos desarrollados con
            los más altos estándares de calidad y basados en la última
            investigación científica.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-[#D4741C] hover:bg-red-800 text-white py-3 px-8 rounded-lg font-medium font-poppins flex items-center justify-center transition-colors duration-300">
              Conoce nuestros productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-[#C6441C] hover:bg-orange-700 text-white py-3 px-8 rounded-lg font-medium font-poppins transition-colors duration-300">
              Contactar a un especialista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}