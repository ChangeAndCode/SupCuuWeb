'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Startup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Reset animation when element goes out of view
          setTimeout(() => {
            if (!entry.isIntersecting) {
              setIsVisible(false);
            }
          }, 1000);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div>
      {/* Logo */}
      <div 
        ref={elementRef}
        className={`relative z-10 md:top-[7rem] lg:top-[10rem] xl:top-[5rem] w-[350px] md:w-[290px] lg:w-[400px] xl:w-[470px] h-[350px] md:h-[290px] lg:h-[470px] xl:h-[370px] ${
          isVisible ? 'animate-bounce-in' : 'opacity-0'
        }`}
      >
        <div className="flex justify-center">
          <Image
            src="/startupB.webp"
            alt="Company Logo"
            width={470}
            height={370}
            style={{ height: 'auto' }}
            quality={80}
            priority
            loading="eager"
            placeholder="blur"
            blurDataURL="/startupB.webp"
          />
        </div>
      </div>
      {/* Texto detrás */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center">
          <p className="main-Tipography hidden md:block text-[2rem] md:text-[4rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[11rem] font-pragmatica uppercase text-outline  md:leading-[5rem] lg:leading-[8rem] 2xl:leading-[8rem] whitespace-nowrap">
            We are
          </p>
          <p className="main-Tipography hidden md:block text-[2rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem] 2xl:text-[9.5rem] font-pragmatica uppercase text-outline md:leading-[5rem] lg:leading-[8rem] 2xl:leading-[8rem] whitespace-nowrap">
            startup chihuahua
          </p>
        </div>
      </div>
    </div>
  );
};

export default Startup;