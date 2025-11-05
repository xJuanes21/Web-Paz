// components/product/ProductImageGallery.tsx
'use client';
import { useState } from 'react';

interface ProductImageGalleryProps {
    image: string;
    nombre: string;
}

export function ProductImageGallery({ image, nombre }: ProductImageGalleryProps) {
    const [imageError, setImageError] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    const imageSrc = imageError ? '/assets/placeholder-product.png' : image;

    return (
        <div className="space-y-4">
            {/* Imagen Principal */}
            <div
                className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden group cursor-zoom-in"
                onClick={() => setIsZoomed(!isZoomed)}
            >
                <img
                    src={imageSrc}
                    alt={nombre}
                    className={`w-full h-full object-cover transition-transform duration-300 ${isZoomed ? 'scale-150' : 'group-hover:scale-105'
                        }`}
                    onError={handleImageError}
                />

                {/* Indicador de zoom */}
                {!isZoomed && (
                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Click para ampliar
                    </div>
                )}
            </div>

            {/* Miniaturas - Por ahora solo mostramos la imagen principal */}
            <div className="grid grid-cols-4 gap-2">
                <button className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-[#D4741C]">
                    <img
                        src={imageSrc}
                        alt={`${nombre} - vista 1`}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                    />
                </button>
                {/* Placeholder para futuras imágenes */}
                {[2, 3, 4].map(i => (
                    <div key={i} className="relative aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-transparent hover:border-gray-300 transition-colors cursor-not-allowed opacity-50">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
}