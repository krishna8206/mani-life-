import mongoose, { Schema, Document } from 'mongoose';

export interface ITrustIndicator {
  id: string;
  line1: string;
  line2: string;
  icon: string;
}

export interface IServiceItem {
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

export interface IProcessStage {
  step: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface IModulationStep {
  stepNumber: string;
  stepLabel: string;
  title: string;
  description: string;
  icon: string;
}

export interface IServicesPage extends Document {
  hero: {
    kicker: string;
    headlinePart1: string;
    headlineHighlight1: string;
    headlineHighlight2: string;
    subheadline: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    phone: string;
    trustIndicators: ITrustIndicator[];
  };
  precisionJourney: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    services: IServiceItem[];
  };
  lifecycleStages: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    stages: IProcessStage[];
  };
  formulaModulation: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    centerDisc: {
      kicker: string;
      title: string;
      description: string;
    };
    steps: IModulationStep[];
  };
  consultationCta: {
    eyebrow: string;
    heading: string;
    highlight: string;
    description: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    phone: string;
    trustPoints: string[];
  };
  updatedAt: Date;
}

const ServicesPageSchema = new Schema<IServicesPage>(
  {
    hero: {
      kicker: { type: String, default: 'CERTIFIED COSMETICS MANUFACTURER · AHMEDABAD, INDIA' },
      headlinePart1: { type: String, default: 'Our Services.' },
      headlineHighlight1: { type: String, default: 'Crafting Your Brand’s' },
      headlineHighlight2: { type: String, default: 'Future.' },
      subheadline: {
        type: String,
        default:
          'Mani Lifestyle crafts custom, innovative cosmetics solutions — turning ideas tailored to your exact requirements from concept to finished skincare, haircare, and personal care formulations.',
      },
      primaryCtaText: { type: String, default: 'Request Custom Formulation Quote' },
      secondaryCtaText: { type: String, default: 'Call +91 97246 81096' },
      phone: { type: String, default: '+91 97246 81096' },
      trustIndicators: [
        {
          id: { type: String },
          line1: { type: String },
          line2: { type: String },
          icon: { type: String, default: 'FlaskConical' },
        },
      ],
    },
    precisionJourney: {
      eyebrow: { type: String, default: 'MANUFACTURING CAPABILITIES' },
      title: { type: String, default: 'Four Precision Models for' },
      highlight: { type: String, default: 'Beauty Brands' },
      description: {
        type: String,
        default:
          'Tailored production frameworks designed around your capital requirements, brand maturity, and retail roll-out velocity.',
      },
      services: [
        {
          id: { type: String },
          slug: { type: String },
          title: { type: String },
          tagline: { type: String },
          shortDesc: { type: String },
          fullDesc: { type: String },
          features: [{ type: String }],
          deliverables: [{ type: String }],
          suitableFor: [{ type: String }],
          timeline: { type: String },
          moq: { type: String },
          image: { type: String },
        },
      ],
    },
    lifecycleStages: {
      eyebrow: { type: String, default: 'END-TO-END MANUFACTURING LIFECYCLE' },
      title: { type: String, default: 'Complete OEM &' },
      highlight: { type: String, default: 'ODM Services' },
      description: {
        type: String,
        default:
          'We turn your ideas that are tailored to your requirements and shape them from concept to a custom skin care product.',
      },
      stages: [
        {
          step: { type: String },
          title: { type: String },
          description: { type: String },
          image: { type: String },
          highlights: [{ type: String }],
        },
      ],
    },
    formulaModulation: {
      eyebrow: { type: String, default: 'FORMULA MODULATION' },
      title: { type: String, default: 'From Your Idea to a' },
      highlight: { type: String, default: 'Perfect Formula' },
      description: {
        type: String,
        default:
          'We make the process simple, transparent, and collaborative — so you get a formula that truly fits your brand.',
      },
      centerDisc: {
        kicker: { type: String, default: 'YOUR VISION' },
        title: { type: String, default: 'OUR FORMULATION' },
        description: {
          type: String,
          default: 'A seamless journey from concept to creation, backed by expertise at every step.',
        },
      },
      steps: [
        {
          stepNumber: { type: String },
          stepLabel: { type: String },
          title: { type: String },
          description: { type: String },
          icon: { type: String },
        },
      ],
    },
    consultationCta: {
      eyebrow: { type: String, default: 'Premier Indian Contract Manufacturing Partner' },
      heading: { type: String, default: 'Ready to Build Your Dream' },
      highlight: { type: String, default: 'Personal Care Brand Together?' },
      description: {
        type: String,
        default:
          'Whether you want to launch with proven stock formulations or engineer bespoke cosmeceuticals, Mani Lifestyle is your certified manufacturing partner.',
      },
      primaryCtaText: { type: String, default: 'Request Custom Quote & Formulation Samples' },
      secondaryCtaText: { type: String, default: 'Schedule Plant Tour (+91 97246 81096)' },
      phone: { type: String, default: '+91 97246 81096' },
      trustPoints: [{ type: String }],
    },
  },
  {
    timestamps: true,
  }
);

export const ServicesPage =
  mongoose.models.ServicesPage || mongoose.model<IServicesPage>('ServicesPage', ServicesPageSchema);
