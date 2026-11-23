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
exports.ProductRangePage = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const ProductRangePageSchema = new mongoose_1.Schema({
    hero: {
        kicker: { type: String, default: 'Certified Cosmetics Manufacturer • Ahmedabad, India' },
        headlinePart1: { type: String, default: 'All Product ' },
        headlineHighlight: { type: String, default: 'Range.' },
        subtitle: { type: String, default: 'Explore our comprehensive formulations for your brand.' },
        introBox: {
            type: String,
            default: 'Whether you are seeking contract manufacturing, private label, or starting your own start-up brand, we offer tailored formulations across all product ranges for your brand.',
        },
        searchPlaceholder: {
            type: String,
            default: 'Search formulations across all ranges (Shampoo, Serum, Scrub)...',
        },
    },
    personalCareSection: {
        eyebrow: { type: String, default: 'Signature Collection' },
        title: { type: String, default: 'Personal Care ' },
        highlight: { type: String, default: 'Range' },
        description: {
            type: String,
            default: 'Thoughtfully formulated essentials for everyday care — crafted with nature’s best and the science of skincare.',
        },
        cards: [
            {
                id: { type: String },
                title: { type: String },
                categorySlug: { type: String },
                archImage: { type: String },
                icon: { type: String, default: 'ShampooIcon' },
                items: [{ type: String }],
            },
        ],
    },
    skinCareSection: {
        eyebrow: { type: String, default: 'Dermatological & Cosmetic Actives' },
        title: { type: String, default: 'Skin Care ' },
        highlight: { type: String, default: 'Range' },
        description: {
            type: String,
            default: 'From clarifying AHA/BHA cleansers and stabilized vitamin serums to broad-spectrum sunscreens, custom compounded for clinical efficacy.',
        },
        categories: [
            {
                id: { type: String },
                title: { type: String },
                categorySlug: { type: String },
                tag: { type: String },
                archImage: { type: String },
                icon: { type: String, default: 'Droplets' },
                items: [{ type: String }],
            },
        ],
    },
    ctaSection: {
        badge: {
            type: String,
            default: 'Proudly Made in India • End-to-End Manufacturing • Low MOQ from 500 Units',
        },
        heading: { type: String, default: 'Ready to Build Your Dream' },
        highlight: { type: String, default: 'Personal Care Brand in India?' },
        description: {
            type: String,
            default: 'Our state-of-the-art Ahmedabad (Gujarat, India) compounding campus develops custom formulations, bespoke active percentages, and complete finished packaging for Indian and global brands.',
        },
        primaryButtonText: { type: String, default: 'Submit Enquiry' },
        secondaryButtonText: { type: String, default: 'Call +91 97246 81096' },
        phone: { type: String, default: '+91 97246 81096' },
    },
}, {
    timestamps: true,
});
exports.ProductRangePage = mongoose_1.default.models.ProductRangePage ||
    mongoose_1.default.model('ProductRangePage', ProductRangePageSchema);
