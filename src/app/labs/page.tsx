import Image from 'next/image';
import Link from 'next/link';
import { logosHumanos, logosVet } from '@/constants/logos';
import Labs from '@/components/Labs';
export default function Page() {



  // Función para dividir el array en grupos de 4
  const chunkArray = <T,>(array: T[], size: number): T[][] => {
    const chunkedArr: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };


  // Dividir los arrays en filas de 4
  const humanRows = chunkArray(logosHumanos, 4);
  const vetRows = chunkArray(logosVet, 4);

  return (
    <div className="w-full pt-18 py-8  bg-gradient-to-br from-white via-white to-orange-600">
      <h1 className='text-4xl text-center font-bold mb-4 font-poppins'>Nuestros laboratorios</h1>
      <p className='text-lg text-center font-open mb-8'>Conoce nuestros laboratorios, trabajamos con lo mejor de la industria de la salud y el bienestar. <br /> Nuestros productos son desarrollados con los mejores estandares de calidad y basados en la ultima investigacion cientifica</p>
      <Labs />
    </div>
 
  );
}