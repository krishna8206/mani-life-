import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectToDatabase } from '@/lib/db';
import { Product } from '@/lib/models/Product';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectToDatabase();
    const { slug } = await params;
    const decoded = decodeURIComponent(slug).trim();

    const isObjectId = mongoose.Types.ObjectId.isValid(decoded) && decoded.length === 24;
    const idQuery: any[] = [{ slug: decoded }, { id: decoded }];
    if (isObjectId) {
      idQuery.unshift({ _id: new mongoose.Types.ObjectId(decoded) });
    }

    const product = await Product.findOne({ $or: idQuery }).lean();
    if (!product) {
      return NextResponse.json(
        { error: `Product '${decoded}' not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (err: any) {
    console.error('API Error in /api/products/[slug]:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', message: err?.message },
      { status: 500 }
    );
  }
}
