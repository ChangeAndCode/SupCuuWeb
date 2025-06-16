import Image from "next/image";
import { CarouselEventData } from "@/types/CarouselEvent";

const EventCard = ({
  title,
  description,
  date,
  closeDate,
  category,
  location,
  image,
  nextPublicApiUrl,
  onClick,
}: CarouselEventData) => {
  return (
    <div
      onClick={onClick}
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
        md:p-5 
        md:rounded-[25px]
        h-full
        flex
        flex-col
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
          mb-2
          line-clamp-2
        "
        >
          {title}
        </h2>
      </div>

      <div className="flex xs:items-center flex-col md:flex-row items-start mx-auto flex-grow">
        <div className="md:flex md:justify-center md:w-[45%] h-[208px] relative">
          {Array.isArray(image) && image[0] ? (
            <Image
              src={`${nextPublicApiUrl}${image[0].url}`}
              alt={image[0].name}
              width={208}
              height={208}
              className="w-52 h-52 object-cover"
              quality={80}
              priority
            />
          ) : typeof image === "string" ? (
            <div
              className="w-52 h-52 bg-gray-500"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ) : (
            <div className="w-52 h-52 bg-gray-500" />
          )}
        </div>

        <div className="flex flex-col p-4 md:p-0 md:w-[55%] flex-grow justify-between">
          <div className="md:p-2 mb-4">
            <p
              className="
              font-semibold 
              text-xs 
              sm:text-sm 
              lg:text-xs 
              uppercase 
              text-left 
              mb-5
              line-clamp-6
            "
            >
              {description}
            </p>
            <p className="font-semibold text-xs sm:text-sm uppercase text-left">
              Fecha de inicio: {date}
            </p>
            {closeDate && (
              <p className="font-semibold text-xs sm:text-sm uppercase text-left">
                Fecha de cierre: {closeDate}
              </p>
            )}
            <p className="font-semibold text-xs sm:text-sm uppercase text-left">
              Categoría: {category}
            </p>
            <p className="font-semibold text-xs sm:text-sm uppercase text-left">
              Lugar: {location}
            </p>
          </div>

          <div className="flex justify-center mt-auto">
            <button
              className="
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
            "
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
