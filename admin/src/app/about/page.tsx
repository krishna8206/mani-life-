'use client';

import React, { useState, useEffect } from 'react';
import AdminHeader from '@/components/AdminHeader';
import ImageUploadInput from '@/components/ImageUploadInput';
import {
  Sparkles,
  Save,
  Plus,
  Trash2,
  ExternalLink,
  Check,
  RefreshCw,
  Layers,
  Building,
  Heart,
  Lightbulb,
  Droplets,
  Award,
  ShieldCheck,
  Send,
  Eye,
  Info,
} from 'lucide-react';

type TabKey =
  | 'hero'
  | 'whoWeAre'
  | 'whyWeExist'
  | 'whatWeDo'
  | 'productExpertise'
  | 'vision'
  | 'infrastructure'
  | 'consultationCta';

interface TrustHighlight {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

interface BadgeItem {
  id: string;
  title: string;
  icon: string;
}

interface PillarStat {
  label: string;
  value: string;
}

interface CorePillar {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  tag: string;
  desc: string;
  icon: string;
  stats: PillarStat[];
}

interface CapabilityItem {
  num: string;
  stageLabel: string;
  title: string;
  subtitle: string;
  tagline: string;
  desc: string;
  highlight: string;
  icon: string;
}

interface NicheItem {
  title: string;
  subtitle: string;
  icon: string;
  href: string;
}

interface PrincipleItem {
  category: string;
  title: string;
  desc: string;
  highlight: string;
  icon: string;
}

interface FeatureItem {
  title: string;
  desc: string;
  icon: string;
}

const defaultCmsData = {
  hero: {
    kicker: 'State-of-the-Art Compounding Campus • Ahmedabad, India',
    headlinePart1: 'The Formulation Engine Behind India’s Leading ',
    headlineHighlight: 'Prestige Cosmetics.',
    subheadline:
      'From novel active research and pH-buffered dermal stability to finished luxury packaging, Mani Lifestyle powers high-growth beauty startups, clinical dermatologists, and prestigious salon chains with low MOQ from 500 units.',
    primaryCtaText: 'Request Formulation Samples',
    secondaryCtaText: 'Call Regulatory Plant (+91 97246 81096)',
    phone: '+91 97246 81096',
    image: '/images/cleanroom-lab.jpg',
    imageAlt: 'Mani Lifestyle Sterile Cleanroom Laboratory and Compounding Campus',
    trustHighlights: [
      { id: '1', title: 'Custom & White-Label', subtitle: 'ODM & OEM Active Lab', icon: 'FlaskConical' },
      { id: '2', title: 'In-House R&D', subtitle: 'Formulation Scientists', icon: 'Sparkles' },
      { id: '3', title: 'Flexible Low MOQ', subtitle: 'From 500 Units', icon: 'Box' },
      { id: '4', title: 'WHO-GMP & FDCA', subtitle: 'ISO 22716 Cleanroom', icon: 'ShieldCheck' },
    ] as TrustHighlight[],
  },
  whoWeAre: {
    eyebrow: 'WHO WE ARE',
    title: 'Crafting Excellence in',
    highlight: 'Cosmetics',
    description:
      'Mani Lifestyle is a certified cosmetic manufacturing company and research laboratory based in Ahmedabad, Gujarat. We specialize in crafting high-performance, safe, and skin-friendly cosmetic products using a perfect blend of modern science and traditional botanical pharmacology, offering end-to-end manufacturing solutions from concept to commercial shelf.',
    badges: [
      { id: '1', title: 'WHO-GMP Plant', icon: 'CheckCircle2' },
      { id: '2', title: 'ISO 22716 Cleanroom', icon: 'ShieldCheck' },
      { id: '3', title: 'Ahmedabad R&D Lab', icon: 'FlaskConical' },
    ] as BadgeItem[],
  },
  whyWeExist: {
    eyebrow: 'Purity, Transparency & Results',
    title: 'Why We',
    highlight: 'Exist',
    description:
      'In a world full of over-promised beauty products, we stand for purity, transparency, and real results. Our mission is to empower brands with products that are:',
    pillars: [
      {
        id: '01',
        num: '01',
        title: 'Clean & Safe',
        subtitle: 'Dermatological Biocompatibility',
        tag: 'Toxin-Free Standard',
        desc: 'Zero harmful toxins, parabens, sulfates, or artificial sensitizers. Formulated strictly with biocompatible botanical pharmacology tested for high human epidermal tolerance.',
        icon: 'Leaf',
        stats: [
          { label: 'Toxin Tolerance', value: '100% Free' },
          { label: 'Skin Sensitizers', value: '0.0%' },
          { label: 'Bio-Actives', value: 'Class 1 Clean' },
        ],
      },
      {
        id: '02',
        num: '02',
        title: 'Scientifically Formulated',
        subtitle: 'Cellular Dermal Precision',
        tag: 'pH Buffered Actives',
        desc: 'Engineered with clinical dermal actives, stable pH 5.5 buffering, and sub-micron lipid delivery mechanisms ensuring multi-layer cellular efficacy without oxidation.',
        icon: 'FlaskConical',
        stats: [
          { label: 'Target pH Range', value: '5.5 ± 0.2' },
          { label: 'Active Stability', value: '36 Months' },
          { label: 'Delivery Particle', value: '< 200 nm' },
        ],
      },
      {
        id: '03',
        num: '03',
        title: 'Cruelty-Free',
        subtitle: '100% Ethical Beauty',
        tag: 'Zero Animal Testing',
        desc: '100% ethical cosmetics manufacturing. We enforce absolute zero animal testing across all raw ingredient sourcing, bench trials, and scaled commercial compounding batches.',
        icon: 'Heart',
        stats: [
          { label: 'Animal Testing', value: '0.0%' },
          { label: 'Raw Purity Origin', value: '100% Verified' },
          { label: 'Ethical Sourcing', value: 'Strict Compliance' },
        ],
      },
      {
        id: '04',
        num: '04',
        title: 'FDCA-Compliant',
        subtitle: 'Certified Regulatory Rigor',
        tag: 'Govt. Analytical COA',
        desc: 'Strict adherence to Gujarat FDCA regulatory guidelines, complete microbial and thermal cycling stability assays, and individual batch Certificate of Analysis (COA) verification.',
        icon: 'CheckCircle2',
        stats: [
          { label: 'Licensing Body', value: 'FDCA Gujarat' },
          { label: 'Cleanroom Standard', value: 'ISO 22716' },
          { label: 'Batch Assay', value: 'Full COA' },
        ],
      },
    ] as CorePillar[],
  },
  whatWeDo: {
    eyebrow: 'From Concept To Commercial Shelf',
    title: 'What We',
    highlight: 'Do',
    description:
      'From your initial idea to a finished product in your hand—we handle every stage of cosmetic development and manufacturing.',
    capabilities: [
      {
        num: '01',
        stageLabel: 'STAGE 01',
        title: 'Custom Formulation',
        subtitle: 'ODM • Bespoke R&D Science',
        tagline: 'Active Formulation Science',
        desc: 'Novel active research, texture viscosity optimization, scent profiling, and accelerated bench trials to create your unique proprietary formula.',
        highlight: 'Novel Bio-Actives',
        icon: 'Lightbulb',
      },
      {
        num: '02',
        stageLabel: 'STAGE 02',
        title: 'Private Labeling',
        subtitle: 'OEM • Made in India Production',
        tagline: 'Market-Ready Bench Stock',
        desc: 'Over 500+ clinically verified formulations ready for immediate bottling, custom packaging, and commercial launch with minimal lead time.',
        highlight: '500+ Proven Bases',
        icon: 'Tags',
      },
      {
        num: '03',
        stageLabel: 'STAGE 03',
        title: 'Component Sourcing',
        subtitle: 'Custom Indian Packaging & Jars',
        tagline: 'Spec-to-Shelf Presentation',
        desc: 'Amber droppers, airless vacuum pumps, aluminum tubes, recyclable jars, label design advisory, and leak-proof seal validation.',
        highlight: 'Eco & Luxury Glass',
        icon: 'Box',
      },
      {
        num: '04',
        stageLabel: 'STAGE 04',
        title: 'Regulatory Support',
        subtitle: 'Gujarat FDCA & COA Clearance',
        tagline: 'Complete Compliance Dossier',
        desc: 'End-to-end FDCA documentation, legal CDSCO & INCI artwork clearance, batch certificates of analysis (COA), and e-commerce launch support.',
        highlight: 'FDCA & COA Clearance',
        icon: 'FileCheck2',
      },
    ] as CapabilityItem[],
  },
  productExpertise: {
    eyebrow: 'Skincare, Haircare & Wellness',
    title: 'Our Product',
    highlight: 'Expertise',
    description:
      'We specialize in a wide range of personal care formulations. Every batch is rigorously batch-tested, safe, and commercial-ready.',
    niches: [
      {
        title: 'Face Washes & Cleansers',
        subtitle: 'pH 5.5 foaming, gel, & clarifying washes',
        icon: 'Droplets',
        href: '/products/cleansers-toners',
      },
      {
        title: 'Serums & Clinical Actives',
        subtitle: 'Vitamin C, Niacinamide, & barrier elixirs',
        icon: 'FlaskConical',
        href: '/products/face-serums',
      },
      {
        title: 'Scrubs & Exfoliators',
        subtitle: 'AHA/BHA chemical peels & micro-polishes',
        icon: 'Sparkles',
        href: '/products/creams-moisturizers',
      },
      {
        title: 'Salon Professional Facial Kits',
        subtitle: 'Multi-stage aesthetic treatment regimens',
        icon: 'Layers',
        href: '/products/clay-sheet-masks',
      },
      {
        title: 'Hair Oils & Scalp Serums',
        subtitle: 'Rosemary, Redensyl, & botanical infusions',
        icon: 'Beaker',
        href: '/products/hair-care-shampoos',
      },
      {
        title: 'Sunscreens & Treatment Masks',
        subtitle: 'SPF 50 fluid gels & hydrogel clay masks',
        icon: 'Sun',
        href: '/products/clay-sheet-masks',
      },
      {
        title: 'Pre & Post Wax Care',
        subtitle: 'Soothing aloe lotions & antiseptic cleansers',
        icon: 'Sparkle',
        href: '/products/essential-oils',
      },
      {
        title: 'Herbal & Fruit Waxes',
        subtitle: 'Low-temp peelable stripless waxes & roll-ons',
        icon: 'Leaf',
        href: '/products/essential-oils',
      },
    ] as NicheItem[],
  },
  vision: {
    eyebrow: 'Strategic Commitment',
    title: 'Our',
    highlight: 'Vision',
    description:
      'To be the most trusted cosmetic manufacturing partner in India by focusing relentlessly on three foundational principles',
    principles: [
      {
        category: 'Collaboration',
        title: 'Trusted Partnership',
        desc: 'We build enduring collaborations founded on transparency, reliable batch timelines, and shared growth with emerging startups and established beauty brands',
        highlight: 'Reliable Batch Schedules & Support',
        icon: 'Handshake',
      },
      {
        category: 'Formulation',
        title: 'Innovative Quality',
        desc: 'We deliver clean, biocompatible, and active-driven formulations with pharmaceutical-grade stability to help your brand lead the modern personal care market',
        highlight: 'Lab-Verified Stability & Clean Actives',
        icon: 'Award',
      },
      {
        category: 'Identity',
        title: 'Brand-Centric Approach',
        desc: 'Every product batch, texture, fragrance, and label is tailored to embody your distinct brand philosophy, aesthetic identity, and commercial price tier',
        highlight: 'Custom Formulations Tailored to You',
        icon: 'Palette',
      },
    ] as PrincipleItem[],
  },
  infrastructure: {
    eyebrow: 'Quality & Compounding Excellence',
    title: 'Our',
    highlight: 'Infrastructure',
    description:
      'Our state-of-the-art facility in Ahmedabad serves as the operational foundation for delivering pharmaceutical-grade quality, purity, and commercial scale',
    image: '/images/quality.png',
    imageAlt: 'Scientists in modern quality testing laboratory',
    features: [
      {
        title: 'Licensed by FDCA Gujarat',
        desc: 'Fully certified cosmetic manufacturing adhering strictly to Food & Drugs Control Administration regulations',
        icon: 'ShieldCheck',
      },
      {
        title: 'In-House R&D Laboratory',
        desc: 'Dedicated cosmetic testing lab staffed by qualified analytical chemists and formulation scientists',
        icon: 'FlaskConical',
      },
      {
        title: 'Strict Quality Control Protocols',
        desc: 'Multi-point testing including pH stability, viscosity assays, microbiology, and thermal cycling',
        icon: 'FileCheck2',
      },
      {
        title: 'GMP & Hygiene Standards Compliant',
        desc: 'Controlled cleanroom compounding suites with advanced air filtration and sanitization protocols',
        icon: 'Sparkles',
      },
      {
        title: 'Flexible MOQ for Startups',
        desc: 'Low-barrier batch schedules engineered to incubate and scale emerging beauty and salon brands',
        icon: 'Box',
      },
    ] as FeatureItem[],
  },
  consultationCta: {
    eyebrow: 'Ready To Build Your Dream Personal Care Brand?',
    title: 'Schedule a Direct Consultation With Our Senior Team',
    highlight: 'With Our Senior Team',
    description:
      'Visit our state-of-the-art cleanroom manufacturing campus in Ahmedabad or request customized bench formulation prototypes dispatched directly to your desk.',
    primaryBtnText: 'Request Custom Quote & Formulation Samples',
    secondaryBtnText: 'Schedule Plant Tour (+91 97246 81096)',
    phone: '+91 97246 81096',
    whatsappUrl:
      'https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20am%20interested%20in%20visiting%20your%20Ahmedabad%20cosmetic%20plant.',
  },
};

export default function AboutAdminPage() {
  const [cms, setCms] = useState(defaultCmsData);
  const [activeTab, setActiveTab] = useState<TabKey>('hero');
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/about');
      if (res.ok) {
        const data = await res.json();
        if (data && data.hero) {
          setCms((prev) => ({
            ...prev,
            ...data,
            hero: { ...prev.hero, ...(data.hero || {}) },
            whoWeAre: { ...prev.whoWeAre, ...(data.whoWeAre || {}) },
            whyWeExist: { ...prev.whyWeExist, ...(data.whyWeExist || {}) },
            whatWeDo: { ...prev.whatWeDo, ...(data.whatWeDo || {}) },
            productExpertise: { ...prev.productExpertise, ...(data.productExpertise || {}) },
            vision: { ...prev.vision, ...(data.vision || {}) },
            infrastructure: { ...prev.infrastructure, ...(data.infrastructure || {}) },
            consultationCta: { ...prev.consultationCta, ...(data.consultationCta || {}) },
          }));
        }
      }
    } catch (err) {
      console.error('Failed to load about data from backend:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveAll = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('http://localhost:5000/api/about', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cms),
      });

      if (res.ok) {
        showToast('About Us Page successfully saved and published to MongoDB Atlas!');
      } else {
        showToast('Failed to save About Us changes. Check backend connection.');
      }
    } catch (err) {
      console.error('Save error:', err);
      showToast('Network error while saving About Us page.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#06131f] text-slate-200 font-sans min-h-screen">
      <AdminHeader
        title="About Us Page CMS"
        subtitle="Manage all 8 sections, narrative stories, pillars, capabilities, and facility photos with live MongoDB Atlas synchronization"
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-950/95 border border-emerald-500/80 text-emerald-200 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-300">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      <div className="p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
        {/* Unified Top Control & Section Switcher Bar */}
        <div className="bg-[#0b2136] p-5 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#14334d]/80">
            <div>
              <h2 className="text-sm font-semibold text-white">About Us Page Studio</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Live URL:{' '}
                <a
                  href="http://localhost:3000/about"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:underline font-mono"
                >
                  http://localhost:3000/about
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="http://localhost:3000/about"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-medium bg-[#06131f] text-slate-300 hover:text-white border border-[#14334d] flex items-center gap-1.5 transition-all"
              >
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span>Preview Live Page</span>
              </a>

              <button
                onClick={() => handleSaveAll()}
                disabled={saving}
                className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-md shadow-emerald-950/40 transition-all cursor-pointer disabled:opacity-50"
              >
                {saving ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                <span>{saving ? 'Saving to Atlas...' : 'Save All Changes'}</span>
              </button>
            </div>
          </div>

          {/* Clean Tabs (No Icons, No Slider, Proper Alignment) */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: 'hero', label: '1. Hero & Lab Photo' },
              { key: 'whoWeAre', label: '2. Who We Are' },
              { key: 'whyWeExist', label: '3. Why We Exist' },
              { key: 'whatWeDo', label: '4. What We Do' },
              { key: 'productExpertise', label: '5. Product Expertise' },
              { key: 'vision', label: '6. Our Vision' },
              { key: 'infrastructure', label: '7. Infrastructure' },
              { key: 'consultationCta', label: '8. Consultation CTA' },
            ].map((tab) => {
              const isSelected = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
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
            <span className="text-xs text-slate-400">Loading About Us CMS content from MongoDB Atlas...</span>
          </div>
        ) : (
          <div className="space-y-6">
            {/* ======================================================== */}
            {/* TAB 1: HERO & LAB PHOTO                                 */}
            {/* ======================================================== */}
            {activeTab === 'hero' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 1: Hero Banner & Cleanroom Oculus</h3>
                  <p className="text-xs text-slate-400">
                    Controls the opening masthead statement, primary & secondary CTAs, and the 4 Trust Highlights.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Campus Kicker / Micro-Header</label>
                    <input
                      type="text"
                      value={cms.hero.kicker}
                      onChange={(e) => setCms({ ...cms, hero: { ...cms.hero, kicker: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Part 1 (Regular)</label>
                    <input
                      type="text"
                      value={cms.hero.headlinePart1}
                      onChange={(e) => setCms({ ...cms, hero: { ...cms.hero, headlinePart1: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight (Teal Serif)</label>
                    <input
                      type="text"
                      value={cms.hero.headlineHighlight}
                      onChange={(e) => setCms({ ...cms, hero: { ...cms.hero, headlineHighlight: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Subheadline Narrative</label>
                    <textarea
                      rows={3}
                      value={cms.hero.subheadline}
                      onChange={(e) => setCms({ ...cms, hero: { ...cms.hero, subheadline: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Primary CTA Button Text</label>
                    <input
                      type="text"
                      value={cms.hero.primaryCtaText}
                      onChange={(e) => setCms({ ...cms, hero: { ...cms.hero, primaryCtaText: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Secondary CTA Button Text (Phone/WhatsApp)</label>
                    <input
                      type="text"
                      value={cms.hero.secondaryCtaText}
                      onChange={(e) => setCms({ ...cms, hero: { ...cms.hero, secondaryCtaText: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <ImageUploadInput
                      label="Cleanroom Laboratory Stadium Photograph"
                      value={cms.hero.image}
                      onChange={(url) => setCms({ ...cms, hero: { ...cms.hero, image: url } })}
                      folder="mani-lifestyle/about"
                    />
                  </div>
                </div>

                {/* Trust Highlights Strip (Add/Edit/Delete) */}
                <div className="pt-4 border-t border-[#14334d] space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">Trust Highlights Strip (4 Nodes)</h4>
                      <p className="text-[11px] text-slate-400">Mini feature pills displayed under the CTA buttons</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const nextId = String(Date.now());
                        const updated = [
                          ...cms.hero.trustHighlights,
                          { id: nextId, title: 'New Trust Highlight', subtitle: 'Verified Specification', icon: 'ShieldCheck' },
                        ];
                        setCms({ ...cms, hero: { ...cms.hero, trustHighlights: updated } });
                      }}
                      className="px-3 py-1.5 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Trust Node</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cms.hero.trustHighlights.map((node, index) => (
                      <div key={node.id || index} className="p-3 bg-[#06131f] rounded-xl border border-[#14334d] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-sky-400 font-semibold">Node #{index + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = cms.hero.trustHighlights.filter((_, i) => i !== index);
                              setCms({ ...cms, hero: { ...cms.hero, trustHighlights: updated } });
                            }}
                            className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Title</label>
                            <input
                              type="text"
                              value={node.title}
                              onChange={(e) => {
                                const updated = [...cms.hero.trustHighlights];
                                updated[index] = { ...updated[index], title: e.target.value };
                                setCms({ ...cms, hero: { ...cms.hero, trustHighlights: updated } });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Subtitle</label>
                            <input
                              type="text"
                              value={node.subtitle}
                              onChange={(e) => {
                                const updated = [...cms.hero.trustHighlights];
                                updated[index] = { ...updated[index], subtitle: e.target.value };
                                setCms({ ...cms, hero: { ...cms.hero, trustHighlights: updated } });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 2: WHO WE ARE                                       */}
            {/* ======================================================== */}
            {activeTab === 'whoWeAre' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 2: Who We Are (Crafting Excellence)</h3>
                  <p className="text-xs text-slate-400">Controls the introductory overview section and cleanroom badges.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Section Eyebrow</label>
                    <input
                      type="text"
                      value={cms.whoWeAre.eyebrow}
                      onChange={(e) => setCms({ ...cms, whoWeAre: { ...cms.whoWeAre, eyebrow: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Part 1</label>
                    <input
                      type="text"
                      value={cms.whoWeAre.title}
                      onChange={(e) => setCms({ ...cms, whoWeAre: { ...cms.whoWeAre, title: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight Word</label>
                    <input
                      type="text"
                      value={cms.whoWeAre.highlight}
                      onChange={(e) => setCms({ ...cms, whoWeAre: { ...cms.whoWeAre, highlight: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Company Description Narrative</label>
                    <textarea
                      rows={4}
                      value={cms.whoWeAre.description}
                      onChange={(e) => setCms({ ...cms, whoWeAre: { ...cms.whoWeAre, description: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white leading-relaxed"
                    />
                  </div>
                </div>

                {/* Cleanroom Badges (Add/Edit/Delete) */}
                <div className="pt-4 border-t border-[#14334d] space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">Cleanroom Verification Badges</h4>
                      <p className="text-[11px] text-slate-400">Pills displayed beneath the description</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = [
                          ...cms.whoWeAre.badges,
                          { id: String(Date.now()), title: 'Certified Plant', icon: 'CheckCircle2' },
                        ];
                        setCms({ ...cms, whoWeAre: { ...cms.whoWeAre, badges: updated } });
                      }}
                      className="px-3 py-1.5 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Badge</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {cms.whoWeAre.badges.map((badge, index) => (
                      <div key={badge.id || index} className="p-3 bg-[#06131f] rounded-xl border border-[#14334d] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-sky-400 font-semibold">Badge #{index + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = cms.whoWeAre.badges.filter((_, i) => i !== index);
                              setCms({ ...cms, whoWeAre: { ...cms.whoWeAre, badges: updated } });
                            }}
                            className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div>
                          <label className="block text-[10px] text-slate-400 mb-0.5">Badge Title</label>
                          <input
                            type="text"
                            value={badge.title}
                            onChange={(e) => {
                              const updated = [...cms.whoWeAre.badges];
                              updated[index] = { ...updated[index], title: e.target.value };
                              setCms({ ...cms, whoWeAre: { ...cms.whoWeAre, badges: updated } });
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 3: WHY WE EXIST (4 CORE PILLARS)                    */}
            {/* ======================================================== */}
            {activeTab === 'whyWeExist' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 3: Why We Exist (4 Core Pillars Stage)</h3>
                  <p className="text-xs text-slate-400">
                    Controls the interactive louvre accordion stage and each pillar&apos;s 3 key-value statistical metrics.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Section Eyebrow</label>
                    <input
                      type="text"
                      value={cms.whyWeExist.eyebrow}
                      onChange={(e) => setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, eyebrow: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Part 1</label>
                    <input
                      type="text"
                      value={cms.whyWeExist.title}
                      onChange={(e) => setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, title: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight Word</label>
                    <input
                      type="text"
                      value={cms.whyWeExist.highlight}
                      onChange={(e) => setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, highlight: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Introductory Narrative</label>
                    <textarea
                      rows={2}
                      value={cms.whyWeExist.description}
                      onChange={(e) => setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, description: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>
                </div>

                {/* Pillars List (Add / Edit / Delete) */}
                <div className="pt-4 border-t border-[#14334d] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">Interactive Louvre Pillars ({cms.whyWeExist.pillars.length})</h4>
                      <p className="text-[11px] text-slate-400">Expandable architectural louvre panels with 3 stats each</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const nextNum = `0${cms.whyWeExist.pillars.length + 1}`;
                        const updated = [
                          ...cms.whyWeExist.pillars,
                          {
                            id: nextNum,
                            num: nextNum,
                            title: 'New Pillar Title',
                            subtitle: 'Formulation Standard',
                            tag: 'Certified Benchmark',
                            desc: 'Complete description of this core manufacturing value and stability guarantee.',
                            icon: 'Leaf',
                            stats: [
                              { label: 'Active Standard', value: '100%' },
                              { label: 'Safety Index', value: 'Verified' },
                              { label: 'Compliance', value: 'Complete' },
                            ],
                          },
                        ];
                        setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, pillars: updated } });
                      }}
                      className="px-3 py-1.5 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Pillar</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {cms.whyWeExist.pillars.map((pillar, pIdx) => (
                      <div key={pillar.id || pIdx} className="p-4 bg-[#06131f] rounded-2xl border border-[#14334d] space-y-3">
                        <div className="flex items-center justify-between border-b border-[#14334d]/60 pb-2">
                          <span className="text-xs font-mono font-bold text-sky-400">
                            Pillar {pillar.num || pIdx + 1}: {pillar.title}
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = cms.whyWeExist.pillars.filter((_, i) => i !== pIdx);
                              setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, pillars: updated } });
                            }}
                            className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Number Display</label>
                            <input
                              type="text"
                              value={pillar.num}
                              onChange={(e) => {
                                const updated = [...cms.whyWeExist.pillars];
                                updated[pIdx] = { ...updated[pIdx], num: e.target.value };
                                setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, pillars: updated } });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Title</label>
                            <input
                              type="text"
                              value={pillar.title}
                              onChange={(e) => {
                                const updated = [...cms.whyWeExist.pillars];
                                updated[pIdx] = { ...updated[pIdx], title: e.target.value };
                                setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, pillars: updated } });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Subtitle</label>
                            <input
                              type="text"
                              value={pillar.subtitle}
                              onChange={(e) => {
                                const updated = [...cms.whyWeExist.pillars];
                                updated[pIdx] = { ...updated[pIdx], subtitle: e.target.value };
                                setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, pillars: updated } });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Tag Pill</label>
                            <input
                              type="text"
                              value={pillar.tag}
                              onChange={(e) => {
                                const updated = [...cms.whyWeExist.pillars];
                                updated[pIdx] = { ...updated[pIdx], tag: e.target.value };
                                setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, pillars: updated } });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] text-slate-400 mb-0.5">Description Narrative</label>
                          <textarea
                            rows={3}
                            value={pillar.desc}
                            onChange={(e) => {
                              const updated = [...cms.whyWeExist.pillars];
                              updated[pIdx] = { ...updated[pIdx], desc: e.target.value };
                              setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, pillars: updated } });
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs leading-relaxed focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                          />
                        </div>

                        {/* Nested Stats (3 per pillar) */}
                        <div className="pt-2 border-t border-[#14334d]/40">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                              Pillar Stats ({pillar.stats?.length || 0})
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                const updated = [...cms.whyWeExist.pillars];
                                const curStats = updated[pIdx].stats || [];
                                updated[pIdx] = {
                                  ...updated[pIdx],
                                  stats: [...curStats, { label: 'New Metric', value: '100%' }],
                                };
                                setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, pillars: updated } });
                              }}
                              className="text-[10px] text-sky-400 hover:text-sky-300 flex items-center gap-1"
                            >
                              <Plus className="w-3 h-3" /> Add Metric
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {pillar.stats?.map((stat, sIdx) => (
                              <div key={sIdx} className="flex items-center gap-2 bg-[#0b2136] p-2 rounded-lg border border-[#163e5c]">
                                <input
                                  type="text"
                                  placeholder="Label"
                                  value={stat.label}
                                  onChange={(e) => {
                                    const updated = [...cms.whyWeExist.pillars];
                                    const nextStats = [...updated[pIdx].stats];
                                    nextStats[sIdx] = { ...nextStats[sIdx], label: e.target.value };
                                    updated[pIdx].stats = nextStats;
                                    setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, pillars: updated } });
                                  }}
                                  className="w-1/2 px-2 py-1 bg-[#06131f] border border-[#14334d] rounded text-[11px] text-slate-300"
                                />
                                <input
                                  type="text"
                                  placeholder="Value"
                                  value={stat.value}
                                  onChange={(e) => {
                                    const updated = [...cms.whyWeExist.pillars];
                                    const nextStats = [...updated[pIdx].stats];
                                    nextStats[sIdx] = { ...nextStats[sIdx], value: e.target.value };
                                    updated[pIdx].stats = nextStats;
                                    setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, pillars: updated } });
                                  }}
                                  className="w-1/2 px-2 py-1 bg-[#06131f] border border-[#14334d] rounded text-[11px] font-semibold text-emerald-400 font-mono"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    const updated = [...cms.whyWeExist.pillars];
                                    updated[pIdx].stats = updated[pIdx].stats.filter((_, i) => i !== sIdx);
                                    setCms({ ...cms, whyWeExist: { ...cms.whyWeExist, pillars: updated } });
                                  }}
                                  className="text-slate-500 hover:text-rose-400 p-0.5"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 4: WHAT WE DO (BIOMORPHIC CAPABILITIES)             */}
            {/* ======================================================== */}
            {activeTab === 'whatWeDo' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 4: What We Do (Biomorphic Droplet Capabilities)</h3>
                  <p className="text-xs text-slate-400">
                    Controls the 4 floating liquid droplet stages representing full concept-to-shelf cosmetic capabilities.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Section Eyebrow</label>
                    <input
                      type="text"
                      value={cms.whatWeDo.eyebrow}
                      onChange={(e) => setCms({ ...cms, whatWeDo: { ...cms.whatWeDo, eyebrow: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Part 1</label>
                    <input
                      type="text"
                      value={cms.whatWeDo.title}
                      onChange={(e) => setCms({ ...cms, whatWeDo: { ...cms.whatWeDo, title: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight Word</label>
                    <input
                      type="text"
                      value={cms.whatWeDo.highlight}
                      onChange={(e) => setCms({ ...cms, whatWeDo: { ...cms.whatWeDo, highlight: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Introductory Narrative</label>
                    <textarea
                      rows={2}
                      value={cms.whatWeDo.description}
                      onChange={(e) => setCms({ ...cms, whatWeDo: { ...cms.whatWeDo, description: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>
                </div>

                {/* Capabilities List (Add/Edit/Delete) */}
                <div className="pt-4 border-t border-[#14334d] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">
                        Liquid Droplet Stages ({cms.whatWeDo.capabilities.length})
                      </h4>
                      <p className="text-[11px] text-slate-400">Floating biomorphic stages with levitation animation</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const nextNum = `0${cms.whatWeDo.capabilities.length + 1}`;
                        const updated = [
                          ...cms.whatWeDo.capabilities,
                          {
                            num: nextNum,
                            stageLabel: `STAGE ${nextNum}`,
                            title: 'New Capability Stage',
                            subtitle: 'Manufacturing Specification',
                            tagline: 'Precision Formulation',
                            desc: 'Complete overview of this capability and client deliverables.',
                            highlight: 'Lab Verified',
                            icon: 'Lightbulb',
                          },
                        ];
                        setCms({ ...cms, whatWeDo: { ...cms.whatWeDo, capabilities: updated } });
                      }}
                      className="px-3 py-1.5 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Stage</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cms.whatWeDo.capabilities.map((cap, cIdx) => (
                      <div key={cap.num || cIdx} className="p-4 bg-[#06131f] rounded-2xl border border-[#14334d] space-y-3">
                        <div className="flex items-center justify-between border-b border-[#14334d]/60 pb-2">
                          <span className="text-xs font-mono font-bold text-sky-400">
                            {cap.stageLabel || `STAGE ${cIdx + 1}`}: {cap.title}
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = cms.whatWeDo.capabilities.filter((_, i) => i !== cIdx);
                              setCms({ ...cms, whatWeDo: { ...cms.whatWeDo, capabilities: updated } });
                            }}
                            className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Stage Label</label>
                            <input
                              type="text"
                              value={cap.stageLabel}
                              onChange={(e) => {
                                const updated = [...cms.whatWeDo.capabilities];
                                updated[cIdx] = { ...updated[cIdx], stageLabel: e.target.value };
                                setCms({ ...cms, whatWeDo: { ...cms.whatWeDo, capabilities: updated } });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Title</label>
                            <input
                              type="text"
                              value={cap.title}
                              onChange={(e) => {
                                const updated = [...cms.whatWeDo.capabilities];
                                updated[cIdx] = { ...updated[cIdx], title: e.target.value };
                                setCms({ ...cms, whatWeDo: { ...cms.whatWeDo, capabilities: updated } });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Subtitle</label>
                            <input
                              type="text"
                              value={cap.subtitle}
                              onChange={(e) => {
                                const updated = [...cms.whatWeDo.capabilities];
                                updated[cIdx] = { ...updated[cIdx], subtitle: e.target.value };
                                setCms({ ...cms, whatWeDo: { ...cms.whatWeDo, capabilities: updated } });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Highlight Pill</label>
                            <input
                              type="text"
                              value={cap.highlight}
                              onChange={(e) => {
                                const updated = [...cms.whatWeDo.capabilities];
                                updated[cIdx] = { ...updated[cIdx], highlight: e.target.value };
                                setCms({ ...cms, whatWeDo: { ...cms.whatWeDo, capabilities: updated } });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] text-slate-400 mb-0.5">Description Narrative</label>
                          <textarea
                            rows={4}
                            value={cap.desc}
                            onChange={(e) => {
                              const updated = [...cms.whatWeDo.capabilities];
                              updated[cIdx] = { ...updated[cIdx], desc: e.target.value };
                              setCms({ ...cms, whatWeDo: { ...cms.whatWeDo, capabilities: updated } });
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs leading-relaxed focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 5: PRODUCT EXPERTISE (8 ROMAN ARCH NICHES)          */}
            {/* ======================================================== */}
            {activeTab === 'productExpertise' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 5: Our Product Expertise (Roman Arch Apothecary)</h3>
                  <p className="text-xs text-slate-400">
                    Controls the 8 architectural arched niches linking directly to formulation categories.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Section Eyebrow</label>
                    <input
                      type="text"
                      value={cms.productExpertise.eyebrow}
                      onChange={(e) =>
                        setCms({ ...cms, productExpertise: { ...cms.productExpertise, eyebrow: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Part 1</label>
                    <input
                      type="text"
                      value={cms.productExpertise.title}
                      onChange={(e) =>
                        setCms({ ...cms, productExpertise: { ...cms.productExpertise, title: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight Word</label>
                    <input
                      type="text"
                      value={cms.productExpertise.highlight}
                      onChange={(e) =>
                        setCms({ ...cms, productExpertise: { ...cms.productExpertise, highlight: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Introductory Narrative</label>
                    <textarea
                      rows={2}
                      value={cms.productExpertise.description}
                      onChange={(e) =>
                        setCms({ ...cms, productExpertise: { ...cms.productExpertise, description: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>
                </div>

                {/* Niches Grid (Add / Edit / Delete) */}
                <div className="pt-4 border-t border-[#14334d] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">
                        Apothecary Roman Arches ({cms.productExpertise.niches.length})
                      </h4>
                      <p className="text-[11px] text-slate-400">Card niches with 3D tilt effects and catalog links</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = [
                          ...cms.productExpertise.niches,
                          {
                            title: 'New Product Category',
                            subtitle: 'pH 5.5 cosmetic formulation line',
                            icon: 'Droplets',
                            href: '/products',
                          },
                        ];
                        setCms({ ...cms, productExpertise: { ...cms.productExpertise, niches: updated } });
                      }}
                      className="px-3 py-1.5 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Roman Arch</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {cms.productExpertise.niches.map((niche, nIdx) => (
                      <div key={nIdx} className="p-3 bg-[#06131f] rounded-2xl border border-[#14334d] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-sky-400 font-semibold">Arch #{nIdx + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = cms.productExpertise.niches.filter((_, i) => i !== nIdx);
                              setCms({ ...cms, productExpertise: { ...cms.productExpertise, niches: updated } });
                            }}
                            className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div>
                          <label className="block text-[10px] text-slate-400 mb-0.5">Arch Title</label>
                          <input
                            type="text"
                            value={niche.title}
                            onChange={(e) => {
                              const updated = [...cms.productExpertise.niches];
                              updated[nIdx] = { ...updated[nIdx], title: e.target.value };
                              setCms({ ...cms, productExpertise: { ...cms.productExpertise, niches: updated } });
                            }}
                            className="w-full px-2.5 py-1 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs font-semibold"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] text-slate-400 mb-0.5">Subtitle / Actives</label>
                          <input
                            type="text"
                            value={niche.subtitle}
                            onChange={(e) => {
                              const updated = [...cms.productExpertise.niches];
                              updated[nIdx] = { ...updated[nIdx], subtitle: e.target.value };
                              setCms({ ...cms, productExpertise: { ...cms.productExpertise, niches: updated } });
                            }}
                            className="w-full px-2.5 py-1 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] text-slate-400 mb-0.5">Route URL</label>
                          <input
                            type="text"
                            value={niche.href}
                            onChange={(e) => {
                              const updated = [...cms.productExpertise.niches];
                              updated[nIdx] = { ...updated[nIdx], href: e.target.value };
                              setCms({ ...cms, productExpertise: { ...cms.productExpertise, niches: updated } });
                            }}
                            className="w-full px-2.5 py-1 bg-[#0b2136] border border-[#163e5c] rounded text-sky-400 font-mono text-[11px]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 6: OUR VISION (3 FOUNDATIONAL PRINCIPLES)            */}
            {/* ======================================================== */}
            {activeTab === 'vision' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 6: Our Vision (3 Strategic Principles)</h3>
                  <p className="text-xs text-slate-400">
                    Controls the tripartite principles showcase with scroll stagger animation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Section Eyebrow</label>
                    <input
                      type="text"
                      value={cms.vision.eyebrow}
                      onChange={(e) => setCms({ ...cms, vision: { ...cms.vision, eyebrow: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Part 1</label>
                    <input
                      type="text"
                      value={cms.vision.title}
                      onChange={(e) => setCms({ ...cms, vision: { ...cms.vision, title: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight Word</label>
                    <input
                      type="text"
                      value={cms.vision.highlight}
                      onChange={(e) => setCms({ ...cms, vision: { ...cms.vision, highlight: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Introductory Narrative</label>
                    <textarea
                      rows={3}
                      value={cms.vision.description}
                      onChange={(e) => setCms({ ...cms, vision: { ...cms.vision, description: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white leading-relaxed"
                    />
                  </div>
                </div>

                {/* Principles List (Add / Edit / Delete) */}
                <div className="pt-4 border-t border-[#14334d] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">
                        Foundational Principles ({cms.vision.principles.length})
                      </h4>
                      <p className="text-[11px] text-slate-400">Strategic commitments to brands and scientific quality</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = [
                          ...cms.vision.principles,
                          {
                            category: 'Pillar Category',
                            title: 'Strategic Principle Title',
                            desc: 'Full narrative description of this strategic principle.',
                            highlight: 'Key Benchmark',
                            icon: 'Award',
                          },
                        ];
                        setCms({ ...cms, vision: { ...cms.vision, principles: updated } });
                      }}
                      className="px-3 py-1.5 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Principle</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cms.vision.principles.map((pr, pIdx) => (
                      <div key={pIdx} className="p-4 bg-[#06131f] rounded-2xl border border-[#14334d] space-y-3">
                        <div className="flex items-center justify-between border-b border-[#14334d]/60 pb-2">
                          <span className="text-xs font-mono font-bold text-sky-400">Pillar #{pIdx + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = cms.vision.principles.filter((_, i) => i !== pIdx);
                              setCms({ ...cms, vision: { ...cms.vision, principles: updated } });
                            }}
                            className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div>
                          <label className="block text-[10px] text-slate-400 mb-0.5">Category</label>
                          <input
                            type="text"
                            value={pr.category}
                            onChange={(e) => {
                              const updated = [...cms.vision.principles];
                              updated[pIdx] = { ...updated[pIdx], category: e.target.value };
                              setCms({ ...cms, vision: { ...cms.vision, principles: updated } });
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] text-slate-400 mb-0.5">Title</label>
                          <input
                            type="text"
                            value={pr.title}
                            onChange={(e) => {
                              const updated = [...cms.vision.principles];
                              updated[pIdx] = { ...updated[pIdx], title: e.target.value };
                              setCms({ ...cms, vision: { ...cms.vision, principles: updated } });
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs font-semibold"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] text-slate-400 mb-0.5">Description</label>
                          <textarea
                            rows={5}
                            value={pr.desc}
                            onChange={(e) => {
                              const updated = [...cms.vision.principles];
                              updated[pIdx] = { ...updated[pIdx], desc: e.target.value };
                              setCms({ ...cms, vision: { ...cms.vision, principles: updated } });
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs leading-relaxed focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] text-slate-400 mb-0.5">Hallmark Tag</label>
                          <input
                            type="text"
                            value={pr.highlight}
                            onChange={(e) => {
                              const updated = [...cms.vision.principles];
                              updated[pIdx] = { ...updated[pIdx], highlight: e.target.value };
                              setCms({ ...cms, vision: { ...cms.vision, principles: updated } });
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 7: INFRASTRUCTURE (LAB PHOTO & FEATURES)             */}
            {/* ======================================================== */}
            {activeTab === 'infrastructure' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 7: Our Infrastructure & Compounding Lab</h3>
                  <p className="text-xs text-slate-400">
                    Controls the laboratory image showcase and operational infrastructure features.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Section Eyebrow</label>
                    <input
                      type="text"
                      value={cms.infrastructure.eyebrow}
                      onChange={(e) =>
                        setCms({ ...cms, infrastructure: { ...cms.infrastructure, eyebrow: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Part 1</label>
                    <input
                      type="text"
                      value={cms.infrastructure.title}
                      onChange={(e) =>
                        setCms({ ...cms, infrastructure: { ...cms.infrastructure, title: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight Word</label>
                    <input
                      type="text"
                      value={cms.infrastructure.highlight}
                      onChange={(e) =>
                        setCms({ ...cms, infrastructure: { ...cms.infrastructure, highlight: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Introductory Narrative</label>
                    <textarea
                      rows={2}
                      value={cms.infrastructure.description}
                      onChange={(e) =>
                        setCms({ ...cms, infrastructure: { ...cms.infrastructure, description: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <ImageUploadInput
                      label="Laboratory / Compounding Suite Photograph"
                      value={cms.infrastructure.image}
                      onChange={(url) => setCms({ ...cms, infrastructure: { ...cms.infrastructure, image: url } })}
                      folder="mani-lifestyle/about"
                    />
                  </div>
                </div>

                {/* Features List (Add / Edit / Delete) */}
                <div className="pt-4 border-t border-[#14334d] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">
                        Infrastructure Highlights ({cms.infrastructure.features.length})
                      </h4>
                      <p className="text-[11px] text-slate-400">Core cleanroom compliance and R&D lab capabilities</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = [
                          ...cms.infrastructure.features,
                          {
                            title: 'New Infrastructure Capability',
                            desc: 'Adherence to pharmaceutical and cosmetic manufacturing standards.',
                            icon: 'ShieldCheck',
                          },
                        ];
                        setCms({ ...cms, infrastructure: { ...cms.infrastructure, features: updated } });
                      }}
                      className="px-3 py-1.5 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Feature Point</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {cms.infrastructure.features.map((feat, fIdx) => (
                      <div key={fIdx} className="p-3 bg-[#06131f] rounded-xl border border-[#14334d] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-sky-400 font-semibold">Feature #{fIdx + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = cms.infrastructure.features.filter((_, i) => i !== fIdx);
                              setCms({ ...cms, infrastructure: { ...cms.infrastructure, features: updated } });
                            }}
                            className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Feature Title</label>
                            <input
                              type="text"
                              value={feat.title}
                              onChange={(e) => {
                                const updated = [...cms.infrastructure.features];
                                updated[fIdx] = { ...updated[fIdx], title: e.target.value };
                                setCms({ ...cms, infrastructure: { ...cms.infrastructure, features: updated } });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs font-semibold"
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <label className="block text-[10px] text-slate-400 mb-0.5">Feature Description</label>
                            <input
                              type="text"
                              value={feat.desc}
                              onChange={(e) => {
                                const updated = [...cms.infrastructure.features];
                                updated[fIdx] = { ...updated[fIdx], desc: e.target.value };
                                setCms({ ...cms, infrastructure: { ...cms.infrastructure, features: updated } });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 8: CONSULTATION CTA                                 */}
            {/* ======================================================== */}
            {activeTab === 'consultationCta' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 8: Direct Factory Consultation CTA Banner</h3>
                  <p className="text-xs text-slate-400">Controls the bottom high-conversion direct plant visit and quote banner.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Banner Eyebrow</label>
                    <input
                      type="text"
                      value={cms.consultationCta.eyebrow}
                      onChange={(e) =>
                        setCms({ ...cms, consultationCta: { ...cms.consultationCta, eyebrow: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Heading Title</label>
                    <input
                      type="text"
                      value={cms.consultationCta.title}
                      onChange={(e) =>
                        setCms({ ...cms, consultationCta: { ...cms.consultationCta, title: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight Text</label>
                    <input
                      type="text"
                      value={cms.consultationCta.highlight}
                      onChange={(e) =>
                        setCms({ ...cms, consultationCta: { ...cms.consultationCta, highlight: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Description Narrative</label>
                    <textarea
                      rows={3}
                      value={cms.consultationCta.description}
                      onChange={(e) =>
                        setCms({ ...cms, consultationCta: { ...cms.consultationCta, description: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Quote Button Text</label>
                    <input
                      type="text"
                      value={cms.consultationCta.primaryBtnText}
                      onChange={(e) =>
                        setCms({ ...cms, consultationCta: { ...cms.consultationCta, primaryBtnText: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Plant Tour Button Text</label>
                    <input
                      type="text"
                      value={cms.consultationCta.secondaryBtnText}
                      onChange={(e) =>
                        setCms({ ...cms, consultationCta: { ...cms.consultationCta, secondaryBtnText: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Direct Phone Number</label>
                    <input
                      type="text"
                      value={cms.consultationCta.phone}
                      onChange={(e) =>
                        setCms({ ...cms, consultationCta: { ...cms.consultationCta, phone: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">WhatsApp Redirect Link</label>
                    <input
                      type="text"
                      value={cms.consultationCta.whatsappUrl}
                      onChange={(e) =>
                        setCms({ ...cms, consultationCta: { ...cms.consultationCta, whatsappUrl: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-sky-400 font-mono text-[11px]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
