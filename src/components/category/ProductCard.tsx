// components/category/ProductCard.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Producto } from '@/constants/producto';
import { Eye } from 'lucide-react';

interface ProductCardProps {
    producto: Producto;
}

export function ProductCard({ producto }: ProductCardProps) {
    const router = useRouter();
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    const handleVerMas = () => {
        // Aquí puedes agregar la lógica para ver detalles del producto
        router.push(`/products/detail/${producto.id}`);
    };


    return (
        <div
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
            onClick={handleVerMas}
        >
            {/* Imagen del producto */}
            <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                    src={imageError ? '/assets/placeholder-product.png' : producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={handleImageError}
                />

                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-[#561A16] px-4 py-2 rounded-lg font-medium hover:bg-[#D4741C] hover:text-white transition-colors">
                        <Eye size={25} />
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
                    <button
                        onClick={handleVerMas}
                        className="flex-1 bg-[#561A16] text-white py-2 px-3 rounded-lg text-sm hover:bg-[#D4741C] transition-colors"
                    >
                        Ver más
                    </button>

                </div>
            </div>
        </div>
    );
}