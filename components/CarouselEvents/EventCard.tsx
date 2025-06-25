"use client"; // Necesario para manejar errores de carga de imagen dinámicamente

import Image from "next/image";
import { useEffect, useState } from "react";
import { CarouselEventData } from "@/types/CarouselEvent";

interface EventCardProps extends CarouselEventData {
  defaultImage?: {
    name: string;
    url: string;
  };
}

const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
const EventCard = ({
  title,
  description,
  date,
  closeDate,
  category,
  location,
  image,
  nextPublicApiUrl,
  defaultImage,
  onClick,
}: EventCardProps) => {
  const [imageError, setImageError] = useState(false);

  const imageUrl = (() => {
    if (Array.isArray(image) && image[0])
      return `${nextPublicApiUrl}${image[0].url}`;
    if (typeof image === "string") {
      return image.startsWith("http") ? image : `${backend_url}${image}`;
    }
    return null;
  })();

  useEffect(() => {
    if (!imageUrl) return;

    const test = new window.Image();
    test.src = imageUrl;
    test.onload = () => setImageError(false);
    test.onerror = () => setImageError(true);
  }, [imageUrl]);

  const finalFallbackUrl = defaultImage?.url;

  return (
    <div
      onClick={onClick}
      className="flex-shrink-0 w-full bg-white rounded-md overflow-hidden shadow-md transform transition-transform hover:scale-[1.02] md:p-5 md:rounded-[25px] h-full flex flex-col"
    >
      <div className="p-4 md:p-0">
        <h2 className="font-pragmatica font-semibold md:text-2xl lg:text-xl text-sm uppercase text-left mb-2 line-clamp-2">
          {title}
        </h2>
      </div>

      <div className="flex xs:items-center flex-col md:flex-row items-start mx-auto flex-grow">
        <div className="md:flex md:justify-center md:w-[45%] h-[208px] relative">
          {!imageUrl || imageError ? (
            finalFallbackUrl ? (
              <div
                className="w-52 h-52  rounded object-cover"
                style={{
                  backgroundImage: `url(${finalFallbackUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ) : (
              <div className="w-52 h-52 " />
            )
          ) : (
            <Image
              src={imageUrl}
              alt={title}
              width={208}
              height={208}
              className="w-52 h-52 object-cover"
              onError={() => setImageError(true)}
              priority
            />
          )}
        </div>

        <div className="flex flex-col p-4 md:p-0 md:w-[55%] flex-grow justify-between">
          <div className="md:p-2 mb-4">
            <p className="font-semibold text-xs sm:text-sm lg:text-xs uppercase text-left mb-5 line-clamp-6">
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
            <button className="px-4 py-2 md:w-56 md:text-2xl bg-ColorPrincipal text-white rounded-full text-xs hover:bg-ColorPrincipaltransition font-pragmatica uppercase">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
