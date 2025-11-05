// lib/utils/productUtils.ts
import { productosMap, categorias, Producto } from '@/constants/producto';

/**
 * Obtiene todos los productos de todas las categorías
 */
export function getAllProducts(): Producto[] {
    const allProducts: Producto[] = [];

    Object.keys(productosMap).forEach(key => {
        const productos = productosMap[key as keyof typeof productosMap];
        if (productos) {
            allProducts.push(...productos);
        }
    });

    return allProducts;
}

/**
 * Obtiene un producto por su ID
 */
export function getProductById(id: number): Producto | null {
    const allProducts = getAllProducts();
    return allProducts.find(p => p.id === id) || null;
}

/**
 * Obtiene productos relacionados de la misma categoría
 */
export function getRelatedProducts(
    categoria: string,
    currentProductId: number,
    limit: number = 4
): Producto[] {
    const productos = productosMap[categoria as keyof typeof productosMap] || [];

    return productos
        .filter(p => p.id !== currentProductId)
        .slice(0, limit);
}

/**
 * Obtiene el nombre de la categoría
 */
export function getCategoryName(categoriaId: string): string {
    const categoria = categorias.find(cat => cat.id === categoriaId);
    return categoria?.nombre || categoriaId;
}

/**
 * Busca productos por término
 */
export function searchProducts(term: string): Producto[] {
    if (!term.trim()) return [];

    const allProducts = getAllProducts();
    const searchTerm = term.toLowerCase();

    return allProducts.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm) ||
        (producto.descripcion && producto.descripcion.toLowerCase().includes(searchTerm)) ||
        producto.categoria.toLowerCase().includes(searchTerm)
    );
}