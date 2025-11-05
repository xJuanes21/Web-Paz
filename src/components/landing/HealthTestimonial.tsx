'use client';
import { useState, useEffect, useRef } from 'react';
import { Pagination } from '../shared/Pagination';

interface TestimonialItem {
    name: string;
    text: string;
    role: string;
    location: string;
    imageSrc: string;
    featured?: boolean;
}



const TestimonialCard = ({ testimonial, index }: { testimonial: TestimonialItem; index: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), index * 100);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [index]);

    return (
        <div
            ref={cardRef}
            className={`group relative flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm border border-[#D4741C]/20 transition-all duration-700 hover:scale-105 hover:border-[#D4741C]/50 hover:bg-white/15 hover:shadow-2xl hover:shadow-[#C6441C]/20 ${testimonial.featured ? 'md:col-span-2 md:row-span-2 md:p-8' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4741C]/0 via-[#C6441C]/0 to-[#561A16]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

            {/* Quote icon */}
            <div className="relative">
                <svg className="w-8 h-8 text-[#D4741C] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
            </div>

            {/* Testimonial text */}
            <p className={`relative text-white/90 leading-relaxed ${testimonial.featured ? 'text-lg md:text-xl' : 'text-base'
                }`}>
                "{testimonial.text}"
            </p>

            {/* Author info */}
            <div className="relative flex items-center gap-3 mt-auto">
                <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4741C] to-[#C6441C] blur-md opacity-50" />
                    <img
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        className="relative w-12 h-12 rounded-full object-cover border-2 border-[#D4741C]/30"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{testimonial.name}</span>
                        <svg className="w-4 h-4 text-[#D4741C]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <span className="text-sm text-white/60">{testimonial.role}</span>
                    <span className="text-xs text-white/50">{testimonial.location}</span>
                </div>
            </div>

            {/* Featured badge */}
            {testimonial.featured && (
                <div className="absolute top-4 right-4 rounded-full bg-[#D4741C]/20 px-3 py-1 border border-[#D4741C]/40">
                    <span className="text-xs font-semibold text-[#D4741C]">DESTACADO</span>
                </div>
            )}
        </div>
    );
};

export default function HealthTestimonials() {
    const [currentPage, setCurrentPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const testimonialItems: TestimonialItem[] = [
        {
            name: 'Dr. Carlos Mendoza',
            text: 'Desde que trabajamos con ellos, la calidad de los insumos médicos ha superado nuestras expectativas. Su seriedad y compromiso con los plazos de entrega nos da tranquilidad para enfocarnos en lo que realmente importa: nuestros pacientes.',
            role: 'Director Médico',
            location: 'Clínica Santa María, Cali',
            imageSrc: 'https://i.pravatar.cc/150?img=12',
            featured: true,
        },
        {
            name: 'Dra. Patricia Ruiz',
            text: 'Excelente atención y asesoría. Encontré exactamente el equipo quirúrgico que necesitaba para mi consultorio, con garantía y respaldo total.',
            role: 'Cirujana General',
            location: 'Palmira, Valle',
            imageSrc: 'https://i.pravatar.cc/150?img=5',
        },
        {
            name: 'Farmacia San José',
            text: 'La variedad de productos farmacéuticos y el servicio personalizado que ofrecen es incomparable. Llevamos más de 5 años trabajando juntos.',
            role: 'Gerente',
            location: 'Tuluá, Valle',
            imageSrc: 'https://i.pravatar.cc/150?img=32',
        },
        {
            name: 'Dr. Andrés López',
            text: 'Como odontólogo, necesito instrumental de primera calidad. Esta empresa entiende las necesidades de mi profesión y siempre tiene lo que busco.',
            role: 'Odontólogo',
            location: 'Buga, Valle',
            imageSrc: 'https://i.pravatar.cc/150?img=33',
        },
        {
            name: 'María Elena Torres',
            text: 'Profesionales, confiables y con precios justos. Su catálogo de productos ortopédicos nos ha permitido ayudar a muchos pacientes a recuperar su movilidad.',
            role: 'Fisioterapeuta',
            location: 'Cali, Valle',
            imageSrc: 'https://i.pravatar.cc/150?img=47',
        },
        {
            name: 'Veterinaria El Refugio',
            text: 'Encontrar proveedores serios de insumos veterinarios no es fácil. Con ellos tenemos la certeza de recibir productos originales y en perfecto estado.',
            role: 'Médica Veterinaria',
            location: 'Jamundí, Valle',
            imageSrc: 'https://i.pravatar.cc/150?img=20',
        },
    ];

    const itemsPerPage = isMobile ? 1 : testimonialItems.length;
    const totalPages = Math.ceil(testimonialItems.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = isMobile ? testimonialItems.slice(startIndex, endIndex) : testimonialItems;

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#561A16] via-[#6B2118] to-[#561A16] py-20 md:py-32">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4741C] rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C6441C] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(#D4741C 1px, transparent 1px), linear-gradient(90deg, #D4741C 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }} />

            <div className="relative mx-auto max-w-7xl px-4 md:px-8">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    <div className="inline-block rounded-full bg-[#D4741C]/20 px-4 py-2 mb-6 border border-[#D4741C]/30">
                        <span className="text-sm font-semibold text-[#D4741C] uppercase tracking-wider">
                            Testimonios
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
                        No lo digas por nosotros
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                        Descubre lo que nuestros clientes del sector salud tienen que decir sobre su experiencia trabajando con nosotros.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-auto">
                    {currentItems.map((testimonial, index) => (
                        <TestimonialCard key={startIndex + index} testimonial={testimonial} index={index} />
                    ))}
                </div>

                {/* Pagination - Only on mobile */}
                {isMobile && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                        accentColor="#D4741C"
                        autoplay={true}
                        autoplayInterval={4000}
                    />
                )}

                {/* Bottom accent */}
                <div className="flex justify-center mt-12 md:mt-16">
                    <div className="h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-[#D4741C] to-transparent" />
                </div>
            </div>
        </section>
    );
}