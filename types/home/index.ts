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
  teamBackbone: BackboneTeamMember[]
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
  imageUrl: string;
}