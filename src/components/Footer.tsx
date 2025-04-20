'use client';
import { MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-[#561A16] via-[#C6441C] to-[#D4741C]  to-white text-white pb-6 px-6">

      <div className="container mx-auto">
        {/* Sección superior con logo e información de contacto en una sola fila */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          {/* Logo a la izquierda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #fff' }}
            className="w-fit "
          >
            <Image
              src="/assets/logo-colores.png"
              alt="Logo"
              width={150}
              height={150}
              className="drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
            />
          </motion.div>


          {/* Información de contacto en fila con separadores verticales */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
            {/* Ubicación */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left px-4">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-white" />
                <h3 className="font-medium">Contacto</h3>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Carrera 30 #32-15 Av. Gaitán <br />
                Tuluá, Valle del Cauca
              </p>
            </div>

            {/* Línea divisoria vertical - visible solo en desktop */}
            <div className="hidden md:block h-16 border-l border-white"></div>

            {/* Teléfono */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left px-4">
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-white" />
                <h3 className="font-medium">Línea de Atención</h3>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                (602) 231 6022
              </p>
            </div>

            {/* Línea divisoria vertical - visible solo en desktop */}
            <div className="hidden md:block h-16 border-l border-white"></div>

            {/* Horario */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left px-4">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-white" />
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
        <hr className="border-white mb-6" />

        {/* Copyright en la parte inferior */}
        <div className="text-sm text-white text-center">
          Copyright © 2025 J&MSolutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;