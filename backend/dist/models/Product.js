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
exports.Product = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const WhyChooseSchema = new mongoose_1.Schema({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
}, { _id: false });
const ProductSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: { type: String, required: true },
    categorySlug: { type: String, required: true, index: true },
    tag: { type: String, default: 'All Formulations' },
    format: { type: String, default: 'Custom Formulation' },
    target: { type: String, default: 'Universal Skin Profile' },
    moq: { type: String, default: '500 Units' },
    actives: { type: [String], default: [] },
    texture: { type: String, default: '' },
    packagingTypes: { type: [String], default: [] },
    image: { type: String, default: '' },
    imageAlt: { type: String, default: '' },
    eyebrow: { type: String, default: 'Certified Cosmetics Manufacturer • Ahmedabad, India' },
    titleLine1: { type: String, default: '' },
    titleLine2: { type: String, default: 'Manufacturer in India.' },
    headline: { type: String, default: '' },
    tagline: { type: String, default: '' },
    cleanroomBadge: { type: String, default: 'Ahmedabad Cleanroom Compounding' },
    moqBadge: { type: String, default: 'Flexible Low MOQ' },
    overviewParagraphs: { type: [String], default: [] },
    keyActives: { type: [String], default: [] },
    skinTypes: { type: [String], default: [] },
    pH: { type: String, default: 'pH Balanced (5.5)' },
    packagingOptions: { type: [String], default: [] },
    whyChoosePoints: { type: [WhyChooseSchema], default: [] },
    expandHeadline: { type: String, default: '' },
    expandParagraphs: { type: [String], default: [] },
    description: { type: String, default: '' },
    status: {
        type: String,
        enum: ['ACTIVE', 'DRAFT'],
        default: 'ACTIVE',
        index: true,
    },
    leadTime: { type: String, default: '14-21 Business Days' },
    regulatory: { type: [String], default: ['ISO 22716', 'WHO-GMP Compliant'] },
}, {
    timestamps: true,
});
exports.Product = mongoose_1.default.models.Product || mongoose_1.default.model('Product', ProductSchema);
