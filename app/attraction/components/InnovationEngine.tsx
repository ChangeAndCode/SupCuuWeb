'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const InnovationEngine = () => {
  const images = [
    '/carrusel/chihuahua.webp',
    '/carrusel/innovacion.webp',
    '/carrusel/desec.webp',
    '/carrusel/futura.webp',
    '/carrusel/tech.webp',
    '/carrusel/startup.webp',
    '/carrusel/city.webp'
  ];

  const imagesLength = images.length;
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const animate = () => {
      if (isPaused) return;
      
      setPosition(prev => {
        const speed = isMobile ? 0.08 : 0.04;
        const newPosition = prev - speed;
        
        if (newPosition % 25 === 0) {
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 500);
        }

        if (newPosition <= -100) {
          return newPosition + 100;
        }
        return newPosition;
      });
    };

    const animationFrame = setInterval(animate, 16);
    return () => clearInterval(animationFrame);
  }, [isPaused, isMobile]);

  const showPrevious = () => {
    setPosition(prev => {
      const newPosition = prev + 25;
      return newPosition > 0 ? newPosition - 100 : newPosition;
    });
  };

  const showNext = () => {
    setPosition(prev => {
      const newPosition = prev - 25;
      return newPosition < -100 ? newPosition + 100 : newPosition;
    });
  };

  return (
    <div>
        <div className='flex items-center justify-center md:justify-start'>
            <div>
                <Image
                    src='/engine.webp'
                    alt='Company Logo'
                    width={220}
                    height={320}
                    quality={80}
                    priority
                    loading='eager'
                    className='hidden md:block'
                    />
            </div>
            <div className='w-8/12 md:ml-[-3rem]'>
                <h2 className="font-pragmatica main-Tipography text-start text-[1.1rem] sm:text-[1.3rem] md:text-[2.3rem] lg:text-[2.5rem] xl:text-[4rem] 2xl:text-[5rem] text-ColorPrincipal">
                CHIHUAHUA INNOVATION ENGINE PARTNERS
                </h2>
            </div>
        </div>

      <div className="relative w-full flex justify-center items-center py-8">
        <div className="relative w-[77%] sm:w-[79%] md:w-10/12 flex items-center justify-center px-2 sm:px-4 md:px-0">
          <button
            className="absolute left-[-25px] sm:left-[-35px] md:left-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-4 border-ColorPrincipal text-ColorPrincipal p-1 rounded-full shadow-md hover:bg-ColorPrincipal hover:text-white"
            onClick={showPrevious}
          >
            <FaChevronLeft size={24} className="sm:w-6 sm:h-6 w-4 h-4" />
          </button>

          <div
            ref={containerRef}
            className="relative overflow-hidden w-full"
          >
            <div
              className="flex"
              style={{
                transform: `translateX(${position}%)`,
                transition: 'transform 0.1s linear',
              }}
            >
              {[...images, ...images].map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-full md:w-1/2 xl:w-1/4"
                  style={{ height: 'auto' }}
                >
                  <Image
                    src={image}
                    alt={`Logo ${index + 1}`}
                    className="w-auto h-auto rounded-md px-4"
                    width={350}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute right-[-25px] sm:right-[-35px] md:right-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-4 border-ColorPrincipal text-ColorPrincipal p-1 rounded-full shadow-md hover:bg-ColorPrincipal hover:text-white"
            onClick={showNext}
          >
            <FaChevronRight size={24} className="sm:w-6 sm:h-6 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InnovationEngine;
