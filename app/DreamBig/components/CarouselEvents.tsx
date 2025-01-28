"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselEventsData from "../data/CarouselEventsData";

const CarouselEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CarouselEventsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselEventsData.length);
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
        md:text-5xl
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
      max-w-full 
      mt-6 
      md:mt-8 
      overflow-hidden
      xs:bottom-14
      z-0
      "
      >
        {/* Carousel Items */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {CarouselEventsData.map((element, index) => {
            const { title, description, image, date, location } = element;
            return (
              <div key={index} className="flex-shrink-0 w-full md:w-[50%] px-4">
                <div className="bg-gray-300 rounded-md overflow-hidden shadow-md transform transition-transform hover:scale-[1.02]">
                  <div className="p-4 md:p-6">
                    <h2 className="text-sm md:text-base font-bold uppercase text-left mb-2">
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
                  "
                  >
                    <div
                      className="
                    w-40
                    h-40
                    bg-gray-500
                    "
                    ></div>
                    <div className="flex flex-col p-4 md:p-6 flex-grow">
                      <div className="mb-4">
                        <p className="font-semibold text-xs sm:text-sm uppercase text-left mb-5">
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
          left-4 
          transform 
          -translate-y-1/2 
          p-2 
          rounded-full 
          shadow-md 
          hover:scale-105 
          bg-transparent 
          border-4 
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
          right-[0%] 
          transform 
          -translate-y-1/2 
          p-2 
          rounded-full 
          shadow-md 
          hover:scale-105 
          bg-transparent 
          border-4 
          border-ColorPrincipal"
        >
          <FaChevronRight className="text-ColorPrincipal" size={24} />
        </button>
      </div>
    </div>
  );
};

export default CarouselEvents;
