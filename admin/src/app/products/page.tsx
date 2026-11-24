'use client';

import React, { useState, useEffect } from 'react';
import AdminHeader from '@/components/AdminHeader';
import ImageUploadInput from '@/components/ImageUploadInput';
import {
  Save,
  Plus,
  Trash2,
  Eye,
  Check,
  RefreshCw,
  X,
  Search,
  ExternalLink,
  Boxes,
  Edit2,
} from 'lucide-react';

type MainTabKey = 'hero' | 'personalCare' | 'skinCare' | 'cta' | 'formulations';

interface PersonalCareCard {
  id: string;
  title: string;
  categorySlug: string;
  archImage: string;
  icon: string;
  items: string[];
}

interface SkinCareCategory {
  id: string;
  title: string;
  categorySlug: string;
  tag: string;
  archImage: string;
  icon: string;
  items: string[];
}

const defaultRangeCmsData = {
  hero: {
    kicker: 'Certified Cosmetics Manufacturer • Ahmedabad, India',
    headlinePart1: 'All Product ',
    headlineHighlight: 'Range.',
    subtitle: 'Explore our comprehensive formulations for your brand.',
    introBox:
      'Whether you are seeking contract manufacturing, private label, or starting your own start-up brand, we offer tailored formulations across all product ranges for your brand.',
    searchPlaceholder: 'Search formulations across all ranges (Shampoo, Serum, Scrub)...',
  },
  personalCareSection: {
    eyebrow: 'Signature Collection',
    title: 'Personal Care ',
    highlight: 'Range',
    description:
      'Thoughtfully formulated essentials for everyday care — crafted with nature’s best and the science of skincare.',
    cards: [
      {
        id: 'hair-care',
        title: 'Hair Care',
        categorySlug: 'haircare-treatments',
        archImage: '/images/range/arch-uniform-hair-care.png',
        icon: 'ShampooIcon',
        items: ['Shampoo', 'Conditioner', 'Mist'],
      },
      {
        id: 'body-care',
        title: 'Body Care',
        categorySlug: 'body-bath-wellness',
        archImage: '/images/range/arch-uniform-body-care.png',
        icon: 'LotionIcon',
        items: ['Body Shower', 'Lotion', 'Slimming Cream', 'Bust Up Gel'],
      },
      {
        id: 'body-sunscreen',
        title: 'Body Sunscreen',
        categorySlug: 'suncare-moisturizers',
        archImage: '/images/range/arch-uniform-body-sunscreen.png',
        icon: 'SunscreenIcon',
        items: ['Brightening Sunscreen', 'Moisturizing Sunscreen'],
      },
      {
        id: 'scrub',
        title: 'Scrub',
        categorySlug: 'cleansers-toners',
        archImage: '/images/range/arch-uniform-scrub.png',
        icon: 'ScrubIcon',
        items: ['Body Refining Scrub', 'Body Exfoliating Gel'],
      },
      {
        id: 'essential-oil',
        title: 'Essential Oil',
        categorySlug: 'body-bath-wellness',
        archImage: '/images/range/arch-uniform-essential-oil.png',
        icon: 'DropletIcon',
        items: ['Body Massage Oil', 'Aromatherapy Essence'],
      },
      {
        id: 'bath-salt',
        title: 'Bath Salt',
        categorySlug: 'body-bath-wellness',
        archImage: '/images/range/arch-uniform-bath-salt.png',
        icon: 'BathSaltIcon',
        items: ['Relaxing Bath Salt', 'Calming Bath Salt'],
      },
    ] as PersonalCareCard[],
  },
  skinCareSection: {
    eyebrow: 'Dermatological & Cosmetic Actives',
    title: 'Skin Care ',
    highlight: 'Range',
    description:
      'From clarifying AHA/BHA cleansers and stabilized vitamin serums to broad-spectrum sunscreens, custom compounded for clinical efficacy.',
    categories: [
      {
        id: 'cleansers',
        title: 'Cleansers',
        categorySlug: 'cleansers-toners',
        tag: 'Purifying & Barrier',
        archImage: '/images/skincare/arch-skincare-cleansers.png',
        icon: 'Droplets',
        items: ['Face Wash', 'Micellar Water', 'Cream Cleanser', 'Gel Cleanser'],
      },
      {
        id: 'toners-mists',
        title: 'Toners & Mists',
        categorySlug: 'cleansers-toners',
        tag: 'pH Balance & Hydration',
        archImage: '/images/skincare/arch-skincare-toners-mists.png',
        icon: 'Sparkles',
        items: ['Hydrating Toner', 'Astringent Toner', 'Facial Mist'],
      },
      {
        id: 'exfoliators',
        title: 'Exfoliators',
        categorySlug: 'cleansers-toners',
        tag: 'Micro-Exfoliation',
        archImage: '/images/skincare/arch-skincare-exfoliators.png',
        icon: 'Layers',
        items: ['Scrub (Physical)', 'AHA/BHA Exfoliants'],
      },
      {
        id: 'serums',
        title: 'Serums',
        categorySlug: 'skincare-serums',
        tag: 'Active Concentrates',
        archImage: '/images/skincare/arch-skincare-serums.png',
        icon: 'Pipette',
        items: ['Vitamin C Serum', 'Hyaluronic Acid Serum', 'Niacinamide Serum'],
      },
      {
        id: 'moisturizers',
        title: 'Moisturizers',
        categorySlug: 'suncare-moisturizers',
        tag: 'Barrier Lipid Lock',
        archImage: '/images/skincare/arch-skincare-moisturizers.png',
        icon: 'Feather',
        items: ['Gel Moisturizer', 'Night Cream', 'Day Cream', 'Brightening Cream'],
      },
      {
        id: 'sunscreens',
        title: 'Sunscreens',
        categorySlug: 'suncare-moisturizers',
        tag: 'Broad Spectrum UV',
        archImage: '/images/skincare/arch-skincare-sunscreens.png',
        icon: 'Sun',
        items: ['SPF 30/50 Sunscreen', 'Tinted Sunscreen', 'Gel-based Sunscreen'],
      },
      {
        id: 'face-masks',
        title: 'Face Masks',
        categorySlug: 'cleansers-toners',
        tag: 'Intensive Compounding',
        archImage: '/images/skincare/arch-skincare-face-masks.png',
        icon: 'Smile',
        items: ['Peel-Off Mask', 'Clay Mask', 'Sheet Mask'],
      },
      {
        id: 'spot-treatments',
        title: 'Spot Treatments',
        categorySlug: 'skincare-serums',
        tag: 'Targeted Blemishes',
        archImage: '/images/skincare/arch-skincare-spot-treatments.png',
        icon: 'Target',
        items: ['Anti-Acne Gel', 'Dark Spot Corrector', 'Pigmentation Serum'],
      },
      {
        id: 'eye-care',
        title: 'Eye Care',
        categorySlug: 'skincare-serums',
        tag: 'Delicate Periorbital',
        archImage: '/images/skincare/arch-skincare-eye-care.png',
        icon: 'Eye',
        items: ['Under Eye Cream', 'Eye Serum', 'Eye Gel'],
      },
      {
        id: 'lip-care',
        title: 'Lip Care',
        categorySlug: 'body-bath-wellness',
        tag: 'Emollient Conditioning',
        archImage: '/images/skincare/arch-skincare-lip-care.png',
        icon: 'Heart',
        items: ['Lip Balm', 'Lip Scrub', 'Lip Butter'],
      },
      {
        id: 'makeup-removers',
        title: 'Makeup Removers',
        categorySlug: 'cleansers-toners',
        tag: 'Gentle Micellar',
        archImage: '/images/skincare/arch-skincare-makeup-removers.png',
        icon: 'RefreshCw',
        items: ['Oil-Based Remover', 'Cleansing Balm', 'Makeup Removing Wipes'],
      },
      {
        id: 'body-care-skin',
        title: 'Body Care',
        categorySlug: 'body-bath-wellness',
        tag: 'Total Body Radiance',
        archImage: '/images/skincare/arch-skincare-body-care.png',
        icon: 'ShieldCheck',
        items: ['Body Lotion', 'Body Butter', 'Body Scrub'],
      },
    ] as SkinCareCategory[],
  },
  ctaSection: {
    badge: 'Proudly Made in India • End-to-End Manufacturing • Low MOQ from 500 Units',
    heading: 'Ready to Build Your Dream',
    highlight: 'Personal Care Brand in India?',
    description:
      'Our state-of-the-art Ahmedabad (Gujarat, India) compounding campus develops custom formulations, bespoke active percentages, and complete finished packaging for Indian and global brands.',
    primaryButtonText: 'Submit Enquiry',
    secondaryButtonText: 'Call +91 97246 81096',
    phone: '+91 97246 81096',
  },
};

// Types for Formulation Inventory
interface CategoryDoc {
  id: string;
  name: string;
  slug: string;
  productCount: number;
  hero?: { title: string; bgImage: string };
  productRange?: { filterTags: string[] };
}

interface ProductDoc {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  tag: string;
  format: string;
  target: string;
  moq: string;
  status: 'ACTIVE' | 'DRAFT';
}

export default function ProductsPage() {
  const [mainTab, setMainTab] = useState<MainTabKey>('hero');
  const [rangeCms, setRangeCms] = useState(defaultRangeCmsData);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Temporary string array inputs
  const [personalItemInputs, setPersonalItemInputs] = useState<{ [key: string]: string }>({});
  const [skinItemInputs, setSkinItemInputs] = useState<{ [key: string]: string }>({});

  // Inventory table state
  const [categories, setCategories] = useState<CategoryDoc[]>([]);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState('cleansers-toners');
  const [products, setProducts] = useState<ProductDoc[]>([]);
  const [invLoading, setInvLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'ACTIVE' | 'DRAFT'>('ALL');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  useEffect(() => {
    fetchRangeCms();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategorySlug) {
      fetchCategoryProducts(selectedCategorySlug);
    }
  }, [selectedCategorySlug]);

  const fetchRangeCms = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://mani-life-1n34.vercel.app/api/product-range-page');
      if (res.ok) {
        const data = await res.json();
        if (data && data.hero) {
          setRangeCms((prev) => ({
            ...prev,
            ...data,
            hero: { ...prev.hero, ...(data.hero || {}) },
            personalCareSection: {
              ...prev.personalCareSection,
              ...(data.personalCareSection || {}),
              cards:
                data.personalCareSection?.cards && data.personalCareSection.cards.length > 0
                  ? data.personalCareSection.cards
                  : prev.personalCareSection.cards,
            },
            skinCareSection: {
              ...prev.skinCareSection,
              ...(data.skinCareSection || {}),
              categories:
                data.skinCareSection?.categories && data.skinCareSection.categories.length > 0
                  ? data.skinCareSection.categories
                  : prev.skinCareSection.categories,
            },
            ctaSection: { ...prev.ctaSection, ...(data.ctaSection || {}) },
          }));
        }
      }
    } catch (err) {
      console.error('Failed to load product range CMS:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch('https://mani-life-1n34.vercel.app/api/categories');
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      }
    } catch (err) {
      console.error('Failed to load categories:', err);
    }
  };

  const fetchCategoryProducts = async (slug: string) => {
    setInvLoading(true);
    try {
      const res = await fetch(`https://mani-life-1n34.vercel.app/api/categories/${slug}`);
      if (res.ok) {
        const data = await res.json();
        if (data.products) {
          setProducts(data.products);
        }
      }
    } catch (err) {
      console.error('Failed to load products for category:', err);
    } finally {
      setInvLoading(false);
    }
  };

  const handleSaveRangeCms = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('https://mani-life-1n34.vercel.app/api/product-range-page', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rangeCms),
      });

      if (res.ok) {
        showToast('All Product Range Page successfully saved to MongoDB Atlas!');
      } else {
        showToast('Failed to save changes. Check backend connection.');
      }
    } catch (err) {
      console.error('Save error:', err);
      showToast('Network error while saving product range CMS.');
    } finally {
      setSaving(false);
    }
  };

  // -------------------------------------------------------------
  // TAB 2: PERSONAL CARE CARDS (ADD / EDIT / DELETE)
  // -------------------------------------------------------------
  const handleAddPersonalCard = () => {
    const newId = `personal-${Date.now()}`;
    const newCard: PersonalCareCard = {
      id: newId,
      title: 'New Personal Care Category',
      categorySlug: 'body-bath-wellness',
      archImage: '/images/range/arch-uniform-body-care.png',
      icon: 'LotionIcon',
      items: ['Sample Formulation 1', 'Sample Formulation 2'],
    };
    setRangeCms((prev) => ({
      ...prev,
      personalCareSection: {
        ...prev.personalCareSection,
        cards: [...(prev.personalCareSection.cards || []), newCard],
      },
    }));
  };

  const handleUpdatePersonalCard = (index: number, field: keyof PersonalCareCard, value: any) => {
    const updated = [...(rangeCms.personalCareSection.cards || [])];
    updated[index] = { ...updated[index], [field]: value };
    setRangeCms((prev) => ({
      ...prev,
      personalCareSection: { ...prev.personalCareSection, cards: updated },
    }));
  };

  const handleDeletePersonalCard = (index: number) => {
    const updated = rangeCms.personalCareSection.cards.filter((_, i) => i !== index);
    setRangeCms((prev) => ({
      ...prev,
      personalCareSection: { ...prev.personalCareSection, cards: updated },
    }));
  };

  const handleAddPersonalItem = (cardIndex: number) => {
    const text = (personalItemInputs[cardIndex] || '').trim();
    if (!text) return;
    const card = rangeCms.personalCareSection.cards[cardIndex];
    const updatedItems = [...(card.items || []), text];
    handleUpdatePersonalCard(cardIndex, 'items', updatedItems);
    setPersonalItemInputs((prev) => ({ ...prev, [cardIndex]: '' }));
  };

  const handleDeletePersonalItem = (cardIndex: number, itemIndex: number) => {
    const card = rangeCms.personalCareSection.cards[cardIndex];
    const updatedItems = card.items.filter((_, i) => i !== itemIndex);
    handleUpdatePersonalCard(cardIndex, 'items', updatedItems);
  };

  // -------------------------------------------------------------
  // TAB 3: SKIN CARE CARDS (ADD / EDIT / DELETE)
  // -------------------------------------------------------------
  const handleAddSkinCard = () => {
    const newId = `skin-${Date.now()}`;
    const newCat: SkinCareCategory = {
      id: newId,
      title: 'New Skin Care Category',
      categorySlug: 'cleansers-toners',
      tag: 'Clinical Dermal Benchmark',
      archImage: '/images/skincare/arch-skincare-cleansers.png',
      icon: 'Droplets',
      items: ['Sample Product 1', 'Sample Product 2'],
    };
    setRangeCms((prev) => ({
      ...prev,
      skinCareSection: {
        ...prev.skinCareSection,
        categories: [...(prev.skinCareSection.categories || []), newCat],
      },
    }));
  };

  const handleUpdateSkinCard = (index: number, field: keyof SkinCareCategory, value: any) => {
    const updated = [...(rangeCms.skinCareSection.categories || [])];
    updated[index] = { ...updated[index], [field]: value };
    setRangeCms((prev) => ({
      ...prev,
      skinCareSection: { ...prev.skinCareSection, categories: updated },
    }));
  };

  const handleDeleteSkinCard = (index: number) => {
    const updated = rangeCms.skinCareSection.categories.filter((_, i) => i !== index);
    setRangeCms((prev) => ({
      ...prev,
      skinCareSection: { ...prev.skinCareSection, categories: updated },
    }));
  };

  const handleAddSkinItem = (catIndex: number) => {
    const text = (skinItemInputs[catIndex] || '').trim();
    if (!text) return;
    const cat = rangeCms.skinCareSection.categories[catIndex];
    const updatedItems = [...(cat.items || []), text];
    handleUpdateSkinCard(catIndex, 'items', updatedItems);
    setSkinItemInputs((prev) => ({ ...prev, [catIndex]: '' }));
  };

  const handleDeleteSkinItem = (catIndex: number, itemIndex: number) => {
    const cat = rangeCms.skinCareSection.categories[catIndex];
    const updatedItems = cat.items.filter((_, i) => i !== itemIndex);
    handleUpdateSkinCard(catIndex, 'items', updatedItems);
  };

  // Inventory Table filtering
  const filteredProducts = products.filter((p) => {
    const matchesStatus = statusFilter === 'ALL' || p.status === statusFilter;
    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.format && p.format.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.target && p.target.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col bg-[#06131f] text-slate-200 font-sans min-h-screen">
      <AdminHeader
        title="Product Range CMS &amp; Catalog"
        subtitle="Manage the All Product Range page (/products), personal care showcases, skin care active cards, and formulation database"
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-950/95 border border-emerald-500/80 text-emerald-200 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-300">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      <div className="p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
        {/* Unified Top Control Bar */}
        <div className="bg-[#0b2136] p-5 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#14334d]/80">
            <div>
              <h2 className="text-sm font-semibold text-white">All Product Range Studio</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Live URL:{' '}
                <a
                  href="http://localhost:3000/products"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:underline font-mono"
                >
                  http://localhost:3000/products
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="http://localhost:3000/products"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-medium bg-[#06131f] text-slate-300 hover:text-white border border-[#14334d] flex items-center gap-1.5 transition-all"
              >
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span>Preview Live Page</span>
              </a>

              {mainTab !== 'formulations' && (
                <button
                  onClick={() => handleSaveRangeCms()}
                  disabled={saving}
                  className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-md shadow-emerald-950/40 transition-all cursor-pointer disabled:opacity-50"
                >
                  {saving ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                  <span>{saving ? 'Saving to Atlas...' : 'Save Page Changes'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Clean Tabs (No Icons, No Sliders, Wrapping Naturally) */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: 'hero', label: '1. Hero Banner' },
              { key: 'personalCare', label: '2. Personal Care Range' },
              { key: 'skinCare', label: '3. Skin Care Range' },
              { key: 'cta', label: '4. Signature CTA Banner' },
              { key: 'formulations', label: '5. Formulation Database' },
            ].map((tab) => {
              const isSelected = mainTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setMainTab(tab.key as MainTabKey)}
                  className={`px-3.5 py-2 rounded-xl text-xs transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-gradient-to-r from-sky-600 to-[#164666] text-white shadow-md shadow-sky-950 border border-sky-400/50 font-semibold'
                      : 'bg-[#06131f]/70 text-slate-300 hover:text-white hover:bg-[#06131f] border border-[#14334d] font-normal'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {loading ? (
          <div className="bg-[#0b2136] rounded-2xl p-12 text-center border border-[#163e5c]">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto text-sky-400 mb-2" />
            <span className="text-xs text-slate-400">Loading Product Range content from MongoDB Atlas...</span>
          </div>
        ) : (
          <div className="space-y-6">
            {/* ======================================================== */}
            {/* TAB 1: HERO BANNER & SEARCH                              */}
            {/* ======================================================== */}
            {mainTab === 'hero' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 1: Hero Banner &amp; Formulation Search</h3>
                  <p className="text-xs text-slate-400">
                    Controls opening header statements, subtitle, intro callout narrative box, and search placeholder.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Micro-Header Kicker</label>
                    <input
                      type="text"
                      value={rangeCms.hero.kicker}
                      onChange={(e) =>
                        setRangeCms({ ...rangeCms, hero: { ...rangeCms.hero, kicker: e.target.value } })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Part 1 (Regular)</label>
                    <input
                      type="text"
                      value={rangeCms.hero.headlinePart1}
                      onChange={(e) =>
                        setRangeCms({ ...rangeCms, hero: { ...rangeCms.hero, headlinePart1: e.target.value } })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight (Teal Serif)</label>
                    <input
                      type="text"
                      value={rangeCms.hero.headlineHighlight}
                      onChange={(e) =>
                        setRangeCms({ ...rangeCms, hero: { ...rangeCms.hero, headlineHighlight: e.target.value } })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Subtitle</label>
                    <input
                      type="text"
                      value={rangeCms.hero.subtitle}
                      onChange={(e) =>
                        setRangeCms({ ...rangeCms, hero: { ...rangeCms.hero, subtitle: e.target.value } })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Introductory Narrative Callout Box</label>
                    <textarea
                      rows={3}
                      value={rangeCms.hero.introBox}
                      onChange={(e) =>
                        setRangeCms({ ...rangeCms, hero: { ...rangeCms.hero, introBox: e.target.value } })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl p-3.5 text-slate-100 leading-relaxed focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Live Formulation Search Placeholder</label>
                    <input
                      type="text"
                      value={rangeCms.hero.searchPlaceholder}
                      onChange={(e) =>
                        setRangeCms({ ...rangeCms, hero: { ...rangeCms.hero, searchPlaceholder: e.target.value } })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 2: PERSONAL CARE RANGE                               */}
            {/* ======================================================== */}
            {mainTab === 'personalCare' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 2: Personal Care Range (Tactile Category Cards)</h3>
                  <p className="text-xs text-slate-400">
                    Controls section headers and the 3D Tactile Category Cards (Hair Care, Body Care, Sunscreen, Scrub, Essential Oil, Bath Salt).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Section Eyebrow</label>
                    <input
                      type="text"
                      value={rangeCms.personalCareSection.eyebrow}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          personalCareSection: { ...rangeCms.personalCareSection, eyebrow: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Heading Prefix</label>
                    <input
                      type="text"
                      value={rangeCms.personalCareSection.title}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          personalCareSection: { ...rangeCms.personalCareSection, title: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Heading Highlight</label>
                    <input
                      type="text"
                      value={rangeCms.personalCareSection.highlight}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          personalCareSection: { ...rangeCms.personalCareSection, highlight: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-slate-300 font-medium mb-1">Section Description</label>
                    <textarea
                      rows={2}
                      value={rangeCms.personalCareSection.description}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          personalCareSection: { ...rangeCms.personalCareSection, description: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl p-3.5 text-slate-100 leading-relaxed focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                {/* Repeatable Personal Care Cards (Add / Edit / Delete) */}
                <div className="border-t border-[#14334d] pt-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                        Personal Care Cards ({rangeCms.personalCareSection.cards?.length || 0})
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Tactile Roman Arch cards with sub-formulation bullet lists.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddPersonalCard}
                      className="px-3.5 py-1.5 bg-[#06131f] hover:bg-sky-950/40 text-sky-400 hover:text-sky-300 text-xs font-medium rounded-xl border border-sky-800/60 flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Category Card</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {rangeCms.personalCareSection.cards?.map((card, cIdx) => (
                      <div
                        key={card.id || cIdx}
                        className="bg-[#06131f] p-5 rounded-2xl border border-[#14334d] space-y-4 shadow-md"
                      >
                        <div className="flex items-center justify-between border-b border-[#14334d] pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-sky-400 bg-[#0b2136] px-2 py-0.5 rounded border border-[#163e5c]">
                              #{cIdx + 1}
                            </span>
                            <span className="text-sm font-semibold text-white">{card.title}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleDeletePersonalCard(cIdx)}
                            className="text-slate-500 hover:text-red-400 p-1 rounded transition-colors cursor-pointer"
                            title="Delete card"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div>
                            <label className="block text-slate-400 font-medium mb-1">Card Title</label>
                            <input
                              type="text"
                              value={card.title}
                              onChange={(e) => handleUpdatePersonalCard(cIdx, 'title', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-400 font-medium mb-1">Target Category Route Slug</label>
                            <input
                              type="text"
                              value={card.categorySlug}
                              onChange={(e) => handleUpdatePersonalCard(cIdx, 'categorySlug', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 font-mono focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <label className="block text-slate-400 font-medium mb-1">Card Icon</label>
                            <select
                              value={card.icon}
                              onChange={(e) => handleUpdatePersonalCard(cIdx, 'icon', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-sky-500"
                            >
                              <option value="ShampooIcon">ShampooIcon (Hair Care)</option>
                              <option value="LotionIcon">LotionIcon (Body Care)</option>
                              <option value="SunscreenIcon">SunscreenIcon (Sunscreen)</option>
                              <option value="ScrubIcon">ScrubIcon (Scrub / Exfoliator)</option>
                              <option value="DropletIcon">DropletIcon (Essential Oil)</option>
                              <option value="BathSaltIcon">BathSaltIcon (Bath Salt)</option>
                            </select>
                          </div>

                          <div className="sm:col-span-2">
                            <ImageUploadInput
                              label="Arch Mockup Image"
                              value={card.archImage}
                              onChange={(url) => handleUpdatePersonalCard(cIdx, 'archImage', url)}
                            />
                          </div>

                          {/* Sub-Items Tag List */}
                          <div className="sm:col-span-2 bg-[#0b2136] p-3 rounded-xl border border-[#163e5c] space-y-2">
                            <label className="block text-slate-300 font-semibold text-[10.5px] uppercase tracking-wider">
                              Sub-Formulations &amp; Products ({card.items?.length || 0})
                            </label>
                            <div className="flex flex-wrap gap-1.5">
                              {card.items?.map((item, itmIdx) => (
                                <span
                                  key={itmIdx}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#06131f] border border-[#14334d] text-sky-200 text-xs"
                                >
                                  <span>{item}</span>
                                  <button
                                    type="button"
                                    onClick={() => handleDeletePersonalItem(cIdx, itmIdx)}
                                    className="text-slate-400 hover:text-red-400 cursor-pointer"
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-2 pt-1">
                              <input
                                type="text"
                                placeholder="Add product (e.g. Shampoo, Lotion)..."
                                value={personalItemInputs[cIdx] || ''}
                                onChange={(e) =>
                                  setPersonalItemInputs({ ...personalItemInputs, [cIdx]: e.target.value })
                                }
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleAddPersonalItem(cIdx);
                                  }
                                }}
                                className="flex-1 bg-[#06131f] border border-[#14334d] rounded-xl px-3 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-sky-500"
                              />
                              <button
                                type="button"
                                onClick={() => handleAddPersonalItem(cIdx)}
                                className="px-3 py-1.5 bg-[#164666] hover:bg-[#1b557d] text-white rounded-xl text-xs font-semibold cursor-pointer shrink-0"
                              >
                                Add Item
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 3: SKIN CARE RANGE                                   */}
            {/* ======================================================== */}
            {mainTab === 'skinCare' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 3: Skin Care Range (Dermatological Actives)</h3>
                  <p className="text-xs text-slate-400">
                    Controls section headers and the 12 active category cards (Cleansers, Serums, Moisturizers, Face Masks, etc.).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Section Eyebrow</label>
                    <input
                      type="text"
                      value={rangeCms.skinCareSection.eyebrow}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          skinCareSection: { ...rangeCms.skinCareSection, eyebrow: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Heading Prefix</label>
                    <input
                      type="text"
                      value={rangeCms.skinCareSection.title}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          skinCareSection: { ...rangeCms.skinCareSection, title: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Heading Highlight</label>
                    <input
                      type="text"
                      value={rangeCms.skinCareSection.highlight}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          skinCareSection: { ...rangeCms.skinCareSection, highlight: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-slate-300 font-medium mb-1">Section Description</label>
                    <textarea
                      rows={2}
                      value={rangeCms.skinCareSection.description}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          skinCareSection: { ...rangeCms.skinCareSection, description: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl p-3.5 text-slate-100 leading-relaxed focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                {/* Repeatable Skin Care Cards (Add / Edit / Delete) */}
                <div className="border-t border-[#14334d] pt-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                        Skin Care Cards ({rangeCms.skinCareSection.categories?.length || 0})
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Category cards with signature arch mockups and hallmark dermal tags.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddSkinCard}
                      className="px-3.5 py-1.5 bg-[#06131f] hover:bg-sky-950/40 text-sky-400 hover:text-sky-300 text-xs font-medium rounded-xl border border-sky-800/60 flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Category Card</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {rangeCms.skinCareSection.categories?.map((cat, sIdx) => (
                      <div
                        key={cat.id || sIdx}
                        className="bg-[#06131f] p-5 rounded-2xl border border-[#14334d] space-y-4 shadow-md"
                      >
                        <div className="flex items-center justify-between border-b border-[#14334d] pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-sky-400 bg-[#0b2136] px-2 py-0.5 rounded border border-[#163e5c]">
                              #{sIdx + 1}
                            </span>
                            <span className="text-sm font-semibold text-white">{cat.title}</span>
                            {cat.tag && (
                              <span className="text-[10px] bg-[#0b2136] text-teal-300 px-2 py-0.5 rounded-full border border-teal-800/40 font-semibold">
                                {cat.tag}
                              </span>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleDeleteSkinCard(sIdx)}
                            className="text-slate-500 hover:text-red-400 p-1 rounded transition-colors cursor-pointer"
                            title="Delete card"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div>
                            <label className="block text-slate-400 font-medium mb-1">Category Title</label>
                            <input
                              type="text"
                              value={cat.title}
                              onChange={(e) => handleUpdateSkinCard(sIdx, 'title', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-400 font-medium mb-1">Target Category Slug</label>
                            <input
                              type="text"
                              value={cat.categorySlug}
                              onChange={(e) => handleUpdateSkinCard(sIdx, 'categorySlug', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 font-mono focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-400 font-medium mb-1">Hallmark Dermal Tag</label>
                            <input
                              type="text"
                              value={cat.tag}
                              onChange={(e) => handleUpdateSkinCard(sIdx, 'tag', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-400 font-medium mb-1">Card Icon</label>
                            <select
                              value={cat.icon}
                              onChange={(e) => handleUpdateSkinCard(sIdx, 'icon', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-sky-500"
                            >
                              <option value="Droplets">Droplets (Cleanser)</option>
                              <option value="Sparkles">Sparkles (Toners &amp; Mists)</option>
                              <option value="Layers">Layers (Exfoliators)</option>
                              <option value="Pipette">Pipette (Serums)</option>
                              <option value="Feather">Feather (Moisturizers)</option>
                              <option value="Sun">Sun (Sunscreens)</option>
                              <option value="Smile">Smile (Face Masks)</option>
                              <option value="Target">Target (Spot Treatments)</option>
                              <option value="Eye">Eye (Eye Care)</option>
                              <option value="Heart">Heart (Lip Care)</option>
                              <option value="RefreshCw">RefreshCw (Makeup Removers)</option>
                              <option value="ShieldCheck">ShieldCheck (Body Care)</option>
                            </select>
                          </div>

                          <div className="sm:col-span-2">
                            <ImageUploadInput
                              label="Arch Mockup Image"
                              value={cat.archImage}
                              onChange={(url) => handleUpdateSkinCard(sIdx, 'archImage', url)}
                            />
                          </div>

                          {/* Sub-Items Tag List */}
                          <div className="sm:col-span-2 bg-[#0b2136] p-3 rounded-xl border border-[#163e5c] space-y-2">
                            <label className="block text-slate-300 font-semibold text-[10.5px] uppercase tracking-wider">
                              Sub-Formulations &amp; Products ({cat.items?.length || 0})
                            </label>
                            <div className="flex flex-wrap gap-1.5">
                              {cat.items?.map((item, itmIdx) => (
                                <span
                                  key={itmIdx}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#06131f] border border-[#14334d] text-sky-200 text-xs"
                                >
                                  <span>{item}</span>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteSkinItem(sIdx, itmIdx)}
                                    className="text-slate-400 hover:text-red-400 cursor-pointer"
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-2 pt-1">
                              <input
                                type="text"
                                placeholder="Add product (e.g. Vitamin C Serum, Hydrating Mist)..."
                                value={skinItemInputs[sIdx] || ''}
                                onChange={(e) =>
                                  setSkinItemInputs({ ...skinItemInputs, [sIdx]: e.target.value })
                                }
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleAddSkinItem(sIdx);
                                  }
                                }}
                                className="flex-1 bg-[#06131f] border border-[#14334d] rounded-xl px-3 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-sky-500"
                              />
                              <button
                                type="button"
                                onClick={() => handleAddSkinItem(sIdx)}
                                className="px-3 py-1.5 bg-[#164666] hover:bg-[#1b557d] text-white rounded-xl text-xs font-semibold cursor-pointer shrink-0"
                              >
                                Add Item
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 4: SIGNATURE BLUE CTA BANNER                         */}
            {/* ======================================================== */}
            {mainTab === 'cta' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 4: Signature Blue CTA Banner</h3>
                  <p className="text-xs text-slate-400">
                    Controls bottom high-conversion banner with pill badge, headlines, and contact options.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Top Pill Badge Text</label>
                    <input
                      type="text"
                      value={rangeCms.ctaSection.badge}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          ctaSection: { ...rangeCms.ctaSection, badge: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Heading Prefix</label>
                    <input
                      type="text"
                      value={rangeCms.ctaSection.heading}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          ctaSection: { ...rangeCms.ctaSection, heading: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Heading Highlight</label>
                    <input
                      type="text"
                      value={rangeCms.ctaSection.highlight}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          ctaSection: { ...rangeCms.ctaSection, highlight: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Description Narrative</label>
                    <textarea
                      rows={3}
                      value={rangeCms.ctaSection.description}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          ctaSection: { ...rangeCms.ctaSection, description: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl p-3.5 text-slate-100 leading-relaxed focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Primary Button Text</label>
                    <input
                      type="text"
                      value={rangeCms.ctaSection.primaryButtonText}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          ctaSection: { ...rangeCms.ctaSection, primaryButtonText: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Secondary Phone Button Text</label>
                    <input
                      type="text"
                      value={rangeCms.ctaSection.secondaryButtonText}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          ctaSection: { ...rangeCms.ctaSection, secondaryButtonText: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Direct Factory Phone</label>
                    <input
                      type="text"
                      value={rangeCms.ctaSection.phone}
                      onChange={(e) =>
                        setRangeCms({
                          ...rangeCms,
                          ctaSection: { ...rangeCms.ctaSection, phone: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 5: FORMULATION DATABASE (Preserved Catalog Table)   */}
            {/* ======================================================== */}
            {mainTab === 'formulations' && (
              <div className="space-y-6">
                {/* Category Switcher */}
                <div className="bg-[#0b2136] p-4 rounded-2xl border border-[#163e5c] shadow-lg">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#14334d]/80 px-1">
                    <div className="flex items-center gap-2">
                      <Boxes className="w-4 h-4 text-sky-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Manufacturing Verticals ({categories.length})
                      </span>
                    </div>
                    <a
                      href={`http://localhost:3000/products/${selectedCategorySlug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] font-medium text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                    >
                      <span>View Live Category Page</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {categories.map((cat) => {
                      const isSelected = cat.slug === selectedCategorySlug;
                      const title = cat.hero?.title || cat.name.replace(' Formulations', '');
                      return (
                        <button
                          key={cat.slug}
                          onClick={() => setSelectedCategorySlug(cat.slug)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                            isSelected
                              ? 'bg-gradient-to-r from-sky-600 to-[#164666] text-white shadow-md shadow-sky-900/40 border border-sky-400/50'
                              : 'bg-[#06131f]/70 text-slate-400 hover:text-slate-200 hover:bg-[#06131f] border border-[#14334d]'
                          }`}
                        >
                          <span>{title}</span>
                          <span
                            className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                              isSelected ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {cat.productCount || 0}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Search & Filter Toolbar */}
                <div className="bg-[#0b2136] p-4 rounded-2xl border border-[#163e5c] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="relative w-full sm:w-80">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search formulations by name, active..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl pl-9 pr-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value as any)}
                      className="bg-[#06131f] border border-[#14334d] rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
                    >
                      <option value="ALL">All Status</option>
                      <option value="ACTIVE">Active Only</option>
                      <option value="DRAFT">Draft Only</option>
                    </select>
                  </div>
                </div>

                {/* Formulations Table */}
                <div className="bg-[#0b2136] rounded-2xl border border-[#163e5c] shadow-lg overflow-hidden">
                  {invLoading ? (
                    <div className="p-8 text-center text-xs text-slate-400">Loading formulations...</div>
                  ) : filteredProducts.length === 0 ? (
                    <div className="p-8 text-center text-xs text-slate-400">
                      No formulations found in this category.
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#06131f]/70 text-slate-400 uppercase text-[10px] tracking-wider border-b border-[#14334d]">
                          <tr>
                            <th className="py-3 px-4">Formulation Name &amp; Slug</th>
                            <th className="py-3 px-4">Segment / Tag</th>
                            <th className="py-3 px-4">Format / Texture</th>
                            <th className="py-3 px-4">MOQ</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#14334d]/60 text-slate-200">
                          {filteredProducts.map((p) => (
                            <tr key={p.id || p.slug} className="hover:bg-[#06131f]/40 transition-colors">
                              <td className="py-3 px-4">
                                <div className="font-semibold text-white">{p.name}</div>
                                <div className="text-[10.5px] font-mono text-slate-400">
                                  /products/{selectedCategorySlug}/{p.slug}
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <span className="px-2 py-0.5 rounded-md bg-[#081a2b] border border-[#14334d] text-[11px] text-sky-300">
                                  {p.tag || 'Standard'}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-slate-300">{p.format || 'Cosmetic Formulation'}</td>
                              <td className="py-3 px-4 font-semibold text-emerald-400">{p.moq || '500 Units'}</td>
                              <td className="py-3 px-4">
                                <span
                                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                    p.status === 'ACTIVE'
                                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-700/80'
                                      : 'bg-amber-950/80 text-amber-400 border border-amber-700/80'
                                  }`}
                                >
                                  {p.status}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-right">
                                <a
                                  href={`http://localhost:3000/products/${selectedCategorySlug}/${p.slug}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300 mr-2"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
