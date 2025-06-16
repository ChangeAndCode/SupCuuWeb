import { Event } from "types/Opportunities";

export function adaptBackendEvents(events: any[]): Event[] {
  return events.map((e) => ({
    content: {
      id: e._id,
      properties: {
        titleEvent: e.name || "Sin título",
        descriptionEvents: e.description || "Sin descripción",
        dateEvent: e.start_date || "Fecha no disponible",
        closeEvent: e.end_date || "",
        category: e.category || "Sin categoría",
        locationEvents: e.location || "Ubicación no disponible",
        imagesEvents: e.url_image || null,
        linkEvents: e.url_site || "",
      },
    },
  }));
}
