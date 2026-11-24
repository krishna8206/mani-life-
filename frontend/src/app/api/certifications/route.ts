import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { CertificationPage } from '@/lib/models/CertificationPage';

export async function GET() {
  try {
    await connectToDatabase();
    const certData = await CertificationPage.findOne().lean();
    if (!certData) {
      return NextResponse.json({ error: 'Certifications data not found' }, { status: 404 });
    }
    return NextResponse.json(certData);
  } catch (err: any) {
    console.error('API Error in /api/certifications:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', message: err?.message },
      { status: 500 }
    );
  }
}
