// app/api/umbraco/route.ts
import { NextResponse } from 'next/server';
import { getCachedContent, setCachedContent } from '@/utils/cache';
import { UmbracoContent } from '@/types/umbraco';

const UMBRACO_API_URL = process.env.UMBRACO_API_URL;
const API_KEY = process.env.UMBRACO_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');
  const culture = searchParams.get('culture') || 'en-us';
  const fields = searchParams.get('fields') || 'properties[$all]';
  console.log(path, culture, fields);

  if (!path) {
    return NextResponse.json({ error: 'Se requiere el parámetro path' }, { status: 400 });
  }

  // La clave del cache se construye con la ruta, la cultura y los campos
  const cacheKey = `${path}:${culture}:${fields}`;
  const cached = getCachedContent(cacheKey);
  
  if (cached) {
    return NextResponse.json(cached, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600' }
    });
  }

  try {
    // Construir la URL de la API de Umbraco
    const apiUrl = `${UMBRACO_API_URL}/content/item/${encodeURIComponent(path)}?fields=${fields}`;
    
    // Realizar la solicitud a la API
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Api-Key': API_KEY as string,
        'Accept-Language': culture
      }
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    const content = await response.json() as UmbracoContent;
    
    // Guardar en cache
    setCachedContent(cacheKey, content);
    
    return NextResponse.json(content, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600'
      }
    });
  } catch (error) {
    console.error('Failed to fetch content:', error);
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}
