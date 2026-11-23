import mongoose, { Schema, Document } from 'mongoose';

export interface IAboutPage extends Document {
  hero: {
    kicker: string;
    headlinePart1: string;
    headlineHighlight: string;
    subheadline: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    phone: string;
    image: string;
    imageAlt: string;
    trustHighlights: Array<{
      id: string;
      title: string;
      subtitle: string;
      icon: string;
    }>;
  };
  whoWeAre: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    badges: Array<{
      id: string;
      title: string;
      icon: string;
    }>;
  };
  whyWeExist: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    pillars: Array<{
      id: string;
      num: string;
      title: string;
      subtitle: string;
      tag: string;
      desc: string;
      icon: string;
      stats: Array<{ label: string; value: string }>;
    }>;
  };
  whatWeDo: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    capabilities: Array<{
      num: string;
      stageLabel: string;
      title: string;
      subtitle: string;
      tagline: string;
      desc: string;
      highlight: string;
      icon: string;
    }>;
  };
  productExpertise: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    niches: Array<{
      title: string;
      subtitle: string;
      icon: string;
      href: string;
    }>;
  };
  vision: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    principles: Array<{
      category: string;
      title: string;
      desc: string;
      highlight: string;
      icon: string;
    }>;
  };
  infrastructure: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    image: string;
    imageAlt: string;
    features: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  };
  consultationCta: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    primaryBtnText: string;
    secondaryBtnText: string;
    phone: string;
    whatsappUrl: string;
  };
  updatedAt: Date;
}

const AboutPageSchema = new Schema<IAboutPage>(
  {
    hero: {
      kicker: { type: String, default: 'State-of-the-Art Compounding Campus • Ahmedabad, India' },
      headlinePart1: { type: String, default: 'The Formulation Engine Behind India’s Leading ' },
      headlineHighlight: { type: String, default: 'Prestige Cosmetics.' },
      subheadline: {
        type: String,
        default:
          'From novel active research and pH-buffered dermal stability to finished luxury packaging, Mani Lifestyle powers high-growth beauty startups, clinical dermatologists, and prestigious salon chains with low MOQ from 500 units.',
      },
      primaryCtaText: { type: String, default: 'Request Formulation Samples' },
      secondaryCtaText: { type: String, default: 'Call Regulatory Plant (+91 97246 81096)' },
      phone: { type: String, default: '+91 97246 81096' },
      image: { type: String, default: '/images/cleanroom-lab.jpg' },
      imageAlt: { type: String, default: 'Mani Lifestyle Sterile Cleanroom Laboratory and Compounding Campus' },
      trustHighlights: [
        {
          id: { type: String },
          title: { type: String },
          subtitle: { type: String },
          icon: { type: String, default: 'FlaskConical' },
        },
      ],
    },
    whoWeAre: {
      eyebrow: { type: String, default: 'WHO WE ARE' },
      title: { type: String, default: 'Crafting Excellence in' },
      highlight: { type: String, default: 'Cosmetics' },
      description: {
        type: String,
        default:
          'Mani Lifestyle is a certified cosmetic manufacturing company and research laboratory based in Ahmedabad, Gujarat. We specialize in crafting high-performance, safe, and skin-friendly cosmetic products using a perfect blend of modern science and traditional botanical pharmacology, offering end-to-end manufacturing solutions from concept to commercial shelf.',
      },
      badges: [
        {
          id: { type: String },
          title: { type: String },
          icon: { type: String, default: 'CheckCircle2' },
        },
      ],
    },
    whyWeExist: {
      eyebrow: { type: String, default: 'Purity, Transparency & Results' },
      title: { type: String, default: 'Why We' },
      highlight: { type: String, default: 'Exist' },
      description: {
        type: String,
        default:
          'In a world full of over-promised beauty products, we stand for purity, transparency, and real results. Our mission is to empower brands with products that are:',
      },
      pillars: [
        {
          id: { type: String },
          num: { type: String },
          title: { type: String },
          subtitle: { type: String },
          tag: { type: String },
          desc: { type: String },
          icon: { type: String, default: 'Leaf' },
          stats: [
            {
              label: { type: String },
              value: { type: String },
            },
          ],
        },
      ],
    },
    whatWeDo: {
      eyebrow: { type: String, default: 'From Concept To Commercial Shelf' },
      title: { type: String, default: 'What We' },
      highlight: { type: String, default: 'Do' },
      description: {
        type: String,
        default:
          'From your initial idea to a finished product in your hand—we handle every stage of cosmetic development and manufacturing.',
      },
      capabilities: [
        {
          num: { type: String },
          stageLabel: { type: String },
          title: { type: String },
          subtitle: { type: String },
          tagline: { type: String },
          desc: { type: String },
          highlight: { type: String },
          icon: { type: String, default: 'Lightbulb' },
        },
      ],
    },
    productExpertise: {
      eyebrow: { type: String, default: 'Skincare, Haircare & Wellness' },
      title: { type: String, default: 'Our Product' },
      highlight: { type: String, default: 'Expertise' },
      description: {
        type: String,
        default:
          'We specialize in a wide range of personal care formulations. Every batch is rigorously batch-tested, safe, and commercial-ready.',
      },
      niches: [
        {
          title: { type: String },
          subtitle: { type: String },
          icon: { type: String, default: 'Droplets' },
          href: { type: String, default: '/products' },
        },
      ],
    },
    vision: {
      eyebrow: { type: String, default: 'Strategic Commitment' },
      title: { type: String, default: 'Our' },
      highlight: { type: String, default: 'Vision' },
      description: {
        type: String,
        default:
          'To be the most trusted cosmetic manufacturing partner in India by focusing relentlessly on three foundational principles',
      },
      principles: [
        {
          category: { type: String },
          title: { type: String },
          desc: { type: String },
          highlight: { type: String },
          icon: { type: String, default: 'Handshake' },
        },
      ],
    },
    infrastructure: {
      eyebrow: { type: String, default: 'Quality & Compounding Excellence' },
      title: { type: String, default: 'Our' },
      highlight: { type: String, default: 'Infrastructure' },
      description: {
        type: String,
        default:
          'Our state-of-the-art facility in Ahmedabad serves as the operational foundation for delivering pharmaceutical-grade quality, purity, and commercial scale',
      },
      image: { type: String, default: '/images/quality.png' },
      imageAlt: { type: String, default: 'Scientists in modern quality testing laboratory' },
      features: [
        {
          title: { type: String },
          desc: { type: String },
          icon: { type: String, default: 'ShieldCheck' },
        },
      ],
    },
    consultationCta: {
      eyebrow: { type: String, default: 'Ready To Build Your Dream Personal Care Brand?' },
      title: { type: String, default: 'Schedule a Direct Consultation With Our Senior Team' },
      highlight: { type: String, default: 'With Our Senior Team' },
      description: {
        type: String,
        default:
          'Visit our state-of-the-art cleanroom manufacturing campus in Ahmedabad or request customized bench formulation prototypes dispatched directly to your desk.',
      },
      primaryBtnText: { type: String, default: 'Request Custom Quote & Formulation Samples' },
      secondaryBtnText: { type: String, default: 'Schedule Plant Tour (+91 97246 81096)' },
      phone: { type: String, default: '+91 97246 81096' },
      whatsappUrl: {
        type: String,
        default: 'https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20am%20interested%20in%20visiting%20your%20Ahmedabad%20cosmetic%20plant.',
      },
    },
  },
  { timestamps: true }
);

export const AboutPage = mongoose.model<IAboutPage>('AboutPage', AboutPageSchema);
