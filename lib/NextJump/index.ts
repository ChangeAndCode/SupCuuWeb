import { getUmbracoContent } from "@/lib/server/umbracoApi";
import { NextJumpPage, NextJumpProps } from "@/types/NextJump";
import { getText } from "@/utils/umbraco-text";

/**
 * Fetches and processes NextJump page data from Umbraco
 * @returns Processed NextJump data in the expected format for the component
 */
export async function getNextJumpData(
  culture: string = "en-us"
): Promise<NextJumpProps> {
  const data = (await getUmbracoContent(
    "/sites/nextjump/",
    culture
  )) as NextJumpPage;

  // Header Composition Properties
  const principalText =
    data?.properties?.principalText?.items.map((item: any) => getText(item)) ||
    [];
  const subtext =
    data?.properties?.subtext?.items.map((item: any) => getText(item)) || [];
  const backgroundImage = data?.properties?.backgroundImage?.[0]?.url || "";
  // Checklist Section Properties
  const checklistBannerText =
    data?.properties?.checklistBannerText?.items.map((item: any) =>
      getText(item)
    ) || [];
  const checklistItems = data?.properties?.checkListItems?.items || [];
  const checkListCtaParagraph = data?.properties?.checkListCtaParagraph || "";
  const checkListCtaButtonText = data?.properties?.checkListCtaButtonText;
  const checkListCtaButtonHref =
    data?.properties?.checkListCtaButtonHref?.[0]?.url || "#";

  // Accelerators Section Properties
  const acceleratorsTitle = data?.properties?.acceleratorsTitle;
  const accelerators = data?.properties?.accelerators?.items || [];

  return {
    principalText,
    subtext,
    backgroundImage,
    checklistBannerText,
    checklistItems,
    checkListCtaParagraph,
    checkListCtaButtonText,
    checkListCtaButtonHref,
    acceleratorsTitle,
    accelerators,
  };
}
