'use client';
import { useState, useEffect } from 'react';

export default function ServiciosAlternativo() {
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(1);

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

  const servicios = [
    {
      id: 1,
      titulo: "Distribución de productos farmacéuticos",
      descripcion: "Garantizamos la entrega eficiente y segura de productos farmacéuticos a nivel nacional, cumpliendo con todas las normativas y cadenas de frío cuando sea necesario.",
      icono: "/api/placeholder/80/80"
    },
    {
      id: 2,
      titulo: "Dispensación de medicamentos",
      descripcion: "Nuestro sistema de dispensación asegura la correcta entrega de medicamentos, con verificación de prescripciones y asesoramiento profesional.",
      icono: "/api/placeholder/80/80"
    },
    {
      id: 3,
      titulo: "Comercialización de medicamentos",
      descripcion: "Ofrecemos un amplio catálogo de medicamentos de las mejores marcas, con precios competitivos y garantía de originalidad.",
      icono: "/api/placeholder/80/80"
    },
    {
      id: 4,
      titulo: "Insumos médicos y hospitalarios",
      descripcion: "Proveemos todo tipo de insumos para instituciones médicas y hospitalarias, desde material básico hasta equipamiento especializado.",
      icono: "/api/placeholder/80/80"
    }
  ];

  return (
    <div className="w-full pt-16  relative">
      {/* Header con efecto ondulado */}
      <div className="relative py-16 min-h-[60vh] mb-0 overflow-hidden">
        {/* Fondo con efecto parallax */}
        <div className="block md:hidden w-full h-full absolute inset-0">
          <img
            src="/assets/trama1.png"
            alt="Background pattern"
            className="w-full h-full object-cover"
            style={{ ...mobileParallaxStyle, opacity: 0.6 }}
          />
        </div>

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
        
        {/* Overlay con degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-[#D4741C]/50 z-10"></div>
        
        {/* Contenido del título */}
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
          <div className="w-20 h-1 bg-[#561A16] mb-6"></div>
          <h1 className="text-5xl text-center text-[#561A16] font-bold mb-6 font-poppins">
            Servicios Farmacéuticos
          </h1>
          <p className="text-lg text-center text-[#561A16] font-open max-w-3xl">
            Dedicados a ofrecer soluciones completas para el sector salud, mediante servicios farmacéuticos 
            de alta calidad que cumplen con los más rigurosos estándares de la industria.
          </p>
          <div className="w-20 h-1 bg-[#561A16] mt-6"></div>
        </div>
      </div>
      
      
      
      {/* Contenido de servicios con tabs */}
      <div className="bg-gradient-to-br from-white via-white to-orange-600 py-12">
        <div className="container mx-auto px-4">
          {/* Tabs de navegación */}
          <div className="flex flex-wrap justify-center mb-12 ">
            {servicios.map((servicio) => (
              <button
                key={servicio.id}
                onClick={() => setActiveService(servicio.id)}
                className={`px-6 py-4 text-lg font-medium transition-all duration-200 border-b-4 mx-2 mb-2 ${
                  activeService === servicio.id
                    ? "border-[#D4741C] text-[#561A16]"
                    : "border-transparent text-gray-500 hover:text-[#561A16]"
                }`}
              >
                {servicio.titulo.split(" ")[0]}
              </button>
            ))}
          </div>
          
          {/* Contenido de servicio activo */}
          {servicios.map((servicio) => (
            <div 
              key={servicio.id}
              className={`transition-all duration-500 ${
                activeService === servicio.id ? "opacity-100" : "hidden opacity-0"
              }`}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                  <div className="bg-[#D4741C]/10 p-4 md:p-8 rounded-lg">
                    <img
                      src={servicio.icono}
                      alt={servicio.titulo}
                      className="w-full h-64 object-contain mb-6 p-6"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-[#561A16] mb-6">{servicio.titulo}</h2>
                  <p className="text-xl text-gray-700 mb-8">{servicio.descripcion}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-1 bg-[#D4741C]"></div>
                    <p className="ml-4 text-[#561A16] font-medium">Servicio profesional garantizado</p>
                  </div>
                  <button className="mt-8 bg-[#561A16] text-white px-8 py-3 rounded-lg hover:bg-[#D4741C] transition-colors duration-300">
                    Más información
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Sección de estadísticas */}
      
    </div>
  );
}