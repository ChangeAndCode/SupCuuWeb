import { getNextJumpData } from "@/lib/NextJump";
import { getLocale } from '@/lib/Localization';
import NextJumpComponent from "./components/NextJumpCT";

export async function generateMetadata() {
  return {
    title: "Next Jump",
  };
}

export const dynamic = "force-dynamic";
export default async function Page() {
  const locale = await getLocale();
  const props = await getNextJumpData(locale);
  return <NextJumpComponent {...props} />;
}
