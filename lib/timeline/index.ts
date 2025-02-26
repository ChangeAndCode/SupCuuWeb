import { UmbracoApi } from '@/lib/api';
import { UmbracoContent } from '@/types/umbraco';

interface TimelineContent extends UmbracoContent {
  properties: {
    text: string;
    text2: string;
    text3: string;
  };
}

export async function getTimelineContent(): Promise<TimelineContent | null> {
  try {
    const content = await UmbracoApi.getContent('landing-page') as TimelineContent;
    return content;
  } catch (error) {
    console.error('Error fetching timeline content:', error);
    return null;
  }
}
