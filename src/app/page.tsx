import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SliderProv from "@/components/SliderProv/SliderProv";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SliderProv /> 
      <div className="relative w-full h-80 overflow-hidden bg-gradient-to-br from-black via-red-900 to-orange-600 flex items-center justify-center">
        <p className="text-white text-3xl font-bold text-center">
          Descubre nuestra linea de productos farmaceuticos desarrollados con los
          mas altos estandares de calidad y basados en la ultima investigacion
          cientifica.
        </p>
      </div>
    </>
  );
}
