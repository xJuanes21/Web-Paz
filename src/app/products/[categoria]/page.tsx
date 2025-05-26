'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { categorias, productosMap, Producto } from '@/constants/producto';

export default function CategoriaPage() {
  const params = useParams();
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const [filtroProducto, setFiltroProducto] = useState('');
  
  // Asegurar que categoriaId sea string
  const categoriaId = Array.isArray(params.categoria) ? params.categoria[0] : params.categoria;
  
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

  // Encontrar la categoría actual
  const categoriaActual = categorias.find(cat => cat.id === categoriaId);
  
  // Obtener productos de la categoría - manejar undefined
  const productosCategoria = (categoriaId && productosMap[categoriaId as keyof typeof productosMap]) 
    ? productosMap[categoriaId as keyof typeof productosMap] 
    : [];
  
  // Filtrar productos por búsqueda
  const productosFiltrados = productosCategoria.filter((producto: Producto) =>
    producto.nombre.toLowerCase().includes(filtroProducto.toLowerCase()) ||
    (producto.descripcion && producto.descripcion.toLowerCase().includes(filtroProducto.toLowerCase()))
  );

  // Si la categoría no existe, redirigir
  if (!categoriaActual || !categoriaId) {
    return (
      <div className="w-full pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#561A16] mb-4">Categoría no encontrada</h1>
          <button 
            onClick={() => router.push('/products')}
            className="bg-[#561A16] text-white px-6 py-2 rounded-lg hover:bg-[#D4741C] transition-colors"
          >
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  // Función para manejar errores de imagen
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/assets/placeholder-product.png';
  };

  return (
    <div className="w-full pt-16 relative">
      {/* Hero Section */}
      <div className="relative py-16 min-h-[50vh] mb-0 overflow-hidden">
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
        />

        {/* Overlay con degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-[#D4741C]/50 z-10" />

        {/* Contenido del título */}
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-[#561A16] mb-6">
            <button 
              onClick={() => router.push('/')}
              className="hover:text-[#D4741C] transition-colors"
            >
              Inicio
            </button>
            <span>{'>'}</span>
            <button 
              onClick={() => router.push('/products')}
              className="hover:text-[#D4741C] transition-colors"
            >
              Productos
            </button>
            <span>{'>'}</span>
            <span className="font-medium">{categoriaActual.nombre}</span>
          </div>

          <div className="w-20 h-1 bg-[#561A16] mb-6" />
          
          <h1 className="text-4xl text-center text-[#561A16] font-bold mb-6 font-poppins">
            {categoriaActual.nombre}
          </h1>
          
          <p className="text-lg text-center text-[#561A16] font-open mb-6 max-w-3xl mx-auto">
            Descubre nuestra selección completa de {categoriaActual.nombre.toLowerCase()}. 
            Encontrarás {productosCategoria.length} productos de alta calidad para satisfacer tus necesidades.
          </p>
          
          <div className="w-20 h-1 bg-[#561A16] mt-6" />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="bg-gradient-to-br from-white via-white to-orange-50 py-12">
        <div className="container mx-auto px-4">
          {/* Filtros y búsqueda */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Buscador */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={filtroProducto}
                  onChange={(e) => setFiltroProducto(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4741C] focus:border-transparent"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Contador de productos */}
              <div className="text-sm text-[#561A16]/70">
                {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''} encontrado{productosFiltrados.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>

          {/* Grid de productos */}
          {productosFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productosFiltrados.map((producto: Producto) => (
                <div
                  key={producto.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
                >
                  {/* Imagen del producto */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={handleImageError}
                    />
                    
                    {/* Overlay en hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-[#561A16] px-4 py-2 rounded-lg font-medium hover:bg-[#D4741C] hover:text-white transition-colors">
                        Ver detalles
                      </button>
                    </div>
                  </div>

                  {/* Información del producto */}
                  <div className="p-4">
                    <h3 className="font-bold text-[#561A16] mb-2 line-clamp-2 group-hover:text-[#D4741C] transition-colors">
                      {producto.nombre}
                    </h3>
                    
                    {producto.descripcion && (
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        {producto.descripcion}
                      </p>
                    )}

                    {/* Botones de acción */}
                    <div className="flex gap-2">
                      <button className="flex-1 bg-[#561A16] text-white py-2 px-3 rounded-lg text-sm hover:bg-[#D4741C] transition-colors">
                        Ver más
                      </button>
                      <button className="bg-gray-100 text-[#561A16] py-2 px-3 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Estado vacío
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-500 mb-2">No se encontraron productos</h3>
              <p className="text-gray-400 mb-4">
                {filtroProducto 
                  ? `No hay productos que coincidan con "${filtroProducto}"`
                  : 'Esta categoría no tiene productos disponibles'
                }
              </p>
              {filtroProducto && (
                <button
                  onClick={() => setFiltroProducto('')}
                  className="bg-[#561A16] text-white px-4 py-2 rounded-lg hover:bg-[#D4741C] transition-colors"
                >
                  Limpiar búsqueda
                </button>
              )}
            </div>
          )}

          {/* Botón volver */}
          <div className="text-center mt-12">
            <button
              onClick={() => router.push('/products')}
              className="bg-white text-[#561A16] border-2 border-[#561A16] px-6 py-3 rounded-lg hover:bg-[#561A16] hover:text-white transition-colors font-medium"
            >
              ← Volver al catálogo completo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}