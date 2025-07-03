import { getUmbracoContent } from "@/lib/server/umbracoApi";
import { getLocale } from "@/lib/Localization";
import { cardsContainerTranslations } from "@/lib/Localization/opportunities"; // Import translations for error messages and labels
import { adaptBackendEvents } from "@/lib/Opportunities/adapters";
import { matchesKeywords } from "@/lib/Opportunities/matchesKeywords";
import CardsClientWrapper from "./CardClientWrapper";

const CardsContainer = async ({
  // Determine locale first, handling potential errors to ensure it's defined
  defaultImage,
}: {
  defaultImage?: { name: string; url: string };
}) => {
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
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const backendResponse = await fetch(`${backendUrl}/api/custom-events`, {
      cache: "no-store",
    });
    const backendJson = await backendResponse.json();

    if (!backendJson?.events || !Array.isArray(backendJson.events)) {
      console.error(i18n.loadingErrorLog, backendJson.events);
      throw new Error("No se encontraron eventos válidos");
    }
    const activeEvents = backendJson.events.filter(
      (e) => !e.status || e.status === "active"
    );

    const adaptedEvents = adaptBackendEvents(activeEvents);
    const relevantEvents = adaptedEvents.filter((event) => {
      const props = event.content.properties;
      return (
        matchesKeywords(props.titleEvent) ||
        matchesKeywords(props.descriptionEvents) ||
        matchesKeywords(props.category)
      );
    });

    return (
      <CardsClientWrapper
        initialEvents={relevantEvents}
        locale={locale}
        defaultImage={defaultImage}
      />
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
