// app/products/detail/[id]/page.tsx
import { notFound } from 'next/navigation';
import { ProductDetailView } from '@/components/product/ProductDetailView';
import { getProductById, getRelatedProducts } from '@/lib/utils/productUtils';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
    const { id } = await params;
    const productId = parseInt(id, 10);

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
    const { id } = await params;
    const productId = parseInt(id, 10);
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