import mongoose, { Schema, Document } from 'mongoose';

export interface IInquiry extends Document {
  id: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  category: string;
  serviceType: 'Private Label' | 'Custom Formulation' | 'Contract Compounding';
  batchSize: string;
  packaging: string;
  notes?: string;
  status: 'NEW' | 'CONTACTED' | 'SAMPLE_DISPATCHED' | 'QUOTED' | 'IN_PRODUCTION' | 'CLOSED';
  source: 'Quote Modal' | 'Contact Page' | 'Direct RFQ';
  createdAt: Date;
}

const InquirySchema = new Schema<IInquiry>(
  {
    id: { type: String, required: true, unique: true, index: true },
    fullName: { type: String, required: true },
    companyName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    category: { type: String, required: true },
    serviceType: {
      type: String,
      enum: ['Private Label', 'Custom Formulation', 'Contract Compounding'],
      default: 'Private Label',
    },
    batchSize: { type: String, required: true },
    packaging: { type: String, required: true },
    notes: { type: String, default: '' },
    status: {
      type: String,
      enum: ['NEW', 'CONTACTED', 'SAMPLE_DISPATCHED', 'QUOTED', 'IN_PRODUCTION', 'CLOSED'],
      default: 'NEW',
      index: true,
    },
    source: {
      type: String,
      enum: ['Quote Modal', 'Contact Page', 'Direct RFQ'],
      default: 'Quote Modal',
    },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Inquiry = mongoose.models.Inquiry || mongoose.model<IInquiry>('Inquiry', InquirySchema);
