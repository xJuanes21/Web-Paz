// components/SliderProv/SliderProv.tsx
import React from "react";
import Image from "next/image";
import { logosHumanos } from "@/constants/logos";
import styles from "./SliderProv.module.css"; // Importa los estilos del módulo

export default function SliderProv() {
  return (
    <div className="relative py-8 bg-black">
      {/* Contenedor con gradiente para dar efecto de fade a los lados */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>

      {/* Título de la sección */}
      <div className="container mx-auto pt-4 pb-6">
        <h3 className="text-white text-xl font-medium text-center font-poppins">Laboratorios</h3>
      </div>

      {/* Marquee effect */}
      <div className="flex overflow-x-auto py-4">
        <div className={styles["marquee-container"]}>
          <div className={styles["marquee-wrapper"]}>
            {/* Duplicar los logos para crear el efecto de scroll sin interrupciones */}
            {[...logosHumanos, ...logosHumanos, ...logosHumanos].map((logo, index) => (
              <div key={index} className={styles["marquee-item"]}>
                <Image
                  src={logo.path}
                  alt={logo.alt}
                  width={60} // Tamaño reducido
                  height={20} // Tamaño reducido
                  className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
