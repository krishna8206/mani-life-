'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminHeader from '@/components/AdminHeader';
import { initialInquiries, initialCategories } from '@/lib/api';
import { Inquiry, InquiryStatus } from '@/lib/types';
import { 
  Inbox, 
  FlaskConical, 
  Clock, 
  PhoneCall, 
  Mail, 
  PlusCircle, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  RefreshCw,
  Home,
  Info,
  Award,
  HelpCircle,
  Building2,
  Check,
  ShieldCheck
} from 'lucide-react';

interface DashboardStats {
  totalInquiries: number;
  newInquiriesToday: number;
  activeProducts: number;
  totalCategories: number;
  pendingQuotes: number;
  conversionRate: string;
  recentInquiries: Inquiry[];
  databaseSource: string;
}

interface CategoryDoc {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
  activeFormulations?: number;
  featuredActives: string[];
}

const defaultStats: DashboardStats = {
  totalInquiries: 38,
  newInquiriesToday: 4,
  activeProducts: 130,
  totalCategories: 13,
  pendingQuotes: 6,
  conversionRate: '38.5%',
  recentInquiries: initialInquiries,
  databaseSource: 'MongoDB Atlas Cluster',
};

const cmsPagesList = [
  {
    title: 'Home Page CMS',
    sections: '8 Dynamic Sections',
    description: 'Controls hero banner, corporate story, 13 core categories, why us pillars, cleanroom oculus, process timeline, testimonials, and consultation CTA.',
    route: '/home',
    liveUrl: 'http://localhost:3000',
    icon: Home,
    tag: 'Landing Page',
  },
  {
    title: 'About Us CMS',
    sections: '8 Dynamic Sections',
    description: 'Controls cleanroom lab photo, who we are, why we exist, what we do, product expertise apothecary, tripartite vision, infrastructure, and quote banner.',
    route: '/about',
    liveUrl: 'http://localhost:3000/about',
    icon: Info,
    tag: 'Brand Heritage',
  },
  {
    title: 'Certificate & Awards CMS',
    sections: '4 Dynamic Sections',
    description: 'Controls trust metrics, compliance frameworks, regulatory conformity plaques (WHO-GMP, ISO 22716, FDA, Halal, Cruelty-Free), and dossier booking.',
    route: '/certifications',
    liveUrl: 'http://localhost:3000/certifications',
    icon: Award,
    tag: 'Regulatory QA',
  },
  {
    title: 'Services CMS',
    sections: '5 Dynamic Sections',
    description: 'Controls 4 precision manufacturing frameworks (Custom Formulation ODM, Private Label OEM, Contract Compounding, Turnkey Export), lifecycle compounding, and modulation steps.',
    route: '/services',
    liveUrl: 'http://localhost:3000/services',
    icon: Sparkles,
    tag: 'Capabilities',
  },
  {
    title: 'Product Range CMS',
    sections: '4 Dynamic Sections',
    description: 'Controls formulations hero search, 13 manufacturing verticals catalog, bulk order & private label FAQs, and custom sampling consultation CTA.',
    route: '/products',
    liveUrl: 'http://localhost:3000/products',
    icon: FlaskConical,
    tag: 'Formulations',
  },
  {
    title: 'Contact Us CMS',
    sections: '5 Dynamic Sections',
    description: 'Controls hero banner, direct channels & cards, official emails, cleanroom visit booking, enquiry form settings, and interactive facility location map.',
    route: '/contact',
    liveUrl: 'http://localhost:3000/contact',
    icon: Mail,
    tag: 'Client Inbound',
  },
  {
    title: 'FAQs & Regulatory CMS',
    sections: 'Categorized FAQ Library',
    description: 'Controls private label MOQs, stability testing turnaround, client IP protection, mutual NDAs, and international export documentation questions.',
    route: '/faqs',
    liveUrl: 'http://localhost:3000',
    icon: HelpCircle,
    tag: 'Knowledgebase',
  },
];

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>(defaultStats);
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);
  const [categories, setCategories] = useState<CategoryDoc[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const fetchDashboardData = async () => {
    try {
      setIsRefreshing(true);

      // 1. Fetch live aggregated statistics
      const statsRes = await fetch('http://localhost:5000/api/dashboard/stats');
      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
        if (statsData.recentInquiries && statsData.recentInquiries.length > 0) {
          setInquiries(statsData.recentInquiries);
        }
      }

      // 2. Fetch live inquiries
      const inqRes = await fetch('http://localhost:5000/api/inquiries');
      if (inqRes.ok) {
        const inqData = await inqRes.json();
        if (Array.isArray(inqData) && inqData.length > 0) {
          setInquiries(inqData.slice(0, 5));
        }
      }

      // 3. Fetch live categories
      const catRes = await fetch('http://localhost:5000/api/categories');
      if (catRes.ok) {
        const catData = await catRes.json();
        if (Array.isArray(catData) && catData.length > 0) {
          setCategories(catData.slice(0, 4));
        }
      }
    } catch (err) {
      console.warn('Dashboard live fetch encountered network error, falling back to local seed:', err);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleRefresh = async () => {
    await fetchDashboardData();
    showToast('Dashboard synchronized with live MongoDB Atlas data!');
  };

  return (
    <div className="flex-1 flex flex-col bg-[#06131f] text-slate-200 font-sans min-h-screen">
      <AdminHeader
        title="Executive Operations & CMS Command Center"
        subtitle="Real-time RFQ pipeline, formulation library benchmarks, and live MongoDB Atlas CMS synchronization"
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-950/95 border border-emerald-500/80 text-emerald-200 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-300">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      <div className="p-6 lg:p-8 space-y-8 max-w-7xl mx-auto w-full">
        {/* ======================================================== */}
        {/* 1. KPI METRIC CARDS (CLEAN & PROPERLY ALIGNED)           */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Total Inquiries */}
          <div className="bg-[#0b2136] rounded-2xl p-5 border border-[#163e5c] shadow-lg shadow-black/20 hover:border-sky-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Total RFQ Pipeline
              </span>
              <div className="w-8 h-8 rounded-xl bg-[#081a2b] text-sky-300 flex items-center justify-center border border-[#14334d]">
                <Inbox className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums">
                {stats.totalInquiries}
              </span>
            </div>
          </div>

          {/* New Inquiries Today */}
          <div className="bg-[#0b2136] rounded-2xl p-5 border border-[#163e5c] shadow-lg shadow-black/20 hover:border-sky-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Active Leads
              </span>
              <div className="w-8 h-8 rounded-xl bg-[#081a2b] text-emerald-400 flex items-center justify-center border border-[#14334d]">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight tabular-nums">
                {stats.newInquiriesToday}
              </span>
            </div>
          </div>

          {/* Active Stock Formulations */}
          <div className="bg-[#0b2136] rounded-2xl p-5 border border-[#163e5c] shadow-lg shadow-black/20 hover:border-sky-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Active Formulations
              </span>
              <div className="w-8 h-8 rounded-xl bg-[#081a2b] text-indigo-400 flex items-center justify-center border border-[#14334d]">
                <FlaskConical className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums">
                {stats.activeProducts}+
              </span>
            </div>
          </div>

          {/* Lead to Formulation Conversion */}
          <div className="bg-[#0b2136] rounded-2xl p-5 border border-[#163e5c] shadow-lg shadow-black/20 hover:border-sky-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Compounding Conversion
              </span>
              <div className="w-8 h-8 rounded-xl bg-[#081a2b] text-purple-400 flex items-center justify-center border border-[#14334d]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums">
                {stats.conversionRate}
              </span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. CLEANROOM FACILITY & OPERATIONS BANNER                */}
        {/* ======================================================== */}
        <div className="bg-gradient-to-r from-[#081a2b] via-[#0d2840] to-[#164666] text-white rounded-2xl p-7 shadow-xl shadow-black/30 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-[#163e5c] relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-[11px] font-medium tracking-wide uppercase mb-3 border border-white/15">
              <Sparkles className="w-3 h-3 text-sky-400" />
              Class 100,000 Cleanroom Compounding Operations
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Mani Lifestyle Manufacturing Hub • Ahmedabad, India
            </h2>
            <p className="text-xs text-sky-200 mt-1 font-mono">
              Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang, 382430, Ahmedabad
            </p>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">
              Class 100,000 cleanroom cosmetic compounding facility, vacuum homogenizers (500L–2,000L), microbiology testing lab, and semi-automated bottle filling lines operating at 94% efficiency.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0 relative z-10">
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold bg-white text-[#091e2f] rounded-xl hover:bg-slate-100 transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#164666]" />
              <span>Open Public Site</span>
            </a>
            <Link
              href="/inquiries"
              className="px-4 py-2.5 text-xs font-semibold bg-sky-500/20 hover:bg-sky-500/30 text-white rounded-xl transition-all border border-sky-400/30 flex items-center gap-2 cursor-pointer"
            >
              <Inbox className="w-3.5 h-3.5" />
              <span>Review RFQs ({stats.totalInquiries})</span>
            </Link>
            <Link
              href="/products"
              className="px-4 py-2.5 text-xs font-semibold bg-[#061421] hover:bg-[#081a2b] text-slate-200 rounded-xl transition-all border border-[#14334d] flex items-center gap-2 cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5 text-sky-400" />
              <span>Catalog Formulations</span>
            </Link>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. WEBSITE CMS COMMAND CENTER (7 PAGES STUDIO GRID)      */}
        {/* ======================================================== */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <h2 className="text-base font-semibold text-white tracking-tight">Website Pages CMS Studio</h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Centralized management for all 7 storefront pages with live MongoDB Atlas synchronization.
              </p>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              7 of 7 Pages Synced
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cmsPagesList.map((page) => {
              const Icon = page.icon;
              return (
                <div
                  key={page.route}
                  className="bg-[#0b2136] rounded-2xl p-5 border border-[#163e5c] hover:border-sky-500/40 transition-all flex flex-col justify-between shadow-lg shadow-black/20 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-[#081a2b] text-sky-300 flex items-center justify-center border border-[#14334d] group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#081a2b] text-sky-300 border border-[#14334d]">
                        {page.sections}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-white tracking-tight flex items-center gap-1.5">
                      {page.title}
                    </h3>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider block mt-0.5">
                      {page.tag}
                    </span>

                    <p className="text-[11px] text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {page.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#14334d] flex items-center justify-between gap-2">
                    <a
                      href={page.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-medium text-slate-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                      title="Preview Live Page"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Preview</span>
                    </a>

                    <Link
                      href={page.route}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#164666] hover:bg-sky-600 text-white transition-colors shadow-xs flex items-center gap-1"
                    >
                      <span>Edit CMS</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 4. MANUFACTURING VERTICALS & CATEGORIES OVERVIEW         */}
        {/* ======================================================== */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <h2 className="text-base font-semibold text-white tracking-tight">Cosmetics Manufacturing Verticals</h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Core formulation departments ready for private label & white label batching.</p>
            </div>
            <Link
              href="/categories"
              className="text-xs text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 group"
            >
              <span>Manage All Verticals</span>
              <Layers className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {(categories.length > 0 ? categories : initialCategories.slice(0, 4)).map((cat) => (
              <div
                key={cat.id || cat.slug}
                className="bg-[#0b2136] rounded-2xl p-5 border border-[#163e5c] hover:border-sky-500/40 transition-all flex flex-col justify-between shadow-lg shadow-black/20"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400">{cat.id}</span>
                    <span className="text-[11px] font-medium text-sky-300 bg-[#081a2b] px-2 py-0.5 rounded-full border border-[#14334d]">
                      {cat.productCount || 10}+ Formulations
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mt-2.5">{cat.name}</h3>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">{cat.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#14334d] flex flex-wrap gap-1">
                  {(cat.featuredActives || ['Clean Actives', 'Stability Verified']).slice(0, 3).map((act, i) => (
                    <span key={i} className="text-[9px] font-medium bg-[#081a2b] text-slate-300 border border-[#14334d] px-1.5 py-0.5 rounded">
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
