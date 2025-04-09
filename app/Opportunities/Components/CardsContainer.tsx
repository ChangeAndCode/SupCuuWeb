import { getUmbracoContent } from "@/lib/server/umbracoApi";
import Cards from "./Cards";
import { getLocale } from "@/lib/Localization";
const CardsContainer = async () => {
  try {
    const locale = await getLocale();
    const eventsData = await getUmbracoContent("events", locale);

    // Check if the data is valid
    if (!eventsData?.properties?.events?.items) {
      throw new Error("No se pudieron cargar los datos de eventos");
    }

    return <Cards eventsData={eventsData} locale={locale} />;
  } catch (error) {
    // User-friendly error message
    return (
      <div className="py-10 px-6">
        <div className="bg-white rounded-lg p-6 text-center shadow-md">
          <h3 className="text-xl font-pragmatica text-ColorPrincipal mb-2">
            ¡Ups! Algo salió mal
          </h3>
          <p className="text-gray-600 mb-4">
            Lo sentimos, no pudimos cargar los eventos en este momento.
          </p>
          <p className="text-gray-500 text-sm">
            Por favor, intenta nuevamente más tarde.
          </p>
        </div>
      </div>
    );
  }
};

export default CardsContainer;
