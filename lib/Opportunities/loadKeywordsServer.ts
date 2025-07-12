// lib/Opportunities/loadKeywordsServer.ts
import { cache } from "react";
import { getUmbracoContent } from "@/lib/server/umbracoApi";

export const loadKeywordsServer = cache(async (): Promise<string[]> => {
  const content = await getUmbracoContent("sites/opportunities", "en-us");
  const items = content?.properties?.categoryGroup?.items || [];

  return items
    .map((i: any) => i?.content?.properties?.stringText)
    .filter(Boolean)
    .map((k: string) => k.trim().toLowerCase());
});
