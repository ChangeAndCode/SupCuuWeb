"use client";
import { useState } from "react";
import Form from "./Form";
import Cards from "./Cards";

export default function CardsClientWrapper({ initialEvents, locale }: any) {
  const [events, setEvents] = useState(initialEvents);
  const [showForm, setShowForm] = useState(false);

  const handleNewEvent = (newEvent: any) => {
    setEvents([newEvent, ...events]);
    setShowForm(false);
  };

  return (
    <div className="space-y-6 relative">
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Nuevo Evento</h2>
              <button
                onClick={() => setShowForm(false)}
                title="Cerrar formulario"
                aria-label="Cerrar formulario"
                className="text-gray-400 hover:text-red-500 transition-all duration-200 text-4xl font-bold"
              >
                ×
              </button>
            </div>

            <Form onEventCreated={handleNewEvent} />
          </div>
        </div>
      )}

      <Cards
        eventsData={{ properties: { events: { items: events } } }}
        locale={locale}
        onOpenForm={() => setShowForm(true)}
      />
    </div>
  );
}
