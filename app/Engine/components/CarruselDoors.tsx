'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Card {
  id: number;
  Nombre: string;
  posicion:string;
  description: string;
  image: string;
}

const CarruselDoors = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const cards: Card[] = [
    {
      id: 1,
      Nombre: 'Ricardo Valles CEO',
      posicion: '@savefruit',
      description: 'Originally from Venezuela',
      image: '/carruselDoors/ricardo.webp',
    },
    {
      id: 2,
      Nombre: 'alan hernández ceo',
      posicion: '@biogrip',
      description: 'Originally from GUADALAJARA, MÉXICO',
      image: '/carruselDoors/alan.webp',
    },
    {
      id: 3,
      Nombre: 'REGINA ATHIÉ CEO',
      posicion: '@cuéntame',
      description: 'originally from MÉXICO CITY',
      image: '/carruselDoors/regina.webp',
    },
  ];

  const cardsLength = useRef<number>(cards.length);

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  // Cambiar la imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    }, 9000); // 5000 ms = 5 segundos

    // Limpiar el intervalo cuando el componente se desmonte o el índice cambie
    return () => clearInterval(interval);
  }, [currentIndex, cards.length]);

  return (
    <div className="relative w-full flex justify-center items-center py-[13rem] md:py-[20rem] lg:py-[21rem] xl:py-[22rem] px-4 lg:px-8">
      <div className='absolute top-[-1rem] w-full flex justify-center'>
        <Image
            src='/carruselDoors/tituloDoors.webp'
            alt='Company Logo'
            width={600}
            height={500}
            quality={80}
            loading='eager'
            placeholder='blur'
            blurDataURL='/carruselDoors/tituloDoors.webp'
            className="w-auto h-auto"
        />
      </div>
      <div className="relative w-full lg:w-11/12 xl:w-10/12 py-2 px-4 lg:px-[5rem] xl:px-[10rem] flex flex-col items-center">
        {/* Flecha izquierda */}
        <button
          className="absolute left-2 lg:left-0 xl:left-[-28px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-4 border-ColorPrincipal text-ColorPrincipal p-1 rounded-full shadow-md hover:bg-ColorPrincipal hover:text-white"
          onClick={showPrevious}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Card */}
        <div className="w-full flex flex-col lg:flex-col xl:flex-row items-center gap-8 xl:gap-4">
          {/* Imagen */}
          <div className="w-4/5 xl:w-11/12 flex justify-center items-center">
            <Image
              src={cards[currentIndex].image}
              alt={cards[currentIndex].Nombre}
              className="w-full h-auto rounded-md"
              width={600}
              height={400}
              quality={80}
            />
          </div>
          {/* Texto */}
          <div className="w-full text-center lg:text-center xl:text-left px-4 lg:px-8 xl:px-0">
            <h3 className="text-3xl lg:text-[3rem] xl:text-[2.5rem] 2xl:text-[4rem] main-Tipography text-ColorPrincipal font-pragmatica uppercase leading-tight lg:leading-[3.5rem] xl:leading-[4rem] mb-2 xl:mb-6">
              {cards[currentIndex].Nombre}
            </h3>
            <h3 className="text-2xl lg:text-[3rem] xl:text-[3rem] 2xl:text-[4rem] font-PerformanceMark text-ColorPrincipal uppercase leading-tight lg:leading-[3.5rem] xl:leading-[3rem] mb-2 xl:mb-6">
              {cards[currentIndex].posicion}
            </h3>
            <div className='w-full lg:w-4/5 xl:w-3/5 mx-auto xl:mx-0'>
              <p className="text-lg lg:text-[1.8rem] xl:text-[1.8rem] font-poppins leading-tight lg:leading-[2.5rem] xl:leading-[2rem] uppercase text-ColorPrincipal mt-2 lg:mt-6">
                {cards[currentIndex].description}
              </p>
            </div>
          </div>
        </div>

        {/* Flecha derecha */}
        <button
          className="absolute right-2 lg:right-0 xl:right-[-28px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-4 border-ColorPrincipal text-ColorPrincipal p-1 rounded-full shadow-md hover:bg-ColorPrincipal hover:text-white"
          onClick={showNext}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default CarruselDoors;
