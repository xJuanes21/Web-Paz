// components/category/ProductGrid.tsx
import { Producto } from '@/constants/producto';
import { ProductCard } from './ProductCard';
import { EmptyState } from '../ui/EmptyState';

interface ProductGridProps {
    productos: Producto[];
    filtroProducto: string;
    onClearFilter: () => void;
}

export function ProductGrid({ productos, filtroProducto, onClearFilter }: ProductGridProps) {
    if (productos.length === 0) {
        return (
            <EmptyState
                message={
                    filtroProducto
                        ? `No hay productos que coincidan con "${filtroProducto}"`
                        : 'Esta categoría no tiene productos disponibles'
                }
                showClearButton={!!filtroProducto}
                onClear={onClearFilter}
            />
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productos.map((producto: Producto) => (
                <ProductCard key={producto.id} producto={producto} />
            ))}
        </div>
    );
}