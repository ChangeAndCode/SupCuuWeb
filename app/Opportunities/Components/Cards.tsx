"use client";
import { useState } from "react";
import EventCard from "@components/CarouselEvents/EventCard";
import CardsData from "../data/CardsData";

interface CardsProps {
  eventsData: any;
}

const Cards = ({ eventsData }: CardsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL;
  const events = eventsData?.properties?.events?.items || CardsData || [];
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEvents = events.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="py-5 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6">
        {currentEvents.map((item: any) => {
          const { titleEvent, descriptionEvents, dateEvent, locationEvents, imagesEvents, linkEvents } = 
            item.content.properties;
          
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

      {/* pagination Controls */}
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
    </div>
  );
};

export default Cards;
