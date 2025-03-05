import { getUmbracoContent } from "../server/umbracoApi";
import { stripHtml } from "@/utils/umbraco-text";
import {
  UmbracoPageData,
  NewsSlide,
} from "@/types/home";
import {TextElement} from "@/types/common/text-elements"
const defaultSlides: NewsSlide[] = [
  {
    carouselTitle: "Título por defecto",
    carouselDescription: "Descripción por defecto",
    carouselImage: "/prueba.webp",
    carouselImageName: "imagen por defecto",
    isActive: true,
  },
];

export async function getLandingPageData(): Promise<UmbracoPageData> {
  const content = await getUmbracoContent("landing-page");
  console.log(content);
  if (!content || !content.properties) {
    throw new Error("Failed to fetch landing page data");
  }

  const { properties } = content;
  const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL || "";

  const newsSlides: NewsSlide[] = properties.newsCarousel?.items
    ? properties.newsCarousel.items
      .map((item: any) => ({
        carouselTitle: item.content.properties.carouselTitle?.markup || "",
        carouselDescription:
          item.content.properties.carouselDescription?.markup || "",
        carouselImage:
          item.content.properties.carouselImage?.[0]?.url || "/prueba.webp",
        carouselImageName:
          item.content.properties.carouselImage?.[0]?.name || "untitled",
        isActive: item.content.properties.isActive || false,
      }))
      .filter((slide: NewsSlide) => slide.isActive)
    : defaultSlides;
  console.log(JSON.stringify(properties.firstContent));
  return {
    profileIcon: {
      url: `${nextPublicApiUrl}${properties.profileIcon[0].url}`,
      name: properties.profileIcon[0].name,
    },
    profiles: {
      entrepreneur: {
        imageUrl: `${nextPublicApiUrl}${properties.profileUrl.items[0].content.properties.profileImage[0].url}`,
        imageAlt:
          properties.profileUrl.items[0].content.properties.profileImage[0]
            .name,
        buttonContent: properties.profileUrl.items[0].content.properties.title,
        buttonLink:
          properties.profileUrl.items[0].content.properties.callToAction[0].url,
        question:
          properties.profileUrl.items[0]?.content?.properties?.question?.items?.map(
            (item: any) =>
              item?.content?.properties?.stringText ?? "Texto no disponible"
          ) ?? [],
      },
      startups: {
        imageUrl: `${nextPublicApiUrl}${properties.profileUrl.items[1].content.properties.profileImage[0].url}`,
        imageAlt:
          properties.profileUrl.items[1].content.properties.profileImage[0]
            .name,
        buttonContent: properties.profileUrl.items[1].content.properties.title,
        buttonLink:
          properties.profileUrl.items[1].content.properties.callToAction[0].url,
        question:
          properties.profileUrl.items[1]?.content?.properties?.question?.items?.map(
            (item: any) =>
              item?.content?.properties?.stringText ?? "Texto no disponible"
          ) ?? [],
      },
      investors: {
        imageUrl: `${nextPublicApiUrl}${properties.profileUrl.items[2].content.properties.profileImage[0].url}`,
        imageAlt:
          properties.profileUrl.items[2].content.properties.profileImage[0]
            .name,
        buttonContent: properties.profileUrl.items[2].content.properties.title,
        buttonLink:
          properties.profileUrl.items[2].content.properties.callToAction[0].url,
        question:
          properties.profileUrl.items[2]?.content?.properties?.question?.items?.map(
            (item: any) =>
              item?.content?.properties?.stringText ?? "Texto no disponible"
          ) ?? [],
      },
      corporates: {
        imageUrl: `${nextPublicApiUrl}${properties.profileUrl.items[3].content.properties.profileImage[0].url}`,
        imageAlt:
          properties.profileUrl.items[3].content.properties.profileImage[0]
            .name,
        buttonContent: properties.profileUrl.items[3].content.properties.title,
        buttonLink:
          properties.profileUrl.items[3].content.properties.callToAction[0].url,
        question:
          properties.profileUrl.items[3]?.content?.properties?.question?.items?.map(
            (item: any) =>
              item?.content?.properties?.stringText ?? "Texto no disponible"
          ) ?? [],
      },
    },
    teamMembers:
      properties.partners?.items.map((item: any) => ({
        id: item.content.properties.pId,
        image: `${nextPublicApiUrl}${
          item.content.properties.pImage[0].url || "/placeholder.webp"
        }`,
        name: item.content.properties.pName,
        position: item.content.properties.pPosition,
        description: item.content.properties.pDescription?.markup
          ? stripHtml(item.content.properties.pDescription.markup)
          : "Sin descripción",
      })) || [],
    meetTeamTitles: {
      titleH3: properties.textH3?.markup
        ? stripHtml(properties.textH3.markup)
        : "Titulo por defecto H3",
      titleH4: properties.textH4?.markup
        ? stripHtml(properties.textH4.markup)
        : "Titulo por defecto H4",
      titleH5: properties.textH5?.markup
        ? stripHtml(properties.textH5.markup)
        : "Titulo por defecto H5",
      backgroundTitle: properties.backgroundText?.markup
        ? stripHtml(properties.backgroundText.markup)
        : "Background por defecto",
    },
    timelineData: {
      desecText: properties.text
        ? stripHtml(properties.text)
        : "Default desecText",
      futuraText: properties.text2
        ? stripHtml(properties.text2)
        : "Default futuraText",
      mitText: properties.text3
        ? stripHtml(properties.text3)
        : "Default mitText",
    },
    newsSlides: newsSlides.length > 0 ? newsSlides : defaultSlides,

    presidentCardData: {
      firstContent: (properties.firstContent.items as TextElement[]).map(
        (item) => {
          if (item.content.contentType === "stringTextElement") {
            return item.content.properties.stringText;
          }
          return "";
        }
      ),
      logoImageUrl: `${nextPublicApiUrl}${properties.logoImage[0].url}`,
      logoImageName: properties.logoImage[0].name,
      subContent: (properties.subContent.items as TextElement[]).map((item) => {
        if (item.content.contentType === "stringTextElement") {
          return item.content.properties.stringText;
        }
        return "";
      }),
      presidentImageUrl: `${nextPublicApiUrl}${properties.presidentImage[0].url}`,
      presidentImageName: properties.presidentImage[0].name,
    },
  };
}
