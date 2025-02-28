import type { CarouselResponse, NewsSlide } from "@/lib/carousel/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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