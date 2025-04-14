import React from 'react';
import { ArrowRight } from 'lucide-react';

// Componente Hero para una landing page farmacéutica
export default function PharmaceuticalHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-black via-red-900 to-orange-600">
      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full mb-4 font-medium bg-orange-600 text-white">
            Innovación en salud
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Soluciones farmacéuticas <span className="text-orange-500">avanzadas</span> para mejorar vidas
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Descubre nuestra línea de productos farmacéuticos desarrollados con los más altos estándares de calidad y basados en la última investigación científica.
          </p>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-red-600 hover:bg-red-800 text-white py-3 px-8 rounded-lg font-medium flex items-center justify-center transition-colors duration-300">
              Conoce nuestros productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-300">
              Contactar a un especialista
            </button>
          </div>
        </div>
      </div>
      
      {/* Barra de confianza */}
      <div className="absolute bottom-0 left-0 right-0 py-5 z-10 backdrop-blur bg-black bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-6">
            <p className="text-white font-medium">Certificados por las principales agencias de salud</p>
            <div className="flex space-x-8">
              <div className="h-8 w-16 rounded bg-orange-600"></div>
              <div className="h-8 w-16 rounded bg-red-600"></div>
              <div className="h-8 w-16 rounded bg-red-900"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}