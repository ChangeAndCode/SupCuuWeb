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
    desecText: string;
    futuraText: string;
    mitText: string;
  }
  
  export interface NewsSlide {
    carouselTitle: string;
    carouselDescription: string;
    carouselImage: string;
    carouselImageName: string;
    isActive: boolean;
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
    timelineData: TimelineData;
    newsSlides: NewsSlide[];
  }
  