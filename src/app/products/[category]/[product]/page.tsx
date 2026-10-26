import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllCategories, getCategoryShowcase } from "@/data/categoryShowcase";
import { getFormulationDetail } from "@/data/productFormulations";
import FormulationDetailClient from "@/components/FormulationDetailClient";

export const instant = false;

interface PageProps {
  params: Promise<{
    category: string;
    product: string;
  }>;
}

export function generateStaticParams() {
  const categories = getAllCategories();
  const paramsList: { category: string; product: string }[] = [];

  for (const cat of categories) {
    const allCategorySlugs = [cat.slug, ...cat.aliases];
    for (const item of cat.productRange.items) {
      const itemSlug = item.slug || item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      for (const catSlug of allCategorySlugs) {
        paramsList.push({
          category: catSlug,
          product: itemSlug,
        });
      }
    }
  }

  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, product } = await params;
  const formulation = getFormulationDetail(product, category);

  if (!formulation) {
    return {
      title: "Product Formulation Not Found | Mani Lifestyle",
    };
  }

  return {
    title: `${formulation.name} Manufacturer in India | Mani Lifestyle Ahmedabad`,
    description: `Leading ${formulation.name} manufacturer in India. Custom formulations, private label OEM, ISO 22716 & WHO-GMP cleanrooms in Ahmedabad, Gujarat.`,
  };
}

export default async function ProductFormulationPage({ params }: PageProps) {
  const { category, product } = await params;
  const formulation = getFormulationDetail(product, category);

  if (!formulation) {
    notFound();
  }

  // Get related formulations in the same category
  const showcase = getCategoryShowcase(category);
  const relatedFormulations = showcase
    ? showcase.productRange.items
        .filter((item) => {
          const itemSlug = item.slug || item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
          return itemSlug !== formulation.slug;
        })
        .slice(0, 8)
        .map((item) => ({
          name: item.name,
          slug: item.slug || item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
        }))
    : [];

  return (
    <FormulationDetailClient
      formulation={formulation}
      activeCategorySlug={category}
      relatedFormulations={relatedFormulations}
    />
  );
}
