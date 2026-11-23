import mongoose, { Schema, Document } from 'mongoose';

export interface IContactCard {
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

export interface IEmailItem {
  id: string;
  email: string;
  label?: string;
}

export interface IContactPage extends Document {
  hero: {
    kicker: string;
    headlinePart1: string;
    headlineHighlight: string;
    subheadline: string;
    backgroundImage: string;
  };
  channels: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    contactCards: IContactCard[];
    emails: IEmailItem[];
    plantVisit: {
      title: string;
      description: string;
      buttonText: string;
      whatsappUrl: string;
    };
  };
  enquiryForm: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButtonText: string;
    scriptUrl: string;
    sourceFormTag: string;
    successTitle: string;
    successDescription: string;
    whatsappCtaText: string;
    whatsappUrl: string;
    resetButtonText: string;
  };
  facilityMap: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    badgeTitle: string;
    badgeSubtitle: string;
    directionsButtonText: string;
    directionsUrl: string;
    copyAddressButtonText: string;
    fullAddress: string;
    mapEmbedUrl: string;
  };
  updatedAt: Date;
}

const ContactCardSchema = new Schema<IContactCard>(
  {
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
  },
  { _id: false }
);

const EmailItemSchema = new Schema<IEmailItem>(
  {
    id: { type: String, required: true },
    email: { type: String, required: true },
    label: { type: String, default: '' },
  },
  { _id: false }
);

const ContactPageSchema = new Schema<IContactPage>(
  {
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
          default:
            'Brand founders, salon owners, and procurement teams are warmly invited to inspect our automated vacuum homogenizers, microbiology QA lab, and Class 100,000 cleanroom.',
        },
        buttonText: { type: String, default: 'Book Factory Inspection Date' },
        whatsappUrl: {
          type: String,
          default:
            'https://wa.me/919724681096?text=Hello%20Mani%20Lifestyle,%20I%20would%20like%20to%20schedule%20a%20cleanroom%20factory%20inspection%20visit.',
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
        default:
          'https://script.google.com/macros/s/AKfycbzWRCmWe0G4_I7MpDhdwo_Tm_Vokm2g6BiR14bvRpTPaPDo_deU_wSh99iGSfnSZZGhtA/exec',
      },
      sourceFormTag: { type: String, default: 'Contact Us Form' },
      successTitle: { type: String, default: 'Success! Your query has been submitted.' },
      successDescription: {
        type: String,
        default:
          'Thank you for reaching out to Mani Lifestyle. Our technical and business team has received your inquiry and will contact you shortly.',
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
        default:
          'https://maps.google.com/maps?q=Gopal+Charan+Industrial+Hub,+Bakrol+Bajrang,+Ahmedabad+382430&t=&z=14&ie=UTF8&iwloc=&output=embed',
      },
    },
  },
  {
    timestamps: true,
    collection: 'contact_page',
  }
);

export const ContactPage = mongoose.models.ContactPage || mongoose.model<IContactPage>('ContactPage', ContactPageSchema);
