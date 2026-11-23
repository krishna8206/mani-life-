import mongoose, { Schema, Document } from 'mongoose';

export interface IWhyChoosePoint {
  title: string;
  description: string;
}

export interface IProduct extends Document {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  tag: string;
  format: string;
  target: string;
  moq: string;
  actives: string[];
  texture: string;
  packagingTypes: string[];
  image: string;
  imageAlt: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  headline: string;
  tagline: string;
  cleanroomBadge: string;
  moqBadge: string;
  overviewParagraphs: string[];
  keyActives: string[];
  skinTypes: string[];
  pH: string;
  packagingOptions: string[];
  whyChoosePoints: IWhyChoosePoint[];
  expandHeadline: string;
  expandParagraphs: string[];
  description: string;
  status: 'ACTIVE' | 'DRAFT';
  leadTime: string;
  regulatory: string[];
  createdAt: Date;
  updatedAt: Date;
}

const WhyChooseSchema = new Schema<IWhyChoosePoint>(
  {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
  },
  { _id: false }
);

const ProductSchema = new Schema<IProduct>(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: { type: String, required: true },
    categorySlug: { type: String, required: true, index: true },
    tag: { type: String, default: 'All Formulations' },
    format: { type: String, default: 'Custom Formulation' },
    target: { type: String, default: 'Universal Skin Profile' },
    moq: { type: String, default: '500 Units' },
    actives: { type: [String], default: [] },
    texture: { type: String, default: '' },
    packagingTypes: { type: [String], default: [] },
    image: { type: String, default: '' },
    imageAlt: { type: String, default: '' },
    eyebrow: { type: String, default: 'Certified Cosmetics Manufacturer • Ahmedabad, India' },
    titleLine1: { type: String, default: '' },
    titleLine2: { type: String, default: 'Manufacturer in India.' },
    headline: { type: String, default: '' },
    tagline: { type: String, default: '' },
    cleanroomBadge: { type: String, default: 'Ahmedabad Cleanroom Compounding' },
    moqBadge: { type: String, default: 'Flexible Low MOQ' },
    overviewParagraphs: { type: [String], default: [] },
    keyActives: { type: [String], default: [] },
    skinTypes: { type: [String], default: [] },
    pH: { type: String, default: 'pH Balanced (5.5)' },
    packagingOptions: { type: [String], default: [] },
    whyChoosePoints: { type: [WhyChooseSchema], default: [] },
    expandHeadline: { type: String, default: '' },
    expandParagraphs: { type: [String], default: [] },
    description: { type: String, default: '' },
    status: {
      type: String,
      enum: ['ACTIVE', 'DRAFT'],
      default: 'ACTIVE',
      index: true,
    },
    leadTime: { type: String, default: '14-21 Business Days' },
    regulatory: { type: [String], default: ['ISO 22716', 'WHO-GMP Compliant'] },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
