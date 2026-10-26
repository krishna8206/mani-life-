export interface Certification {
  id: string;
  name: string;
  authority: string;
  scope: string;
  importance: string;
  badgeCode: string;
  verified: boolean;
}

export const certificationsData: Certification[] = [
  {
    id: "iso-22716",
    name: "ISO 22716:2007",
    authority: "International Organization for Standardization",
    scope: "Cosmetics - Good Manufacturing Practices (GMP) Guidelines",
    importance: "The premier global gold standard for cosmetic safety, hygienic cleanroom production, cross-contamination controls, and rigorous quality audit trails.",
    badgeCode: "COSMETIC GMP",
    verified: true,
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    authority: "Quality Management Systems Accreditation",
    scope: "Design, Formulation, Sourcing, Testing & Manufacturing Systems",
    importance: "Ensures institutional consistency, standardized batch repeatability, continuous improvement, and customer satisfaction metrics across all client production runs.",
    badgeCode: "QMS CERTIFIED",
    verified: true,
  },
  {
    id: "who-gmp",
    name: "WHO-GMP Compliant",
    authority: "World Health Organization Guidelines",
    scope: "Sterile Preparation, Cleanroom Air Quality & Water Purification",
    importance: "Validates our pharmaceutical-grade reverse osmosis water systems and HEPA Class 100,000 cleanroom environments.",
    badgeCode: "WHO-GMP FACILITY",
    verified: true,
  },
  {
    id: "us-fda",
    name: "US FDA Registered Facility",
    authority: "United States Food and Drug Administration",
    scope: "Cosmetic Facility & Product Registration",
    importance: "Pre-registered Facility Establishment Identifier (FEI) facilitating smooth export and customs compliance into the United States and North American markets.",
    badgeCode: "US FDA REGISTERED",
    verified: true,
  },
  {
    id: "ayush",
    name: "Ministry of AYUSH Licensed",
    authority: "Government of India, AYUSH Drug Licensing Authority",
    scope: "Classical & Proprietary Ayurvedic Cosmetic & Wellness Products",
    importance: "Authorizes the lawful commercial compounding and export of certified classical Ayurvedic medicinal and therapeutic cosmetic formulations.",
    badgeCode: "AYUSH APPROVED",
    verified: true,
  },
  {
    id: "cruelty-free-halal",
    name: "Cruelty-Free & Halal Compliant",
    authority: "Global Ethical & Ethical Standards Boards",
    scope: "Zero Animal Testing & Pure Halal-Sourced Emollients & Actives",
    importance: "100% adherence to humane cosmetic ethics; all formulations and raw components are free from animal testing and animal-derived contaminants.",
    badgeCode: "ETHICAL BEAUTY",
    verified: true,
  },
];
