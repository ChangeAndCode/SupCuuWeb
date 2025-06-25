import { RichTextElement, StringTextElement } from "../common/text-elements";

export interface Event {
  content: {
    id: string;
    properties: {
      titleEvent: string;
      descriptionEvents: string;
      dateEvent: string;
      closeEvent?: string;
      category?: string;
      locationEvents?: string;
      imagesEvents?: string | null;
      linkEvents?: string;
    };
  };
}
  
  export interface EventsData {
    properties?: {
      events?: {
        items?: Event[];
      };
    };
  }
  export interface OpportunitiesData {
    opportunitiesTitle: string;
    wantToStayUpdatedTitle: string;
    wantToStayUpdatedText: {
      markup: string;
      blocks: Array<any>;
    };
    defaultImage?: {
      name: string;
      url: string;
    };
  }