export interface FAQItem {
  question: string;
  answer: string;
  category: "moq" | "formulation" | "packaging" | "export" | "quality";
}

export const faqsData: FAQItem[] = [
  {
    category: "moq",
    question: "What is your Minimum Order Quantity (MOQ) for new brand startups?",
    answer: "We support emerging indie beauty and D2C brands through our Startup Incubator Program with flexible MOQs starting at just 500 units for our pre-tested private label formulas. For bespoke custom formulations requiring novel active compounding, our typical run begins at 1,000 to 2,500 units depending on primary packaging requirements.",
  },
  {
    category: "formulation",
    question: "Can I customize the active ingredients, fragrance, and texture?",
    answer: "Yes, absolutely! Under our Custom Formulation (ODM) model, our in-house formulation chemists work directly with your brand brief. You can select specific active percentages (e.g. Niacinamide, Retinol, Hyaluronic acid), specify botanical extracts, choose fragrance-free or custom fine fragrance notes, and adjust sensory viscosity from light watery lotions to rich melting butters.",
  },
  {
    category: "formulation",
    question: "Do I own the intellectual property (IP) and formulation rights?",
    answer: "For all custom formulation projects, once the development fee and agreed commercial production milestones are fulfilled, complete formulation exclusivity and proprietary ownership rights are formally transferred to your brand under a strict Non-Disclosure Agreement (NDA).",
  },
  {
    category: "packaging",
    question: "Can I supply my own packaging materials, or do you source them?",
    answer: "Both options are readily available! You may supply your own custom bottles, tubes, or cartons to our warehouse following our incoming QA inspection standards. Alternatively, you can leverage our established global vendor network for turn-key sourcing of airless pumps, amber glass droppers, aluminum tubes, and eco-friendly PCR plastics.",
  },
  {
    category: "quality",
    question: "What quality assurance and stability tests are performed on each batch?",
    answer: "Every single production batch undergoes stringent in-house analytical testing: pH measurement, viscosity tracking, specific gravity, microbiological limit testing (aerobic plate count, yeast/mold), and heavy metal assays. We also conduct accelerated 90-day stability tests in environmental chambers at 40°C/75% RH to guarantee shelf life.",
  },
  {
    category: "export",
    question: "Do you provide international export documentation and customs dossiers?",
    answer: "Yes. We actively export to over 25 countries across North America, Europe, the GCC, Africa, and Southeast Asia. We supply comprehensive export documentation including Certificate of Analysis (COA), Material Safety Data Sheet (MSDS), Free Sale Certificate (FSC), Certificate of Origin (COO), and Product Information File (PIF) dossiers.",
  },
  {
    category: "moq",
    question: "What is the standard turnaround time from sample approval to delivery?",
    answer: "For stock private label products with approved packaging, standard dispatch turnaround is approximately 21 to 25 business days. For novel custom formulations, initial bench prototype samples are delivered within 7 to 10 days, with full-scale production dispatched within 30 to 35 days following final stability and packaging sign-off.",
  },
];
