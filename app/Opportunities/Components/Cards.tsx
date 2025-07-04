"use client";
import { useState, useMemo, useEffect } from "react";
import EventCard from "@components/CarouselEvents/EventCard";
import FilterBy from "./FilterBy";
import { EventsData, Event } from "types/Opportunities";
import { cardsTranslations } from "@/lib/Localization/opportunities"; // Import translations for error messages and labels

interface CardsProps {
  eventsData: EventsData;
  locale: string;
  onOpenForm: () => void;
  defaultImage?: {
    name: string;
    url: string;
  };
}

const Cards = ({
  eventsData,
  locale,
  onOpenForm,
  defaultImage,
}: CardsProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const itemsPerPage = 10;
  const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Select the correct translation based on locale, defaulting to en-us
  // Use const for i18n as it's not reassigned
  const i18n =
    cardsTranslations[locale as keyof typeof cardsTranslations] ||
    cardsTranslations["en-us"];

  const events = useMemo(() => {
    const backendEvents = eventsData?.properties?.events?.items || [];

    const validEvents = backendEvents.filter(
      (e) => e?.content?.properties?.dateEvent
    );

    return validEvents.sort((a, b) => {
      const dateA = new Date(a.content.properties.dateEvent);
      const dateB = new Date(b.content.properties.dateEvent);

      if (isNaN(dateA.getTime())) return 1;
      if (isNaN(dateB.getTime())) return -1;

      return dateA.getTime() - dateB.getTime();
    });
  }, [eventsData]) as Event[];

  const filteredEvents = useMemo(() => {
    return events.filter((item: Event) => {
      if (!item?.content?.properties) return false;

      const {
        titleEvent = "",
        descriptionEvents = "",
        category = "",
      } = item.content.properties;
      const searchLower = searchTerm.toLowerCase();

      if (!searchTerm) return true;

      if (filterType === "title") {
        return titleEvent.toLowerCase().includes(searchLower);
      } else if (filterType === "description") {
        return descriptionEvents.toLowerCase().includes(searchLower);
      } else if (filterType === "category") {
        return category?.toLowerCase().includes(searchLower);
      }
      return (
        titleEvent.toLowerCase().includes(searchLower) ||
        descriptionEvents.toLowerCase().includes(searchLower)
      );
    });
  }, [events, searchTerm, filterType]);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="py-2 px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5 gap-4">
        <div className="w-full sm:flex-grow">
          <FilterBy
            onFilterChange={setSearchTerm}
            filterType={filterType}
            onFilterTypeChange={setFilterType}
            locale={locale}
          />
        </div>
        <button
          onClick={onOpenForm}
          className="text-sm md:text-base lg:text-lg
            px-3 py-2
            font-pragmatica
            bg-green-600 hover:bg-green-700 transition-colors
            text-white font-semibold
            rounded-md
            w-full sm:w-auto
            h-[42px] flex items-center justify-center
            whitespace-nowrap"
        >
          New Event
        </button>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">{i18n.noEventsFound}</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6">
            {currentEvents.map((item: Event) => {
              const {
                titleEvent = "No Title",
                descriptionEvents = "No Description",
                dateEvent = "",
                closeEvent = "",
                category = "",
                locationEvents = "",
                imagesEvents = null,
                linkEvents = "",
              } = item.content.properties || {};

              return (
                <EventCard
                  key={item.content.id}
                  title={titleEvent}
                  description={descriptionEvents}
                  date={dateEvent}
                  closeDate={closeEvent}
                  category={category}
                  location={locationEvents}
                  image={imagesEvents}
                  nextPublicApiUrl={nextPublicApiUrl}
                  defaultImage={defaultImage}
                  onClick={() =>
                    linkEvents && window.open(linkEvents, "_blank")
                  }
                />
              );
            })}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 bg-gray-300 text-black font-pragmatica rounded ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-ColorPrincipal hover:text-white"
                }`}
              >
                {i18n.previousButton}
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === index + 1
                      ? "bg-ColorPrincipal text-white font-pragmatica"
                      : "bg-gray-300 text-black font-pragmatica hover:bg-gray-400"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 bg-gray-300 text-black font-pragmatica rounded ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-ColorPrincipal hover:text-white"
                }`}
              >
                {i18n.nextButton}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cards;
