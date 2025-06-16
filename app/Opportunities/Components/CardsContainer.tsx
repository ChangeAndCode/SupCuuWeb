import { getUmbracoContent } from "@/lib/server/umbracoApi";
import Cards from "./Cards";
import { getLocale } from "@/lib/Localization";
import { cardsContainerTranslations } from "@/lib/Localization/opportunities"; // Import translations for error messages and labels
import { adaptBackendEvents } from "@/lib/Opportunities/adapters";

const CardsContainer = async () => {
  // Determine locale first, handling potential errors to ensure it's defined
  let locale: string;
  try {
    locale = await getLocale();
  } catch (localeError) {
    console.error("Failed to get locale, defaulting to en-us:", localeError);
    locale = "en-us"; // Default locale if fetching fails
  }

  const i18n =
    cardsContainerTranslations[
      locale as keyof typeof cardsContainerTranslations
    ] || cardsContainerTranslations["en-us"];

  try {
    const backendResponse = await fetch("http://localhost:5000/api/extract");
    const backendJson = await backendResponse.json();

    // Asegúrate de que .events exista y sea un arreglo
    if (!backendJson?.events || !Array.isArray(backendJson.events)) {
      console.error(
        "No se encontraron eventos válidos desde el backend:",
        backendJson
      );
      throw new Error("Error al cargar eventos desde el backend");
    }

    const adaptedEvents = adaptBackendEvents(backendJson.events);

    const eventsData = {
      properties: {
        events: {
          items: adaptedEvents,
        },
      },
    };

    if (!eventsData?.properties?.events?.items) {
      console.error(i18n.loadingErrorLog, eventsData);
      throw new Error(i18n.loadingErrorLog);
    }

    return <Cards eventsData={eventsData} locale={locale} />;
  } catch (error) {
    console.error("Error loading events data:", error);

    return (
      <div className="py-10 px-6">
        <div className="bg-white rounded-lg p-6 text-center shadow-md">
          <h3 className="text-xl font-pragmatica text-ColorPrincipal mb-2">
            {i18n.errorTitle}
          </h3>
          <p className="text-gray-600 mb-4">{i18n.errorMessage}</p>
          <p className="text-gray-500 text-sm">{i18n.errorSuggestion}</p>
        </div>
      </div>
    );
  }
};

export default CardsContainer;
