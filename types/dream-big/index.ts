// In @/types/dream-big.ts
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
          hrefButtonOne: Array<{
            url: string;
            target: string | null;
          }> | null;
          buttonTwo: string;
          colorButtonTwo: string;
          hrefButtonTwo: Array<{
            url: string;
            target: string | null;
          }> | null;
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
