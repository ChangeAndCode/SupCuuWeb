"use client";

import { useEffect, useState } from "react";
import ExpandableText from "./Components/ExpendableText";

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

    // 🔄 Vuelve a obtener los eventos pendientes desde el backend
    const updated = await fetch(
      "http://localhost:5000/api/custom-events/events/pending"
    );
    const data = await updated.json();
    setEvents(data.events); // <- actualiza solo con los inactivos
  };

  return (
    <div className="p-6">
      <h1 className="main-Tipography text-2xl font-bold mb-4">
        Eventos por Validar
      </h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="main-Tipography bg-gray-200">
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
            <tr key={event._id} className="font-pragmatica">
              <td className=" border p-2">{event.name}</td>
              <td className="border p-2">
                <ExpandableText text={event.description} />
              </td>
              <td className="border p-2">
                <div className="md:w-[100px]">
                  <p className="font-bold">Inicio:</p>
                  <p>{event.start_date}</p>
                </div>
                <div className="mt-2">
                  <p className="font-bold">Fin:</p>
                  <p>{event.end_date || "N/A"}</p>
                </div>
              </td>
              <td className="border p-2">
                <div className="flex justify-center items-center">
                  {event.category || "N/A"}
                </div>
              </td>
              <td className="border p-2">
                <div className="flex justify-center items-center">
                  {event.url_image ? (
                    <img
                      src={
                        event.url_image?.startsWith("http")
                          ? event.url_image
                          : `http://localhost:5000${event.url_image}`
                      }
                      alt="img"
                      className="w-20 h-auto rounded"
                    />
                  ) : (
                    "N/A"
                  )}
                </div>
              </td>
              <td className="border p-2">
                <div className="flex justify-center items-center">
                  <button
                    className={`font-bold px-4 py-1 rounded text-white transition-all duration-300 transform hover:scale-105 hover:brightness-110 ${
                      event.status === "active" ? "bg-red-500" : "bg-green-600"
                    }`}
                    onClick={() => toggleStatus(event._id, event.status)}
                  >
                    {event.status === "active" ? "Desactivar" : "Activar"}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}