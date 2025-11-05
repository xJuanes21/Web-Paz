"use client";

import React, { useEffect, useState } from "react";
import { WobbleCard } from "../ui/wobble-card";
import { FileCheck, Building2, Users, Shield } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from 'framer-motion';
import TypingText from '../CustomText';
import { Pagination } from "../shared/Pagination";

export function WobbleCardDemo() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );
        const element = document.getElementById("wobble-section");
        if (element) observer.observe(element);
        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "tween" as const,
                duration: 0.8
            }
        }
    };

    const allCards = [
        // Card 1: Sobre Nosotros
        <WobbleCard
            key="about"
            containerClassName="col-span-1 lg:col-span-2 bg-gradient-to-br from-[#561A16] via-[#7a2319] to-[#D4741C] min-h-[400px] lg:min-h-[350px]"
        >
            <Link href="/about" className="block h-full">
                <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                            <Building2 className="w-5 h-5 text-white" />
                            <span className="text-white font-semibold text-sm">Quiénes Somos</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-poppins">
                            Sobre Nosotros
                        </h2>

                        <p className="text-white/90 text-lg leading-relaxed max-w-xl font-open">
                            Somos una empresa vallecaucana dedicada al comercio al por mayor de productos farmacéuticos,
                            medicinales y hospitalarios. Con más de una década de experiencia, destacamos por ofrecer
                            servicios de alta calidad y cumplir oportunamente las necesidades del mercado.
                        </p>
                    </div>

                    <div className="flex items-center gap-8 mt-8">
                        <div className="text-white">
                            <div className="text-3xl font-bold">10+</div>
                            <div className="text-white/80 text-sm">Años de experiencia</div>
                        </div>
                        <div className="text-white">
                            <div className="text-3xl font-bold">5</div>
                            <div className="text-white/80 text-sm">Departamentos</div>
                        </div>
                        <div className="text-white">
                            <div className="text-3xl font-bold">2</div>
                            <div className="text-white/80 text-sm">Líneas de distribución</div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4741C]/30 rounded-full blur-3xl"></div>
            </Link>
        </WobbleCard>,

        // Card 2: PQRS
        <Link key="pqrs" href="/PQRS" className="block h-full">
            <WobbleCard
                containerClassName="col-span-1 bg-gradient-to-br from-[#D4741C] via-[#c96a1a] to-[#561A16] min-h-[400px] lg:min-h-[350px] h-full cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                    <div className="space-y-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20">
                            <FileCheck className="w-10 h-10 text-white" />
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-3xl font-bold text-white leading-tight font-poppins">
                                Servicio de PQRS
                            </h3>
                            <p className="text-white/90 text-base leading-relaxed font-open">
                                Tus preguntas, sugerencias y reclamos son importantes para nosotros.
                                Diligencia tus PQRS de forma segura.
                            </p>
                        </div>

                        <div className="space-y-2 pt-2">
                            <div className="flex items-center gap-2 text-white/80 text-sm">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                <span>Respuesta en 24-48 horas</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/80 text-sm">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                <span>Seguimiento en tiempo real</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/80 text-sm">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                <span>100% confidencial</span>
                            </div>
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#561A16] text-white rounded-xl font-semibold transition-all hover:scale-105 w-fit shadow-lg mt-6">
                        Crear una ahora
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#561A16]/20 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </WobbleCard>
        </Link>,

        // Card 3: Línea Ética
        <Link key="ethics" href="/etic" className="block h-full">
            <WobbleCard
                containerClassName="col-span-1 bg-gradient-to-br from-[#D4741C] via-[#c96a1a] to-[#561A16] min-h-[400px] lg:min-h-[350px] h-full cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                    <div className="space-y-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20">
                            <Shield className="w-10 h-10 text-white" />
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-3xl font-bold text-white leading-tight font-poppins">
                                Línea Ética
                            </h3>
                            <p className="text-white/90 text-base leading-relaxed font-open">
                                Canal seguro para reportar conductas irregulares o comportamientos que
                                vayan en contra de nuestros valores y principios éticos.
                            </p>
                        </div>

                        <div className="space-y-2 pt-2">
                            <div className="flex items-center gap-2 text-white/80 text-sm">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                <span>Gestión confidencial</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/80 text-sm">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                <span>Protección al denunciante</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/80 text-sm">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                <span>Investigación imparcial</span>
                            </div>
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#561A16] text-white rounded-xl font-semibold transition-all hover:scale-105 w-fit shadow-lg mt-6">
                        Reportar ahora
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#561A16]/20 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </WobbleCard>
        </Link>,

        // Card 4: Servicios
        <WobbleCard
            key="services"
            containerClassName="col-span-1 lg:col-span-2 bg-gradient-to-br from-[#561A16] via-[#7a2319] to-[#D4741C] min-h-[400px] lg:min-h-[350px]"
        >
            <Link href="/services" className="block h-full">
                <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                            <Building2 className="w-5 h-5 text-white" />
                            <span className="text-white font-semibold text-sm">Servicios</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-poppins">
                            Servicios
                        </h2>

                        <p className="text-white/90 text-lg leading-relaxed max-w-xl font-open">
                            Somos una empresa vallecaucana dedicada al comercio al por mayor de productos farmacéuticos,
                            medicinales y hospitalarios. Con más de una década de experiencia, destacamos por ofrecer
                            servicios de alta calidad y cumplir oportunamente las necesidades del mercado.
                        </p>
                    </div>

                    <div className="flex items-center gap-8 mt-8">
                        <div className="text-white">
                            <div className="text-3xl font-bold">10+</div>
                            <div className="text-white/80 text-sm">Años de experiencia</div>
                        </div>
                        <div className="text-white">
                            <div className="text-3xl font-bold">5</div>
                            <div className="text-white/80 text-sm">Departamentos</div>
                        </div>
                        <div className="text-white">
                            <div className="text-3xl font-bold">2</div>
                            <div className="text-white/80 text-sm">Líneas de distribución</div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4741C]/30 rounded-full blur-3xl"></div>
            </Link>
        </WobbleCard>,

        // Card 5: Instalaciones
        <WobbleCard
            key="facilities"
            containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-[#561A16] via-[#7a2319] to-[#D4741C] min-h-[500px] sm:min-h-[600px] lg:min-h-[550px] xl:min-h-[600px]"
        >
            <div className="relative h-full">
                {/* Contenido principal - Se reorganiza en móvil */}
                <div className="relative p-6 sm:p-8 md:p-10 z-10 flex flex-col justify-between h-full">
                    <div className="max-w-xl space-y-4 sm:space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 w-fit">
                            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            <span className="text-white font-semibold text-xs sm:text-sm">Infraestructura Moderna</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-poppins">
                            Instalaciones de Última Generación
                        </h2>

                        <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl font-open">
                            Contamos con instalaciones modernas y equipadas con la última tecnología para garantizar
                            el almacenamiento y distribución óptima de productos farmacéuticos bajo los más altos
                            estándares de calidad y seguridad.
                        </p>

                        <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4">
                            <div className="flex items-center gap-2 text-white/90">
                                <div className="w-2 h-2 bg-[#D4741C] rounded-full"></div>
                                <span className="text-xs sm:text-sm">Almacenamiento controlado</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/90">
                                <div className="w-2 h-2 bg-[#D4741C] rounded-full"></div>
                                <span className="text-xs sm:text-sm">Cumplimiento normativo</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/90">
                                <div className="w-2 h-2 bg-[#D4741C] rounded-full"></div>
                                <span className="text-xs sm:text-sm">Equipo especializado</span>
                            </div>
                        </div>
                    </div>

                    {/* En móvil, la imagen va debajo del contenido */}
                    <div className="mt-6 sm:mt-0 sm:absolute sm:pl-5 sm:right-0 sm:bottom-0 w-full sm:w-[55%] lg:w-[50%] h-[200px] sm:h-[90%] lg:h-full order-last sm:order-none">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#561A16] via-[#561A16]/30 to-transparent z-10 md:bg-gradient-to-r md:from-[#561A16]/80 md:via-[#561A16]/20 md:to-transparent"></div>

                            <img
                                src="/assets/img-instalaciones.jpg"
                                alt="Oficinas Colchico Farmacéutica"
                                className="w-full h-full object-cover rounded-lg sm:rounded-tl-3xl shadow-xl"
                            />

                            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-white/95 backdrop-blur-md px-3 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg border border-[#D4741C]/30">
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4741C]" />
                                    <span className="text-xs sm:text-sm font-bold text-[#561A16]">Equipo Profesional</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WobbleCard>
    ];

    const itemsPerPage = isMobile ? 1 : allCards.length;
    const totalPages = Math.ceil(allCards.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCards = isMobile ? allCards.slice(startIndex, endIndex) : allCards;

    return (
        <motion.section
            id="wobble-section"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="relative py-16 px-4 bg-transparent"
        >
            <div className="max-w-7xl mx-auto space-y-12">
                <motion.div
                    variants={itemVariants}
                    className="text-center space-y-4 mb-12"
                >
                    <div className="flex justify-center">
                        <TypingText
                            title="| Conoce Nuestra Empresa"
                            textStyles="text-center text-white"
                        />
                    </div>
                    <p className="text-white text-lg max-w-2xl mx-auto font-open">
                        Más de 20 años brindando soluciones farmacéuticas de calidad
                    </p>
                    <div className="w-20 h-1 bg-[#D4741C] mx-auto"></div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                    {currentCards}
                </motion.div>

                {isMobile && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                        accentColor="#D4741C"
                        autoplay={true}
                        autoplayInterval={5000}
                    />
                )}
            </div>
        </motion.section>
    );
}