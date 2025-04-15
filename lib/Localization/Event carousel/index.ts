// lib/Localization/Event carousel/index.ts

// Translations specifically for the Events Carousel component
export const carouselEventsTranslations = {
    "en-us": {
      loading: "Loading...",
      title: "Events & opportunities",
      prevSlide: "Previous slide",
      nextSlide: "Next slide",
      noEvents: "No events to display.",
    },
    "es-mx": {
      loading: "Cargando...",
      title: "Eventos y Oportunidades",
      prevSlide: "Diapositiva Anterior",
      nextSlide: "Siguiente Diapositiva",
      noEvents: "No hay eventos para mostrar.",
    },
    "es-es": {
      loading: "Cargando...",
      title: "Eventos y oportunidades",
      prevSlide: "Diapositiva anterior",
      nextSlide: "Siguiente diapositiva",
      noEvents: "No hay eventos para mostrar.",
    },
    // Add other locales as needed
  };
  
  // Optional: Helper type specific to these translations
  export type CarouselEventTranslations =
    typeof carouselEventsTranslations["en-us"];
  