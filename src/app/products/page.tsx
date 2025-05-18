'use client';
import { useState, useEffect } from 'react';
import { categorias, productosMap, Producto } from '@/constants/producto';
import SliderProd from '@/components/SliderProd/SliderProv';

export default function ProductosPage() {
  const [scrollY, setScrollY] = useState(0);
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

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

  // Función para filtrar las categorías que se mostrarán
  const obtenerCategoriasVisibles = () => {
    if (categoriaActiva === 'todos') {
      return categorias;
    }
    return categorias.filter(cat => cat.id === categoriaActiva);
  };

  return (
    <div className="w-full pt-16 relative">
      {/* Header con fondo */}
      <div className="relative py-12 min-h-[40vh] mb-0 overflow-hidden">
        {/* Mobile parallax con imagen */}
        <div className="block md:hidden w-full h-full absolute inset-0">
          <img
            src="/assets/trama1.png"
            alt="Background pattern"
            className="w-full h-full object-cover"
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
          <h1 className="text-4xl text-center text-[#561A16] font-bold mb-6 font-poppins">
            Catálogo de Productos
          </h1>
          <p className="text-lg text-center text-[#561A16] font-open mb-6 max-w-3xl mx-auto">
            Explore nuestro completo catálogo con productos farmacéuticos, medicinales, 
            cosméticos y más. Disponemos de una amplia variedad para satisfacer 
            todas sus necesidades.
          </p>
        </div>
      </div>
      
      {/* Contenido principal - Fondo unificado con filtros y sliders */}
      <div className="bg-gradient-to-br from-white via-white to-orange-600 py-12">
        <div className="container mx-auto px-4">
          {/* Filtros categóricos */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  categoriaActiva === 'todos' 
                    ? 'bg-[#561A16] text-white' 
                    : 'bg-white/80 text-[#561A16] hover:bg-[#D4741C]/20'
                }`}
                onClick={() => setCategoriaActiva('todos')}
              >
                Todos los productos
              </button>
              
              {categorias.map((categoria) => (
                <button 
                  key={categoria.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    categoriaActiva === categoria.id 
                      ? 'bg-[#561A16] text-white' 
                      : 'bg-white/80 text-[#561A16] hover:bg-[#D4741C]/20'
                  }`}
                  onClick={() => setCategoriaActiva(categoria.id)}
                >
                  {categoria.nombre}
                </button>
              ))}
            </div>
          </div>
          
          {/* Sliders de productos filtrados */}
          <div className="space-y-16">
            {obtenerCategoriasVisibles().map((categoria) => (
              <div key={categoria.id} id={categoria.id}>
                {/* Título centrado para cada categoría */}
                <h2 className="text-2xl font-bold text-center text-[#561A16] mb-8 font-poppins">
                  {categoria.nombre}
                </h2>
                
                {/* Slider de productos */}
                <SliderProd
                  productos={productosMap[categoria.id] || []}
                  titulo=""  // Título vacío ya que lo mostramos arriba
                  mostrarVerMas={false}  // No mostramos el botón "Ver más"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}