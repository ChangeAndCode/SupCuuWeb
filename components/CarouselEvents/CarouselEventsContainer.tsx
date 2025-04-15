import { getUmbracoContent } from '@/lib/server/umbracoApi';
import CarouselEvents from './CarouselEvents';
import { getLocale } from '@/lib/Localization';

const CarouselEventsContainer = async () => {
  const locale = await getLocale() || "en-us";
  const eventsData = await getUmbracoContent("events", locale);
  return <CarouselEvents locale={locale} eventsData={eventsData} />;
};

export default CarouselEventsContainer;