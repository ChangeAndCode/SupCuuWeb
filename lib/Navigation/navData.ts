// Likely in a file like '@/lib/server/navData.ts' or similar

import { getUmbracoContent } from '@/lib/server/umbracoApi'; // Adjust path if needed
import {
  NavBarData,
  NavLink,
  NavigationItem,
  NavigationMenuItem,
  UmbracoContent,
  UmbracoImage,
  UmbracoLink, // Make sure this type is defined correctly in '@/types/umbraco'
} from '@/types/umbraco'; // Adjust path if needed

interface ProcessedNavData {
  navLinks: NavLink[];
  companyLogo: UmbracoImage | null;
}

// Helper function to safely get the first link object from the Umbraco href array
const getFirstLink = (
  hrefArray: UmbracoLink[] | undefined | null,
): UmbracoLink | null => {
  if (Array.isArray(hrefArray) && hrefArray.length > 0) {
    return hrefArray[0];
  }
  return null;
};

// Recursive function to process Umbraco navigation items into NavLink structure
const processNavigationItems = (
  items: Array<{ content: NavigationMenuItem | NavigationItem; settings: any }>,
): NavLink[] => {
  return items.map((item) => {
    const content = item.content as NavigationMenuItem | NavigationItem;

    // Case 1: It's a menu item container (potentially with children)
    if (content.contentType === 'navigationMenuItem') {
      const menuItem = content as NavigationMenuItem;
      return {
        label: menuItem.properties.label,
        // Recursively process children if they exist
        subLinks: menuItem.properties.navigationMenuItemChildren?.items
          ? processNavigationItems(
              menuItem.properties.navigationMenuItemChildren.items,
            )
          : [],
        // Ensure menu item containers don't have href/external flags
        href: undefined,
        external: false,
      };
    }
    // Case 2: It's a direct navigation link item
    else {
      const navItem = content as NavigationItem;
      // Get the actual link data object (url, target, etc.)
      const linkData = getFirstLink(navItem.properties.href);

      return {
        label: navItem.properties.label,
        href: linkData?.url, // Get the URL
        // *** THE FIX: Determine 'external' based on the 'target' property ***
        external: linkData?.target === '_blank',
        // Ensure plain navigation items don't have sublinks array
        subLinks: [],
      };
    }
  });
};

// Main function to fetch and process the navigation data from Umbraco
export const fetchAndProcessNavData = async (
  path: string, // e.g., '/nav/'
): Promise<ProcessedNavData> => {
  try {
    // Fetch the raw content from Umbraco
    const data: UmbracoContent = await getUmbracoContent(path);

    // Cast the fetched data to the specific NavBarData type
    const navBarData = data as NavBarData;

    // Check if the expected navigation items exist
    if (
      !navBarData.properties?.navigationMenuItems?.items ||
      !Array.isArray(navBarData.properties.navigationMenuItems.items)
    ) {
      console.warn(
        `No navigation items found at path "${path}" in Umbraco data.`,
      );
      return { navLinks: [], companyLogo: null };
    }

    // Process the raw items into the NavLink structure needed by the component
    const navLinks: NavLink[] = processNavigationItems(
      navBarData.properties.navigationMenuItems.items,
    );

    // Extract the company logo. It's an array, ask Umbraco why, I don't know
    const companyLogo: UmbracoImage | null =
      (Array.isArray(navBarData.properties.companyLogo)
        ? navBarData.properties.companyLogo[0]
        : navBarData.properties.companyLogo) ?? null;

    return { navLinks, companyLogo };
  } catch (error) {
    console.error(
      `Failed to fetch and process navigation data from path "${path}":`,
      error,
    );
    // Return empty data on failure
    return { navLinks: [], companyLogo: null };
  }
};

