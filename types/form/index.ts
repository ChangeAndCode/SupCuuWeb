export interface FooterData {
  socialMedia: SocialMedia;
  telephone: {
    markup: string;
  };
  telephoneIcon: {
    name: string;
    url: string;
  };
  location: {
    markup: string;
  };
  locationIcon: {
    name: string;
    url: string;
  };
  image: {
    name: string;
    url: string;
  };
  nameCompany: {
    markup: string;
  };
  slogan: {
    markup: string;
  };
}

export interface SocialMedia {
  socialMedia: {
    items: SocialMediaItem[];
  };
}

export interface SocialMediaItem {
  content: {
    properties: {
      logo: MediaImage[];
      url: SocialMediaLink[];
    };
  };
}

export interface MediaImage {
  name: string;
  url: string;
}

export interface SocialMediaLink {
  url: string;
  title: string;
}
