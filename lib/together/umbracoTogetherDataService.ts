// lib/together/umbracoTogetherDataService.ts
import { getUmbracoContent } from "@/lib/server/umbracoApi";
import { getImageUrl } from "@/utils/umbracoImageHelper";
import { UmbracoImage } from "@/types/umbraco";
import { TOGETHER_FALLBACKS } from "./fallbacks";
import { TogetherPageData, GridElement } from "@/types/Together";

export async function getTogetherPageData(
  locale: string = "en-us"
): Promise<TogetherPageData> {
  try {
    const content = await getUmbracoContent("/sites/together/", locale);

    // Extract header data
    const principalTextItems = content.properties.principalText?.items || [];
    const principalText = principalTextItems.map(
      (item) => item.content.properties.stringText
    );
    
    const subtextItems = content.properties.subtext?.items || [];
    const subtext = subtextItems.length > 0 
      ? subtextItems[0].content.properties.stringText 
      : TOGETHER_FALLBACKS.header.subtext;
    
    const backgroundImage = content.properties.backgroundImage?.[0]
      ? getImageUrl(content.properties.backgroundImage[0].url)
      : TOGETHER_FALLBACKS.header.backgroundImage;
    
    const communityText = content.properties.communityText || TOGETHER_FALLBACKS.header.communityText;

    // Extract collabs carousel images
    const collabsImages = (content.properties.collabsCarouselImages || []).map(
      (image: UmbracoImage) => getImageUrl(image.url)
    );

    // Extract looking to titles
    const lookingToBigTitle = content.properties.lookingToBigTitle || TOGETHER_FALLBACKS.lookingTo.bigTitle;
    const lookingToSmallTitle = content.properties.lookingToSmallTitle || TOGETHER_FALLBACKS.lookingTo.smallTitle;

    // Extract grid elements
    const gridElementsItems = content.properties.gridElements?.items || [];
    const gridElements = gridElementsItems.map((item, index) => {
      const element = item.content.properties;
      const iconImage = element.gridElementIconImage?.[0];
      
      return {
        id: item.content.id,
        icon: iconImage ? getImageUrl(iconImage.url) : TOGETHER_FALLBACKS.gridElements[index % TOGETHER_FALLBACKS.gridElements.length].icon,
        title: element.title || TOGETHER_FALLBACKS.gridElements[index % TOGETHER_FALLBACKS.gridElements.length].title,
        description: element.gridElementText || TOGETHER_FALLBACKS.gridElements[index % TOGETHER_FALLBACKS.gridElements.length].description,
        order: index + 1,
      };
    });

    return {
      header: {
        principalText: principalText.length > 0 ? principalText : TOGETHER_FALLBACKS.header.principalText,
        subtext,
        backgroundImage,
        communityText,
      },
      collabs: {
        images: collabsImages.length > 0 ? collabsImages : TOGETHER_FALLBACKS.collabs.images,
      },
      lookingTo: {
        bigTitle: lookingToBigTitle,
        smallTitle: lookingToSmallTitle,
      },
      gridElements: gridElements.length > 0 ? gridElements : TOGETHER_FALLBACKS.gridElements,
    };
  } catch (error) {
    console.error("Failed to fetch Together page data:", error);
    
    // Return complete fallback data
    return TOGETHER_FALLBACKS;
  }
}
