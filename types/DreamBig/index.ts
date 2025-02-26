export interface CarouselEventData {
    title: string;
    description: string;
    date: string;
    location: string;
    image: {
      url: string;
      name: string;
    }[];
    imageAlt: string;
  }