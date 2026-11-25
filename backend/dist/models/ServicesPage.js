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
exports.ServicesPage = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const ServicesPageSchema = new mongoose_1.Schema({
    hero: {
        kicker: { type: String, default: 'CERTIFIED COSMETICS MANUFACTURER · AHMEDABAD, INDIA' },
        headlinePart1: { type: String, default: 'Our Services.' },
        headlineHighlight1: { type: String, default: 'Crafting Your Brand’s' },
        headlineHighlight2: { type: String, default: 'Future.' },
        subheadline: {
            type: String,
            default: 'Mani Lifestyle crafts custom, innovative cosmetics solutions — turning ideas tailored to your exact requirements from concept to finished skincare, haircare, and personal care formulations.',
        },
        primaryCtaText: { type: String, default: 'Request Custom Formulation Quote' },
        secondaryCtaText: { type: String, default: 'Call +91 97246 81096' },
        phone: { type: String, default: '+91 97246 81096' },
        image: { type: String, default: '/images/hero-serums.jpg' },
        imageAlt: {
            type: String,
            default: 'Mani Lifestyle - Bespoke Cosmetics Formulations & Private Label Manufacturing',
        },
        trustIndicators: [
            {
                id: { type: String },
                line1: { type: String },
                line2: { type: String },
                icon: { type: String, default: 'FlaskConical' },
            },
        ],
    },
    precisionJourney: {
        eyebrow: { type: String, default: 'MANUFACTURING CAPABILITIES' },
        title: { type: String, default: 'Four Precision Models for' },
        highlight: { type: String, default: 'Beauty Brands' },
        description: {
            type: String,
            default: 'Tailored production frameworks designed around your capital requirements, brand maturity, and retail roll-out velocity.',
        },
        services: [
            {
                id: { type: String },
                slug: { type: String },
                title: { type: String },
                tagline: { type: String },
                shortDesc: { type: String },
                fullDesc: { type: String },
                features: [{ type: String }],
                deliverables: [{ type: String }],
                suitableFor: [{ type: String }],
                timeline: { type: String },
                moq: { type: String },
                image: { type: String },
            },
        ],
    },
    lifecycleStages: {
        eyebrow: { type: String, default: 'END-TO-END MANUFACTURING LIFECYCLE' },
        title: { type: String, default: 'Complete OEM &' },
        highlight: { type: String, default: 'ODM Services' },
        description: {
            type: String,
            default: 'We turn your ideas that are tailored to your requirements and shape them from concept to a custom skin care product.',
        },
        stages: [
            {
                step: { type: String },
                title: { type: String },
                description: { type: String },
                image: { type: String },
                highlights: [{ type: String }],
            },
        ],
    },
    formulaModulation: {
        eyebrow: { type: String, default: 'FORMULA MODULATION' },
        title: { type: String, default: 'From Your Idea to a' },
        highlight: { type: String, default: 'Perfect Formula' },
        description: {
            type: String,
            default: 'We make the process simple, transparent, and collaborative — so you get a formula that truly fits your brand.',
        },
        centerDisc: {
            kicker: { type: String, default: 'YOUR VISION' },
            title: { type: String, default: 'OUR FORMULATION' },
            description: {
                type: String,
                default: 'A seamless journey from concept to creation, backed by expertise at every step.',
            },
        },
        steps: [
            {
                stepNumber: { type: String },
                stepLabel: { type: String },
                title: { type: String },
                description: { type: String },
                icon: { type: String },
            },
        ],
    },
    consultationCta: {
        eyebrow: { type: String, default: 'Premier Indian Contract Manufacturing Partner' },
        heading: { type: String, default: 'Ready to Build Your Dream' },
        highlight: { type: String, default: 'Personal Care Brand Together?' },
        description: {
            type: String,
            default: 'Whether you want to launch with proven stock formulations or engineer bespoke cosmeceuticals, Mani Lifestyle is your certified manufacturing partner.',
        },
        primaryCtaText: { type: String, default: 'Request Custom Quote & Formulation Samples' },
        secondaryCtaText: { type: String, default: 'Schedule Plant Tour (+91 97246 81096)' },
        phone: { type: String, default: '+91 97246 81096' },
        trustPoints: [{ type: String }],
    },
}, {
    timestamps: true,
});
exports.ServicesPage = mongoose_1.default.models.ServicesPage || mongoose_1.default.model('ServicesPage', ServicesPageSchema);
