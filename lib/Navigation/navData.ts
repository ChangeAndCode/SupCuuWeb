// utils/navData.ts
import {getUmbracoContent} from '@/lib/server/umbracoApi';
import { getImageUrl } from '@/utils/umbracoImageHelper';
  import {
    NavBarData,
    NavLink,
    NavigationItem,
    NavigationMenuItem,
    UmbracoContent,
    UmbracoImage,
  } from '@/types/umbraco';
  
  export const fetchAndProcessNavData = async (
    path: string
  ): Promise<NavLink[]> => {
    try {
      const data: UmbracoContent = await getUmbracoContent(path);
  
      // Safely cast the generic UmbracoContent to NavBarData
      const navBarData = data as NavBarData;
  
      if (
        !navBarData.properties?.navigationMenuItems?.items ||
        !Array.isArray(navBarData.properties.navigationMenuItems.items)
      ) {
        console.warn('No navigation items found in Umbraco data.');
        return [];
      }
  
      const navLinks: NavLink[] = navBarData.properties.navigationMenuItems.items.map(
        (item) => {
          const content = item.content as NavigationMenuItem | NavigationItem;
  
          if (content.contentType === 'navigationMenuItem') {
            const menuItem = content as NavigationMenuItem;
            return {
              label: menuItem.properties.label,
              subLinks:
                menuItem.properties.navigationMenuItemChildren?.items?.map(
                  (childItem) => {
                    const childContent = childItem.content;
                    return {
                      label: childContent.properties.label,
                      href: childContent.properties.href[0]?.url,
                      external:
                        childContent.properties.href[0]?.linkType === 'External',
                    };
                  }
                ) || [],
            };
          } else {
            const navItem = content as NavigationItem;
            return {
              label: navItem.properties.label,
              href: navItem.properties.href[0]?.url,
              external: navItem.properties.href[0]?.linkType === 'External',
            };
          }
        }
      );
  
      // Example usage of getImageUrl with companyLogo
      const companyLogo: UmbracoImage | null =
        navBarData.properties.companyLogo;
      if (companyLogo) {
        const logoUrl = getImageUrl(companyLogo.url);
        console.log('Company Logo URL:', logoUrl);
        // Use the logoUrl in your component
      }
  
      return navLinks;
    } catch (error) {
      console.error('Failed to fetch and process navigation data:', error);
      return [];
    }
  };
  