import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { Category } from '@/lib/models/Category';
import { Product } from '@/lib/models/Product';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectToDatabase();
    const { slug } = await params;
    const decoded = decodeURIComponent(slug).trim();

    const category = (await Category.findOne({
      $or: [{ slug: decoded }, { aliases: decoded }, { id: decoded }],
    }).lean()) as any;

    if (!category) {
      return NextResponse.json(
        { error: `Category '${decoded}' not found` },
        { status: 404 }
      );
    }

    const products = await Product.find({
      $or: [{ categorySlug: category.slug }, { category: category.hero?.title }],
    })
      .sort({ id: 1 })
      .lean();

    return NextResponse.json({
      ...category,
      products,
    });
  } catch (err: any) {
    console.error('API Error in /api/categories/[slug]:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', message: err?.message },
      { status: 500 }
    );
  }
}
