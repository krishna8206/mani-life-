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
exports.HomePage = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const HomePageSchema = new mongoose_1.Schema({
    hero: {
        kicker: { type: String, default: 'Certified Cosmetics Manufacturer • Ahmedabad, India' },
        headline: { type: String, default: 'Bring Your Beauty Brand to Life.' },
        subheadline: {
            type: String,
            default: 'Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.',
        },
        primaryCtaText: { type: String, default: 'Request Custom Formulation Quote' },
        secondaryCtaText: { type: String, default: 'Explore Our Capabilities' },
        trustHighlights: [
            {
                id: String,
                title: String,
                subtitle: String,
                icon: String,
                link: String,
            },
        ],
    },
    spatialStage: {
        eyebrow: { type: String, default: 'Core Specializations • Third-Party Manufacturing' },
        title: { type: String, default: 'Our 3 Hero Product Categories.' },
        desc: {
            type: String,
            default: 'Proprietary formulation, in-house cleanroom R&D compounding, and certified contract bottling — engineered for instant market performance and ready to bottle for your brand.',
        },
        trustNodes: [
            {
                id: String,
                title: String,
                desc: String,
                icon: String,
            },
        ],
        heroProducts: [
            {
                id: String,
                name: String,
                category: String,
                tag: String,
                active: Boolean,
            },
        ],
    },
    trustPillars: {
        header: {
            eyebrow: { type: String, default: 'The Mani Advantage' },
            title: { type: String, default: 'Reason to Trust Mani Lifestyle.' },
            desc: { type: String, default: 'Discover why brands choose Mani Lifestyle for their success.' },
        },
        items: [
            {
                id: String,
                num: String,
                title: String,
                desc: String,
                link: String,
                icon: String,
            },
        ],
    },
    certificationsSection: {
        header: {
            eyebrow: { type: String, default: 'Accredited Quality Standards' },
            title: { type: String, default: 'Certified for Quality and Reliability.' },
            desc: {
                type: String,
                default: 'Our dedication to high standards is recognized by industry-leading bodies, ensuring every product meets rigorous quality and safety benchmarks.',
            },
        },
        items: [
            {
                id: String,
                name: String,
                authority: String,
                scope: String,
                importance: String,
                badgeCode: String,
                image: String,
                verified: Boolean,
            },
        ],
    },
    servicesSection: {
        header: {
            eyebrow: { type: String, default: 'WHAT WE DO' },
            title: { type: String, default: 'Our Services' },
            desc: {
                type: String,
                default: 'Formulating & manufacturing high-performance cosmetic solutions in our Ahmedabad cleanroom facility — specifically developed for Indian skin tones, hair textures, and tropical climate conditions.',
            },
        },
        items: [
            {
                id: String,
                num: String,
                title: String,
                desc: String,
                image: String,
                link: String,
            },
        ],
    },
    processSection: {
        header: {
            eyebrow: { type: String, default: 'Spec-To-Shelf Journey • 7 Sequential Steps' },
            title: { type: String, default: 'From Idea to Reality.' },
            desc: {
                type: String,
                default: 'From vision to finished formula — we create custom skincare products that embody your brand identity. Your ideas, tailored to perfection and transformed into market-ready products.',
            },
        },
        items: [
            {
                step: Number,
                label: String,
                title: String,
            },
        ],
    },
    categoriesSection: {
        header: {
            eyebrow: { type: String, default: 'Core Formulation Verticals • Spec-To-Shelf' },
            title: { type: String, default: 'Product Categories in Your Brand.' },
            desc: {
                type: String,
                default: 'We are proud to collaborate with industry-leading partners to create an extensive range of trusted products — formulated and packaged to your brand exact specifications.',
            },
        },
        items: [
            {
                num: String,
                name: String,
                tagline: String,
                description: String,
                tags: [String],
                moq: String,
                slug: String,
                image: String,
            },
        ],
    },
    faqsSection: {
        header: {
            eyebrow: { type: String, default: 'Technical & Commercial Guidance' },
            title: { type: String, default: 'Frequently Asked Questions.' },
            desc: {
                type: String,
                default: 'Clear, transparent answers about our cosmetic formulation capabilities, cleanroom compounding, low startup MOQs, and regulatory compliance.',
            },
        },
        items: [
            {
                question: String,
                answer: String,
            },
        ],
    },
    ctaBanner: {
        eyebrow: { type: String, default: 'Ready To Formulate Your Next Bestselling Line?' },
        heading: { type: String, default: 'Schedule a Direct Consultation With Our Senior Team.' },
        desc: {
            type: String,
            default: 'Visit our state-of-the-art cleanroom manufacturing campus in Ahmedabad or request customized bench formulation prototypes dispatched directly to your desk.',
        },
        buttonText: { type: String, default: 'Request Custom Quote & Formulation Samples' },
        phone: { type: String, default: '+91 97246 81096' },
        whatsappText: {
            type: String,
            default: 'Hello Mani Lifestyle, I am interested in visiting your Ahmedabad cosmetic plant.',
        },
    },
}, {
    timestamps: true,
});
exports.HomePage = mongoose_1.default.models.HomePage || mongoose_1.default.model('HomePage', HomePageSchema);
