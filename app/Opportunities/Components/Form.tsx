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
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Event Name"
        className="border p-2 w-full"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 w-full"
      />

      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        className="border p-2 w-full"
      />

      <input
        title="start_date"
        type="date"
        name="start_date"
        value={form.start_date}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        title="end_date"
        type="date"
        name="end_date"
        value={form.end_date}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location"
        className="border p-2 w-full"
      />

      <input
        name="url_site"
        value={form.url_site}
        onChange={handleChange}
        placeholder="Event Website"
        className="border p-2 w-full"
      />

      <input
        name="url_image"
        value={form.url_image}
        onChange={handleChange}
        placeholder="Image URL"
        className="border p-2 w-full"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Guardar
      </button>
      {successMessage && (
        <p className="text-yellow-600 mt-4 text-sm">
          Este evento será visible tras ser aprobado por un administrador.
        </p>
      )}
    </form>
  );
}
