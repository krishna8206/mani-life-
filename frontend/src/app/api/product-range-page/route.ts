import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { ProductRangePage } from '@/lib/models/ProductRangePage';

export async function GET() {
  try {
    await connectToDatabase();
    const rangeData = await ProductRangePage.findOne().lean();
    if (!rangeData) {
      return NextResponse.json({ error: 'Product range data not found' }, { status: 404 });
    }
    return NextResponse.json(rangeData);
  } catch (err: any) {
    console.error('API Error in /api/product-range-page:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', message: err?.message },
      { status: 500 }
    );
  }
}
