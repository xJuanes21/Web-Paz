// components/product/RelatedProducts.tsx
import { Producto } from '@/constants/producto';
import { ProductCard } from '../category/ProductCard';

interface RelatedProductsProps {
    products: Producto[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
    if (products.length === 0) return null;

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#561A16]">
                    Productos Relacionados
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-[#D4741C] to-transparent ml-4 max-w-xs"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((producto) => (
                    <ProductCard key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
}