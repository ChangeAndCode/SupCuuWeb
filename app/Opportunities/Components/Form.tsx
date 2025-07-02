"use client";
import { useState } from "react";

const keywordList =
  process.env.NEXT_PUBLIC_KEYWORDS_EVENTS?.split(",").sort((a, b) =>
    a.localeCompare(b)
  ) || [];

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
    file: null as File | null,
  });
  const [formError, setFormError] = useState("");

  const [successMessage, setSuccessMessage] = useState(false);

  const isValidUrl = (str: string) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name.trim() ||
      !form.description.trim() ||
      !form.category.trim() ||
      !form.start_date ||
      !form.location.trim() ||
      (!form.file && (!form.url_image.trim() || !isValidUrl(form.url_image)))
    ) {
      setFormError("Por favor completa todos los campos obligatorios.");
      return;
    }
    setFormError(""); // Reset error message

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "file" && value) {
        formData.append("image", value);
      } else if (key !== "file") {
        formData.append(key, value as string);
      }
    });

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      const res = await fetch(`${backendUrl}/api/custom-events/create`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        console.log("Evento guardado correctamente");
        onEventCreated(data);
        setSuccessMessage(true);

        setTimeout(() => {
          setSuccessMessage(false);
        }, 5000);

        setForm({
          name: "",
          description: "",
          category: "",
          start_date: "",
          end_date: "",
          location: "",
          url_site: "",
          url_image: "",
          file: null,
        });
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error al enviar evento:", error);
      alert("Ocurrió un error al enviar el evento.");
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
        <select
          title="Selecciona una categoría"
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          className={`border p-2 w-full bg-white ${
            formError ? "border-red-500" : ""
          }`}
        >
          <option value="">Selecciona una categoría</option>
          {keywordList.map((word) => (
            <option key={word} value={word}>
              {word}
            </option>
          ))}
        </select>
        {formError && <p className="text-red-600 text-sm mt-1">{formError}</p>}
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

      {/* Imagen desde URL */}
      <div className="mb-4">
        <label
          htmlFor="url_image"
          className="block text-sm font-medium text-gray-700"
        >
          URL de la imagen
        </label>
        <input
          type="text"
          id="url_image"
          name="url_image"
          value={form.url_image}
          onChange={(e) => setForm({ ...form, url_image: e.target.value })}
          className="mt-1 block w-full border rounded p-2"
          placeholder="https://ejemplo.com/imagen.jpg"
        />
      </div>

      {/* subir imagen */}
      <div className="mb-4">
        <label
          htmlFor="file"
          className="block text-sm font-medium text-gray-700"
        >
          O sube una imagen
        </label>
        <input
          title="Subir imagen"
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setForm({ ...form, file: e.target.files[0] });
            }
          }}
          className="block w-full text-sm text-gray-600
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-50 file:text-blue-700
      hover:file:bg-blue-100"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded shadow-sm font-semibold"
      >
        Guardar evento
      </button>
      
      {formError && <p className="text-red-600 text-sm mt-2">{formError}</p>}

      {successMessage && (
        <p className="text-green-600">
          🎉 Este evento será visible tras ser aprobado por un administrador.
        </p>
      )}
    </form>
  );
}
