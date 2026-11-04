export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const navigationLinks: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Certificate & Awards",
    href: "/certifications",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Custom Formulation (ODM)",
        href: "/services/custom-formulation",
      },
      {
        label: "Private Label Manufacturing (OEM)",
        href: "/services/private-label",
      },
      {
        label: "Contract & Third-Party Manufacturing",
        href: "/services/contract-manufacturing",
      },
      {
        label: "Packaging Design & Sourcing",
        href: "/services/packaging-solutions",
      },
      {
        label: "Overview of Solutions",
        href: "/services",
      },
    ],
  },
  {
    label: "Product Range",
    href: "/products",
    children: [
      {
        label: "Complete Product Catalog",
        href: "/products",
        description: "Browse all Mani Lifestyle skincare, personal care & salon ranges",
      },
      {
        label: "Clinical Serums & Actives",
        href: "/products/skincare-serums",
        description: "Vitamin C, Niacinamide, Retinol, Salicylic & Glass Skin elixirs",
      },
      {
        label: "Cleansers, Toners & Peels",
        href: "/products/cleansers-toners",
        description: "Tea tree face washes, coffee scrubs, micellar water & AHA/BHA peels",
      },
      {
        label: "Sunscreens & Moisturizers",
        href: "/products/suncare-moisturizers",
        description: "Invisible gel sunscreens SPF 50+ & day/night ceramide barrier creams",
      },
      {
        label: "Professional Salon & Facial Kits",
        href: "/products/salon-treatments",
        description: "6-Step Diamond & Gold facial therapies, de-tan packs & bleach creams",
      },
      {
        label: "Haircare & Salon Botox",
        href: "/products/haircare-treatments",
        description: "Rosemary anti-hairfall shampoos, Moroccan Argan & keratin systems",
      },
      {
        label: "Professional Waxing Range",
        href: "/products/waxing-depilatory",
        description: "Brazilian stripless hot wax, chocolate liposoluble wax & pre/post oils",
      },
      {
        label: "Body Care, Scrubs & Salts",
        href: "/products/body-bath-wellness",
        description: "Whipped cocoa butters, slimming gels, refining scrubs & mineral salts",
      },
      {
        label: "Face Masks, Eye & Lip Care",
        href: "/products/masks-lip-eye",
        description: "French clay masks, caffeine eye gels, peptide contours & lip balms",
      },
    ],
  },
  {
    label: "FAQs",
    href: "/#faqs",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];
