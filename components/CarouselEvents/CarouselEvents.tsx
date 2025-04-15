"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import EventCard from "./EventCard";
import CarouselEventsData from "./data/CarouselEventsData";
import { carouselEventsTranslations } from "@/lib/Localization/Event carousel"; // <--- UPDATED PATH


interface CarouselEventsProps {
  eventsData: any;
  locale: string;
}

const CarouselEvents = ({ eventsData, locale }: CarouselEventsProps) => {
  // --- Select Translations (using the pattern from FilterBy) ---
  const t =
    carouselEventsTranslations[
      locale as keyof typeof carouselEventsTranslations // Type assertion might be needed if using JS
    ] || carouselEventsTranslations["en-us"];
  // --- End Select Translations ---

  // ... (rest of the component logic remains the same) ...

  const data = eventsData || CarouselEventsData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data) {
    return <div>{t.loading}</div>;
  }

  const properties = data?.properties;

  if (!properties?.events?.items || properties.events.items.length === 0) {
    console.warn("No event items found in data:", data);
    return <div className="text-center py-10">{t.noEvents}</div>;
  }

  const eventItems = properties.events.items;
  const totalItems = eventItems.length;

  const getTranslateValue = () => {
    const visibleItems = windowWidth >= 1024 ? 2 : 1;
    const slidePercentage = visibleItems > 0 ? 100 / visibleItems : 0;
    const maxIndex = Math.max(0, totalItems - visibleItems);
    const safeIndex = Math.min(currentIndex, maxIndex);
    return `${safeIndex * slidePercentage}%`;
  };

  const handleNext = () => {
    const step = windowWidth >= 1024 ? 2 : 1;
    const visibleItems = windowWidth >= 1024 ? 2 : 1;
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + step;
      return nextIndex >= totalItems - visibleItems + 1 ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    const step = windowWidth >= 1024 ? 2 : 1;
    const visibleItems = windowWidth >= 1024 ? 2 : 1;
    const lastPossibleIndex = Math.max(0, totalItems - visibleItems);
    setCurrentIndex((prevIndex) => {
      const prevLogicalIndex = prevIndex - step;
      return prevLogicalIndex < 0 ? lastPossibleIndex : prevLogicalIndex;
    });
  };

  return (
    <div
      className="
      flex
      flex-col
      items-center
      w-full
      lg:pb-40
      z-0
    "
    >
      {/* Hero Section with Title Overlay */}
      <div
        className="
        relative
        w-full
        lg:w-[60%]
        z-10
      "
      >
        <Image
          src="/dreamBig/background_title.png"
          alt={t.title}
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
          {t.title}
        </h1>
      </div>

      {/* Carousel Wrapper */}
      <div
        className="
        relative
        w-full
        lg:w-[90%]
        mt-6
        md:mt-8
        overflow-hidden
        xs:bottom-14
        md:bottom-[88px]
        z-0
      "
      >
        {/* Carousel Items */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${getTranslateValue()})` }}
        >
          {eventItems.map((event: any) => {
            const contentProps = event?.content?.properties;
            if (!contentProps) {
              console.warn("Skipping event due to missing data:", event);
              return null;
            }
            const {
              titleEvent,
              descriptionEvents,
              dateEvent,
              locationEvents,
              imagesEvents,
              linkEvents,
            } = contentProps;

            const imageUrl =
              imagesEvents && imagesEvents.length > 0
                ? imagesEvents[0]?.url
                : null;

            return (
              <div
                key={event.content.id}
                className="
                flex-shrink-0
                w-full
                px-4
                lg:w-1/2
                h-auto
                min-h-[350px]
              "
              >
                <EventCard
                  title={titleEvent || "No Title"}
                  description={descriptionEvents || ""}
                  date={dateEvent}
                  location={locationEvents || "No Location"}
                  image={imageUrl}
                  nextPublicApiUrl={nextPublicApiUrl}
                  onClick={() =>
                    linkEvents?.url && window.open(linkEvents.url, "_blank")
                  }
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        {totalItems > (windowWidth >= 1024 ? 2 : 1) && (
          <>
            <button
              onClick={handlePrev}
              aria-label={t.prevSlide}
              className="
                absolute
                top-1/2
                max-sm:left-[-14px] max-sm:border-0 max-sm:shadow-none
                md:border-0 md:left-[-14px] md:shadow-none
                xl:border-4 xl:left-0
                left-4
                transform -translate-y-1/2
                p-2 rounded-full shadow-md hover:scale-105
                bg-transparent border-ColorPrincipal
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              <FaChevronLeft className="text-ColorPrincipal" size={24} />
            </button>
            <button
              onClick={handleNext}
              aria-label={t.nextSlide}
              className="
                absolute
                top-1/2
                max-sm:right-[-14px] max-sm:border-0 max-sm:shadow-none
                md:border-0 md:right-[-14px] md:shadow-none
                xl:border-4 xl:right-0
                right-4
                transform -translate-y-1/2
                p-2 rounded-full shadow-md hover:scale-105
                bg-transparent border-ColorPrincipal
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              <FaChevronRight className="text-ColorPrincipal" size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CarouselEvents;
