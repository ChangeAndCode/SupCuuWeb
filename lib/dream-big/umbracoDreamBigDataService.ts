import { getUmbracoContent } from "../server/umbracoApi";
import { stripHtml } from "@/utils/umbraco-text";
import { UmbracoDreamBigData } from "@/types/dream-big";

export async function getDreamBigData(): Promise<UmbracoDreamBigData> {
  const content = await getUmbracoContent("sites/dream-big");

  if (!content || !content.properties) {
    throw new Error("Failed to fetch landing page data");
  }

  const { properties } = content;
  const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL || "";

  return {
    principalTitle: properties.principalTitle,
    subtitleOne: properties.subtitleOne,
    subtitleTwo: properties.subtitleTwo,
    backgroundText: properties.backgroundText,
    bannerImage: properties.bannerImage.map((image: any) => ({
      name: image.name,
      url: `${nextPublicApiUrl}${image.url}`,
    })),
    showcasesContent: {
      items: properties.showcasesContent.items.map((item: any) => ({
        content: {
          properties: {
            companyImage: item.content.properties.companyImage.map(
              (image: any) => ({
                name: image.name,
                url: `${nextPublicApiUrl}${image.url}`,
              })
            ),
            buttonOne: item.content.properties.buttonOne,
            buttonTwo: item.content.properties.buttonTwo,
            description: {
              markup: item.content.properties.description?.markup
                ? stripHtml(item.content.properties.description.markup)
                : "Descripción por defecto",
            },
          },
        },
      })),
    },
  };
}
