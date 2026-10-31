import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { productCategories, sampleProducts } from "@/data/products";
import { getCategoryShowcase } from "@/data/categoryShowcase";
import CategoryDetailClient from "@/components/CategoryDetailClient";

export const instant = false;

function resolveCategory(slug: string) {
  const direct = productCategories.find((c) => c.slug === slug);
  if (direct) return direct;
  const showcase = getCategoryShowcase(slug);
  if (showcase) {
    return productCategories.find((c) => c.slug === showcase.slug);
  }
  return undefined;
}

export function generateStaticParams() {
  const primary = productCategories.map((c) => ({ category: c.slug }));
  const aliases = [
    { category: "facewash" },
    { category: "serum" },
    { category: "hair-oil" },
    { category: "skin-cream" },
    { category: "essential-oil" },
    { category: "sheet-masks" },
  ];
  return [...primary, ...aliases];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const categoryMeta = resolveCategory(categorySlug);

  if (!categoryMeta) {
    return {
      title: "Category Not Found | Mani Lifestyle",
    };
  }

  return {
    title: `${categoryMeta.title} Manufacturing | Mani Lifestyle Ahmedabad`,
    description: `${categoryMeta.description} Custom & private label formulations starting from 500 units in Ahmedabad, India.`,
  };
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const categoryMeta = resolveCategory(categorySlug);

  if (!categoryMeta) {
    notFound();
  }

  const categoryProducts = sampleProducts.filter(
    (p) => p.categorySlug === categoryMeta.slug
  );

  return (
    <CategoryDetailClient
      categoryMeta={categoryMeta}
      categoryProducts={categoryProducts}
    />
  );
}
