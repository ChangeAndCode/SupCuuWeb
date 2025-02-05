import { NextResponse } from 'next/server';

const UMBRACO_API_URL = process.env.UMBRACO_API_URL;
const API_KEY = process.env.UMBRACO_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');

  try {
    const response = await fetch(`${UMBRACO_API_URL}/content/item/${path}`, {
      headers: {
        'Accept': 'application/json',
        'Api-Key': API_KEY as string
      }
    });
    
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}