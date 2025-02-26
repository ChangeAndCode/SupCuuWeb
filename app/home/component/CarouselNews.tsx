"use client";
import Image from "next/image";
import BtnCT from "./BtnCT";
import { UmbracoApi } from "@/lib/api";
import { useEffect, useState } from "react";


interface NewsSlide {
  id: string;
  name: string;
  isActive: boolean;
  image?: { url: string; alt?: string }[];
}

export default function NewsCarousel() {
  const [news, setNews] = useState<NewsSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://localhost:44323/umbraco/delivery/api/v1/content/anytimenews") 
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        return res.json();
      })
      .then((data) => {
        setNews(data.items || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("No se pudieron cargar las noticias.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>CARGANDO NOTICIAS...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>NEWS CAROUSEL</h1>
      {news.length > 0 ? (
        news.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>Activo: {item.isActive ? "Sí" : "No"}</p>
            {item.image?.[0] && (
              <img src={item.image[0].url} alt={item.image[0].alt || "Imagen del carrusel"} />
            )}
          </div>
        ))
      ) : (
        <p>NO HAY NOTICIAS DISPONIBLES.</p>
      )}
    </div>
  );
}
