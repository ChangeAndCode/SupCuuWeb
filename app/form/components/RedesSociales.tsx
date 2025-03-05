'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const RedesSociales: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const redesSociales = [
    { 
      src: '/redesSociales/insta.webp', 
      alt: 'Instagram',
      href: 'https://www.instagram.com/startupchihuahua/'
    },
    { 
      src: '/redesSociales/link.webp', 
      alt: 'LinkedIn',
      href: 'https://www.linkedin.com/company/startupchihuahua/ '
    },
    { 
      src: '/redesSociales/facebook.webp', 
      alt: 'Facebook',
      href: 'https://www.facebook.com/startupchih'
    }
  ];

  if (!mounted) {
    return <div className='h-[200px] animate-pulse bg-gray-200/20 rounded-lg' />;
  }

  return (
    <div suppressHydrationWarning>
      <p className='text-[1.2rem] xs:text-[1.5rem] md:text-[2rem] font-pragmatica uppercase text-white mb-[1.5rem]'>
        @startupchihuahua
      </p>
      <div className='flex lg:justify-end'>
        {redesSociales.map((red) => (
          <a
            key={red.alt}
            href={red.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src={red.src}
              alt={red.alt}
              width={75}
              height={75}
              quality={80}
              priority
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default RedesSociales;
