// lib/Localization/opportunities/index.ts

export const filterByTranslations = {
  "en-us": {
    filterByButton: "FILTER BY",
    searchPlaceholder: "Search...",
    titleOption: "Title",
    descriptionOption: "Description",
    categoryOption: "Category",
    allOption: "All",
  },
  "es-mx": {
    filterByButton: "FILTRAR POR",
    searchPlaceholder: "Buscar...",
    titleOption: "Título",
    descriptionOption: "Descripción",
    categoryOption: "Categoría",
    allOption: "Todos",
  },
  // Add more locales as needed
};
  
  export const cardsTranslations = {
    "en-us": {
      noEventsFound: "No events found matching your search.",
      previousButton: "Previous",
      nextButton: "Next",
    },
    "es-mx": {
      noEventsFound: "No se encontraron eventos que coincidan con tu búsqueda.",
      previousButton: "Anterior",
      nextButton: "Siguiente",
    },
    // Add more locales as needed
  };
  
  export const cardsContainerTranslations = {
    "en-us": {
      errorTitle: "Oops! Something went wrong",
      errorMessage: "Sorry, we couldn't load the events at this moment.",
      errorSuggestion: "Please try again later.",
      loadingErrorLog: "Failed to load event data",
    },
    "es-mx": {
      errorTitle: "¡Ups! Algo salió mal",
      errorMessage: "Lo sentimos, no pudimos cargar los eventos en este momento.",
      errorSuggestion: "Por favor, intenta nuevamente más tarde.",
      loadingErrorLog: "No se pudieron cargar los datos de eventos",
    },
    // Add more locales as needed
  };
  
  // You could also add translations for WantToStayUpdated here if needed
  // export const wantToStayUpdatedTranslations = { ... };
  
  // Helper type for translations (optional but good practice)
  export type Translations = typeof filterByTranslations["en-us"]; // Use one locale as the base structure
  