// lib/server/opportunitiesData.ts
import { getUmbracoContent } from "@/lib/server/umbracoApi";
import { stripHtml } from "@/utils/umbraco-text";
import { OpportunitiesData } from "@/types/Opportunities";

export async function getOpportunitiesData(culture: string = "en-us"): Promise<{
  opportunitiesTitle: string;
  wantToStayUpdatedTitle: string;
  wantToStayUpdatedText: string;
  defaultImage?: {
    name: string;
    url: string;
  };
} | null> {
  try {
    const content = await getUmbracoContent("sites/opportunities", culture);

    if (!content || !content.properties) {
      console.error("Error loading content from Umbraco");
      return null;
    }

    const {
      opportunitiesTitle,
      wantToStayUpdatedTitle,
      wantToStayUpdatedText,
      defaultImage,
    } = content.properties as OpportunitiesData;

    console.log(wantToStayUpdatedText);
    const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL || "";
    return {
      opportunitiesTitle:
        stripHtml(opportunitiesTitle) || "Events & Opportunities",
      wantToStayUpdatedTitle:
        stripHtml(wantToStayUpdatedTitle) ||
        "WANT TO STAY UPDATED ON WHAT’S HAPPENING IN THE ECOSYSTEM DESIGNED JUST FOR YOU?",
      wantToStayUpdatedText: stripHtml(wantToStayUpdatedText.markup) || "",
      defaultImage:
        Array.isArray(defaultImage) && defaultImage[0]
          ? {
              name: defaultImage[0].name,
              url: `${nextPublicApiUrl}${defaultImage[0].url}`,
            }
          : undefined,
    };
  } catch (error) {
    console.error("Failed to fetch opportunities data:", error);
    return null;
  }
}
