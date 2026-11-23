import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AdminLayoutShell from '@/components/AdminLayoutShell';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mani Lifestyle | Enterprise Admin Portal',
  description: 'Operations, RFQ Pipeline & Formulation Management for Mani Lifestyle Cosmetics Manufacturing.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased text-slate-100 bg-[#06131f] font-sans">
        <AdminLayoutShell>{children}</AdminLayoutShell>
      </body>
    </html>
  );
}
