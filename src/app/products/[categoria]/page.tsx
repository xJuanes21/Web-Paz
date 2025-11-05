// app/products/[categoria]/page.tsx
import { notFound } from 'next/navigation';
import { CategoryPageView } from '@/components/category/CategoryPageView';
import { getCategoryData } from '@/lib/utils/categoryUtils';

interface PageProps {
  params: Promise<{
    categoria: string | string[];
  }>;
}

export default async function CategoriaPage({ params }: PageProps) {
  const { categoria } = await params;
  const categoriaId = Array.isArray(categoria)
    ? categoria[0]
    : categoria;

  // Obtener datos de la categoría
  const categoryData = getCategoryData(categoriaId);

  // Si la categoría no existe, mostrar 404
  if (!categoryData) {
    notFound();
  }

  return (
    <CategoryPageView
      categoriaId={categoryData.id}
      categoriaNombre={categoryData.nombre}
      productos={categoryData.productos}
    />
  );
}

// Opcional: Generar metadata dinámica
export async function generateMetadata({ params }: PageProps) {
  const { categoria } = await params;
  const categoriaId = Array.isArray(categoria)
    ? categoria[0]
    : categoria;

  const categoryData = getCategoryData(categoriaId);

  if (!categoryData) {
    return {
      title: 'Categoría no encontrada',
    };
  }

  return {
    title: `${categoryData.nombre} | Tu Tienda`,
    description: `Explora nuestra colección de ${categoryData.nombre.toLowerCase()}. ${categoryData.productos.length} productos disponibles.`,
  };
}