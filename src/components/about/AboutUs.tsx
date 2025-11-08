import React from 'react';
import Image from 'next/image';
import { ThumbsUp } from 'lucide-react';
import { AuroraBackground } from '../ui/aurora-background';
import CorporateValuesBento from './CorporateValuesBento';

export default function AboutUs() {
    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Calidad",
            description: "Estamos en proceso de certificación de calidad para asegurar que nuestros procesos cumplan con los más altos estándares. Nuestro compromiso es brindarle a nuestros clientes productos y servicios seguros y confiables."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Trayectoria",
            description: "Con más de 10 años de experiencia, hemos construido una marca reconocida y confiable, gracias a nuestra capacidad para cumplir con las necesidades y expectativas de nuestros clientes de manera consistente."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Tiempos de entrega",
            description: "Nos distinguimos por nuestra capacidad de cumplir con entregas oportunas, asegurando que nuestros clientes reciban sus productos a tiempo, sin demoras innecesarias."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            title: "Diversificación de portafolio",
            description: "Contamos con un amplio y diversificado portafolio, lo que nos permite ofrecer una variedad de soluciones adaptadas a las preferencias y necesidades de nuestros clientes."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Alianzas estratégicas",
            description: "Contamos con una red sólida de proveedores estratégicamente seleccionados, lo que nos permite garantizar la disponibilidad continua y la calidad superior de nuestros productos."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: "Servicio al cliente",
            description: "Disponemos de un equipo competente y enfocado en brindar el mejor soporte personalizado y atención postventa, garantizando que nuestros clientes siempre reciban el mejor servicio durante todo el proceso."
        }
    ];

    return (
        <section className="relative w-full bg-zinc-50 dark:bg-zinc-900">
            {/* Hero Section with Aurora */}
            <AuroraBackground
                className="bg-gradient-to-br from-[#561A16] via-[#C6441C] to-[#D4741C] min-h-screen pt-8 md:pt-16 lg:pt-5"
                showRadialGradient={true}
            >
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                                <span className="text-xs sm:text-sm font-medium text-white">
                                    Desde 2015
                                </span>
                            </div>

                            <div className="space-y-3 sm:space-y-4 md:space-y-6">
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed text-left">
                                    Con más de una década de trayectoria en el sector salud, somos una empresa familiar vallecaucana que ha construido su legado sobre los cimientos de la confianza, la calidad y el compromiso con el bienestar de nuestra comunidad. Nuestra historia comenzó en el corazón del Valle del Cauca, donde sembramos las semillas de un proyecto que hoy se ha consolidado como un referente en la distribución de insumos para el cuidado de la vida.
                                </p>

                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 leading-relaxed">
                                    Destacada por ofrecer servicios de alta calidad y cumplir oportunamente las necesidades del mercado.
                                </p>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
                            {/* Decorative elements - hidden on small screens */}
                            <div className="hidden sm:block absolute -top-4 -right-4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-white/5 rounded-full blur-3xl"></div>
                            <div className="hidden sm:block absolute -bottom-4 -left-4 w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-[#D4741C]/20 rounded-full blur-2xl"></div>

                            {/* Main image container */}
                            <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm bg-white/5 p-1 sm:p-1.5 lg:p-2">
                                <div className="relative aspect-square rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden">
                                    <Image
                                        src="/assets/img-oficinas2.jpg"
                                        alt="Colombo Farmacéutica - About"
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#C6441C]/30 to-transparent"></div>
                                </div>
                            </div>

                            {/* Floating badge - better positioned for mobile */}
                            <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 left-1/2 -translate-x-1/2 px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full bg-white shadow-xl border border-white/20 backdrop-blur-md z-10">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-[#C6441C] to-[#D4741C] border-2 border-white flex items-center justify-center flex-shrink-0">
                                        <ThumbsUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                                    </div>
                                    <div className="leading-tight">
                                        <p className="text-[9px] sm:text-[10px] lg:text-xs font-semibold text-gray-900 whitespace-nowrap">100% Satisfacción</p>
                                        <p className="text-[7px] sm:text-[8px] lg:text-[10px] text-gray-600 whitespace-nowrap">Clientes confiables</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuroraBackground>

            {/* Values Section */}
            <CorporateValuesBento />

            {/* Bottom decorative wave */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6441C]/20 to-transparent" />
        </section>
    );
}