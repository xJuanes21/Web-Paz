// components/category/CategoryPageView.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Producto } from '@/constants/producto';
import { SearchBar } from './SearchBar';
import { useScrollParallax } from '@/hooks/useScrollParallax';
import { CategoryHero } from './CategoryHero';
import { ProductGrid } from './ProductGrid';

interface CategoryPageViewProps {
    categoriaId: string;
    categoriaNombre: string;
    productos: Producto[];
}

export function CategoryPageView({
    categoriaId,
    categoriaNombre,
    productos
}: CategoryPageViewProps) {
    const router = useRouter();
    const scrollY = useScrollParallax();
    const [filtroProducto, setFiltroProducto] = useState('');

    // Filtrar productos por búsqueda
    const productosFiltrados = productos.filter((producto: Producto) =>
        producto.nombre.toLowerCase().includes(filtroProducto.toLowerCase()) ||
        (producto.descripcion && producto.descripcion.toLowerCase().includes(filtroProducto.toLowerCase()))
    );

    return (
        <div className="w-full pt-16 relative">
            <CategoryHero
                categoriaId={categoriaId}
                categoriaNombre={categoriaNombre}
                totalProductos={productos.length}
                scrollY={scrollY}
            />

            <div className="bg-gradient-to-br from-white via-white to-orange-50 py-12">
                <div className="container mx-auto px-4">
                    {/* Filtros y búsqueda */}
                    <div className="mb-8">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            <SearchBar
                                value={filtroProducto}
                                onChange={setFiltroProducto}
                                placeholder="Buscar productos..."
                            />

                            <div className="text-sm text-[#561A16]/70">
                                {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''} encontrado{productosFiltrados.length !== 1 ? 's' : ''}
                            </div>
                        </div>
                    </div>

                    <ProductGrid
                        productos={productosFiltrados}
                        filtroProducto={filtroProducto}
                        onClearFilter={() => setFiltroProducto('')}
                    />

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