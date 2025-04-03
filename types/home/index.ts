import { UmbracoImage } from "../umbraco";

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
  timelineData: TimelineData;
  newsSlides: NewsSlide[];
  presidentCardData: presidentCardData;
  teamBackbone: BackboneTeamMember[];

  keyImpactTitle: string;
  keyImpactIndicators: Indicator[]; // Changed indicators to keyImpactIndicators
  targetYear: string;
  weAreContent: {
    highlightText: string;
    description: string;
  };
  impactContent: {
    mainText: string;
  };
  transformativeTitle: string;
  resultGrids: resultGrids;
  partnersSection: {
    title: string;
    partnersTableImage: {
      url: string;
      alt: string;
    };
    thankYouText: string;
  };
}

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

export interface TimelineData {
  timelineText1: {
    markup: string;
  };
  timelineText2: {
    markup: string;
  };
  timelineText3: {
    markup: string;
  };
}

export const defaultTimelineData: TimelineData = {
  timelineText1: {
    markup: "<p><b>DESEC</b> launches <b>Chihuahua Futura</b> to drive innovation and technology.</p>",
  },
  timelineText2: {
    markup: "<p><b>DESEC</b> transforming Chihuahua’s economy over the past 50 years.</p>",
  },
  timelineText3: {
    markup: "<p>Chihuahua joins the <b>MIT REAP</b> program. Local leaders gather data, define a strategic plan, and create a collective organization to transform the ecosystem called <b>STARTUP CHIHUAHUA</b>.</p>",
  },
};

export interface NewsSlide {
  carouselTitle: string;
  carouselDescription: string;
  carouselImage: string;
  carouselImageName: string;
  isActive: boolean;
}

export interface presidentCardData {
  firstContent: string[];
  logoImageUrl: string;
  logoImageName: string;
  subContent: string[];
  presidentImageUrl: string;
  presidentImageName: string;
}
export interface BackboneTeamMember {
  memberName: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  emailText: string;
  email: string;
}

export interface Indicator {
  value: string;
  unit: string;
  indicatorDescription: string;
}

export interface resultGrids {
  items: Array<{
    content: {
      properties: {
        resultGridTitle: string;
        resultGrid: {
          items: Array<{
            content: {
              properties: {
                resultTitle: string;
                resultDescription: string;
              };
            };
          }>;
        };
      };
    };
  }>;
}
