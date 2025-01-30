import CardsData from "../data/CardsData";

const Cards = () => {
  return (
    <div
      className="
    py-5 
    px-6 
    grid 
    grid-cols-1
    lg:grid-cols-1
    xl:grid-cols-2
    gap-6"
    >
      {CardsData.map((card, index) => (
        <div
          key={index}
          className="
          flex-shrink-0 
          w-full 
          bg-white 
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
                  Registro
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
