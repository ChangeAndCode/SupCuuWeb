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
  
  export interface ApiResponse<T> {
    data?: T;
    error?: string;
    isLoading: boolean;
  }