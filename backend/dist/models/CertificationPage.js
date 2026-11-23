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
exports.CertificationPage = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const CertificationPageSchema = new mongoose_1.Schema({
    hero: {
        kicker: { type: String, default: 'Quality Accreditations • Ahmedabad, Gujarat' },
        headlinePart1: { type: String, default: 'Trusted & ' },
        headlineHighlight: { type: String, default: 'Certified' },
        subheadline: {
            type: String,
            default: 'Our commitment to excellence is backed by prestigious national and international quality accreditations, ensuring that every cosmetic formulation meets rigorous safety, purity, and clinical dermal benchmarks.',
        },
        primaryCtaText: { type: String, default: 'Request Compliance Dossiers' },
        secondaryCtaText: { type: String, default: 'Contact Regulatory Plant (+91 97246 81096)' },
        phone: { type: String, default: '+91 97246 81096' },
        trustHighlights: [
            {
                id: { type: String },
                title: { type: String },
                subtitle: { type: String },
                icon: { type: String, default: 'ShieldCheck' },
            },
        ],
    },
    certificationsSection: {
        eyebrow: { type: String, default: 'Recognized Regulatory Accreditations' },
        title: { type: String, default: 'Certified for Quality and' },
        highlight: { type: String, default: 'Reliability' },
        description: {
            type: String,
            default: 'Our dedication to high standards is recognized by industry-leading bodies, ensuring every product meets rigorous quality, purity, and safety benchmarks.',
        },
        items: [
            {
                id: { type: String },
                name: { type: String },
                authority: { type: String },
                scope: { type: String },
                importance: { type: String },
                badgeCode: { type: String },
                image: { type: String },
                verified: { type: Boolean, default: true },
            },
        ],
    },
    standardsEditorial: {
        leftBlock: {
            title: { type: String, default: 'Good Manufacturing Practices (GMP)' },
            text: {
                type: String,
                default: 'Our commitment to excellence is deeply woven into every aspect of our manufacturing process. We adhere strictly to Good Manufacturing Practices (GMP), ensuring that all products are consistently produced and controlled according to quality standards appropriate to their intended use.',
            },
            icon: { type: String, default: 'ShieldCheck' },
        },
        rightBlock: {
            title: { type: String, default: 'Quality Systems Accreditation' },
            text: {
                type: String,
                default: 'This rigorous approach, combined with our ISO 9001:2015 certification, guarantees that our clients receive not just products, but a promise of unwavering quality, safety, and reliability. We continuously invest in advanced technology and staff training to uphold and surpass these high benchmarks.',
            },
            icon: { type: String, default: 'Award' },
        },
    },
    qualityPipeline: {
        eyebrow: { type: String, default: 'Quality Assurance Process' },
        title: { type: String, default: 'Our Commitment to' },
        highlight: { type: String, default: 'Quality' },
        description: {
            type: String,
            default: 'Comprehensive cleanroom validation, microbiological testing, and analytical batch verification across every single production stage.',
        },
        image: { type: String, default: '/images/quality.png' },
        imageAlt: { type: String, default: 'Analytical cosmetic laboratory testing and sterile cleanroom validation' },
        steps: [
            {
                step: { type: String },
                title: { type: String },
                desc: { type: String },
            },
        ],
    },
}, { timestamps: true });
exports.CertificationPage = mongoose_1.default.model('CertificationPage', CertificationPageSchema);
