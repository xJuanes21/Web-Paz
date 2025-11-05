// components/product/ProductInfo.tsx
import { Producto } from '@/constants/producto';

interface ProductInfoProps {
    product: Producto;
    categoryName: string;
}

export function ProductInfo({ product, categoryName }: ProductInfoProps) {
    return (
        <div className="space-y-4 mb-6">
            {/* Categoría */}
            <div className="inline-block">
                <span className="bg-[#D4741C]/10 text-[#D4741C] px-3 py-1 rounded-full text-sm font-medium">
                    {categoryName}
                </span>
            </div>

            {/* Nombre del Producto */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#561A16]">
                {product.nombre}
            </h1>

            {/* ID del Producto */}
            <p className="text-sm text-gray-500">
                Código: <span className="font-mono font-medium">#{product.id}</span>
            </p>

            {/* Descripción */}
            {product.descripcion && (
                <div className="border-t border-b border-gray-200 py-4 my-4">
                    <h2 className="text-lg font-semibold text-[#561A16] mb-2">
                        Descripción
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {product.descripcion}
                    </p>
                </div>
            )}

            {/* Características (mockup) */}
            <div>
                <h3 className="text-lg font-semibold text-[#561A16] mb-3">
                    Características
                </h3>
                <ul className="space-y-2">
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Alta calidad certificada</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Disponible para entrega inmediata</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Garantía del fabricante</span>
                    </li>
                </ul>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2 pt-2">
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-600 font-medium">En Stock</span>
                </div>
            </div>
        </div>
    );
}