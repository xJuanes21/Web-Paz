'use client';
import React from "react";
import SliderProd from "./SliderProd/SliderProv";
import { categorias, productosMap } from "@/constants/producto";

export default function ProductosSection() {
  return (
    <div className="w-full">
      {/* Sección de introducción */}
      <div className="bg-gradient-to-br from-white via-white to-orange-600 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#561A16] mb-8 font-poppins">
            Nuestros Productos
          </h2>
          <p className="text-lg text-center text-[#561A16] max-w-3xl mx-auto mb-12">
            Ofrecemos una amplia variedad de productos farmacéuticos y de cuidado personal 
            con los más altos estándares de calidad. Descubra nuestra gama completa 
            organizada por categorías.
          </p>
        </div>
      </div>

      {/* Sliders de productos por categoría */}
      <div>
        {categorias.map((categoria, index) => (
          <SliderProd
            key={categoria.id}
            productos={productosMap[categoria.id]}
            titulo={categoria.nombre}
            colorFondo={categoria.color}
            urlCategoria="/productos"
          />
        ))}
      </div>
    </div>
  );
}