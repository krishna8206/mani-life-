import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuickActionBar from "@/components/QuickActionBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mani Lifestyle | Certified Cosmetics Manufacturer • Ahmedabad, India",
  description:
    "Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.",
  keywords: [
    "Mani Lifestyle",
    "manilifestyle.com",
    "cosmetics manufacturer Ahmedabad",
    "custom skincare manufacturer India",
    "white-label haircare manufacturer",
    "private label face serum",
    "salon facial kit manufacturer",
    "salon hair botox manufacturer",
    "depilatory wax manufacturer",
    "third party cosmetics manufacturing India",
    "low MOQ cosmetic manufacturer",
  ],
  openGraph: {
    title: "Mani Lifestyle | Custom & White-Label Skincare & Haircare Manufacturer",
    description:
      "Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.",
    url: "https://manilifestyle.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-[#0f172a] font-sans selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <QuickActionBar />
      </body>
    </html>
  );
}
