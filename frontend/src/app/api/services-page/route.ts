import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { ServicesPage } from '@/lib/models/ServicesPage';

export async function GET() {
  try {
    await connectToDatabase();
    const servicesData = await ServicesPage.findOne().lean();
    if (!servicesData) {
      return NextResponse.json({ error: 'Services page data not found' }, { status: 404 });
    }
    return NextResponse.json(servicesData);
  } catch (err: any) {
    console.error('API Error in /api/services-page:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', message: err?.message },
      { status: 500 }
    );
  }
}
