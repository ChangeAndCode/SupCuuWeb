import { UmbracoApi } from "@/lib/api";
import type { CarouselResponse, NewsSlide } from "@/lib/carousel/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const defaultSlides: NewsSlide[] = [
  {
    carouselTitle: "Título por defecto",
    carouselDescription: "Descripción por defecto",
    carouselImage: "/prueba.webp",
    carouselImageName: "imagen por defecto",
    isActive: true
  }
];

export const getCarouselContent = async (): Promise<NewsSlide[]> => {
  try {
    const data = await UmbracoApi.getContent("landing-page");
    if (data?.properties?.newsCarousel?.items) {
      const slides = data.properties.newsCarousel.items
        .map((item: any) => ({
          carouselTitle: item.content.properties.carouselTitle?.markup || "",
          carouselDescription: item.content.properties.carouselDescription?.markup || "",
          carouselImage: item.content.properties.carouselImage?.[0]?.url || "/prueba.webp",
          carouselImageName: item.content.properties.carouselImage?.[0]?.name || "untitled",
          isActive: item.content.properties.isActive || false,
        }))
        .filter((slide: NewsSlide) => slide.isActive);

      return slides.length > 0 ? slides : defaultSlides;
    }
    return defaultSlides;
  } catch (error) {
    console.error("Error fetching carousel content:", error);
    return defaultSlides;
  }
};

export async function fetchCarouselFromUmbraco(): Promise<NewsSlide[]> {
  try {
    const response = await fetch(
      `${API_URL}/umbraco/api/carousel/GetAllCarousel`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: CarouselResponse = await response.json();
    return data.value || [];
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    throw error;
  }
} 