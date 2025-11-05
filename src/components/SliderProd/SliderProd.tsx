// components/ProductSlider/ProductSliderDeluxe.tsx
'use client';
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SliderProd.module.css";
import TypingText from "../CustomText";
import { ChevronRight } from "lucide-react";

interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  descripcion?: string;
  categoria: string;
}

interface ProductSliderDeluxeProps {
  productos: Producto[];
  titulo: string;
}

export default function SliderProd({
  productos,
  titulo
}: ProductSliderDeluxeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const productosRepetidos = [...productos, ...productos, ...productos];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollRef.current) {
        const currentScroll = scrollRef.current.scrollLeft;
        const cardWidth = 320;
        const nextScroll = currentScroll + cardWidth;

        scrollRef.current.scrollTo({
          left: nextScroll,
          behavior: 'smooth'
        });

        setActiveIndex((prev) => (prev + 1) % productos.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, productos.length]);

  return (
    <div className="relative py-20 bg-gradient-to-br from-[#C6441C] via-[#D84A1E] to-[#A33516] overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className={styles["mesh-gradient"]}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={styles["particles"]}>
          {[...Array(15)].map((_, i) => (
            <div key={i} className={styles[`particle-${i % 5}`]}></div>
          ))}
        </div>
      </div>

      {/* Edge fade effects */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#C6441C] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#C6441C] to-transparent z-10 pointer-events-none"></div>

      {/* Header Section */}
      <div className="container mx-auto px-4 md:px-6 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-1.5 h-8 bg-white rounded-full shadow-lg"></div>
              <h3 className="text-white text-3xl md:text-4xl font-bold font-poppins tracking-tight">
                <TypingText title={titulo} />
              </h3>
            </div>
            <div className="flex items-center gap-2 ml-6">
              <div className="h-px w-16 bg-white/40"></div>
              <span className="text-white/70 text-sm font-light">
                {productos.length} productos destacados
              </span>
            </div>
          </div>

          {/* Pagination dots - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {productos.slice(0, 5).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: idx * 320,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`transition-all duration-300 rounded-full ${activeIndex % productos.length === idx
                  ? 'w-8 h-2 bg-white'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 md:px-12 pb-8 snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {productosRepetidos.map((producto, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 md:w-80 snap-center"
            style={{
              position: 'relative',
              zIndex: 1,
              transition: 'z-index 0s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.zIndex = '999';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.zIndex = '1';
            }}
          >
            <Link href={`/productos/${producto.id}`}>
              <div className={styles["glass-card"]}>
                {/* Glow effect on hover */}
                <div className={styles["card-glow"]}></div>

                {/* Badge with animation */}
                <div className={styles["premium-badge"]}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Disponible</span>
                </div>

                {/* Image container with 3D effect */}
                <div className={styles["image-3d-container"]}>
                  <div className="relative w-48 h-48 mx-auto">
                    <div className={styles["image-backdrop"]}></div>
                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      fill
                      className="object-contain relative z-1 drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Product info with glassmorphism */}
                <div className={styles["product-info"]}>
                  <div className="mb-1">
                    <span className="text-white/60 text-xs font-medium uppercase tracking-wider">
                      {producto.categoria}
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-4 line-clamp-2 leading-tight">
                    {producto.nombre}
                  </h4>

                  {/* CTA Button */}
                  <div className={styles["cta-container"]}>
                    <span className={styles["cta-button"]}>
                      <span className="relative z-10">Ver Detalles</span>
                      <ChevronRight size={20} />
                    </span>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className={styles["corner-decoration"]}>
                  <div className={styles["corner-tl"]}></div>
                  <div className={styles["corner-br"]}></div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile pagination dots */}
      <div className="flex md:hidden justify-center items-center gap-2 mt-6">
        {productos.slice(0, 5).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveIndex(idx);
              if (scrollRef.current) {
                scrollRef.current.scrollTo({
                  left: idx * 320,
                  behavior: 'smooth'
                });
              }
            }}
            className={`transition-all duration-300 rounded-full ${activeIndex % productos.length === idx
              ? 'w-8 h-2 bg-white'
              : 'w-2 h-2 bg-white/40'
              }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="text-center mt-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
          <div className={styles["scroll-indicator"]}></div>
          <p className="text-white/80 text-xs font-medium">
            Desliza para explorar más
          </p>
        </div>
      </div>
    </div>
  );
}