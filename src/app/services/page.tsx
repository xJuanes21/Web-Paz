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
      descripcion: "Garantizamos la entrega eficiente y segura de productos farmacéuticos a nivel nacional, cumpliendo con todas las normativas y cadenas de frío cuando sea necesario, colombo farmacéutica SAS cuenta con su propia flota vehicular, llegando de manera oportuna a cualquier lugar del país, nuestros conductores están completamente capacitados para resolver cualquier tipo de situación que pueda presentarse en el trayecto, cada vehículo cuenta con GPS en tiempo real para monitorear el tiempo estimado de entrega y cumplir a cabalidad la ruta programada.",
       icono: "/assets/distribucion.png"
    },
    {
      id: 2,
      titulo: "Dispensación de medicamentos",
      descripcion: "Nuestro sistema de dispensación asegura la correcta entrega de medicamentos, con verificación de prescripciones y asesoramiento profesional, contamos con un equipo altamente capacitado para cumplir los requerimientos legales vigentes, dentro equipo se encuentra un químico farmacéutico y un regente que están en constante verificación de la ejecución de esta función, capacitando nuestros auxiliares de farmacia y demás personal encargado de llevar a cabo una tarea de tan alta responsabilidad.",
      icono: "/assets/dispensacion.png"
    },
    {
      id: 3,
      titulo: "Comercialización de medicamentos",
      descripcion: "En colombo farmacéutica ofrecemos un amplio catálogo de medicamentos de las mejores marcas, con precios competitivos y garantía de originalidad pues nuestros aliados son laboratorios con reconocimiento a nivel mundial, lo que nos permite asegurar la confiabilidad de los mismos, el área de comercio dentro de nuestra organización presta un servicio de altísima pues nuestros clientes son un pilar fundamental para seguir adelante en nuestro funcionamiento, estamos en búsqueda constante de satisfacer todas sus necesidades.",
      icono: "/assets/comercializacion.png"
    },
    {
      id: 4,
      titulo: "Insumos médicos y hospitalarios",
      descripcion: "Proveemos todo tipo de insumos para instituciones médicas y hospitalarias, desde material básico hasta equipamiento especializado, tenemos dentro de nuestro portafolio una amplia gama de laboratorios reconocidos a nivel mundial, contamos con insumos de papelería y cafetería, odontologia y aseo.",
      icono: "/assets/insumos.png"
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
          <div className="mb-12">
            {/* Versión móvil - grid 2x2 */}
            <div className="grid grid-cols-2 gap-3 md:hidden px-4">
              {servicios.map((servicio) => (
                <button
                  key={servicio.id}
                  onClick={() => setActiveService(servicio.id)}
                  className={`px-6 py-4 text-lg font-medium transition-all duration-200 border-b-4 mx-2 mb-2 ${activeService === servicio.id
                    ? "border-[#D4741C] text-[#561A16]"
                    : "border-transparent text-gray-500 hover:text-[#561A16]"
                    }`}
                >
                  {servicio.titulo.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Versión desktop - mantienes el original */}
            <div className="hidden md:flex flex-wrap justify-center">
              {servicios.map((servicio) => (
                <button
                  key={servicio.id}
                  onClick={() => setActiveService(servicio.id)}
                  className={`px-6 py-4 text-lg font-medium transition-all duration-200 border-b-4 mx-2 mb-2 ${activeService === servicio.id
                    ? "border-[#D4741C] text-[#561A16]"
                    : "border-transparent text-gray-500 hover:text-[#561A16]"
                    }`}
                >
                  {servicio.titulo.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Contenido de servicio activo */}
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className={`transition-all duration-500 ${activeService === servicio.id ? "opacity-100" : "hidden opacity-0"
                }`}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                  <div className="bg-[#D4741C]/10 rounded-lg overflow-hidden w-full max-w-md mx-auto md:max-w-none">
                    <img
                      src={servicio.icono}
                      alt={servicio.titulo}
                      className="w-full h-80 md:h-96 lg:h-[500px] xl:h-[550px] object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-[#561A16] mb-6">{servicio.titulo}</h2>
                  <p className="text-xl text-gray-700 mb-8">{servicio.descripcion}</p>
                  <div className="flex items-center mb-10">
                    <div className="w-12 h-1 bg-[#D4741C]"></div>
                    <p className="ml-4 text-[#561A16] font-medium">Servicio profesional garantizado</p>
                  </div>
                  <a href='https://wa.me/573173543906' target='_blank' className="mt-8 bg-[#561A16] text-white  px-8 py-3 rounded-lg hover:bg-[#D4741C] transition-colors duration-300">
                    Más información
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}