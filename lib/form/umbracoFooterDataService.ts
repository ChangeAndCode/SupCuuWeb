import { getUmbracoContent } from "../server/umbracoApi";
import { FooterData } from "@/types/form";

export async function getFooterData(): Promise<FooterData> {
  const content = await getUmbracoContent("footer");
  console.log(content);
  if (!content || !content.properties) {
    throw new Error("Failed to fetch landing page data");
  }

  const { properties } = content;
  const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL || "";

  return {
    socialMedia: {
      socialMedia: {
        items: properties.socialMedia.items.map((item: any) => ({
          item: {
            content: {
              properties: {
                logo: {
                  name: item.content.properties.logo[0].name,
                  url: `${nextPublicApiUrl}${item.content.properties.logo[0].url}`,
                },
                url: {
                  url: `${nextPublicApiUrl}${item.content.properties.url[0].url}`,
                  title: item.content.properties.url[0].title,
                },
              },
            },
          },
        })),
      },
    },
    telephone: {
      markup: properties.telephone.markup,
    },
    telephoneIcon: {
      name: properties.telephoneIcon[0].name,
      url: `${nextPublicApiUrl}${properties.telephoneIcon[0].url}`,
    },
    location: {
      markup: properties.location.markup,
    },
    locationIcon: {
      name: properties.locationIcon[0].name,
      url: properties.locationIcon[0].url,
    },
    image: {
      name: properties.image[0].name,
      url: properties.image[0].url,
    },
    nameCompany: {
      markup: properties.nameCompany.markup,
    },
    slogan: {
      markup: properties.slogan.markup,
    },
  };
}
