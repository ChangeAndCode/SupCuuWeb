"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { UmbracoApi } from "@/lib/api";

interface NewsSlide {
  carouselTitle: string;
  carouselDescription: string;
  carouselImage: string;
  carouselImageName: string;
  isActive: true;
}

const Carrusel: React.FC = () => {
  const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [loading, setLoading] = useState(true);
  const [newsSlides, setNewsSlides] = useState<NewsSlide[]>([]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTranslateValue = () => {
    return `${currentIndex * 100}%`; // Ajuste para el desplazamiento
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsSlides.length - 1 : prevIndex - 1
    );
  };

  const showNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsSlides.length - 1 ? 0 : prevIndex + 1
    );
  }, [newsSlides.length]);

  useEffect(() => {
    const interval = setInterval(showNext, 5000);
    return () => clearInterval(interval);
  }, [showNext]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await UmbracoApi.getContent("landing-page");
        if (data && data.properties) {
          const slides = data.properties.newsCarousel?.items.map((item: any) => ({
            carouselTitle: item.content.properties.carouselTitle.markup,
            carouselDescription: item.content.properties.carouselDescription.markup,
            carouselImage: item.content.properties.carouselImage?.[0]?.url || "/prueba.webp",
            carouselImageName: item.content.properties.carouselImage?.[0]?.name || "untitled",
            isActive: item.content.properties.isActive,
          })) || [];

          setNewsSlides(slides);
        }
      } catch (error) {
        console.error("Error fetching content: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center py-[22rem]">
      <button
        className="absolute left-4 xl:left-[6rem] top-1/2 transform -translate-y-1/2 z-20 bg-transparent border-4 border-ColorPrincipal text-ColorPrincipal p-1 rounded-full shadow-md hover:bg-ColorPrincipal hover:text-white"
        onClick={showPrevious}
        aria-label="Previous slide"
      >
        <FaChevronLeft size={28} />
      </button>

      <div className="relative w-10/12 bg-white rounded-3xl py-6 px-8 shadow-lg flex flex-col xl:flex-row items-center mx-8 xl:mx-0 overflow-hidden">
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${getTranslateValue()})` }}
          >
            {newsSlides.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex flex-col xl:flex-row items-center justify-between"
              >
                <div className="xl:pr-8 w-full lg:text-left mb-5 xl:mb-0 2xl:px-[2rem]">
                  <div
                    className="text-lg main-Tipography font-pragmatica uppercase lg:text-[2.2rem] 2xl:text-[2.9rem] xl:leading-[3rem] lg:leading-[3rem] mb-2 xl:mb-6"
                    dangerouslySetInnerHTML={{
                      __html: card.carouselTitle,
                    }}
                  />
                  <hr className="my-2 lg:my-6 border-t-4 border-black" />
                  <p
                    className="text-sm xl:text-[1.8rem] font-poppins font-semibold lg:text-[2rem] xl:leading-[2rem] lg:leading-[3rem] uppercase text-black mt-2 lg:mt-6"
                    dangerouslySetInnerHTML={{
                      __html: card.carouselDescription,
                    }}
                  />
                </div>
                <div className="w-4/5 flex justify-center items-center">
                  <Image
                    src={`${nextPublicApiUrl}${card.carouselImage}`}
                    alt={card.carouselImageName}
                    width={490}
                    height={390}
                    style={{ height: "auto" }}
                    quality={80}
                    priority
                    loading="eager"
                    placeholder="blur"
                    blurDataURL={`${nextPublicApiUrl}${card.carouselImage}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="absolute right-4 xl:right-[6rem] top-1/2 transform -translate-y-1/2 z-20 bg-transparent border-4 border-ColorPrincipal text-ColorPrincipal p-1 rounded-full shadow-md hover:bg-ColorPrincipal hover:text-white"
        onClick={showNext}
        aria-label="Next slide"
      >
        <FaChevronRight size={28} />
      </button>
    </div>
  );
};

export default Carrusel;
