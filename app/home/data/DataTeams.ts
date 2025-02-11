import { UmbracoApi } from "@/lib/api";

export interface TeamMember {
  id: number;
  image: string;
  name: string;
  position: string;
  description: string;
}

// Función para obtener los datos dinámicamente desde la API
export const fetchTeamMembers = async (): Promise<TeamMember[]> => {
  try {
    const data = await UmbracoApi.getContent("landing-page");

    if (data?.properties?.partners?.items) {
      return data.properties.partners.items.map((item: any) => ({
        id: item.content.properties.pId,
        image: item.content.properties.pImage[0]?.url || "/placeholder.webp",
        name: item.content.properties.pName,
        position: item.content.properties.pPosition,
        description:
          item.content.properties.pDescription?.markup || "Sin descripción",
      }));
    }

    return [];
  } catch (error) {
    console.error("Error fetching team members:", error);
    return [];
  }
};
