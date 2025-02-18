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