'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Home,
  Info, 
  Award, 
  Sparkles, 
  FlaskConical, 
  Layers,
  HelpCircle, 
  Mail, 
  Inbox, 
  ExternalLink,
  ChevronRight,
  LogOut
} from 'lucide-react';

const navItems = [
  {
    name: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
    badge: null,
  },
  {
    name: 'Home Page',
    href: '/home',
    icon: Home,
    badge: null,
  },
  {
    name: 'About Us',
    href: '/about',
    icon: Info,
    badge: null,
  },
  {
    name: 'Certificate & Awards',
    href: '/certifications',
    icon: Award,
    badge: null,
  },
  {
    name: 'Services',
    href: '/services',
    icon: Sparkles,
    badge: null,
  },
  {
    name: 'Product Range',
    href: '/products',
    icon: FlaskConical,
    badge: null,
  },
  {
    name: 'Categories CMS',
    href: '/categories',
    icon: Layers,
    badge: '6 Verticals',
    badgeColor: 'bg-sky-950/80 text-sky-300 border border-sky-800/80',
  },
  {
    name: 'FAQs',
    href: '/faqs',
    icon: HelpCircle,
    badge: null,
  },
  {
    name: 'Contact Us',
    href: '/contact',
    icon: Mail,
    badge: null,
  },
  {
    name: 'Request Custom Quote',
    href: '/inquiries',
    icon: Inbox,
    badge: '4 New',
    badgeColor: 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/80',
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const handleSignOut = () => {
    try {
      localStorage.removeItem('mani_admin_session');
    } catch {
      // safe fallback
    }
    window.location.href = '/login';
  };

  return (
    <aside className="w-64 bg-[#081a2b] text-slate-200 min-h-screen flex flex-col border-r border-[#14334d] fixed left-0 top-0 bottom-0 z-30 select-none shadow-xl shadow-black/20">
      {/* Brand Header: Deep Obsidian with Radiant White Inverted Logo */}
      <div className="h-16 px-5 flex items-center justify-between border-b border-[#14334d] bg-[#061421]">
        <Link href="/" className="flex items-center justify-between w-full group">
          <div className="flex items-center">
            <Image
              src="/images/mani-lifestyle-logo.png"
              alt="Mani Lifestyle Logo"
              width={130}
              height={32}
              className="h-7 w-auto object-contain brightness-0 invert opacity-95 transition-transform group-hover:scale-[1.02]"
              priority
            />
          </div>
          <span className="text-[9px] font-mono font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full bg-[#164666]/70 text-sky-300 border border-sky-400/30">
            ADMIN
          </span>
        </Link>
      </div>

      {/* Main Navigation: 1:1 Website Header Order */}
      <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
        <div className="text-[10px] uppercase font-semibold text-slate-400 px-3 pb-2.5 tracking-wider">
          Website Pages
        </div>

        {navItems.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all group ${
                isActive
                  ? 'bg-gradient-to-r from-[#164666] to-[#1e608f] text-white shadow-md shadow-[#164666]/30 border border-sky-400/30 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-sky-300' : 'text-slate-400 group-hover:text-sky-300'
                  }`}
                />
                <span className="truncate">{item.name}</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {item.badge && (
                  <span
                    className={`text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white border border-white/30'
                        : item.badgeColor
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
                {isActive && <ChevronRight className="w-3.5 h-3.5 text-sky-300" />}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Clean User Session & Quick Live Site Shortcut with Generous Bottom Padding */}
      <div className="p-3.5 border-t border-[#14334d] bg-[#061421] pb-8">
        <div className="flex items-center justify-between px-1.5 py-1">
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Public Website"
            className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-sky-300 transition-colors group"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-300 transition-colors" />
            <span>Open Live Site</span>
          </a>

          <button
            type="button"
            onClick={handleSignOut}
            title="Sign Out"
            className="text-slate-400 hover:text-red-400 transition-colors p-1.5 rounded-lg hover:bg-white/5 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
