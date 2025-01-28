// app/invest-in-talent/components/ProfileCarousel/types.ts
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