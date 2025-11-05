// app/products/detail/[id]/page.tsx
import { notFound } from 'next/navigation';
import { ProductDetailView } from '@/components/product/ProductDetailView';
import { getProductById, getRelatedProducts } from '@/lib/utils/productUtils';

interface PageProps {
    params: {
        id: string;
    };
}

export default function ProductDetailPage({ params }: PageProps) {
    const productId = parseInt(params.id);

    // Obtener producto por ID
    const product = getProductById(productId);

    // Si el producto no existe, mostrar 404
    if (!product) {
        notFound();
    }

    // Obtener productos relacionados de la misma categoría
    const relatedProducts = getRelatedProducts(product.categoria, productId);

    return (
        <ProductDetailView
            product={product}
            relatedProducts={relatedProducts}
        />
    );
}

// Generar metadata dinámica
export async function generateMetadata({ params }: PageProps) {
    const productId = parseInt(params.id);
    const product = getProductById(productId);

    if (!product) {
        return {
            title: 'Producto no encontrado',
        };
    }

    return {
        title: `${product.nombre} | Tu Tienda`,
        description: product.descripcion || `Compra ${product.nombre} en nuestra tienda`,
    };
}