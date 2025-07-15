// lib/Opportunities/matchesKeywords.ts
import { loadKeywordsServer } from "./loadKeywordsServer";

/**
 * Devuelve la lista de palabras clave (minúsculas, sin espacios extra)
 * – la llamamos solo 1 vez desde server.
 */
export const getKeywords = async (): Promise<string[]> => {
  try {
    const keywords = await loadKeywordsServer();
    return keywords.map((k) => k.trim().toLowerCase());
  } catch (err) {
    console.error("Error loading keywords on server:", err);
    return [];
  }
};

/** Versión *sincrónica* que revisa si el texto contiene alguna palabra   */
export const hasKeyword =
  (keywords: string[]) =>
  (text: string = ""): boolean => {
    const normalized = text.toLowerCase();
    return keywords.some((k) => normalized.includes(k));
  };
