'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminHeader from '@/components/AdminHeader';
import ImageUploadInput from '@/components/ImageUploadInput';
import {
  Sparkles,
  Save,
  Plus,
  Trash2,
  Eye,
  Check,
  AlertCircle,
  Layers,
  HelpCircle,
  Award,
  PhoneCall,
  Clock,
  Boxes,
  ShieldCheck,
  Box,
  FlaskConical,
  Microscope,
} from 'lucide-react';

type TabKey =
  | 'hero'
  | 'spatialStage'
  | 'trust'
  | 'certifications'
  | 'services'
  | 'process'
  | 'categories'
  | 'faqs'
  | 'cta';

const initialCmsData = {
  hero: {
    kicker: 'Certified Cosmetics Manufacturer • Ahmedabad, India',
    headline: 'Private Label Skincare & Haircare Manufacturer in Ahmedabad',
    subheadline:
      'Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.',
    primaryCtaText: 'Request Custom Formulation Quote',
    secondaryCtaText: 'Explore Our Capabilities',
    trustHighlights: [
      { id: '1', title: 'Custom &', subtitle: 'White-Label', icon: 'FlaskConical', link: '/services/custom-formulation' },
      { id: '2', title: 'Skincare &', subtitle: 'Haircare Lines', icon: 'Sparkles', link: '/products' },
      { id: '3', title: 'Low 500 MOQ', subtitle: 'For Startups & Salons', icon: 'Box', link: '/quote-estimator' },
      { id: '4', title: 'ISO 22716 &', subtitle: 'WHO-GMP Certified', icon: 'ShieldCheck', link: '/certifications' },
    ],
  },
  spatialStage: {
    eyebrow: 'Core Specializations • Third-Party Manufacturing',
    title: 'Our 3 Hero Product Categories.',
    desc: 'Proprietary formulation, in-house cleanroom R&D compounding, and certified contract bottling — engineered for instant market performance and ready to bottle for your brand.',
    trustNodes: [
      {
        id: '1',
        title: 'Formulation Expertise',
        desc: 'Custom active compounding • 500+ validated formulas',
        icon: 'FlaskConical',
      },
      {
        id: '2',
        title: 'In-House R&D Cleanroom',
        desc: 'WHO-GMP pilot lab • Precision stability testing',
        icon: 'Microscope',
      },
      {
        id: '3',
        title: 'Third-Party Manufacturing',
        desc: 'Turnkey contract bottling • Starting at 500 units MOQ',
        icon: 'Layers',
      },
    ],
    heroProducts: [
      {
        id: '1',
        name: 'Clinical Face Serum',
        category: 'Skincare',
        tag: 'Custom Formulations',
        active: true,
      },
      {
        id: '2',
        name: 'Botanical Hair Shampoo',
        category: 'Haircare',
        tag: 'Manufacturing Partner',
        active: true,
      },
      {
        id: '3',
        name: 'Hydra Barrier Moisturizer',
        category: 'Personal Care',
        tag: 'Private Label Cosmetics',
        active: true,
      },
    ],
  },
  trustPillars: {
    header: {
      eyebrow: 'The Mani Advantage',
      title: 'Reason to Trust Mani Lifestyle.',
      desc: 'Discover why brands choose Mani Lifestyle for their success.',
    },
    items: [
      {
        id: '01',
        num: '01',
        title: 'Low Minimum Order Quantity',
        desc: 'Start your brand with confidence — we support small batches to make it easy and affordable for startups.',
        link: '/services/private-label',
        icon: 'PackageCheck',
      },
      {
        id: '02',
        num: '02',
        title: 'Transparent Pricing',
        desc: 'Clear, upfront pricing with no hidden costs — so you can plan and budget with full confidence.',
        link: '/quote-estimator',
        icon: 'CircleDollarSign',
      },
      {
        id: '03',
        num: '03',
        title: 'Wide Product Range',
        desc: 'From skincare to haircare, we offer a vast range of personal care and beauty products to meet diverse market demands.',
        link: '/products',
        icon: 'Sparkles',
      },
      {
        id: '04',
        num: '04',
        title: 'In-house R&D and Quality Team',
        desc: 'Our expert team works in-house to develop new formulas and maintain strict quality control at every stage.',
        link: '/innovation',
        icon: 'Microscope',
      },
      {
        id: '05',
        num: '05',
        title: 'GMP Certified Facility',
        desc: 'Our manufacturing units meet strict GMP standards, ensuring safe, clean, and quality production every step of the way.',
        link: '/certifications',
        icon: 'ShieldCheck',
      },
      {
        id: '06',
        num: '06',
        title: 'Dedicated Customer Support',
        desc: 'Our team is here to help — from your first inquiry to final delivery, we offer reliable, responsive support.',
        link: '/contact',
        icon: 'Headphones',
      },
    ],
  },
  certificationsSection: {
    header: {
      eyebrow: 'Accredited Quality Standards',
      title: 'Certified for Quality and Reliability.',
      desc: 'Our dedication to high standards is recognized by industry-leading bodies, ensuring every product meets rigorous quality and safety benchmarks.',
    },
    items: [
      {
        id: 'fda-approved',
        name: 'FDA Approved Manufacturing',
        authority: 'Food & Drug Administration',
        scope: 'Compliance with FDA cosmetics manufacturing regulations.',
        importance: 'Essential for safety & legal compliance',
        badgeCode: 'FDA COMPLIANT',
        image: 'https://res.cloudinary.com/oeqdmjr7/image/upload/v1795071881/mani-lifestyle/certifications/kfh1obiypibt3sllktfv.png',
        verified: true,
      },
      {
        id: 'who-gmp',
        name: 'WHO-GMP Compliant',
        authority: 'World Health Organization Standards',
        scope: 'Good Manufacturing Practices for cleanroom hygiene and compounding.',
        importance: 'International quality benchmark',
        badgeCode: 'GMP CERTIFIED',
        image: 'https://res.cloudinary.com/oeqdmjr7/image/upload/v1795071881/mani-lifestyle/certifications/zslgubzxdzyvjcyuct1u.png',
        verified: true,
      },
      {
        id: 'iso-22716',
        name: 'ISO 22716:2007 (Cosmetics GMP)',
        authority: 'International Organization for Standardization',
        scope: 'Global guidelines for production, control, storage, and shipment.',
        importance: 'Global export prerequisite',
        badgeCode: 'ISO 22716',
        image: 'https://res.cloudinary.com/oeqdmjr7/image/upload/v1795071882/mani-lifestyle/certifications/guacfoimwqfqylnpocur.png',
        verified: true,
      },
      {
        id: 'cruelty-free',
        name: '100% Cruelty-Free & Vegan Options',
        authority: 'Ethical Manufacturing Standards',
        scope: 'Zero animal testing across formulation and raw ingredient testing.',
        importance: 'Ethical consumer requirement',
        badgeCode: 'CRUELTY FREE',
        image: 'https://res.cloudinary.com/oeqdmjr7/image/upload/v1795071882/mani-lifestyle/certifications/pjoacrnbn37nwbpp03j1.jpg',
        verified: true,
      },
    ],
  },
  servicesSection: {
    header: {
      eyebrow: 'WHAT WE DO',
      title: 'Our Services',
      desc: 'Formulating & manufacturing high-performance cosmetic solutions in our Ahmedabad cleanroom facility — specifically developed for Indian skin tones, hair textures, and tropical climate conditions.',
    },
    items: [
      {
        id: '1',
        num: '01',
        title: 'Private Label',
        desc: 'Launch your own brand with our proven, market-ready formulations.',
        image: '/images/services-v3/v3_img1.jpg',
        link: '/services/private-label',
      },
      {
        id: '2',
        num: '02',
        title: 'Contract Manufacturing',
        desc: 'End-to-end manufacturing with advanced technology and strict quality.',
        image: '/images/services-v3/v3_img2.jpg',
        link: '/services/contract-manufacturing',
      },
      {
        id: '3',
        num: '03',
        title: 'Custom Formulations',
        desc: 'Tailor-made formulations to match your brand vision and market needs.',
        image: '/images/services-v3/v3_img3.jpg',
        link: '/services/custom-formulation',
      },
      {
        id: '4',
        num: '04',
        title: 'End-to-End Brand Launch',
        desc: 'From formulation to packaging, we handle everything for your brand.',
        image: '/images/services-v3/v3_img4.jpg',
        link: '/services',
      },
    ],
  },
  processSection: {
    header: {
      eyebrow: 'Spec-To-Shelf Journey • 7 Sequential Steps',
      title: 'From Idea to Reality.',
      desc: 'From vision to finished formula — we create custom skincare products that embody your brand identity. Your ideas, tailored to perfection and transformed into market-ready products.',
    },
    items: [
      { step: 1, label: 'STEP 1', title: 'Requirement Discussion' },
      { step: 2, label: 'STEP 2', title: 'Formula Modulation' },
      { step: 3, label: 'STEP 3', title: 'Packaging Design' },
      { step: 4, label: 'STEP 4', title: 'Product Confirmation' },
      { step: 5, label: 'STEP 5', title: 'Manufacturing' },
      { step: 6, label: 'STEP 6', title: 'Packaging Inspection' },
      { step: 7, label: 'STEP 7', title: 'Verify & Delivery' },
    ],
  },
  categoriesSection: {
    header: {
      eyebrow: 'Core Formulation Verticals • Spec-To-Shelf',
      title: 'Product Categories in Your Brand.',
      desc: 'We are proud to collaborate with industry-leading partners to create an extensive range of trusted products — formulated and packaged to your brand exact specifications.',
    },
    items: [
      {
        num: '01',
        name: 'Face Washes',
        tagline: 'pH 5.5 Foaming & Clarifying Washes',
        description: 'Sulfate-free foaming cleansers, tea tree acne control washes, arabica coffee de-tan gels, and gentle AHA/BHA exfoliators.',
        tags: ['Salicylic Acid', 'Tea Tree Oil', 'AHA / BHA', 'Centella Asiatica'],
        moq: 'Flexible Low MOQ',
        slug: 'cleansers-toners',
        image: '/images/categories/cat-face-wash.jpg',
      },
      {
        num: '02',
        name: 'Serums',
        tagline: 'Clinical Actives & Dermal Elixirs',
        description: 'High-concentration stabilized actives designed for deep transdermal delivery, hyperpigmentation, and cellular repair.',
        tags: ['20% Vitamin C', '10% Niacinamide', 'Retinol 0.5%', 'Hyaluronic Acid'],
        moq: 'Flexible Low MOQ',
        slug: 'skincare-serums',
        image: '/images/categories/cat-serum.jpg',
      },
      {
        num: '03',
        name: 'Hair Oil',
        tagline: 'Root-Strengthening & Scalp Therapies',
        description: 'Cold-pressed pure botanical hair oils targeting shedding, thinning, and split ends with nourishing herbal infusions.',
        tags: ['Pure Rosemary', 'Redensyl', 'Biotin', 'Moroccan Argan'],
        moq: 'Flexible Low MOQ',
        slug: 'haircare-treatments',
        image: '/images/categories/cat-hair-oil.jpg',
      },
      {
        num: '04',
        name: 'Skin Cream',
        tagline: 'Barrier Repair & Deep Hydration',
        description: 'Velvety ceramide barrier creams, ultra-sheer gel hydrators, brightening day soufflés, and restorative night balms.',
        tags: ['Ceramides 1,3,6', 'Cica Extract', 'Matrixyl Peptides', 'Squalane'],
        moq: 'Flexible Low MOQ',
        slug: 'suncare-moisturizers',
        image: '/images/categories/cat-skin-cream.jpg',
      },
      {
        num: '05',
        name: 'Essential Oil',
        tagline: '100% Pure Therapeutic Extracts',
        description: 'Steam-distilled and cold-pressed pure therapeutic grade essential oils for cosmetic, scalp, and aromatherapeutic use.',
        tags: ['French Lavender', 'Tea Tree Oil', 'Eucalyptus', 'Pure Rosehip'],
        moq: 'Flexible Low MOQ',
        slug: 'body-bath-wellness',
        image: '/images/categories/cat-essential-oil.jpg',
      },
      {
        num: '06',
        name: 'Face Sheet Mask',
        tagline: 'Bio-Cellulose & Instant Glow Infusions',
        description: 'Pre-soaked bio-cellulose and microfiber sheet masks drenched in concentrated multi-molecular hydration serums.',
        tags: ['Triple HA', 'Glutathione', 'Marine Collagen', 'Niacinamide'],
        moq: 'Flexible Low MOQ',
        slug: 'masks-lip-eye',
        image: '/images/categories/cat-sheet-mask.jpg',
      },
    ],
  },
  faqsSection: {
    header: {
      eyebrow: 'Technical & Commercial Guidance',
      title: 'Frequently Asked Questions.',
      desc: 'Clear, transparent answers about our cosmetic formulation capabilities, cleanroom compounding, low startup MOQs, and regulatory compliance.',
    },
    items: [
      {
        question: 'What is your Minimum Order Quantity (MOQ) for custom formulations?',
        answer:
          'Our standard pilot batch starts at just 500 units for standard stock formulas, and 1,000 units for fully bespoke formulations. This low threshold enables beauty founders and salons to launch with minimal capital risk.',
      },
      {
        question: 'Can you customize the formulation active ingredients and fragrance profile?',
        answer:
          'Yes. Our in-house R&D team can formulate with custom active concentrations (such as 10% Niacinamide, 20% Vitamin C, or Redensyl) and tailor sensory attributes like texture, absorption speed, and fragrance profiles.',
      },
      {
        question: 'Do you assist with FDA licensing and regulatory documentation in India?',
        answer:
          'Yes. We provide complete regulatory documentation including Certificate of Analysis (COA), Material Safety Data Sheets (MSDS), stability reports, and facilitate FDA manufacturing license endorsements.',
      },
      {
        question: 'What is the standard turnaround time from formula approval to dispatch?',
        answer:
          'Standard batch production takes 14 to 21 business days following formula sign-off and packaging material receipt at our Changodar, Ahmedabad facility.',
      },
      {
        question: 'Do you offer custom packaging procurement or can we provide our own?',
        answer:
          'Both options are supported. You may select from our pre-tested inventory of airless pump bottles, amber droppers, and tubes, or ship your own custom-printed packaging directly to our facility for compounding and filling.',
      },
    ],
  },
  ctaBanner: {
    eyebrow: 'Ready To Formulate Your Next Bestselling Line?',
    heading: 'Schedule a Direct Consultation With Our Senior Team.',
    desc: 'Visit our state-of-the-art cleanroom manufacturing campus in Ahmedabad or request customized bench formulation prototypes dispatched directly to your desk.',
    buttonText: 'Request Custom Quote & Formulation Samples',
    phone: '+91 97246 81096',
    whatsappText: 'Hello Mani Lifestyle, I am interested in visiting your Ahmedabad cosmetic plant.',
  },
};

export default function HomePageCMS() {
  const [activeTab, setActiveTab] = useState<TabKey>('hero');
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Pre-populated with full website content so inputs are NEVER blank!
  const [cms, setCms] = useState<any>(initialCmsData);

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const res = await fetch('https://mani-life-1n34.vercel.app/api/home');
      if (res.ok) {
        const data = await res.json();
        if (data) {
          setCms({
            hero: {
              kicker: data.hero?.kicker || initialCmsData.hero.kicker,
              headline: data.hero?.headline || initialCmsData.hero.headline,
              subheadline: data.hero?.subheadline || initialCmsData.hero.subheadline,
              primaryCtaText: data.hero?.primaryCtaText || initialCmsData.hero.primaryCtaText,
              secondaryCtaText: data.hero?.secondaryCtaText || initialCmsData.hero.secondaryCtaText,
              trustHighlights: data.hero?.trustHighlights?.length
                ? data.hero.trustHighlights
                : initialCmsData.hero.trustHighlights,
            },
            spatialStage: {
              eyebrow: data.spatialStage?.eyebrow || initialCmsData.spatialStage.eyebrow,
              title: data.spatialStage?.title || initialCmsData.spatialStage.title,
              desc: data.spatialStage?.desc || initialCmsData.spatialStage.desc,
              trustNodes: data.spatialStage?.trustNodes?.length
                ? data.spatialStage.trustNodes
                : initialCmsData.spatialStage.trustNodes,
              heroProducts: data.spatialStage?.heroProducts?.length
                ? data.spatialStage.heroProducts
                : initialCmsData.spatialStage.heroProducts,
            },
            trustPillars: {
              header: {
                eyebrow: data.trustPillars?.header?.eyebrow || initialCmsData.trustPillars.header.eyebrow,
                title: data.trustPillars?.header?.title || initialCmsData.trustPillars.header.title,
                desc: data.trustPillars?.header?.desc || initialCmsData.trustPillars.header.desc,
              },
              items: data.trustPillars?.items?.length
                ? data.trustPillars.items
                : initialCmsData.trustPillars.items,
            },
            certificationsSection: {
              header: {
                eyebrow: data.certificationsSection?.header?.eyebrow || initialCmsData.certificationsSection.header.eyebrow,
                title: data.certificationsSection?.header?.title || initialCmsData.certificationsSection.header.title,
                desc: data.certificationsSection?.header?.desc || initialCmsData.certificationsSection.header.desc,
              },
              items: data.certificationsSection?.items?.length
                ? data.certificationsSection.items
                : initialCmsData.certificationsSection.items,
            },
            servicesSection: {
              header: {
                eyebrow: data.servicesSection?.header?.eyebrow || initialCmsData.servicesSection.header.eyebrow,
                title: data.servicesSection?.header?.title || initialCmsData.servicesSection.header.title,
                desc: data.servicesSection?.header?.desc || initialCmsData.servicesSection.header.desc,
              },
              items: data.servicesSection?.items?.length
                ? data.servicesSection.items
                : initialCmsData.servicesSection.items,
            },
            processSection: {
              header: {
                eyebrow: data.processSection?.header?.eyebrow || initialCmsData.processSection.header.eyebrow,
                title: data.processSection?.header?.title || initialCmsData.processSection.header.title,
                desc: data.processSection?.header?.desc || initialCmsData.processSection.header.desc,
              },
              items: data.processSection?.items?.length
                ? data.processSection.items
                : initialCmsData.processSection.items,
            },
            categoriesSection: {
              header: {
                eyebrow: data.categoriesSection?.header?.eyebrow || initialCmsData.categoriesSection.header.eyebrow,
                title: data.categoriesSection?.header?.title || initialCmsData.categoriesSection.header.title,
                desc: data.categoriesSection?.header?.desc || initialCmsData.categoriesSection.header.desc,
              },
              items: data.categoriesSection?.items?.length
                ? data.categoriesSection.items
                : initialCmsData.categoriesSection.items,
            },
            faqsSection: {
              header: {
                eyebrow: data.faqsSection?.header?.eyebrow || initialCmsData.faqsSection.header.eyebrow,
                title: data.faqsSection?.header?.title || initialCmsData.faqsSection.header.title,
                desc: data.faqsSection?.header?.desc || initialCmsData.faqsSection.header.desc,
              },
              items: data.faqsSection?.items?.length
                ? data.faqsSection.items
                : initialCmsData.faqsSection.items,
            },
            ctaBanner: {
              eyebrow: data.ctaBanner?.eyebrow || initialCmsData.ctaBanner.eyebrow,
              heading: data.ctaBanner?.heading || initialCmsData.ctaBanner.heading,
              desc: data.ctaBanner?.desc || initialCmsData.ctaBanner.desc,
              buttonText: data.ctaBanner?.buttonText || initialCmsData.ctaBanner.buttonText,
              phone: data.ctaBanner?.phone || initialCmsData.ctaBanner.phone,
              whatsappText: data.ctaBanner?.whatsappText || initialCmsData.ctaBanner.whatsappText,
            },
          });
        }
      }
    } catch {
      // Safe offline fallback: initialCmsData is already loaded
    }
  };

  const handleSaveToAtlas = async () => {
    setIsSaving(true);
    setNotification(null);
    try {
      const res = await fetch('https://mani-life-1n34.vercel.app/api/home', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cms),
      });

      if (res.ok) {
        setNotification({
          type: 'success',
          message: 'All changes saved to MongoDB Atlas! Frontend updated in real time.',
        });
      } else {
        throw new Error('Save failed');
      }
    } catch (err: any) {
      setNotification({
        type: 'error',
        message: err.message || 'Failed to save changes to MongoDB Atlas. Ensure Port 5000 is running.',
      });
    } finally {
      setIsSaving(false);
      setTimeout(() => setNotification(null), 4000);
    }
  };

  // 1. Hero Trust Highlights Add / Delete
  const addTrustHighlight = () => {
    const newItem = {
      id: Date.now().toString(),
      title: 'New Highlight',
      subtitle: 'Feature Tagline',
      icon: 'Sparkles',
      link: '/services',
    };
    setCms({
      ...cms,
      hero: {
        ...cms.hero,
        trustHighlights: [...(cms.hero?.trustHighlights || []), newItem],
      },
    });
  };

  const deleteTrustHighlight = (index: number) => {
    const items = [...(cms.hero?.trustHighlights || [])];
    items.splice(index, 1);
    setCms({
      ...cms,
      hero: { ...cms.hero, trustHighlights: items },
    });
  };

  // 2. Spatial Stage: Trust Nodes & Hero Products Add / Delete
  const addSpatialTrustNode = () => {
    const newNode = {
      id: Date.now().toString(),
      title: 'New Laboratory Feature',
      desc: 'Validated testing protocols and high-throughput cleanroom compounding.',
      icon: 'FlaskConical',
    };
    setCms({
      ...cms,
      spatialStage: {
        ...cms.spatialStage,
        trustNodes: [...(cms.spatialStage?.trustNodes || []), newNode],
      },
    });
  };

  const deleteSpatialTrustNode = (index: number) => {
    const items = [...(cms.spatialStage?.trustNodes || [])];
    items.splice(index, 1);
    setCms({
      ...cms,
      spatialStage: { ...cms.spatialStage, trustNodes: items },
    });
  };

  const addSpatialHeroProduct = () => {
    const newProd = {
      id: Date.now().toString(),
      name: 'New Cosmetic Formula',
      category: 'Skincare',
      tag: 'Custom Formulation',
      active: true,
    };
    setCms({
      ...cms,
      spatialStage: {
        ...cms.spatialStage,
        heroProducts: [...(cms.spatialStage?.heroProducts || []), newProd],
      },
    });
  };

  const deleteSpatialHeroProduct = (index: number) => {
    const items = [...(cms.spatialStage?.heroProducts || [])];
    items.splice(index, 1);
    setCms({
      ...cms,
      spatialStage: { ...cms.spatialStage, heroProducts: items },
    });
  };

  // 3. Trust Pillars Add / Delete
  const addTrustPillar = () => {
    const num = ((cms.trustPillars?.items?.length || 0) + 1).toString().padStart(2, '0');
    const newPillar = {
      id: num,
      num,
      title: 'New Advantage Pillar',
      desc: 'Clear, compelling reason why clients trust Mani Lifestyle for contract manufacturing.',
      link: '/services',
      icon: 'ShieldCheck',
    };
    setCms({
      ...cms,
      trustPillars: {
        ...cms.trustPillars,
        items: [...(cms.trustPillars?.items || []), newPillar],
      },
    });
  };

  const deleteTrustPillar = (index: number) => {
    const items = [...(cms.trustPillars?.items || [])];
    items.splice(index, 1);
    setCms({
      ...cms,
      trustPillars: { ...cms.trustPillars, items },
    });
  };

  // 4. Certifications Add / Delete
  const addCertification = () => {
    const newCert = {
      id: `cert-${Date.now()}`,
      name: 'ISO / Quality Certification',
      authority: 'Standard Authority',
      scope: 'Rigorous cleanroom and laboratory manufacturing standards.',
      importance: 'Essential for export & safety',
      badgeCode: 'CERTIFIED',
      image: '/images/certifications/gmp.png',
      verified: true,
    };
    setCms({
      ...cms,
      certificationsSection: {
        ...cms.certificationsSection,
        items: [...(cms.certificationsSection?.items || []), newCert],
      },
    });
  };

  const deleteCertification = (index: number) => {
    const items = [...(cms.certificationsSection?.items || [])];
    items.splice(index, 1);
    setCms({
      ...cms,
      certificationsSection: { ...cms.certificationsSection, items },
    });
  };

  // 5. Services Add / Delete
  const addService = () => {
    const num = ((cms.servicesSection?.items?.length || 0) + 1).toString().padStart(2, '0');
    const newService = {
      id: Date.now().toString(),
      num,
      title: 'New Cosmetic Service',
      desc: 'Formulation and compounding tailored to client specifications.',
      image: '/images/services-v3/v3_img1.jpg',
      link: '/services',
    };
    setCms({
      ...cms,
      servicesSection: {
        ...cms.servicesSection,
        items: [...(cms.servicesSection?.items || []), newService],
      },
    });
  };

  const deleteService = (index: number) => {
    const items = [...(cms.servicesSection?.items || [])];
    items.splice(index, 1);
    setCms({
      ...cms,
      servicesSection: { ...cms.servicesSection, items },
    });
  };

  // 6. Process Steps Add / Delete
  const addProcessStep = () => {
    const nextStepNum = (cms.processSection?.items?.length || 0) + 1;
    const newStep = {
      step: nextStepNum,
      label: `STEP ${nextStepNum}`,
      title: 'New Production Phase',
    };
    setCms({
      ...cms,
      processSection: {
        ...cms.processSection,
        items: [...(cms.processSection?.items || []), newStep],
      },
    });
  };

  const deleteProcessStep = (index: number) => {
    const items = [...(cms.processSection?.items || [])];
    items.splice(index, 1);
    setCms({
      ...cms,
      processSection: { ...cms.processSection, items },
    });
  };

  // 7. Product Categories Add / Delete
  const addCategory = () => {
    const num = ((cms.categoriesSection?.items?.length || 0) + 1).toString().padStart(2, '0');
    const newCat = {
      num,
      name: 'New Product Category',
      tagline: 'Custom Formulation Line',
      description: 'High-performance botanical actives formulated for targeted cosmetic results.',
      tags: ['Natural Actives', 'Paraben Free'],
      moq: '500 Units',
      slug: 'new-category',
      image: '/images/categories/cat-serum.jpg',
    };
    setCms({
      ...cms,
      categoriesSection: {
        ...cms.categoriesSection,
        items: [...(cms.categoriesSection?.items || []), newCat],
      },
    });
  };

  const deleteCategory = (index: number) => {
    const items = [...(cms.categoriesSection?.items || [])];
    items.splice(index, 1);
    setCms({
      ...cms,
      categoriesSection: { ...cms.categoriesSection, items },
    });
  };

  // 8. FAQs Add / Delete
  const addFaq = () => {
    const newFaq = {
      question: 'New Frequently Asked Question?',
      answer: 'Detailed explanation of formulation, compliance, or turnaround times.',
    };
    setCms({
      ...cms,
      faqsSection: {
        ...cms.faqsSection,
        items: [...(cms.faqsSection?.items || []), newFaq],
      },
    });
  };

  const deleteFaq = (index: number) => {
    const items = [...(cms.faqsSection?.items || [])];
    items.splice(index, 1);
    setCms({
      ...cms,
      faqsSection: { ...cms.faqsSection, items },
    });
  };

  // Tab definitions matching EXACT top-to-bottom frontend order
  const tabs = [
    { key: 'hero' as TabKey, label: '1. Hero', fullLabel: 'Hero & Highlights', icon: Sparkles },
    { key: 'spatialStage' as TabKey, label: '2. 3D Stage', fullLabel: '3D Product Showcase', icon: Box },
    { key: 'trust' as TabKey, label: '3. Trust', fullLabel: 'Reasons to Trust', icon: Award },
    { key: 'certifications' as TabKey, label: '4. Certs', fullLabel: 'Quality & Certifications', icon: ShieldCheck },
    { key: 'services' as TabKey, label: '5. Services', fullLabel: 'Our Services', icon: Layers },
    { key: 'process' as TabKey, label: '6. Process', fullLabel: 'Process Journey', icon: Clock },
    { key: 'categories' as TabKey, label: '7. Products', fullLabel: 'Product Categories', icon: Boxes },
    { key: 'faqs' as TabKey, label: '8. FAQs', fullLabel: 'FAQs Accordion', icon: HelpCircle },
    { key: 'cta' as TabKey, label: '9. CTA', fullLabel: 'Consultation CTA Banner', icon: PhoneCall },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#06131f] text-slate-200 font-sans min-h-screen">
      <AdminHeader
        title="Full Homepage Dynamic CMS"
        subtitle="Manage all 9 sections in exact frontend order with live MongoDB Atlas synchronization"
      />

      {/* Action Sub-header: Zero-Slider 2-Tier Architecture */}
      <div className="px-8 py-3 bg-[#081a2b] border-b border-[#14334d] space-y-2.5 sticky top-16 z-20 shadow-md">
        {/* Tier 1: Action Controls & Active Section Status */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-[11px] font-semibold text-white uppercase tracking-wider">
              Editing:
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-[#164666] text-sky-200 border border-sky-400/40">
              {tabs.find((t) => t.key === activeTab)?.fullLabel || tabs.find((t) => t.key === activeTab)?.label}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              (Section {tabs.findIndex((t) => t.key === activeTab) + 1} of 9)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0b2136] hover:bg-[#12314d] text-slate-300 hover:text-white border border-[#163e5c] transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-sky-400" />
              <span>Open Live Site</span>
            </a>

            <button
              onClick={handleSaveToAtlas}
              disabled={isSaving}
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg transition-all disabled:opacity-50 cursor-pointer"
            >
              <Save className={`w-3.5 h-3.5 ${isSaving ? 'animate-spin' : ''}`} />
              <span>{isSaving ? 'Saving to MongoDB...' : 'Save All Changes'}</span>
            </button>
          </div>
        </div>

        {/* Tier 2: 9-Section Navigation Grid (Zero-Slider: 100% visible, no cut off, no ellipsis) */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-1.5 p-1 bg-[#06131f] rounded-xl border border-[#14334d]">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center justify-center gap-1.5 py-1.5 px-1 rounded-lg text-[11px] sm:text-xs font-medium transition-all cursor-pointer text-center whitespace-nowrap ${
                  isActive
                    ? 'bg-[#164666] text-white shadow-md border border-sky-400/50 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
                title={tab.fullLabel}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-sky-300' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div
          className={`mx-8 mt-4 p-3 rounded-xl border flex items-center gap-3 text-xs font-medium animate-fadeIn ${
            notification.type === 'success'
              ? 'bg-emerald-950/70 border-emerald-800 text-emerald-200'
              : 'bg-rose-950/70 border-rose-800 text-rose-200'
          }`}
        >
          {notification.type === 'success' ? (
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          )}
          <span>{notification.message}</span>
        </div>
      )}

      {/* CMS Main Content Canvas */}
      <div className="p-8 max-w-6xl w-full mx-auto space-y-6">
        {/* ======================================================== */}
        {/* TAB 1: HERO & TRUST HIGHLIGHTS                          */}
        {/* ======================================================== */}
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] space-y-4 shadow-lg">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2 border-b border-[#163e5c] pb-3">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Hero Section Headlines & CTAs</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Micro Kicker Eyebrow</label>
                  <input
                    type="text"
                    value={cms.hero?.kicker || ''}
                    onChange={(e) =>
                      setCms({ ...cms, hero: { ...cms.hero, kicker: e.target.value } })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs focus:border-sky-400 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">Master Headline</label>
                  <input
                    type="text"
                    value={cms.hero?.headline || ''}
                    onChange={(e) =>
                      setCms({ ...cms, hero: { ...cms.hero, headline: e.target.value } })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs focus:border-sky-400 focus:outline-hidden"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-slate-400 font-medium mb-1">Subheadline Description</label>
                  <textarea
                    rows={3}
                    value={cms.hero?.subheadline || ''}
                    onChange={(e) =>
                      setCms({ ...cms, hero: { ...cms.hero, subheadline: e.target.value } })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs focus:border-sky-400 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">Primary CTA Button</label>
                  <input
                    type="text"
                    value={cms.hero?.primaryCtaText || ''}
                    onChange={(e) =>
                      setCms({ ...cms, hero: { ...cms.hero, primaryCtaText: e.target.value } })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs focus:border-sky-400 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">Secondary CTA Button</label>
                  <input
                    type="text"
                    value={cms.hero?.secondaryCtaText || ''}
                    onChange={(e) =>
                      setCms({ ...cms, hero: { ...cms.hero, secondaryCtaText: e.target.value } })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs focus:border-sky-400 focus:outline-hidden"
                  />
                </div>
              </div>
            </div>

            {/* Hero Trust Highlights */}
            <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] space-y-4 shadow-lg">
              <div className="flex items-center justify-between border-b border-[#163e5c] pb-3">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Hero Trust Highlights ({cms.hero?.trustHighlights?.length || 0})</span>
                </h3>
                <button
                  onClick={addTrustHighlight}
                  className="px-3 py-1 bg-[#164666] hover:bg-[#1e608f] text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Highlight</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cms.hero?.trustHighlights?.map((hl: any, idx: number) => (
                  <div
                    key={hl.id || idx}
                    className="p-4 rounded-xl bg-[#081a2b] border border-[#14334d] space-y-3 relative group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-sky-400 uppercase font-semibold">
                        Badge #{idx + 1}
                      </span>
                      <button
                        onClick={() => deleteTrustHighlight(idx)}
                        className="text-slate-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                        title="Delete Highlight"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="text-[11px] text-slate-400">Title</label>
                        <input
                          type="text"
                          value={hl.title}
                          onChange={(e) => {
                            const items = [...cms.hero.trustHighlights];
                            items[idx].title = e.target.value;
                            setCms({ ...cms, hero: { ...cms.hero, trustHighlights: items } });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-slate-400">Subtitle</label>
                        <input
                          type="text"
                          value={hl.subtitle}
                          onChange={(e) => {
                            const items = [...cms.hero.trustHighlights];
                            items[idx].subtitle = e.target.value;
                            setCms({ ...cms, hero: { ...cms.hero, trustHighlights: items } });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-slate-400">Icon Name</label>
                        <input
                          type="text"
                          value={hl.icon || 'Sparkles'}
                          onChange={(e) => {
                            const items = [...cms.hero.trustHighlights];
                            items[idx].icon = e.target.value;
                            setCms({ ...cms, hero: { ...cms.hero, trustHighlights: items } });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-slate-400">Destination Link</label>
                        <input
                          type="text"
                          value={hl.link || ''}
                          onChange={(e) => {
                            const items = [...cms.hero.trustHighlights];
                            items[idx].link = e.target.value;
                            setCms({ ...cms, hero: { ...cms.hero, trustHighlights: items } });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
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
        {/* TAB 2: 3D HERO PRODUCT SHOWCASE (SPATIAL STAGE)          */}
        {/* ======================================================== */}
        {activeTab === 'spatialStage' && (
          <div className="space-y-6">
            <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] space-y-4 shadow-lg">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2 border-b border-[#163e5c] pb-3">
                <Box className="w-4 h-4 text-sky-400" />
                <span>3D Product Showcase Header</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Eyebrow Kicker</label>
                  <input
                    type="text"
                    value={cms.spatialStage?.eyebrow || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        spatialStage: { ...cms.spatialStage, eyebrow: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">Master Title</label>
                  <input
                    type="text"
                    value={cms.spatialStage?.title || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        spatialStage: { ...cms.spatialStage, title: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-slate-400 font-medium mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={cms.spatialStage?.desc || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        spatialStage: { ...cms.spatialStage, desc: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Laboratory Trust Nodes */}
            <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] space-y-4 shadow-lg">
              <div className="flex items-center justify-between border-b border-[#163e5c] pb-3">
                <div>
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-emerald-400" />
                    <span>Laboratory Trust Nodes ({cms.spatialStage?.trustNodes?.length || 0})</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Micro badges displayed above the 3D rotating stage
                  </p>
                </div>
                <button
                  onClick={addSpatialTrustNode}
                  className="px-3 py-1 bg-[#164666] hover:bg-[#1e608f] text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Trust Node</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cms.spatialStage?.trustNodes?.map((node: any, idx: number) => (
                  <div
                    key={node.id || idx}
                    className="p-4 rounded-xl bg-[#081a2b] border border-[#14334d] space-y-2.5 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-sky-400 uppercase font-semibold">
                        Node #{idx + 1}
                      </span>
                      <button
                        onClick={() => deleteSpatialTrustNode(idx)}
                        className="text-slate-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                        title="Delete Trust Node"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <label className="text-[11px] text-slate-400">Node Title</label>
                        <input
                          type="text"
                          value={node.title}
                          onChange={(e) => {
                            const items = [...cms.spatialStage.trustNodes];
                            items[idx].title = e.target.value;
                            setCms({
                              ...cms,
                              spatialStage: { ...cms.spatialStage, trustNodes: items },
                            });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-slate-400 mb-1">Description</label>
                        <textarea
                          rows={3}
                          value={node.desc}
                          onChange={(e) => {
                            const items = [...cms.spatialStage.trustNodes];
                            items[idx].desc = e.target.value;
                            setCms({
                              ...cms,
                              spatialStage: { ...cms.spatialStage, trustNodes: items },
                            });
                          }}
                          className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs resize-none overflow-hidden no-scrollbar focus:border-sky-400 focus:outline-hidden leading-relaxed"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-slate-400">Icon Name</label>
                        <input
                          type="text"
                          value={node.icon || 'FlaskConical'}
                          onChange={(e) => {
                            const items = [...cms.spatialStage.trustNodes];
                            items[idx].icon = e.target.value;
                            setCms({
                              ...cms,
                              spatialStage: { ...cms.spatialStage, trustNodes: items },
                            });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Hero Products */}
            <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] space-y-4 shadow-lg">
              <div className="flex items-center justify-between border-b border-[#163e5c] pb-3">
                <div>
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Box className="w-4 h-4 text-sky-400" />
                    <span>3D Hero Product Pods ({cms.spatialStage?.heroProducts?.length || 0})</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Interactive bottles rendered on the rotating showcase platform
                  </p>
                </div>
                <button
                  onClick={addSpatialHeroProduct}
                  className="px-3 py-1 bg-[#164666] hover:bg-[#1e608f] text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Product</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cms.spatialStage?.heroProducts?.map((prod: any, idx: number) => (
                  <div
                    key={prod.id || idx}
                    className="p-4 rounded-xl bg-[#081a2b] border border-[#14334d] space-y-3 relative group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-sky-400 uppercase font-semibold">
                        Product #{idx + 1}
                      </span>
                      <button
                        onClick={() => deleteSpatialHeroProduct(idx)}
                        className="text-slate-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                        title="Delete Product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <label className="text-[11px] text-slate-400">Product Name</label>
                        <input
                          type="text"
                          value={prod.name}
                          onChange={(e) => {
                            const items = [...cms.spatialStage.heroProducts];
                            items[idx].name = e.target.value;
                            setCms({
                              ...cms,
                              spatialStage: { ...cms.spatialStage, heroProducts: items },
                            });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-slate-400">Category Tag</label>
                        <input
                          type="text"
                          value={prod.category}
                          onChange={(e) => {
                            const items = [...cms.spatialStage.heroProducts];
                            items[idx].category = e.target.value;
                            setCms({
                              ...cms,
                              spatialStage: { ...cms.spatialStage, heroProducts: items },
                            });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-slate-400">Tagline / Subtitle</label>
                        <input
                          type="text"
                          value={prod.tag}
                          onChange={(e) => {
                            const items = [...cms.spatialStage.heroProducts];
                            items[idx].tag = e.target.value;
                            setCms({
                              ...cms,
                              spatialStage: { ...cms.spatialStage, heroProducts: items },
                            });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>

                      <div className="pt-1 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400">Visible on 3D Stage</span>
                        <input
                          type="checkbox"
                          checked={prod.active !== false}
                          onChange={(e) => {
                            const items = [...cms.spatialStage.heroProducts];
                            items[idx].active = e.target.checked;
                            setCms({
                              ...cms,
                              spatialStage: { ...cms.spatialStage, heroProducts: items },
                            });
                          }}
                          className="w-4 h-4 accent-sky-500 rounded cursor-pointer"
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
        {/* TAB 3: REASONS TO TRUST MANI LIFESTYLE (THE ADVANTAGE)   */}
        {/* ======================================================== */}
        {activeTab === 'trust' && (
          <div className="space-y-6">
            <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] space-y-4 shadow-lg">
              <div className="flex items-center justify-between border-b border-[#163e5c] pb-3">
                <div>
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-sky-400" />
                    <span>The Mani Advantage Pillars ({cms.trustPillars?.items?.length || 0})</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Manage reasons to trust Mani Lifestyle (low MOQ, transparent pricing, GMP certification)
                  </p>
                </div>
                <button
                  onClick={addTrustPillar}
                  className="px-3.5 py-1.5 bg-[#164666] hover:bg-[#1e608f] text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Advantage</span>
                </button>
              </div>

              {/* Section Headings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Section Eyebrow</label>
                  <input
                    type="text"
                    value={cms.trustPillars?.header?.eyebrow || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        trustPillars: {
                          ...cms.trustPillars,
                          header: { ...cms.trustPillars.header, eyebrow: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Section Title</label>
                  <input
                    type="text"
                    value={cms.trustPillars?.header?.title || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        trustPillars: {
                          ...cms.trustPillars,
                          header: { ...cms.trustPillars.header, title: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-slate-400 font-medium mb-1">Section Description</label>
                  <textarea
                    rows={2}
                    value={cms.trustPillars?.header?.desc || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        trustPillars: {
                          ...cms.trustPillars,
                          header: { ...cms.trustPillars.header, desc: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
                {cms.trustPillars?.items?.map((pillar: any, idx: number) => (
                  <div
                    key={pillar.id || idx}
                    className="p-5 rounded-2xl bg-[#081a2b] border border-[#14334d] hover:border-sky-500/30 transition-all space-y-3 relative shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-sky-400">
                        Pillar #{pillar.num || idx + 1}
                      </span>
                      <button
                        onClick={() => deleteTrustPillar(idx)}
                        className="text-slate-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                        title="Delete Pillar"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div>
                        <label className="block text-[11px] font-medium text-slate-400 mb-1">Title</label>
                        <input
                          type="text"
                          value={pillar.title}
                          onChange={(e) => {
                            const items = [...cms.trustPillars.items];
                            items[idx].title = e.target.value;
                            setCms({ ...cms, trustPillars: { ...cms.trustPillars, items } });
                          }}
                          className="w-full px-3 py-1.5 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs focus:border-sky-400 focus:outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-slate-400 mb-1">Description</label>
                        <textarea
                          rows={3}
                          value={pillar.desc}
                          onChange={(e) => {
                            const items = [...cms.trustPillars.items];
                            items[idx].desc = e.target.value;
                            setCms({ ...cms, trustPillars: { ...cms.trustPillars, items } });
                          }}
                          className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs resize-none overflow-hidden no-scrollbar focus:border-sky-400 focus:outline-hidden leading-relaxed"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[11px] font-medium text-slate-400 mb-1">Icon Name</label>
                          <input
                            type="text"
                            value={pillar.icon || 'Sparkles'}
                            onChange={(e) => {
                              const items = [...cms.trustPillars.items];
                              items[idx].icon = e.target.value;
                              setCms({ ...cms, trustPillars: { ...cms.trustPillars, items } });
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs focus:border-sky-400 focus:outline-hidden"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-medium text-slate-400 mb-1">Destination Link</label>
                          <input
                            type="text"
                            value={pillar.link || ''}
                            onChange={(e) => {
                              const items = [...cms.trustPillars.items];
                              items[idx].link = e.target.value;
                              setCms({ ...cms, trustPillars: { ...cms.trustPillars, items } });
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs focus:border-sky-400 focus:outline-hidden"
                          />
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
        {/* TAB 4: CERTIFICATIONS & ACCREDITATIONS                  */}
        {/* ======================================================== */}
        {activeTab === 'certifications' && (
          <div className="space-y-6">
            <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] space-y-4 shadow-lg">
              <div className="flex items-center justify-between border-b border-[#163e5c] pb-3">
                <div>
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Quality Certifications ({cms.certificationsSection?.items?.length || 0})</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Accredited regulatory bodies and standards displayed on the public storefront
                  </p>
                </div>
                <button
                  onClick={addCertification}
                  className="px-3.5 py-1.5 bg-[#164666] hover:bg-[#1e608f] text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Certification</span>
                </button>
              </div>

              {/* Section Headings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Section Eyebrow</label>
                  <input
                    type="text"
                    value={cms.certificationsSection?.header?.eyebrow || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        certificationsSection: {
                          ...cms.certificationsSection,
                          header: { ...cms.certificationsSection.header, eyebrow: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Section Title</label>
                  <input
                    type="text"
                    value={cms.certificationsSection?.header?.title || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        certificationsSection: {
                          ...cms.certificationsSection,
                          header: { ...cms.certificationsSection.header, title: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-slate-400 font-medium mb-1">Section Description</label>
                  <textarea
                    rows={2}
                    value={cms.certificationsSection?.header?.desc || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        certificationsSection: {
                          ...cms.certificationsSection,
                          header: { ...cms.certificationsSection.header, desc: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
              </div>

              {/* Plaque Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
                {cms.certificationsSection?.items?.map((cert: any, idx: number) => (
                  <div
                    key={cert.id || idx}
                    className="p-5 rounded-xl bg-[#081a2b] border border-[#14334d] space-y-3 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-sky-400">
                        Plaque #{idx + 1}
                      </span>
                      <button
                        onClick={() => deleteCertification(idx)}
                        className="text-slate-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                        title="Delete Certification"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div>
                        <label className="text-[11px] text-slate-400">Certification Name</label>
                        <input
                          type="text"
                          value={cert.name}
                          onChange={(e) => {
                            const items = [...cms.certificationsSection.items];
                            items[idx].name = e.target.value;
                            setCms({
                              ...cms,
                              certificationsSection: { ...cms.certificationsSection, items },
                            });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-slate-400">Governing Authority</label>
                        <input
                          type="text"
                          value={cert.authority}
                          onChange={(e) => {
                            const items = [...cms.certificationsSection.items];
                            items[idx].authority = e.target.value;
                            setCms({
                              ...cms,
                              certificationsSection: { ...cms.certificationsSection, items },
                            });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-slate-400 mb-1">Scope of Certification</label>
                        <textarea
                          rows={3}
                          value={cert.scope}
                          onChange={(e) => {
                            const items = [...cms.certificationsSection.items];
                            items[idx].scope = e.target.value;
                            setCms({
                              ...cms,
                              certificationsSection: { ...cms.certificationsSection, items },
                            });
                          }}
                          className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs resize-none overflow-hidden no-scrollbar focus:border-sky-400 focus:outline-hidden leading-relaxed"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-slate-400">Badge Code</label>
                        <input
                          type="text"
                          value={cert.badgeCode}
                          onChange={(e) => {
                            const items = [...cms.certificationsSection.items];
                            items[idx].badgeCode = e.target.value;
                            setCms({
                              ...cms,
                              certificationsSection: { ...cms.certificationsSection, items },
                            });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>

                      <ImageUploadInput
                        label="Seal Image / Certificate Logo"
                        value={cert.image || ''}
                        folder="mani-lifestyle/certifications"
                        onChange={(url) => {
                          const items = [...cms.certificationsSection.items];
                          items[idx].image = url;
                          setCms({
                            ...cms,
                            certificationsSection: { ...cms.certificationsSection, items },
                          });
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 5: OUR SERVICES (ORGANIC WAVE CARDS)                 */}
        {/* ======================================================== */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] space-y-4 shadow-lg">
              <div className="flex items-center justify-between border-b border-[#163e5c] pb-3">
                <div>
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-sky-400" />
                    <span>Organic Wave Service Cards ({cms.servicesSection?.items?.length || 0})</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Manage titles, descriptions, images, and links displayed in the organic wave cards section
                  </p>
                </div>
                <button
                  onClick={addService}
                  className="px-3.5 py-1.5 bg-[#164666] hover:bg-[#1e608f] text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add New Service</span>
                </button>
              </div>

              {/* Section Headings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Section Eyebrow</label>
                  <input
                    type="text"
                    value={cms.servicesSection?.header?.eyebrow || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        servicesSection: {
                          ...cms.servicesSection,
                          header: { ...cms.servicesSection.header, eyebrow: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Section Title</label>
                  <input
                    type="text"
                    value={cms.servicesSection?.header?.title || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        servicesSection: {
                          ...cms.servicesSection,
                          header: { ...cms.servicesSection.header, title: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-slate-400 font-medium mb-1">Section Description</label>
                  <textarea
                    rows={2}
                    value={cms.servicesSection?.header?.desc || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        servicesSection: {
                          ...cms.servicesSection,
                          header: { ...cms.servicesSection.header, desc: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                {cms.servicesSection?.items?.map((srv: any, idx: number) => (
                  <div
                    key={srv.id || idx}
                    className="p-5 rounded-xl bg-[#081a2b] border border-[#14334d] space-y-3 relative group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-sky-400">
                        Service #{srv.num || idx + 1}
                      </span>
                      <button
                        onClick={() => deleteService(idx)}
                        className="text-slate-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                        title="Delete Service Card"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div>
                        <label className="text-[11px] text-slate-400">Service Title</label>
                        <input
                          type="text"
                          value={srv.title}
                          onChange={(e) => {
                            const items = [...cms.servicesSection.items];
                            items[idx].title = e.target.value;
                            setCms({ ...cms, servicesSection: { ...cms.servicesSection, items } });
                          }}
                          className="w-full px-3 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-slate-400 mb-1">Description</label>
                        <textarea
                          rows={3}
                          value={srv.desc}
                          onChange={(e) => {
                            const items = [...cms.servicesSection.items];
                            items[idx].desc = e.target.value;
                            setCms({ ...cms, servicesSection: { ...cms.servicesSection, items } });
                          }}
                          className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs resize-none overflow-hidden no-scrollbar focus:border-sky-400 focus:outline-hidden leading-relaxed"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-slate-400">Service Link</label>
                        <input
                          type="text"
                          value={srv.link || ''}
                          onChange={(e) => {
                            const items = [...cms.servicesSection.items];
                            items[idx].link = e.target.value;
                            setCms({ ...cms, servicesSection: { ...cms.servicesSection, items } });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>

                      <ImageUploadInput
                        label="Service Visual Image"
                        value={srv.image || ''}
                        folder="mani-lifestyle/services"
                        onChange={(url) => {
                          const items = [...cms.servicesSection.items];
                          items[idx].image = url;
                          setCms({ ...cms, servicesSection: { ...cms.servicesSection, items } });
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 6: PROCESS JOURNEY (7 STEPS)                         */}
        {/* ======================================================== */}
        {activeTab === 'process' && (
          <div className="space-y-6">
            <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] space-y-4 shadow-lg">
              <div className="flex items-center justify-between border-b border-[#163e5c] pb-3">
                <div>
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <span>Spec-To-Shelf Sequential Steps ({cms.processSection?.items?.length || 0})</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Define each milestone from requirement discussion to final compounding and dispatch
                  </p>
                </div>
                <button
                  onClick={addProcessStep}
                  className="px-3.5 py-1.5 bg-[#164666] hover:bg-[#1e608f] text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Step</span>
                </button>
              </div>

              {/* Section Headings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Section Eyebrow</label>
                  <input
                    type="text"
                    value={cms.processSection?.header?.eyebrow || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        processSection: {
                          ...cms.processSection,
                          header: { ...cms.processSection.header, eyebrow: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Section Title</label>
                  <input
                    type="text"
                    value={cms.processSection?.header?.title || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        processSection: {
                          ...cms.processSection,
                          header: { ...cms.processSection.header, title: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-slate-400 font-medium mb-1">Section Description</label>
                  <textarea
                    rows={2}
                    value={cms.processSection?.header?.desc || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        processSection: {
                          ...cms.processSection,
                          header: { ...cms.processSection.header, desc: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-3">
                {cms.processSection?.items?.map((step: any, idx: number) => (
                  <div
                    key={step.step || idx}
                    className="p-4 rounded-xl bg-[#081a2b] border border-[#14334d] space-y-2.5 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-sky-400">
                        {step.label || `STEP ${idx + 1}`}
                      </span>
                      <button
                        onClick={() => deleteProcessStep(idx)}
                        className="text-slate-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                        title="Delete Step"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <label className="text-[10px] text-slate-400">Step Title</label>
                        <input
                          type="text"
                          value={step.title}
                          onChange={(e) => {
                            const items = [...cms.processSection.items];
                            items[idx].title = e.target.value;
                            setCms({ ...cms, processSection: { ...cms.processSection, items } });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400">Step Label</label>
                        <input
                          type="text"
                          value={step.label || `STEP ${idx + 1}`}
                          onChange={(e) => {
                            const items = [...cms.processSection.items];
                            items[idx].label = e.target.value;
                            setCms({ ...cms, processSection: { ...cms.processSection, items } });
                          }}
                          className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
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
        {/* TAB 7: PRODUCT VERTICALS & CATEGORIES                    */}
        {/* ======================================================== */}
        {activeTab === 'categories' && (
          <div className="space-y-6">
            <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] space-y-4 shadow-lg">
              <div className="flex items-center justify-between border-b border-[#163e5c] pb-3">
                <div>
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-sky-400" />
                    <span>Core Product Categories in Your Brand ({cms.categoriesSection?.items?.length || 0})</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Manage category titles, micro-taglines, active ingredient badges, and image links
                  </p>
                </div>
                <button
                  onClick={addCategory}
                  className="px-3.5 py-1.5 bg-[#164666] hover:bg-[#1e608f] text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Category</span>
                </button>
              </div>

              {/* Section Headings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Section Eyebrow</label>
                  <input
                    type="text"
                    value={cms.categoriesSection?.header?.eyebrow || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        categoriesSection: {
                          ...cms.categoriesSection,
                          header: { ...cms.categoriesSection.header, eyebrow: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Section Title</label>
                  <input
                    type="text"
                    value={cms.categoriesSection?.header?.title || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        categoriesSection: {
                          ...cms.categoriesSection,
                          header: { ...cms.categoriesSection.header, title: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-slate-400 font-medium mb-1">Section Description</label>
                  <textarea
                    rows={2}
                    value={cms.categoriesSection?.header?.desc || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        categoriesSection: {
                          ...cms.categoriesSection,
                          header: { ...cms.categoriesSection.header, desc: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                {cms.categoriesSection?.items?.map((cat: any, idx: number) => (
                  <div
                    key={cat.num || idx}
                    className="p-5 rounded-xl bg-[#081a2b] border border-[#14334d] space-y-3 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-sky-400">
                        Category #{cat.num || idx + 1}
                      </span>
                      <button
                        onClick={() => deleteCategory(idx)}
                        className="text-slate-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                        title="Delete Category"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[11px] text-slate-400">Category Name</label>
                          <input
                            type="text"
                            value={cat.name}
                            onChange={(e) => {
                              const items = [...cms.categoriesSection.items];
                              items[idx].name = e.target.value;
                              setCms({ ...cms, categoriesSection: { ...cms.categoriesSection, items } });
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] text-slate-400">Micro Tagline</label>
                          <input
                            type="text"
                            value={cat.tagline || ''}
                            onChange={(e) => {
                              const items = [...cms.categoriesSection.items];
                              items[idx].tagline = e.target.value;
                              setCms({ ...cms, categoriesSection: { ...cms.categoriesSection, items } });
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-slate-400 mb-1">Description</label>
                        <textarea
                          rows={3}
                          value={cat.description}
                          onChange={(e) => {
                            const items = [...cms.categoriesSection.items];
                            items[idx].description = e.target.value;
                            setCms({ ...cms, categoriesSection: { ...cms.categoriesSection, items } });
                          }}
                          className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs resize-none overflow-hidden no-scrollbar focus:border-sky-400 focus:outline-hidden leading-relaxed"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[11px] text-slate-400">Active Tags (Comma Separated)</label>
                          <input
                            type="text"
                            value={(cat.tags || []).join(', ')}
                            onChange={(e) => {
                              const items = [...cms.categoriesSection.items];
                              items[idx].tags = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                              setCms({ ...cms, categoriesSection: { ...cms.categoriesSection, items } });
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] text-slate-400">Slug / Route</label>
                          <input
                            type="text"
                            value={cat.slug || ''}
                            onChange={(e) => {
                              const items = [...cms.categoriesSection.items];
                              items[idx].slug = e.target.value;
                              setCms({ ...cms, categoriesSection: { ...cms.categoriesSection, items } });
                            }}
                            className="w-full px-2.5 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                          />
                        </div>
                      </div>

                      <ImageUploadInput
                        label="Category Product Visual Image"
                        value={cat.image || ''}
                        folder="mani-lifestyle/categories"
                        onChange={(url) => {
                          const items = [...cms.categoriesSection.items];
                          items[idx].image = url;
                          setCms({ ...cms, categoriesSection: { ...cms.categoriesSection, items } });
                        }}
                      />

                      <div className="pt-2 flex items-center justify-between border-t border-[#14334d]/80">
                        <span className="text-[11px] text-slate-400 font-mono">
                          Linked Route: /{cat.slug || 'products'}
                        </span>
                        <Link
                          href={`/categories/${cat.slug || 'cleansers-toners'}`}
                          className="px-3 py-1.5 rounded-lg bg-sky-950/80 hover:bg-sky-900 border border-sky-600/60 text-sky-300 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
                        >
                          <FlaskConical className="w-3.5 h-3.5 text-sky-400" />
                          <span>Manage {cat.name} Formulations & Page CMS →</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 8: FAQS ACCORDION                                    */}
        {/* ======================================================== */}
        {activeTab === 'faqs' && (
          <div className="space-y-6">
            <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] space-y-4 shadow-lg">
              <div className="flex items-center justify-between border-b border-[#163e5c] pb-3">
                <div>
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-sky-400" />
                    <span>Frequently Asked Questions ({cms.faqsSection?.items?.length || 0})</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Add, edit, or remove technical, MOQ, and commercial guidance questions
                  </p>
                </div>
                <button
                  onClick={addFaq}
                  className="px-3.5 py-1.5 bg-[#164666] hover:bg-[#1e608f] text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add FAQ</span>
                </button>
              </div>

              {/* Section Headings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Section Eyebrow</label>
                  <input
                    type="text"
                    value={cms.faqsSection?.header?.eyebrow || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        faqsSection: {
                          ...cms.faqsSection,
                          header: { ...cms.faqsSection.header, eyebrow: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Section Title</label>
                  <input
                    type="text"
                    value={cms.faqsSection?.header?.title || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        faqsSection: {
                          ...cms.faqsSection,
                          header: { ...cms.faqsSection.header, title: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-slate-400 font-medium mb-1">Section Description</label>
                  <textarea
                    rows={2}
                    value={cms.faqsSection?.header?.desc || ''}
                    onChange={(e) =>
                      setCms({
                        ...cms,
                        faqsSection: {
                          ...cms.faqsSection,
                          header: { ...cms.faqsSection.header, desc: e.target.value },
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-3">
                {cms.faqsSection?.items?.map((faq: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#081a2b] border border-[#14334d] space-y-2 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-sky-400">
                        Question #{idx + 1}
                      </span>
                      <button
                        onClick={() => deleteFaq(idx)}
                        className="text-slate-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                        title="Delete FAQ"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <label className="text-[10px] text-slate-400">Question Title</label>
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) => {
                            const items = [...cms.faqsSection.items];
                            items[idx].question = e.target.value;
                            setCms({ ...cms, faqsSection: { ...cms.faqsSection, items } });
                          }}
                          className="w-full px-3 py-1.5 bg-[#06131f] border border-[#14334d] rounded text-white text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-slate-400 mb-1">Answer Text</label>
                        <textarea
                          rows={3}
                          value={faq.answer}
                          onChange={(e) => {
                            const items = [...cms.faqsSection.items];
                            items[idx].answer = e.target.value;
                            setCms({ ...cms, faqsSection: { ...cms.faqsSection, items } });
                          }}
                          className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs resize-none overflow-hidden no-scrollbar focus:border-sky-400 focus:outline-hidden leading-relaxed"
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
        {/* TAB 9: CONSULTATION CALL-TO-ACTION                      */}
        {/* ======================================================== */}
        {activeTab === 'cta' && (
          <div className="space-y-6">
            <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] space-y-4 shadow-lg">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2 border-b border-[#163e5c] pb-3">
                <PhoneCall className="w-4 h-4 text-sky-400" />
                <span>Direct Factory Consultation CTA Banner</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Banner Eyebrow</label>
                  <input
                    type="text"
                    value={cms.ctaBanner?.eyebrow || ''}
                    onChange={(e) =>
                      setCms({ ...cms, ctaBanner: { ...cms.ctaBanner, eyebrow: e.target.value } })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">Heading</label>
                  <input
                    type="text"
                    value={cms.ctaBanner?.heading || ''}
                    onChange={(e) =>
                      setCms({ ...cms, ctaBanner: { ...cms.ctaBanner, heading: e.target.value } })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-slate-400 font-medium mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={cms.ctaBanner?.desc || ''}
                    onChange={(e) =>
                      setCms({ ...cms, ctaBanner: { ...cms.ctaBanner, desc: e.target.value } })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">RFQ Button Text</label>
                  <input
                    type="text"
                    value={cms.ctaBanner?.buttonText || ''}
                    onChange={(e) =>
                      setCms({ ...cms, ctaBanner: { ...cms.ctaBanner, buttonText: e.target.value } })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">Contact Phone</label>
                  <input
                    type="text"
                    value={cms.ctaBanner?.phone || ''}
                    onChange={(e) =>
                      setCms({ ...cms, ctaBanner: { ...cms.ctaBanner, phone: e.target.value } })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-slate-400 font-medium mb-1">WhatsApp Pre-filled Message</label>
                  <input
                    type="text"
                    value={cms.ctaBanner?.whatsappText || ''}
                    onChange={(e) =>
                      setCms({ ...cms, ctaBanner: { ...cms.ctaBanner, whatsappText: e.target.value } })
                    }
                    className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
