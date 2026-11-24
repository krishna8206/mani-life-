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
} from 'lucide-react';

type TabKey = 'hero' | 'plaques' | 'editorial' | 'pipeline';

interface TrustHighlight {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

interface CertificationItem {
  id: string;
  name: string;
  authority: string;
  scope: string;
  importance: string;
  badgeCode: string;
  image: string;
  verified: boolean;
}

interface QualityStep {
  step: string;
  title: string;
  desc: string;
}

const defaultCmsData = {
  hero: {
    kicker: 'Quality Accreditations • Ahmedabad, Gujarat',
    headlinePart1: 'Trusted & ',
    headlineHighlight: 'Certified',
    subheadline:
      'Our commitment to excellence is backed by prestigious national and international quality accreditations, ensuring that every cosmetic formulation meets rigorous safety, purity, and clinical dermal benchmarks.',
    primaryCtaText: 'Request Compliance Dossiers',
    secondaryCtaText: 'Contact Regulatory Plant (+91 97246 81096)',
    phone: '+91 97246 81096',
    trustHighlights: [
      { id: '1', title: 'WHO-GMP &', subtitle: 'ISO 9001:2015', icon: 'ShieldCheck' },
      { id: '2', title: 'Ministry of', subtitle: 'AYUSH Licensed', icon: 'Award' },
      { id: '3', title: 'FDA & FDCA', subtitle: 'Export Ready', icon: 'Globe2' },
      { id: '4', title: '100% PETA', subtitle: 'Animal Test-Free', icon: 'Leaf' },
    ] as TrustHighlight[],
  },
  certificationsSection: {
    eyebrow: 'Recognized Regulatory Accreditations',
    title: 'Certified for Quality and',
    highlight: 'Reliability',
    description:
      'Our dedication to high standards is recognized by industry-leading bodies, ensuring every product meets rigorous quality, purity, and safety benchmarks.',
    items: [
      {
        id: 'gmp',
        name: 'Good Manufacturing Practices',
        authority: 'WHO-GMP & ISO 22716:2007 Guidelines',
        scope: 'Cosmetics - Good Compounding & Packaging Practices',
        importance:
          'Ensures products are consistently produced, compounded, and controlled to the highest global hygiene and safety standards',
        badgeCode: 'GMP CERTIFIED',
        image: '/images/certifications/gmp.png',
        verified: true,
      },
      {
        id: 'iso-9001',
        name: 'ISO 9001:2015 Accreditation',
        authority: 'International Organization for Standardization',
        scope: 'Quality Management Systems (QMS) Compliance',
        importance:
          'Guarantees institutional batch consistency, rigorous quality checkpoints, continuous R&D testing, and standardized repeatability',
        badgeCode: 'ISO 9001:2015',
        image: '/images/certifications/iso.png',
        verified: true,
      },
      {
        id: 'ayush',
        name: 'Ministry of AYUSH Licensed',
        authority: 'Government of India, Drug Licensing Authority',
        scope: 'Classical & Proprietary Ayurvedic Cosmetic Products',
        importance:
          'Authorizes the lawful commercial compounding and export of certified Ayurvedic, herbal, and therapeutic wellness formulations',
        badgeCode: 'AYUSH LICENSED',
        image: '/images/certifications/ministry.png',
        verified: true,
      },
      {
        id: 'peta',
        name: 'PETA Animal Test-Free',
        authority: 'People for the Ethical Treatment of Animals',
        scope: '100% Cruelty-Free & Humane Formulation Ethics',
        importance:
          'Guarantees absolute zero animal testing across all raw botanical ingredients, active compounds, and finished production batches',
        badgeCode: 'CRUELTY-FREE',
        image: '/images/certifications/peta.png',
        verified: true,
      },
      {
        id: 'fda',
        name: 'FDA & FDCA Approved',
        authority: 'Food & Drugs Control Administration & US FDA Registered',
        scope: 'Cosmetic Facility & Product Registration',
        importance:
          'Certified compliance with domestic FDCA Gujarat statutory mandates and US FDA facility registration for seamless international distribution',
        badgeCode: 'FDCA & FDA',
        image: '/images/certifications/fda.png',
        verified: true,
      },
    ] as CertificationItem[],
  },
  standardsEditorial: {
    leftBlock: {
      title: 'Good Manufacturing Practices (GMP)',
      text: 'Our commitment to excellence is deeply woven into every aspect of our manufacturing process. We adhere strictly to Good Manufacturing Practices (GMP), ensuring that all products are consistently produced and controlled according to quality standards appropriate to their intended use.',
      icon: 'ShieldCheck',
    },
    rightBlock: {
      title: 'Quality Systems Accreditation',
      text: 'This rigorous approach, combined with our ISO 9001:2015 certification, guarantees that our clients receive not just products, but a promise of unwavering quality, safety, and reliability. We continuously invest in advanced technology and staff training to uphold and surpass these high benchmarks.',
      icon: 'Award',
    },
  },
  qualityPipeline: {
    eyebrow: 'Quality Assurance Process',
    title: 'Our Commitment to',
    highlight: 'Quality',
    description:
      'Comprehensive cleanroom validation, microbiological testing, and analytical batch verification across every single production stage.',
    image: '/images/quality.png',
    imageAlt: 'Analytical cosmetic laboratory testing and sterile cleanroom validation',
    steps: [
      {
        step: '01',
        title: 'Raw Material Sourcing & Quarantine',
        desc: 'Every active compound, botanical extract, and packaging component undergoes analytical identity verification and certificate of analysis (COA) cross-checking before release to compounding.',
      },
      {
        step: '02',
        title: 'In-Process Cleanroom Validation',
        desc: 'Continuous monitoring of batch temperature, mixing shear, and viscosity profiling within WHO-GMP compliant, HEPA-filtered compounding suites.',
      },
      {
        step: '03',
        title: 'Comprehensive Final Release Testing',
        desc: 'Multi-parameter laboratory clearance including microbial assays, pH verification, and stability checks before sealing and issuing batch documentation.',
      },
    ] as QualityStep[],
  },
};

export default function CertificationsAdminPage() {
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
    fetchCertificationsData();
  }, []);

  const fetchCertificationsData = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://mani-life-1n34.vercel.app/api/certifications');
      if (res.ok) {
        const data = await res.json();
        if (data && data.hero) {
          setCms((prev) => ({
            ...prev,
            ...data,
            hero: { ...prev.hero, ...(data.hero || {}) },
            certificationsSection: { ...prev.certificationsSection, ...(data.certificationsSection || {}) },
            standardsEditorial: { ...prev.standardsEditorial, ...(data.standardsEditorial || {}) },
            qualityPipeline: { ...prev.qualityPipeline, ...(data.qualityPipeline || {}) },
          }));
        }
      }
    } catch (err) {
      console.error('Failed to load certifications data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveAll = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('https://mani-life-1n34.vercel.app/api/certifications', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cms),
      });

      if (res.ok) {
        showToast('Certificate & Regulatory Accreditations successfully saved to MongoDB Atlas!');
      } else {
        showToast('Failed to save changes. Check backend connection.');
      }
    } catch (err) {
      console.error('Save error:', err);
      showToast('Network error while saving certifications.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#06131f] text-slate-200 font-sans min-h-screen">
      <AdminHeader
        title="Certificates & Regulatory Awards"
        subtitle="Manage ISO accreditations, WHO-GMP badges, quality pipelines, and regulatory compliance showcases"
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
              <h2 className="text-sm font-semibold text-white">Certificate & Regulatory Accreditations Studio</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Live URL:{' '}
                <a
                  href="http://localhost:3000/certifications"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:underline font-mono"
                >
                  http://localhost:3000/certifications
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="http://localhost:3000/certifications"
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

          {/* Clean Tabs (No Icons, No Sliders, Proper Alignment) */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: 'hero', label: '1. Hero Banner' },
              { key: 'plaques', label: '2. Certification Plaques' },
              { key: 'editorial', label: '3. Standards Editorial' },
              { key: 'pipeline', label: '4. Quality Pipeline' },
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
            <span className="text-xs text-slate-400">Loading Certifications content from MongoDB Atlas...</span>
          </div>
        ) : (
          <div className="space-y-6">
            {/* ======================================================== */}
            {/* TAB 1: HERO BANNER                                       */}
            {/* ======================================================== */}
            {activeTab === 'hero' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 1: Hero Banner & Quality Accreditations</h3>
                  <p className="text-xs text-slate-400">
                    Controls opening masthead statement, primary & secondary CTAs, plant phone, and the 4 Trust Highlights.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Micro-Header Kicker</label>
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
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white leading-relaxed focus:outline-hidden focus:ring-1 focus:ring-sky-400"
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
                    <label className="block text-slate-300 font-medium mb-1">Secondary CTA Button Text (WhatsApp / Phone)</label>
                    <input
                      type="text"
                      value={cms.hero.secondaryCtaText}
                      onChange={(e) => setCms({ ...cms, hero: { ...cms.hero, secondaryCtaText: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Regulatory Plant Direct Phone</label>
                    <input
                      type="text"
                      value={cms.hero.phone}
                      onChange={(e) => setCms({ ...cms, hero: { ...cms.hero, phone: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                    />
                  </div>
                </div>

                {/* Trust Highlights Strip (Add/Edit/Delete) */}
                <div className="pt-4 border-t border-[#14334d] space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">Trust Highlights Strip (4 Nodes)</h4>
                      <p className="text-[11px] text-slate-400">Pills displayed beneath the CTA buttons</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const nextId = String(Date.now());
                        const updated = [
                          ...cms.hero.trustHighlights,
                          { id: nextId, title: 'Certified Authority', subtitle: 'Global Compliance', icon: 'ShieldCheck' },
                        ];
                        setCms({ ...cms, hero: { ...cms.hero, trustHighlights: updated } });
                      }}
                      className="px-3 py-1.5 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Trust Node</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
                        <div>
                          <label className="block text-[10px] text-slate-400 mb-0.5">Title Line</label>
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
                          <label className="block text-[10px] text-slate-400 mb-0.5">Subtitle Line</label>
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
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 2: CERTIFICATION PLAQUES (ADD / EDIT / DELETE)       */}
            {/* ======================================================== */}
            {activeTab === 'plaques' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 2: Certification Plaque Showcase</h3>
                  <p className="text-xs text-slate-400">
                    Manage 3D interactive plaque cards displayed on the live website. Each plaque supports image upload, authority, and verification toggle.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Section Eyebrow</label>
                    <input
                      type="text"
                      value={cms.certificationsSection.eyebrow}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          certificationsSection: { ...cms.certificationsSection, eyebrow: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Part 1</label>
                    <input
                      type="text"
                      value={cms.certificationsSection.title}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          certificationsSection: { ...cms.certificationsSection, title: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight Word</label>
                    <input
                      type="text"
                      value={cms.certificationsSection.highlight}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          certificationsSection: { ...cms.certificationsSection, highlight: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Introductory Narrative</label>
                    <textarea
                      rows={2}
                      value={cms.certificationsSection.description}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          certificationsSection: { ...cms.certificationsSection, description: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>
                </div>

                {/* Plaques List (Add / Edit / Delete) */}
                <div className="pt-4 border-t border-[#14334d] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">
                        Certification Plaque Cards ({cms.certificationsSection.items.length})
                      </h4>
                      <p className="text-[11px] text-slate-400">Interactive 3D plaques rendered with metallic sheen</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const newId = `cert-${Date.now().toString().slice(-4)}`;
                        const updated = [
                          ...cms.certificationsSection.items,
                          {
                            id: newId,
                            name: 'New Certification Standard',
                            authority: 'Accreditation Body',
                            scope: 'Cosmetic Compounding & Hygiene Compliance',
                            importance:
                              'Ensures strict adherence to certified international cosmetics compounding benchmarks.',
                            badgeCode: 'CERTIFIED',
                            image: '/images/certifications/gmp.png',
                            verified: true,
                          },
                        ];
                        setCms({
                          ...cms,
                          certificationsSection: { ...cms.certificationsSection, items: updated },
                        });
                      }}
                      className="px-3 py-1.5 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Plaque Card</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {cms.certificationsSection.items.map((item, idx) => (
                      <div key={item.id || idx} className="p-4 bg-[#06131f] rounded-2xl border border-[#14334d] space-y-3">
                        <div className="flex items-center justify-between border-b border-[#14334d]/60 pb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-sky-400">Plaque #{idx + 1}</span>
                            <span className="text-[11px] font-semibold text-white">{item.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = cms.certificationsSection.items.filter((_, i) => i !== idx);
                              setCms({
                                ...cms,
                                certificationsSection: { ...cms.certificationsSection, items: updated },
                              });
                            }}
                            className="text-slate-500 hover:text-rose-400 transition-colors p-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Certification Name</label>
                            <input
                              type="text"
                              value={item.name}
                              onChange={(e) => {
                                const updated = [...cms.certificationsSection.items];
                                updated[idx] = { ...updated[idx], name: e.target.value };
                                setCms({
                                  ...cms,
                                  certificationsSection: { ...cms.certificationsSection, items: updated },
                                });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs font-semibold"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Issuing Authority</label>
                            <input
                              type="text"
                              value={item.authority}
                              onChange={(e) => {
                                const updated = [...cms.certificationsSection.items];
                                updated[idx] = { ...updated[idx], authority: e.target.value };
                                setCms({
                                  ...cms,
                                  certificationsSection: { ...cms.certificationsSection, items: updated },
                                });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Badge Code Pill</label>
                            <input
                              type="text"
                              value={item.badgeCode}
                              onChange={(e) => {
                                const updated = [...cms.certificationsSection.items];
                                updated[idx] = { ...updated[idx], badgeCode: e.target.value };
                                setCms({
                                  ...cms,
                                  certificationsSection: { ...cms.certificationsSection, items: updated },
                                });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs font-mono"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Audit Scope</label>
                            <input
                              type="text"
                              value={item.scope}
                              onChange={(e) => {
                                const updated = [...cms.certificationsSection.items];
                                updated[idx] = { ...updated[idx], scope: e.target.value };
                                setCms({
                                  ...cms,
                                  certificationsSection: { ...cms.certificationsSection, items: updated },
                                });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Client Importance Narrative</label>
                            <input
                              type="text"
                              value={item.importance}
                              onChange={(e) => {
                                const updated = [...cms.certificationsSection.items];
                                updated[idx] = { ...updated[idx], importance: e.target.value };
                                setCms({
                                  ...cms,
                                  certificationsSection: { ...cms.certificationsSection, items: updated },
                                });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center pt-2">
                          <ImageUploadInput
                            label="Plaque Seal / Logo Photo"
                            value={item.image}
                            onChange={(url) => {
                              const updated = [...cms.certificationsSection.items];
                              updated[idx] = { ...updated[idx], image: url };
                              setCms({
                                ...cms,
                                certificationsSection: { ...cms.certificationsSection, items: updated },
                              });
                            }}
                            folder="mani-lifestyle/certifications"
                          />

                          <div className="flex items-center gap-2 pt-5">
                            <input
                              type="checkbox"
                              id={`verified-${idx}`}
                              checked={item.verified}
                              onChange={(e) => {
                                const updated = [...cms.certificationsSection.items];
                                updated[idx] = { ...updated[idx], verified: e.target.checked };
                                setCms({
                                  ...cms,
                                  certificationsSection: { ...cms.certificationsSection, items: updated },
                                });
                              }}
                              className="w-4 h-4 rounded text-sky-500 bg-[#06131f] border-[#14334d] cursor-pointer"
                            />
                            <label htmlFor={`verified-${idx}`} className="text-xs text-slate-300 font-medium cursor-pointer">
                              Display Verified Badge on Plaque
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 3: STANDARDS EDITORIAL NARRATIVE                     */}
            {/* ======================================================== */}
            {activeTab === 'editorial' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 3: Standards Editorial Narrative Box</h3>
                  <p className="text-xs text-slate-400">
                    Controls the two-column authentic editorial box detailing Good Manufacturing Practices and Quality Accreditations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  {/* Left Column (GMP) */}
                  <div className="p-4 bg-[#06131f] rounded-2xl border border-[#14334d] space-y-3">
                    <h4 className="text-xs font-semibold text-sky-400">Left Editorial Column (GMP Standards)</h4>
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-0.5">Column Heading</label>
                      <input
                        type="text"
                        value={cms.standardsEditorial.leftBlock.title}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            standardsEditorial: {
                              ...cms.standardsEditorial,
                              leftBlock: { ...cms.standardsEditorial.leftBlock, title: e.target.value },
                            },
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-0.5">Narrative Description</label>
                      <textarea
                        rows={6}
                        value={cms.standardsEditorial.leftBlock.text}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            standardsEditorial: {
                              ...cms.standardsEditorial,
                              leftBlock: { ...cms.standardsEditorial.leftBlock, text: e.target.value },
                            },
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs leading-relaxed focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                      />
                    </div>
                  </div>

                  {/* Right Column (ISO / Accreditation) */}
                  <div className="p-4 bg-[#06131f] rounded-2xl border border-[#14334d] space-y-3">
                    <h4 className="text-xs font-semibold text-sky-400">Right Editorial Column (Accreditation Systems)</h4>
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-0.5">Column Heading</label>
                      <input
                        type="text"
                        value={cms.standardsEditorial.rightBlock.title}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            standardsEditorial: {
                              ...cms.standardsEditorial,
                              rightBlock: { ...cms.standardsEditorial.rightBlock, title: e.target.value },
                            },
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-0.5">Narrative Description</label>
                      <textarea
                        rows={6}
                        value={cms.standardsEditorial.rightBlock.text}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            standardsEditorial: {
                              ...cms.standardsEditorial,
                              rightBlock: { ...cms.standardsEditorial.rightBlock, text: e.target.value },
                            },
                          })
                        }
                        className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs leading-relaxed focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 4: QUALITY TRACE PIPELINE                            */}
            {/* ======================================================== */}
            {activeTab === 'pipeline' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 4: Quality Trace Pipeline & Lab Parallax</h3>
                  <p className="text-xs text-slate-400">
                    Controls laboratory photograph and the multi-stage quality assurance verification process.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Section Eyebrow</label>
                    <input
                      type="text"
                      value={cms.qualityPipeline.eyebrow}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          qualityPipeline: { ...cms.qualityPipeline, eyebrow: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Part 1</label>
                    <input
                      type="text"
                      value={cms.qualityPipeline.title}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          qualityPipeline: { ...cms.qualityPipeline, title: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight Word</label>
                    <input
                      type="text"
                      value={cms.qualityPipeline.highlight}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          qualityPipeline: { ...cms.qualityPipeline, highlight: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Introductory Narrative</label>
                    <textarea
                      rows={2}
                      value={cms.qualityPipeline.description}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          qualityPipeline: { ...cms.qualityPipeline, description: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <ImageUploadInput
                      label="Quality Laboratory Testing Photograph"
                      value={cms.qualityPipeline.image}
                      onChange={(url) =>
                        setCms({
                          ...cms,
                          qualityPipeline: { ...cms.qualityPipeline, image: url },
                        })
                      }
                      folder="mani-lifestyle/certifications"
                    />
                  </div>
                </div>

                {/* Pipeline Steps (Add / Edit / Delete) */}
                <div className="pt-4 border-t border-[#14334d] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">
                        Quality Verification Steps ({cms.qualityPipeline.steps.length})
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Sequential process steps illuminated interactively on scroll
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const nextNum = `0${cms.qualityPipeline.steps.length + 1}`;
                        const updated = [
                          ...cms.qualityPipeline.steps,
                          {
                            step: nextNum,
                            title: 'New Analytical Verification Step',
                            desc: 'Rigorous multi-parameter laboratory testing protocols executed under sterile cleanroom controls.',
                          },
                        ];
                        setCms({
                          ...cms,
                          qualityPipeline: { ...cms.qualityPipeline, steps: updated },
                        });
                      }}
                      className="px-3 py-1.5 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Quality Step</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {cms.qualityPipeline.steps.map((st, sIdx) => (
                      <div key={sIdx} className="p-4 bg-[#06131f] rounded-2xl border border-[#14334d] space-y-2">
                        <div className="flex items-center justify-between border-b border-[#14334d]/60 pb-2">
                          <span className="text-xs font-mono font-bold text-sky-400">Step #{st.step || sIdx + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = cms.qualityPipeline.steps.filter((_, i) => i !== sIdx);
                              setCms({
                                ...cms,
                                qualityPipeline: { ...cms.qualityPipeline, steps: updated },
                              });
                            }}
                            className="text-slate-500 hover:text-rose-400 transition-colors p-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Step Number</label>
                            <input
                              type="text"
                              value={st.step}
                              onChange={(e) => {
                                const updated = [...cms.qualityPipeline.steps];
                                updated[sIdx] = { ...updated[sIdx], step: e.target.value };
                                setCms({
                                  ...cms,
                                  qualityPipeline: { ...cms.qualityPipeline, steps: updated },
                                });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs font-mono"
                            />
                          </div>

                          <div className="sm:col-span-3">
                            <label className="block text-[10px] text-slate-400 mb-0.5">Step Title</label>
                            <input
                              type="text"
                              value={st.title}
                              onChange={(e) => {
                                const updated = [...cms.qualityPipeline.steps];
                                updated[sIdx] = { ...updated[sIdx], title: e.target.value };
                                setCms({
                                  ...cms,
                                  qualityPipeline: { ...cms.qualityPipeline, steps: updated },
                                });
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white text-xs font-semibold"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] text-slate-400 mb-0.5">Verification Narrative</label>
                          <textarea
                            rows={3}
                            value={st.desc}
                            onChange={(e) => {
                              const updated = [...cms.qualityPipeline.steps];
                              updated[sIdx] = { ...updated[sIdx], desc: e.target.value };
                              setCms({
                                ...cms,
                                qualityPipeline: { ...cms.qualityPipeline, steps: updated },
                              });
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
          </div>
        )}
      </div>
    </div>
  );
}
