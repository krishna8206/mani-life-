"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutPage = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const AboutPageSchema = new mongoose_1.Schema({
    hero: {
        kicker: { type: String, default: 'State-of-the-Art Compounding Campus • Ahmedabad, India' },
        headlinePart1: { type: String, default: 'The Formulation Engine Behind India’s Leading ' },
        headlineHighlight: { type: String, default: 'Prestige Cosmetics.' },
        subheadline: {
            type: String,
            default: 'From novel active research and pH-buffered dermal stability to finished luxury packaging, Mani Lifestyle powers high-growth beauty startups, clinical dermatologists, and prestigious salon chains with low MOQ from 500 units.',
        },
        primaryCtaText: { type: String, default: 'Request Formulation Samples' },
        secondaryCtaText: { type: String, default: 'Call Regulatory Plant (+91 97246 81096)' },
        phone: { type: String, default: '+91 97246 81096' },
        image: { type: String, default: '/images/cleanroom-lab.jpg' },
        imageAlt: { type: String, default: 'Mani Lifestyle Sterile Cleanroom Laboratory and Compounding Campus' },
        trustHighlights: [
            {
                id: { type: String },
                title: { type: String },
                subtitle: { type: String },
                icon: { type: String, default: 'FlaskConical' },
            },
        ],
    },
    whoWeAre: {
        eyebrow: { type: String, default: 'WHO WE ARE' },
        title: { type: String, default: 'Crafting Excellence in' },
        highlight: { type: String, default: 'Cosmetics' },
        description: {
            type: String,
            default: 'Mani Lifestyle is a certified cosmetic manufacturing company and research laboratory based in Ahmedabad, Gujarat. We specialize in crafting high-performance, safe, and skin-friendly cosmetic products using a perfect blend of modern science and traditional botanical pharmacology, offering end-to-end manufacturing solutions from concept to commercial shelf.',
        },
        badges: [
            {
                id: { type: String },
                title: { type: String },
                icon: { type: String, default: 'CheckCircle2' },
            },
        ],
    },
    whyWeExist: {
        eyebrow: { type: String, default: 'Purity, Transparency & Results' },
        title: { type: String, default: 'Why We' },
        highlight: { type: String, default: 'Exist' },
        description: {
            type: String,
            default: 'In a world full of over-promised beauty products, we stand for purity, transparency, and real results. Our mission is to empower brands with products that are:',
        },
        pillars: [
            {
                id: { type: String },
                num: { type: String },
                title: { type: String },
                subtitle: { type: String },
                tag: { type: String },
                desc: { type: String },
                icon: { type: String, default: 'Leaf' },
                stats: [
                    {
                        label: { type: String },
                        value: { type: String },
                    },
                ],
            },
        ],
    },
    whatWeDo: {
        eyebrow: { type: String, default: 'From Concept To Commercial Shelf' },
        title: { type: String, default: 'What We' },
        highlight: { type: String, default: 'Do' },
        description: {
            type: String,
            default: 'From your initial idea to a finished product in your hand—we handle every stage of cosmetic development and manufacturing.',
        },
        capabilities: [
            {
                num: { type: String },
                stageLabel: { type: String },
                title: { type: String },
                subtitle: { type: String },
                tagline: { type: String },
                desc: { type: String },
                highlight: { type: String },
                icon: { type: String, default: 'Lightbulb' },
            },
        ],
    },
    productExpertise: {
        eyebrow: { type: String, default: 'Skincare, Haircare & Wellness' },
        title: { type: String, default: 'Our Product' },
        highlight: { type: String, default: 'Expertise' },
        description: {
            type: String,
            default: 'We specialize in a wide range of personal care formulations. Every batch is rigorously batch-tested, safe, and commercial-ready.',
        },
        niches: [
            {
                title: { type: String },
                subtitle: { type: String },
                icon: { type: String, default: 'Droplets' },
                href: { type: String, default: '/products' },
            },
        ],
    },
    vision: {
        eyebrow: { type: String, default: 'Strategic Commitment' },
        title: { type: String, default: 'Our' },
        highlight: { type: String, default: 'Vision' },
        description: {
            type: String,
            default: 'To be the most trusted cosmetic manufacturing partner in India by focusing relentlessly on three foundational principles',
        },
        principles: [
            {
                category: { type: String },
                title: { type: String },
                desc: { type: String },
                highlight: { type: String },
                icon: { type: String, default: 'Handshake' },
            },
        ],
    },
    infrastructure: {
        eyebrow: { type: String, default: 'Quality & Compounding Excellence' },
        title: { type: String, default: 'Our' },
        highlight: { type: String, default: 'Infrastructure' },
        description: {
            type: String,
            default: 'Our state-of-the-art facility in Ahmedabad serves as the operational foundation for delivering pharmaceutical-grade quality, purity, and commercial scale',
        },
        image: { type: String, default: '/images/quality.png' },
        imageAlt: { type: String, default: 'Scientists in modern quality testing laboratory' },
        features: [
            {
                title: { type: String },
                desc: { type: String },
                icon: { type: String, default: 'ShieldCheck' },
            },
        ],
    },
    consultationCta: {
        eyebrow: { type: String, default: 'Ready To Build Your Dream Personal Care Brand?' },
        title: { type: String, default: 'Schedule a Direct Consultation With Our Senior Team' },
        highlight: { type: String, default: 'With Our Senior Team' },
        description: {
            type: String,
            default: 'Visit our state-of-the-art cleanroom manufacturing campus in Ahmedabad or request customized bench formulation prototypes dispatched directly to your desk.',
        },
        primaryBtnText: { type: String, default: 'Request Custom Quote & Formulation Samples' },
        secondaryBtnText: { type: String, default: 'Schedule Plant Tour (+91 97246 81096)' },
        phone: { type: String, default: '+91 97246 81096' },
        whatsappUrl: {
            type: String,
            default: 'https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20am%20interested%20in%20visiting%20your%20Ahmedabad%20cosmetic%20plant.',
        },
    },
}, { timestamps: true });
exports.AboutPage = mongoose_1.default.model('AboutPage', AboutPageSchema);
