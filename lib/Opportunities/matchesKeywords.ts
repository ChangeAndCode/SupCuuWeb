const keywords =
  process.env.KEYWORDS_EVENTS?.split(",").map((k) => k.trim().toLowerCase()) ||
  [];

export const matchesKeywords = (text: string = ""): boolean => {
  const normalized = text.toLowerCase();
  return keywords.some((keyword) => normalized.includes(keyword));
};
