import React from 'react';
import { AuroraBackground } from '../ui/aurora-background';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PharmaCTA() {
  return (
    <AuroraBackground
      className="bg-gradient-to-br from-[#561A16] via-[#C6441C] to-[#D4741C]"
      showRadialGradient={true}
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 px-4 py-20">


        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Innovación en{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Salud
            </span>
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Descubre nuestra línea de productos farmacéuticos desarrollados con los más altos
          estándares de calidad y basados en la última investigación científica.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* Primary CTA */}
          <Link href="/products">
            <button className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white text-[#C6441C]">
              <span className="relative z-10 font-semibold text-lg flex items-center gap-2">
                Ver Productos
                <ArrowRight size={20} />
              </span>
            </button>
          </Link>

          {/* Secondary CTA */}
          <Link href="/services">
            <button className="group px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white hover:bg-white/20 transition-all duration-300">
              <span className="text-white font-semibold text-lg flex items-center gap-2">
                Conocer Más
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Certificación ISO</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Investigación Científica</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Máxima Seguridad</span>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}