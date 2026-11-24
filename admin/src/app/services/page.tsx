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
} from 'lucide-react';

type TabKey = 'hero' | 'precision' | 'lifecycle' | 'modulation' | 'cta';

interface TrustIndicator {
  id: string;
  line1: string;
  line2: string;
  icon: string;
}

interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  deliverables: string[];
  suitableFor: string[];
  timeline: string;
  moq: string;
  image: string;
}

interface ProcessStage {
  step: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

interface ModulationStep {
  stepNumber: string;
  stepLabel: string;
  title: string;
  description: string;
  icon: string;
}

const defaultCmsData = {
  hero: {
    kicker: 'CERTIFIED COSMETICS MANUFACTURER · AHMEDABAD, INDIA',
    headlinePart1: 'Our Services.',
    headlineHighlight1: 'Crafting Your Brand’s',
    headlineHighlight2: 'Future.',
    subheadline:
      'Mani Lifestyle crafts custom, innovative cosmetics solutions — turning ideas tailored to your exact requirements from concept to finished skincare, haircare, and personal care formulations.',
    primaryCtaText: 'Request Custom Formulation Quote',
    secondaryCtaText: 'Call +91 97246 81096',
    phone: '+91 97246 81096',
    trustIndicators: [
      { id: '1', line1: 'Low 500 MOQ', line2: '(Startups & Salons)', icon: 'FlaskConical' },
      { id: '2', line1: '500+ Stock', line2: 'Formulas', icon: 'Layers' },
      { id: '3', line1: 'ISO 22716 &', line2: 'WHO-GMP', icon: 'ShieldCheck' },
      { id: '4', line1: '100% Client', line2: 'IP Protection', icon: 'Leaf' },
    ] as TrustIndicator[],
  },
  precisionJourney: {
    eyebrow: 'MANUFACTURING CAPABILITIES',
    title: 'Four Precision Models for',
    highlight: 'Beauty Brands',
    description:
      'Tailored production frameworks designed around your capital requirements, brand maturity, and retail roll-out velocity.',
    services: [
      {
        id: 'srv-1',
        slug: 'custom-formulation',
        title: 'Custom Formulation (ODM)',
        tagline: 'Bespoke bench formulation & active chemistry engineered to your brief',
        shortDesc:
          'End-to-end bespoke product development from concept, active percentage optimization, and sensory prototyping to stability certification.',
        fullDesc:
          'Our R&D team of cosmetic chemists and Ayurvedic pharmacologists transforms your vision into distinct, market-ready formulations. We specialize in clean chemistry, high-potency cosmeceuticals, and biocompatible textures. You receive 3 iterative bench sampling rounds, viscosity fine-tuning, fragrance profiling, and full clinical stability verification.',
        features: [
          'Custom active compounding (Peptides, Retinoids, Vitamin C, AHA/BHA)',
          'Proprietary texture design (Bi-phase oils, souffle creams, water gels)',
          'Clean beauty compliance (Paraben, sulfate, mineral oil free)',
          'Accelerated thermal & photostability chamber testing (40°C / 75% RH)',
          'Strict confidentiality backed by comprehensive Mutual NDAs',
          'Full formulation IP transfer upon commercial scale-up',
        ],
        deliverables: [
          'Bench Prototype Sample Rounds (100ml / 50g samples)',
          'Certificate of Analysis (COA) & Physicochemical Profile',
          '90-Day Accelerated Stability & Preservative Efficacy Report',
          'Regulatory INCI Ingredient List & Packaging Artwork Text',
        ],
        suitableFor: [
          'D2C brands seeking signature proprietary formulations',
          'Dermatology & medical aesthetic clinics',
          'Celebrity & creator beauty brand launches',
        ],
        timeline: 'Initial samples in 7-10 days; Mass production in 30 days',
        moq: '1,000 - 2,500 Units',
        image: '/images/services/formulation.png',
      },
      {
        id: 'srv-2',
        slug: 'private-label',
        title: 'Private Label Manufacturing (OEM)',
        tagline: '500+ clinically tested, market-proven stock formulations for fast rollout',
        shortDesc:
          'The fastest, most cost-effective path to launch your brand using our pre-developed, time-tested formulations with custom packaging.',
        fullDesc:
          'Private label manufacturing allows you to launch high-performance beauty and oral care products without bearing initial R&D development overhead or prolonged stability waiting periods. Choose from our portfolio of 500+ proven formulas across skincare, haircare, toothpaste, and body care, then customize with your signature fragrance, primary packaging, and label branding.',
        features: [
          'Immediate access to 500+ pre-stabilized stock formulas',
          'Low barrier to entry with startup-friendly Low MOQ options',
          'Fast 21-day turnaround to launch products into market',
          'Choice of pre-tested premium packaging containers',
          'Optional fragrance and botanical extract personalization',
          'Pre-verified regulatory compliance for immediate retail distribution',
        ],
        deliverables: [
          'Pre-tested bulk formulation with certified shelf life',
          'Fully filled, capped, labeled, and shrink-banded finished units',
          'Batch COA and safety documentation for retail listing',
          'Export ready master outer cartons with barcode labeling',
        ],
        suitableFor: [
          'Early-stage beauty startups & e-commerce entrepreneurs',
          'Salons, spas & luxury hotel chains',
          'Retail chains seeking fast-moving private label lines',
        ],
        timeline: '21 - 25 Business Days',
        moq: 'From 500 Units',
        image: '/images/services/private-label.png',
      },
      {
        id: 'srv-3',
        slug: 'contract-manufacturing',
        title: 'Contract & Third-Party Manufacturing',
        tagline: 'High-capacity automated compounding & sterile filling at commercial scale',
        shortDesc:
          'Precision toll manufacturing for established enterprises, pharmaceutical distributors, and multinational consumer goods companies.',
        fullDesc:
          'Engineered for high-volume efficiency and zero-defect quality. Our manufacturing facility houses vacuum homogenizing emulsifiers ranging from 100 kg pilot vessels to 3,000 kg production batches, coupled with high-speed automated tube-filling lines, bottle filling systems, and automated cartooning machines.',
        features: [
          'Scalable compounding capacity exceeding 50,000 kg monthly',
          'High-speed automated tube filling with hot-air crimping & coding',
          'Pharmaceutical-grade Class 100,000 cleanroom manufacturing suites',
          'Reverse Osmosis (RO) electro-deionized high-purity water plant',
          'Flexible raw material sourcing: In-house sourced or customer-consigned materials',
          'Batch-to-batch consistency with computerized PLC process controls',
        ],
        deliverables: [
          'Full commercial batch release records (BMR / BPR)',
          'Microbiological limit testing certificates per batch',
          'Bulk drum/tote supply or fully packaged finished goods',
          'Palletized, shrink-wrapped export consignments',
        ],
        suitableFor: [
          'Multinational personal care conglomerates',
          'Pharmaceutical distributors & pharmacy chains',
          'Large-scale retail brand procurement teams',
        ],
        timeline: 'Scheduled recurring production runs (14-21 day cycles)',
        moq: '5,000 - 50,000+ Units',
        image: '/images/services/contract-manufacturing.png',
      },
      {
        id: 'srv-4',
        slug: 'packaging-solutions',
        title: 'Packaging Design & Sourcing Solutions',
        tagline: 'Primary container engineering, sustainable plastics & regulatory artwork',
        shortDesc:
          'Complete primary and secondary packaging integration to ensure product stability, shelf appeal, and international legal compliance.',
        fullDesc:
          'The right packaging protects formulation stability and drives consumer desire. We offer end-to-end packaging procurement and design services, assisting you in selecting the ideal container compatibility (evaluating airless pump vacuum, UV-blocking amber glass, ABL laminated toothpaste tubes, or PCR post-consumer plastics) alongside regulatory compliant artwork.',
        features: [
          'Compatibility testing with formulation to prevent leaching or chemical reaction',
          'Airless pump dispensers, droppers, aluminum tubes & wide-mouth jars',
          'Eco-friendly PCR (Post-Consumer Recycled) plastic & glass alternatives',
          'Hot-stamping, silk-screen printing, and metallic foil label finishes',
          'Regulatory artwork review for FDA, EU, GCC, and Indian cosmetic labeling laws',
          'Secondary packaging: Luxury rigid boxes, outer unit cartons, tamper seals',
        ],
        deliverables: [
          'Container compatibility test clearance report',
          'Die-cut packaging artwork templates with legal INCI disclosures',
          'Pre-production printed container physical sample mockups',
          'Master shipper carton drop-test validation',
        ],
        suitableFor: [
          'Brands seeking distinct custom shelf aesthetics',
          'Exporters requiring multi-lingual international compliance text',
          'Eco-conscious brands transitioning to sustainable packaging',
        ],
        timeline: 'Integrated concurrently with formulation timeline',
        moq: 'Aligned with product MOQ',
        image: '/images/services/custom-packaging.png',
      },
    ] as ServiceItem[],
  },
  lifecycleStages: {
    eyebrow: 'END-TO-END MANUFACTURING LIFECYCLE',
    title: 'Complete OEM &',
    highlight: 'ODM Services',
    description:
      'We turn your ideas that are tailored to your requirements and shape them from concept to a custom skin care product.',
    stages: [
      {
        step: '01',
        title: 'Requirement Gathering',
        description:
          'We understand your brand vision, target demographic, active ingredient preferences, and benchmark product profiling.',
        image: '/images/services/requirement-gathering.png',
        highlights: ['Target Skin Types', 'Key Active Preferences', 'Budget & Unit Projections'],
      },
      {
        step: '02',
        title: 'Formula Modulation',
        description:
          'Our cosmetic laboratory compounds active formulations, balances pH & viscosity, and carries out accelerated stability testing.',
        image: '/images/services/formulation_new.png',
        highlights: ['Custom Chemistry', 'Viscosity Calibration', 'Sensory Optimization'],
      },
      {
        step: '03',
        title: 'Choose Your Product',
        description:
          'Select from clinically tested skincare, haircare, body care, and specialty salon formulations crafted for peak performance.',
        image: '/images/services/choose-your-product.png',
        highlights: ['Clinical Serums', 'Botanical Creams', 'Professional Salon Formulations'],
      },
      {
        step: '04',
        title: 'Choose Your Packaging',
        description:
          'Pair with airless bottles, dropper bottles, squeeze tubes, or luxury jars with complete container compatibility verification.',
        image: '/images/services/custom-packaging.png',
        highlights: ['Airless Pumps & Droppers', 'Recyclable Glass & PCR', 'Hot-Stamping & Silk Screen'],
      },
      {
        step: '05',
        title: 'Confirm Product & Packaging',
        description:
          'Review physical bench prototypes, inspect regulatory artwork proofs, and approve final pilot batch formulations.',
        image: '/images/services/modulation.jpg',
        highlights: ['Physical Prototype Sign-off', 'Legal INCI Artwork Check', 'Pilot Batch Validation'],
      },
      {
        step: '06',
        title: 'Manufacturing & Inspection',
        description:
          'Automated Class 100,000 cleanroom production, inline QA checks, batch microbiology release testing, and pan-India dispatch.',
        image: '/images/services/inspection.jpg',
        highlights: ['Class 100,000 Suites', 'Microbiology Testing', 'Pan-India Secure Logistics'],
      },
    ] as ProcessStage[],
  },
  formulaModulation: {
    eyebrow: 'FORMULA MODULATION',
    title: 'From Your Idea to a',
    highlight: 'Perfect Formula',
    description:
      'We make the process simple, transparent, and collaborative — so you get a formula that truly fits your brand.',
    centerDisc: {
      kicker: 'YOUR VISION',
      title: 'OUR FORMULATION',
      description: 'A seamless journey from concept to creation, backed by expertise at every step.',
    },
    steps: [
      {
        stepNumber: '01',
        stepLabel: 'STEP 1',
        title: 'Clarify Customer Demand',
        description: 'We understand your brand goals, target market and specific requirements.',
        icon: 'MessagesSquare',
      },
      {
        stepNumber: '02',
        stepLabel: 'STEP 2',
        title: 'Fill in Detailed Proofing Form',
        description: 'Share your preferences for texture, ingredients, fragrance, packaging and more.',
        icon: 'FileEdit',
      },
      {
        stepNumber: '03',
        stepLabel: 'STEP 3',
        title: 'Provide Proofing Sample',
        description: 'We develop and send initial samples based on your requirements for testing.',
        icon: 'FlaskConical',
      },
      {
        stepNumber: '04',
        stepLabel: 'STEP 4',
        title: 'Sample Feedback & Confirmation',
        description: 'You review the samples and share your feedback. We refine the formula until it’s approved.',
        icon: 'Star',
      },
      {
        stepNumber: '05',
        stepLabel: 'STEP 5',
        title: 'Sample Adjustment',
        description: 'We fine-tune the formula based on your feedback for the perfect result.',
        icon: 'SlidersHorizontal',
      },
      {
        stepNumber: '06',
        stepLabel: 'STEP 6',
        title: 'Quotation & Place Order',
        description: 'Once confirmed, we share the quotation and proceed with production.',
        icon: 'ShoppingCart',
      },
    ] as ModulationStep[],
  },
  consultationCta: {
    eyebrow: 'Premier Indian Contract Manufacturing Partner',
    heading: 'Ready to Build Your Dream',
    highlight: 'Personal Care Brand Together?',
    description:
      'Whether you want to launch with proven stock formulations or engineer bespoke cosmeceuticals, Mani Lifestyle is your certified manufacturing partner.',
    primaryCtaText: 'Request Custom Quote & Formulation Samples',
    secondaryCtaText: 'Schedule Plant Tour (+91 97246 81096)',
    phone: '+91 97246 81096',
    trustPoints: [
      'Immediate NDA Protection',
      '24-Hour Technical Feasibility Response',
      'Direct Factory Pricing',
    ],
  },
};

export default function ServicesAdminPage() {
  const [cms, setCms] = useState(defaultCmsData);
  const [activeTab, setActiveTab] = useState<TabKey>('hero');
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Temporary input state for string arrays
  const [featureInputs, setFeatureInputs] = useState<{ [key: string]: string }>({});
  const [deliverableInputs, setDeliverableInputs] = useState<{ [key: string]: string }>({});
  const [suitableInputs, setSuitableInputs] = useState<{ [key: string]: string }>({});
  const [highlightInputs, setHighlightInputs] = useState<{ [key: string]: string }>({});
  const [newTrustPointInput, setNewTrustPointInput] = useState<string>('');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  useEffect(() => {
    fetchServicesData();
  }, []);

  const fetchServicesData = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://mani-life-1n34.vercel.app/api/services-page');
      if (res.ok) {
        const data = await res.json();
        if (data && data.hero) {
          setCms((prev) => ({
            ...prev,
            ...data,
            hero: { ...prev.hero, ...(data.hero || {}) },
            precisionJourney: { ...prev.precisionJourney, ...(data.precisionJourney || {}) },
            lifecycleStages: { ...prev.lifecycleStages, ...(data.lifecycleStages || {}) },
            formulaModulation: { ...prev.formulaModulation, ...(data.formulaModulation || {}) },
            consultationCta: { ...prev.consultationCta, ...(data.consultationCta || {}) },
          }));
        }
      }
    } catch (err) {
      console.error('Failed to load services data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveAll = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('https://mani-life-1n34.vercel.app/api/services-page', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cms),
      });

      if (res.ok) {
        showToast('Services CMS successfully saved to MongoDB Atlas!');
      } else {
        showToast('Failed to save changes. Check backend connection.');
      }
    } catch (err) {
      console.error('Save error:', err);
      showToast('Network error while saving services.');
    } finally {
      setSaving(false);
    }
  };

  // -------------------------------------------------------------
  // TAB 1: HERO TRUST INDICATOR HANDLERS
  // -------------------------------------------------------------
  const handleAddTrustIndicator = () => {
    const newId = String(Date.now());
    const newItem: TrustIndicator = {
      id: newId,
      line1: 'New Benchmark',
      line2: 'Certified Standard',
      icon: 'ShieldCheck',
    };
    setCms((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        trustIndicators: [...(prev.hero.trustIndicators || []), newItem],
      },
    }));
  };

  const handleUpdateTrustIndicator = (index: number, field: keyof TrustIndicator, value: string) => {
    const updated = [...(cms.hero.trustIndicators || [])];
    updated[index] = { ...updated[index], [field]: value };
    setCms((prev) => ({
      ...prev,
      hero: { ...prev.hero, trustIndicators: updated },
    }));
  };

  const handleDeleteTrustIndicator = (index: number) => {
    const updated = cms.hero.trustIndicators.filter((_, i) => i !== index);
    setCms((prev) => ({
      ...prev,
      hero: { ...prev.hero, trustIndicators: updated },
    }));
  };

  // -------------------------------------------------------------
  // TAB 2: PRECISION JOURNEY (MANUFACTURING MODELS) HANDLERS
  // -------------------------------------------------------------
  const handleAddService = () => {
    const newId = `srv-${Date.now()}`;
    const newService: ServiceItem = {
      id: newId,
      slug: `new-service-${Date.now().toString().slice(-4)}`,
      title: 'New Manufacturing Solution',
      tagline: 'Precision engineered formulation & production benchmark',
      shortDesc: 'Concise summary of this contract manufacturing capability for beauty brands.',
      fullDesc:
        'Detailed engineering narrative explaining laboratory capabilities, active compound purity benchmarks, pilot compounding scale, and delivery timelines.',
      features: ['Turnkey Formulation Benchmarks', 'Clean Beauty Compliance'],
      deliverables: ['Prototype Sample Rounds', 'Certificate of Analysis (COA)'],
      suitableFor: ['Emerging D2C Brands', 'Professional Salons'],
      timeline: '21 - 30 Business Days',
      moq: '500 - 1,000 Units',
      image: '/images/services/formulation.png',
    };
    setCms((prev) => ({
      ...prev,
      precisionJourney: {
        ...prev.precisionJourney,
        services: [...(prev.precisionJourney.services || []), newService],
      },
    }));
  };

  const handleUpdateService = (index: number, field: keyof ServiceItem, value: any) => {
    const updated = [...(cms.precisionJourney.services || [])];
    updated[index] = { ...updated[index], [field]: value };
    setCms((prev) => ({
      ...prev,
      precisionJourney: { ...prev.precisionJourney, services: updated },
    }));
  };

  const handleDeleteService = (index: number) => {
    const updated = cms.precisionJourney.services.filter((_, i) => i !== index);
    setCms((prev) => ({
      ...prev,
      precisionJourney: { ...prev.precisionJourney, services: updated },
    }));
  };

  const handleAddServiceFeature = (serviceIndex: number) => {
    const text = (featureInputs[serviceIndex] || '').trim();
    if (!text) return;
    const service = cms.precisionJourney.services[serviceIndex];
    const updatedFeatures = [...(service.features || []), text];
    handleUpdateService(serviceIndex, 'features', updatedFeatures);
    setFeatureInputs((prev) => ({ ...prev, [serviceIndex]: '' }));
  };

  const handleDeleteServiceFeature = (serviceIndex: number, featureIndex: number) => {
    const service = cms.precisionJourney.services[serviceIndex];
    const updatedFeatures = service.features.filter((_, i) => i !== featureIndex);
    handleUpdateService(serviceIndex, 'features', updatedFeatures);
  };

  const handleAddServiceDeliverable = (serviceIndex: number) => {
    const text = (deliverableInputs[serviceIndex] || '').trim();
    if (!text) return;
    const service = cms.precisionJourney.services[serviceIndex];
    const updated = [...(service.deliverables || []), text];
    handleUpdateService(serviceIndex, 'deliverables', updated);
    setDeliverableInputs((prev) => ({ ...prev, [serviceIndex]: '' }));
  };

  const handleDeleteServiceDeliverable = (serviceIndex: number, delIndex: number) => {
    const service = cms.precisionJourney.services[serviceIndex];
    const updated = service.deliverables.filter((_, i) => i !== delIndex);
    handleUpdateService(serviceIndex, 'deliverables', updated);
  };

  const handleAddServiceSuitable = (serviceIndex: number) => {
    const text = (suitableInputs[serviceIndex] || '').trim();
    if (!text) return;
    const service = cms.precisionJourney.services[serviceIndex];
    const updated = [...(service.suitableFor || []), text];
    handleUpdateService(serviceIndex, 'suitableFor', updated);
    setSuitableInputs((prev) => ({ ...prev, [serviceIndex]: '' }));
  };

  const handleDeleteServiceSuitable = (serviceIndex: number, sIndex: number) => {
    const service = cms.precisionJourney.services[serviceIndex];
    const updated = service.suitableFor.filter((_, i) => i !== sIndex);
    handleUpdateService(serviceIndex, 'suitableFor', updated);
  };

  // -------------------------------------------------------------
  // TAB 3: LIFECYCLE STAGES HANDLERS
  // -------------------------------------------------------------
  const handleAddLifecycleStage = () => {
    const newStepNum = String((cms.lifecycleStages.stages?.length || 0) + 1).padStart(2, '0');
    const newStage: ProcessStage = {
      step: newStepNum,
      title: 'New Process Stage',
      description: 'Detailing step execution, analytical checkpoints, and cleanroom validation.',
      image: '/images/services/requirement-gathering.png',
      highlights: ['Inline Verification', 'Lab Clearance'],
    };
    setCms((prev) => ({
      ...prev,
      lifecycleStages: {
        ...prev.lifecycleStages,
        stages: [...(prev.lifecycleStages.stages || []), newStage],
      },
    }));
  };

  const handleUpdateLifecycleStage = (index: number, field: keyof ProcessStage, value: any) => {
    const updated = [...(cms.lifecycleStages.stages || [])];
    updated[index] = { ...updated[index], [field]: value };
    setCms((prev) => ({
      ...prev,
      lifecycleStages: { ...prev.lifecycleStages, stages: updated },
    }));
  };

  const handleDeleteLifecycleStage = (index: number) => {
    const updated = cms.lifecycleStages.stages.filter((_, i) => i !== index);
    setCms((prev) => ({
      ...prev,
      lifecycleStages: { ...prev.lifecycleStages, stages: updated },
    }));
  };

  const handleAddStageHighlight = (stageIndex: number) => {
    const text = (highlightInputs[stageIndex] || '').trim();
    if (!text) return;
    const stage = cms.lifecycleStages.stages[stageIndex];
    const updated = [...(stage.highlights || []), text];
    handleUpdateLifecycleStage(stageIndex, 'highlights', updated);
    setHighlightInputs((prev) => ({ ...prev, [stageIndex]: '' }));
  };

  const handleDeleteStageHighlight = (stageIndex: number, hlIndex: number) => {
    const stage = cms.lifecycleStages.stages[stageIndex];
    const updated = stage.highlights.filter((_, i) => i !== hlIndex);
    handleUpdateLifecycleStage(stageIndex, 'highlights', updated);
  };

  // -------------------------------------------------------------
  // TAB 4: FORMULA MODULATION HANDLERS
  // -------------------------------------------------------------
  const handleAddModulationStep = () => {
    const nextNum = String((cms.formulaModulation.steps?.length || 0) + 1).padStart(2, '0');
    const newStep: ModulationStep = {
      stepNumber: nextNum,
      stepLabel: `STEP ${parseInt(nextNum, 10)}`,
      title: 'New Modulation Phase',
      description: 'Discovery, texture calibration, fragrance balance or feedback loop.',
      icon: 'FlaskConical',
    };
    setCms((prev) => ({
      ...prev,
      formulaModulation: {
        ...prev.formulaModulation,
        steps: [...(prev.formulaModulation.steps || []), newStep],
      },
    }));
  };

  const handleUpdateModulationStep = (index: number, field: keyof ModulationStep, value: string) => {
    const updated = [...(cms.formulaModulation.steps || [])];
    updated[index] = { ...updated[index], [field]: value };
    setCms((prev) => ({
      ...prev,
      formulaModulation: { ...prev.formulaModulation, steps: updated },
    }));
  };

  const handleDeleteModulationStep = (index: number) => {
    const updated = cms.formulaModulation.steps.filter((_, i) => i !== index);
    setCms((prev) => ({
      ...prev,
      formulaModulation: { ...prev.formulaModulation, steps: updated },
    }));
  };

  // -------------------------------------------------------------
  // TAB 5: CONSULTATION CTA TRUST POINTS
  // -------------------------------------------------------------
  const handleAddTrustPoint = () => {
    const text = newTrustPointInput.trim();
    if (!text) return;
    setCms((prev) => ({
      ...prev,
      consultationCta: {
        ...prev.consultationCta,
        trustPoints: [...(prev.consultationCta.trustPoints || []), text],
      },
    }));
    setNewTrustPointInput('');
  };

  const handleDeleteTrustPoint = (index: number) => {
    const updated = cms.consultationCta.trustPoints.filter((_, i) => i !== index);
    setCms((prev) => ({
      ...prev,
      consultationCta: { ...prev.consultationCta, trustPoints: updated },
    }));
  };

  return (
    <div className="flex-1 flex flex-col bg-[#06131f] text-slate-200 font-sans min-h-screen">
      <AdminHeader
        title="Services Management"
        subtitle="Manage the 4 core manufacturing models, end-to-end OEM/ODM lifecycle, formula modulation orbit, and consultation CTAs"
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
              <h2 className="text-sm font-semibold text-white">Services Studio CMS</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Live URL:{' '}
                <a
                  href="http://localhost:3000/services"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:underline font-mono"
                >
                  http://localhost:3000/services
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="http://localhost:3000/services"
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

          {/* Clean Tabs (No Icons, No Sliders, Wrapping Naturally) */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: 'hero', label: '1. Hero Banner' },
              { key: 'precision', label: '2. Manufacturing Models' },
              { key: 'lifecycle', label: '3. Lifecycle Process (OEM/ODM)' },
              { key: 'modulation', label: '4. Formula Modulation' },
              { key: 'cta', label: '5. Consultation CTA' },
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
            <span className="text-xs text-slate-400">Loading Services content from MongoDB Atlas...</span>
          </div>
        ) : (
          <div className="space-y-6">
            {/* ======================================================== */}
            {/* TAB 1: HERO BANNER                                       */}
            {/* ======================================================== */}
            {activeTab === 'hero' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 1: Hero Banner & Trust Indicators</h3>
                  <p className="text-xs text-slate-400">
                    Controls the opening viewport masthead, headlines, CTAs, direct phone line, and the 4 trust benchmarks.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Micro-Header Kicker</label>
                    <input
                      type="text"
                      value={cms.hero.kicker}
                      onChange={(e) =>
                        setCms({ ...cms, hero: { ...cms.hero, kicker: e.target.value } })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Part 1 (Regular)</label>
                    <input
                      type="text"
                      value={cms.hero.headlinePart1}
                      onChange={(e) =>
                        setCms({ ...cms, hero: { ...cms.hero, headlinePart1: e.target.value } })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight Part 1</label>
                    <input
                      type="text"
                      value={cms.hero.headlineHighlight1}
                      onChange={(e) =>
                        setCms({ ...cms, hero: { ...cms.hero, headlineHighlight1: e.target.value } })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight Part 2 (With Painterly Underline)</label>
                    <input
                      type="text"
                      value={cms.hero.headlineHighlight2}
                      onChange={(e) =>
                        setCms({ ...cms, hero: { ...cms.hero, headlineHighlight2: e.target.value } })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Subheadline Narrative</label>
                    <textarea
                      rows={4}
                      value={cms.hero.subheadline}
                      onChange={(e) =>
                        setCms({ ...cms, hero: { ...cms.hero, subheadline: e.target.value } })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl p-3.5 text-slate-100 leading-relaxed focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Primary CTA Button Text</label>
                    <input
                      type="text"
                      value={cms.hero.primaryCtaText}
                      onChange={(e) =>
                        setCms({ ...cms, hero: { ...cms.hero, primaryCtaText: e.target.value } })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Secondary Phone Button Text</label>
                    <input
                      type="text"
                      value={cms.hero.secondaryCtaText}
                      onChange={(e) =>
                        setCms({ ...cms, hero: { ...cms.hero, secondaryCtaText: e.target.value } })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Direct Factory Phone</label>
                    <input
                      type="text"
                      value={cms.hero.phone}
                      onChange={(e) =>
                        setCms({ ...cms, hero: { ...cms.hero, phone: e.target.value } })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                {/* Repeatable Trust Indicators (Add / Edit / Delete) */}
                <div className="border-t border-[#14334d] pt-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                        Hero Trust Indicators ({cms.hero.trustIndicators?.length || 0})
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Icons and 2-line badges displayed directly below the hero CTA buttons.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddTrustIndicator}
                      className="px-3 py-1.5 bg-[#06131f] hover:bg-sky-950/40 text-sky-400 hover:text-sky-300 text-xs font-medium rounded-xl border border-sky-800/60 flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Indicator</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {cms.hero.trustIndicators?.map((item, idx) => (
                      <div
                        key={item.id || idx}
                        className="bg-[#06131f] p-3.5 rounded-xl border border-[#14334d] space-y-2.5 relative group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-slate-400 font-semibold">#{idx + 1}</span>
                          <button
                            type="button"
                            onClick={() => handleDeleteTrustIndicator(idx)}
                            className="text-slate-500 hover:text-red-400 p-1 rounded transition-colors cursor-pointer"
                            title="Delete Indicator"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-semibold text-slate-400 mb-0.5">Line 1 (Bold)</label>
                          <input
                            type="text"
                            value={item.line1}
                            onChange={(e) => handleUpdateTrustIndicator(idx, 'line1', e.target.value)}
                            className="w-full bg-[#0b2136] border border-[#163e5c] rounded-lg px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-sky-500"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-semibold text-slate-400 mb-0.5">Line 2 (Subtext)</label>
                          <input
                            type="text"
                            value={item.line2}
                            onChange={(e) => handleUpdateTrustIndicator(idx, 'line2', e.target.value)}
                            className="w-full bg-[#0b2136] border border-[#163e5c] rounded-lg px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-sky-500"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-semibold text-slate-400 mb-0.5">Icon Key</label>
                          <select
                            value={item.icon}
                            onChange={(e) => handleUpdateTrustIndicator(idx, 'icon', e.target.value)}
                            className="w-full bg-[#0b2136] border border-[#163e5c] rounded-lg px-2 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-sky-500"
                          >
                            <option value="FlaskConical">FlaskConical (MOQ / Lab)</option>
                            <option value="Layers">Layers (Stock Formulas)</option>
                            <option value="ShieldCheck">ShieldCheck (ISO / GMP)</option>
                            <option value="Leaf">Leaf (Clean IP / Purity)</option>
                            <option value="Award">Award</option>
                            <option value="Sparkles">Sparkles</option>
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 2: MANUFACTURING PRECISION MODELS                    */}
            {/* ======================================================== */}
            {activeTab === 'precision' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 2: Manufacturing Capabilities & Precision Models</h3>
                  <p className="text-xs text-slate-400">
                    Controls the 4 core models (Custom Formulation, Private Label, Contract Manufacturing, Packaging Solutions), their features, and deliverables.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Eyebrow Kicker</label>
                    <input
                      type="text"
                      value={cms.precisionJourney.eyebrow}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          precisionJourney: { ...cms.precisionJourney, eyebrow: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Title (Prefix)</label>
                    <input
                      type="text"
                      value={cms.precisionJourney.title}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          precisionJourney: { ...cms.precisionJourney, title: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Title Highlight (Teal Serif)</label>
                    <input
                      type="text"
                      value={cms.precisionJourney.highlight}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          precisionJourney: { ...cms.precisionJourney, highlight: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-slate-300 font-medium mb-1">Section Narrative Description</label>
                    <textarea
                      rows={3}
                      value={cms.precisionJourney.description}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          precisionJourney: { ...cms.precisionJourney, description: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl p-3.5 text-slate-100 leading-relaxed focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                {/* Repeatable Services Cards (Add / Edit / Delete) */}
                <div className="border-t border-[#14334d] pt-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                        Active Precision Models ({cms.precisionJourney.services?.length || 0})
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Full editorial showcase cards rendered in the alternating journey stream.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddService}
                      className="px-3.5 py-1.5 bg-[#06131f] hover:bg-sky-950/40 text-sky-400 hover:text-sky-300 text-xs font-medium rounded-xl border border-sky-800/60 flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add New Model</span>
                    </button>
                  </div>

                  <div className="space-y-6">
                    {cms.precisionJourney.services?.map((service, sIdx) => (
                      <div
                        key={service.id || sIdx}
                        className="bg-[#06131f] p-5 lg:p-6 rounded-2xl border border-[#14334d] space-y-4 shadow-md"
                      >
                        <div className="flex items-center justify-between border-b border-[#14334d] pb-3">
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-lg bg-[#0b2136] border border-[#163e5c] flex items-center justify-center text-xs font-mono font-bold text-sky-400">
                              0{sIdx + 1}
                            </span>
                            <span className="text-sm font-semibold text-white">{service.title || 'Untitled Model'}</span>
                            <span className="text-[11px] font-mono text-slate-400 bg-[#0b2136] px-2 py-0.5 rounded border border-[#163e5c]">
                              /{service.slug}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleDeleteService(sIdx)}
                            className="text-slate-500 hover:text-red-400 p-1.5 rounded-lg border border-transparent hover:border-red-900/40 transition-colors cursor-pointer"
                            title="Delete this service model"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                          <div>
                            <label className="block text-slate-400 font-medium mb-1">Service Title</label>
                            <input
                              type="text"
                              value={service.title}
                              onChange={(e) => handleUpdateService(sIdx, 'title', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-400 font-medium mb-1">URL Slug</label>
                            <input
                              type="text"
                              value={service.slug}
                              onChange={(e) => handleUpdateService(sIdx, 'slug', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 font-mono focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-400 font-medium mb-1">Tagline</label>
                            <input
                              type="text"
                              value={service.tagline}
                              onChange={(e) => handleUpdateService(sIdx, 'tagline', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-400 font-medium mb-1">Production Timeline</label>
                            <input
                              type="text"
                              value={service.timeline}
                              onChange={(e) => handleUpdateService(sIdx, 'timeline', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-400 font-medium mb-1">Minimum Order (MOQ)</label>
                            <input
                              type="text"
                              value={service.moq}
                              onChange={(e) => handleUpdateService(sIdx, 'moq', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div className="md:col-span-3">
                            <label className="block text-slate-400 font-medium mb-1">Short Card Summary</label>
                            <textarea
                              rows={2}
                              value={service.shortDesc}
                              onChange={(e) => handleUpdateService(sIdx, 'shortDesc', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl p-3 text-slate-100 leading-relaxed focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div className="md:col-span-3">
                            <label className="block text-slate-400 font-medium mb-1">Full Technical Description</label>
                            <textarea
                              rows={4}
                              value={service.fullDesc}
                              onChange={(e) => handleUpdateService(sIdx, 'fullDesc', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl p-3 text-slate-100 leading-relaxed focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          {/* Image Upload Input */}
                          <div className="md:col-span-3">
                            <ImageUploadInput
                              label="Showcase Photography / Illustration"
                              value={service.image}
                              onChange={(url) => handleUpdateService(sIdx, 'image', url)}
                            />
                          </div>

                          {/* Features Tag List */}
                          <div className="md:col-span-3 bg-[#0b2136] p-4 rounded-xl border border-[#163e5c] space-y-2.5">
                            <label className="block text-slate-300 font-semibold text-[11px] uppercase tracking-wider">
                              Key Technical Features ({service.features?.length || 0})
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {service.features?.map((feat, fIdx) => (
                                <span
                                  key={fIdx}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#06131f] border border-[#14334d] text-sky-200 text-xs"
                                >
                                  <span>{feat}</span>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteServiceFeature(sIdx, fIdx)}
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
                                placeholder="Add new technical feature..."
                                value={featureInputs[sIdx] || ''}
                                onChange={(e) =>
                                  setFeatureInputs({ ...featureInputs, [sIdx]: e.target.value })
                                }
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleAddServiceFeature(sIdx);
                                  }
                                }}
                                className="flex-1 bg-[#06131f] border border-[#14334d] rounded-xl px-3 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-sky-500"
                              />
                              <button
                                type="button"
                                onClick={() => handleAddServiceFeature(sIdx)}
                                className="px-3 py-1.5 bg-[#164666] hover:bg-[#1b557d] text-white rounded-xl text-xs font-semibold cursor-pointer shrink-0"
                              >
                                Add Feature
                              </button>
                            </div>
                          </div>

                          {/* Deliverables Tag List */}
                          <div className="md:col-span-3 bg-[#0b2136] p-4 rounded-xl border border-[#163e5c] space-y-2.5">
                            <label className="block text-slate-300 font-semibold text-[11px] uppercase tracking-wider">
                              Stage Deliverables ({service.deliverables?.length || 0})
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {service.deliverables?.map((del, dIdx) => (
                                <span
                                  key={dIdx}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#06131f] border border-[#14334d] text-teal-200 text-xs"
                                >
                                  <span>{del}</span>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteServiceDeliverable(sIdx, dIdx)}
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
                                placeholder="Add milestone deliverable..."
                                value={deliverableInputs[sIdx] || ''}
                                onChange={(e) =>
                                  setDeliverableInputs({ ...deliverableInputs, [sIdx]: e.target.value })
                                }
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleAddServiceDeliverable(sIdx);
                                  }
                                }}
                                className="flex-1 bg-[#06131f] border border-[#14334d] rounded-xl px-3 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-sky-500"
                              />
                              <button
                                type="button"
                                onClick={() => handleAddServiceDeliverable(sIdx)}
                                className="px-3 py-1.5 bg-[#164666] hover:bg-[#1b557d] text-white rounded-xl text-xs font-semibold cursor-pointer shrink-0"
                              >
                                Add Deliverable
                              </button>
                            </div>
                          </div>

                          {/* Suitable For Tag List */}
                          <div className="md:col-span-3 bg-[#0b2136] p-4 rounded-xl border border-[#163e5c] space-y-2.5">
                            <label className="block text-slate-300 font-semibold text-[11px] uppercase tracking-wider">
                              Suitable For Target Clients ({service.suitableFor?.length || 0})
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {service.suitableFor?.map((suit, stIdx) => (
                                <span
                                  key={stIdx}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#06131f] border border-[#14334d] text-amber-200 text-xs"
                                >
                                  <span>{suit}</span>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteServiceSuitable(sIdx, stIdx)}
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
                                placeholder="Add client segment (e.g. D2C brands, Salons)..."
                                value={suitableInputs[sIdx] || ''}
                                onChange={(e) =>
                                  setSuitableInputs({ ...suitableInputs, [sIdx]: e.target.value })
                                }
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleAddServiceSuitable(sIdx);
                                  }
                                }}
                                className="flex-1 bg-[#06131f] border border-[#14334d] rounded-xl px-3 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-sky-500"
                              />
                              <button
                                type="button"
                                onClick={() => handleAddServiceSuitable(sIdx)}
                                className="px-3 py-1.5 bg-[#164666] hover:bg-[#1b557d] text-white rounded-xl text-xs font-semibold cursor-pointer shrink-0"
                              >
                                Add Target
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
            {/* TAB 3: LIFECYCLE PROCESS (OEM / ODM SLIDER)               */}
            {/* ======================================================== */}
            {activeTab === 'lifecycle' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 3: End-To-End Manufacturing Lifecycle (OEM/ODM Slider)</h3>
                  <p className="text-xs text-slate-400">
                    Controls the animated 6-stage lifecycle carousel, stage photography, and milestone chips.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Eyebrow Kicker</label>
                    <input
                      type="text"
                      value={cms.lifecycleStages.eyebrow}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          lifecycleStages: { ...cms.lifecycleStages, eyebrow: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Section Title</label>
                    <input
                      type="text"
                      value={cms.lifecycleStages.title}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          lifecycleStages: { ...cms.lifecycleStages, title: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Title Highlight (Teal)</label>
                    <input
                      type="text"
                      value={cms.lifecycleStages.highlight}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          lifecycleStages: { ...cms.lifecycleStages, highlight: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-slate-300 font-medium mb-1">Section Description</label>
                    <textarea
                      rows={3}
                      value={cms.lifecycleStages.description}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          lifecycleStages: { ...cms.lifecycleStages, description: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl p-3.5 text-slate-100 leading-relaxed focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                {/* Repeatable Lifecycle Stages (Add / Edit / Delete) */}
                <div className="border-t border-[#14334d] pt-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                        Carousel Stages ({cms.lifecycleStages.stages?.length || 0})
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Autoplay carousel slides with image, stage narrative, and deliverable badges.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddLifecycleStage}
                      className="px-3.5 py-1.5 bg-[#06131f] hover:bg-sky-950/40 text-sky-400 hover:text-sky-300 text-xs font-medium rounded-xl border border-sky-800/60 flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Stage</span>
                    </button>
                  </div>

                  <div className="space-y-5">
                    {cms.lifecycleStages.stages?.map((stage, stgIdx) => (
                      <div
                        key={stgIdx}
                        className="bg-[#06131f] p-5 rounded-2xl border border-[#14334d] space-y-4 shadow-md"
                      >
                        <div className="flex items-center justify-between border-b border-[#14334d] pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-sky-400 bg-[#0b2136] px-2 py-0.5 rounded border border-[#163e5c]">
                              STEP {stage.step}
                            </span>
                            <span className="text-sm font-semibold text-white">{stage.title}</span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleDeleteLifecycleStage(stgIdx)}
                            className="text-slate-500 hover:text-red-400 p-1 rounded transition-colors cursor-pointer"
                            title="Delete this stage"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                          <div>
                            <label className="block text-slate-400 font-medium mb-1">Step Number</label>
                            <input
                              type="text"
                              value={stage.step}
                              onChange={(e) => handleUpdateLifecycleStage(stgIdx, 'step', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 font-mono focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label className="block text-slate-400 font-medium mb-1">Stage Title</label>
                            <input
                              type="text"
                              value={stage.title}
                              onChange={(e) => handleUpdateLifecycleStage(stgIdx, 'title', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div className="md:col-span-3">
                            <label className="block text-slate-400 font-medium mb-1">Stage Description</label>
                            <textarea
                              rows={3}
                              value={stage.description}
                              onChange={(e) => handleUpdateLifecycleStage(stgIdx, 'description', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl p-3 text-slate-100 leading-relaxed focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div className="md:col-span-3">
                            <ImageUploadInput
                              label="Stage Laboratory / Production Image"
                              value={stage.image}
                              onChange={(url) => handleUpdateLifecycleStage(stgIdx, 'image', url)}
                            />
                          </div>

                          {/* Highlights List */}
                          <div className="md:col-span-3 bg-[#0b2136] p-3.5 rounded-xl border border-[#163e5c] space-y-2">
                            <label className="block text-slate-300 font-semibold text-[11px] uppercase tracking-wider">
                              Stage Milestones &amp; Deliverables ({stage.highlights?.length || 0})
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {stage.highlights?.map((hl, hIdx) => (
                                <span
                                  key={hIdx}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#06131f] border border-[#14334d] text-sky-200 text-xs"
                                >
                                  <span>{hl}</span>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteStageHighlight(stgIdx, hIdx)}
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
                                placeholder="Add deliverable milestone (e.g. Target Skin Types, Stability)..."
                                value={highlightInputs[stgIdx] || ''}
                                onChange={(e) =>
                                  setHighlightInputs({ ...highlightInputs, [stgIdx]: e.target.value })
                                }
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleAddStageHighlight(stgIdx);
                                  }
                                }}
                                className="flex-1 bg-[#06131f] border border-[#14334d] rounded-xl px-3 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-sky-500"
                              />
                              <button
                                type="button"
                                onClick={() => handleAddStageHighlight(stgIdx)}
                                className="px-3 py-1.5 bg-[#164666] hover:bg-[#1b557d] text-white rounded-xl text-xs font-semibold cursor-pointer shrink-0"
                              >
                                Add Milestone
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
            {/* TAB 4: FORMULA MODULATION                                */}
            {/* ======================================================== */}
            {activeTab === 'modulation' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 4: Formula Modulation (Radial Orbital Cycle &amp; Mobile Flow)</h3>
                  <p className="text-xs text-slate-400">
                    Controls the mathematical orbital circle on desktop, the 6 sequential nodes, and the center 3D core disc.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Eyebrow Kicker</label>
                    <input
                      type="text"
                      value={cms.formulaModulation.eyebrow}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          formulaModulation: { ...cms.formulaModulation, eyebrow: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Title (Prefix)</label>
                    <input
                      type="text"
                      value={cms.formulaModulation.title}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          formulaModulation: { ...cms.formulaModulation, title: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Title Highlight (Teal)</label>
                    <input
                      type="text"
                      value={cms.formulaModulation.highlight}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          formulaModulation: { ...cms.formulaModulation, highlight: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-slate-300 font-medium mb-1">Section Narrative Description</label>
                    <textarea
                      rows={3}
                      value={cms.formulaModulation.description}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          formulaModulation: { ...cms.formulaModulation, description: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl p-3.5 text-slate-100 leading-relaxed focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                {/* Center 3D Disc Settings */}
                <div className="border-t border-[#14334d] pt-5 space-y-4">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                    Central Core Disc (Orbit Center)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-400 font-medium mb-1">Kicker</label>
                      <input
                        type="text"
                        value={cms.formulaModulation.centerDisc?.kicker || ''}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            formulaModulation: {
                              ...cms.formulaModulation,
                              centerDisc: {
                                ...cms.formulaModulation.centerDisc,
                                kicker: e.target.value,
                              },
                            },
                          })
                        }
                        className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">Disc Title</label>
                      <input
                        type="text"
                        value={cms.formulaModulation.centerDisc?.title || ''}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            formulaModulation: {
                              ...cms.formulaModulation,
                              centerDisc: {
                                ...cms.formulaModulation.centerDisc,
                                title: e.target.value,
                              },
                            },
                          })
                        }
                        className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-slate-400 font-medium mb-1">Disc Subtext</label>
                      <textarea
                        rows={2}
                        value={cms.formulaModulation.centerDisc?.description || ''}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            formulaModulation: {
                              ...cms.formulaModulation,
                              centerDisc: {
                                ...cms.formulaModulation.centerDisc,
                                description: e.target.value,
                              },
                            },
                          })
                        }
                        className="w-full bg-[#06131f] border border-[#14334d] rounded-xl p-3 text-slate-100 leading-relaxed focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Repeatable Orbit Steps (Add / Edit / Delete) */}
                <div className="border-t border-[#14334d] pt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                        Modulation Steps ({cms.formulaModulation.steps?.length || 0})
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Nodes distributed clockwise along the radial orbit track (Steps 01-06).
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddModulationStep}
                      className="px-3.5 py-1.5 bg-[#06131f] hover:bg-sky-950/40 text-sky-400 hover:text-sky-300 text-xs font-medium rounded-xl border border-sky-800/60 flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Step</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cms.formulaModulation.steps?.map((step, stIdx) => (
                      <div
                        key={stIdx}
                        className="bg-[#06131f] p-4 rounded-xl border border-[#14334d] space-y-3 shadow-md"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-sky-400 bg-[#0b2136] px-2 py-0.5 rounded border border-[#163e5c]">
                            STEP {step.stepNumber}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleDeleteModulationStep(stIdx)}
                            className="text-slate-500 hover:text-red-400 p-1 rounded transition-colors cursor-pointer"
                            title="Delete step"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div>
                            <label className="block text-slate-400 font-medium mb-1">Step Number</label>
                            <input
                              type="text"
                              value={step.stepNumber}
                              onChange={(e) => handleUpdateModulationStep(stIdx, 'stepNumber', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 font-mono focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-400 font-medium mb-1">Icon Key</label>
                            <select
                              value={step.icon}
                              onChange={(e) => handleUpdateModulationStep(stIdx, 'icon', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-sky-500"
                            >
                              <option value="MessagesSquare">MessagesSquare (Demand)</option>
                              <option value="FileEdit">FileEdit (Proofing Form)</option>
                              <option value="FlaskConical">FlaskConical (Proofing Sample)</option>
                              <option value="Star">Star (Confirmation)</option>
                              <option value="SlidersHorizontal">SlidersHorizontal (Adjustment)</option>
                              <option value="ShoppingCart">ShoppingCart (Order)</option>
                            </select>
                          </div>

                          <div className="col-span-2">
                            <label className="block text-slate-400 font-medium mb-1">Step Title</label>
                            <input
                              type="text"
                              value={step.title}
                              onChange={(e) => handleUpdateModulationStep(stIdx, 'title', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:border-sky-500"
                            />
                          </div>

                          <div className="col-span-2">
                            <label className="block text-slate-400 font-medium mb-1">Step Description</label>
                            <textarea
                              rows={3}
                              value={step.description}
                              onChange={(e) => handleUpdateModulationStep(stIdx, 'description', e.target.value)}
                              className="w-full bg-[#0b2136] border border-[#163e5c] rounded-xl p-3 text-slate-100 leading-relaxed focus:outline-none focus:border-sky-500"
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
            {/* TAB 5: CONSULTATION CTA BANNER                           */}
            {/* ======================================================== */}
            {activeTab === 'cta' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 5: Direct Factory Consultation CTA Banner</h3>
                  <p className="text-xs text-slate-400">
                    Controls the bottom high-conversion direct plant visit and quote banner.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Banner Eyebrow</label>
                    <input
                      type="text"
                      value={cms.consultationCta.eyebrow}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          consultationCta: { ...cms.consultationCta, eyebrow: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Heading Title</label>
                    <input
                      type="text"
                      value={cms.consultationCta.heading}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          consultationCta: { ...cms.consultationCta, heading: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight Text</label>
                    <input
                      type="text"
                      value={cms.consultationCta.highlight}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          consultationCta: { ...cms.consultationCta, highlight: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Description Narrative</label>
                    <textarea
                      rows={4}
                      value={cms.consultationCta.description}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          consultationCta: { ...cms.consultationCta, description: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl p-3.5 text-slate-100 leading-relaxed focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Primary Quote Button Text</label>
                    <input
                      type="text"
                      value={cms.consultationCta.primaryCtaText}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          consultationCta: { ...cms.consultationCta, primaryCtaText: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Secondary Tour Button Text</label>
                    <input
                      type="text"
                      value={cms.consultationCta.secondaryCtaText}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          consultationCta: { ...cms.consultationCta, secondaryCtaText: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Plant Direct Phone / WhatsApp Number</label>
                    <input
                      type="text"
                      value={cms.consultationCta.phone}
                      onChange={(e) =>
                        setCms({
                          ...cms,
                          consultationCta: { ...cms.consultationCta, phone: e.target.value },
                        })
                      }
                      className="w-full bg-[#06131f] border border-[#14334d] rounded-xl px-3.5 py-2.5 text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                {/* Trust Points Badges Strip */}
                <div className="border-t border-[#14334d] pt-5 space-y-3">
                  <label className="block text-slate-300 font-semibold text-[11px] uppercase tracking-wider">
                    Trust Badges Strip ({cms.consultationCta.trustPoints?.length || 0})
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {cms.consultationCta.trustPoints?.map((point, pIdx) => (
                      <span
                        key={pIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#06131f] border border-[#14334d] text-slate-200 text-xs"
                      >
                        <span>{point}</span>
                        <button
                          type="button"
                          onClick={() => handleDeleteTrustPoint(pIdx)}
                          className="text-slate-400 hover:text-red-400 cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 pt-1 max-w-md">
                    <input
                      type="text"
                      placeholder="Add trust badge (e.g. Immediate NDA Protection)..."
                      value={newTrustPointInput}
                      onChange={(e) => setNewTrustPointInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddTrustPoint();
                        }
                      }}
                      className="flex-1 bg-[#06131f] border border-[#14334d] rounded-xl px-3 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-sky-500"
                    />
                    <button
                      type="button"
                      onClick={handleAddTrustPoint}
                      className="px-3.5 py-1.5 bg-[#164666] hover:bg-[#1b557d] text-white rounded-xl text-xs font-semibold cursor-pointer shrink-0"
                    >
                      Add Badge
                    </button>
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
