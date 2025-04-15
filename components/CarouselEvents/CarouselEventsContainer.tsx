import { getUmbracoContent } from '@/lib/server/umbracoApi';
import CarouselEvents from './CarouselEvents';
import { getLocale } from '@/lib/Localization';

const CarouselEventsContainer = async () => {
  const eventsData = await getUmbracoContent("events");
  const locale = await getLocale() || "en-us";
  return <CarouselEvents locale={locale} eventsData={eventsData} />;
};

export default CarouselEventsContainer;