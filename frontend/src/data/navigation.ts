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
