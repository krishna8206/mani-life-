import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  id: string;
  name: string;
  slug: string;
  aliases: string[];
  description: string;
  productCount: number;
  activeFormulations: number;
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
    paragraphs: { text: string; highlight?: string }[];
    highlights: string[];
  };
  productRange: {
    title: string;
    description: string;
    filterTags: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new Schema<ICategory>(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    aliases: { type: [String], default: [] },
    description: { type: String, default: '' },
    productCount: { type: Number, default: 0 },
    activeFormulations: { type: Number, default: 0 },
    image: { type: String, default: '' },
    featuredActives: { type: [String], default: [] },
    hero: {
      title: { type: String, default: '' },
      subtitle: { type: String, default: '' },
      bgImage: { type: String, default: '' },
    },
    manufacturerSection: {
      title: { type: String, default: '' },
      subtitle: { type: String, default: '' },
      image: { type: String, default: '' },
      imageAlt: { type: String, default: '' },
      plantBadge: { type: String, default: 'Ahmedabad Manufacturing Plant' },
      moqBadge: { type: String, default: 'Flexible Low MOQ' },
      paragraphs: [
        {
          text: { type: String, default: '' },
          highlight: { type: String, default: '' },
        },
      ],
      highlights: { type: [String], default: [] },
    },
    productRange: {
      title: { type: String, default: '' },
      description: { type: String, default: '' },
      filterTags: { type: [String], default: [] },
    },
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);
