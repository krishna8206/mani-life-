import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllCategories, getCategoryShowcase } from "@/data/categoryShowcase";
import { getFormulationDetail } from "@/data/productFormulations";
import FormulationDetailClient from "@/components/FormulationDetailClient";
import { API_BASE_URL } from "@/lib/config";

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

async function resolveLiveFormulation(productSlug: string, categorySlug: string) {
  let fallback = getFormulationDetail(productSlug, categorySlug);

  try {
    const res = await fetch(`${API_BASE_URL}/api/products/${productSlug}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const live = await res.json();
      if (live) {
      if (!fallback) {
        fallback = {
          slug: live.slug || productSlug,
          categorySlug: live.categorySlug || categorySlug,
          categoryTitle: live.category || "Cosmetics",
          name: live.name || "Product Formulation",
          headline: live.headline || `${live.name} Manufacturer in India`,
          tagline: live.tagline || "Custom & Private Label Formulation",
          image: live.image || "/images/products/natural-face-wash.jpg",
          imageAlt: live.imageAlt || `${live.name} Product Tube and Packaging - Mani Lifestyle`,
          cleanroomBadge: live.cleanroomBadge || "Ahmedabad Cleanroom Compounding",
          moqBadge: live.moqBadge || "Flexible Low MOQ",
          eyebrow: live.eyebrow || "CERTIFIED COSMETICS MANUFACTURER • AHMEDABAD, INDIA",
          titleLine1: live.titleLine1 || live.name,
          titleLine2: live.titleLine2 || "Manufacturer in India.",
          overviewParagraphs: live.overviewParagraphs || [],
          keyActives:
            Array.isArray(live.keyActives) && live.keyActives.length > 0
              ? live.keyActives
              : Array.isArray(live.actives)
                ? live.actives
                : [],
          format: live.format || "Custom Formula",
          pH: live.pH || "pH 5.5",
          packagingOptions:
            Array.isArray(live.packagingOptions) && live.packagingOptions.length > 0
              ? live.packagingOptions
              : Array.isArray(live.packagingTypes)
                ? live.packagingTypes
                : [],
          whyChoosePoints: Array.isArray(live.whyChoosePoints)
            ? live.whyChoosePoints.map((pt: any) => ({
              title: pt.title || "",
              description: pt.description || pt.desc || "",
            }))
            : [],
          skinTypes: live.skinTypes || ["All Skin Types"],
          expandHeadline: live.expandHeadline || "Expand Your Skincare Line with Confidence",
          expandParagraphs: live.expandParagraphs || [],
        };
      } else {
        fallback = {
          ...fallback,
          name: live.name || fallback.name,
          image: live.image || fallback.image,
          imageAlt: live.imageAlt || fallback.imageAlt,
          format: live.format || fallback.format,
          pH: live.pH || fallback.pH,
          tagline: live.tagline || fallback.tagline,
          headline: live.headline || fallback.headline,
          cleanroomBadge: live.cleanroomBadge || fallback.cleanroomBadge,
          moqBadge: live.moqBadge || fallback.moqBadge,
          keyActives:
            Array.isArray(live.keyActives) && live.keyActives.length > 0
              ? live.keyActives
              : Array.isArray(live.actives) && live.actives.length > 0
                ? live.actives
                : fallback.keyActives,
          overviewParagraphs:
            Array.isArray(live.overviewParagraphs) && live.overviewParagraphs.length > 0
              ? live.overviewParagraphs
              : fallback.overviewParagraphs,
          whyChoosePoints:
            Array.isArray(live.whyChoosePoints) && live.whyChoosePoints.length > 0
              ? live.whyChoosePoints.map((pt: any) => ({
                title: pt.title || "",
                description: pt.description || pt.desc || "",
              }))
              : fallback.whyChoosePoints,
          packagingOptions:
            Array.isArray(live.packagingOptions) && live.packagingOptions.length > 0
              ? live.packagingOptions
              : Array.isArray(live.packagingTypes) && live.packagingTypes.length > 0
                ? live.packagingTypes
                : fallback.packagingOptions,
          skinTypes:
            Array.isArray(live.skinTypes) && live.skinTypes.length > 0
              ? live.skinTypes
              : fallback.skinTypes,
          expandParagraphs:
            Array.isArray(live.expandParagraphs) && live.expandParagraphs.length > 0
              ? live.expandParagraphs
              : fallback.expandParagraphs,
        };
      }
    }
  }
} catch (err) {
    console.warn("Could not query live product from MongoDB, using fallback:", err);
  }

  return fallback;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, product } = await params;
  const formulation = await resolveLiveFormulation(product, category);

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
  const formulation = await resolveLiveFormulation(product, category);

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
