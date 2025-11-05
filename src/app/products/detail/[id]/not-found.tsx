// app/products/detail/[id]/not-found.tsx
'use client';
import { useRouter } from 'next/navigation';

export default function ProductNotFound() {
    const router = useRouter();

    return (
        <div className="w-full pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-white to-orange-50">
            <div className="text-center px-4 max-w-md">
                <div className="mb-8">
                    <svg
                        className="w-32 h-32 mx-auto text-[#561A16]/20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                    </svg>
                </div>

                <h1 className="text-6xl font-bold text-[#561A16] mb-4">404</h1>
                <h2 className="text-2xl font-bold text-[#561A16] mb-4">
                    Producto no encontrado
                </h2>
                <p className="text-gray-600 mb-8">
                    Lo sentimos, el producto que buscas no existe o ya no está disponible en nuestro catálogo.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => router.push('/products')}
                        className="bg-[#561A16] text-white px-6 py-3 rounded-lg hover:bg-[#D4741C] transition-colors font-medium"
                    >
                        Ver catálogo
                    </button>
                    <button
                        onClick={() => router.back()}
                        className="bg-white text-[#561A16] border-2 border-[#561A16] px-6 py-3 rounded-lg hover:bg-[#561A16] hover:text-white transition-colors font-medium"
                    >
                        Volver atrás
                    </button>
                </div>
            </div>
        </div>
    );
}