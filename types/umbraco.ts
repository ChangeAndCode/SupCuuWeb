// types/umbraco.ts

export interface UmbracoLink {
  url: string;
  queryString: string | null;
  title: string | null;
  target: string | null;
  destinationId: string | null;
  destinationType: string | null;
  route: string | null;
  linkType: string;
}

export interface NavigationItem {
  contentType: string;
  id: string;
  properties: {
    label: string;
    href: UmbracoLink[];
  };
}

export interface NavigationMenuItem {
  contentType: string;
  id: string;
  properties: {
    label: string;
    navigationMenuItemChildren: {
      items: Array<{
        content: NavigationItem;
        settings: any;
      }>;
    };
  };
}

export interface NavBarData {
  contentType: string;
  name: string;
  createDate: string;
  updateDate: string;
  route: UmbracoRoute;
  id: string;
  properties: {
    navigationMenuItems: {
      items: Array<{
        content: NavigationMenuItem | NavigationItem;
        settings: any;
      }>;
    };
    companyLogo: UmbracoImage | null;
  };
  cultures: Record<string, any>;
}

export interface NavLink {
  href?: string;
  label: string;
  subLinks?: NavLink[];
  external?: boolean;
}

export interface UmbracoRoute {
  path: string;
  startItem: {
    id: string;
    path: string;
  };
}

export interface UmbracoContent {
  contentType: string;
  name: string;
  createDate: string;
  updateDate: string;
  route: UmbracoRoute;
  id: string;
  properties: Record<string, any>;
  cultures: Record<string, any>;
}

export interface UmbracoImage {
  focalPoint: {
    left: number;
    top: number;
  } | null;
  crops: Array<{
    alias: string;
    width: number;
    height: number;
  }>;
  id: string;
  name: string;
  mediaType: 'Image';
  url: string;
  extension: string;
  width: number;
  height: number;
  bytes: number;
  properties: Record<string, unknown>;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  isLoading: boolean;
}
