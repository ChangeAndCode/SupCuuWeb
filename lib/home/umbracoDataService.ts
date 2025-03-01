// lib/server/umbracoDataService.ts
import { getUmbracoContent } from "../server/umbracoApi";
import { stripHtml } from "@/utils/umbraco-text";

export interface ProfileCTA {
  imageUrl: string;
  imageAlt: string;
  buttonContent: string;
  buttonLink: string;
  question: string[];
}

export interface TeamMember {
  id: number;
  image: string;
  name: string;
  position: string;
  description: string;
}

export interface MeetTeamTitles {
  titleH3: string;
  titleH4: string;
  titleH5: string;
  backgroundTitle: string;
}

export interface UmbracoPageData {
  profileIcon: {
    url: string;
    name: string;
  };
  profiles: {
    entrepreneur: ProfileCTA;
    startups: ProfileCTA;
    investors: ProfileCTA;
    corporates: ProfileCTA;
  };
  teamMembers: TeamMember[];
  meetTeamTitles: MeetTeamTitles;
}

// lib/home/umbracoDataService.ts

export async function getLandingPageData(): Promise<UmbracoPageData> {
  const content = await getUmbracoContent("landing-page");
  console.log(content);
  if (!content || !content.properties) {
    throw new Error("Failed to fetch landing page data");
  }

  const { properties } = content;
  const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL || "";

  // Extract all necessary data from the content
  return {
    profileIcon: {
      url: `${nextPublicApiUrl}${properties.profileIcon[0].url}`,
      name: properties.profileIcon[0].name,
    },
    profiles: {
      entrepreneur: {
        imageUrl: `${nextPublicApiUrl}${properties.profileUrl.items[0].content.properties.profileImage[0].url}`,
        imageAlt: properties.profileUrl.items[0].content.properties.profileImage[0].name,
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
        imageAlt: properties.profileUrl.items[1].content.properties.profileImage[0].name,
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
        imageAlt: properties.profileUrl.items[2].content.properties.profileImage[0].name,
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
        imageAlt: properties.profileUrl.items[3].content.properties.profileImage[0].name,
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
      titleH3: properties.textH3?.markup ? stripHtml(properties.textH3.markup) : "Titulo por defecto H3",
      titleH4: properties.textH4?.markup ? stripHtml(properties.textH4.markup) : "Titulo por defecto H4",
      titleH5: properties.textH5?.markup ? stripHtml(properties.textH5.markup) : "Titulo por defecto H5",
      backgroundTitle: properties.backgroundText?.markup ? stripHtml(properties.backgroundText.markup) : "Background por defecto",
    },
  };
}
