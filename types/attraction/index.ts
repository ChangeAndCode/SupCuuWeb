export interface AttractionData {
  properties: {
    heroTitle: string;
    heroSubtitle: string;
    heroButton: string;
    videoTitle: string;
    videoLink: Array<{
      url: string;
      title: string;
    }>;
    nBMTitle: string;
    nBMContent: {
      markup: string;
    };
    nBMButton: string;
    focusCarousel: {
      items: Array<{
        content: {
          properties: {
            focusTitle: string;
            focusContent: string[];
            focusImage: Array<{
              name: string;
              url: string;
            }>;
          };
        };
      }>;
    };
    engineTitle: string;
    engineImage: Array<{
      name: string;
      url: string;
    }>;
    teamMembers: {
      items: Array<{
        content: {
          properties: {
            teamImage: Array<{
              name: string;
              url: string;
            }>;
            teamTitle: string;
            teamRole: string;
          };
        };
      }>;
    };
    alwaysTitle: string;
    alwaysSubtitle: string;
    alwaysButton: string;
    historyTitle: string;
    historyContent: {
      items: Array<{
        content: {
          properties: {
            richText?: {
              markup: string;
            };
            stringText?: string;
          };
        };
      }>;
    };
    blockImage: Array<{
      name: string;
      url: string;
    }>;
    blockContent: {
      markup: string;
    };
    historySubtitle: string;
    historySubtitleContent: {
      items: Array<{
        content: {
          properties: {
            richText?: {
              markup: string;
            };
            stringText?: string;
          };
        };
      }>;
    };
    supportTitle: string;
    supportElements: {
      items: Array<{
        content: {
          properties: {
            supTitle: string;
            supContent: {
              markup: string;
            };
            supImage: Array<{
              name: string;
              url: string;
            }>;
          };
        };
      }>;
    };
    provideTitle: string;
    provideSubtitle: string;
    provideCheckIcon: Array<{
      name: string;
      url: string;
    }>;
    provideContent: {
      items: Array<{
        content: {
          properties: {
            stringText: string;
          };
        };
      }>;
    };
    togetherTitle: string;
    togetherContent: {
      markup: string;
    };
    togetherButton: string;
    carouselDoorElements: {
      items: Array<{
        content: {
          properties: {
            doorImage: Array<{
              name: string;
              url: string;
            }>;
            doorName: string;
            doorPosition: string;
            doorDescription: {
              markup: string;
            };
          };
        };
      }>;
    };
    possibleTitle: string;
    possibleImages: Array<{
      name: string;
      url: string;
    }>;
    worldImage: Array<{
      name: string;
      url: string;
    }>;
    worldFirstContent: {
      items: Array<{
        content: {
          properties: {
            stringText: string;
          };
        };
      }>;
    };
    worldSpanMiddleContent: string;
    worldSecondContent: {
      items: Array<{
        content: {
          properties: {
            stringText: string;
          };
        };
      }>;
    };
    worldSpanBottomContent: string;
    heroButtonUrl: Array<{
      url: string;
      title?: string | null;
    }>;
    nBMButtonUrl: Array<{
      url: string;
      title?: string | null;
    }>;
    alwaysButtonUrl: Array<{
      url: string;
      title?: string | null;
    }>;
    togetherButtonUrl: Array<{
      url: string;
      title?: string | null;
    }>;
    provideSpanDropdown: string;
    provideSpanContent: {
      markup: string;
    };
  };
}
