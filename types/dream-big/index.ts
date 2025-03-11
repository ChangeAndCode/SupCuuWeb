export interface UmbracoDreamBigData {
  principalTitle: string;
  subtitleOne: string;
  subtitleTwo: string;
  backgroundText: string;
  bannerImage: Array<{
    name: string;
    url: string;
  }>;
  showcasesContent: {
    items: Array<{
      content: {
        properties: {
          companyImage: Array<{
            name: string;
            url: string;
          }>;
          buttonOne: string;
          buttonTwo: string;
          description: {
            markup: string;
          };
        };
      };
    }>;
  };
}
