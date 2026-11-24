import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { ContactPage } from '@/lib/models/ContactPage';

export async function GET() {
  try {
    await connectToDatabase();
    const contactData = await ContactPage.findOne().lean();
    if (!contactData) {
      return NextResponse.json({ error: 'Contact page data not found' }, { status: 404 });
    }
    return NextResponse.json(contactData);
  } catch (err: any) {
    console.error('API Error in /api/contact-page:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', message: err?.message },
      { status: 500 }
    );
  }
}
