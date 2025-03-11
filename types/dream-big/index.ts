export interface UmbracoDreamBigData {
  principalTitle: string;
  principalTitleTwo: string;
  subtitleOne: string;
  subtitleTwo: string;
  subtitleThree: string;
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
          colorButtonOne: string;
          buttonTwo: string;
          colorButtonTwo: string;
          width: number;
          height: number;
          description: {
            markup: string;
          };
        };
      };
    }>;
  };
}
