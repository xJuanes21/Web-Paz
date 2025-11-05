// components/ProductSlider/ProductSliderDeluxe.tsx
'use client';
import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SliderProd.module.css";
import TypingText from "../CustomText";
import { ChevronRight, Star } from "lucide-react";

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
  const CARD_WIDTH = 320; // debe coincidir con el ancho del item
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Hash determinístico simple (evita Math.random para SSR)
  const hash = (n: number) => {
    let x = n | 0;
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    return x >>> 0;
  };

  // 1) Selección determinística de hasta 10 items (orden por hash)
  const baseProductos = useMemo(() => {
    const sorted = [...productos].sort((a, b) => {
      const ha = hash(a.id);
      const hb = hash(b.id);
      return ha === hb ? a.id - b.id : ha - hb;
    });
    return sorted.slice(0, Math.min(10, sorted.length));
  }, [productos]);

  // 2) Triplicar para efecto infinito
  const productosRepetidos = useMemo(() => {
    return [...baseProductos, ...baseProductos, ...baseProductos];
  }, [baseProductos]);

  // 3) Posicionar el scroll en el bloque central al montar
  useEffect(() => {
    if (scrollRef.current) {
      const startIndex = baseProductos.length; // inicio en el 2º bloque
      scrollRef.current.scrollLeft = startIndex * CARD_WIDTH;
      setActiveIndex(startIndex);
    }
  }, [baseProductos.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollRef.current && baseProductos.length > 0) {
        const el = scrollRef.current;
        const nextIndex = activeIndex + 1;

        el.scrollTo({ left: (activeIndex + 1) * CARD_WIDTH, behavior: 'smooth' });
        setActiveIndex(nextIndex);

        // Cuando pasamos al tercer bloque, regresamos una longitud para mantener el bucle
        const blockLen = baseProductos.length;
        const totalLen = blockLen * 3;
        if (nextIndex >= blockLen * 2) {
          // timeout corto para esperar el smooth, luego ajustar sin animación
          setTimeout(() => {
            if (!scrollRef.current) return;
            scrollRef.current.scrollTo({ left: (nextIndex - blockLen) * CARD_WIDTH, behavior: 'auto' });
            setActiveIndex((idx) => idx - blockLen);
          }, 350);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, activeIndex, baseProductos.length]);

  const displayedIndex = useMemo(() => {
    return baseProductos.length ? (activeIndex % baseProductos.length) : 0;
  }, [activeIndex, baseProductos.length]);

  return (
    <div className="relative py-20 bg-gradient-to-br from-[#C6441C] via-[#D84A1E] to-[#A33516] overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className={styles["mesh-gradient"]}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className={styles["particles"]}>
          {[...Array(15)].map((_, i) => (
            <div key={i} className={styles[`particle-${i % 5}`]}></div>
          ))}
        </div>
      </div>

      {/* Edge fade effects */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#C6441C] to-transparent z-0 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#C6441C] to-transparent z-0 pointer-events-none"></div>

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
                {baseProductos.length} productos destacados
              </span>
            </div>
          </div>

          {/* Pagination dots - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {baseProductos.slice(0, 5).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  // saltar al bloque central + idx
                  const targetIndex = baseProductos.length + idx;
                  setActiveIndex(targetIndex);
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: targetIndex * CARD_WIDTH,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`transition-all duration-300 rounded-full ${displayedIndex === idx
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
        className="relative z-30 flex gap-6 overflow-x-auto px-4 md:px-12 pb-8  pt-5 snap-x snap-mandatory"
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
            className="flex-shrink-0 w-72 md:w-80 snap-center relative z-10 hover:z-30 transition-none"
          >
            <Link href={`/products/detail/${producto.id}`}>
              <div className={styles["glass-card"]}>
                {/* Glow effect on hover */}
                <div className={styles["card-glow"]}></div>

                {/* Badge with animation */}
                <div className={styles["premium-badge"]}>
                  <Star size={15} />
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
                      className="object-contain relative z-1 drop-shadow-2xl rounded-2xl"
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
        {baseProductos.slice(0, 5).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const targetIndex = baseProductos.length + idx;
              setActiveIndex(targetIndex);
              if (scrollRef.current) {
                scrollRef.current.scrollTo({
                  left: targetIndex * CARD_WIDTH,
                  behavior: 'smooth'
                });
              }
            }}
            className={`transition-all duration-300 rounded-full ${displayedIndex === idx
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