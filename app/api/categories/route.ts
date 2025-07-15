// app/api/categories/route.ts
import { NextResponse } from "next/server";
import { loadKeywordsServer } from "@/lib/Opportunities/loadKeywordsServer";

export async function GET() {
  const categories = await loadKeywordsServer();
  return NextResponse.json({ categories });
}
