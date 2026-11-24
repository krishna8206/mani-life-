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
    id: "who-gmp",
    name: "WHO-GMP Compliant",
    authority: "World Health Organization",
    scope: "Cleanroom Class 100,000 protocols.",
    importance: "Cleanroom Class 100,000 protocols.",
    badgeCode: "WHO-GMP / 2026",
    image: "/images/certifications/who-gmp.png",
    verified: true,
    themeKey: "green",
  },
  {
    id: "iso-22716",
    name: "ISO 22716:2007 Cosmetics",
    authority: "International Organization for Standardization.",
    scope: "Audited traceability and QA validation.",
    importance: "Audited traceability and QA validation.",
    badgeCode: "ISO 22716 : 2007",
    image: "/images/certifications/iso-22716.png",
    verified: true,
    themeKey: "blue",
  },
  {
    id: "fda",
    name: "FDA Approved Facility",
    authority: "Food & Drugs Control.",
    scope: "State-certified manufacturing facility.",
    importance: "State-certified manufacturing facility.",
    badgeCode: "FDA / GUJ / COS-119",
    image: "/images/certifications/fda-approved.png",
    verified: true,
    themeKey: "orange",
  },
  {
    id: "halal",
    name: "Halal Certified Manufacturing",
    authority: "Halal Trust of India.",
    scope: "Compliant for global export markets.",
    importance: "Compliant for global export markets.",
    badgeCode: "HALAL / AUTH-882",
    image: "/images/certifications/ministry.png",
    verified: true,
    themeKey: "purple",
  },
  {
    id: "cruelty-free",
    name: "Cruelty Free & Vegan Bases",
    authority: "Ethical Quality Benchmark.",
    scope: "Cruelty-free botanical active testing.",
    importance: "Cruelty-free botanical active testing.",
    badgeCode: "CRUELTY-FREE / 100%",
    image: "/images/certifications/cruelty-free.png",
    verified: true,
    themeKey: "cyan",
  },
];
