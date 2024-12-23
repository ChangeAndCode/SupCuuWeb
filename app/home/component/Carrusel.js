'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: 'The Global Entrepreneurship Monitor highlights Mexico as one of the leading entrepreneurial ecosystems for women 1',
      description:
        'Mexico ranks 11th out of 49 economies with the highest number of women entrepreneurs, with 16.1% of its female population involved in entrepreneurship, surpassing the United States, which holds the 15th position.',
      image: '/prueba.webp',
    },
    {
      id: 2,
      title: 'The Global Entrepreneurship Monitor highlights Mexico as one of the leading entrepreneurial ecosystems for women 2',
      description:
        'Mexico ranks 11th out of 49 economies with the highest number of women entrepreneurs, with 16.1% of its female population involved in entrepreneurship, surpassing the United States, which holds the 15th position.',
      image: '/prueba.webp',
    },
    {
      id: 3,
      title: 'The Global Entrepreneurship Monitor highlights Mexico as one of the leading entrepreneurial ecosystems for women 3',
      description:
        'Mexico ranks 11th out of 49 economies with the highest number of women entrepreneurs, with 16.1% of its female population involved in entrepreneurship, surpassing the United States, which holds the 15th position.',
      image: '/prueba.webp',
    },
    {
      id: 4,
      title: 'The Global Entrepreneurship Monitor highlights Mexico as one of the leading entrepreneurial ecosystems for women 4',
      description:
        'Mexico ranks 11th out of 49 economies with the highest number of women entrepreneurs, with 16.1% of its female population involved in entrepreneurship, surpassing the United States, which holds the 15th position.',
      image: '/prueba.webp',
    },
  ];

  const cardsLength = useRef(cards.length);

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
    }, 5000); // 5000 ms = 5 segundos

    // Limpiar el intervalo cuando el componente se desmonte o el índice cambie
    return () => clearInterval(interval);
  }, [currentIndex, cards.length]);

  return (
    <div className="relative w-full flex justify-center items-center py-[22rem]">
      <div className="relative w-10/12 bg-white rounded-3xl py-6 px-8 shadow-lg flex flex-col xl:flex-row items-center mx-8 xl:mx-0">
        {/* Flecha izquierda */}
        <button
          className="absolute left-[-28px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-4 border-ColorPrincipal text-ColorPrincipal p-1 rounded-full shadow-md hover:bg-ColorPrincipal hover:text-white"
          onClick={showPrevious}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Card */}
        <div className="w-full flex flex-col xl:flex-row items-center justify-center">
          {/* Texto */}
          <div className="xl:pr-8 w-full xl:w-1/2 lg:text-left mb-5 xl:mb-0">
            <h3 className="text-lg main-Tipography font-pragmatica uppercase xl:text-[2rem] lg:text-[2.7rem] xl:leading-[3rem] lg:leading-[3rem] mb-2 xl:mb-6">
              {cards[currentIndex].title}
            </h3>
            <hr className="my-2 lg:my-6 border-t-4 border-black" />
            <p className="text-sm xl:text-[1.5rem] font-semibold lg:text-[2rem] xl:leading-[2rem] lg:leading-[3rem] uppercase text-black mt-2 lg:mt-6">
              {cards[currentIndex].description}
            </p>
          </div>

          {/* Imagen */}
          <div className="w-4/5 lg:w-1/2 flex justify-center items-center">
            <Image
              src={cards[currentIndex].image}
              alt={cards[currentIndex].title}
              className="w-auto h-auto rounded-md"
              width={600}
              height={400}
              quality={80}
            />
          </div>
        </div>

        {/* Flecha derecha */}
        <button
          className="absolute right-[-28px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-4 border-ColorPrincipal text-ColorPrincipal p-1 rounded-full shadow-md hover:bg-ColorPrincipal hover:text-white"
          onClick={showNext}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carrusel;
