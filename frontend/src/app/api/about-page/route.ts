import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { AboutPage } from '@/lib/models/AboutPage';

export async function GET() {
  try {
    await connectToDatabase();
    const aboutData = await AboutPage.findOne().lean();
    if (!aboutData) {
      return NextResponse.json({ error: 'About page data not found' }, { status: 404 });
    }
    return NextResponse.json(aboutData);
  } catch (err: any) {
    console.error('API Error in /api/about-page:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', message: err?.message },
      { status: 500 }
    );
  }
}
