// components/product/ProductDetailView.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Producto } from '@/constants/producto';
import { ProductImageGallery } from './ProductImageGallery';
import { ProductInfo } from './ProductInfo';
import { RelatedProducts } from './RelatedProducts';
import { Breadcrumb } from '../ui/BreadCrumb';
import { ProductActions } from './ProductAction';
import { getCategoryName } from '@/lib/utils/productUtils';

interface ProductDetailViewProps {
    product: Producto;
    relatedProducts: Producto[];
}

export function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);

    const categoryName = getCategoryName(product.categoria);

    const breadcrumbItems = [
        { label: 'Inicio', href: '/' },
        { label: 'Productos', href: '/products' },
        { label: categoryName, href: `/products/${product.categoria}` },
        { label: product.nombre, active: true }
    ];

    const handleAddToCart = () => {
        const phone = '573173543906';
        const productUrl = typeof window !== 'undefined' ? window.location.href : '';
        const messageParts = [
            `Hola, quiero solicitar cotización del producto "${product.nombre}"`,
            `Cantidad: ${quantity}`,
            productUrl ? `Enlace: ${productUrl}` : ''
        ].filter(Boolean);
        const message = messageParts.join(' | ');
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };



    return (
        <div className="w-full pt-16 min-h-screen bg-gradient-to-br from-white via-white to-orange-50">
            <div className="container mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <Breadcrumb items={breadcrumbItems} />

                {/* Contenido Principal */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
                        {/* Galería de Imágenes */}
                        <ProductImageGallery image={product.imagen} nombre={product.nombre} />

                        {/* Información del Producto */}
                        <div className="flex flex-col">
                            <ProductInfo
                                product={product}
                                categoryName={categoryName}
                            />

                            {/* Acciones */}
                            <ProductActions
                                quantity={quantity}
                                onQuantityChange={setQuantity}
                                onAddToCart={handleAddToCart}
                            />
                        </div>
                    </div>
                </div>

                {/* Productos Relacionados */}
                {relatedProducts.length > 0 && (
                    <RelatedProducts products={relatedProducts} />
                )}

                {/* Botón Volver */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => router.push(`/products/${product.categoria}`)}
                        className="bg-white text-[#561A16] border-2 border-[#561A16] px-6 py-3 rounded-lg hover:bg-[#561A16] hover:text-white transition-colors font-medium"
                    >
                        ← Volver a {categoryName}
                    </button>
                </div>
            </div>
        </div>
    );
}