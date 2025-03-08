import { getUmbracoContent } from '@/lib/server/umbracoApi';
import Cards from './Cards';

const CardsContainer = async () => {
  const eventsData = await getUmbracoContent("events");
  
  return <Cards eventsData={eventsData} />;
};

export default CardsContainer;