import { getUmbracoContent } from "@/lib/server/umbracoApi";
// import Cards from "./Cards";
import { getLocale } from "@/lib/Localization";
import { cardsContainerTranslations } from "@/lib/Localization/opportunities"; // Import translations for error messages and labels
import { adaptBackendEvents } from "@/lib/Opportunities/adapters";
import { matchesKeywords } from "@/lib/Opportunities/matchesKeywords";
import CardsClientWrapper from "./CardClientWrapper";

const CardsContainer = async () => {
  let locale: string;
  try {
    locale = await getLocale();
  } catch {
    locale = "en-us";
  }

  const i18n =
    cardsContainerTranslations[
      locale as keyof typeof cardsContainerTranslations
    ] || cardsContainerTranslations["en-us"];

  try {
    const backendResponse = await fetch(
      "http://localhost:5000/api/custom-events",
      {
        cache: "no-store",
      }
    );
    const backendJson = await backendResponse.json();

    if (!backendJson?.events || !Array.isArray(backendJson.events)) {
      throw new Error("No se encontraron eventos válidos");
    }

    const adaptedEvents = adaptBackendEvents(backendJson.events);
    const relevantEvents = adaptedEvents.filter((event) => {
      const props = event.content.properties;
      return (
        matchesKeywords(props.titleEvent) ||
        matchesKeywords(props.descriptionEvents) ||
        matchesKeywords(props.category)
      );
    });

    return (
      <CardsClientWrapper initialEvents={relevantEvents} locale={locale} />
    );
  } catch (error) {
    console.error("Error loading events:", error);

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
