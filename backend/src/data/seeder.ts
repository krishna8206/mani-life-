import { Category } from '../models/Category';
import { Product } from '../models/Product';
import { Inquiry } from '../models/Inquiry';
import { HomePage } from '../models/HomePage';
import { AdminUser } from '../models/AdminUser';
import { connectDB } from '../config/db';
import * as dotenv from 'dotenv';

import fs from 'fs';
import path from 'path';

// Load environment variables for standalone seeder run
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config({ path: path.resolve(process.cwd(), 'backend/.env') });

export async function seedDatabase(force: boolean = false) {
  try {
    // 1. Seed or Upgrade 6 Category Showcases into MongoDB Atlas
    const existingCatsWithHero = await Category.countDocuments({ 'hero.title': { $exists: true, $ne: '' } });
    if (existingCatsWithHero < 6) {
      console.log('[MongoDB Seeder] Seeding/Upgrading all 6 Category Showcases into MongoDB Atlas...');
      const possiblePaths = [
        path.resolve(__dirname, 'seedCatalog.json'),
        path.resolve(__dirname, '../../src/data/seedCatalog.json'),
        path.resolve(process.cwd(), 'backend/src/data/seedCatalog.json'),
        path.resolve(process.cwd(), 'src/data/seedCatalog.json'),
      ];
      const validPath = possiblePaths.find((p) => fs.existsSync(p));
      if (validPath) {
        // Clean out legacy initial placeholders
        await Category.deleteMany({ slug: { $in: ['skincare', 'haircare', 'salon-kits', 'body-care'] } });

        const catalog = JSON.parse(fs.readFileSync(validPath, 'utf8'));
        let catIndex = 1;
        for (const [slug, data] of Object.entries(catalog as Record<string, any>)) {
          const catId = data.id || `CAT-${String(catIndex).padStart(2, '0')}`;
          catIndex++;

          await Category.findOneAndUpdate(
            { slug },
            {
              $set: {
                id: catId,
                name: data.hero?.title ? `${data.hero.title} Formulations` : slug,
                slug: data.slug || slug,
                aliases: data.aliases || [],
                description: data.manufacturerSection?.paragraphs?.[0]?.text || '',
                productCount: data.productRange?.items?.length || 0,
                activeFormulations: data.productRange?.items?.length || 0,
                image: data.hero?.bgImage || '',
                featuredActives: data.productRange?.filterTags || [],
                hero: data.hero || {},
                manufacturerSection: data.manufacturerSection || {},
                productRange: {
                  title: data.productRange?.title || '',
                  description: data.productRange?.description || '',
                  filterTags: data.productRange?.filterTags || [],
                },
              },
            },
            { upsert: true, new: true }
          );
        }
        console.log('[MongoDB Seeder] Successfully synced 6 rich categories into MongoDB Atlas.');
      }
    }

    // 2. Seed / Upgrade all 126 Formulations with full Level 3 details
    const existingProductsCount = await Product.countDocuments();
    if (force || existingProductsCount < 100) {
      console.log('[MongoDB Seeder] Seeding/Upgrading all product formulations with deep Level 3 content into MongoDB Atlas...');
      const detailedPaths = [
        path.resolve(__dirname, 'seedDetailedFormulations.json'),
        path.resolve(__dirname, '../../src/data/seedDetailedFormulations.json'),
        path.resolve(process.cwd(), 'backend/src/data/seedDetailedFormulations.json'),
        path.resolve(process.cwd(), 'src/data/seedDetailedFormulations.json'),
      ];
      const validDetailPath = detailedPaths.find((p) => fs.existsSync(p));
      if (validDetailPath) {
        const detailedList = JSON.parse(fs.readFileSync(validDetailPath, 'utf8'));
        for (const item of detailedList as Record<string, any>[]) {
          await Product.findOneAndUpdate(
            { slug: item.slug },
            {
              $set: {
                id: item.id,
                name: item.name,
                slug: item.slug,
                category: item.category,
                categorySlug: item.categorySlug,
                tag: item.tag || 'All Formulations',
                format: item.format,
                target: item.target,
                moq: item.moq || '500 Units',
                headline: item.headline,
                tagline: item.tagline,
                eyebrow: item.eyebrow || 'CERTIFIED COSMETICS MANUFACTURER • AHMEDABAD, INDIA',
                titleLine1: item.titleLine1 || item.name,
                titleLine2: item.titleLine2 || 'Manufacturer in India.',
                cleanroomBadge: item.cleanroomBadge || 'Ahmedabad Cleanroom Compounding',
                moqBadge: item.moqBadge || 'Flexible Low MOQ',
                image: item.image,
                imageAlt: item.imageAlt,
                overviewParagraphs: item.overviewParagraphs || [],
                keyActives: item.keyActives || [],
                actives: item.keyActives || [],
                skinTypes: item.skinTypes || [],
                pH: item.pH || 'pH 5.5 Skin-Identical',
                packagingOptions: item.packagingOptions || [],
                packagingTypes: item.packagingOptions || [],
                whyChoosePoints: item.whyChoosePoints || [],
                expandHeadline: item.expandHeadline || '',
                expandParagraphs: item.expandParagraphs || [],
                status: item.status || 'ACTIVE',
                leadTime: '14-21 Business Days',
                regulatory: ['ISO 22716', 'WHO-GMP Compliant'],
              },
            },
            { upsert: true }
          );
        }
        const updatedCount = await Product.countDocuments();
        console.log(`[MongoDB Seeder] Successfully upgraded ${updatedCount} formulations with complete Level 3 content into MongoDB Atlas.`);
      }
    } else {
      console.log(`[MongoDB Seeder] Product catalog already initialized (${existingProductsCount} formulations). Startup sync skipped.`);
    }

    const inquiryCount = await Inquiry.countDocuments();
    if (inquiryCount === 0) {
      console.log('[MongoDB Seeder] Seeding initial RFQs into MongoDB Atlas...');
      await Inquiry.create([
        {
          id: 'RFQ-8921',
          name: 'Aarav Mehta',
          company: 'Lumina Botanicals LLP',
          email: 'aarav@luminabotanicals.in',
          phone: '+91 98250 12345',
          productInterest: 'Clinical Face Serums (Niacinamide & Vitamin C)',
          plannedQuantity: '1,000 - 2,500 Units',
          packagingType: 'Dropper Bottle with Matte Pipette',
          notes: 'Looking to launch clean skincare line for salon distribution across Mumbai.',
          status: 'NEW',
        },
        {
          id: 'RFQ-8922',
          name: 'Pooja Sharma',
          company: 'Aura Care Aesthetics',
          email: 'pooja@auracare.com',
          phone: '+91 98980 67890',
          productInterest: 'Sulfate-Free Shampoos & Rosemary Hair Oil',
          plannedQuantity: '500 Units (Pilot Batch)',
          packagingType: 'Amber Pump Bottle 250ml',
          notes: 'Need sample prototype dispatched to Ahmedabad clinic for doctor evaluation.',
          status: 'SAMPLE_DISPATCHED',
        },
        {
          id: 'RFQ-8923',
          name: 'Rohan Deshmukh',
          company: 'Kavya Organics Pvt Ltd',
          email: 'rohan@kavyaorganics.com',
          phone: '+91 97230 45678',
          productInterest: 'Ceramide Barrier Cream & Sunscreen SPF 50',
          plannedQuantity: '5,000 Units',
          packagingType: 'Airless Pump Bottle 50ml',
          notes: 'Expanding our D2C catalog across Tier 1 metros.',
          status: 'QUOTATION_SENT',
        },
        {
          id: 'RFQ-8924',
          name: 'Dr. Neha Verma',
          company: 'DermaPro Aesthetic Clinics',
          email: 'dr.neha@dermapro.in',
          phone: '+91 99090 11223',
          productInterest: 'Custom Peeling Solution & Hyaluronic Fluid',
          plannedQuantity: '500 Units',
          packagingType: 'Cobalt Blue Dropper 30ml',
          notes: 'Requiring WHO-GMP batch test certificates with each delivery.',
          status: 'NEW',
        },
      ]);
      console.log('[MongoDB Seeder] Successfully seeded 4 inquiries.');
    }

    // Always ensure the comprehensive Home Page document exists in MongoDB Atlas
    const existingHome = await HomePage.findOne();
    if (!existingHome || !existingHome.spatialStage) {
      console.log('[MongoDB Seeder] Initializing Full Home Page CMS in MongoDB Atlas...');
      await HomePage.deleteMany({});
      await HomePage.create({
        hero: {
          kicker: 'Certified Cosmetics Manufacturer • Ahmedabad, India',
          headline: 'Private Label Skincare & Haircare Manufacturer in Ahmedabad',
          subheadline:
            'Mani Lifestyle is a certified cosmetics manufacturing company based in Ahmedabad, India. We specialize in developing custom and white-label skincare and haircare products for startups, salons, and brands across India.',
          primaryCtaText: 'Request Custom Formulation Quote',
          secondaryCtaText: 'Explore Our Capabilities',
          trustHighlights: [
            { id: '1', title: 'Custom &', subtitle: 'White-Label', icon: 'FlaskConical', link: '/services/custom-formulation' },
            { id: '2', title: 'Skincare &', subtitle: 'Haircare Lines', icon: 'Sparkles', link: '/products' },
            { id: '3', title: 'Low 500 MOQ', subtitle: 'For Startups & Salons', icon: 'Box', link: '/quote-estimator' },
            { id: '4', title: 'ISO 22716 &', subtitle: 'WHO-GMP Certified', icon: 'ShieldCheck', link: '/certifications' },
          ],
        },
        spatialStage: {
          eyebrow: 'Core Specializations • Third-Party Manufacturing',
          title: 'Our 3 Hero Product Categories.',
          desc:
            'Proprietary formulation, in-house cleanroom R&D compounding, and certified contract bottling — engineered for instant market performance and ready to bottle for your brand.',
          trustNodes: [
            { id: '1', title: 'Formulation Expertise', desc: 'Custom active compounding • 500+ validated formulas', icon: 'FlaskConical' },
            { id: '2', title: 'In-House R&D Cleanroom', desc: 'WHO-GMP pilot lab • Precision stability testing', icon: 'Microscope' },
            { id: '3', title: 'Third-Party Manufacturing', desc: 'Turnkey contract bottling • Starting at 500 units MOQ', icon: 'Layers' },
          ],
          heroProducts: [
            { id: '1', name: 'Clinical Face Serum', category: 'Skincare', tag: 'Custom Formulations', active: true },
            { id: '2', name: 'Botanical Hair Shampoo', category: 'Haircare', tag: 'Manufacturing Partner', active: true },
            { id: '3', name: 'Hydra Barrier Moisturizer', category: 'Personal Care', tag: 'Private Label Cosmetics', active: true },
          ],
        },
        trustPillars: {
          header: {
            eyebrow: 'The Mani Advantage',
            title: 'Reason to Trust Mani Lifestyle.',
            desc: 'Discover why brands choose Mani Lifestyle for their success.',
          },
          items: [
            {
              id: '01',
              num: '01',
              title: 'Low Minimum Order Quantity',
              desc: 'Start your brand with confidence — we support small batches to make it easy and affordable for startups.',
              link: '/services/private-label',
              icon: 'PackageCheck',
            },
            {
              id: '02',
              num: '02',
              title: 'Transparent Pricing',
              desc: 'Clear, upfront pricing with no hidden costs — so you can plan and budget with full confidence.',
              link: '/quote-estimator',
              icon: 'CircleDollarSign',
            },
            {
              id: '03',
              num: '03',
              title: 'Wide Product Range',
              desc: 'From skincare to haircare, we offer a vast range of personal care and beauty products to meet diverse market demands.',
              link: '/products',
              icon: 'Sparkles',
            },
            {
              id: '04',
              num: '04',
              title: 'In-house R&D and Quality Team',
              desc: 'Our expert team works in-house to develop new formulas and maintain strict quality control at every stage.',
              link: '/innovation',
              icon: 'Microscope',
            },
            {
              id: '05',
              num: '05',
              title: 'GMP Certified Facility',
              desc: 'Our manufacturing units meet strict GMP standards, ensuring safe, clean, and quality production every step of the way.',
              link: '/certifications',
              icon: 'ShieldCheck',
            },
            {
              id: '06',
              num: '06',
              title: 'Dedicated Customer Support',
              desc: 'Our team is here to help — from your first inquiry to final delivery, we offer reliable, responsive support.',
              link: '/contact',
              icon: 'Headphones',
            },
          ],
        },
        certificationsSection: {
          header: {
            eyebrow: 'Accredited Quality Standards',
            title: 'Certified for Quality and Reliability.',
            desc: 'Our dedication to high standards is recognized by industry-leading bodies, ensuring every product meets rigorous quality and safety benchmarks.',
          },
          items: [
            {
              id: 'who-gmp',
              name: 'WHO-GMP Compliant',
              authority: 'World Health Organization Standards',
              scope: 'Pharmaceutical Grade Hygiene',
              importance: 'Cleanroom Class 100,000 protocols',
              badgeCode: 'WHO-GMP / 2026',
              image: 'https://res.cloudinary.com/oeqdmjr7/image/upload/v1795071881/mani-lifestyle/certifications/zslgubzxdzyvjcyuct1u.png',
              verified: true,
            },
            {
              id: 'iso-22716',
              name: 'ISO 22716:2007 Cosmetics',
              authority: 'International Organization for Standardization',
              scope: 'Cosmetics Good Manufacturing Practices',
              importance: 'Audited traceability and QA validation',
              badgeCode: 'ISO 22716 : 2007',
              image: 'https://res.cloudinary.com/oeqdmjr7/image/upload/v1795071882/mani-lifestyle/certifications/guacfoimwqfqylnpocur.png',
              verified: true,
            },
            {
              id: 'fda-india',
              name: 'FDA Approved Facility',
              authority: 'Food & Drugs Control Administration, Gujarat',
              scope: 'Licensed Cosmetic Formulations',
              importance: 'State-certified manufacturing facility',
              badgeCode: 'FDCA LIC: GC/2040',
              image: 'https://res.cloudinary.com/oeqdmjr7/image/upload/v1795071881/mani-lifestyle/certifications/kfh1obiypibt3sllktfv.png',
              verified: true,
            },
            {
              id: 'halal-certified',
              name: 'Halal Certified Manufacturing',
              authority: 'Halal Trust of India',
              scope: 'Zero Alcohol & Animal Byproducts',
              importance: 'Compliant for global export markets',
              badgeCode: 'HALAL / AUTH-882',
              image: 'https://res.cloudinary.com/oeqdmjr7/image/upload/v1795071881/mani-lifestyle/certifications/filhq9fesjeaq79abedi.jpg',
              verified: true,
            },
            {
              id: 'cruelty-free',
              name: 'Cruelty Free & Vegan Bases',
              authority: 'Ethical Quality Benchmark',
              scope: '100% Animal-Testing Free Formulations',
              importance: 'Cruelty-free botanical active testing',
              badgeCode: 'CRUELTY-FREE / 100%',
              image: 'https://res.cloudinary.com/oeqdmjr7/image/upload/v1795071882/mani-lifestyle/certifications/pjoacrnbn37nwbpp03j1.jpg',
              verified: true,
            },
          ],
        },
        servicesSection: {
          header: {
            eyebrow: 'WHAT WE DO',
            title: 'Our Services',
            desc: 'Formulating & manufacturing high-performance cosmetic solutions in our Ahmedabad cleanroom facility — specifically developed for Indian skin tones, hair textures, and tropical climate conditions.',
          },
          items: [
            {
              id: '1',
              num: '01',
              title: 'Private Label',
              desc: 'Launch your own brand with our proven, market-ready formulations.',
              image: '/images/services-v3/v3_img1.jpg',
              link: '/services/private-label',
            },
            {
              id: '2',
              num: '02',
              title: 'Contract Manufacturing',
              desc: 'End-to-end manufacturing with advanced technology and strict quality.',
              image: '/images/services-v3/v3_img2.jpg',
              link: '/services/contract-manufacturing',
            },
            {
              id: '3',
              num: '03',
              title: 'Custom Formulations',
              desc: 'Tailor-made formulations to match your brand vision and market needs.',
              image: '/images/services-v3/v3_img3.jpg',
              link: '/services/custom-formulation',
            },
            {
              id: '4',
              num: '04',
              title: 'End-to-End Brand Launch',
              desc: 'From formulation to packaging, we handle everything for your brand.',
              image: '/images/services-v3/v3_img4.jpg',
              link: '/services',
            },
          ],
        },
        processSection: {
          header: {
            eyebrow: 'Spec-To-Shelf Journey • 7 Sequential Steps',
            title: 'From Idea to Reality.',
            desc: 'From vision to finished formula — we create custom skincare products that embody your brand identity. Your ideas, tailored to perfection and transformed into market-ready products.',
          },
          items: [
            { step: 1, label: 'STEP 1', title: 'Requirement Discussion' },
            { step: 2, label: 'STEP 2', title: 'Formula Modulation' },
            { step: 3, label: 'STEP 3', title: 'Packaging Design' },
            { step: 4, label: 'STEP 4', title: 'Product Confirmation' },
            { step: 5, label: 'STEP 5', title: 'Manufacturing' },
            { step: 6, label: 'STEP 6', title: 'Packaging Inspection' },
            { step: 7, label: 'STEP 7', title: 'Verify & Delivery' },
          ],
        },
        categoriesSection: {
          header: {
            eyebrow: 'Core Formulation Verticals • Spec-To-Shelf',
            title: 'Product Categories in Your Brand.',
            desc: 'We are proud to collaborate with industry-leading partners to create an extensive range of trusted products — formulated and packaged to your brand exact specifications.',
          },
          items: [
            {
              num: '01',
              name: 'Face Washes',
              tagline: 'pH 5.5 Foaming & Clarifying Washes',
              description: 'Sulfate-free foaming cleansers, tea tree acne control washes, arabica coffee de-tan gels, and gentle AHA/BHA exfoliators.',
              tags: ['Salicylic Acid', 'Tea Tree Oil', 'AHA / BHA', 'Centella Asiatica'],
              moq: 'Flexible Low MOQ',
              slug: 'cleansers-toners',
              image: '/images/categories/cat-face-wash.jpg',
            },
            {
              num: '02',
              name: 'Serums',
              tagline: 'Clinical Actives & Dermal Elixirs',
              description: 'High-concentration stabilized actives designed for deep transdermal delivery, hyperpigmentation, and cellular repair.',
              tags: ['20% Vitamin C', '10% Niacinamide', 'Retinol 0.5%', 'Hyaluronic Acid'],
              moq: 'Flexible Low MOQ',
              slug: 'skincare-serums',
              image: '/images/categories/cat-serum.jpg',
            },
            {
              num: '03',
              name: 'Hair Oil',
              tagline: 'Root-Strengthening & Scalp Therapies',
              description: 'Cold-pressed pure botanical hair oils targeting shedding, thinning, and split ends with nourishing herbal infusions.',
              tags: ['Pure Rosemary', 'Redensyl', 'Biotin', 'Moroccan Argan'],
              moq: 'Flexible Low MOQ',
              slug: 'haircare-treatments',
              image: '/images/categories/cat-hair-oil.jpg',
            },
            {
              num: '04',
              name: 'Skin Cream',
              tagline: 'Barrier Repair & Deep Hydration',
              description: 'Velvety ceramide barrier creams, ultra-sheer gel hydrators, brightening day soufflés, and restorative night balms.',
              tags: ['Ceramides 1,3,6', 'Cica Extract', 'Matrixyl Peptides', 'Squalane'],
              moq: 'Flexible Low MOQ',
              slug: 'suncare-moisturizers',
              image: '/images/categories/cat-skin-cream.jpg',
            },
            {
              num: '05',
              name: 'Essential Oil',
              tagline: '100% Pure Therapeutic Extracts',
              description: 'Steam-distilled and cold-pressed pure therapeutic grade essential oils for cosmetic, scalp, and aromatherapeutic use.',
              tags: ['French Lavender', 'Tea Tree Oil', 'Eucalyptus', 'Pure Rosehip'],
              moq: 'Flexible Low MOQ',
              slug: 'body-bath-wellness',
              image: '/images/categories/cat-essential-oil.jpg',
            },
            {
              num: '06',
              name: 'Face Sheet Mask',
              tagline: 'Bio-Cellulose & Instant Glow Infusions',
              description: 'Pre-soaked bio-cellulose and microfiber sheet masks drenched in concentrated multi-molecular hydration serums.',
              tags: ['Triple HA', 'Glutathione', 'Marine Collagen', 'Niacinamide'],
              moq: 'Flexible Low MOQ',
              slug: 'masks-lip-eye',
              image: '/images/categories/cat-sheet-mask.jpg',
            },
          ],
        },
        faqsSection: {
          header: {
            eyebrow: 'Technical & Commercial Guidance',
            title: 'Frequently Asked Questions.',
            desc: 'Clear, transparent answers about our cosmetic formulation capabilities, cleanroom compounding, low startup MOQs, and regulatory compliance.',
          },
          items: [
            {
              question: 'What is your Minimum Order Quantity (MOQ) for custom formulations?',
              answer:
                'Our standard pilot batch starts at just 500 units for standard stock formulas, and 1,000 units for fully bespoke formulations. This low threshold enables beauty founders and salons to launch with minimal capital risk.',
            },
            {
              question: 'Can you customize the formulation active ingredients and fragrance profile?',
              answer:
                'Yes. Our in-house R&D team can formulate with custom active concentrations (such as 10% Niacinamide, 20% Vitamin C, or Redensyl) and tailor sensory attributes like texture, absorption speed, and fragrance profiles.',
            },
            {
              question: 'Do you assist with FDA licensing and regulatory documentation in India?',
              answer:
                'Yes. We provide complete regulatory documentation including Certificate of Analysis (COA), Material Safety Data Sheets (MSDS), stability reports, and facilitate FDA manufacturing license endorsements.',
            },
            {
              question: 'What is the standard turnaround time from formula approval to dispatch?',
              answer:
                'Standard batch production takes 14 to 21 business days following formula sign-off and packaging material receipt at our Changodar, Ahmedabad facility.',
            },
            {
              question: 'Do you offer custom packaging procurement or can we provide our own?',
              answer:
                'Both options are supported. You may select from our pre-tested inventory of airless pump bottles, amber droppers, and tubes, or ship your own custom-printed packaging directly to our facility for compounding and filling.',
            },
          ],
        },
        ctaBanner: {
          eyebrow: 'Ready To Formulate Your Next Bestselling Line?',
          heading: 'Schedule a Direct Consultation With Our Senior Team.',
          desc: 'Visit our state-of-the-art cleanroom manufacturing campus in Ahmedabad or request customized bench formulation prototypes dispatched directly to your desk.',
          buttonText: 'Request Custom Quote & Formulation Samples',
          phone: '+91 97246 81096',
          whatsappText: 'Hello Mani Lifestyle, I am interested in visiting your Ahmedabad cosmetic plant.',
        },
      });
      console.log('[MongoDB Seeder] Successfully initialized Full Home Page CMS document in MongoDB Atlas.');
    }

    await AdminUser.findOneAndUpdate(
      { email: 'admin@manilifestyle.com' },
      {
        id: 'ADM-01',
        name: 'Mani Lifestyle Superadmin',
        email: 'admin@manilifestyle.com',
        password: 'admin@123',
        role: 'SUPERADMIN',
      },
      { upsert: true, new: true }
    );
    console.log('[MongoDB Seeder] Superadmin credentials initialized (admin@manilifestyle.com / admin@123).');
  } catch (error: any) {
    console.error('[MongoDB Seeder] Seeding error:', error?.message);
  }
}

if (require.main === module) {
  connectDB()
    .then(() => seedDatabase(true))
    .then(() => {
      console.log('[MongoDB Seeder] Standalone seeding completed.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('[MongoDB Seeder] Fatal seeding error:', err);
      process.exit(1);
    });
}
