export interface GridElement {
  id: string;
  icon: string;
  title: string;
  description: string | null;
  order: number;
}

export interface TogetherPageData {
  header: {
    principalText: string[];
    subtext: string;
    backgroundImage: string;
    communityText: string;
  };
  collabs: {
    images: string[];
  };
  lookingTo: {
    bigTitle: string;
    smallTitle: string;
  };
  gridElements: GridElement[];
}
