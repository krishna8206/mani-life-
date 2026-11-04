export interface Certification {
  id: string;
  name: string;
  authority: string;
  scope: string;
  importance: string;
  badgeCode: string;
  image: string;
  verified: boolean;
}

export const certificationsData: Certification[] = [
  {
    id: "gmp",
    name: "Good Manufacturing Practices",
    authority: "WHO-GMP & ISO 22716:2007 Guidelines",
    scope: "Cosmetics - Good Compounding & Packaging Practices",
    importance: "Ensures products are consistently produced, compounded, and controlled to the highest global hygiene and safety standards",
    badgeCode: "GMP CERTIFIED",
    image: "/images/certifications/gmp.png",
    verified: true,
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015 Accreditation",
    authority: "International Organization for Standardization",
    scope: "Quality Management Systems (QMS) Compliance",
    importance: "Guarantees institutional batch consistency, rigorous quality checkpoints, continuous R&D testing, and standardized repeatability",
    badgeCode: "ISO 9001:2015",
    image: "/images/certifications/iso.png",
    verified: true,
  },
  {
    id: "ayush",
    name: "Ministry of AYUSH Licensed",
    authority: "Government of India, Drug Licensing Authority",
    scope: "Classical & Proprietary Ayurvedic Cosmetic Products",
    importance: "Authorizes the lawful commercial compounding and export of certified Ayurvedic, herbal, and therapeutic wellness formulations",
    badgeCode: "AYUSH LICENSED",
    image: "/images/certifications/ministry.png",
    verified: true,
  },
  {
    id: "peta",
    name: "PETA Animal Test-Free",
    authority: "People for the Ethical Treatment of Animals",
    scope: "100% Cruelty-Free & Humane Formulation Ethics",
    importance: "Guarantees absolute zero animal testing across all raw botanical ingredients, active compounds, and finished production batches",
    badgeCode: "CRUELTY-FREE",
    image: "/images/certifications/peta.png",
    verified: true,
  },
  {
    id: "fda",
    name: "FDA & FDCA Approved",
    authority: "Food & Drugs Control Administration & US FDA Registered",
    scope: "Cosmetic Facility & Product Registration",
    importance: "Certified compliance with domestic FDCA Gujarat statutory mandates and US FDA facility registration for seamless international distribution",
    badgeCode: "FDCA & FDA",
    image: "/images/certifications/fda.png",
    verified: true,
  },
];
