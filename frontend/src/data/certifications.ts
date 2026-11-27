export interface CertificationTheme {
  primary: string;
  darkAccent: string;
  lightAccent: string;
  cardBorder: string;
  cardBg: string;
  shadowColor: string;
  hexagonBorder: string;
  hexagonGlow: string;
  pillBg: string;
  pillText: string;
  checkBg: string;
}

export interface Certification {
  id: string;
  name: string;
  authority: string;
  scope: string;
  importance: string;
  badgeCode: string;
  image: string;
  verified: boolean;
  themeKey?: "green" | "blue" | "orange" | "purple" | "cyan";
}

export const certificationThemes: Record<string, CertificationTheme> = {
  green: {
    primary: "#16a34a",
    darkAccent: "#15803d",
    lightAccent: "#4ade80",
    cardBorder: "#16a34a",
    cardBg: "linear-gradient(155deg, #f0fdf4 0%, #ffffff 34%, #ffffff 66%, #f0fdf4 100%)",
    shadowColor: "rgba(22, 163, 74, 0.25)",
    hexagonBorder: "#22c55e",
    hexagonGlow: "rgba(34, 197, 94, 0.42)",
    pillBg: "#dcfce7",
    pillText: "#15803d",
    checkBg: "#16a34a",
  },
  blue: {
    primary: "#0284c7",
    darkAccent: "#1d4ed8",
    lightAccent: "#38bdf8",
    cardBorder: "#0284c7",
    cardBg: "linear-gradient(155deg, #f0f9ff 0%, #ffffff 34%, #ffffff 66%, #f0f9ff 100%)",
    shadowColor: "rgba(2, 132, 199, 0.25)",
    hexagonBorder: "#0284c7",
    hexagonGlow: "rgba(2, 132, 199, 0.42)",
    pillBg: "#e0f2fe",
    pillText: "#0369a1",
    checkBg: "#0284c7",
  },
  orange: {
    primary: "#ea580c",
    darkAccent: "#c2410c",
    lightAccent: "#fb923c",
    cardBorder: "#ea580c",
    cardBg: "linear-gradient(155deg, #fff7ed 0%, #ffffff 34%, #ffffff 66%, #fff7ed 100%)",
    shadowColor: "rgba(234, 88, 12, 0.25)",
    hexagonBorder: "#ea580c",
    hexagonGlow: "rgba(234, 88, 12, 0.42)",
    pillBg: "#ffedd5",
    pillText: "#c2410c",
    checkBg: "#ea580c",
  },
  purple: {
    primary: "#7c3aed",
    darkAccent: "#6b21a8",
    lightAccent: "#c084fc",
    cardBorder: "#7c3aed",
    cardBg: "linear-gradient(155deg, #faf5ff 0%, #ffffff 34%, #ffffff 66%, #faf5ff 100%)",
    shadowColor: "rgba(124, 58, 237, 0.25)",
    hexagonBorder: "#7c3aed",
    hexagonGlow: "rgba(124, 58, 237, 0.42)",
    pillBg: "#f3e8ff",
    pillText: "#6b21a8",
    checkBg: "#7c3aed",
  },
  cyan: {
    primary: "#0891b2",
    darkAccent: "#0e7490",
    lightAccent: "#22d3ee",
    cardBorder: "#0891b2",
    cardBg: "linear-gradient(155deg, #ecfeff 0%, #ffffff 34%, #ffffff 66%, #ecfeff 100%)",
    shadowColor: "rgba(8, 145, 178, 0.25)",
    hexagonBorder: "#06b6d4",
    hexagonGlow: "rgba(6, 182, 212, 0.42)",
    pillBg: "#cffafe",
    pillText: "#0e7490",
    checkBg: "#0891b2",
  },
};

export const certificationsData: Certification[] = [
  {
    id: "gmp",
    name: "Good Manufacturing Practices",
    authority: "WHO-GMP & ISO 22716:2007 Guidelines",
    scope: "Cosmetics - Good Compounding & Packaging Practices",
    importance: "Cosmetics - Good Compounding & Packaging Practices",
    badgeCode: "GMP CERTIFIED",
    image: "/images/certifications/gmp.png",
    verified: true,
    themeKey: "green",
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015 Accreditation",
    authority: "International Organization for Standardization",
    scope: "Quality Management Systems (QMS) Compliance",
    importance: "Quality Management Systems (QMS) Compliance",
    badgeCode: "ISO 9001:2015",
    image: "/images/certifications/iso.png",
    verified: true,
    themeKey: "blue",
  },
  {
    id: "peta",
    name: "PETA Animal Test-Free",
    authority: "People for the Ethical Treatment of Animals",
    scope: "100% Cruelty-Free & Humane Formulation Ethics",
    importance: "100% Cruelty-Free & Humane Formulation Ethics",
    badgeCode: "CRUELTY-FREE",
    image: "/images/certifications/peta.png",
    verified: true,
    themeKey: "orange",
  },
  {
    id: "fda",
    name: "FDA & FDCA Approved",
    authority: "Food & Drugs Control Administration & US FDA Registered",
    scope: "Mfg. Lic. No.: GC/2040 • Cosmetic Facility & Product Registration",
    importance: "Mfg. Lic. No.: GC/2040 • Cosmetic Facility & Product Registration",
    badgeCode: "FDCA LIC: GC/2040",
    image: "/images/certifications/fda.png",
    verified: true,
    themeKey: "purple",
  },
];
