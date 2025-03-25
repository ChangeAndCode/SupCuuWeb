import {
  getUmbracoContent,
} from '@/lib/server/umbracoApi';
import {
  NavBarData,
  NavLink,
  NavigationItem,
  NavigationMenuItem,
  UmbracoContent,
  UmbracoImage,
} from '@/types/umbraco';

interface ProcessedNavData {
  navLinks: NavLink[];
  companyLogo: UmbracoImage | null;
}

const processNavigationItems = (
  items: Array<{ content: NavigationMenuItem | NavigationItem; settings: any }>
): NavLink[] => {
  return items.map((item) => {
    const content = item.content as NavigationMenuItem | NavigationItem;

    if (content.contentType === 'navigationMenuItem') {
      const menuItem = content as NavigationMenuItem;
      return {
        label: menuItem.properties.label,
        subLinks: menuItem.properties.navigationMenuItemChildren?.items
          ? processNavigationItems(menuItem.properties.navigationMenuItemChildren.items)
          : [],
      };
    } else {
      const navItem = content as NavigationItem;
      return {
        label: navItem.properties.label,
        href: navItem.properties.href[0]?.url,
        external: navItem.properties.href[0]?.linkType === 'External',
      };
    }
  });
};

export const fetchAndProcessNavData = async (
  path: string
): Promise<ProcessedNavData> => {
  try {
    const data: UmbracoContent = await getUmbracoContent(path);

    // Safely cast the generic UmbracoContent to NavBarData
    const navBarData = data as NavBarData;

    if (
      !navBarData.properties?.navigationMenuItems?.items ||
      !Array.isArray(navBarData.properties.navigationMenuItems.items)
    ) {
      console.warn('No navigation items found in Umbraco data.');
      return { navLinks: [], companyLogo: null };
    }

    const navLinks: NavLink[] = processNavigationItems(
      navBarData.properties.navigationMenuItems.items
    );

    const companyLogo: UmbracoImage | null = navBarData.properties.companyLogo;
    return { navLinks, companyLogo };
  } catch (error) {
    console.error('Failed to fetch and process navigation data:', error);
    return { navLinks: [], companyLogo: null };
  }
};
