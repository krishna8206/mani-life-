'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/AdminHeader';
import { Settings, ShieldCheck, Bell, MapPin, Save, Check } from 'lucide-react';

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [plantName, setPlantName] = useState('Mani Lifestyle Cleanroom Compounding Facility');
  const [plantLocation, setPlantLocation] = useState('Changodar Industrial Estate, Ahmedabad, Gujarat 382213');
  const [notificationEmail, setNotificationEmail] = useState('info@manilifestyle.com');
  const [whatsappAlertNumber, setWhatsappAlertNumber] = useState('+91 97246 81096');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#06131f] text-slate-200 font-sans">
      <AdminHeader
        title="Plant & System Configuration"
        subtitle="Manage manufacturing facility details, alert routing, and team notification channels"
      />

      <div className="p-8 max-w-4xl space-y-6">
        <form onSubmit={handleSave} className="space-y-6">
          {/* Plant Location & Facility */}
          <div className="bg-[#0b2136] rounded-2xl border border-[#163e5c] p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2 tracking-tight">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>Compounding Facility Details</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Facility Name</label>
                <input
                  type="text"
                  value={plantName}
                  onChange={(e) => setPlantName(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400 font-normal"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Plant Location</label>
                <input
                  type="text"
                  value={plantLocation}
                  onChange={(e) => setPlantLocation(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400 font-normal"
                />
              </div>
            </div>
          </div>

          {/* Lead Alerts & Notifications */}
          <div className="bg-[#0b2136] rounded-2xl border border-[#163e5c] p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2 tracking-tight">
              <Bell className="w-4 h-4 text-sky-400" />
              <span>Inbound RFQ & Lead Dispatch Channels</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Notification Email</label>
                <input
                  type="email"
                  value={notificationEmail}
                  onChange={(e) => setNotificationEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400 font-normal"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">WhatsApp Dispatch Line</label>
                <input
                  type="text"
                  value={whatsappAlertNumber}
                  onChange={(e) => setWhatsappAlertNumber(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400 font-normal"
                />
              </div>
            </div>
          </div>

          {/* Compliance & Standards */}
          <div className="bg-[#0b2136] rounded-2xl border border-[#163e5c] p-6 shadow-xl space-y-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2 tracking-tight">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Active Regulatory Certifications</span>
            </h3>
            <p className="text-xs text-slate-400 font-normal leading-relaxed">
              Mani Lifestyle facility holds active licenses for GMP, ISO 22716, FDA Drug Manufacturing License, and Cruelty-Free certification.
            </p>
          </div>

          <div className="flex items-center justify-end gap-3">
            {saved && (
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-4 h-4" /> Settings updated successfully
              </span>
            )}
            <button
              type="submit"
              className="px-6 py-2.5 text-xs font-semibold bg-[#164666] hover:bg-[#1e608f] text-white rounded-xl transition-all shadow-md border border-sky-400/30 flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Configuration</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
