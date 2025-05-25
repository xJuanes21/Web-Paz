'use client';
import { MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-[#561A16] via-[#C6441C] to-[white] text-white pb-6 px-6">

      <div className="container mx-auto">
        {/* Sección superior con logo e información de contacto en una sola fila */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 mb-6">

          {/* Logo - Tamaño aumentado */}
          <div className="w-full md:w-auto flex justify-center md:justify-start mb-6 md:mb-0">
            <Image
              src="/assets/logohorizontal.png"
              alt="Logo"
              width={180}        // Aumentado de 120 a 180
              height={180}       // Aumentado de 120 a 180
              className="h-auto w-40 md:w-48 object-contain"  // Aumentado de w-24 md:w-32 a w-40 md:w-48
              priority
            />
          </div>

          {/* Información de contacto en fila con separadores verticales */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
            {/* Ubicación */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left px-3 md:px-4">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-white" />
                <h3 className="font-medium text-sm md:text-base">Contacto</h3>
              </div>
              <p className="text-xs text-[#dddddd] mt-1">
                Carrera 30 #32-15 Av. Gaitán <br />
                Tuluá, Valle del Cauca
              </p>
            </div>

            {/* Línea divisoria vertical - visible solo en desktop */}
            <div className="hidden md:block h-14 border-l border-white"></div>

            {/* Teléfono */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left px-3 md:px-4">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-white" />
                <h3 className="font-medium text-sm md:text-base">Línea de Atención</h3>
              </div>
              <p className="text-xs text-[#dddddd] mt-1">
                (602) 231 6022
              </p>
            </div>

            {/* Línea divisoria vertical - visible solo en desktop */}
            <div className="hidden md:block h-14 border-l border-white"></div>

            {/* Horario */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left px-3 md:px-4">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-white" />
                <h3 className="font-medium text-sm md:text-base">Horarios</h3>
              </div>
              <p className="text-xs text-[#dddddd] mt-1">
                Lun-Vie: 7:50am - 12m / 2:00pm - 6:00pm <br />
                Sab: 7:50am - 1pm
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria horizontal */}
        <hr className="border-white/50 mb-6" />

        {/* Copyright en la parte inferior */}
        <div className="text-xs md:text-sm text-white/90 text-center">
          Copyright © 2025 J&MSolutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;