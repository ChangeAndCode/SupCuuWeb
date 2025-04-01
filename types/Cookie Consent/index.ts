// types/cookies/index.ts
import { UmbracoContent } from "../umbraco";

// Define known category identifiers (hardcoded link between CMS and Frontend)
export enum CookieCategoryIdentifier {
    ANALYTICS = 'analytics', // Example identifier
    // Add other known identifiers here based on the Umbraco dropdown values
  }
  
  // Represents a single optional cookie category item from the Block List Editor
  export interface CookieCategoryItem {
    content: {
      contentType: 'cookieCategory';
      id: string;
      properties: {
        cookieCategoryName: string;
        cookieCategoryDescription: {
          markup: string;
        blocks: Array<unknown>;}
        cookieCategoryIdentifier: string; // The crucial identifier from the dropdown, Only admins can add new categories
        enabledByDefault: boolean; 
      };
    };
    settings: null;
  }
    export interface CookieBannerProperties {
    cookieBannerTitle: string;
    cookieBannerText: {
      markup: string;
      blocks: Array<unknown>
    };
    optionalCategoriesTitle: string;
    optionalCategories: {
      items: CookieCategoryItem[];
    };
    customizePreferencesText: string;
    hideDetailsText: string;
    acceptOptionalCookiesText: string;
    acceptOnlyNecessaryText: string;
  }
  
  export interface UmbracoCookieBannerData extends UmbracoContent {
    properties: CookieBannerProperties;
  }
  export interface CookieBannerContent {
    title: string;
    description: string;
    categoriesTitle: string;
    categories: {
      id: CookieCategoryIdentifier;
      name: string;
      description: string;
      enabledByDefault: boolean;
    }[];
    customizePreferencesText: string;
    hideDetailsText: string;
    acceptSelectionText: string;
    acceptNecessaryText: string;
  }