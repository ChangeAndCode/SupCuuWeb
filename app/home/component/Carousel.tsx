"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Carrusel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const cards: Card[] = [
    {
      id: 1,
      title:
        "The Global Entrepreneurship Monitor highlights Mexico as one of the leading entrepreneurial ecosystems for women 1",
      description:
        "Mexico ranks 11th out of 49 economies with the highest number of women entrepreneurs, with 16.1% of its female population involved in entrepreneurship, surpassing the United States, which holds the 15th position.",
      image: "/prueba.webp",
    },
    {
      id: 2,
      title:
        "The Global Entrepreneurship Monitor highlights Mexico as one of the leading entrepreneurial ecosystems for women 2",
      description:
        "Mexico ranks 11th out of 49 economies with the highest number of women entrepreneurs, with 16.1% of its female population involved in entrepreneurship, surpassing the United States, which holds the 15th position.",
      image: "/prueba.webp",
    },
    {
      id: 3,
      title:
        "The Global Entrepreneurship Monitor highlights Mexico as one of the leading entrepreneurial ecosystems for women 3",
      description:
        "Mexico ranks 11th out of 49 economies with the highest number of women entrepreneurs, with 16.1% of its female population involved in entrepreneurship, surpassing the United States, which holds the 15th position.",
      image: "/prueba.webp",
    },
    {
      id: 4,
      title:
        "The Global Entrepreneurship Monitor highlights Mexico as one of the leading entrepreneurial ecosystems for women 4",
      description:
        "Mexico ranks 11th out of 49 economies with the highest number of women entrepreneurs, with 16.1% of its female population involved in entrepreneurship, surpassing the United States, which holds the 15th position.",
      image: "/prueba.webp",
    },
  ];

  const cardsLength = useRef(cards.length);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTranslateValue = () => {
    return `${currentIndex * 100}%`;
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const showNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardsLength.current - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(showNext, 5000);
    return () => clearInterval(interval);
  }, [showNext]);

  return (
    <div className="relative w-full flex justify-center items-center py-[22rem]">
      {/* left arrow - Movido fuera del contenedor principal */}
      <button
        className="absolute left-4 xl:left-[6rem] top-1/2 transform -translate-y-1/2 z-20 bg-transparent border-4 border-ColorPrincipal text-ColorPrincipal p-1 rounded-full shadow-md hover:bg-ColorPrincipal hover:text-white"
        onClick={showPrevious}
        aria-label="Previous slide"
      >
        <FaChevronLeft size={28} />
      </button>

      <div className="relative w-10/12 bg-white rounded-3xl py-6 px-8 shadow-lg flex flex-col xl:flex-row items-center mx-8 xl:mx-0 overflow-hidden">
        {/* Carousel Container */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{
              transform: `translateX(-${getTranslateValue()})`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-full flex flex-col xl:flex-row items-center justify-between"
              >
                {/* Text */}
                <div className="xl:pr-8 w-full lg:text-left mb-5 xl:mb-0 2xl:px-[2rem]">
                  <h3 className="text-lg main-Tipography font-pragmatica uppercase lg:text-[2.2rem] 2xl:text-[2.9rem] xl:leading-[3rem] lg:leading-[3rem] mb-2 xl:mb-6">
                    {card.title}
                  </h3>
                  <hr className="my-2 lg:my-6 border-t-4 border-black" />
                  <p className="text-sm xl:text-[1.8rem] font-poppins font-semibold lg:text-[2rem] xl:leading-[2rem] lg:leading-[3rem] capitalize text-black mt-2 lg:mt-6">
                    {card.description}
                  </p>
                </div>

                {/* Imagen */}
                <div className="w-4/5 flex justify-center items-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="w-auto h-auto rounded-md"
                    width={600}
                    height={400}
                    quality={80}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* right arrow - Movido fuera del contenedor principal */}
      <button
        className="absolute right-4 xl:right-[6rem] top-1/2 transform -translate-y-1/2 z-20 bg-transparent border-4 border-ColorPrincipal text-ColorPrincipal p-1 rounded-full shadow-md hover:bg-ColorPrincipal hover:text-white"
        onClick={showNext}
        aria-label="Next slide"
      >
        <FaChevronRight size={28} />
      </button>
    </div>
  );
};

export default Carrusel;
