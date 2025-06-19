"use client";

import { useEffect, useState } from "react";

interface Event {
  _id: string;
  name: string;
  description: string;
  category?: string;
  start_date: string;
  end_date?: string;
  location?: string;
  url_site?: string;
  url_image?: string;
  status: "active" | "inactive";
}

export default function ReviewEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/custom-events/events/pending")
      .then((res) => res.json())
      .then((data) => setEvents(data.events || []));
  }, []);

  const toggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";

    await fetch(`http://localhost:5000/api/custom-events/events/status/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });

    setEvents((prev) =>
      prev.map((e) =>
        e._id === id ? { ...e, status: newStatus as "active" | "inactive" } : e
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Eventos por Validar</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Título</th>
            <th className="border p-2">Descripción</th>
            <th className="border p-2">Fechas</th>
            <th className="border p-2">Categoría</th>
            <th className="border p-2">Imagen</th>
            <th className="border p-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td className="border p-2">{event.name}</td>
              <td className="border p-2">{event.description}</td>
              <td className="border p-2">
                {event.start_date} - {event.end_date || "N/A"}
              </td>
              <td className="border p-2">{event.category || "N/A"}</td>
              <td className="border p-2">
                {event.url_image ? (
                  <img
                    src={event.url_image}
                    alt="img"
                    className="w-20 h-auto"
                  />
                ) : (
                  "N/A"
                )}
              </td>
              <td className="border p-2">
                <button
                  className={`px-4 py-1 rounded text-white ${
                    event.status === "active" ? "bg-red-500" : "bg-green-600"
                  }`}
                  onClick={() => toggleStatus(event._id, event.status)}
                >
                  {event.status === "active" ? "Desactivar" : "Activar"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
