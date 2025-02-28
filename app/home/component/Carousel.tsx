import { Suspense } from "react";
import { getCarouselContent } from "@/lib/carousel/index";
import CarouselClient from "./CarouselClient";

const Carousel = async () => {
  const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  try {
    const slides = await getCarouselContent();
    
    if (!slides || slides.length === 0) {
      return null;
    }

    // We ensure that the data is correctly serialized.
    const serializedSlides = JSON.parse(JSON.stringify(slides));

    return (
      <Suspense fallback={null}>
        <CarouselClient 
          slides={serializedSlides} 
          nextPublicApiUrl={nextPublicApiUrl || ''} 
        />
      </Suspense>
    );
  } catch (error) {
    console.error("Error fetching slides:", error);
    return null;
  }
};

export default Carousel;
