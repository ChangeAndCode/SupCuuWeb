import { getUmbracoContent } from "../server/umbracoApi";
import { AttractionData } from "@/types/attraction";
import { stripHtml } from "@/utils/umbraco-text";

export async function getAttractionData(): Promise<AttractionData> {
  const content = await getUmbracoContent("attraction-page");
  if (!content || !content.properties) {
    throw new Error("Failed to fetch landing page data");
  }
  const { properties } = content;
  const nextPublicApiUrl = process.env.NEXT_PUBLIC_API_URL || "";

  // const mapImage = (img: any) => ({
  //   name: img.name || "nombre no disponible",
  //   url: `${nextPublicApiUrl}${img.url}`,
  // });

  return {
    properties: {
      heroTitle: properties.heroTitle || "titulo no disponible",
      heroSubtitle: properties.heroSubtitle || "texto no disponible",
      heroButton: properties.heroButton,
      videoTitle: properties.videoTitle || "titulo no disponible",
      videoLink: (properties.videoLink || []).map((link: any) => ({
        url: link.url,
        title: link.title || "titulo no disponible",
      })),
      nBMTitle: properties.nBMTitle || "titulo no disponible",
      nBMContent: {
        markup: properties.nBMContent?.markup
          ? stripHtml(properties.nBMContent?.markup)
          : "contenido no disponible",
      },
      nBMButton: properties.nBMButton,
      focusCarousel: {
        items: (properties.focusCarousel.items || []).map((item: any) => ({
          content: {
            properties: {
              focusTitle:
                item.content.properties.focusTitle || "titulo no disponible",
              focusContent: item.content.properties.focusContent || [],
              focusImage: item.content.properties.focusImage.map(
                (image: any) => ({
                  name: image.name || "nombre no disponible",
                  url: `${nextPublicApiUrl}${image.url}`,
                })
              ),
            },
          },
        })),
      },
      engineTitle: properties.engineTitle,
      engineImage: (properties.engineImage || []).map((image: any) => ({
        name: image.name,
        url: `${nextPublicApiUrl}${image.url}`,
      })),
      teamMembers: {
        items: (properties.teamMembers.items || []).map((member: any) => ({
          content: {
            properties: {
              teamImage: (member.content.properties.teamImage || []).map(
                (image: any) => ({
                  name: image.name,
                  url: `${nextPublicApiUrl}${image.url}`,
                })
              ),
              teamTitle: member.content.properties.teamTitle,
              teamRole: member.content.properties.teamRole,
            },
          },
        })),
      },
      alwaysTitle: properties.alwaysTitle,
      alwaysSubtitle: properties.alwaysSubtitle,
      alwaysButton: properties.alwaysButton,
      historyTitle: properties.historyTitle,
      historyContent: {
        items: (properties.historyContent.items || []).map((item: any) => ({
          content: {
            properties: {
              richText: {
                markup: item.content.properties.richText?.markup
                  ? stripHtml(item.content.properties.richText?.markup)
                  : "",
              },
              stringText: item.content.properties.stringText || "",
            },
          },
        })),
      },
      blockImage: (properties.blockImage || []).map((image: any) => ({
        name: image.name,
        url: `${nextPublicApiUrl}${image.url}`,
      })),
      blockContent: {
        markup: properties.blockContent?.markup
          ? stripHtml(properties.blockContent?.markup)
          : "",
      },
      historySubtitle: properties.historySubtitle,
      historySubtitleContent: {
        items: (properties.historySubtitleContent.items || []).map(
          (item: any) => ({
            content: {
              properties: {
                richText: {
                  markup: item.content.properties.richText.markup
                    ? stripHtml(item.content.properties.richText.markup)
                    : "",
                },
                stringText: item.content.properties.stringText || "",
              },
            },
          })
        ),
      },
      supportTitle: properties.supportTitle,
      supportElements: {
        items: (properties.supportElements.items || []).map((item: any) => ({
          content: {
            properties: {
              supTitle: item.content.properties.supTitle,
              supContent: {
                markup: item.content.properties.supContent?.markup
                  ? stripHtml(item.content.properties.supContent?.markup)
                  : "",
              },
              supImage: (item.content.properties.supImage || []).map(
                (image: any) => ({
                  name: image.name,
                  url: `${nextPublicApiUrl}${image.url}`,
                })
              ),
            },
          },
        })),
      },
      provideTitle: properties.provideTitle,
      provideSubtitle: properties.provideSubtitle,
      provideCheckIcon: (properties.provideCheckIcon || []).map(
        (icon: any) => ({
          name: icon.name,
          url: `${nextPublicApiUrl}${icon.url}`,
        })
      ),
      provideContent: {
        items: (properties.provideContent.items || []).map((item: any) => ({
          content: {
            properties: {
              stringText: item.content.properties.stringText || "",
            },
          },
        })),
      },
      togetherTitle: properties.togetherTitle,
      togetherContent: {
        markup: properties.togetherContent?.markup
          ? stripHtml(properties.togetherContent?.markup)
          : "Contenido no disponible",
      },
      togetherButton: properties.togetherButton,
      carouselDoorElements: {
        items: (properties.carouselDoorElements.items || []).map(
          (item: any) => ({
            content: {
              properties: {
                doorImage: (item.content.properties.doorImage || []).map(
                  (image: any) => ({
                    name: image.name,
                    url: `${nextPublicApiUrl}${image.url}`,
                  })
                ),
                doorName: item.content.properties.doorName,
                doorPosition: item.content.properties.doorPosition,
                doorDescription: {
                  markup: item.content.properties.doorDescription?.markup
                    ? stripHtml(item.content.properties.doorDescription?.markup)
                    : "Contenido no disponible",
                },
              },
            },
          })
        ),
      },
      possibleTitle: properties.possibleTitle,
      possibleImages: (properties.possibleImages || []).map((image: any) => ({
        name: image.name,
        url: `${nextPublicApiUrl}${image.url}`,
      })),
      worldImage: (properties.worldImage || []).map((image: any) => ({
        name: image.name,
        url: `${nextPublicApiUrl}${image.url}`,
      })),
      worldFirstContent: (properties.worldFirstContent.items || []).map(
        (wFcontent: any) => ({
          content: {
            properties: {
              stringText: wFcontent.content.properties.stringText,
            },
          },
        })
      ),
      worldSpanMiddleContent: properties.worldSpanMiddleContent,
      worldSecondContent: (properties.worldSecondContent.items || []).map(
        (wScontent: any) => ({
          content: {
            properties: {
              stringText: wScontent.content.properties.stringText,
            },
          },
        })
      ),
      worldSpanBottomContent: properties.worldSpanBottomContent,
      heroButtonUrl: (properties.heroButtonUrl || []).map((link: any) => ({
        url: link.url,
        title: link.title || null,
      })),
      nBMButtonUrl: (properties.nBMButtonUrl || []).map((link: any) => ({
        url: link.url,
        title: link.title || null,
      })),
      alwaysButtonUrl: (properties.alwaysButtonUrl || []).map((link: any) => ({
        url: link.url,
        title: link.title || null,
      })),
      togetherButtonUrl: (properties.togetherButtonUrl || []).map(
        (link: any) => ({
          url: link.url,
          title: link.title || null,
        })
      ),
      provideSpanDropdown: properties.provideSpanDropdown || "",
      provideSpanContent: {
        markup: properties.provideSpanContent?.markup
          ? stripHtml(properties.provideSpanContent.markup)
          : "",
      },
    },
  };
}
