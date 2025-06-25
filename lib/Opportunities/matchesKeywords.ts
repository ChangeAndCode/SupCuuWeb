const keywords = [
  ...(process.env.NEXT_PUBLIC_KEYWORDS_EVENTS?.split(",") || []),
  ...(process.env.NEXT_PUBLIC_KEYWORDS_EVENTS_ENGLISH?.split(",") || []),
].map((k) => k.trim().toLowerCase());

export const matchesKeywords = (text: string = ""): boolean => {
  const normalized = text.toLowerCase();
  return keywords.some((keyword) => normalized.includes(keyword));
};
