'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/AdminHeader';
import { Plus, Trash2 } from 'lucide-react';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const initialFaqs: FaqItem[] = [
  {
    id: 'FAQ-01',
    category: 'MOQs & Batches',
    question: 'What is the minimum order quantity (MOQ) for custom cosmetic formulation?',
    answer: 'Our MOQ starts at 500 units for standard stock private-label formulations and 1,000 units for fully customized laboratory R&D formulations.',
  },
  {
    id: 'FAQ-02',
    category: 'Turnaround Times',
    question: 'How long does batch manufacturing take from PO to dispatch?',
    answer: 'Initial bench lab samples take 7-10 business days. Full production and packaging runs typically complete within 14-21 business days upon sample approval.',
  },
  {
    id: 'FAQ-03',
    category: 'Quality & Testing',
    question: 'Are all batches accompanied by a Certificate of Analysis (COA)?',
    answer: 'Yes. Every finished batch undergoes microbial challenge testing, pH calibration, and viscosity assays, with an official batch COA provided upon dispatch.',
  },
  {
    id: 'FAQ-04',
    category: 'IP & Non-Disclosure',
    question: 'Is my proprietary formulation protected under NDA?',
    answer: 'Absolutely. We execute formal bilateral Non-Disclosure Agreements (NDAs) ensuring 100% intellectual property protection for all client custom formulations.',
  },
];

export default function FaqsAdminPage() {
  const [faqs, setFaqs] = useState<FaqItem[]>(initialFaqs);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('MOQs & Batches');
  const [answer, setAnswer] = useState('');

  const handleAddFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;
    const newFaq: FaqItem = {
      id: `FAQ-0${faqs.length + 1}`,
      category,
      question: question.trim(),
      answer: answer.trim(),
    };
    setFaqs([...faqs, newFaq]);
    setIsAddOpen(false);
    setQuestion('');
    setAnswer('');
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this FAQ from the website?')) {
      setFaqs(faqs.filter((f) => f.id !== id));
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#06131f] text-slate-200 font-sans">
      <AdminHeader
        title="Frequently Asked Questions (FAQs)"
        subtitle="Manage client inquiries, technical specifications, and regulatory answers displayed on the site"
      />

      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-400 font-medium">
            Active Questions: <span className="text-white font-semibold">{faqs.length}</span>
          </p>
          <button
            onClick={() => setIsAddOpen(true)}
            className="px-4 py-2 text-xs font-semibold bg-[#164666] hover:bg-[#1e608f] text-white rounded-xl transition-all flex items-center gap-1.5 shadow-md border border-sky-400/30"
          >
            <Plus className="w-4 h-4" />
            <span>Add New FAQ</span>
          </button>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-[#0b2136] rounded-2xl border border-[#163e5c] p-5 shadow-lg shadow-black/20 hover:border-sky-500/40 transition-all flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-sky-300 bg-[#081a2b] px-2 py-0.5 rounded border border-[#14334d] font-medium">
                      {faq.id}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 bg-[#081a2b] px-2 py-0.5 rounded border border-[#14334d]">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mt-2 tracking-tight">
                    {faq.question}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(faq.id)}
                  title="Delete FAQ"
                  className="text-slate-400 hover:text-red-400 transition-colors p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0b2136] rounded-2xl max-w-lg w-full border border-[#163e5c] shadow-2xl p-6 text-slate-200">
            <h3 className="text-base font-semibold text-white pb-3 border-b border-[#14334d] tracking-tight">
              Add New FAQ Item
            </h3>

            <form onSubmit={handleAddFaq} className="mt-4 space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Vertical / Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden font-normal"
                >
                  <option value="MOQs & Batches" className="bg-[#0b2136]">MOQs & Batches</option>
                  <option value="Turnaround Times" className="bg-[#0b2136]">Turnaround Times</option>
                  <option value="Quality & Testing" className="bg-[#0b2136]">Quality & Testing</option>
                  <option value="IP & Non-Disclosure" className="bg-[#0b2136]">IP & Non-Disclosure</option>
                  <option value="Packaging & Design" className="bg-[#0b2136]">Packaging & Design</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Question *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Can we customize the fragrance profile?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400 font-normal"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Answer *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Detailed response provided to clients..."
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400 leading-relaxed font-normal"
                />
              </div>

              <div className="pt-3 border-t border-[#14334d] flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddOpen(false)}
                  className="px-4 py-2 text-slate-300 hover:bg-white/5 rounded-lg transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 font-semibold bg-[#164666] hover:bg-[#1e608f] text-white rounded-lg transition-colors border border-sky-400/30"
                >
                  Save Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
