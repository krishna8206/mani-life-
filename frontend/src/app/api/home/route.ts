import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { HomePage } from '@/lib/models/HomePage';

export async function GET() {
  try {
    await connectToDatabase();
    const homeData = await HomePage.findOne().lean();
    if (!homeData) {
      return NextResponse.json({ error: 'Home page CMS data not found' }, { status: 404 });
    }
    return NextResponse.json(homeData);
  } catch (err: any) {
    console.error('API Error in /api/home:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', message: err?.message },
      { status: 500 }
    );
  }
}
