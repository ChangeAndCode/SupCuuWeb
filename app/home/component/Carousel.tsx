// src/app/component/Carousel.tsx
import { Suspense } from 'react';
import CarouselClient from './CarouselClient';
import { NewsSlide } from '@/types/home';

interface CarouselProps {
  slides: NewsSlide[];
  nextPublicApiUrl: string;
}

const Carousel = ({ slides, nextPublicApiUrl }: CarouselProps) => {
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
};

export default Carousel;
