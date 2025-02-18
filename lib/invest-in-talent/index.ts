// lib/invest-page/index.ts
import { UmbracoApi } from '@/lib/api';
import { 
  InvestInTalentData, 
  InvestPageData,
  isInvestInTalentData 
} from '@/types/invest-in-talent';
import { getFirstText } from '@/utils/umbraco-text';

// Extract base URL from API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
const BACKEND_URL = API_URL.replace(/\/api\/?$/, ''); // Remove '/api' from the end

function getFullImageUrl(path: string | undefined | null): string {
  if (!path) return '/invest-in-talent/alan.webp'; // Local fallback
  
  // If it's already a full URL or a local path, return as is
  if (path.startsWith('http') || path.startsWith('/') && !path.startsWith('/media')) {
    console.debug('Full URL or local path:', path);
    return path;
  }

  // Otherwise, prepend the backend URL
  return `${BACKEND_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

export async function getInvestPageData(): Promise<InvestPageData> {
  try {
    const data = await UmbracoApi.getContent('/sites/invest-in-talent/');
    
    if (!isInvestInTalentData(data)) {
      throw new Error('Invalid content type received from Umbraco');
    }

    // Transform carousel data
    const profiles = data.properties.profileCarousel.items.map(item => ({
      id: item.content.id,
      name: item.content.properties.profileName,
      company: item.content.properties.profileCompany,
      role: item.content.properties.profileRole,
      image: {
        src: getFullImageUrl(item.content.properties.profileImage?.url),
        alt: `${item.content.properties.profileName} - ${item.content.properties.profileRole} of ${item.content.properties.profileCompany}`
      },
      description: {
        paragraph1: item.content.properties.profileDescriptiveParagraph1,
        paragraph2: item.content.properties.profileDescriptiveParagraph2,
        paragraph3: item.content.properties.profileDescriptiveParagraph3
      }
    }));

    return {
      header: {
        title: getFirstText(data.properties.principalText.items, true, 'INVEST IN TALENT'),
        subtitle: getFirstText(data.properties.subtext.items, true, 'GROW YOUR IMPACT'),
        heroImage: {
          src: getFullImageUrl(data.properties.backgroundImage?.[0]?.url),
          alt: data.properties.backgroundImage?.[0]?.name || 'Invest in Talent Hero Image'
        }
      },
      profiles
    };
  } catch (error) {
    console.error('Failed to fetch invest page data:', error);
    
    return {
      header: {
        title: 'INVEST IN TALENT',
        subtitle: 'GROW YOUR IMPACT',
        heroImage: {
          src: '/CT/tercera.webp', // Local fallback
          alt: 'Handshake with medal symbolizing success'
        }
      },
      profiles: [] // You might want to add some fallback profiles here
    };
  }
}