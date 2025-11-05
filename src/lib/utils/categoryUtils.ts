// lib/utils/categoryUtils.ts
import { categorias, productosMap, Producto } from '@/constants/producto';

export interface CategoryData {
    id: string;
    nombre: string;
    productos: Producto[];
}

/**
 * Obtiene los datos de una categoría por su ID
 */
export function getCategoryData(categoriaId: string): CategoryData | null {
    const categoria = categorias.find(cat => cat.id === categoriaId);

    if (!categoria || !categoriaId) {
        return null;
    }

    const productos = productosMap[categoriaId as keyof typeof productosMap] || [];

    return {
        id: categoriaId,
        nombre: categoria.nombre,
        productos
    };
}

/**
 * Filtra productos por término de búsqueda
 */
export function filterProducts(productos: Producto[], searchTerm: string): Producto[] {
    if (!searchTerm.trim()) {
        return productos;
    }

    const term = searchTerm.toLowerCase();

    return productos.filter(producto =>
        producto.nombre.toLowerCase().includes(term) ||
        (producto.descripcion && producto.descripcion.toLowerCase().includes(term))
    );
}

/**
 * Verifica si una categoría existe
 */
export function categoryExists(categoriaId: string): boolean {
    return categorias.some(cat => cat.id === categoriaId);
}