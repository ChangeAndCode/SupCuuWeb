"use client";
import { useState, useMemo, useEffect } from "react"; 
import EventCard from "@components/CarouselEvents/EventCard";
import CardsData from "../data/CardsData";
import FilterBy from "./FilterBy";
import { EventsData,Event } from "types/Opportunities";

interface CardsProps {
  eventsData: EventsData;
}

const Cards = ({ eventsData }: CardsProps) => {
  const [isMounted, setIsMounted] = useState(false);  

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const itemsPerPage = 10;
  const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL;
 
  const events = useMemo(() => 
    eventsData?.properties?.events?.items || 
    CardsData.map(item => ({
      content: {
        id: item.title,
        properties: {
          titleEvent: item.title,
          descriptionEvents: item.description,
          dateEvent: item.date || '',
          locationEvents: item.location || '',
          imagesEvents: item.image
        }
      }
    }))
  , [eventsData]) as Event[];

  const filteredEvents = useMemo(() => {
    return events.filter((item: Event) => {
      const { titleEvent, descriptionEvents } = item.content.properties;
      const searchLower = searchTerm.toLowerCase();
      
      if (!searchTerm) return true;
      
      if (filterType === "title") {
        return titleEvent.toLowerCase().includes(searchLower);
      } else if (filterType === "description") {
        return descriptionEvents.toLowerCase().includes(searchLower);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="py-5 px-6">
      <FilterBy 
        onFilterChange={setSearchTerm}
        filterType={filterType}
        onFilterTypeChange={setFilterType}
      />

      {filteredEvents.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No se encontraron eventos que coincidan con tu búsqueda.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6">
            {currentEvents.map((item: Event) => {
              const { 
                titleEvent, 
                descriptionEvents, 
                dateEvent, 
                locationEvents, 
                imagesEvents, 
                linkEvents 
              } = item.content.properties;
              
              return (
                <EventCard
                  key={item.content.id}
                  title={titleEvent}
                  description={descriptionEvents}
                  date={dateEvent}
                  location={locationEvents}
                  image={imagesEvents}
                  nextPublicApiUrl={nextPublicApiUrl}
                  onClick={() => linkEvents && window.open(linkEvents, '_blank')}
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
                Anterior
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === index + 1
                      ? "bg-ColorPrincipal text-white font-pragmatica"
                      : "bg-gray-300 text-white font-pragmatica hover:bg-gray-400"
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
                Siguiente
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cards;