'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { categorias } from '@/constants/producto';

export default function ProductosPage() {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

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

  const irACategoria = (categoriaId: string) => {
    router.push(`/products/${categoriaId}`);
  };

  return (
    <div className="w-full pt-16 relative">
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
          <h1 className="text-4xl text-center text-[#561A16] font-bold mb-6 font-poppins">
            Catálogo de Productos
          </h1>
          <p className="text-lg text-center text-[#561A16] font-open mb-6 max-w-3xl mx-auto">
            Explore nuestro completo catálogo con productos farmacéuticos, medicinales,
            cosméticos y más. Disponemos de una amplia variedad para satisfacer
            todas sus necesidades.
          </p>
          <div className="w-20 h-1 bg-[#561A16] mt-6"></div>
        </div>
      </div>

      {/* Contenido principal - Grid de categorías */}
      <div className="bg-gradient-to-br from-white via-white to-orange-600 py-16">
        <div className="container mx-auto px-4">
          {/* Título */}
          <h2 className="text-3xl font-bold text-center text-[#561A16] mb-12 font-poppins">
            Nuestras Categorías
          </h2>

          {/* Grid de categorías */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categorias.map((categoria) => (
              <div
                key={categoria.id}
                onClick={() => irACategoria(categoria.id)}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              >
                {/* Imagen de la categoría */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={categoria.imagen}
                    alt={categoria.nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#561A16] mb-3 font-poppins group-hover:text-[#D4741C] transition-colors">
                    {categoria.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Explore todos nuestros productos de {categoria.nombre.toLowerCase()}
                  </p>
                  
                  {/* Botón ver productos */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      irACategoria(categoria.id);
                    }}
                    className="w-full bg-[#561A16] text-white py-2 px-4 rounded-lg hover:bg-[#D4741C] transition-colors duration-300 font-medium"
                  >
                    Ver Productos
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Información adicional */}
          <div className="text-center mt-12">
            <p className="text-lg text-[#561A16]/70 font-open">
              Seleccione una categoría para explorar nuestros {categorias.length} tipos de productos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}