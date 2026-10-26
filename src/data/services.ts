export interface ServiceDetail {
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
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "custom-formulation",
    title: "Custom Formulation (ODM)",
    tagline: "Bespoke bench formulation & active chemistry engineered to your brief",
    shortDesc: "End-to-end bespoke product development from concept, active percentage optimization, and sensory prototyping to stability certification.",
    fullDesc: "Our R&D team of cosmetic chemists and Ayurvedic pharmacologists transforms your vision into distinct, market-ready formulations. We specialize in clean chemistry, high-potency cosmeceuticals, and biocompatible textures. You receive 3 iterative bench sampling rounds, viscosity fine-tuning, fragrance profiling, and full clinical stability verification.",
    features: [
      "Custom active compounding (Peptides, Retinoids, Vitamin C, AHA/BHA)",
      "Proprietary texture design (Bi-phase oils, souffle creams, water gels)",
      "Clean beauty compliance (Paraben, sulfate, mineral oil free)",
      "Accelerated thermal & photostability chamber testing (40°C / 75% RH)",
      "Strict confidentiality backed by comprehensive Mutual NDAs",
      "Full formulation IP transfer upon commercial scale-up",
    ],
    deliverables: [
      "Bench Prototype Sample Rounds (100ml / 50g samples)",
      "Certificate of Analysis (COA) & Physicochemical Profile",
      "90-Day Accelerated Stability & Preservative Efficacy Report",
      "Regulatory INCI Ingredient List & Packaging Artwork Text",
    ],
    suitableFor: [
      "D2C brands seeking signature proprietary formulations",
      "Dermatology & medical aesthetic clinics",
      "Celebrity & creator beauty brand launches",
    ],
    timeline: "Initial samples in 7-10 days; Mass production in 30 days",
    moq: "1,000 - 2,500 Units",
  },
  {
    slug: "private-label",
    title: "Private Label Manufacturing (OEM)",
    tagline: "500+ clinically tested, market-proven stock formulations for fast rollout",
    shortDesc: "The fastest, most cost-effective path to launch your brand using our pre-developed, time-tested formulations with custom packaging.",
    fullDesc: "Private label manufacturing allows you to launch high-performance beauty and oral care products without bearing initial R&D development overhead or prolonged stability waiting periods. Choose from our portfolio of 500+ proven formulas across skincare, haircare, toothpaste, and body care, then customize with your signature fragrance, primary packaging, and label branding.",
    features: [
      "Immediate access to 500+ pre-stabilized stock formulas",
      "Low barrier to entry with startup-friendly Low MOQ options",
      "Fast 21-day turnaround to launch products into market",
      "Choice of pre-tested premium packaging containers",
      "Optional fragrance and botanical extract personalization",
      "Pre-verified regulatory compliance for immediate retail distribution",
    ],
    deliverables: [
      "Pre-tested bulk formulation with certified shelf life",
      "Turnkey filled, capped, labeled, and shrink-banded finished units",
      "Batch COA and safety documentation for retail listing",
      "Export ready master outer cartons with barcode labeling",
    ],
    suitableFor: [
      "Early-stage beauty startups & e-commerce entrepreneurs",
      "Salons, spas & luxury hotel chains",
      "Retail chains seeking fast-moving private label lines",
    ],
    timeline: "21 - 25 Business Days",
    moq: "From 500 Units",
  },
  {
    slug: "contract-manufacturing",
    title: "Contract & Third-Party Manufacturing",
    tagline: "High-capacity automated compounding & sterile filling at commercial scale",
    shortDesc: "Precision toll manufacturing for established enterprises, pharmaceutical distributors, and multinational consumer goods companies.",
    fullDesc: "Engineered for high-volume efficiency and zero-defect quality. Our manufacturing facility houses vacuum homogenizing emulsifiers ranging from 100 kg pilot vessels to 3,000 kg production batches, coupled with high-speed automated tube-filling lines, bottle filling systems, and automated cartooning machines.",
    features: [
      "Scalable compounding capacity exceeding 50,000 kg monthly",
      "High-speed automated tube filling with hot-air crimping & coding",
      "Pharmaceutical-grade Class 100,000 cleanroom manufacturing suites",
      "Reverse Osmosis (RO) electro-deionized high-purity water plant",
      "Flexible raw material sourcing: Turnkey or customer-consigned materials",
      "Batch-to-batch consistency with computerized PLC process controls",
    ],
    deliverables: [
      "Full commercial batch release records (BMR / BPR)",
      "Microbiological limit testing certificates per batch",
      "Bulk drum/tote supply or fully packaged finished goods",
      "Palletized, shrink-wrapped export consignments",
    ],
    suitableFor: [
      "Multinational personal care conglomerates",
      "Pharmaceutical distributors & pharmacy chains",
      "Large-scale retail brand procurement teams",
    ],
    timeline: "Scheduled recurring production runs (14-21 day cycles)",
    moq: "5,000 - 50,000+ Units",
  },
  {
    slug: "packaging-solutions",
    title: "Packaging Design & Sourcing Solutions",
    tagline: "Primary container engineering, sustainable plastics & regulatory artwork",
    shortDesc: "Complete primary and secondary packaging integration to ensure product stability, shelf appeal, and international legal compliance.",
    fullDesc: "The right packaging protects formulation stability and drives consumer desire. We offer end-to-end packaging procurement and design services, assisting you in selecting the ideal container compatibility (evaluating airless pump vacuum, UV-blocking amber glass, ABL laminated toothpaste tubes, or PCR post-consumer plastics) alongside regulatory compliant artwork.",
    features: [
      "Compatibility testing with formulation to prevent leaching or chemical reaction",
      "Airless pump dispensers, droppers, aluminum tubes & wide-mouth jars",
      "Eco-friendly PCR (Post-Consumer Recycled) plastic & glass alternatives",
      "Hot-stamping, silk-screen printing, and metallic foil label finishes",
      "Regulatory artwork review for FDA, EU, GCC, and Indian cosmetic labeling laws",
      "Secondary packaging: Luxury rigid boxes, outer unit cartons, tamper seals",
    ],
    deliverables: [
      "Container compatibility test clearance report",
      "Die-cut packaging artwork templates with legal INCI disclosures",
      "Pre-production printed container physical sample mockups",
      "Master shipper carton drop-test validation",
    ],
    suitableFor: [
      "Brands seeking distinct custom shelf aesthetics",
      "Exporters requiring multi-lingual international compliance text",
      "Eco-conscious brands transitioning to sustainable packaging",
    ],
    timeline: "Integrated concurrently with formulation timeline",
    moq: "Aligned with product MOQ",
  },
];
