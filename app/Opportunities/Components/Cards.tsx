"use client";
import { useState } from "react";
import CardsData from "../data/CardsData";

const Cards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calcular índices de paginación
  const totalPages = Math.ceil(CardsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = CardsData.slice(startIndex, endIndex);

  // Función para cambiar de página y hacer scroll arriba
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="py-5 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6">
        {currentCards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full bg-white rounded-md overflow-hidden shadow-md transform transition-transform hover:scale-[1.02] md:p-5 md:rounded-[25px]"
          >
            <div className="p-4 md:p-0">
              <h2 className="font-pragmatica font-semibold md:text-2xl lg:text-xl text-sm uppercase text-left mb-2">
                {card.title}
              </h2>
            </div>

            <div className="flex xs:items-center flex-col md:flex-row items-start mx-auto">
              <div className="md:flex md:justify-center md:w-[45%] md:h-auto">
                <div
                  className="w-52 h-52 bg-gray-500"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>

              <div className="flex flex-col p-4 md:p-0 md:w-[55%] flex-grow">
                <div className="md:p-2 mb-4">
                  <p className="font-semibold text-xs sm:text-sm lg:text-xs uppercase text-left mb-5">
                    {card.description}
                  </p>
                  <p className="font-semibold text-xs sm:text-sm uppercase text-left">
                    Fecha: {card.date}
                  </p>
                  <p className="font-semibold text-xs sm:text-sm uppercase text-left">
                    Lugar: {card.location}
                  </p>
                </div>

                <div className="flex justify-center">
                <button className="px-4 py-2 md:w-56 md:text-2xl bg-ColorPrincipal text-white rounded-full text-xs hover:bg-ColorPrincipaltransition font-pragmatica uppercase">
                  Register
                </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de paginación */}
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
