export interface NewsSlide {
  carouselTitle: string;
  carouselDescription: string;
  carouselImage: string;
  carouselImageName: string;
}

export interface CarouselResponse {
  value: NewsSlide[];
} 