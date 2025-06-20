"use client";
import { useState } from "react";

export default function Form({
  onEventCreated,
}: {
  onEventCreated: (event: any) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    start_date: "",
    end_date: "",
    location: "",
    url_site: "",
    url_image: "",
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/custom-events/create", {
      method: "POST",
      body: JSON.stringify({ ...form, status: "inactive" }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (res.ok) {
      onEventCreated(data);
      setForm({
        name: "",
        description: "",
        category: "",
        start_date: "",
        end_date: "",
        location: "",
        url_site: "",
        url_image: "",
      });
      setSuccessMessage(true); // <- mostrar mensaje
      setTimeout(() => {
        setSuccessMessage(false);
        onEventCreated(data); // ¡esto ya lo tienes!
      }, 5000);
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow space-y-4"
    >
      <div>
        <label
          htmlFor="start_date"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Nombre del evento
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Event Name"
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Descripción del evento
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Categoría del evento
        </label>
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label
          htmlFor="start_date"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Fecha de inicio
        </label>
        <input
          id="start_date"
          type="date"
          name="start_date"
          value={form.start_date}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label
          htmlFor="end_date"
          className="block text-sm font-medium text-gray-700 mb-1 mt-4"
        >
          Fecha de cierre
        </label>
        <input
          id="end_date"
          type="date"
          name="end_date"
          value={form.end_date}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700 mb-1 mt-4"
        >
          Ubicación del evento
        </label>
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label
          htmlFor="url_site"
          className="block text-sm font-medium text-gray-700 mb-1 mt-4"
        >
          Sitio web del evento
        </label>
        <input
          name="url_site"
          value={form.url_site}
          onChange={handleChange}
          placeholder="Event Website"
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label
          htmlFor="url_image"
          className="block text-sm font-medium text-gray-700 mb-1 mt-4"
        >
          URL de la imagen del evento
        </label>
        <input
          name="url_image"
          value={form.url_image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2 w-full"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded shadow-sm font-semibold"
      >
        Guardar evento
      </button>
      {successMessage && (
        <p className="text-yellow-600 mt-4 text-sm">
          Este evento será visible tras ser aprobado por un administrador.
        </p>
      )}
    </form>
  );
}
