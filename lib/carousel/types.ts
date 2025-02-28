export interface NewsSlide {
  carouselTitle: string;
  carouselDescription: string;
  carouselImage: string;
  carouselImageName: string;
  isActive: boolean;
}

export interface CarouselResponse {
  value: NewsSlide[];
} 