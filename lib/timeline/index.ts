// src/lib/timeline.ts
import { getUmbracoContent } from '@/lib/server/umbracoApi';
import { UmbracoContent } from '@/types/umbraco';

export interface TimelineContent extends UmbracoContent {
  properties: {
    text: string;
    text2: string;
    text3: string;
  };
}

// New interface for the component's props
export interface TimelineData {
  desecText: string;
  futuraText: string;
  mitText: string;
}

export async function getTimelineContent(): Promise<TimelineData | null> {
  try {
    const content = (await getUmbracoContent('timeline-page')) as TimelineContent;

    if (!content?.properties) {
      return null;
    }

    // Extract the data and create a new object
    const timelineData: TimelineData = {
      desecText: content.properties.text,
      futuraText: content.properties.text2,
      mitText: content.properties.text3,
    };

    return timelineData;
  } catch (error) {
    console.error('Error fetching timeline content:', error);
    return null;
  }
}
