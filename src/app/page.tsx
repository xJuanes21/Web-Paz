import About from "@/components/landing/About";
import HealthTestimonials from "@/components/landing/HealthTestimonial";
import Hero from "@/components/landing/Hero";
import MetricsSection from "@/components/landing/MetricSection";
import PharmaCTA from "@/components/landing/PharmaCTA";
import { WobbleCardDemo } from "@/components/landing/WobbleCard";
import SliderProd from "@/components/SliderProd/SliderProd";
import SliderProv from "@/components/SliderProv/SliderProv";
import { obtenerTodosProductos } from "@/constants/producto";

export default function Home() {
  const productos = obtenerTodosProductos();
  return (
    <>
      <Hero />
      <SliderProv />
      <div className="relative w-full  overflow-hidden bg-gradient-to-br from-[#561A16] via-[#C6441C]  to-[#D4741C] flex items-center justify-center">
        <About />
      </div>
      <div className="relative w-full  overflow-hidden bg-gradient-to-br from-[#D4741C] via-[#D4741C]  to-[#561A16] flex items-center justify-center">
        <WobbleCardDemo />
      </div>
      <MetricsSection />
      <SliderProd productos={productos} titulo="Nuestros Productos" />
      <HealthTestimonials />
      <PharmaCTA />
    </>
  );
}
