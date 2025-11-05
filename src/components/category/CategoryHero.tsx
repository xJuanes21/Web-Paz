// components/category/CategoryHero.tsx
'use client';
import { useRouter } from 'next/navigation';
import { Breadcrumb } from '../ui/BreadCrumb';

interface CategoryHeroProps {
    categoriaId: string;
    categoriaNombre: string;
    totalProductos: number;
    scrollY: number;
}

export function CategoryHero({
    categoriaId,
    categoriaNombre,
    totalProductos,
    scrollY
}: CategoryHeroProps) {
    const router = useRouter();

    const mobileParallaxStyle = {
        transform: `translateY(${scrollY * 0.3}px)`,
        transition: 'transform 0.5s ease-out',
    };

    const breadcrumbItems = [
        { label: 'Inicio', href: '/' },
        { label: 'Productos', href: '/products' },
        { label: categoriaNombre, active: true }
    ];

    return (
        <div className="relative py-16 min-h-[50vh] mb-0 overflow-hidden">
            {/* Fondo con efecto parallax - Mobile */}
            <div className="block md:hidden w-full h-full absolute inset-0">
                <img
                    src="/assets/trama1.png"
                    alt="Background pattern"
                    className="w-full h-full object-cover"
                    style={{ ...mobileParallaxStyle, opacity: 0.6 }}
                />
            </div>

            {/* Fondo con efecto parallax - Desktop */}
            <div
                className="hidden md:block absolute inset-0 bg-no-repeat"
                style={{
                    backgroundImage: "url('/assets/trama1.png')",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.5
                }}
            />

            {/* Overlay con degradado */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-[#D4741C]/50 z-10" />

            {/* Contenido del título */}
            <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
                <Breadcrumb items={breadcrumbItems} />

                <div className="w-20 h-1 bg-[#561A16] mb-6" />

                <h1 className="text-4xl text-center text-[#561A16] font-bold mb-6 font-poppins">
                    {categoriaNombre}
                </h1>

                <p className="text-lg text-center text-[#561A16] font-open mb-6 max-w-3xl mx-auto">
                    Descubre nuestra selección completa de {categoriaNombre.toLowerCase()}.
                    Encontrarás {totalProductos} productos de alta calidad para satisfacer tus necesidades.
                </p>

                <div className="w-20 h-1 bg-[#561A16] mt-6" />
            </div>
        </div>
    );
}