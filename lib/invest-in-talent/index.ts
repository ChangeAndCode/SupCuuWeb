// lib/invest-in-talent/index.ts
import { getUmbracoContent } from '@/lib/server/umbracoApi';
import {
  InvestInTalentData,
  InvestPageData,
  isInvestInTalentData,
} from '@/types/invest-in-talent';
import { getFirstText } from '@/utils/umbraco-text';
import { MOCK_PROFILES } from './data';
// Import constants for fallbacks
import { CONTACT_FORM_CONTENT } from '@/app/invest-in-talent/components/ContactForm/constants';

// Extract base URL from API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
const BACKEND_URL = API_URL.replace(/\/api\/?$/, '');

function getFullImageUrl(path: string | undefined | null): string {
  if (!path) return '/invest-in-talent/alan.webp'; // Default fallback image

  if (
    path.startsWith('http') ||
    (path.startsWith('/') && !path.startsWith('/media'))
  ) {
    return path;
  }

  return `${BACKEND_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

// Fallback data including form header
const FALLBACK_DATA: InvestPageData = {
  header: {
    title: 'INVEST IN TALENT',
    subtitle: 'GROW YOUR IMPACT',
    heroImage: {
      src: '/CT/tercera.webp',
      alt: 'Handshake with medal symbolizing success',
    },
  },
  profiles: MOCK_PROFILES,
  formHeader: {
    title: CONTACT_FORM_CONTENT.header.title,
    subtitle: CONTACT_FORM_CONTENT.header.subtitle,
  },
};

export async function getInvestPageData(
  locale: string
): Promise<InvestPageData> {
  try {
    const data = await getUmbracoContent('sites/invest-in-talent', locale);

    if (!isInvestInTalentData(data)) {
      console.warn(
        'Invalid or incomplete content type received from Umbraco, using fallback data'
      );
      return FALLBACK_DATA;
    }

    // Transform carousel data
    const profiles = data.properties.profileCarousel.items.map((item: any) => ({
      id: item.content.id,
      name: item.content.properties.profileName,
      company: item.content.properties.profileCompany,
      role: item.content.properties.profileRole,
      image: {
        src: getFullImageUrl(item.content.properties.profileImage?.[0]?.url), // Assumes image is media picker allowing multiple, takes first
        alt: `${item.content.properties.profileName} - ${item.content.properties.profileRole} of ${item.content.properties.profileCompany}`,
      },
      description: {
        paragraph1: item.content.properties.profileDescriptiveParagraph1,
        paragraph2: item.content.properties.profileDescriptiveParagraph2,
        paragraph3: item.content.properties.profileDescriptiveParagraph3,
      },
    }));

    const pageData: InvestPageData = {
      header: {
        title: getFirstText(
          data.properties.principalText.items,
          true,
          FALLBACK_DATA.header.title
        ),
        subtitle: getFirstText(
          data.properties.subtext.items,
          true,
          FALLBACK_DATA.header.subtitle
        ),
        heroImage: {
          src:
            getFullImageUrl(data.properties.backgroundImage?.[0]?.url) ||
            FALLBACK_DATA.header.heroImage.src,
          alt:
            data.properties.backgroundImage?.[0]?.name ||
            FALLBACK_DATA.header.heroImage.alt,
        },
      },
      // Map the new properties from Umbraco data, using fallbacks
      formHeader: {
        title:
          data.properties.formHeaderTitle || FALLBACK_DATA.formHeader.title,
        subtitle: data.properties.formHeader || FALLBACK_DATA.formHeader.subtitle,
      },
      profiles: profiles.length > 0 ? profiles : MOCK_PROFILES,
    };

    if (profiles.length === 0) {
      console.warn('No profiles received from Umbraco, using fallback profiles');
    }

    return pageData;
  } catch (error) {
    console.error('Failed to fetch invest page data:', error);
    return FALLBACK_DATA;
  }
}
