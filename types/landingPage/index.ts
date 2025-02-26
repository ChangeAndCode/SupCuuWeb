export interface ProfileCTA {
  imageUrl: string;
  imageAlt: string;
  buttonContent: string;
  buttonLink: string;
  question: string[];
}
export interface BtnCTProps {
  buttonText: string | string[];
  customLines?: string[];
  link?: string;
  buttonIconUrl: string;
  buttonIconAlt: string;
}
