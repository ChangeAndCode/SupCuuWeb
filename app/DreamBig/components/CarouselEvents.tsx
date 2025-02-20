"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { UmbracoApi } from "@/lib/api";

interface CarouselEventData {
  title: string;
  description: string;
  date: string;
  location: string;
  image: {
    url: string;
    name: string;
  }[];
  imageAlt: string;
}

const CarouselEvents = () => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Fetch Umbraco content
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await UmbracoApi.getContent("events");
        if (data && data.properties) {
          setContent(data);
        }
      } catch (error) {
        console.error("Error fetching content: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, []);

  // Find the window width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!content || loading) {
    return <div>Cargando...</div>;
  }

  const { properties } = content;

  const eventsData: CarouselEventData= {
    title: properties.events.items[0].content.properties.titleEvent,
    description: properties.events.items[0].content.properties.descriptionEvents,
    date: properties.events.items[0].content.properties.dateEvent,
    location: properties.events.items[0].content.properties.locationEvents,
    image: properties.events.items[0].content.properties.imagesEvents?.[0]?.url || null,
    imageAlt: properties.events.items[0].content.properties.imagesEvents?.[0]?.name || "Event image",
  };

  // Adjust translateX value to make width dynamic
  const getTranslateValue = () => {
    if (windowWidth >= 1536) {
      return `${currentIndex * 30}%`; // 2xl value
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
    const totalItems = properties.events.items.length;
    const step = windowWidth >= 1280 ? 2 : 1;
    setCurrentIndex(prevIndex => 
      prevIndex + step >= totalItems ? 0 : prevIndex + step
    );
  };

  const handlePrev = () => {
    const totalItems = properties.events.items.length;
    const step = windowWidth >= 1280 ? 2 : 1;
    setCurrentIndex(prevIndex => 
      prevIndex - step < 0 ? totalItems - step : prevIndex - step
    );
  };

  return (
    <div className="
      flex 
      flex-col 
      items-center 
      w-full
      lg:pb-40 
      z-0
    ">
      {/* Hero Section with Title Overlay */}
      <div className="
        relative 
        w-full 
        lg:w-[60%]
        z-10
      ">
        <Image
          src="/dreamBig/background_title.png"
          alt="events & opportunities"
          width={946}
          height={410}
          className="w-full h-auto object-cover"
          priority
        />
        <h1 className="
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
        ">
          Events & opportunities
        </h1>
      </div>

      {/* Carousel Wrapper */}
      <div className="
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
      ">
        {/* Carousel Items */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${getTranslateValue()})` }}
        >
          {properties.events.items.map((event: any) => {
            const { titleEvent, descriptionEvents, dateEvent, locationEvents, imagesEvents, linkEvents } = 
              event.content.properties;
            
            return (
              <div
              onClick={() => linkEvents && window.open(linkEvents, '_blank')}
                key={event.content.id}
                className="
                  flex-shrink-0 
                  w-full 
                  px-4 
                  lg:w-[70%] 
                  lg:max-w-[650px]
                  xl:max-w-[480px] 
                  2xl:max-w-[600px]
                "
              >
                <div className="
                  bg-gray-300 
                  rounded-md 
                  overflow-hidden 
                  shadow-md 
                  transform 
                  transition-transform 
                  hover:scale-[1.02] 
                  md:p-5 
                  md:rounded-[25px]
                ">
                  <div className="p-4 md:p-0">
                    <h2 className="
                      font-pragmatica 
                      font-semibold 
                      md:text-2xl
                      lg:text-xl
                      text-sm 
                      uppercase 
                      text-left 
                      mb-2
                    ">
                      {titleEvent}
                    </h2>
                  </div>

                  <div className="
                    flex
                    xs:items-center
                    flex-col 
                    md:flex-row
                    items-start
                    mx-auto
                  ">
                    <div className="md:flex md:justify-center md:w-[45%] md:h-auto">
                      {imagesEvents && imagesEvents[0] ? (
                        <Image
                          src={`${nextPublicApiUrl}${imagesEvents[0].url}`}
                          alt={imagesEvents[0].name}
                          width={208}
                          height={208}
                          className="w-52 h-52 object-cover"
                          quality={80}
                          priority
                        />
                      ) : (
                        <div className="w-52 h-52 bg-gray-500" />
                      )}
                    </div>
                    <div className="flex flex-col p-4 md:p-0 md:w-[55%] flex-grow">
                      <div className="md:p-2 mb-4">
                        <p className="font-semibold text-xs sm:text-sm lg:text-xs uppercase text-left mb-5">
                          {descriptionEvents}
                        </p>
                        <p className="font-semibold text-xs sm:text-sm uppercase text-left">
                          fecha: {new Date(dateEvent).toLocaleDateString()}
                        </p>
                        <p className="font-semibold text-xs sm:text-sm uppercase text-left">
                          lugar: {locationEvents}
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <button className="
                          px-4 
                          py-2
                          md:w-56 
                          md:text-2xl
                          bg-ColorPrincipal 
                          text-white 
                          rounded-full
                          text-xs 
                          hover:bg-ColorPrincipaltransition 
                          font-pragmatica 
                          uppercase
                        ">
                          Register
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
            max-sm:left-[-14px] 
            max-sm:border-0 
            max-sm:shadow-none
            md:border-0 
            md:left-[-14px] 
            md:shadow-none
            xl:border-4 
            xl:left-0
            left-4 
            transform 
            -translate-y-1/2 
            p-2 
            rounded-full 
            shadow-md 
            hover:scale-105 
            bg-transparent 
            border-ColorPrincipal
          "
        >
          <FaChevronLeft className="text-ColorPrincipal" size={24} />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="
            absolute 
            top-1/2
            max-sm:right-[-14px] 
            max-sm:border-0 
            max-sm:shadow-none
            md:border-0 
            md:right-[-14px] 
            md:shadow-none
            xl:border-4 
            xl:right-0
            right-[0%] 
            transform 
            -translate-y-1/2 
            p-2 
            rounded-full 
            shadow-md 
            hover:scale-105 
            bg-transparent 
            border-ColorPrincipal
          "
        >
          <FaChevronRight className="text-ColorPrincipal" size={24} />
        </button>
      </div>
    </div>
  );
};

export default CarouselEvents;