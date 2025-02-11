'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

const Presidente = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
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
    <div className="w-full max-w-[1920px] mx-auto relative">
      <div className="flex flex-col-reverse justify-center items-center xl:flex-row px-[2rem] xl:px-0">
        <div className="bg-white w-full xl:w-[60rem] px-[2rem] xl:px-[5rem] py-[3rem] xl:py-[3.5rem] rounded-[4rem] xl:translate-x-[-6rem]">
          <p className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem] font-pragmatica uppercase leading-[2rem] md:leading-[5rem]">
            nearshoring financing
          </p>
          <p className="text-[1.2rem] lg:text-[1.5rem] xl:text-[1.7rem] font-pragmatica uppercase leading-[3rem]">
            ceo & founder of
          </p>
          <Image
            src="/Logos/equity.webp"
            width={400}
            height={400}
            alt="Equity"
            className="mb-[2rem]"
            quality={80}
          />
          <p className="text-[1.2rem] md:text-[1.5rem] lg:text-[1.6rem] font-pragmatica uppercase w-full leading-[2rem]">
            Member of business councils such as COPARMEX, ASOFOM, and DESEC
          </p>
        </div>
        <div 
          ref={elementRef}
          className="relative xl:absolute xl:translate-x-[24rem] mb-[-4rem] md:mb-[-6rem] lg:mb-[-6.5rem] xl:mb-0 xl:mt-[6rem]"
        >
          <Image
            src="/Team/presidente.webp"
            width={650}
            height={650}
            alt="Presidente"
            quality={80}
            className={isVisible ? 'slide-in-right' : 'opacity-0'}
          />
        </div>
      </div>
    </div>
  );
};

export default Presidente;
