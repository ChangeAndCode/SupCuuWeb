//app/home/component/Carousel.tsx
import { Suspense } from 'react';
import CarouselClient from './CarouselClient';
import { NewsSlide } from '@/types/home';
import Loading from 'components/Loading';

interface CarouselProps {
  slides: NewsSlide[];
 
}

const Carousel = ({ slides }: CarouselProps) => {
  if (!slides || slides.length === 0) {
    return null;
  }
  
  return (
    <Suspense fallback={<Loading />}>
      <CarouselClient slides={slides} />
    </Suspense>
  );
};

export default Carousel;
