'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminHeader from '@/components/AdminHeader';
import { Layers, Plus, Sparkles, Tag, ArrowRight, ExternalLink, RefreshCw } from 'lucide-react';

interface CategoryDoc {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
  activeFormulations: number;
  image: string;
  featuredActives: string[];
  hero?: {
    title: string;
    subtitle: string;
    bgImage: string;
  };
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<CategoryDoc[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/categories')
      .then((r) => r.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading categories:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex-1 flex flex-col bg-[#06131f] text-slate-200 font-sans min-h-screen">
      <AdminHeader
        title="Manufacturing Categories & Verticals"
        subtitle="Manage product categories, specialized lines, active compound groups, and formulation pipelines"
      />

      <div className="p-8 space-y-6 max-w-7xl mx-auto w-full">
        {loading ? (
          <div className="bg-[#0b2136] rounded-2xl p-12 text-center border border-[#163e5c] text-slate-400">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto text-sky-400 mb-2" />
            <span className="text-xs">Loading manufacturing verticals from MongoDB Atlas...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id || cat.slug}
                className="bg-[#0b2136] rounded-2xl border border-[#163e5c] p-6 flex flex-col justify-between shadow-lg hover:border-sky-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-sky-300 bg-sky-950/70 px-2 py-0.5 rounded border border-sky-800/80">
                      {cat.id}
                    </span>
                    <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/80">
                      {cat.productCount} Formulations
                    </span>
                  </div>

                  <h3 className="text-lg font-cormorant font-bold text-white mt-3 group-hover:text-sky-300 transition-colors">
                    {cat.hero?.title || cat.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-3">
                    {cat.description || cat.hero?.subtitle}
                  </p>

                  <div className="mt-4">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                      Specialized Formulation Tags:
                    </span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {(cat.featuredActives || []).slice(0, 4).map((act, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-[#06131f] text-slate-300 px-2 py-0.5 rounded-md font-medium border border-[#14334d]"
                        >
                          {act}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#14334d] flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-slate-500">/{cat.slug}</span>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-sky-400 hover:text-sky-300 font-semibold text-[11px] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Manage Range</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
