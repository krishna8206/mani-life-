import mongoose, { Schema, Document } from 'mongoose';

export interface IPersonalCareCard {
  id: string;
  title: string;
  categorySlug: string;
  archImage: string;
  icon: string;
  items: string[];
}

export interface ISkinCareCategory {
  id: string;
  title: string;
  categorySlug: string;
  tag: string;
  archImage: string;
  icon: string;
  items: string[];
}

export interface IProductRangePage extends Document {
  hero: {
    kicker: string;
    headlinePart1: string;
    headlineHighlight: string;
    subtitle: string;
    introBox: string;
    searchPlaceholder: string;
  };
  personalCareSection: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    cards: IPersonalCareCard[];
  };
  skinCareSection: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    categories: ISkinCareCategory[];
  };
  ctaSection: {
    badge: string;
    heading: string;
    highlight: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    phone: string;
  };
  updatedAt: Date;
}

const ProductRangePageSchema = new Schema<IProductRangePage>(
  {
    hero: {
      kicker: { type: String, default: 'Certified Cosmetics Manufacturer • Ahmedabad, India' },
      headlinePart1: { type: String, default: 'All Product ' },
      headlineHighlight: { type: String, default: 'Range.' },
      subtitle: { type: String, default: 'Explore our comprehensive formulations for your brand.' },
      introBox: {
        type: String,
        default:
          'Whether you are seeking contract manufacturing, private label, or starting your own start-up brand, we offer tailored formulations across all product ranges for your brand.',
      },
      searchPlaceholder: {
        type: String,
        default: 'Search formulations across all ranges (Shampoo, Serum, Scrub)...',
      },
    },
    personalCareSection: {
      eyebrow: { type: String, default: 'Signature Collection' },
      title: { type: String, default: 'Personal Care ' },
      highlight: { type: String, default: 'Range' },
      description: {
        type: String,
        default:
          'Thoughtfully formulated essentials for everyday care — crafted with nature’s best and the science of skincare.',
      },
      cards: [
        {
          id: { type: String },
          title: { type: String },
          categorySlug: { type: String },
          archImage: { type: String },
          icon: { type: String, default: 'ShampooIcon' },
          items: [{ type: String }],
        },
      ],
    },
    skinCareSection: {
      eyebrow: { type: String, default: 'Dermatological & Cosmetic Actives' },
      title: { type: String, default: 'Skin Care ' },
      highlight: { type: String, default: 'Range' },
      description: {
        type: String,
        default:
          'From clarifying AHA/BHA cleansers and stabilized vitamin serums to broad-spectrum sunscreens, custom compounded for clinical efficacy.',
      },
      categories: [
        {
          id: { type: String },
          title: { type: String },
          categorySlug: { type: String },
          tag: { type: String },
          archImage: { type: String },
          icon: { type: String, default: 'Droplets' },
          items: [{ type: String }],
        },
      ],
    },
    ctaSection: {
      badge: {
        type: String,
        default: 'Proudly Made in India • End-to-End Manufacturing • Low MOQ from 500 Units',
      },
      heading: { type: String, default: 'Ready to Build Your Dream' },
      highlight: { type: String, default: 'Personal Care Brand in India?' },
      description: {
        type: String,
        default:
          'Our state-of-the-art Ahmedabad (Gujarat, India) compounding campus develops custom formulations, bespoke active percentages, and complete finished packaging for Indian and global brands.',
      },
      primaryButtonText: { type: String, default: 'Submit Enquiry' },
      secondaryButtonText: { type: String, default: 'Call +91 97246 81096' },
      phone: { type: String, default: '+91 97246 81096' },
    },
  },
  {
    timestamps: true,
  }
);

export const ProductRangePage =
  mongoose.models.ProductRangePage ||
  mongoose.model<IProductRangePage>('ProductRangePage', ProductRangePageSchema);
