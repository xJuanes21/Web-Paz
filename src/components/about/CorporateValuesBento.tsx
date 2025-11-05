import { Shield, Heart, Users, Award, Lightbulb, HandshakeIcon } from 'lucide-react';

export default function CorporateValuesBento() {
    const values = [
        {
            title: "Calidad",
            description: "Garantizamos productos farmacéuticos de la más alta calidad, cumpliendo con todos los estándares regulatorios.",
            icon: <Award className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80"
        },
        {
            title: "Compromiso",
            description: "Nos comprometemos con el bienestar de nuestros clientes y la comunidad del Valle del Cauca.",
            icon: <Heart className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
        },
        {
            title: "Confianza",
            description: "Construimos relaciones duraderas basadas en la transparencia y el cumplimiento de nuestras promesas.",
            icon: <HandshakeIcon className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&q=80"
        },
        {
            title: "Integridad",
            description: "Actuamos con ética y responsabilidad en cada transacción y decisión empresarial.",
            icon: <Shield className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80"
        },
        {
            title: "Innovación",
            description: "Adoptamos tecnología y mejores prácticas para optimizar nuestros servicios de distribución.",
            icon: <Lightbulb className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
        },
        {
            title: "Trabajo en Equipo",
            description: "Fomentamos la colaboración y el respeto mutuo para alcanzar objetivos comunes.",
            icon: <Users className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
        }
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#561A16] via-[#6B2118] to-[#561A16] py-20 md:py-32">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4741C] rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C6441C] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(#D4741C 1px, transparent 1px), linear-gradient(90deg, #D4741C 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }} />

            <div className="relative max-w-7xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-block rounded-full bg-[#D4741C]/20 px-4 py-2 mb-6 border border-[#D4741C]/30">
                        <span className="text-sm font-semibold text-[#D4741C] uppercase tracking-wider">
                            Nuestros Valores
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
                        Valores Corporativos
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Los principios que guían nuestro compromiso con la excelencia en el sector salud
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Value 1 - Large with Image */}
                    <div className="group relative lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-[#D4741C]/20 hover:border-[#D4741C]/40 transition-all duration-500">
                        <div className="absolute inset-0">
                            <img
                                src={values[0].image}
                                alt={values[0].title}
                                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#561A16]/90 via-[#6B2118]/80 to-[#D4741C]/70" />
                        </div>

                        <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#D4741C]/20 border border-[#D4741C]/30 text-[#D4741C] mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {values[0].icon}
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    {values[0].title}
                                </h3>
                            </div>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                                {values[0].description}
                            </p>
                        </div>
                    </div>

                    {/* Value 2 - Medium with Icon */}
                    <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-[#D4741C]/20 hover:border-[#D4741C]/40 hover:shadow-2xl hover:shadow-[#C6441C]/20 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4741C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 p-8 h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4741C] to-[#C6441C] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {values[1].icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white">
                                    {values[1].title}
                                </h3>
                            </div>
                            <p className="text-white/90 leading-relaxed">
                                {values[1].description}
                            </p>
                        </div>
                    </div>

                    {/* Value 3 - Medium with Border */}
                    <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-l-4 border-[#D4741C] hover:shadow-2xl hover:shadow-[#C6441C]/20 transition-all duration-500">
                        <div className="p-8 h-full flex flex-col">
                            <div className="mb-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D4741C]/20 border border-[#D4741C]/30 text-[#D4741C] group-hover:scale-110 transition-transform duration-300">
                                    {values[2].icon}
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                {values[2].title}
                            </h3>
                            <p className="text-white/90 leading-relaxed">
                                {values[2].description}
                            </p>
                        </div>
                    </div>

                    {/* Value 4 - Large Horizontal */}
                    <div className="group relative lg:col-span-2 rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-[#D4741C]/20 hover:border-[#D4741C]/40 transition-all duration-500">
                        <div className="absolute inset-0">
                            <img
                                src={values[3].image}
                                alt={values[3].title}
                                className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#561A16]/95 to-[#D4741C]/60" />
                        </div>

                        <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="flex-shrink-0 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4741C] to-[#C6441C] text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                                {values[3].icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    {values[3].title}
                                </h3>
                                <p className="text-lg text-white/90 leading-relaxed">
                                    {values[3].description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Value 5 - Medium */}
                    <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-[#D4741C]/20 hover:border-[#D4741C]/40 hover:shadow-2xl hover:shadow-[#C6441C]/20 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4741C]/20 to-transparent rounded-bl-full" />

                        <div className="relative z-10 p-8 h-full flex flex-col">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#D4741C] to-[#C6441C] text-white shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                {values[4].icon}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-[#D4741C] bg-clip-text text-transparent mb-4">
                                {values[4].title}
                            </h3>
                            <p className="text-white/90 leading-relaxed">
                                {values[4].description}
                            </p>
                        </div>
                    </div>

                    {/* Value 6 - Medium */}
                    <div className="group relative lg:col-span-3 rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-[#D4741C]/20 hover:border-[#D4741C]/40 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#561A16]/20 via-transparent to-[#D4741C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 p-8 md:p-10 flex items-start gap-6">
                            <div className="flex-shrink-0 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#D4741C]/20 border-2 border-[#D4741C]/40 text-[#D4741C] group-hover:scale-110 transition-transform duration-300">
                                {values[5].icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    {values[5].title}
                                </h3>
                                <p className="text-lg text-white/90 leading-relaxed">
                                    {values[5].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom accent */}
                <div className="flex justify-center mt-16">
                    <div className="h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-[#D4741C] to-transparent" />
                </div>
            </div>
        </section>
    );
}