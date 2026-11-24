'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import AdminHeader from '@/components/AdminHeader';
import ImageUploadInput from '@/components/ImageUploadInput';
import {
  Save,
  Plus,
  Trash2,
  Eye,
  Check,
  RefreshCw,
  ArrowLeft,
  Tag,
  FlaskConical,
  ExternalLink,
  Search,
  X,
  Edit2,
  Layers,
  ShieldCheck,
} from 'lucide-react';

type TabKey = 'hero' | 'manufacturer' | 'products';

interface ParagraphItem {
  text: string;
  highlight?: string;
}

interface WhyChooseItem {
  title: string;
  desc?: string;
  description?: string;
}

interface ProductItem {
  _id?: string;
  id: string;
  name: string;
  slug?: string;
  format?: string;
  texture?: string;
  target?: string;
  moq?: string;
  status?: string;
  actives?: string[];
  keyActives?: string[];
  image?: string;
  imageAlt?: string;
  tagline?: string;
  pH?: string;
  packagingOptions?: string[];
  packagingTypes?: string[];
  overviewParagraphs?: string[];
  whyChoosePoints?: WhyChooseItem[];
  expandParagraphs?: string[];
}

interface CategoryCmsData {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
  image: string;
  featuredActives: string[];
  hero: {
    title: string;
    subtitle: string;
    bgImage: string;
  };
  manufacturerSection: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    plantBadge: string;
    moqBadge: string;
    paragraphs: ParagraphItem[];
    highlights: string[];
  };
  productRange: {
    title: string;
    description: string;
    filterTags: string[];
  };
  products: ProductItem[];
}

const defaultCategoryData: CategoryCmsData = {
  id: 'CAT-01',
  name: 'Face Wash Formulations',
  slug: 'cleansers-toners',
  description: 'High-performance cosmetics category compounded in Ahmedabad sterile cleanroom campus.',
  productCount: 0,
  image: '/images/categories/cat-face-wash.jpg',
  featuredActives: ['Clean Actives', 'Stability Tested'],
  hero: {
    title: 'Face Washes & Cleansers',
    subtitle: 'Custom formulations tailored for your brand.',
    bgImage: '/images/categories/cat-face-wash.jpg',
  },
  manufacturerSection: {
    title: 'TOP FACE WASH MANUFACTURERS IN INDIA',
    subtitle: 'Custom Formulations Tailored for Your Brand',
    image: '/images/categories/cat-face-wash.jpg',
    imageAlt: 'Manufacturing Cleanroom Compounding',
    plantBadge: 'Ahmedabad Manufacturing Plant',
    moqBadge: 'Flexible Low MOQ',
    paragraphs: [
      {
        text: 'Mani Lifestyle manufactures bespoke cosmetics formulations adhering to international standards in sterile cleanrooms.',
        highlight: '',
      },
    ],
    highlights: [
      '100% Sulfate-Free & Paraben-Free Chemistry',
      'Formulated at Skin-Identical pH Balance',
      'Pilot Batches Starting from 500 Units',
    ],
  },
  productRange: {
    title: 'FACE WASH PRODUCT RANGE',
    description: 'Select any formulation below to request laboratory bench samples, COA documentation, and pilot batch quotes.',
    filterTags: ['All Formulations', 'Clinical Actives', 'Herbal & Ayurvedic'],
  },
  products: [],
};

export default function CategoryDetailPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;

  const [cms, setCms] = useState<CategoryCmsData>(defaultCategoryData);
  const [activeTab, setActiveTab] = useState<TabKey>('products'); // Default to products tab for rapid editing
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Search & Filter state for Formulations Catalog
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'ACTIVE' | 'DRAFT'>('ALL');

  // Modal State for Editing Full Product Details
  const [editingProduct, setEditingProduct] = useState<ProductItem | null>(null);
  const [savingProductDetail, setSavingProductDetail] = useState(false);

  // Modal State for Adding a New Formulation
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [creatingProduct, setCreatingProduct] = useState(false);
  const [newProdName, setNewProdName] = useState('');
  const [newProdSlug, setNewProdSlug] = useState('');
  const [newProdFormat, setNewProdFormat] = useState('Foaming Cleansing Gel');
  const [newProdTarget, setNewProdTarget] = useState('All Skin Types');
  const [newProdMoq, setNewProdMoq] = useState('500 Units');
  const [newProdStatus, setNewProdStatus] = useState('ACTIVE');

  // New item inputs for Tab 2 & 3 tags
  const [newTagInput, setNewTagInput] = useState('');
  const [newHighlightInput, setNewHighlightInput] = useState('');

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchCategoryData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://mani-life-1n34.vercel.app/api/categories/${categorySlug}`);
      if (res.ok) {
        const data = await res.json();
        if (data && (data.name || data.hero)) {
          setCms({
            id: data.id || defaultCategoryData.id,
            name: data.name || defaultCategoryData.name,
            slug: data.slug || categorySlug,
            description: data.description || defaultCategoryData.description,
            productCount: data.productCount || (data.products?.length || 0),
            image: data.image || defaultCategoryData.image,
            featuredActives: data.featuredActives || defaultCategoryData.featuredActives,
            hero: {
              title: data.hero?.title || data.name || defaultCategoryData.hero.title,
              subtitle: data.hero?.subtitle || data.description || defaultCategoryData.hero.subtitle,
              bgImage: data.hero?.bgImage || data.image || defaultCategoryData.hero.bgImage,
            },
            manufacturerSection: {
              title: data.manufacturerSection?.title || defaultCategoryData.manufacturerSection.title,
              subtitle: data.manufacturerSection?.subtitle || defaultCategoryData.manufacturerSection.subtitle,
              image: data.manufacturerSection?.image || data.image || defaultCategoryData.manufacturerSection.image,
              imageAlt: data.manufacturerSection?.imageAlt || defaultCategoryData.manufacturerSection.imageAlt,
              plantBadge: data.manufacturerSection?.plantBadge || defaultCategoryData.manufacturerSection.plantBadge,
              moqBadge: data.manufacturerSection?.moqBadge || defaultCategoryData.manufacturerSection.moqBadge,
              paragraphs:
                data.manufacturerSection?.paragraphs && data.manufacturerSection.paragraphs.length > 0
                  ? data.manufacturerSection.paragraphs
                  : defaultCategoryData.manufacturerSection.paragraphs,
              highlights:
                data.manufacturerSection?.highlights && data.manufacturerSection.highlights.length > 0
                  ? data.manufacturerSection.highlights
                  : defaultCategoryData.manufacturerSection.highlights,
            },
            productRange: {
              title: data.productRange?.title || `${(data.name || 'Category').toUpperCase()} PRODUCT RANGE`,
              description: data.productRange?.description || defaultCategoryData.productRange.description,
              filterTags:
                data.productRange?.filterTags && data.productRange.filterTags.length > 0
                  ? data.productRange.filterTags
                  : defaultCategoryData.productRange.filterTags,
            },
            products: data.products || [],
          });
        }
      }
    } catch (err) {
      console.error('Failed to load category CMS data from backend:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, [categorySlug]);

  // Master Save (Saves Category & All Formulations live to MongoDB Atlas)
  const handleSave = async () => {
    try {
      setSaving(true);
      const res = await fetch(`https://mani-life-1n34.vercel.app/api/categories/${categorySlug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cms),
      });

      if (res.ok) {
        showToast(`${cms.hero?.title || cms.name} & ${cms.products?.length || 0} formulations saved to MongoDB!`);
      } else {
        const err = await res.json();
        showToast(`Save Error: ${err.error || 'Failed to save to MongoDB Atlas'}`);
      }
    } catch (error: any) {
      console.error('Error saving Category CMS:', error);
      showToast(`Network Error: ${error.message || 'Backend connection failed'}`);
    } finally {
      setSaving(false);
    }
  };

  // -------------------------------------------------------------
  // TAB 2: MANUFACTURER SECTION HANDLERS
  // -------------------------------------------------------------
  const handleAddParagraph = () => {
    const newPara: ParagraphItem = {
      text: 'New comprehensive narrative explaining formula chemistry, cosmetic targets, and cleanroom packaging options.',
      highlight: '',
    };
    setCms((prev) => ({
      ...prev,
      manufacturerSection: {
        ...prev.manufacturerSection,
        paragraphs: [...(prev.manufacturerSection.paragraphs || []), newPara],
      },
    }));
  };

  const handleUpdateParagraph = (index: number, text: string) => {
    const updated = [...(cms.manufacturerSection.paragraphs || [])];
    updated[index] = { ...updated[index], text };
    setCms((prev) => ({
      ...prev,
      manufacturerSection: { ...prev.manufacturerSection, paragraphs: updated },
    }));
  };

  const handleDeleteParagraph = (index: number) => {
    const updated = cms.manufacturerSection.paragraphs.filter((_, i) => i !== index);
    setCms((prev) => ({
      ...prev,
      manufacturerSection: { ...prev.manufacturerSection, paragraphs: updated },
    }));
  };

  const handleAddHighlight = () => {
    if (!newHighlightInput.trim()) return;
    setCms((prev) => ({
      ...prev,
      manufacturerSection: {
        ...prev.manufacturerSection,
        highlights: [...(prev.manufacturerSection.highlights || []), newHighlightInput.trim()],
      },
    }));
    setNewHighlightInput('');
  };

  const handleDeleteHighlight = (index: number) => {
    const updated = cms.manufacturerSection.highlights.filter((_, i) => i !== index);
    setCms((prev) => ({
      ...prev,
      manufacturerSection: { ...prev.manufacturerSection, highlights: updated },
    }));
  };

  // -------------------------------------------------------------
  // TAB 3: PRODUCT RANGE & FORMULATIONS HANDLERS
  // -------------------------------------------------------------
  const handleAddFilterTag = () => {
    if (!newTagInput.trim()) return;
    setCms((prev) => ({
      ...prev,
      productRange: {
        ...prev.productRange,
        filterTags: [...(prev.productRange.filterTags || []), newTagInput.trim()],
      },
    }));
    setNewTagInput('');
  };

  const handleDeleteFilterTag = (index: number) => {
    const updated = cms.productRange.filterTags.filter((_, i) => i !== index);
    setCms((prev) => ({
      ...prev,
      productRange: { ...prev.productRange, filterTags: updated },
    }));
  };

  // Inline updates for quick card fields
  const handleUpdateProductInline = (index: number, field: keyof ProductItem, value: any) => {
    const updated = [...(cms.products || [])];
    updated[index] = { ...updated[index], [field]: value };
    setCms((prev) => ({
      ...prev,
      products: updated,
    }));
  };

  const handleToggleProductStatus = (index: number) => {
    const current = cms.products[index]?.status || 'ACTIVE';
    const nextStatus = current === 'ACTIVE' ? 'DRAFT' : 'ACTIVE';
    handleUpdateProductInline(index, 'status', nextStatus);
  };

  // Delete product directly from MongoDB Atlas
  const handleDeleteProduct = async (product: ProductItem, index: number) => {
    const identifier = product._id || product.id || product.slug;
    if (!identifier) return;

    if (!confirm(`Are you sure you want to delete formulation "${product.name}" from MongoDB Atlas?`)) {
      return;
    }

    try {
      const res = await fetch(`https://mani-life-1n34.vercel.app/api/products/${identifier}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        const updated = cms.products.filter((_, i) => i !== index);
        setCms((prev) => ({
          ...prev,
          products: updated,
          productCount: updated.length,
        }));
        showToast(`Formulation "${product.name}" deleted from database.`);
      } else {
        showToast(`Failed to delete formulation from backend.`);
      }
    } catch (err: any) {
      console.error('Error deleting product:', err);
      showToast(`Delete Error: ${err.message}`);
    }
  };

  // Create new formulation via POST /api/products
  const handleCreateProduct = async () => {
    if (!newProdName.trim()) {
      alert('Please enter a formulation name');
      return;
    }

    const slug = (newProdSlug.trim() || newProdName)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    try {
      setCreatingProduct(true);
      const payload = {
        name: newProdName.trim(),
        slug,
        category: cms.hero?.title || cms.name || 'Face Wash',
        categorySlug: categorySlug,
        format: newProdFormat.trim(),
        target: newProdTarget.trim(),
        moq: newProdMoq.trim(),
        status: newProdStatus,
        actives: ['Clean Botanical Actives'],
        overviewParagraphs: [
          `${newProdName.trim()} is precision-compounded by Mani Lifestyle adhering to ISO 22716 & WHO-GMP cleanroom standards.`
        ],
        whyChoosePoints: [
          { title: 'Custom Formula Stability', desc: 'Accelerated thermal & physical stability verified in-house.' },
          { title: 'Flexible Low MOQ', desc: 'Pilot batches starting from 500 units for agile commercial launch.' }
        ],
      };

      const res = await fetch('https://mani-life-1n34.vercel.app/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const created = await res.json();
        setCms((prev) => ({
          ...prev,
          products: [created, ...(prev.products || [])],
          productCount: (prev.products?.length || 0) + 1,
        }));
        showToast(`Created formulation "${created.name}" successfully!`);
        setIsAddModalOpen(false);
        setNewProdName('');
        setNewProdSlug('');
      } else {
        const err = await res.json();
        showToast(`Error: ${err.error || 'Failed to create product'}`);
      }
    } catch (err: any) {
      console.error('Error creating product:', err);
      showToast(`Network Error: ${err.message}`);
    } finally {
      setCreatingProduct(false);
    }
  };

  // Save detailed product changes via PUT /api/products/:idOrSlug
  const handleSaveProductDetail = async () => {
    if (!editingProduct) return;
    const identifier = editingProduct.slug || editingProduct.id || editingProduct._id;
    if (!identifier) return;

    try {
      setSavingProductDetail(true);
      const res = await fetch(`https://mani-life-1n34.vercel.app/api/products/${encodeURIComponent(identifier)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingProduct),
      });

      if (res.ok) {
        const updated = await res.json();
        // Update local products list
        setCms((prev) => ({
          ...prev,
          products: prev.products.map((p) =>
            (p._id && p._id === updated._id) || (p.id && p.id === updated.id) || p.slug === updated.slug
              ? { ...p, ...updated }
              : p
          ),
        }));
        showToast(`Formulation "${editingProduct.name}" details updated in database!`, 'success');
        setEditingProduct(null);
      } else {
        const err = await res.json();
        showToast(`Error updating product: ${err.error || 'Failed'}`, 'error');
      }
    } catch (err: any) {
      console.error('Error updating product details:', err);
      showToast(`Network Error: ${err.message}`, 'error');
    } finally {
      setSavingProductDetail(false);
    }
  };

  // Filter products by search and status
  const filteredProducts = (cms.products || []).filter((prod) => {
    const matchesSearch =
      !searchQuery.trim() ||
      prod.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.slug?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.format?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.target?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.id?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === 'ALL' ||
      (statusFilter === 'ACTIVE' && prod.status !== 'DRAFT') ||
      (statusFilter === 'DRAFT' && prod.status === 'DRAFT');

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex-1 flex flex-col bg-[#06131f] text-slate-200 font-sans min-h-screen">
      <AdminHeader
        title={`${cms.hero?.title || cms.name} CMS Studio`}
        subtitle={`Manage hero masthead, top manufacturer narrative, plant badges, and ${cms.products?.length || 0} formulation products with live MongoDB Atlas synchronization`}
      />

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-300 border ${
            toast.type === 'error'
              ? 'bg-rose-950/95 border-rose-500/80 text-rose-200'
              : 'bg-emerald-950/95 border-emerald-500/80 text-emerald-200'
          }`}
        >
          {toast.type === 'error' ? (
            <X className="w-4 h-4 text-rose-400 shrink-0" />
          ) : (
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          )}
          <span className="text-xs font-medium">{toast.message}</span>
        </div>
      )}

      <div className="p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
        {/* Top Control Bar & Breadcrumbs */}
        <div className="bg-[#0b2136] p-5 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#14334d]/80">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Link
                  href="/home"
                  className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium transition-colors"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Home CMS</span>
                </Link>
                <span className="text-slate-600">•</span>
                <Link
                  href="/categories"
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Categories CMS
                </Link>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-mono text-sky-400">/{categorySlug}</span>
              </div>

              <h2 className="text-base font-semibold text-white">
                {cms.hero?.title || cms.name}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Live Storefront URL:{' '}
                <a
                  href={`http://localhost:3000/products/${categorySlug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:underline font-mono"
                >
                  http://localhost:3000/products/{categorySlug}
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`http://localhost:3000/products/${categorySlug}`}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-medium bg-[#06131f] text-slate-300 hover:text-white border border-[#14334d] flex items-center gap-1.5 transition-all"
              >
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span>Preview Storefront</span>
              </a>

              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950 flex items-center gap-1.5 cursor-pointer disabled:opacity-50 transition-all"
              >
                {saving ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Saving to MongoDB...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    <span>Save All Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Clean Tab Bar: flex-wrap, no icons on tabs, no horizontal slider */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: 'products', label: `1. Formulations Catalog (${cms.products?.length || 0})` },
              { key: 'hero', label: '2. Hero Masthead' },
              { key: 'manufacturer', label: '3. Top Manufacturer Section' },
            ].map((tab) => {
              const isSelected = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key as TabKey)}
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
            <span className="text-xs text-slate-400">Loading {categorySlug} formulations from MongoDB Atlas...</span>
          </div>
        ) : (
          <div className="space-y-6">
            {/* ======================================================== */}
            {/* TAB 1: FORMULATIONS CATALOG MANAGEMENT                   */}
            {/* ======================================================== */}
            {activeTab === 'products' && (
              <div className="space-y-6">
                {/* Formulations Header, Search, Filter & Add Button */}
                <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#14334d] pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <FlaskConical className="w-5 h-5 text-sky-400" />
                        <h3 className="text-base font-semibold text-white">
                          Formulations in {cms.hero?.title || cms.name}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-sky-950 text-sky-300 border border-sky-800">
                          {cms.products?.length || 0} Total
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        These are the formulations rendered in the 3-column storefront list on{' '}
                        <code className="text-sky-300 font-mono">/products/{categorySlug}</code>. Clicking any formulation takes visitors to its detail CMS page.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setNewProdName('');
                        setNewProdSlug('');
                        setIsAddModalOpen(true);
                      }}
                      className="px-4 py-2 bg-[#164666] hover:bg-sky-600 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-md transition-all cursor-pointer shrink-0"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add New Formulation</span>
                    </button>
                  </div>

                  {/* Search Bar & Status Filters */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                    <div className="relative w-full sm:w-96">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search formulations by name, slug, format, or target..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-[#06131f] border border-[#14334d] rounded-xl text-white text-xs placeholder:text-slate-500 focus:outline-hidden focus:border-sky-400"
                      />
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <span className="text-[11px] text-slate-400 font-medium">Status:</span>
                      {(['ALL', 'ACTIVE', 'DRAFT'] as const).map((st) => (
                        <button
                          key={st}
                          type="button"
                          onClick={() => setStatusFilter(st)}
                          className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                            statusFilter === st
                              ? 'bg-sky-600 text-white'
                              : 'bg-[#06131f] text-slate-400 hover:text-white border border-[#14334d]'
                          }`}
                        >
                          {st === 'ALL' ? 'All' : st === 'ACTIVE' ? 'Active' : 'Draft'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Formulations List Cards */}
                <div className="space-y-3">
                  {filteredProducts.length === 0 ? (
                    <div className="bg-[#0b2136] p-10 rounded-2xl border border-[#163e5c] text-center text-slate-400 text-xs">
                      No formulations found matching &quot;{searchQuery}&quot;. Click &quot;Add New Formulation&quot; above to create one.
                    </div>
                  ) : (
                    filteredProducts.map((prod, pIdx) => {
                      const actualIdx = cms.products.findIndex(
                        (p) => (p._id && p._id === prod._id) || (p.id && p.id === prod.id) || p.slug === prod.slug
                      );
                      const isDraft = prod.status === 'DRAFT';
                      const itemSlug = prod.slug || prod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

                      return (
                        <div
                          key={prod._id || prod.id || pIdx}
                          className={`p-4 bg-[#0b2136] rounded-2xl border transition-all space-y-3 shadow-md ${
                            isDraft ? 'border-amber-900/50 bg-[#091a2a]/90' : 'border-[#163e5c] hover:border-sky-500/40'
                          }`}
                        >
                          {/* Card Top Row: ID, Name, Slug, Status toggle, and Live Link */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#14334d]/70 pb-2.5">
                            <div className="flex flex-wrap items-center gap-2.5">
                              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                                {prod.id || `P-${pIdx + 1}`}
                              </span>
                              <span className="text-sm font-semibold text-white">
                                {prod.name}
                              </span>
                              <span className="text-[11px] font-mono text-slate-400">
                                /{categorySlug}/{itemSlug}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              {/* Status Toggle Button */}
                              <button
                                type="button"
                                onClick={() => handleToggleProductStatus(actualIdx >= 0 ? actualIdx : pIdx)}
                                className={`px-2.5 py-1 rounded-md text-[10px] font-semibold border transition-all cursor-pointer ${
                                  isDraft
                                    ? 'bg-amber-950/70 text-amber-300 border-amber-700/80 hover:bg-amber-900'
                                    : 'bg-emerald-950/70 text-emerald-300 border-emerald-700/80 hover:bg-emerald-900'
                                }`}
                                title="Click to toggle Active / Draft"
                              >
                                {isDraft ? '● DRAFT (Hidden)' : '● ACTIVE (Live)'}
                              </button>

                              {/* Preview Public Page */}
                              <a
                                href={`http://localhost:3000/products/${categorySlug}/${itemSlug}`}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1.5 text-slate-400 hover:text-sky-300 transition-colors"
                                title="Preview Formulation Detail Page"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>

                              {/* Delete Formulation */}
                              <button
                                type="button"
                                onClick={() => handleDeleteProduct(prod, actualIdx >= 0 ? actualIdx : pIdx)}
                                className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                                title="Delete Formulation from MongoDB"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Card Middle Row: Quick Editable Fields */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                            <div>
                              <label className="block text-[10px] text-slate-400 mb-0.5 font-medium">
                                Formulation Name
                              </label>
                              <input
                                type="text"
                                value={prod.name}
                                onChange={(e) =>
                                  handleUpdateProductInline(
                                    actualIdx >= 0 ? actualIdx : pIdx,
                                    'name',
                                    e.target.value
                                  )
                                }
                                className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded-lg text-white font-medium"
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] text-slate-400 mb-0.5 font-medium">
                                Format / Base Texture
                              </label>
                              <input
                                type="text"
                                value={prod.format || prod.texture || ''}
                                onChange={(e) =>
                                  handleUpdateProductInline(
                                    actualIdx >= 0 ? actualIdx : pIdx,
                                    'format',
                                    e.target.value
                                  )
                                }
                                className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                                placeholder="e.g. Foaming Cleansing Gel"
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] text-slate-400 mb-0.5 font-medium">
                                Ideal Skin / Concern Target
                              </label>
                              <input
                                type="text"
                                value={prod.target || ''}
                                onChange={(e) =>
                                  handleUpdateProductInline(
                                    actualIdx >= 0 ? actualIdx : pIdx,
                                    'target',
                                    e.target.value
                                  )
                                }
                                className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                                placeholder="e.g. Acne & Blemish Control"
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] text-slate-400 mb-0.5 font-medium">
                                Pilot Batch MOQ
                              </label>
                              <input
                                type="text"
                                value={prod.moq || '500 Units'}
                                onChange={(e) =>
                                  handleUpdateProductInline(
                                    actualIdx >= 0 ? actualIdx : pIdx,
                                    'moq',
                                    e.target.value
                                  )
                                }
                                className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded-lg text-white font-mono"
                              />
                            </div>
                          </div>

                          {/* Card Bottom Row: Action to open Full Detail CMS Modal */}
                          <div className="pt-2 flex items-center justify-between border-t border-[#14334d]/50 text-xs">
                            <span className="text-[11px] text-slate-400">
                              Actives: {(prod.actives || prod.keyActives || []).slice(0, 3).join(', ') || 'Botanical Extracts'}
                            </span>

                            <button
                              type="button"
                              onClick={() => setEditingProduct(prod)}
                              className="px-3 py-1.5 rounded-lg bg-[#06131f] hover:bg-[#164666] text-sky-300 hover:text-white border border-[#14334d] hover:border-sky-400 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer"
                            >
                              <Edit2 className="w-3.5 h-3.5 text-sky-400" />
                              <span>Edit Full CMS Details →</span>
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Range Header Section Customization */}
                <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
                  <div className="border-b border-[#14334d] pb-3">
                    <h3 className="text-sm font-semibold text-white">Storefront Range Header & Filter Tags</h3>
                    <p className="text-xs text-slate-400">
                      Controls the section title, description narrative, and pill tags on{' '}
                      <code className="text-sky-300 font-mono">/products/{categorySlug}</code>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Range Section Title</label>
                      <input
                        type="text"
                        value={cms.productRange.title}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            productRange: { ...cms.productRange, title: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white font-semibold"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-slate-300 font-medium mb-1">Description</label>
                      <textarea
                        rows={3}
                        value={cms.productRange.description}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            productRange: { ...cms.productRange, description: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white leading-relaxed"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-slate-300 font-medium">Filter Grouping Tags</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="e.g. Acne & Clarifying"
                          value={newTagInput}
                          onChange={(e) => setNewTagInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleAddFilterTag()}
                          className="flex-1 px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                        />
                        <button
                          type="button"
                          onClick={handleAddFilterTag}
                          className="px-3.5 py-2 bg-[#164666] hover:bg-sky-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Tag</span>
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {cms.productRange.filterTags?.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06131f] text-sky-300 border border-[#14334d] text-xs font-medium"
                          >
                            <Tag className="w-3 h-3 text-sky-400" />
                            <span>{tag}</span>
                            <button
                              type="button"
                              onClick={() => handleDeleteFilterTag(tIdx)}
                              className="text-slate-500 hover:text-rose-400 ml-1 cursor-pointer"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 2: HERO BANNER                                       */}
            {/* ======================================================== */}
            {activeTab === 'hero' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 1: Hero Masthead Statement</h3>
                  <p className="text-xs text-slate-400">
                    Controls the opening viewport title, subtitle, and luxury background image for {cms.hero?.title || cms.name}.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Category Title</label>
                    <input
                      type="text"
                      value={cms.hero.title}
                      onChange={(e) =>
                        setCms({ ...cms, hero: { ...cms.hero, title: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400 font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Route Slug (Read-Only)</label>
                    <input
                      type="text"
                      value={cms.slug}
                      readOnly
                      className="w-full px-3 py-2 bg-[#061421] border border-[#14334d] rounded-lg text-slate-400 font-mono"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Subtitle / Tagline</label>
                    <textarea
                      rows={4}
                      value={cms.hero.subtitle}
                      onChange={(e) =>
                        setCms({ ...cms, hero: { ...cms.hero, subtitle: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white leading-relaxed focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <ImageUploadInput
                      label="Hero Background Image"
                      value={cms.hero.bgImage}
                      onChange={(url) =>
                        setCms({ ...cms, hero: { ...cms.hero, bgImage: url } })
                      }
                      folder="mani-lifestyle/categories"
                      placeholder="/images/categories/cat-face-wash.jpg"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 3: TOP MANUFACTURER SECTION                          */}
            {/* ======================================================== */}
            {activeTab === 'manufacturer' && (
              <div className="space-y-6">
                {/* Header, Badges, and Visual Image */}
                <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
                  <div className="border-b border-[#14334d] pb-3">
                    <h3 className="text-sm font-semibold text-white">Top Manufacturers Section Overview</h3>
                    <p className="text-xs text-slate-400">
                      Controls headlines, facility badges, and showcase imagery on the left side of the overview.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Section Heading Title</label>
                      <input
                        type="text"
                        value={cms.manufacturerSection.title}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            manufacturerSection: {
                              ...cms.manufacturerSection,
                              title: e.target.value,
                            },
                          })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Section Subtitle</label>
                      <input
                        type="text"
                        value={cms.manufacturerSection.subtitle}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            manufacturerSection: {
                              ...cms.manufacturerSection,
                              subtitle: e.target.value,
                            },
                          })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Plant Location Badge</label>
                      <input
                        type="text"
                        value={cms.manufacturerSection.plantBadge}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            manufacturerSection: {
                              ...cms.manufacturerSection,
                              plantBadge: e.target.value,
                            },
                          })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">MOQ Badge</label>
                      <input
                        type="text"
                        value={cms.manufacturerSection.moqBadge}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            manufacturerSection: {
                              ...cms.manufacturerSection,
                              moqBadge: e.target.value,
                            },
                          })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <ImageUploadInput
                        label="Product Showcase Image"
                        value={cms.manufacturerSection.image}
                        onChange={(url) =>
                          setCms({
                            ...cms,
                            manufacturerSection: {
                              ...cms.manufacturerSection,
                              image: url,
                            },
                          })
                        }
                        folder="mani-lifestyle/categories"
                        placeholder="/images/categories/cat-face-wash.jpg"
                      />
                    </div>
                  </div>
                </div>

                {/* Narrative Paragraphs */}
                <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-[#14334d] pb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        Narrative Paragraphs ({cms.manufacturerSection.paragraphs?.length || 0})
                      </h3>
                      <p className="text-xs text-slate-400">
                        Detailed industry narrative explaining market trends, formulation stability, and private label compounding.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddParagraph}
                      className="px-3 py-1.5 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Paragraph</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {cms.manufacturerSection.paragraphs?.map((p, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-[#06131f] rounded-2xl border border-[#14334d] space-y-2"
                      >
                        <div className="flex items-center justify-between border-b border-[#14334d]/60 pb-2">
                          <span className="text-xs font-mono font-bold text-sky-400">
                            Paragraph #{idx + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleDeleteParagraph(idx)}
                            className="text-slate-500 hover:text-rose-400 transition-colors p-1 cursor-pointer"
                            title="Delete Paragraph"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <textarea
                          rows={4}
                          value={p.text}
                          onChange={(e) => handleUpdateParagraph(idx, e.target.value)}
                          className="w-full px-3 py-2 bg-[#0b2136] border border-[#163e5c] rounded-xl text-white text-xs leading-relaxed focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights Bullets */}
                <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
                  <div className="border-b border-[#14334d] pb-3">
                    <h3 className="text-sm font-semibold text-white">
                      Manufacturing Highlights ({cms.manufacturerSection.highlights?.length || 0})
                    </h3>
                    <p className="text-xs text-slate-400">
                      Checkmarked bullet points showcasing clean beauty standards and laboratory certifications.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="e.g. 100% Sulfate-Free (SLS/SLES Free) Surfactants"
                      value={newHighlightInput}
                      onChange={(e) => setNewHighlightInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddHighlight()}
                      className="flex-1 px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                    />
                    <button
                      type="button"
                      onClick={handleAddHighlight}
                      className="px-3.5 py-2 bg-[#164666] hover:bg-sky-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Bullet</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {cms.manufacturerSection.highlights?.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-3 bg-[#06131f] rounded-xl border border-[#14334d] flex items-center justify-between gap-2 text-xs"
                      >
                        <div className="flex items-center gap-2 text-slate-200">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleDeleteHighlight(hIdx)}
                          className="text-slate-500 hover:text-rose-400 transition-colors p-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* MODAL: ADD NEW FORMULATION                               */}
      {/* ======================================================== */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0b2136] border border-[#163e5c] rounded-2xl p-6 max-w-lg w-full space-y-5 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-[#14334d] pb-3">
              <div className="flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-sky-400" />
                <h3 className="text-base font-semibold text-white">Add New Formulation</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Formulation Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Salicylic Acid & Niacinamide Face Wash"
                  value={newProdName}
                  onChange={(e) => {
                    setNewProdName(e.target.value);
                    if (!newProdSlug) {
                      setNewProdSlug(
                        e.target.value
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, '-')
                          .replace(/(^-|-$)/g, '')
                      );
                    }
                  }}
                  className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">URL Route Slug *</label>
                <input
                  type="text"
                  placeholder="e.g. salicylic-acid-niacinamide-face-wash"
                  value={newProdSlug}
                  onChange={(e) => setNewProdSlug(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white font-mono text-[11px]"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">
                  Public page will be: /products/{categorySlug}/{newProdSlug || 'slug'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Format / Texture</label>
                  <input
                    type="text"
                    value={newProdFormat}
                    onChange={(e) => setNewProdFormat(e.target.value)}
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Ideal Target</label>
                  <input
                    type="text"
                    value={newProdTarget}
                    onChange={(e) => setNewProdTarget(e.target.value)}
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Pilot Batch MOQ</label>
                  <input
                    type="text"
                    value={newProdMoq}
                    onChange={(e) => setNewProdMoq(e.target.value)}
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Initial Status</label>
                  <select
                    value={newProdStatus}
                    onChange={(e) => setNewProdStatus(e.target.value)}
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                  >
                    <option value="ACTIVE">ACTIVE (Visible on Storefront)</option>
                    <option value="DRAFT">DRAFT (Hidden)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#14334d] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-medium bg-[#06131f] text-slate-300 hover:text-white border border-[#14334d] cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleCreateProduct}
                disabled={creatingProduct}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {creatingProduct ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Creating in MongoDB...</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create Formulation</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL: EDIT FULL FORMULATION CMS DETAILS                 */}
      {/* ======================================================== */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0b2136] border border-[#163e5c] rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#14334d] pb-3 sticky top-0 bg-[#0b2136] z-10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                    {editingProduct.id}
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    Edit {editingProduct.name} CMS
                  </h3>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">
                  Live Route: /products/{categorySlug}/{editingProduct.slug}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setEditingProduct(null)}
                className="text-slate-400 hover:text-white p-1 rounded cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Form */}
            <div className="space-y-5 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Formulation Name</label>
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, name: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white font-medium"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Route Slug</label>
                  <input
                    type="text"
                    value={editingProduct.slug || ''}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, slug: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white font-mono text-[11px]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Format / Texture</label>
                  <input
                    type="text"
                    value={editingProduct.format || editingProduct.texture || ''}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        format: e.target.value,
                        texture: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Ideal Target Skin / Concern</label>
                  <input
                    type="text"
                    value={editingProduct.target || ''}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, target: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">MOQ</label>
                  <input
                    type="text"
                    value={editingProduct.moq || '500 Units'}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, moq: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">pH Balance</label>
                  <input
                    type="text"
                    value={editingProduct.pH || 'pH 5.5'}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, pH: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-slate-300 font-medium mb-1">Headline Tagline</label>
                  <input
                    type="text"
                    value={editingProduct.tagline || ''}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, tagline: e.target.value })
                    }
                    placeholder="e.g. Pure Plant-Based Gentle Botanical Cleanser"
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <ImageUploadInput
                    label="Formulation Product Image"
                    value={editingProduct.image || ''}
                    onChange={(url) => setEditingProduct({ ...editingProduct, image: url })}
                    folder="mani-lifestyle/products"
                    placeholder="/images/products/natural-face-wash.jpg"
                  />
                </div>
              </div>

              {/* Key Actives (Comma-Separated) */}
              <div className="space-y-1.5 pt-2 border-t border-[#14334d]">
                <label className="block text-slate-300 font-medium">
                  Key Actives (Comma-Separated)
                </label>
                <input
                  type="text"
                  value={(editingProduct.actives || editingProduct.keyActives || []).join(', ')}
                  onChange={(e) => {
                    const arr = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                    setEditingProduct({
                      ...editingProduct,
                      actives: arr,
                      keyActives: arr,
                    });
                  }}
                  placeholder="e.g. Soapnut (Reetha) Extract, Shikakai Botanical Surfactants, Rosewater Hydrosol"
                  className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                />
              </div>

              {/* Packaging Options (Comma-Separated) */}
              <div className="space-y-1.5">
                <label className="block text-slate-300 font-medium">
                  Packaging Types & Options (Comma-Separated)
                </label>
                <input
                  type="text"
                  value={(editingProduct.packagingOptions || editingProduct.packagingTypes || []).join(', ')}
                  onChange={(e) => {
                    const arr = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                    setEditingProduct({
                      ...editingProduct,
                      packagingOptions: arr,
                      packagingTypes: arr,
                    });
                  }}
                  placeholder="e.g. Eco-Friendly PCR Tube (100ml / 150ml), Clear Pump Bottle, Biodegradable Packaging"
                  className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                />
              </div>

              {/* Overview Narrative Paragraphs */}
              <div className="space-y-3 pt-2 border-t border-[#14334d]">
                <div className="flex items-center justify-between">
                  <label className="block text-slate-300 font-medium">
                    Overview Narrative Paragraphs ({editingProduct.overviewParagraphs?.length || 0})
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      const paras = [...(editingProduct.overviewParagraphs || [])];
                      paras.push('New overview paragraph describing formulation efficacy and manufacturer standards.');
                      setEditingProduct({ ...editingProduct, overviewParagraphs: paras });
                    }}
                    className="px-2.5 py-1 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded text-[11px] font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Paragraph</span>
                  </button>
                </div>

                {(editingProduct.overviewParagraphs || []).map((para, paraIdx) => (
                  <div key={paraIdx} className="p-3 bg-[#06131f] rounded-xl border border-[#14334d] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-sky-400">Paragraph #{paraIdx + 1}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const paras = editingProduct.overviewParagraphs?.filter((_, i) => i !== paraIdx);
                          setEditingProduct({ ...editingProduct, overviewParagraphs: paras });
                        }}
                        className="text-slate-500 hover:text-rose-400 p-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <textarea
                      rows={3}
                      value={para}
                      onChange={(e) => {
                        const paras = [...(editingProduct.overviewParagraphs || [])];
                        paras[paraIdx] = e.target.value;
                        setEditingProduct({ ...editingProduct, overviewParagraphs: paras });
                      }}
                      className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs leading-relaxed"
                    />
                  </div>
                ))}
              </div>

              {/* Why Choose Bullet Points */}
              <div className="space-y-3 pt-2 border-t border-[#14334d]">
                <div className="flex items-center justify-between">
                  <label className="block text-slate-300 font-medium">
                    Why Choose Points ({editingProduct.whyChoosePoints?.length || 0})
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      const points = [...(editingProduct.whyChoosePoints || [])];
                      points.push({ title: 'Point Headline', desc: 'Description of formulation quality benefit.' });
                      setEditingProduct({ ...editingProduct, whyChoosePoints: points });
                    }}
                    className="px-2.5 py-1 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded text-[11px] font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Point</span>
                  </button>
                </div>

                {(editingProduct.whyChoosePoints || []).map((pt, ptIdx) => (
                  <div key={ptIdx} className="p-3 bg-[#06131f] rounded-xl border border-[#14334d] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-sky-400">Point #{ptIdx + 1}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const points = editingProduct.whyChoosePoints?.filter((_, i) => i !== ptIdx);
                          setEditingProduct({ ...editingProduct, whyChoosePoints: points });
                        }}
                        className="text-slate-500 hover:text-rose-400 p-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div>
                        <input
                          type="text"
                          value={pt.title}
                          onChange={(e) => {
                            const points = [...(editingProduct.whyChoosePoints || [])];
                            points[ptIdx] = { ...points[ptIdx], title: e.target.value };
                            setEditingProduct({ ...editingProduct, whyChoosePoints: points });
                          }}
                          placeholder="Headline"
                          className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white font-medium"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <input
                          type="text"
                          value={pt.desc || pt.description || ''}
                          onChange={(e) => {
                            const points = [...(editingProduct.whyChoosePoints || [])];
                            points[ptIdx] = { ...points[ptIdx], desc: e.target.value, description: e.target.value };
                            setEditingProduct({ ...editingProduct, whyChoosePoints: points });
                          }}
                          placeholder="Description narrative"
                          className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#14334d] flex items-center justify-end gap-3 sticky bottom-0 bg-[#0b2136] z-10">
              <button
                type="button"
                onClick={() => setEditingProduct(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium bg-[#06131f] text-slate-300 hover:text-white border border-[#14334d] cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSaveProductDetail}
                disabled={savingProductDetail}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {savingProductDetail ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Saving to MongoDB...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Formulation Details</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
