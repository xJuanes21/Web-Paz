// app/products/[categoria]/page.tsx
import { notFound } from 'next/navigation';
import { CategoryPageView } from '@/components/category/CategoryPageView';
import { getCategoryData } from '@/lib/utils/categoryUtils';

interface PageProps {
  params: {
    categoria: string;
  };
}

export default function CategoriaPage({ params }: PageProps) {
  // Asegurar que categoriaId sea string
  const categoriaId = Array.isArray(params.categoria)
    ? params.categoria[0]
    : params.categoria;

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
  const categoriaId = Array.isArray(params.categoria)
    ? params.categoria[0]
    : params.categoria;

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