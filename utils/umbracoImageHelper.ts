// utils/umbracoImageHelper.ts
/**
 * Utility function to convert Umbraco media paths to full URLs
 * @param path The image path from Umbraco
 * @param fallback Optional fallback image path if the provided path is null or undefined
 * @returns Full URL to the image
 */
export function getImageUrl(
  path: string | undefined | null,
  fallback: string = "/invest-in-talent/alan.webp"
): string {
  if (!path) return fallback;
  const BACKEND_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3177";
  console.log(path);
  if (
    path.startsWith("http") ||
    (path.startsWith("/") && !path.startsWith("/media"))
  ) {
    return path;
  }

  return `${BACKEND_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
