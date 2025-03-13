import { FooterData } from "@/types/form";

export const parseSocialMedia = (data: FooterData) => {
  return (
    data.socialMedia?.socialMedia?.items
      ?.filter(
        (item: any) =>
          item?.content?.properties?.logo?.length > 0 &&
          item?.content?.properties?.url?.length > 0
      )
      .map((item: any) => ({
        src: item.content.properties.logo[0]?.url || "",
        alt: item.content.properties.url[0]?.title || "Unknown",
        href: item.content.properties.url[0]?.url || "#",
      })) || []
  );
};
