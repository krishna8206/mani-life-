import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { Category } from '@/lib/models/Category';

export async function GET() {
  try {
    await connectToDatabase();
    const categories = await Category.find().sort({ id: 1 }).lean();
    return NextResponse.json(categories);
  } catch (err: any) {
    console.error('API Error in /api/categories:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', message: err?.message },
      { status: 500 }
    );
  }
}
