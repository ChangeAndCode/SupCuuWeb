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
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">Nuevo Evento</h2>
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
