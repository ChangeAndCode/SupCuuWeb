"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselEventsData from "../data/CarouselEventsData";

const CarouselEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  //find the window width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //adjust translateX value to make width dynamic
  const getTranslateValue = () => {
    if (windowWidth >= 1536) {
      return `${currentIndex * 30}%`; // xl value
    }
    if (windowWidth >= 1280) {
      return `${currentIndex * 25}%`; // xl value
    }
    if (windowWidth >= 1024) {
      return `${currentIndex * 33}%`; // lg value
    }
    return `${currentIndex * 100}%`; // md, sm, xs value
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const totalItems = CarouselEventsData.length;
      const step = windowWidth >= 1280 ? 2 : 1;
      return prevIndex + step >= totalItems ? 0 : prevIndex + step;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const totalItems = CarouselEventsData.length;
      const step = windowWidth >= 1280 ? 2 : 1;
      return prevIndex - step < 0 ? totalItems - step : prevIndex - step;
    });
  };

  return (
    <div
      className="flex flex-col items-center w-full
      lg:pb-40 z-0"
    >
      {/* Hero Section with Title Overlay */}
      <div
        className="
      relative 
      w-full 
      lg:w-[60%]
      z-10"
      >
        <Image
          src="/dreamBig/background_title.png"
          alt="events & opportunities"
          width={946}
          height={410}
          className="w-full h-auto object-cover"
          priority
        />
        <h1
          className="
        absolute 
        inset-0 
        flex 
        items-center 
        justify-center 
        text-center 
        text-white
        xs:text-[14px] 
        sm:text-4xl 
        md:text-2xl
        lg:text-4xl
        font-pragmatica 
        font-bold 
        uppercase 
        px-4 
        text-shadow-lg
        "
        >
          Events & opportunities
        </h1>
      </div>

      {/* Carousel Wrapper */}
      <div
        className="
      relative 
      w-full
      lg:w-[80%] 
      mt-6 
      md:mt-8 
      overflow-hidden
      xs:bottom-14
      md:bottom-[88px]
      lg:flex lg:justify-start
      z-0
      "
      >
        {/* Carousel Items */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${getTranslateValue()})`,
          }}
        >
          {CarouselEventsData.map((element, index) => {
            const { title, description, image, date, location } = element;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-full px-4 lg:w-[70%] lg:max-w-[650px]
                xl:max-w-[480px] 2xl:max-w-[600px]
                "
              >
                <div
                  className="
                bg-gray-300 
                rounded-md 
                overflow-hidden 
                shadow-md 
                transform 
                transition-transform 
                hover:scale-[1.02] 
                md:p-5 md:rounded-[25px]
                "
                >
                  <div className="p-4 md:p-0">
                    <h2
                      className="
                    font-pragmatica 
                    font-semibold 
                    md:text-2xl
                    lg:text-xl
                    text-sm 
                    uppercase 
                    text-left 
                    mb-2"
                    >
                      {title}
                    </h2>
                  </div>

                  <div
                    className="
                  flex
                  xs:items-center
                  flex-col 
                  md:flex-row
                  items-start
                  mx-auto
                  "
                  >
                    <div className="md:flex md:justify-center md:w-[45%] md:h-auto">
                      <div
                        className="
                        w-52
                        h-52
                        bg-gray-500
                        "
                      ></div>
                    </div>
                    <div className="flex flex-col p-4 md:p-0 md:w-[55%] flex-grow">
                      <div className="md:p-2 mb-4">
                        <p className="font-semibold text-xs sm:text-sm lg:text-xs uppercase text-left mb-5">
                          {description}
                        </p>
                        <p className="font-semibold text-xs sm:text-sm uppercase text-left">
                          fecha:{date}
                        </p>
                        <p className="font-semibold text-xs sm:text-sm uppercase text-left">
                          lugar:{location}
                        </p>
                      </div>
                      <div
                        className="
                      flex
                      justify-center
                      "
                      >
                        <button
                          className="
                        px-4 
                        py-2
                        md:w-56 md:text-2xl
                        bg-ColorPrincipal 
                        text-white 
                        rounded-full
                        text-xs 
                        hover:bg-ColorPrincipaltransition font-pragmatica 
                        uppercase
                        "
                        >
                          Registro
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="
          absolute 
          top-1/2
          max-sm:left-[-14px] max-sm:border-0 max-sm:shadow-none
          md:border-0 md:left-[-14px] md:shadow-none
          xl:border-4 xl:left-0
          left-4 
          transform 
          -translate-y-1/2 
          p-2 
          rounded-full 
          shadow-md 
          hover:scale-105 
          bg-transparent 
          border-ColorPrincipal"
        >
          <FaChevronLeft className="text-ColorPrincipal" size={24} />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="
          absolute 
          top-1/2
          max-sm:right-[-14px] max-sm:border-0 max-sm:shadow-none
          md:border-0 md:right-[-14px] md:shadow-none
          xl:border-4 xl:right-0
          right-[0%] 
          transform 
          -translate-y-1/2 
          p-2 
          rounded-full 
          shadow-md 
          hover:scale-105 
          bg-transparent 
          border-ColorPrincipal"
        >
          <FaChevronRight className="text-ColorPrincipal" size={24} />
        </button>
      </div>
    </div>
  );
};

export default CarouselEvents;
