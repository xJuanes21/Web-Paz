'use client'
import { useEffect, useState } from "react";

import Mission from "./Mission";
import Vision from "./Vision";
import QualityPolicy from "./QualityPolicy";
import AboutUs from "./AboutUs";

 const ComponentPage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const mobileParallaxStyle = {
        transform: `translateY(${scrollY * 0.3}px)`,
        transition: 'transform 0.5s ease-out',
    };
    return (
        <div className="w-full pt-16  relative">
            {/* Header con efecto ondulado */}
            <div className="relative py-16 min-h-[60vh] mb-0 overflow-hidden">
                {/* Fondo con efecto parallax */}
                <div className="block md:hidden w-full h-full absolute inset-0">
                    <img
                        src="/assets/trama1.png"
                        alt="Background pattern"
                        className="w-full h-full object-cover"
                        style={{ ...mobileParallaxStyle, opacity: 0.6 }}
                    />
                </div>

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
                ></div>

                {/* Overlay con degradado */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-[#D4741C]/50 z-10"></div>

                {/* Contenido del título */}
                <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
                    <div className="w-20 h-1 bg-[#561A16] mb-6"></div>
                    <h1 className="text-5xl text-center text-[#561A16] font-bold mb-6 font-poppins">
                        Sobre Nuestra Empresa
                    </h1>
                    <p className="text-lg text-center text-[#561A16] font-open max-w-3xl">
                        Conoce nuestra trayectoria y los valores familiares que nos guían en nuestro compromiso con la excelencia, brindando soluciones farmacéuticas confiables y de calidad certificada.
                    </p>
                    <div className="w-20 h-1 bg-[#561A16] mt-6"></div>
                </div>
            </div>



            {/* Contenido de servicios con tabs */}
            <div className="bg-gradient-to-br from-white via-white to-orange-600 ">
                <AboutUs />
                <Mission />
                <Vision />
                <QualityPolicy />

            </div>

        </div>
    );
}

export default ComponentPage