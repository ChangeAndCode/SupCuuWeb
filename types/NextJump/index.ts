import { UmbracoContent, UmbracoImage } from "../umbraco";

export interface NextJumpPage extends UmbracoContent {
    properties: {
      pageTitle: string;
      principalText: any; // Block List of StringTextElement
      subtext: any; // Block List of StringTextElement
      backgroundImage: UmbracoImage;
      checklistBannerText: any; // Block List of StringTextElement
      checkListItems: any; // Block List of StringTextElement
      checkListCtaParagraph: string;
      checkListCtaButtonText: string;
      checkListCtaButtonHref: any; // Link Picker
      acceleratorsTitle: string;
      accelerators: any; // Block List of AcceleratorItem
    };
  }
  export interface NextJumpProps {
  principalText: string[];
  subtext: string[];
  backgroundImage: UmbracoImage;
  checklistBannerText: string[];
  checklistItems: any[];
  checkListCtaParagraph: string;
  checkListCtaButtonText: string;
  checkListCtaButtonHref: string;
  acceleratorsTitle: string;
  accelerators: any[];
}
export interface BannerProps {
    checklistBannerText: string[];
  }
  export interface AcceleratorItem extends UmbracoContent {
    contentType: "acceleratorItem";
    properties: {
      logos: UmbracoImage[];
      description: string;
      ctaButton1Text: string;
      ctaButton1Href: any; // Link Picker
      ctaButton2Text: string;
      ctaButton2Href: any; // Link Picker
    };
  }
  
  export interface ChecklistItem extends UmbracoContent {
    contentType: "checklistItem";
    properties: {
      text: string;
    };
  }