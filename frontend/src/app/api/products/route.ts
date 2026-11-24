import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { Product } from '@/lib/models/Product';

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);

    const categoryFilter = searchParams.get('category');
    const tagFilter = searchParams.get('tag');
    const statusFilter = searchParams.get('status');
    const searchQuery = searchParams.get('search');

    const query: any = {};
    if (categoryFilter && categoryFilter !== 'ALL') {
      query.$or = [{ categorySlug: categoryFilter }, { category: categoryFilter }];
    }
    if (tagFilter && tagFilter !== 'ALL' && tagFilter !== 'All Formulations') {
      query.tag = tagFilter;
    }
    if (statusFilter && statusFilter !== 'ALL') {
      query.status = statusFilter;
    }
    if (searchQuery) {
      query.$and = query.$and || [];
      query.$and.push({
        $or: [
          { name: { $regex: searchQuery, $options: 'i' } },
          { slug: { $regex: searchQuery, $options: 'i' } },
          { actives: { $elemMatch: { $regex: searchQuery, $options: 'i' } } },
          { format: { $regex: searchQuery, $options: 'i' } },
        ],
      });
    }

    const products = await Product.find(query).sort({ id: 1 }).lean();
    return NextResponse.json(products);
  } catch (err: any) {
    console.error('API Error in /api/products:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', message: err?.message },
      { status: 500 }
    );
  }
}
