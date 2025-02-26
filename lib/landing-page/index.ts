import { UmbracoApi } from "@/lib/api";
import { ProfileCTA } from "@/types/landingPage";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
const BACKEND_URL = API_URL.replace(/\/api\/?$/, "");

function getFullImageUrl(path: string | undefined | null): string {
  if (!path) return "/default-image.webp";
  if (
    path.startsWith("http") ||
    (path.startsWith("/") && !path.startsWith("/media"))
  ) {
    return path;
  }
  return `${BACKEND_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export async function getCardCorporateData(
  itemIndex: number
): Promise<ProfileCTA> {
  try {
    const data = await UmbracoApi.getContent("landing-page");

    const properties =
      data.properties.profileUrl.items[itemIndex].content.properties;

    return {
      imageUrl: getFullImageUrl(properties.profileImage?.[0]?.url),
      imageAlt: properties.profileImage?.[0]?.name ?? "Image not available",
      buttonContent: properties.title,
      buttonLink: properties.callToAction?.[0]?.url ?? "#",
      question:
        properties.question?.items?.map(
          (item: any) =>
            item?.content?.properties?.stringText ?? "Texto no disponible"
        ) ?? [],
    };
  } catch (error) {
    console.error("Error fetching Card Corporate data: ", error);
    return {
      imageUrl: "/fallback-image.webp",
      imageAlt: "Fallback Image",
      buttonContent: "Fallback Button",
      buttonLink: "#",
      question: ["Fallback Question"],
    };
  }
}
