export interface RangeCardItem {
  id: string;
  name: string;
  slug?: string;
  categorySlug?: string;
  tag: string;
  format: string;
  target: string;
  moq?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CategoryShowcase {
  id?: string;
  slug: string;
  aliases: string[];
  isActive?: boolean;
  hero: {
    title: string;
    subtitle: string;
    bgImage: string;
  };
  manufacturerSection: {
    title: string;
    subtitle?: string;
    image: string;
    imageAlt: string;
    paragraphs: {
      text: string;
      highlight?: string;
    }[];
    highlights: string[];
  };
  productRange: {
    title: string;
    description: string;
    filterTags: string[];
    items: RangeCardItem[];
  };
}

export const categoryShowcases: Record<string, CategoryShowcase> = {
  "cleansers-toners": {
    id: "CAT-01",
    slug: "cleansers-toners",
    aliases: ["facewash", "face-wash", "cleansers"],
    isActive: true,
    hero: {
      title: "Face Wash",
      subtitle: "Gentle Cleansing for Clear, Fresh Skin.",
      bgImage: "/images/categories/cat-face-wash.jpg",
    },
    manufacturerSection: {
      title: "TOP FACE WASH MANUFACTURERS IN INDIA",
      subtitle: "Custom Face Wash Formulations Tailored for Your Brand",
      image: "/images/categories/cat-face-wash.jpg",
      imageAlt: "Face Wash Manufacturing - Tubes and Foaming Pumps",
      paragraphs: [
        {
          text: "Using the best face wash brands on everyday routine will provide clean, healthy and glowing skin. After working for long hours, stressed & busy life, to remove impurities, pollution, dirt & excess oil, to prevent skin dullness and to rejuvenate the facial skin, everyone needs quality face wash on daily routines. Our offered Face wash deeply cleanses skin, revitalizes dermal layers, and delivers blackhead and pimple-free, clear glowing skin.",
        },
        {
          text: "We manufacture face wash based on specific skin types segmented into dry skin, oily skin, anti-acne, normal skin, combination skin, and sensitive skin — offering different forms like gel face wash, foaming face wash, liquid facial wash, and powder face cleanser in packaging types including tubes and pump dispensers with a wide variety of organic, herbal natural extracts and clinical synthetic actives in its composition.",
        },
        {
          text: "Best Face Wash Manufacturer in India — We offer customized private label face wash based upon market and distribution channels segmented into online marketplaces, D2C brands, and offline retailers across India.",
          highlight: "private label face wash",
        },
      ],
      highlights: [
        "100% Sulfate-Free (SLS/SLES Free) Surfactants",
        "Formulated at pH 5.5 Skin-Identical Balance",
        "Custom Tubes, Foaming Pumps & Silicone Brush Packaging",
        "Pilot Batches Starting from 500 Units",
      ],
    },
    productRange: {
      title: "FACE WASH PRODUCT RANGE",
      description: "Explore our comprehensive formulation range segmented by clinical skin targets and base formats:",
      filterTags: [
        "All Formulations",
        "Acne & Clarifying",
        "Glow & Brightening",
        "Hydrating & Barrier",
        "Exfoliating & Detox",
        "Ayurvedic & Herbal",
      ],
      items: [
        // Column 1
        { id: "FW-01", name: "Natural Face Wash", slug: "natural-face-wash", categorySlug: "cleansers-toners", tag: "Hydrating & Barrier", format: "Gentle Plant Surfactant Base", target: "Daily Family & Teen Care", moq: "500 Units", isActive: true },
        { id: "FW-02", name: "Vitamin E Face Wash", slug: "vitamin-e-face-wash", categorySlug: "cleansers-toners", tag: "Hydrating & Barrier", format: "Moisture Replenishing Cream", target: "Dry, Flaky & Stressed Complexions", moq: "500 Units", isActive: true },
        { id: "FW-03", name: "Aloe Vera Face Wash", slug: "aloe-vera-face-wash", categorySlug: "cleansers-toners", tag: "Hydrating & Barrier", format: "Pure Soothing Hydrosol Gel", target: "Sunburned, Red & Sensitive Skin", moq: "500 Units", isActive: true },
        { id: "FW-04", name: "Tea Tree Face Wash", slug: "tea-tree-oil-face-wash", categorySlug: "cleansers-toners", tag: "Acne & Clarifying", format: "Purifying Foaming Wash", target: "Bacterial Acne & Microbial Defense", moq: "500 Units", isActive: true },
        { id: "FW-05", name: "Exfoliating Face Wash", slug: "exfoliating-face-wash", categorySlug: "cleansers-toners", tag: "Exfoliating & Detox", format: "Gentle Cellulose Bead Scrub", target: "Dead Cell Buffing & Rough Skin", moq: "500 Units", isActive: true },
        { id: "FW-06", name: "Face Cleanser", slug: "face-cleanser", categorySlug: "cleansers-toners", tag: "Hydrating & Barrier", format: "Classic Gentle Facial Milk", target: "Normal to Sensitive Everyday Care", moq: "500 Units", isActive: true },
        { id: "FW-07", name: "Skin Whitening Face Wash", slug: "skin-whitening-face-wash", categorySlug: "cleansers-toners", tag: "Glow & Brightening", format: "Brightening Gel Cleanser", target: "Sun Spots, Tan & Dark Marks", moq: "500 Units", isActive: true },
        { id: "FW-08", name: "Strawberry Face Wash", slug: "strawberry-face-wash", categorySlug: "cleansers-toners", tag: "Ayurvedic & Herbal", format: "Enzymatic Fruit Bead Gel", target: "Soft Hydrated Skin & Sweet Aroma", moq: "500 Units", isActive: true },
        { id: "FW-09", name: "Oil Free Acne Face Wash", slug: "oil-free-acne-face-wash", categorySlug: "cleansers-toners", tag: "Acne & Clarifying", format: "Non-Comedogenic Gel", target: "Excess Shine & T-Zone Congestion", moq: "500 Units", isActive: true },
        { id: "FW-10", name: "Natural Face Cleanser", slug: "natural-face-cleanser", categorySlug: "cleansers-toners", tag: "Hydrating & Barrier", format: "Non-Stripping Botanical Milk", target: "Stratum Corneum Barrier Care", moq: "500 Units", isActive: true },
        { id: "FW-11", name: "Ayurvedic Face Wash", slug: "ayurvedic-face-wash", categorySlug: "cleansers-toners", tag: "Ayurvedic & Herbal", format: "Traditional Decocted Herb Base", target: "Dosha Balancing & Natural Glow", moq: "500 Units", isActive: true },
        { id: "FW-12", name: "Ubtan Face Wash", slug: "ubtan-face-wash", categorySlug: "cleansers-toners", tag: "Glow & Brightening", format: "Kesar Haldi Cream Wash", target: "Bridal Tan Removal & Festive Radiance", moq: "500 Units", isActive: true },

        // Column 2
        { id: "FW-13", name: "Salicylic Acid Face Wash", slug: "salicylic-acid-face-wash", categorySlug: "cleansers-toners", tag: "Acne & Clarifying", format: "pH 5.5 Clarifying Gel", target: "Blackheads, Active Acne & Sebum Control", moq: "500 Units", isActive: true },
        { id: "FW-14", name: "Herbal Face Wash", slug: "herbal-face-wash", categorySlug: "cleansers-toners", tag: "Ayurvedic & Herbal", format: "Multi-Herb Cooling Gel", target: "Skin Irritation & Herbal Cleansing", moq: "500 Units", isActive: true },
        { id: "FW-15", name: "Charcoal Face Wash", slug: "charcoal-face-wash", categorySlug: "cleansers-toners", tag: "Exfoliating & Detox", format: "Activated Bamboo Charcoal Gel", target: "Deep Pore Toxin Removal & Blackheads", moq: "500 Units", isActive: true },
        { id: "FW-16", name: "Green Tea Face Wash", slug: "green-tea-face-wash", categorySlug: "cleansers-toners", tag: "Exfoliating & Detox", format: "Antioxidant Polyphenol Gel", target: "Pollution Defense & Free Radicals", moq: "500 Units", isActive: true },
        { id: "FW-17", name: "Turmeric Face Wash", slug: "turmeric-face-wash", categorySlug: "cleansers-toners", tag: "Glow & Brightening", format: "Wild Kasturi Haldi Wash", target: "Pigmentation & Dermal Glow", moq: "500 Units", isActive: true },
        { id: "FW-18", name: "Paraben Free Face Wash", slug: "paraben-free-face-wash", categorySlug: "cleansers-toners", tag: "Hydrating & Barrier", format: "Clean Chemistry Sensitive Wash", target: "Allergy-Prone & Reactive Skin", moq: "500 Units", isActive: true },
        { id: "FW-19", name: "Deep Clean Facial Cleanser", slug: "deep-clean-facial-cleanser", categorySlug: "cleansers-toners", tag: "Exfoliating & Detox", format: "Penetrating Follicular Cleanser", target: "Deep Dust & Makeup Residue Removal", moq: "500 Units", isActive: true },
        { id: "FW-20", name: "Oil Control Face Wash", slug: "oil-control-face-wash", categorySlug: "cleansers-toners", tag: "Acne & Clarifying", format: "Mattifying Gel Wash", target: "Greasy Pores & Open Follicles", moq: "500 Units", isActive: true },
        { id: "FW-21", name: "Fairness Face Wash", slug: "fairness-face-wash", categorySlug: "cleansers-toners", tag: "Glow & Brightening", format: "Milky Brightening Emulsion", target: "Uneven Skin Tone & Daily Glow", moq: "500 Units", isActive: true },
        { id: "FW-22", name: "Pimple Clear Face Wash", slug: "pimple-clear-face-wash", categorySlug: "cleansers-toners", tag: "Acne & Clarifying", format: "Active Spot Cleanser", target: "Redness, Whiteheads & Breakouts", moq: "500 Units", isActive: true },
        { id: "FW-23", name: "Foaming Face Wash", slug: "foaming-face-wash", categorySlug: "cleansers-toners", tag: "Ayurvedic & Herbal", format: "Self-Foaming Instant Pump", target: "Quick Everyday Cleansing Ritual", moq: "500 Units", isActive: true },
        { id: "FW-24", name: "Organic Face Wash", slug: "organic-face-wash", categorySlug: "cleansers-toners", tag: "Hydrating & Barrier", format: "Certified Eco-Botanical Gel", target: "Clean Beauty & Eco-Conscious Brands", moq: "500 Units", isActive: true },

        // Column 3
        { id: "FW-25", name: "Anti Acne Face Wash", slug: "anti-acne-face-wash", categorySlug: "cleansers-toners", tag: "Acne & Clarifying", format: "Deep Follicle Foam", target: "Teenage & Adult Hormonal Acne", moq: "500 Units", isActive: true },
        { id: "FW-26", name: "Vitamin C Face Wash", slug: "vitamin-c-face-wash", categorySlug: "cleansers-toners", tag: "Glow & Brightening", format: "Airy Antioxidant Cloud Foam", target: "Dullness, Tired Skin & Morning Glow", moq: "500 Units", isActive: true },
        { id: "FW-27", name: "Lemon Face Wash", slug: "lemon-face-wash", categorySlug: "cleansers-toners", tag: "Glow & Brightening", format: "Citrus Clarifying Gel", target: "Instant Freshness & Skin Radiance", moq: "500 Units", isActive: true },
        { id: "FW-28", name: "Scrub Face Wash", slug: "scrub-face-wash", categorySlug: "cleansers-toners", tag: "Exfoliating & Detox", format: "Dual Action Wash & Scrub", target: "Congested Pores & Keratin Build-Up", moq: "500 Units", isActive: true },
        { id: "FW-29", name: "Hydrating Face Wash", slug: "hydrating-face-wash", categorySlug: "cleansers-toners", tag: "Hydrating & Barrier", format: "Hyaluronic Acid Water Burst", target: "Dehydrated & Tight Feeling Skin", moq: "500 Units", isActive: true },
        { id: "FW-30", name: "Neem Face Wash", slug: "neem-face-wash", categorySlug: "cleansers-toners", tag: "Acne & Clarifying", format: "Organic Gel Cleanser", target: "Pimple-Prone & Irritated Skin", moq: "500 Units", isActive: true },
        { id: "FW-31", name: "Benzoyl Peroxide Face Wash", slug: "benzoyl-peroxide-face-wash", categorySlug: "cleansers-toners", tag: "Acne & Clarifying", format: "Clinical Medicated Cleanser", target: "Severe Cystic Acne & Congestion", moq: "500 Units", isActive: true },
        { id: "FW-32", name: "Coffee Face Wash", slug: "arabica-coffee-face-wash", categorySlug: "cleansers-toners", tag: "Exfoliating & Detox", format: "Micro-Ground Coffee Grit Gel", target: "De-Tan, Anti-Pollution & Morning Energy", moq: "500 Units", isActive: true },
        { id: "FW-33", name: "Gold Face Wash", slug: "gold-face-wash", categorySlug: "cleansers-toners", tag: "Glow & Brightening", format: "Colloidal Gold Shimmer Gel", target: "Luxury Salon Facial Radiance", moq: "500 Units", isActive: true },
        { id: "FW-34", name: "Pimple Face Wash", slug: "pimple-face-wash", categorySlug: "cleansers-toners", tag: "Acne & Clarifying", format: "Antiseptic Foam Cleanser", target: "Active Inflamed Blemishes", moq: "500 Units", isActive: true },
        { id: "FW-35", name: "Fruit Face Wash", slug: "fruit-face-wash", categorySlug: "cleansers-toners", tag: "Ayurvedic & Herbal", format: "Multi-Fruit AHA Cocktail", target: "Gentle Micro-Peeling & Freshness", moq: "500 Units", isActive: true },
      ],
    },
  },

  "haircare-treatments": {
    id: "CAT-02",
    slug: "haircare-treatments",
    aliases: ["hair-oil", "hairoil", "haircare"],
    isActive: true,
    hero: {
      title: "Hair Oil",
      subtitle: "Deep Nourishment from Root to Tip",
      bgImage: "/images/categories/cat-hair-oil.jpg",
    },
    manufacturerSection: {
      title: "TOP-QUALITY HAIR OIL MANUFACTURERS",
      subtitle: "Root Strengthening & Scalp Nourishment Therapies",
      image: "/images/categories/cat-hair-oil.jpg",
      imageAlt: "Hair Oil Manufacturing - Pure Botanical Infusions",
      paragraphs: [
        {
          text: "Using high-quality hair oil as part of your daily routine promotes strong, healthy, and nourished hair. In today's hectic lifestyle, regular oiling helps remove impurities, reduce dryness, control hair fall, and rejuvenate the scalp. Our range of hair oils is specially formulated to deeply nourish the scalp, strengthen roots, and promote soft, shiny, and dandruff-free hair.",
        },
        {
          text: "We manufacture hair oils designed for different hair types and concerns — including dry hair, oily scalp, dandruff, hair fall, and frizzy hair. Our formulations come in various forms such as light non-sticky oils, herbal blends, and essential oil infusions, packaged in bottles with flip caps, pump dispensers, comb applicators, and droppers.",
        },
        {
          text: "As a top hair oil manufacturer in India, we specialize in custom private label manufacturing. Whether for online marketplaces, D2C brands, or offline salon retail, we deliver market-ready, high-performance hair oil solutions.",
          highlight: "custom private label manufacturing",
        },
      ],
      highlights: [
        "Pure Cold-Pressed Carrier Oils (Argan, Jojoba, Almond, Sesame)",
        "Active Follicle Stimulants: Pure Rosemary, Redensyl, Biotin",
        "Classical Ayurvedic Taila Paka Vidhi Herb Infusions",
        "100% Mineral Oil & Paraben Free",
      ],
    },
    productRange: {
      title: "HAIR OIL PRODUCT RANGE",
      description: "Our authentic hair oil formulation portfolio:",
      filterTags: ["All Formulations"],
      items: [
        { id: "HO-01", name: "Hair Regrowth Oil", slug: "hair-regrowth-oil", categorySlug: "haircare-treatments", tag: "Follicle Growth & Anti-Fall", format: "Active Follicle Scalp Oil", target: "Dormant Hair Bulbs & Thinning", moq: "500 Units", isActive: true },
        { id: "HO-02", name: "Hair Serums", slug: "hair-serums", categorySlug: "haircare-treatments", tag: "Hair Serums & Density", format: "Transdermal Scalp Serum", target: "Excessive Hair Fall & Root Strengthening", moq: "500 Units", isActive: true },
        { id: "HO-03", name: "Night Serum", slug: "night-serum", categorySlug: "haircare-treatments", tag: "Overnight Repair", format: "Restorative Overnight Scalp Therapy", target: "Frizz, Heat Damage & Scalp Rejuvenation", moq: "500 Units", isActive: true },
      ],
    },
  },

  "skincare-serums": {
    id: "CAT-03",
    slug: "skincare-serums",
    aliases: ["serum", "face-serum", "serums"],
    isActive: true,
    hero: {
      title: "Serum",
      subtitle: "Deep Hydration for a Radiant Complexion",
      bgImage: "/images/categories/cat-serum.jpg",
    },
    manufacturerSection: {
      title: "TOP-QUALITY FACE SERUM MANUFACTURERS",
      subtitle: "Custom Face Serum Solutions for Your Brand",
      image: "/images/categories/cat-serum.jpg",
      imageAlt: "Face Serum Manufacturing - Glass Pipettes and Droppers",
      paragraphs: [
        {
          text: "Looking for reliable Face Serum Manufacturers in India? Mani Lifestyle is a trusted name, offering high-quality face serums for diverse skin needs. As a leading Private Label Face Serum Manufacturer, we specialize in providing customized serums that suit your brand's specific requirements. Whether you need anti-aging, Vitamin C, or hyaluronic acid serums, we've got you covered.",
          highlight: "Private Label Face Serum Manufacturer",
        },
        {
          text: "At Mani Lifestyle, we pride ourselves on being among the best face serum manufacturers in India, committed to creating natural and organic face serums with powerful ingredients. Our expert team ensures only the finest, chemical-free elements are used, providing safe and effective products for your customers.",
        },
        {
          text: "As a trusted supplier, we offer both third-party and contract manufacturing services. Our skincare manufacturer India services include a wide range of formulations like anti-aging serums, Vitamin C serums, and serums enriched with hyaluronic acid for deep cellular hydration.",
          highlight: "skincare manufacturer India",
        },
      ],
      highlights: [
        "Stabilized Active Delivery (20% Vit C, 10% Niacinamide, Retinol)",
        "Transdermal Water-Gel, Anhydrous & Lipid Elixirs",
        "UV-Protected Amber Droppers & Airless Pumps",
        "ISO 22716 & GMP Cleanroom Compounding",
      ],
    },
    productRange: {
      title: "FACE SERUM PRODUCT RANGE",
      description: "High-concentration stabilized dermal actives with verified bioavailability:",
      filterTags: ["All Formulations"],
      items: [
        // Column 1
        { id: "SR-01", name: "Vitamin C Serum", slug: "vitamin-c-serum", categorySlug: "skincare-serums", tag: "Brightening & Tone", format: "Stabilized 20% Water Gel", target: "Dullness & Sun Damage", moq: "500 Units", isActive: true },
        { id: "SR-02", name: "Brightening Serum", slug: "brightening-serum", categorySlug: "skincare-serums", tag: "Brightening & Tone", format: "Active Radiance Nectar", target: "Pigmentation & Melasma", moq: "500 Units", isActive: true },
        { id: "SR-03", name: "Hydrating Serum", slug: "hydrating-serum", categorySlug: "skincare-serums", tag: "Hydration & Barrier", format: "5D Multi-Weight Elixir", target: "Deep Transdermal Hydration", moq: "500 Units", isActive: true },
        { id: "SR-04", name: "Peptide Serum", slug: "peptide-serum", categorySlug: "skincare-serums", tag: "Anti-Aging & Firming", format: "Copper Tripeptide Solution", target: "Collagen & Elasticity", moq: "500 Units", isActive: true },
        { id: "SR-05", name: "Kojic Acid Serum", slug: "kojic-acid-serum", categorySlug: "skincare-serums", tag: "Brightening & Tone", format: "Tyrosinase Inhibitor", target: "Dark Spots & Freckles", moq: "500 Units", isActive: true },

        // Column 2
        { id: "SR-06", name: "Niacinamide Serums", slug: "niacinamide-serums", categorySlug: "skincare-serums", tag: "Pores & Blemishes", format: "10% Niacinamide + 1% Zinc", target: "Enlarged Pores & Excess Sebum", moq: "500 Units", isActive: true },
        { id: "SR-07", name: "Retinol Serum", slug: "retinol-serum", categorySlug: "skincare-serums", tag: "Anti-Aging & Firming", format: "Encapsulated 0.5% Elixir", target: "Fine Lines & Cell Turnover", moq: "500 Units", isActive: true },
        { id: "SR-08", name: "Glycolic Acid Serum", slug: "glycolic-acid-serum", categorySlug: "skincare-serums", tag: "Pores & Blemishes", format: "Chemical Exfoliating Elixir", target: "Dead Cells & Texture", moq: "500 Units", isActive: true },
        { id: "SR-09", name: "Collagen Serum", slug: "collagen-serum", categorySlug: "skincare-serums", tag: "Anti-Aging & Firming", format: "Marine Collagen Solution", target: "Plumpness & Skin Bounce", moq: "500 Units", isActive: true },
        { id: "SR-10", name: "Salicylic Acid Serum / Acne Serum", slug: "salicylic-acid-serum", categorySlug: "skincare-serums", tag: "Pores & Blemishes", format: "BHA Clarifying Elixir", target: "Active Breakouts & Blackheads", moq: "500 Units", isActive: true },

        // Column 3
        { id: "SR-11", name: "Night Serum", slug: "night-serum", categorySlug: "skincare-serums", tag: "Anti-Aging & Firming", format: "Restorative Overnight Oil", target: "Cellular Rejuvenation", moq: "500 Units", isActive: true },
        { id: "SR-12", name: "Anti Aging Serum", slug: "anti-aging-serum", categorySlug: "skincare-serums", tag: "Anti-Aging & Firming", format: "Multi-Actives Firming Matrix", target: "Sagging Skin & Expression Lines", moq: "500 Units", isActive: true },
        { id: "SR-13", name: "Hyaluronic Acid Serum", slug: "hyaluronic-acid-serum", categorySlug: "skincare-serums", tag: "Hydration & Barrier", format: "Triple HA Dew Drops", target: "Immediate Skin Plumping", moq: "500 Units", isActive: true },
        { id: "SR-14", name: "Antioxidant Serum", slug: "antioxidant-serum", categorySlug: "skincare-serums", tag: "Brightening & Tone", format: "Ferulic & EGCG Shield", target: "Urban Pollution & Blue Light", moq: "500 Units", isActive: true },
      ],
    },
  },

  "suncare-moisturizers": {
    id: "CAT-04",
    slug: "suncare-moisturizers",
    aliases: ["skin-cream", "skincream", "moisturizer", "creams"],
    isActive: true,
    hero: {
      title: "Skin Cream",
      subtitle: "High-performance natural, organic, and herbal skin creams that deliver visible results.",
      bgImage: "/images/categories/cat-skin-cream.jpg",
    },
    manufacturerSection: {
      title: "SKIN CREAM MANUFACTURERS IN INDIA",
      subtitle: "Comprehensive Manufacturing Solutions for D2C & Retail Brands",
      image: "/images/categories/cat-skin-cream.jpg",
      imageAlt: "Skin Cream Manufacturing - Luxury Jars and Pumps",
      paragraphs: [
        {
          text: "When it comes to premium skin care solutions, Mani Lifestyle is a trusted Skin Cream Manufacturer in India, offering private label, third-party, and custom formulations tailored to your brand's needs. As a leading Private Label Skin Cream Manufacturer, we specialize in natural, organic, and herbal skin creams that deliver visible results.",
          highlight: "Skin Cream Manufacturer in India",
        },
        {
          text: "At Mani Lifestyle, we provide end-to-end skin care product manufacturing, ensuring high-quality formulations backed by advanced research. Our expertise includes: Custom Formulations, Private Label, Third-Party, and White Label manufacturing for startups and established businesses.",
        },
        {
          text: "We compound creams for targeted therapeutic needs: velvety ceramide barrier repair salves, oil-free gel hydrators, brightening day soufflés with Kojic Acid & Alpha Arbutin, night balms with Retinol, and photostable broad-spectrum SPF 50 sunscreen emulsions.",
        },
      ],
      highlights: [
        "Lamellar Liquid Crystal Ceramide Barrier Technology",
        "Zero-White-Cast Hybrid Sunscreen Creams SPF 50+ PA++++",
        "Climate-Tested Stability at 45°C / 75% RH",
        "Airless Pumps, Heavy-Base Glass Jars & Squeeze Tubes",
      ],
    },
    productRange: {
      title: "OUR BEAUTY CREAM RANGE",
      description: "Our comprehensive portfolio of 30 authentic dermatologically formulated creams:",
      filterTags: ["All Formulations"],
      items: [
        // Column 1
        { id: "CR-01", name: "BB Cream", slug: "bb-cream", categorySlug: "suncare-moisturizers", tag: "Specialty Body & Sun", format: "Tinted Daily Emulsion", target: "Natural Makeup Coverage & SPF", moq: "500 Units", isActive: true },
        { id: "CR-02", name: "Face Cream", slug: "face-cream", categorySlug: "suncare-moisturizers", tag: "Barrier & Hydration", format: "Velvet Day Cream", target: "Daily Barrier Protection", moq: "500 Units", isActive: true },
        { id: "CR-03", name: "Underarm Cream", slug: "underarm-cream", categorySlug: "suncare-moisturizers", tag: "Specialty Body & Sun", format: "Deo-Brightening Cream", target: "Friction Darkness & Odor", moq: "500 Units", isActive: true },
        { id: "CR-04", name: "Foot Cream", slug: "foot-cream", categorySlug: "suncare-moisturizers", tag: "Specialty Body & Sun", format: "Urea & Salicylic Balm", target: "Cracked Heels & Calluses", moq: "500 Units", isActive: true },
        { id: "CR-05", name: "Emollient Cream", slug: "emollient-cream", categorySlug: "suncare-moisturizers", tag: "Barrier & Hydration", format: "Lipid-Rich Salve", target: "Severe Dryness & Atopic Skin", moq: "500 Units", isActive: true },
        { id: "CR-06", name: "Body Lotion", slug: "body-lotion", categorySlug: "suncare-moisturizers", tag: "Specialty Body & Sun", format: "Light Hydrating Emulsion", target: "All-Over Body Moisture", moq: "500 Units", isActive: true },
        { id: "CR-07", name: "Night Cream", slug: "night-cream", categorySlug: "suncare-moisturizers", tag: "Anti-Aging & Night", format: "Cellular Restorative Balm", target: "Overnight Dermal Repair", moq: "500 Units", isActive: true },
        { id: "CR-08", name: "Pigmentation Cream", slug: "pigmentation-cream", categorySlug: "suncare-moisturizers", tag: "Brightening & Spots", format: "Active Spot Corrector", target: "Melasma & Dark Patches", moq: "500 Units", isActive: true },
        { id: "CR-09", name: "Oil Free Moisturizer", slug: "oil-free-moisturizer", categorySlug: "suncare-moisturizers", tag: "Barrier & Hydration", format: "Hydro-Gel Matrix", target: "Oily & Acne-Prone Skin", moq: "500 Units", isActive: true },
        { id: "CR-10", name: "Beauty Cream", slug: "beauty-cream", categorySlug: "suncare-moisturizers", tag: "Barrier & Hydration", format: "Nourishing Radiance Cream", target: "Daily Glow & Softness", moq: "500 Units", isActive: true },

        // Column 2
        { id: "CR-11", name: "Eczema Cream", slug: "eczema-cream", categorySlug: "suncare-moisturizers", tag: "Barrier & Hydration", format: "Colloidal Oat Salve", target: "Itch Relief & Barrier Repair", moq: "500 Units", isActive: true },
        { id: "CR-12", name: "Face Moisturizer", slug: "face-moisturizer", categorySlug: "suncare-moisturizers", tag: "Barrier & Hydration", format: "Daily Hydrating Emulsion", target: "Normal to Combination Skin", moq: "500 Units", isActive: true },
        { id: "CR-13", name: "Kojic Acid Cream", slug: "kojic-acid-cream", categorySlug: "suncare-moisturizers", tag: "Brightening & Spots", format: "Tyrosinase Inhibiting Soufflé", target: "Sun Tan & Blemish Scars", moq: "500 Units", isActive: true },
        { id: "CR-14", name: "Blackhead Remover Cream", slug: "blackhead-remover-cream", categorySlug: "suncare-moisturizers", tag: "Brightening & Spots", format: "Salicylic Exfoliating Balm", target: "Follicular Blackheads & Pores", moq: "500 Units", isActive: true },
        { id: "CR-15", name: "Under Eye Cream", slug: "under-eye-cream", categorySlug: "suncare-moisturizers", tag: "Specialty Body & Sun", format: "Caffeine & Peptide Gel-Cream", target: "Dark Circles & Morning Puffiness", moq: "500 Units", isActive: true },
        { id: "CR-16", name: "Pimple Cream", slug: "pimple-cream", categorySlug: "suncare-moisturizers", tag: "Brightening & Spots", format: "Spot-Targeted Antiseptic Paste", target: "Active Pustules & Red Blemishes", moq: "500 Units", isActive: true },
        { id: "CR-17", name: "Vitamin C Cream", slug: "vitamin-c-cream", categorySlug: "suncare-moisturizers", tag: "Brightening & Spots", format: "Radiance Day Cream", target: "Free Radical Damage & Glow", moq: "500 Units", isActive: true },
        { id: "CR-18", name: "Body Cream", slug: "body-cream", categorySlug: "suncare-moisturizers", tag: "Specialty Body & Sun", format: "Rich Whipped Butter", target: "Deep Body Hydration", moq: "500 Units", isActive: true },
        { id: "CR-19", name: "Lightening Cream", slug: "lightening-cream", categorySlug: "suncare-moisturizers", tag: "Brightening & Spots", format: "Botanical Radiance Soufflé", target: "Sun Tan & Uneven Tone", moq: "500 Units", isActive: true },
        { id: "CR-20", name: "Day Cream", slug: "day-cream", categorySlug: "suncare-moisturizers", tag: "Barrier & Hydration", format: "Light Protective Emulsion", target: "Urban Smog & Daytime Defense", moq: "500 Units", isActive: true },

        // Column 3
        { id: "CR-21", name: "Whitening Cream", slug: "whitening-cream", categorySlug: "suncare-moisturizers", tag: "Brightening & Spots", format: "Alpha-Arbutin Day Cream", target: "Dark Spots & Complexion Brightening", moq: "500 Units", isActive: true },
        { id: "CR-22", name: "Turmeric Cream", slug: "turmeric-cream", categorySlug: "suncare-moisturizers", tag: "Brightening & Spots", format: "Kasturi Haldi Radiance Salve", target: "Skin Inflammation & Golden Glow", moq: "500 Units", isActive: true },
        { id: "CR-23", name: "Vitamin E Cream", slug: "vitamin-e-cream", categorySlug: "suncare-moisturizers", tag: "Barrier & Hydration", format: "Deep Moisture Lipid Cream", target: "Dry, Flaky & Damaged Skin", moq: "500 Units", isActive: true },
        { id: "CR-24", name: "Collagen Cream", slug: "collagen-cream", categorySlug: "suncare-moisturizers", tag: "Anti-Aging & Night", format: "Pro-Collagen Firming Cream", target: "Elasticity Loss & Firmness", moq: "500 Units", isActive: true },
        { id: "CR-25", name: "Massage Cream", slug: "massage-cream", categorySlug: "suncare-moisturizers", tag: "Specialty Body & Sun", format: "Rich Glide Salon Cream", target: "Facial Lymphatic Circulation", moq: "500 Units", isActive: true },
        { id: "CR-26", name: "Brightening Cream", slug: "brightening-cream", categorySlug: "suncare-moisturizers", tag: "Brightening & Spots", format: "Active Luster Day Cream", target: "Dull & Weathered Complexions", moq: "500 Units", isActive: true },
        { id: "CR-27", name: "Aloe Vera Cream", slug: "aloe-vera-cream", categorySlug: "suncare-moisturizers", tag: "Barrier & Hydration", format: "Soothing Hydrosol Emulsion", target: "Sunburn, Redness & Sensitive Skin", moq: "500 Units", isActive: true },
        { id: "CR-28", name: "Dark Spot Removal Cream", slug: "dark-spot-removal-cream", categorySlug: "suncare-moisturizers", tag: "Brightening & Spots", format: "Targeted Depigmenting Cream", target: "Post-Acne Scars & Sun Spots", moq: "500 Units", isActive: true },
        { id: "CR-29", name: "Retinol Cream", slug: "retinol-cream", categorySlug: "suncare-moisturizers", tag: "Anti-Aging & Night", format: "Time-Release Night Salve", target: "Fine Lines & Skin Firmness", moq: "500 Units", isActive: true },
        { id: "CR-30", name: "Anti Aging Cream", slug: "anti-aging-cream", categorySlug: "suncare-moisturizers", tag: "Anti-Aging & Night", format: "Multi-Peptide Youth Cream", target: "Collagen Loss & Elasticity", moq: "500 Units", isActive: true },
      ],
    },
  },

  "body-bath-wellness": {
    id: "CAT-05",
    slug: "body-bath-wellness",
    aliases: ["essential-oil", "essentialoil", "bodycare"],
    isActive: true,
    hero: {
      title: "Essential Oil",
      subtitle: "Custom formulations and private label manufacturing for your essential oil brand.",
      bgImage: "/images/categories/cat-essential-oil.jpg",
    },
    manufacturerSection: {
      title: "ESSENTIAL OIL MANUFACTURER IN INDIA",
      subtitle: "Healing health problems with 100% natural essential oils",
      image: "/images/categories/cat-essential-oil.jpg",
      imageAlt: "Essential Oil Manufacturing - Amber Apothecary Bottles",
      paragraphs: [
        {
          text: "Mani Lifestyle stands as a leading name among essential oil manufacturers in India, celebrated for delivering premium quality products that meet global standards. We pride ourselves on being one of the best essential oil manufacturers, dedicated to producing a wide range of pure and natural oils for various applications.",
          highlight: "essential oil manufacturers in India",
        },
        {
          text: "As one of the top essential oil manufacturers in Ahmedabad, Mani Lifestyle specializes in producing high-quality aromatherapy oils that cater to diverse industries. Our commitment to excellence makes us a preferred partner for businesses seeking private label and contract manufacturing solutions.",
          highlight: "contract manufacturing solutions",
        },
        {
          text: "Mani Lifestyle emphasizes sustainability by sourcing only the finest, organic ingredients. We are a prominent organic and natural essential oil manufacturer, ensuring our products are safe, chemical-free, and eco-friendly.",
        },
      ],
      highlights: [
        "100% Pure Steam-Distilled Single Botanicals",
        "GC-MS Analytical Gas Chromatography Verified Purity",
        "Amber & Cobalt Blue UV-Blocking Dropper Packaging",
        "Aromatherapy Diffusers, Roll-Ons & Body Care Blends",
      ],
    },
    productRange: {
      title: "OUR ESSENTIAL OIL RANGE",
      description: "Our authentic single botanical therapeutic grade oils and aromatherapy blends:",
      filterTags: ["All Formulations"],
      items: [
        // Column 1
        { id: "EO-01", name: "Tea Tree Oil", slug: "tea-tree-oil", categorySlug: "body-bath-wellness", tag: "Medicinal & Clarifying", format: "100% Pure Steam-Distilled", target: "Acne, Blemishes & Antifungal", moq: "500 Units", isActive: true },
        { id: "EO-02", name: "Cedarwood Oil", slug: "cedarwood-oil", categorySlug: "body-bath-wellness", tag: "Woody & Grounding", format: "Virginian Cedarwood Distillate", target: "Scalp Health & Grounding Aroma", moq: "500 Units", isActive: true },
        { id: "EO-03", name: "Camphor Oil", slug: "camphor-oil", categorySlug: "body-bath-wellness", tag: "Medicinal & Clarifying", format: "Pure Cinnamomum Camphora", target: "Cooling Relief & Decongestion", moq: "500 Units", isActive: true },
        { id: "EO-04", name: "Gaultheria Oil", slug: "gaultheria-oil", categorySlug: "body-bath-wellness", tag: "Medicinal & Clarifying", format: "Wintergreen Methyl Salicylate", target: "Muscle Ache & Joint Comfort", moq: "500 Units", isActive: true },
        { id: "EO-05", name: "Rosemary Oil", slug: "rosemary-oil", categorySlug: "body-bath-wellness", tag: "Medicinal & Clarifying", format: "Spanish Cineole-Rich Botanical", target: "Hair Follicle & Mental Focus", moq: "500 Units", isActive: true },
        { id: "EO-06", name: "Frankincense Oil", slug: "frankincense-oil", categorySlug: "body-bath-wellness", tag: "Woody & Grounding", format: "Boswellia Serrata Resin Distillate", target: "Cellular Renewal & Anti-Aging", moq: "500 Units", isActive: true },
        { id: "EO-07", name: "Palmarosa Oil", slug: "palmarosa-oil", categorySlug: "body-bath-wellness", tag: "Floral & Calming", format: "Cymbopogon Martini Pure Distillate", target: "Moisture Balance & Gentle Scent", moq: "500 Units", isActive: true },
        { id: "EO-08", name: "Myrrh Oil", slug: "myrrh-oil", categorySlug: "body-bath-wellness", tag: "Woody & Grounding", format: "Commiphora Myrrha Resin Distillate", target: "Skin Soothing & Sacred Meditation", moq: "500 Units", isActive: true },
        { id: "EO-09", name: "Wintergreen Oil", slug: "wintergreen-oil", categorySlug: "body-bath-wellness", tag: "Medicinal & Clarifying", format: "Natural Methyl Salicylate", target: "Deep Muscle Rubs & Sports Balms", moq: "500 Units", isActive: true },
        { id: "EO-10", name: "Rose Oil", slug: "rose-oil", categorySlug: "body-bath-wellness", tag: "Floral & Calming", format: "Rosa Damascena Hydro-Distilled", target: "Luxury Skin Hydration & Aroma", moq: "500 Units", isActive: true },

        // Column 2
        { id: "EO-11", name: "Sandalwood Oil", slug: "sandalwood-oil", categorySlug: "body-bath-wellness", tag: "Woody & Grounding", format: "East Indian Santalum Album", target: "Sacred Aroma, Meditation & Skin", moq: "500 Units", isActive: true },
        { id: "EO-12", name: "Lavender Oil", slug: "lavender-oil", categorySlug: "body-bath-wellness", tag: "Floral & Calming", format: "French High-Linalool Oil", target: "Sleep, Stress Relief & Calming", moq: "500 Units", isActive: true },
        { id: "EO-13", name: "Ginger Oil", slug: "ginger-oil", categorySlug: "body-bath-wellness", tag: "Citrus & Energizing", format: "Zingiber Officinale Steam Extract", target: "Circulation Warming & Digestion", moq: "500 Units", isActive: true },
        { id: "EO-14", name: "Peppermint Oil", slug: "peppermint-oil", categorySlug: "body-bath-wellness", tag: "Medicinal & Clarifying", format: "High Menthol Field Mint", target: "Cooling Relief & Headache Soothe", moq: "500 Units", isActive: true },
        { id: "EO-15", name: "Vetiver Oil", slug: "vetiver-oil", categorySlug: "body-bath-wellness", tag: "Woody & Grounding", format: "Chrysopogon Zizanioides Root Oil", target: "Grounding Earthy Calm & Cooling", moq: "500 Units", isActive: true },
        { id: "EO-16", name: "Nilgiri Oil", slug: "nilgiri-oil", categorySlug: "body-bath-wellness", tag: "Medicinal & Clarifying", format: "Nilgiris High-Elevation Eucalyptus", target: "Respiratory Clear & Air Purifying", moq: "500 Units", isActive: true },
        { id: "EO-17", name: "Cypress Oil", slug: "cypress-oil", categorySlug: "body-bath-wellness", tag: "Woody & Grounding", format: "Cupressus Sempervirens Distillate", target: "Astringent Tone & Clear Breathing", moq: "500 Units", isActive: true },
        { id: "EO-18", name: "Lemongrass Oil", slug: "lemongrass-oil", categorySlug: "body-bath-wellness", tag: "Citrus & Energizing", format: "Cymbopogon Pure Steam Extract", target: "Insect Repellent & Refreshing", moq: "500 Units", isActive: true },
        { id: "EO-19", name: "Benzoin Oil", slug: "benzoin-oil", categorySlug: "body-bath-wellness", tag: "Woody & Grounding", format: "Styrax Benzoin Resin Extract", target: "Warm Vanilla-Like Sweet Calm", moq: "500 Units", isActive: true },
        { id: "EO-20", name: "Orange Oil", slug: "orange-oil", categorySlug: "body-bath-wellness", tag: "Citrus & Energizing", format: "Cold-Pressed Citrus Sinensis", target: "Uplifting Mood & Natural Aroma", moq: "500 Units", isActive: true },

        // Column 3
        { id: "EO-21", name: "Cedar Wood essential oils", slug: "cedar-wood-essential-oils", categorySlug: "body-bath-wellness", tag: "Woody & Grounding", format: "Atlas Cedar Distillate", target: "Aromatherapy & Calming Wood Note", moq: "500 Units", isActive: true },
        { id: "EO-22", name: "Eucalyptus Oil", slug: "eucalyptus-oil", categorySlug: "body-bath-wellness", tag: "Medicinal & Clarifying", format: "Pure Globulus Steam Extract", target: "Respiratory Clear & Joint Ache", moq: "500 Units", isActive: true },
        { id: "EO-23", name: "Ylang Ylang Oil", slug: "ylang-ylang-oil", categorySlug: "body-bath-wellness", tag: "Floral & Calming", format: "Cananga Odorata Extra Grade", target: "Sensual Aroma & Mood Balancing", moq: "500 Units", isActive: true },
        { id: "EO-24", name: "Citronella Oil", slug: "citronella-oil", categorySlug: "body-bath-wellness", tag: "Citrus & Energizing", format: "Cymbopogon Nardus Pure Extract", target: "Mosquito Defense & Outdoor Fresh", moq: "500 Units", isActive: true },
        { id: "EO-25", name: "Clove Oil", slug: "clove-oil", categorySlug: "body-bath-wellness", tag: "Medicinal & Clarifying", format: "Eugenia Caryophyllata Bud Oil", target: "Eugenol Antiseptic & Oral Care", moq: "500 Units", isActive: true },
        { id: "EO-26", name: "Cinnamon Oil", slug: "cinnamon-oil", categorySlug: "body-bath-wellness", tag: "Citrus & Energizing", format: "Cinnamomum Zeylanicum Bark Oil", target: "Spicy Warming Stimulant Aroma", moq: "500 Units", isActive: true },
        { id: "EO-27", name: "Patchouli Oil", slug: "patchouli-oil", categorySlug: "body-bath-wellness", tag: "Woody & Grounding", format: "Pogostemon Cablin Aged Leaves", target: "Deep Earthy Perfumery & Calm", moq: "500 Units", isActive: true },
        { id: "EO-28", name: "Bergamot Oil", slug: "bergamot-oil", categorySlug: "body-bath-wellness", tag: "Citrus & Energizing", format: "FCF Bergapten-Free Citrus", target: "Uplifting Bright Citrus Fragrance", moq: "500 Units", isActive: true },
        { id: "EO-29", name: "Jasmine Oil", slug: "jasmine-oil", categorySlug: "body-bath-wellness", tag: "Floral & Calming", format: "Jasminum Grandiflorum Extract", target: "Sensuous Floral Night Bloom", moq: "500 Units", isActive: true },
        { id: "EO-30", name: "Chamomile Essential Oil", slug: "chamomile-essential-oil", categorySlug: "body-bath-wellness", tag: "Floral & Calming", format: "German Blue Chamomile (Chamazulene)", target: "Deep Skin Soothing & Relaxation", moq: "500 Units", isActive: true },
      ],
    },
  },

  "masks-lip-eye": {
    id: "CAT-06",
    slug: "masks-lip-eye",
    aliases: ["sheet-masks", "sheetmasks", "masks"],
    isActive: true,
    hero: {
      title: "Sheet Mask",
      subtitle: "Delivering instant hydration and a youthful glow with our custom-formulated serum sheet masks.",
      bgImage: "/images/categories/cat-sheet-mask.jpg",
    },
    manufacturerSection: {
      title: "FACIAL SHEET MASK MANUFACTURER",
      subtitle: "Bio-Cellulose, Tencel & Foil Sheet Masks for Instant Glow",
      image: "/images/categories/cat-sheet-mask.jpg",
      imageAlt: "Face Sheet Mask Manufacturing - Bio-Cellulose and Foil Pouches",
      paragraphs: [
        {
          text: "Facial mask sheets intensely hydrate the skin to give you youthful and dewy looking skin. Using a serum sheet mask will restore your skin's moisture and natural glow.",
        },
        {
          text: "Applying a mask for 10 to 15 minutes provides a quick skincare solution, as the serum-soaked sheet gives skin an instant boost to fix sun damage and dehydration. This process helps you get brighter, plumper, and glowing skin.",
        },
        {
          text: "Mani Lifestyle is a leading manufacturer of skincare products, including a wide range of facial and beauty sheet masks with various soothing effects. We produce both dry and wet facial sheet masks, cosmetic wipes, hydrogel masks, bubbling sheet masks, bio-cellulose, and foil thermal masks with 25ml - 30ml concentrated serum loads.",
        },
      ],
      highlights: [
        "100% Biodegradable Tencel & Coconut Bio-Cellulose Fabrics",
        "25ml - 30ml Concentrated Dermal Serum Infusion per Pouch",
        "Hermetically Sealed Aluminum Barrier Pouches",
        "Custom Monocarton Boxes & Retail Multipacks",
      ],
    },
    productRange: {
      title: "FACE SHEET MASK RANGE WE OFFER",
      description: "Advanced sheet mask fabrics and therapeutic dermal infusions:",
      filterTags: ["All Formulations"],
      items: [
        // Column 1
        { id: "MSK-01", name: "Cotton Fiber Sheet Masks", slug: "cotton-fiber-sheet-masks", categorySlug: "masks-lip-eye", tag: "Fabric Substrates", format: "100% Pure Natural Cotton Sheet", target: "Daily Gentle Dermal Hydration", moq: "1,000 Units", isActive: true },
        { id: "MSK-02", name: "Herbal Facial Sheet Mask", slug: "herbal-facial-sheet-mask", categorySlug: "masks-lip-eye", tag: "Glow & Brightening", format: "Centella & Neem Hydrosol Infusion", target: "Soothing & Calming Redness", moq: "1,000 Units", isActive: true },
        { id: "MSK-03", name: "Gold Foil Sheet Mask", slug: "gold-foil-sheet-mask", categorySlug: "masks-lip-eye", tag: "Glow & Brightening", format: "Thermal Trapping Dual Layer", target: "Bridal Red-Carpet Radiance", moq: "1,000 Units", isActive: true },
        { id: "MSK-04", name: "Facial Dry Sheet Mask", slug: "facial-dry-sheet-mask", categorySlug: "masks-lip-eye", tag: "Fabric Substrates", format: "Freeze-Dried Waterless Active Matrix", target: "Custom Serum Activation at Home", moq: "1,000 Units", isActive: true },
        { id: "MSK-05", name: "Printed Cat facial Sheet Mask", slug: "printed-cat-facial-sheet-mask", categorySlug: "masks-lip-eye", tag: "Fabric Substrates", format: "Skin-Safe Food-Grade Printed Tencel", target: "Fun D2C Character Skincare", moq: "1,000 Units", isActive: true },

        // Column 2
        { id: "MSK-06", name: "Tencel Sheet Mask", slug: "tencel-sheet-mask", categorySlug: "masks-lip-eye", tag: "Fabric Substrates", format: "100% Biodegradable Eucalyptus Fiber", target: "Eco-Conscious Daily Care", moq: "1,000 Units", isActive: true },
        { id: "MSK-07", name: "Facial Sheet Mask for Sensitive Skin", slug: "facial-sheet-mask-for-sensitive-skin", categorySlug: "masks-lip-eye", tag: "Hydration & Plumping", format: "Hypoallergenic Oat Milk & Panthenol", target: "Reactive & Flaky Complexions", moq: "1,000 Units", isActive: true },
        { id: "MSK-08", name: "Cellulose facial Sheet Mask", slug: "cellulose-facial-sheet-mask", categorySlug: "masks-lip-eye", tag: "Fabric Substrates", format: "Ultra-Fine Plant Cellulose Web", target: "Maximum Moisture Retention", moq: "1,000 Units", isActive: true },
        { id: "MSK-09", name: "Bio-cellulose Sheet Mask", slug: "bio-cellulose-sheet-mask", categorySlug: "masks-lip-eye", tag: "Hydration & Plumping", format: "Fermented Coconut Nano-Fiber Matrix", target: "Second-Skin Transdermal Infusion", moq: "1,000 Units", isActive: true },
        { id: "MSK-10", name: "Facial Sheet Mask for Oily Skin", slug: "facial-sheet-mask-for-oily-skin", categorySlug: "masks-lip-eye", tag: "Detox & Clarifying", format: "Tea Tree & Salicylic Acid Hydro-Gel", target: "Sebum Control & Pore Minimizing", moq: "1,000 Units", isActive: true },

        // Column 3
        { id: "MSK-11", name: "Face Serum Sheet Mask", slug: "face-serum-sheet-mask", categorySlug: "masks-lip-eye", tag: "Hydration & Plumping", format: "Concentrated 30ml HA Infusion", target: "Post-Travel Intense Rehydration", moq: "1,000 Units", isActive: true },
        { id: "MSK-12", name: "Microfiber Sheet Masks", slug: "microfiber-sheet-masks", categorySlug: "masks-lip-eye", tag: "Fabric Substrates", format: "Silky Feather-Light Microfiber", target: "Snug Dermal Adhesion & Plumping", moq: "1,000 Units", isActive: true },
        { id: "MSK-13", name: "Printed Cat Facial Sheet Mask", slug: "printed-cat-facial-sheet-mask-2", categorySlug: "masks-lip-eye", tag: "Fabric Substrates", format: "Custom Patterned Beauty Sheet", target: "Selfie-Friendly Social Beauty", moq: "1,000 Units", isActive: true },
        { id: "MSK-14", name: "Facial Charcoal Sheet Masks", slug: "facial-charcoal-sheet-masks", categorySlug: "masks-lip-eye", tag: "Detox & Clarifying", format: "Bamboo Carbon Purifying Fabric", target: "Deep Pore Oil Clarification", moq: "1,000 Units", isActive: true },
      ],
    },
  },
};

/**
 * ========================================================
 * FUTURE ADMIN PANEL CRUD DATA ACCESS HELPERS
 * ========================================================
 * These normalized functions allow an Admin Dashboard / CMS API
 * to manage products and categories without touching UI JSX.
 */

export function getAllCategories(): CategoryShowcase[] {
  return Object.values(categoryShowcases);
}

export function getCategoryShowcase(slug: string): CategoryShowcase | undefined {
  if (categoryShowcases[slug]) {
    return categoryShowcases[slug];
  }
  for (const key in categoryShowcases) {
    const item = categoryShowcases[key];
    if (item.aliases.includes(slug)) {
      return item;
    }
  }
  return undefined;
}

export function getAllProducts(categorySlug?: string): RangeCardItem[] {
  if (categorySlug) {
    const cat = getCategoryShowcase(categorySlug);
    return cat ? cat.productRange.items : [];
  }
  const all: RangeCardItem[] = [];
  for (const cat of Object.values(categoryShowcases)) {
    all.push(...cat.productRange.items);
  }
  return all;
}

export function getProductById(id: string): RangeCardItem | undefined {
  for (const cat of Object.values(categoryShowcases)) {
    const found = cat.productRange.items.find((item) => item.id === id);
    if (found) return found;
  }
  return undefined;
}

export function getProductBySlug(categorySlug: string, productSlug: string): RangeCardItem | undefined {
  const cat = getCategoryShowcase(categorySlug);
  if (!cat) return undefined;
  return cat.productRange.items.find(
    (item) => item.slug === productSlug || item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === productSlug
  );
}
