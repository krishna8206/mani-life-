'use client';

import React, { useState, useEffect } from 'react';
import AdminHeader from '@/components/AdminHeader';
import ImageUploadInput from '@/components/ImageUploadInput';
import {
  Save,
  Plus,
  Trash2,
  Eye,
  Check,
  RefreshCw,
  Mail,
  PhoneCall,
  Search,
} from 'lucide-react';

type TabKey = 'hero' | 'channels' | 'form' | 'map' | 'messages';

interface ContactCard {
  id: string;
  category: string;
  primaryText: string;
  secondaryText?: string;
  thirdText?: string;
  link?: string;
  linkText?: string;
  copyable?: boolean;
  copyValue?: string;
  icon: string;
}

interface EmailItem {
  id: string;
  email: string;
  label?: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: 'UNREAD' | 'REPLIED' | 'SCHEDULED';
}

const initialMessages: ContactMessage[] = [
  {
    id: 'MSG-401',
    name: 'Vikram Mehta',
    email: 'vikram@mehtacosmetics.in',
    phone: '+91 98250 11982',
    subject: 'Facility Visit & Cleanroom Audit Booking',
    message:
      'We are planning a batch run of 10,000 units of ceramide barrier moisturizer and would like to audit your Changodar facility next Tuesday.',
    date: '2026-11-18T11:45:00Z',
    status: 'UNREAD',
  },
  {
    id: 'MSG-400',
    name: 'Dr. Neha Sen',
    email: 'drneha@dermapure.com',
    phone: '+91 97120 44556',
    subject: 'Bulk Depilatory Wax Compounding',
    message:
      'Inquiring about white-label Brazilian peel-off wax compounding in 50kg drums or 1kg salon blocks.',
    date: '2026-11-17T16:10:00Z',
    status: 'REPLIED',
  },
  {
    id: 'MSG-399',
    name: 'Amitabh Joshi',
    email: 'ajoshi@organicsalon.co',
    phone: '+91 99244 88712',
    subject: 'Export Regulatory Dossiers for UAE',
    message:
      'Do you provide GSO conformity declarations and certificate of free sale for shipment to Dubai?',
    date: '2026-11-16T10:30:00Z',
    status: 'SCHEDULED',
  },
];

const defaultCmsData = {
  hero: {
    kicker: 'Certified Cosmetics Manufacturer • Ahmedabad, India',
    headlinePart1: 'Contact ',
    headlineHighlight: 'Us.',
    subheadline: "We're here to answer your questions and help you find the right solutions",
    backgroundImage: '/images/contact-hero.webp',
  },
  channels: {
    eyebrow: 'Direct Channels',
    title: 'Contact ',
    highlight: 'Info.',
    description: 'Feel free to ask us any questions\nor business enquiry, we will get back to you soon!',
    contactCards: [
      {
        id: 'card-hours',
        category: 'Shift Operating Hours',
        primaryText: 'Mon – Fri: 8.30am – 5.30pm',
        secondaryText: 'Sat (Alternate): 8.30am – 12.30pm',
        thirdText: '',
        link: '',
        linkText: '',
        copyable: false,
        copyValue: '',
        icon: '/images/icon-time.png',
      },
      {
        id: 'card-phone',
        category: 'Phone Calls',
        primaryText: '+91 97246 81096',
        secondaryText: '',
        thirdText: '',
        link: 'tel:+919724681096',
        linkText: '',
        copyable: true,
        copyValue: '+919724681096',
        icon: '/images/icon-phone.png',
      },
      {
        id: 'card-whatsapp',
        category: 'Instant WhatsApp Chat',
        primaryText: '+91 97246 81096',
        secondaryText: '',
        thirdText: '',
        link: 'https://wa.me/919724681096',
        linkText: 'Chat',
        copyable: false,
        copyValue: '',
        icon: '/images/icon-whatsapp.png',
      },
      {
        id: 'card-location',
        category: 'Factory Cleanroom Address',
        primaryText: 'Plot No. C5, Road No. 5,',
        secondaryText: 'Gopal Charan Industrial Hub,',
        thirdText: 'Bakrol Bajrang, 382430, Ahmedabad',
        link: '',
        linkText: '',
        copyable: true,
        copyValue: 'Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang, 382430, Ahmedabad',
        icon: '/images/icon-location.png',
      },
    ] as ContactCard[],
    emails: [
      {
        id: 'email-1',
        email: 'enquiry@manilifestyle.com',
        label: 'Inquiries',
      },
      {
        id: 'email-2',
        email: 'sales@manilifestyle.com',
        label: 'Sales',
      },
    ] as EmailItem[],
    plantVisit: {
      title: 'Schedule Cleanroom Plant Visit',
      description:
        'Brand founders, salon owners, and procurement teams are warmly invited to inspect our automated vacuum homogenizers, microbiology QA lab, and Class 100,000 cleanroom.',
      buttonText: 'Book Factory Inspection Date',
      whatsappUrl:
        'https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20would%20like%20to%20schedule%20a%20cleanroom%20factory%20inspection%20visit.',
    },
  },
  enquiryForm: {
    eyebrow: 'Send an Inquiry',
    title: 'Enquiry ',
    highlight: 'Form.',
    description: 'Fill in the details below and our formulation compounding team will contact you promptly.',
    nameLabel: 'Name',
    namePlaceholder: 'Enter Your Name',
    emailLabel: 'E-mail',
    emailPlaceholder: 'Enter Your Email',
    phoneLabel: 'Contact Number',
    phonePlaceholder: 'Enter Your Contact Number',
    messageLabel: 'About Your Project',
    messagePlaceholder: 'Tell Us About Your Project',
    submitButtonText: 'Submit',
    scriptUrl:
      'https://script.google.com/macros/s/AKfycbzWRCmWe0G4_I7MpDhdwo_Tm_Vokm2g6BiR14bvRpTPaPDo_deU_wSh99iGSfnSZZGhtA/exec',
    sourceFormTag: 'Contact Us Form',
    successTitle: 'Success! Your query has been submitted.',
    successDescription:
      'Thank you for reaching out to Mani Lifestyle. Our technical and business team has received your inquiry and will contact you shortly.',
    whatsappCtaText: 'Connect via WhatsApp',
    whatsappUrl:
      'https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20have%20submitted%20the%20contact%20enquiry%20form.',
    resetButtonText: 'Submit Another Query',
  },
  facilityMap: {
    eyebrow: 'Manufacturing Headquarters',
    title: 'Visit Our ',
    highlight: 'Cleanroom Facility.',
    subtitle: 'Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang, 382430, Ahmedabad, Gujarat, India.',
    badgeTitle: 'Gopal Charan Industrial Hub',
    badgeSubtitle: '30 minutes from Sardar Vallabhbhai Patel International Airport (AMD)',
    directionsButtonText: 'Get Driving Directions',
    directionsUrl: 'https://maps.google.com/?q=Gopal+Charan+Industrial+Hub,+Bakrol+Bajrang,+Ahmedabad+382430',
    copyAddressButtonText: 'Copy Address',
    fullAddress: 'Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang, 382430, Ahmedabad',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Gopal+Charan+Industrial+Hub,+Bakrol+Bajrang,+Ahmedabad+382430&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },
};

export default function ContactAdminPage() {
  const [cms, setCms] = useState(defaultCmsData);
  const [activeTab, setActiveTab] = useState<TabKey>('hero');
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Inbound messages state
  const [messages, setMessages] = useState<ContactMessage[]>(initialMessages);
  const [search, setSearch] = useState('');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  useEffect(() => {
    async function fetchContactCms() {
      try {
        setLoading(true);
        const res = await fetch('https://mani-life-1n34.vercel.app/api/contact-page');
        if (res.ok) {
          const data = await res.json();
          if (data && data.hero) {
            setCms({
              hero: { ...defaultCmsData.hero, ...(data.hero || {}) },
              channels: {
                ...defaultCmsData.channels,
                ...(data.channels || {}),
                contactCards: data.channels?.contactCards || defaultCmsData.channels.contactCards,
                emails: data.channels?.emails || defaultCmsData.channels.emails,
                plantVisit: { ...defaultCmsData.channels.plantVisit, ...(data.channels?.plantVisit || {}) },
              },
              enquiryForm: { ...defaultCmsData.enquiryForm, ...(data.enquiryForm || {}) },
              facilityMap: { ...defaultCmsData.facilityMap, ...(data.facilityMap || {}) },
            });
          }
        }
      } catch (err) {
        console.error('Failed to load Contact Us CMS data from backend:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchContactCms();
  }, []);

  const handleSave = async () => {
    try {
      setSaving(true);
      const res = await fetch('https://mani-life-1n34.vercel.app/api/contact-page', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cms),
      });

      if (res.ok) {
        showToast('Contact Us Page CMS successfully saved to MongoDB Atlas!');
      } else {
        const err = await res.json();
        showToast(`Save Error: ${err.error || 'Failed to save to MongoDB Atlas'}`);
      }
    } catch (error: any) {
      console.error('Error saving Contact CMS:', error);
      showToast(`Network Error: ${error.message || 'Backend connection failed'}`);
    } finally {
      setSaving(false);
    }
  };

  // -------------------------------------------------------------
  // TAB 2: CONTACT CARDS & EMAILS HANDLERS
  // -------------------------------------------------------------
  const handleAddContactCard = () => {
    const newCard: ContactCard = {
      id: `card-${Date.now()}`,
      category: 'New Contact Channel',
      primaryText: 'Primary contact detail or schedule',
      secondaryText: '',
      thirdText: '',
      link: '',
      linkText: '',
      copyable: false,
      copyValue: '',
      icon: '/images/icon-phone.png',
    };
    setCms((prev) => ({
      ...prev,
      channels: {
        ...prev.channels,
        contactCards: [...(prev.channels.contactCards || []), newCard],
      },
    }));
  };

  const handleUpdateContactCard = (index: number, field: keyof ContactCard, value: any) => {
    const updated = [...(cms.channels.contactCards || [])];
    updated[index] = { ...updated[index], [field]: value };
    setCms((prev) => ({
      ...prev,
      channels: { ...prev.channels, contactCards: updated },
    }));
  };

  const handleDeleteContactCard = (index: number) => {
    const updated = cms.channels.contactCards.filter((_, i) => i !== index);
    setCms((prev) => ({
      ...prev,
      channels: { ...prev.channels, contactCards: updated },
    }));
  };

  const handleAddEmail = () => {
    const newEmail: EmailItem = {
      id: `email-${Date.now()}`,
      email: 'newemail@manilifestyle.com',
      label: 'Department',
    };
    setCms((prev) => ({
      ...prev,
      channels: {
        ...prev.channels,
        emails: [...(prev.channels.emails || []), newEmail],
      },
    }));
  };

  const handleUpdateEmail = (index: number, field: keyof EmailItem, value: string) => {
    const updated = [...(cms.channels.emails || [])];
    updated[index] = { ...updated[index], [field]: value };
    setCms((prev) => ({
      ...prev,
      channels: { ...prev.channels, emails: updated },
    }));
  };

  const handleDeleteEmail = (index: number) => {
    const updated = cms.channels.emails.filter((_, i) => i !== index);
    setCms((prev) => ({
      ...prev,
      channels: { ...prev.channels, emails: updated },
    }));
  };

  // Inbound messages filtering
  const filteredMessages = messages.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggleStatus = (id: string) => {
    setMessages(
      messages.map((m) =>
        m.id === id ? { ...m, status: m.status === 'UNREAD' ? 'REPLIED' : 'UNREAD' } : m
      )
    );
  };

  return (
    <div className="flex-1 flex flex-col bg-[#06131f] text-slate-200 font-sans min-h-screen">
      <AdminHeader
        title="Contact Us Page CMS"
        subtitle="Manage hero banner, contact channels, inquiry form settings, cleanroom plant visit, and interactive location map with live MongoDB Atlas synchronization"
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-950/95 border border-emerald-500/80 text-emerald-200 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-300">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      <div className="p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
        {/* Unified Top Control Bar */}
        <div className="bg-[#0b2136] p-5 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#14334d]/80">
            <div>
              <h2 className="text-sm font-semibold text-white">Contact Page Studio</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Live URL:{' '}
                <a
                  href="http://localhost:3000/contact"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:underline font-mono"
                >
                  http://localhost:3000/contact
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="http://localhost:3000/contact"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-medium bg-[#06131f] text-slate-300 hover:text-white border border-[#14334d] flex items-center gap-1.5 transition-all"
              >
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span>Preview Live Page</span>
              </a>

              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950 flex items-center gap-1.5 cursor-pointer disabled:opacity-50 transition-all"
              >
                {saving ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Saving to MongoDB...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    <span>Save All Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Clean Tab Bar: flex-wrap, no icons, no sliders */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: 'hero', label: '1. Hero Banner' },
              { key: 'channels', label: '2. Contact Channels & Plant Visit' },
              { key: 'form', label: '3. Enquiry Form Settings' },
              { key: 'map', label: '4. Facility Map & Directions' },
              { key: 'messages', label: `5. Inbound Messages (${messages.length})` },
            ].map((tab) => {
              const isSelected = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key as TabKey)}
                  className={`px-3.5 py-2 rounded-xl text-xs transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-gradient-to-r from-sky-600 to-[#164666] text-white shadow-md shadow-sky-950 border border-sky-400/50 font-semibold'
                      : 'bg-[#06131f]/70 text-slate-300 hover:text-white hover:bg-[#06131f] border border-[#14334d] font-normal'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {loading ? (
          <div className="bg-[#0b2136] rounded-2xl p-12 text-center border border-[#163e5c]">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto text-sky-400 mb-2" />
            <span className="text-xs text-slate-400">Loading Contact content from MongoDB Atlas...</span>
          </div>
        ) : (
          <div className="space-y-6">
            {/* ======================================================== */}
            {/* TAB 1: HERO BANNER                                       */}
            {/* ======================================================== */}
            {activeTab === 'hero' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 1: Hero Banner</h3>
                  <p className="text-xs text-slate-400">
                    Controls the opening masthead statement, kicker, headline accents, subtitle, and hero background image.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Micro-Header Kicker</label>
                    <input
                      type="text"
                      value={cms.hero.kicker}
                      onChange={(e) => setCms({ ...cms, hero: { ...cms.hero, kicker: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Part 1</label>
                    <input
                      type="text"
                      value={cms.hero.headlinePart1}
                      onChange={(e) => setCms({ ...cms, hero: { ...cms.hero, headlinePart1: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Headline Highlight (Accent)</label>
                    <input
                      type="text"
                      value={cms.hero.headlineHighlight}
                      onChange={(e) => setCms({ ...cms, hero: { ...cms.hero, headlineHighlight: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Subheadline Narrative</label>
                    <textarea
                      rows={3}
                      value={cms.hero.subheadline}
                      onChange={(e) => setCms({ ...cms, hero: { ...cms.hero, subheadline: e.target.value } })}
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white leading-relaxed focus:outline-hidden focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <ImageUploadInput
                      label="Hero Background Image"
                      value={cms.hero.backgroundImage}
                      onChange={(url) => setCms({ ...cms, hero: { ...cms.hero, backgroundImage: url } })}
                      folder="mani-lifestyle/contact"
                      placeholder="/images/contact-hero.webp"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 2: CONTACT CHANNELS & PLANT VISIT                     */}
            {/* ======================================================== */}
            {activeTab === 'channels' && (
              <div className="space-y-6">
                {/* Column Header Settings */}
                <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
                  <div className="border-b border-[#14334d] pb-3">
                    <h3 className="text-sm font-semibold text-white">Left Column: Direct Channels Header</h3>
                    <p className="text-xs text-slate-400">
                      Controls the title, eyebrow, and introductory description narrative above contact cards.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Eyebrow</label>
                      <input
                        type="text"
                        value={cms.channels.eyebrow}
                        onChange={(e) =>
                          setCms({ ...cms, channels: { ...cms.channels, eyebrow: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Title</label>
                      <input
                        type="text"
                        value={cms.channels.title}
                        onChange={(e) =>
                          setCms({ ...cms, channels: { ...cms.channels, title: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Highlight</label>
                      <input
                        type="text"
                        value={cms.channels.highlight}
                        onChange={(e) =>
                          setCms({ ...cms, channels: { ...cms.channels, highlight: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label className="block text-slate-300 font-medium mb-1">Description Narrative</label>
                      <textarea
                        rows={3}
                        value={cms.channels.description}
                        onChange={(e) =>
                          setCms({ ...cms, channels: { ...cms.channels, description: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white leading-relaxed"
                      />
                    </div>
                  </div>
                </div>

                {/* Repeatable Contact Cards (Add / Edit / Delete) */}
                <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-[#14334d] pb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        Information Cards ({cms.channels.contactCards?.length || 0})
                      </h3>
                      <p className="text-xs text-slate-400">
                        Shift operating hours, direct phone, WhatsApp chat, and physical factory address cards.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddContactCard}
                      className="px-3 py-1.5 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Contact Card</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {cms.channels.contactCards?.map((card, idx) => (
                      <div
                        key={card.id || idx}
                        className="p-4 bg-[#06131f] rounded-2xl border border-[#14334d] space-y-3"
                      >
                        <div className="flex items-center justify-between border-b border-[#14334d]/60 pb-2">
                          <span className="text-xs font-mono font-bold text-sky-400">
                            Card #{idx + 1}: {card.category || 'Contact Item'}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleDeleteContactCard(idx)}
                            className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                            title="Delete Card"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Card Category / Eyebrow</label>
                            <input
                              type="text"
                              value={card.category}
                              onChange={(e) => handleUpdateContactCard(idx, 'category', e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white"
                              placeholder="e.g. Shift Operating Hours"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Primary Line / Text</label>
                            <input
                              type="text"
                              value={card.primaryText}
                              onChange={(e) => handleUpdateContactCard(idx, 'primaryText', e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white font-medium"
                              placeholder="e.g. Mon – Fri: 8.30am – 5.30pm"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Secondary Line (Optional)</label>
                            <input
                              type="text"
                              value={card.secondaryText || ''}
                              onChange={(e) => handleUpdateContactCard(idx, 'secondaryText', e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white"
                              placeholder="e.g. Sat: 8.30am – 12.30pm"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Third Line (Address/Notes)</label>
                            <input
                              type="text"
                              value={card.thirdText || ''}
                              onChange={(e) => handleUpdateContactCard(idx, 'thirdText', e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white"
                              placeholder="e.g. Bakrol Bajrang, Ahmedabad"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Clickable Link (tel/url)</label>
                            <input
                              type="text"
                              value={card.link || ''}
                              onChange={(e) => handleUpdateContactCard(idx, 'link', e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-sky-400 font-mono text-[11px]"
                              placeholder="tel:+919724681096 or https://wa.me/..."
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] text-slate-400 mb-0.5">Link Button Text (e.g. Chat)</label>
                            <input
                              type="text"
                              value={card.linkText || ''}
                              onChange={(e) => handleUpdateContactCard(idx, 'linkText', e.target.value)}
                              className="w-full px-2.5 py-1.5 bg-[#0b2136] border border-[#163e5c] rounded text-white"
                              placeholder="e.g. Chat"
                            />
                          </div>

                          <div className="md:col-span-2">
                            <ImageUploadInput
                              label="Icon Image Path"
                              value={card.icon}
                              onChange={(url) => handleUpdateContactCard(idx, 'icon', url)}
                              folder="mani-lifestyle/icons"
                              placeholder="/images/icon-time.png"
                            />
                          </div>

                          <div className="flex items-center gap-3 pt-4">
                            <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                              <input
                                type="checkbox"
                                checked={card.copyable || false}
                                onChange={(e) => handleUpdateContactCard(idx, 'copyable', e.target.checked)}
                                className="rounded border-[#163e5c] text-sky-500 focus:ring-0"
                              />
                              <span className="text-[11px]">Enable 1-Click Copy</span>
                            </label>
                            {card.copyable && (
                              <input
                                type="text"
                                value={card.copyValue || ''}
                                onChange={(e) => handleUpdateContactCard(idx, 'copyValue', e.target.value)}
                                className="flex-1 px-2.5 py-1 bg-[#0b2136] border border-[#163e5c] rounded text-white text-[11px]"
                                placeholder="Exact text to copy to clipboard"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Official Emails Management (Add / Edit / Delete) */}
                <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
                  <div className="flex items-center justify-between border-b border-[#14334d] pb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        Official Email Addresses ({cms.channels.emails?.length || 0})
                      </h3>
                      <p className="text-xs text-slate-400">
                        Displays in the official emails card with individual 1-click clipboard copy actions.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddEmail}
                      className="px-3 py-1.5 bg-[#06131f] hover:bg-sky-950 text-sky-300 border border-[#14334d] rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Email</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cms.channels.emails?.map((em, eIdx) => (
                      <div
                        key={em.id || eIdx}
                        className="p-3 bg-[#06131f] rounded-xl border border-[#14334d] flex items-center gap-3 text-xs"
                      >
                        <div className="flex-1 space-y-1">
                          <input
                            type="email"
                            value={em.email}
                            onChange={(e) => handleUpdateEmail(eIdx, 'email', e.target.value)}
                            className="w-full px-2.5 py-1 bg-[#0b2136] border border-[#163e5c] rounded text-white font-medium"
                            placeholder="e.g. enquiry@manilifestyle.com"
                          />
                          <input
                            type="text"
                            value={em.label || ''}
                            onChange={(e) => handleUpdateEmail(eIdx, 'label', e.target.value)}
                            className="w-full px-2.5 py-1 bg-[#0b2136] border border-[#163e5c] rounded text-slate-400 text-[11px]"
                            placeholder="Department Label (e.g. Inquiries, Sales)"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => handleDeleteEmail(eIdx)}
                          className="text-slate-500 hover:text-rose-400 transition-colors p-2"
                          title="Delete Email"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cleanroom Plant Visit Callout Box */}
                <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
                  <div className="border-b border-[#14334d] pb-3">
                    <h3 className="text-sm font-semibold text-white">Cleanroom Plant Visit Callout Box</h3>
                    <p className="text-xs text-slate-400">
                      Controls the dedicated plant inspection booking banner below contact cards.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Callout Title</label>
                      <input
                        type="text"
                        value={cms.channels.plantVisit.title}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            channels: {
                              ...cms.channels,
                              plantVisit: { ...cms.channels.plantVisit, title: e.target.value },
                            },
                          })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Button Text</label>
                      <input
                        type="text"
                        value={cms.channels.plantVisit.buttonText}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            channels: {
                              ...cms.channels,
                              plantVisit: { ...cms.channels.plantVisit, buttonText: e.target.value },
                            },
                          })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-slate-300 font-medium mb-1">Inspection Narrative</label>
                      <textarea
                        rows={4}
                        value={cms.channels.plantVisit.description}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            channels: {
                              ...cms.channels,
                              plantVisit: { ...cms.channels.plantVisit, description: e.target.value },
                            },
                          })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white leading-relaxed"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-slate-300 font-medium mb-1">WhatsApp Booking URL</label>
                      <input
                        type="text"
                        value={cms.channels.plantVisit.whatsappUrl}
                        onChange={(e) =>
                          setCms({
                            ...cms,
                            channels: {
                              ...cms.channels,
                              plantVisit: { ...cms.channels.plantVisit, whatsappUrl: e.target.value },
                            },
                          })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-sky-400 font-mono text-[11px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 3: ENQUIRY FORM SETTINGS                             */}
            {/* ======================================================== */}
            {activeTab === 'form' && (
              <div className="space-y-6">
                {/* Header & Copy */}
                <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
                  <div className="border-b border-[#14334d] pb-3">
                    <h3 className="text-sm font-semibold text-white">Section 3: Enquiry Form Header</h3>
                    <p className="text-xs text-slate-400">
                      Controls the title, eyebrow, and introductory text on the right-hand enquiry card.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Eyebrow</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.eyebrow}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, eyebrow: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Title</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.title}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, title: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Highlight</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.highlight}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, highlight: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label className="block text-slate-300 font-medium mb-1">Description</label>
                      <textarea
                        rows={3}
                        value={cms.enquiryForm.description}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, description: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white leading-relaxed"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Labels & Placeholders */}
                <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
                  <div className="border-b border-[#14334d] pb-3">
                    <h3 className="text-sm font-semibold text-white">Form Field Labels & Placeholders</h3>
                    <p className="text-xs text-slate-400">
                      Configure field descriptions, placeholders, and the primary submit button label.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Name Field Label</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.nameLabel}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, nameLabel: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Name Placeholder</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.namePlaceholder}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, namePlaceholder: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Email Field Label</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.emailLabel}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, emailLabel: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Email Placeholder</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.emailPlaceholder}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, emailPlaceholder: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Phone Field Label</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.phoneLabel}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, phoneLabel: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Phone Placeholder</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.phonePlaceholder}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, phonePlaceholder: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Message Field Label</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.messageLabel}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, messageLabel: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Message Placeholder</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.messagePlaceholder}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, messagePlaceholder: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Submit Button Text</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.submitButtonText}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, submitButtonText: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Source Form Tag</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.sourceFormTag}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, sourceFormTag: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Google Apps Script Endpoint */}
                <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
                  <div className="border-b border-[#14334d] pb-3">
                    <h3 className="text-sm font-semibold text-white">Google Apps Script Integration</h3>
                    <p className="text-xs text-slate-400">
                      Webhook endpoint where form submissions are logged to Google Sheets.
                    </p>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Script Execution Endpoint URL</label>
                    <input
                      type="text"
                      value={cms.enquiryForm.scriptUrl}
                      onChange={(e) =>
                        setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, scriptUrl: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-sky-400 font-mono text-[11px]"
                    />
                  </div>
                </div>

                {/* Success Screen Settings */}
                <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-4">
                  <div className="border-b border-[#14334d] pb-3">
                    <h3 className="text-sm font-semibold text-white">Submission Success Screen</h3>
                    <p className="text-xs text-slate-400">
                      Configure the confirmation view shown after successful form submission.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="md:col-span-2">
                      <label className="block text-slate-300 font-medium mb-1">Success Headline</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.successTitle}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, successTitle: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-slate-300 font-medium mb-1">Success Message Narrative</label>
                      <textarea
                        rows={3}
                        value={cms.enquiryForm.successDescription}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, successDescription: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white leading-relaxed"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">WhatsApp CTA Button Text</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.whatsappCtaText}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, whatsappCtaText: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Reset / Submit Another Button</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.resetButtonText}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, resetButtonText: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-slate-300 font-medium mb-1">WhatsApp Quick Connect URL</label>
                      <input
                        type="text"
                        value={cms.enquiryForm.whatsappUrl}
                        onChange={(e) =>
                          setCms({ ...cms, enquiryForm: { ...cms.enquiryForm, whatsappUrl: e.target.value } })
                        }
                        className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-sky-400 font-mono text-[11px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 4: FACILITY MAP & DIRECTIONS                         */}
            {/* ======================================================== */}
            {activeTab === 'map' && (
              <div className="bg-[#0b2136] p-6 rounded-2xl border border-[#163e5c] shadow-lg space-y-6">
                <div className="border-b border-[#14334d] pb-3">
                  <h3 className="text-sm font-semibold text-white">Section 4: Interactive Facility Map & Directions</h3>
                  <p className="text-xs text-slate-400">
                    Controls facility headlines, transit distance badges, directions link, and embedded Google Maps iframe.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Section Eyebrow</label>
                    <input
                      type="text"
                      value={cms.facilityMap.eyebrow}
                      onChange={(e) =>
                        setCms({ ...cms, facilityMap: { ...cms.facilityMap, eyebrow: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Title</label>
                    <input
                      type="text"
                      value={cms.facilityMap.title}
                      onChange={(e) =>
                        setCms({ ...cms, facilityMap: { ...cms.facilityMap, title: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Highlight</label>
                    <input
                      type="text"
                      value={cms.facilityMap.highlight}
                      onChange={(e) =>
                        setCms({ ...cms, facilityMap: { ...cms.facilityMap, highlight: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-slate-300 font-medium mb-1">Subtitle Address</label>
                    <input
                      type="text"
                      value={cms.facilityMap.subtitle}
                      onChange={(e) =>
                        setCms({ ...cms, facilityMap: { ...cms.facilityMap, subtitle: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Badge Title</label>
                    <input
                      type="text"
                      value={cms.facilityMap.badgeTitle}
                      onChange={(e) =>
                        setCms({ ...cms, facilityMap: { ...cms.facilityMap, badgeTitle: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white font-medium"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Transit / Airport Subtext</label>
                    <input
                      type="text"
                      value={cms.facilityMap.badgeSubtitle}
                      onChange={(e) =>
                        setCms({ ...cms, facilityMap: { ...cms.facilityMap, badgeSubtitle: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Directions Button Text</label>
                    <input
                      type="text"
                      value={cms.facilityMap.directionsButtonText}
                      onChange={(e) =>
                        setCms({ ...cms, facilityMap: { ...cms.facilityMap, directionsButtonText: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Google Maps Redirect URL</label>
                    <input
                      type="text"
                      value={cms.facilityMap.directionsUrl}
                      onChange={(e) =>
                        setCms({ ...cms, facilityMap: { ...cms.facilityMap, directionsUrl: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-sky-400 font-mono text-[11px]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Copy Button Text</label>
                    <input
                      type="text"
                      value={cms.facilityMap.copyAddressButtonText}
                      onChange={(e) =>
                        setCms({ ...cms, facilityMap: { ...cms.facilityMap, copyAddressButtonText: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-300 font-medium mb-1">Full Address String for Clipboard</label>
                    <input
                      type="text"
                      value={cms.facilityMap.fullAddress}
                      onChange={(e) =>
                        setCms({ ...cms, facilityMap: { ...cms.facilityMap, fullAddress: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-white"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label className="block text-slate-300 font-medium mb-1">
                      Interactive Google Maps Embed URL (iframe src)
                    </label>
                    <input
                      type="text"
                      value={cms.facilityMap.mapEmbedUrl}
                      onChange={(e) =>
                        setCms({ ...cms, facilityMap: { ...cms.facilityMap, mapEmbedUrl: e.target.value } })
                      }
                      className="w-full px-3 py-2 bg-[#06131f] border border-[#14334d] rounded-lg text-sky-400 font-mono text-[11px]"
                    />
                  </div>
                </div>

                {/* Map Preview */}
                {cms.facilityMap.mapEmbedUrl && (
                  <div className="mt-4 pt-4 border-t border-[#14334d]">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Live Embed Preview
                    </span>
                    <div className="w-full h-64 rounded-2xl overflow-hidden border border-[#14334d]">
                      <iframe
                        title="Facility Map Preview"
                        src={cms.facilityMap.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 5: INBOUND MESSAGES                                  */}
            {/* ======================================================== */}
            {activeTab === 'messages' && (
              <div className="space-y-6">
                <div className="bg-[#0b2136] p-4 rounded-2xl border border-[#163e5c] shadow-lg flex items-center justify-between">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search contact messages..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="pl-8 pr-3 py-1.5 text-xs bg-[#06131f] border border-[#14334d] rounded-lg w-64 text-slate-200 placeholder-slate-500 focus:outline-hidden focus:ring-1 focus:ring-sky-400 font-normal"
                    />
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    Total Messages:{' '}
                    <span className="text-white font-semibold tabular-nums">{messages.length}</span>
                  </span>
                </div>

                <div className="space-y-4">
                  {filteredMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="bg-[#0b2136] rounded-2xl border border-[#163e5c] p-5 shadow-lg shadow-black/20 hover:border-sky-500/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] text-sky-300 bg-[#081a2b] px-2 py-0.5 rounded border border-[#14334d] font-medium">
                              {msg.id}
                            </span>
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                                msg.status === 'UNREAD'
                                  ? 'bg-amber-950/80 text-amber-300 border-amber-700/80'
                                  : 'bg-emerald-950/80 text-emerald-300 border-emerald-700/80'
                              }`}
                            >
                              {msg.status}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-400">
                            {new Date(msg.date).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                        </div>

                        <h3 className="text-sm font-semibold text-white mt-2 tracking-tight">
                          {msg.subject}
                        </h3>

                        <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                          <span className="font-medium text-slate-200">{msg.name}</span>
                          <span>•</span>
                          <span className="font-mono text-sky-300">{msg.email}</span>
                          <span>•</span>
                          <span>{msg.phone}</span>
                        </div>

                        <p className="text-xs text-slate-300 mt-3 p-3 bg-[#081a2b] rounded-xl border border-[#14334d] leading-relaxed font-normal">
                          {msg.message}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#14334d] flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(msg.id)}
                          className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                        >
                          Mark as {msg.status === 'UNREAD' ? 'Replied' : 'Unread'}
                        </button>

                        <div className="flex items-center gap-2">
                          <a
                            href={`https://wa.me/${msg.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(msg.name)},%20Mani%20Lifestyle%20team%20received%20your%20inquiry.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-emerald-400 hover:bg-emerald-950/60 rounded-lg border border-emerald-700/60 transition-colors"
                            title="WhatsApp"
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href={`mailto:${msg.email}?subject=RE:%20${encodeURIComponent(msg.subject)}`}
                            className="p-1.5 text-sky-400 hover:bg-sky-950/60 rounded-lg border border-sky-700/60 transition-colors"
                            title="Send Email"
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
