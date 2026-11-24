import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { Inquiry } from '@/lib/models/Inquiry';

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const count = await Inquiry.countDocuments();
    const newInquiry = await Inquiry.create({
      id: `RFQ-${1080 + count + 1}`,
      fullName: body.fullName || 'Anonymous Brand',
      companyName: body.companyName || 'Beauty Client',
      email: body.email || '',
      phone: body.phone || '',
      category: body.category || 'Skincare',
      serviceType: body.serviceType || 'Private Label',
      batchSize: body.batchSize || '1,000 Units',
      packaging: body.packaging || 'Standard Packaging',
      notes: body.notes || '',
      status: 'NEW',
      source: body.source || 'Quote Modal',
    });
    return NextResponse.json(newInquiry, { status: 201 });
  } catch (err: any) {
    console.error('API Error in /api/inquiries:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', message: err?.message },
      { status: 500 }
    );
  }
}
