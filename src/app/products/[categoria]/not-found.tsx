// app/products/[categoria]/not-found.tsx
'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="w-full pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-white to-orange-50">
            <div className="text-center px-4">
                <div className="mb-8">
                    <svg
                        className="w-24 h-24 mx-auto text-[#561A16]/20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                <h1 className="text-6xl font-bold text-[#561A16] mb-4">404</h1>
                <h2 className="text-2xl font-bold text-[#561A16] mb-4">
                    Categoría no encontrada
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Lo sentimos, la categoría que buscas no existe o ha sido eliminada.
                </p>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => router.push('/products')}
                        className="bg-[#561A16] text-white px-6 py-3 rounded-lg hover:bg-[#D4741C] transition-colors font-medium"
                    >
                        Ver todas las categorías
                    </button>
                    <button
                        onClick={() => router.push('/')}
                        className="bg-white text-[#561A16] border-2 border-[#561A16] px-6 py-3 rounded-lg hover:bg-[#561A16] hover:text-white transition-colors font-medium"
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        </div>
    );
}