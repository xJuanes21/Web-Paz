import About from "@/components/About";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import SliderProv from "@/components/SliderProv/SliderProv";
import Vision from "@/components/Vision";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SliderProv /> 
      <div className="relative w-full  overflow-hidden bg-gradient-to-br from-black via-red-900 to-orange-600 flex items-center justify-center">
        <About />
      </div>
      <Mission  />
      <Vision />
    </>
  );
}
