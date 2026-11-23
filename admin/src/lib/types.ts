export type InquiryStatus = 'NEW' | 'CONTACTED' | 'SAMPLE_DISPATCHED' | 'QUOTED' | 'IN_PRODUCTION' | 'CLOSED';

export interface Inquiry {
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
  status: InquiryStatus;
  createdAt: string;
  source: 'Quote Modal' | 'Contact Page' | 'Direct RFQ';
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  moq: string;
  actives: string[];
  texture: string;
  packagingTypes: string[];
  status: 'ACTIVE' | 'DRAFT';
  leadTime: string;
  regulatory: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
  featuredActives: string[];
}

export interface DashboardStats {
  totalInquiries: number;
  newInquiriesToday: number;
  activeProducts: number;
  totalCategories: number;
  pendingQuotes: number;
  conversionRate: string;
  recentInquiries: Inquiry[];
}
