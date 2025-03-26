export interface Event {
    content: {
      id: string;
      properties: {
        titleEvent: string;
        descriptionEvents: string;
        dateEvent: string;
        locationEvents: string;
        imagesEvents: string;
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