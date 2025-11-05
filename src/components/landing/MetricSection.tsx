'use client';
import { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }: {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const endValue = typeof end === 'string' ? parseFloat(end) : end;
        const startTime = Date.now();

        const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * endValue);

            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(endValue);
            }
        };

        animate();
    }, [isVisible, end, duration]);

    return (
        <span ref={ref} className="inline-block">
            {prefix}
            {count.toLocaleString('es-CO')}
            {suffix}
        </span>
    );
};

const MetricCard = ({ value, label, delay, prefix = "", suffix = "" }: {
    value: number;
    label: string;
    delay: number;
    prefix?: string;
    suffix?: string;
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={cardRef}
            className={`group relative flex flex-1 flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-sm border border-[#D4741C]/20 transition-all duration-700 hover:scale-105 hover:border-[#D4741C]/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#C6441C]/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
        >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4741C]/0 via-[#C6441C]/0 to-[#561A16]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-20" />

            <dd className="relative text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#D4741C] via-[#C6441C] to-[#D4741C] bg-clip-text text-transparent">
                <AnimatedCounter end={value} prefix={prefix} suffix={suffix} duration={2500} />
            </dd>
            <dt className="relative text-center text-lg md:text-xl font-medium text-white/90">
                {label}
            </dt>

            {/* Decorative line */}
            <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#D4741C] to-transparent transition-all duration-500 group-hover:w-3/4" />
        </div>
    );
};

export default function MetricsSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#561A16] via-[#6B2118] to-[#561A16] py-20 md:py-32">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4741C] rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C6441C] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#D4741C] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(#D4741C 1px, transparent 1px), linear-gradient(90deg, #D4741C 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }} />

            <div className="relative mx-auto min-h-screen px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16 pt-20">
                    {/* Header */}
                    <div className="flex w-full flex-col items-center text-center">
                      
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
                            Más de una década cuidando vidas
                        </h2>
                        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
                            Distribuyendo productos de calidad para profesionales de la salud en todo el Valle del Cauca
                        </p>
                    </div>

                    {/* Metrics Grid */}
                    <dl className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <MetricCard
                            value={10000}
                            label="Clientes Satisfechos"
                            delay={0}
                            prefix="+"
                        />
                        <MetricCard
                            value={10}
                            label="Años de Experiencia"
                            delay={150}
                            suffix="+"
                        />
                        <MetricCard
                            value={5000}
                            label="Productos en Catálogo"
                            delay={300}
                            prefix="+"
                        />
                    </dl>

                    {/* Bottom accent */}
                    <div className="flex justify-center">
                        <div className="h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-[#D4741C] to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}