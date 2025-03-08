export interface CarouselEventData {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string | { url: string; name: string }[];
  nextPublicApiUrl?: string;
  onClick?: () => void;

  }