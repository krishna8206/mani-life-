'use client';

import React from 'react';
import { Bell, Search, RefreshCw, ShieldCheck } from 'lucide-react';

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

export default function AdminHeader({
  title,
  subtitle,
  onRefresh,
  isRefreshing = false,
}: AdminHeaderProps) {
  return (
    <header className="h-16 bg-[#081a2b]/95 backdrop-blur-md border-b border-[#14334d] px-8 flex items-center justify-between sticky top-0 z-20 shadow-sm">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-lg font-semibold text-white tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs text-slate-400 font-normal mt-0.5">{subtitle}</p>
        )}
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Search Input */}
        <div className="relative hidden md:block">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search RFQs, products, brands..."
            className="pl-8 pr-3 py-1.5 text-xs bg-[#06131f] border border-[#14334d] rounded-lg w-64 focus:outline-hidden focus:ring-1 focus:ring-sky-400 focus:border-sky-400 transition-all text-slate-200 placeholder-slate-500 font-normal"
          />
        </div>

        {/* Refresh Action */}
        {onRefresh && (
          <button
            onClick={onRefresh}
            title="Refresh Data"
            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg border border-[#14334d] transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-sky-400' : ''}`} />
          </button>
        )}

        {/* Notification Bell */}
        <div className="relative">
          <button 
            title="Plant Notifications" 
            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg border border-[#14334d] transition-colors relative"
          >
            <Bell className="w-3.5 h-3.5" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 absolute top-1.5 right-1.5 ring-2 ring-[#081a2b]" />
          </button>
        </div>

        {/* Status Chip */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#0b2840] text-sky-300 border border-sky-500/30 rounded-full text-[11px] font-medium tracking-wide">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
          <span>API Connected (5000)</span>
        </div>
      </div>
    </header>
  );
}
