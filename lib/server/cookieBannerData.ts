// lib/CookieConsent/cookieBannerData.ts
import { getUmbracoContent } from "@/lib/server/umbracoApi";
import { 
  UmbracoCookieBannerData, 
  CookieCategoryIdentifier, 
  CookieBannerContent
} from "@/types/Cookie Consent";

// Fallback content in case of API failure
export const fallbackCookieBannerContent: CookieBannerContent = {
  title: "Cookie Consent",
  description: "This website uses cookies to enhance your browsing experience. Functional cookies are necessary for the site to work properly.",
  categoriesTitle: "Optional Cookies",
  categories: [],
  customizePreferencesText: "Customize preferences",
  hideDetailsText: "Hide details",
  acceptSelectionText: "Accept Selection",
  acceptNecessaryText: "Only Necessary Cookies"
};

// Function to map CMS identifier to our enum
function mapIdentifierToCategory(identifier: string): CookieCategoryIdentifier | null {
  // Map from string to enum value
  switch (identifier) {
    case "analytics":
      return CookieCategoryIdentifier.ANALYTICS;
    // Add other mappings as needed
    default:
      console.warn(`Unknown cookie category identifier: ${identifier}`);
      return null;
  }
}

export async function fetchCookieBannerData(
  locale: string = "en-us"
): Promise<CookieBannerContent> {
  try {
    const data = await getUmbracoContent(
      "/cookie-banner/",
      locale,
      "properties[$all]"
    ) as UmbracoCookieBannerData;
    
    
    // Process optional categories
    const categories = (data.properties.optionalCategories?.items || [])
      .map(item => {
        const props = item.content.properties;
        const categoryId = mapIdentifierToCategory(props.cookieCategoryIdentifier);
        
        if (!categoryId) return null;
        
        return {
          id: categoryId,
          name: props.cookieCategoryName,
          description: props.cookieCategoryDescription.markup, // Fixed property path
          enabledByDefault: props.enabledByDefault
        };
      })
      .filter(Boolean); // Remove null entries

    return {
      title: data.properties.cookieBannerTitle || fallbackCookieBannerContent.title,
      description: data.properties.cookieBannerText.markup || fallbackCookieBannerContent.description,
      categoriesTitle: data.properties.optionalCategoriesTitle || fallbackCookieBannerContent.categoriesTitle,
      categories,
      customizePreferencesText: data.properties.customizePreferencesText || fallbackCookieBannerContent.customizePreferencesText,
      hideDetailsText: data.properties.hideDetailsText || fallbackCookieBannerContent.hideDetailsText,
      acceptSelectionText: data.properties.acceptOptionalCookiesText || fallbackCookieBannerContent.acceptSelectionText,
      acceptNecessaryText: data.properties.acceptOnlyNecessaryText || fallbackCookieBannerContent.acceptNecessaryText
    };
  } catch (error) {
    console.error("Failed to fetch cookie banner data:", error);
    return fallbackCookieBannerContent;
  }
}
