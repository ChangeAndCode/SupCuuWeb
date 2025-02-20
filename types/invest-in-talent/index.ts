// types/invest-in-talent/index.ts
import type { UmbracoContent, UmbracoImage } from '../umbraco';
import type { TextElement } from '../common/text-elements';

export interface InvestInTalentData extends UmbracoContent {
  contentType: 'investInTalent';
  properties: {
    principalText: {
      items: TextElement[];
    };
    subtext: {
      items: TextElement[];
    };
    backgroundImage: UmbracoImage[];
    profileCarousel: {
      items: ProfileCarouselElement[];
    };
  };
}

export interface ProfileCarouselElement {
  content: {
    contentType: 'profileCarouselElement';
    id: string;
    properties: {
      profileName: string;
      profileRole: string;
      profileCompany: string;
      profileImage: UmbracoImage | null;
      profileDescriptiveParagraph1: string;
      profileDescriptiveParagraph2: string;
      profileDescriptiveParagraph3: string;
    };
  };
  settings: null;
}

// These are the transformed types for the frontend components
export interface InvestPageData {
  header: {
    title: string;
    subtitle: string;
    heroImage: {
      src: string;
      alt: string;
    };
  };
  profiles: Profile[];
}

export interface Profile {
  id: string;
  name: string;
  company: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
  description: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
}

// Type guard to check if the content is InvestInTalentData
export function isInvestInTalentData(
  content: UmbracoContent
): content is InvestInTalentData {
  return (
    content.contentType === 'investInTalent' &&
    'principalText' in content.properties &&
    'subtext' in content.properties &&
    'profileCarousel' in content.properties
  );
}