'use client';
import { MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white pb-6 px-6">
      <hr className="border-slate-700 " />

      <div className="container mx-auto">
        {/* Sección superior con logo e información de contacto en una sola fila */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          {/* Logo a la izquierda */}
          <div className="text-3xl font-bold tracking-wider mb-6 md:mb-0">
            <Image src="/assets/logo-blanco.png" alt="Logo" width={150} height={150} />
          </div>

          {/* Información de contacto en fila con separadores verticales */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
            {/* Ubicación */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left px-4">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-black" />
                <h3 className="font-medium">Contacto</h3>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Carrera 30 #32-15 Av. Gaitán <br />
                Tuluá, Valle del Cauca
              </p>
            </div>

            {/* Línea divisoria vertical - visible solo en desktop */}
            <div className="hidden md:block h-16 border-l border-slate-700"></div>

            {/* Teléfono */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left px-4">
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-black" />
                <h3 className="font-medium">Síguenos</h3>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                (602) 231 6022
              </p>
            </div>

            {/* Línea divisoria vertical - visible solo en desktop */}
            <div className="hidden md:block h-16 border-l border-slate-700"></div>

            {/* Horario */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left px-4">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-black" />
                <h3 className="font-medium">Horarios</h3>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Lun-Vie: 7:50am - 12m / 2:00pm - 6:00pm <br />
                Sab: 7:50am - 1pm
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria horizontal */}
        <hr className="border-slate-700 mb-6" />

        {/* Copyright en la parte inferior */}
        <div className="text-sm text-black text-center">
          Copyright © 2025 J&MSolutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;