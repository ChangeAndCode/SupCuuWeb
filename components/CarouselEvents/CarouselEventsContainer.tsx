import { getUmbracoContent } from '@/lib/server/umbracoApi';
import CarouselEvents from './CarouselEvents';

const CarouselEventsContainer = async () => {
  const eventsData = await getUmbracoContent("events");
  
  return <CarouselEvents eventsData={eventsData} />;
};

export default CarouselEventsContainer;