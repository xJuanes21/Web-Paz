'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { logosHumanos, logosVet } from '@/constants/logos';
import Labs from '@/components/Labs';

export default function Page() {
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

  // Función para dividir el array en grupos de 4
  const chunkArray = <T,>(array: T[], size: number): T[][] => {
    const chunkedArr: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Dividir los arrays en filas de 4
  const humanRows = chunkArray(logosHumanos, 4);
  const vetRows = chunkArray(logosVet, 4);

  return (
    <div className="w-full pt-15 relative">
      {/* Header con fondo */}
      <div className="relative py-12 min-h-[40vh] mb-8 overflow-hidden">
        {/* Mobile parallax con imagen */}
        <div className="block md:hidden w-full h-full absolute inset-0">
          <img
            src="/assets/trama1.png"
            alt="Background pattern"
            className="w-full h-full object-cover "
            style={{ ...mobileParallaxStyle, opacity: 0.6 }}
          />
        </div>

        {/* Desktop: parallax real con background-attachment: fixed */}
        <div 
          className="hidden md:block absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/trama1.png')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: 0.5
          }}
        ></div>
        
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 from-25% to-[#D4741C]/80 z-10"></div>
        


        {/* Contenido del título */}
        <div className="relative z-20 container mx-auto px-4">
          <h1 className='text-4xl text-center text-[#561A16] font-bold mb-4 font-poppins'>
            Nuestros laboratorios
          </h1>
          <p className='text-lg text-center text-[#561A16] font-open mb-0 '>
            Conoce nuestros laboratorios, trabajamos con lo mejor de la industria de la salud y el bienestar. <br /> 
            Nuestros productos son desarrollados con los mejores estandares de calidad y basados en la ultima investigacion cientifica
          </p>
        </div>
      </div>
      
      {/* Resto del contenido */}
      <div className="bg-gradient-to-br from-white via-white  to-orange-600">
        <Labs />
      </div>
    </div>
  );
}