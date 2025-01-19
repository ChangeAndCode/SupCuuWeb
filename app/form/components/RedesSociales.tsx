'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const RedesSociales: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className='h-[200px] animate-pulse bg-gray-200/20 rounded-lg' />;
  }

  return (
    <div suppressHydrationWarning>
      <p className='text-[1.2rem] xs:text-[1.5rem] md:text-[2rem] font-pragmatica uppercase text-white mb-[1.5rem]'>
        @startupchihuahua
      </p>
      <div className='flex lg:justify-end'>
        {[
          { src: '/redesSociales/insta.webp', alt: 'Instagram' },
          { src: '/redesSociales/link.webp', alt: 'LinkedIn' },
          { src: '/redesSociales/facebook.webp', alt: 'Facebook' }
        ].map((img) => (
          <Image
            key={img.alt}
            src={img.src}
            alt={img.alt}
            width={75}
            height={75}
            quality={80}
            priority
          />
        ))}
      </div>
    </div>
  );
};

export default RedesSociales;
