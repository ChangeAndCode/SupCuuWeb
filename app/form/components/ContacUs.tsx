'use client';
import Image from "next/image";
import { useEffect, useState } from 'react';

const ContacUs: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Renderiza un placeholder con las mismas dimensiones
  if (!mounted) {
    return <div className='md:w-5/12 h-[200px] animate-pulse bg-gray-200/20 rounded-lg' />;
  }

  return (
    <div className='md:w-5/12' suppressHydrationWarning>
      <p className='text-[1.5rem] md:text-[2rem] font-pragmatica uppercase text-white mb-[1.5rem]'>
        Contact-us
      </p>
      <div className="flex items-center gap-x-4 mb-[1.5rem]">
        <Image
          src='/redesSociales/redesTel.webp'
          alt='Teléfono'
          width={35}
          height={35}
          className="object-contain"
          quality={80}
          priority
        />
        <p className='text-[1em] font-pragmatica uppercase text-white'>
          614 226 78 40
        </p>
      </div>
      <div className="flex items-center gap-x-4 mb-[1.5rem]">
        <Image
          src='/redesSociales/pin.webp'
          alt='Ubicación'
          width={35}
          height={35}
          className="object-contain"
          quality={80}
          priority
        />
        <p className='text-[1em] font-pragmatica uppercase text-white w-9/12'>
          Parque Tecnológico PIT 3 Av. H. Colegio Militar 31300 Chihuahua, Chih.
        </p>
      </div>
    </div>
  );
};

export default ContacUs;
