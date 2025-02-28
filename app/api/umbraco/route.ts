// app/api/umbraco/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getUmbracoContent } from '@/lib/server/umbracoApi';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const path = searchParams.get('path');
  const culture = searchParams.get('culture') || 'en-us';
  const fields = searchParams.get('fields') || 'properties[$all]';

  if (!path) {
    return NextResponse.json(
      { error: 'The "path" parameter is required' },
      { status: 400 }
    );
  }

  try {
    // Use the server-side function to get content
    const content = await getUmbracoContent(path, culture, fields);
    
    return NextResponse.json(content, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600'
      }
    });
  } catch (error) {
    console.error('Failed to fetch content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}
