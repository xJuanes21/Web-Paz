// components/ProductSlider/ProductSlider.tsx
'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SliderProv.module.css"; // Asumiendo que usaremos un módulo CSS similar

interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  descripcion?: string;
  categoria: string;
}

interface ProductSliderProps {
  productos: Producto[];
  titulo: string;
  colorFondo?: string;
  mostrarVerMas?: boolean;
  urlCategoria?: string;
}

export default function SliderProv({ 
  productos, 
  titulo, 
  colorFondo = "#C6441C",
  mostrarVerMas = true,
  urlCategoria = "/productos"
}: ProductSliderProps) {
    // Asegurarnos de tener suficientes productos para el efecto de marquee
    const productosRepetidos = [...productos, ...productos, ...productos];
    
    // Convertir el color a formato RGB para poder usarlo en gradientes
    const hexToRgb = (hex: string) => {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
      return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
        '198, 68, 28'; // Valor predeterminado si hay error
    };

    const rgbColor = hexToRgb(colorFondo);
    
    return (
        <div className="relative py-8" style={{ backgroundColor: colorFondo }}>
            {/* Contenedor con gradiente para dar efecto de fade a los lados */}
            <div className="absolute inset-0 pointer-events-none">
                <div 
                  className="absolute left-0 w-32 h-full z-10"
                  style={{ background: `linear-gradient(to right, rgba(${rgbColor}, 1), rgba(${rgbColor}, 0))` }}
                ></div>
                <div 
                  className="absolute right-0 w-32 h-full z-10"
                  style={{ background: `linear-gradient(to left, rgba(${rgbColor}, 1), rgba(${rgbColor}, 0))` }}
                ></div>
            </div>

            {/* Título de la sección y botón Ver más */}
            <div className="container mx-auto pt-4 pb-6 flex justify-between items-center px-4">
                <h3 className="text-white text-xl font-medium font-poppins">{titulo}</h3>
                
                {mostrarVerMas && (
                  <Link 
                    href={`${urlCategoria}/${titulo.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white text-sm hover:underline"
                  >
                    Ver más
                  </Link>
                )}
            </div>

            {/* Marquee effect */}
            <div className="flex overflow-x-auto pt-5 py-4">
                <div className={styles["marquee-container"]}>
                    <div className={styles["marquee-wrapper"]}>
                        {productosRepetidos.map((producto, index) => (
                            <div key={index} className={styles["marquee-item"]}>
                                <Link href={`/productos/${producto.id}`}>
                                    <div className="bg-white rounded-lg shadow-md p-3 w-48 h-60 flex flex-col items-center hover:shadow-lg transition-all">
                                        <div className="w-32 h-32 relative mb-3">
                                            <Image
                                                src={producto.imagen}
                                                alt={producto.nombre}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <h4 className="text-[#561A16] font-medium text-center text-sm line-clamp-2">
                                            {producto.nombre}
                                        </h4>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}