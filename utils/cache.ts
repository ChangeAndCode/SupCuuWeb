// utils/cache.ts
import { LRUCache } from 'lru-cache';
import { UmbracoContent } from "@/types/umbraco";

// Configuración del cache
const options = {
  max: 100, // Máximo de elementos en el cache
  ttl: 1000 * 10, // Tiempo de vida de 10 seconds (en milisegundos) - Adjust as needed
};

// Crear la instancia del cache
const cache = new LRUCache<string, UmbracoContent>(options);

// Obtener un elemento del cache
export function getCachedContent(key: string): UmbracoContent | undefined {
  return cache.get(key);
}

// Guardar un elemento en el cache
export function setCachedContent(key: string, value: UmbracoContent): void {
  cache.set(key, value);
}
