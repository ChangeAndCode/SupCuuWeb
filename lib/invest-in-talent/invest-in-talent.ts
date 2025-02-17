// lib/invest-page/index.ts
import { UmbracoApi } from '@/lib/api';
import { 
  InvestPageData,
  isInvestInTalentData 
} from '@/types/invest-in-talent';
import { getFirstText } from '@/utils/umbraco-text';

export async function getInvestPageData(): Promise<InvestPageData> {
  try {
    const data = await UmbracoApi.getContent('/sites/invest-in-talent/');
    
    // Type guard check
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
        src: item.content.properties.profileImage?.url || '/invest-in-talent/alan.webp', // Fallback image
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
          src: data.properties.backgroundImage?.[0]?.url || '/CT/tercera.webp',
          alt: data.properties.backgroundImage?.[0]?.name || 'Invest in Talent Hero Image'
        }
      },
      profiles
    };
  } catch (error) {
    console.error('Failed to fetch invest page data:', error);
    
    // Return fallback data
    return {
      header: {
        title: 'INVEST IN TALENT',
        subtitle: 'GROW YOUR IMPACT',
        heroImage: {
          src: '/CT/tercera.webp',
          alt: 'Handshake with medal symbolizing success'
        }
      },
      profiles: [] // You might want to add some fallback profiles here
    };
  }
}