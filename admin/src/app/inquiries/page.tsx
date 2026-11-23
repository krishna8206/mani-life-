'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/AdminHeader';
import { initialInquiries } from '@/lib/api';
import { Inquiry, InquiryStatus } from '@/lib/types';
import { 
  Inbox, 
  Search, 
  Filter, 
  Download, 
  PhoneCall, 
  Mail, 
  Eye, 
  X, 
  Calendar, 
  Building2, 
  CheckCircle, 
  Package, 
  Sparkles 
} from 'lucide-react';

const statusPillStyles: Record<InquiryStatus, string> = {
  NEW: 'bg-emerald-950/80 text-emerald-300 border-emerald-700/80',
  CONTACTED: 'bg-sky-950/80 text-sky-300 border-sky-700/80',
  SAMPLE_DISPATCHED: 'bg-amber-950/80 text-amber-300 border-amber-700/80',
  QUOTED: 'bg-indigo-950/80 text-indigo-300 border-indigo-700/80',
  IN_PRODUCTION: 'bg-purple-950/80 text-purple-300 border-purple-700/80',
  CLOSED: 'bg-slate-800 text-slate-300 border-slate-700',
};

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedService, setSelectedService] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeInquiry, setActiveInquiry] = useState<Inquiry | null>(null);

  const filteredInquiries = inquiries.filter((item) => {
    const matchesStatus = selectedStatus === 'ALL' || item.status === selectedStatus;
    const matchesService = selectedService === 'ALL' || item.serviceType === selectedService;
    const matchesSearch =
      item.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesService && matchesSearch;
  });

  const handleStatusChange = (id: string, newStatus: InquiryStatus) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    if (activeInquiry && activeInquiry.id === id) {
      setActiveInquiry({ ...activeInquiry, status: newStatus });
    }
  };

  const handleExportCSV = () => {
    const headers = ['RFQ ID', 'Date', 'Full Name', 'Company Name', 'Email', 'Phone', 'Category', 'Service Type', 'Batch Size', 'Status'];
    const rows = filteredInquiries.map((q) => [
      q.id,
      q.createdAt,
      `"${q.fullName}"`,
      `"${q.companyName}"`,
      q.email,
      q.phone,
      `"${q.category}"`,
      q.serviceType,
      `"${q.batchSize}"`,
      q.status,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `mani_lifestyle_rfqs_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#06131f] text-slate-200">
      <AdminHeader
        title="Custom Formulation & Batch Quotes (RFQ CRM)"
        subtitle="Manage inbound customer formulation inquiries, sample testing, and quotation pipelines"
      />

      <div className="p-8 space-y-6">
        {/* Filter & Search Bar */}
        <div className="bg-[#0b2136] p-4 rounded-2xl border border-[#163e5c] shadow-lg flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search RFQs, brand, name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs bg-[#06131f] border border-[#14334d] rounded-lg w-56 focus:outline-hidden focus:ring-1 focus:ring-sky-400 text-slate-200 placeholder-slate-500"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-slate-400 font-medium">Status:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="text-xs bg-[#06131f] border border-[#14334d] rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-hidden"
              >
                <option value="ALL">All Statuses ({inquiries.length})</option>
                <option value="NEW">New Leads</option>
                <option value="CONTACTED">Contacted</option>
                <option value="SAMPLE_DISPATCHED">Sample Dispatched</option>
                <option value="QUOTED">Quoted</option>
                <option value="IN_PRODUCTION">In Production</option>
                <option value="CLOSED">Closed</option>
              </select>
            </div>

            {/* Service Type Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-slate-400 font-medium">Service:</span>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="text-xs bg-[#06131f] border border-[#14334d] rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-hidden"
              >
                <option value="ALL">All Services</option>
                <option value="Private Label">Private Label</option>
                <option value="Custom Formulation">Custom Formulation</option>
                <option value="Contract Compounding">Contract Compounding</option>
              </select>
            </div>
          </div>

          {/* Export Action */}
          <button
            onClick={handleExportCSV}
            className="px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-[#081a2b] hover:bg-[#0f2b45] rounded-lg transition-colors border border-[#14334d] flex items-center gap-1.5 self-start lg:self-auto"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>

        {/* Inquiries Table */}
        <div className="bg-[#0b2136] rounded-2xl border border-[#163e5c] shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#061421] border-b border-[#14334d] text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-6 py-3.5">ID & Date</th>
                  <th className="px-6 py-3.5">Client & Brand</th>
                  <th className="px-6 py-3.5">Target Formulation</th>
                  <th className="px-6 py-3.5">Batch Tier</th>
                  <th className="px-6 py-3.5">Workflow Status</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#14334d]">
                {filteredInquiries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-center text-slate-500">
                      No formulation inquiries found matching your filters.
                    </td>
                  </tr>
                ) : (
                  filteredInquiries.map((item) => (
                    <tr key={item.id} className="hover:bg-[#0f2d47]/60 transition-colors">
                      {/* ID & Date */}
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-mono font-bold text-sky-400">{item.id}</span>
                          <span className="text-[10px] text-slate-400">
                            {new Date(item.createdAt).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      </td>

                      {/* Brand & Client */}
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-semibold text-white">{item.companyName}</span>
                          <span className="text-[11px] text-slate-300">{item.fullName}</span>
                          <span className="text-[10px] text-slate-400">{item.email}</span>
                        </div>
                      </td>

                      {/* Formulation & Service */}
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-medium text-slate-200">{item.category}</span>
                          <span className="text-[10px] text-sky-400 font-semibold">{item.serviceType}</span>
                        </div>
                      </td>

                      {/* Batch Tier */}
                      <td className="px-6 py-4">
                        <span className="font-mono text-[11px] text-sky-200 bg-[#081a2b] px-2 py-0.5 rounded border border-[#14334d]">
                          {item.batchSize}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4">
                        <select
                          value={item.status}
                          onChange={(e) => handleStatusChange(item.id, e.target.value as InquiryStatus)}
                          className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border cursor-pointer focus:outline-hidden bg-transparent ${statusPillStyles[item.status]}`}
                        >
                          <option value="NEW" className="bg-[#0b2136] text-white">New Lead</option>
                          <option value="CONTACTED" className="bg-[#0b2136] text-white">Contacted</option>
                          <option value="SAMPLE_DISPATCHED" className="bg-[#0b2136] text-white">Sample Dispatched</option>
                          <option value="QUOTED" className="bg-[#0b2136] text-white">Quoted</option>
                          <option value="IN_PRODUCTION" className="bg-[#0b2136] text-white">In Production</option>
                          <option value="CLOSED" className="bg-[#0b2136] text-white">Closed / Completed</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setActiveInquiry(item)}
                            title="View Full Scope"
                            className="p-1.5 text-slate-300 hover:bg-[#081a2b] rounded-lg border border-[#14334d] transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <a
                            href={`https://wa.me/${item.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(item.fullName)},%20Mani%20Lifestyle%20team%20received%20your%20RFQ%20for%20${encodeURIComponent(item.category)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Chat on WhatsApp"
                            className="p-1.5 text-emerald-400 hover:bg-emerald-950/60 rounded-lg border border-emerald-700/60 transition-colors"
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href={`mailto:${item.email}?subject=Mani%20Lifestyle%20Cosmetics%20-%20Quote%20for%20${encodeURIComponent(item.companyName)}`}
                            title="Send Email"
                            className="p-1.5 text-sky-400 hover:bg-sky-950/60 rounded-lg border border-sky-700/60 transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Detail Slideover Modal */}
      {activeInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0b2136] rounded-2xl max-w-xl w-full border border-[#163e5c] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-5 border-b border-[#14334d] flex items-center justify-between bg-[#081a2b]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-sky-400">{activeInquiry.id}</span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${statusPillStyles[activeInquiry.status]}`}>
                  {activeInquiry.status}
                </span>
              </div>
              <button
                onClick={() => setActiveInquiry(null)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-300">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400">Brand / Company</span>
                  <p className="font-bold text-sm text-white mt-0.5">{activeInquiry.companyName}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400">Contact Person</span>
                  <p className="font-medium text-slate-200 mt-0.5">{activeInquiry.fullName}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400">Email Address</span>
                  <p className="font-mono text-slate-300 mt-0.5">{activeInquiry.email}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400">Phone / WhatsApp</span>
                  <p className="font-mono text-slate-300 mt-0.5">{activeInquiry.phone}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#14334d] grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400">Target Category</span>
                  <p className="font-semibold text-white mt-0.5">{activeInquiry.category}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400">Service Model</span>
                  <p className="font-semibold text-sky-400 mt-0.5">{activeInquiry.serviceType}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400">Planned Initial Batch</span>
                  <p className="font-mono font-medium text-sky-200 mt-0.5">{activeInquiry.batchSize}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400">Packaging Sourcing</span>
                  <p className="font-medium text-slate-200 mt-0.5">{activeInquiry.packaging}</p>
                </div>
              </div>

              {activeInquiry.notes && (
                <div className="pt-3 border-t border-[#14334d]">
                  <span className="text-[10px] uppercase font-semibold text-slate-400">Formulation Notes & Benchmark</span>
                  <div className="mt-1 p-3 bg-[#081a2b] border border-[#14334d] rounded-lg text-slate-300 leading-relaxed font-sans">
                    {activeInquiry.notes}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#14334d] bg-[#081a2b] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Update Status:</span>
                <select
                  value={activeInquiry.status}
                  onChange={(e) => handleStatusChange(activeInquiry.id, e.target.value as InquiryStatus)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border cursor-pointer focus:outline-hidden bg-[#0b2136] text-white ${statusPillStyles[activeInquiry.status]}`}
                >
                  <option value="NEW">New Lead</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="SAMPLE_DISPATCHED">Sample Dispatched</option>
                  <option value="QUOTED">Quoted</option>
                  <option value="IN_PRODUCTION">In Production</option>
                  <option value="CLOSED">Closed / Completed</option>
                </select>
              </div>
              <button
                onClick={() => setActiveInquiry(null)}
                className="px-4 py-1.5 text-xs font-medium text-slate-300 bg-[#0b2136] hover:bg-[#0f2d47] rounded-lg border border-[#163e5c] transition-colors"
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
