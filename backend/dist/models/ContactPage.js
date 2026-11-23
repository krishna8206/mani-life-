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
exports.ContactPage = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const ContactCardSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    category: { type: String, required: true },
    primaryText: { type: String, required: true },
    secondaryText: { type: String, default: '' },
    thirdText: { type: String, default: '' },
    link: { type: String, default: '' },
    linkText: { type: String, default: '' },
    copyable: { type: Boolean, default: false },
    copyValue: { type: String, default: '' },
    icon: { type: String, default: '/images/icon-time.png' },
}, { _id: false });
const EmailItemSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    email: { type: String, required: true },
    label: { type: String, default: '' },
}, { _id: false });
const ContactPageSchema = new mongoose_1.Schema({
    hero: {
        kicker: { type: String, default: 'Certified Cosmetics Manufacturer • Ahmedabad, India' },
        headlinePart1: { type: String, default: 'Contact ' },
        headlineHighlight: { type: String, default: 'Us.' },
        subheadline: {
            type: String,
            default: "We're here to answer your questions and help you find the right solutions",
        },
        backgroundImage: { type: String, default: '/images/contact-hero.webp' },
    },
    channels: {
        eyebrow: { type: String, default: 'Direct Channels' },
        title: { type: String, default: 'Contact ' },
        highlight: { type: String, default: 'Info.' },
        description: {
            type: String,
            default: 'Feel free to ask us any questions\nor business enquiry, we will get back to you soon!',
        },
        contactCards: { type: [ContactCardSchema], default: [] },
        emails: { type: [EmailItemSchema], default: [] },
        plantVisit: {
            title: { type: String, default: 'Schedule Cleanroom Plant Visit' },
            description: {
                type: String,
                default: 'Brand founders, salon owners, and procurement teams are warmly invited to inspect our automated vacuum homogenizers, microbiology QA lab, and Class 100,000 cleanroom.',
            },
            buttonText: { type: String, default: 'Book Factory Inspection Date' },
            whatsappUrl: {
                type: String,
                default: 'https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20would%20like%20to%20schedule%20a%20cleanroom%20factory%20inspection%20visit.',
            },
        },
    },
    enquiryForm: {
        eyebrow: { type: String, default: 'Send an Inquiry' },
        title: { type: String, default: 'Enquiry ' },
        highlight: { type: String, default: 'Form.' },
        description: {
            type: String,
            default: 'Fill in the details below and our formulation compounding team will contact you promptly.',
        },
        nameLabel: { type: String, default: 'Name' },
        namePlaceholder: { type: String, default: 'Enter Your Name' },
        emailLabel: { type: String, default: 'E-mail' },
        emailPlaceholder: { type: String, default: 'Enter Your Email' },
        phoneLabel: { type: String, default: 'Contact Number' },
        phonePlaceholder: { type: String, default: 'Enter Your Contact Number' },
        messageLabel: { type: String, default: 'About Your Project' },
        messagePlaceholder: { type: String, default: 'Tell Us About Your Project' },
        submitButtonText: { type: String, default: 'Submit' },
        scriptUrl: {
            type: String,
            default: 'https://script.google.com/macros/s/AKfycbzWRCmWe0G4_I7MpDhdwo_Tm_Vokm2g6BiR14bvRpTPaPDo_deU_wSh99iGSfnSZZGhtA/exec',
        },
        sourceFormTag: { type: String, default: 'Contact Us Form' },
        successTitle: { type: String, default: 'Success! Your query has been submitted.' },
        successDescription: {
            type: String,
            default: 'Thank you for reaching out to Mani Lifestyle. Our technical and business team has received your inquiry and will contact you shortly.',
        },
        whatsappCtaText: { type: String, default: 'Connect via WhatsApp' },
        whatsappUrl: {
            type: String,
            default: 'https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20have%20submitted%20the%20contact%20enquiry%20form.',
        },
        resetButtonText: { type: String, default: 'Submit Another Query' },
    },
    facilityMap: {
        eyebrow: { type: String, default: 'Manufacturing Headquarters' },
        title: { type: String, default: 'Visit Our ' },
        highlight: { type: String, default: 'Cleanroom Facility.' },
        subtitle: {
            type: String,
            default: 'Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang, 382430, Ahmedabad, Gujarat, India.',
        },
        badgeTitle: { type: String, default: 'Gopal Charan Industrial Hub' },
        badgeSubtitle: {
            type: String,
            default: '30 minutes from Sardar Vallabhbhai Patel International Airport (AMD)',
        },
        directionsButtonText: { type: String, default: 'Get Driving Directions' },
        directionsUrl: {
            type: String,
            default: 'https://maps.google.com/?q=Gopal+Charan+Industrial+Hub,+Bakrol+Bajrang,+Ahmedabad+382430',
        },
        copyAddressButtonText: { type: String, default: 'Copy Address' },
        fullAddress: {
            type: String,
            default: 'Plot No. C5, Road No. 5, Gopal Charan Industrial Hub, Bakrol Bajrang, 382430, Ahmedabad',
        },
        mapEmbedUrl: {
            type: String,
            default: 'https://maps.google.com/maps?q=Gopal+Charan+Industrial+Hub,+Bakrol+Bajrang,+Ahmedabad+382430&t=&z=14&ie=UTF8&iwloc=&output=embed',
        },
    },
}, {
    timestamps: true,
    collection: 'contact_page',
});
exports.ContactPage = mongoose_1.default.models.ContactPage || mongoose_1.default.model('ContactPage', ContactPageSchema);
