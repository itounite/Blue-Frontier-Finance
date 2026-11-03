// =====================================================================
// Blue Frontier Finance — Site Content
// A Strategic Collaboration Between Beyond Impact & UMITO Partners
// =====================================================================

import heroFields from "@/assets/images/ocean_marine_biotech_hero_1793609678120.jpg";
import heroBio from "@/assets/images/ocean_surface_blue_frontier_1793609681201.jpg";
import heroLab from "@/assets/images/marine_bio_lab_research_1793609681349.jpg";
import heroEarth from "@/assets/images/seaweed_regenerative_cultivation_1793609678865.jpg";
import transitionRupture from "@/assets/images/ocean_deep_blue_algae_farm_1793609732681.jpg";
import sectorMaterials from "@/assets/images/marine_biomaterials_algae_1793609731930.jpg";
import sectorNutrition from "@/assets/images/microalgae_bioreactor_algae_1793609680234.jpg";
import sectorPharma from "@/assets/images/marine_bio_lab_research_1793609681349.jpg";
import sectorIngredients from "@/assets/images/blue_bio_ingredients_spirulina_1793609733121.jpg";

import teamClaire from "@/assets/team/claire.png";
import teamShunji from "@/assets/team/shunji.png";
import teamSagar from "@/assets/team/sagar.png";
import teamTarja from "@/assets/team/tarja.png";
import advisorMichael from "@/assets/team/michael-adams.png";
import advisorTorsten from "@/assets/team/torsten-thiele.png";
import partnerMirabelle from "@/assets/team/mirabelle-adams.png";
import partnerPeter from "@/assets/team/peter-yu.png";

export const heroOcean = heroBio;
export const heroSeaweed = heroEarth;
export const heroBiotech = heroFields;
export const heroMarineLab = heroLab;
export const heroAlgaeFarm = transitionRupture;

export const site = {
  brand: "Blue Frontier Finance",
  tagline: "Accelerating the transition towards a New Blue Economy across Europe, Japan and APAC.",
  contactEmail: "invest@beyondimpact.vc",
  secondaryEmail: "info@umitopartners.com",
  founded: 2017,
  navLinks: [
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/our-work" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Insights", href: "/insights" },
  ],
  social: [
    { label: "Twitter", href: "https://twitter.com/BeyondInvest" },
    { label: "Facebook", href: "https://www.facebook.com/beyondinvesting/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/beyond-impact-advisors/" },
  ],
  funding: {
    label: "Submit your venture",
    intro: "If you are an ocean deep-tech, marine-bio, blue food or blue carbon founder building across Japan, Europe or APAC, we want to hear from you.",
    href: "https://bit.ly/fundregenerative",
    display: "Submit your venture",
  },
  investors: {
    label: "Partner with us",
    intro: "Foundations, family offices, and corporate strategic partners interested in Blue Frontier Finance can connect with our joint team.",
    href: "mailto:invest@beyondimpact.vc?cc=info@umitopartners.com&subject=Blue%20Frontier%20Finance%20Inquiry",
    display: "Partner with us",
  },
};

export const home = {
  hero: {
    eyebrow: "Beyond Impact × UMITO Partners · Strategic Collaboration",
    headlineLead: "Capital for the",
    headlineScript: "New Blue",
    headlineRest: "Economy.",
    sub: "Blue Frontier Finance is a collaborative impact venture initiative between Beyond Impact and UMITO Partners, deploying capital, operational expertise, and bilateral bridges to restore marine ecosystems while building resilient ocean supply chains across Japan, Europe, and APAC.",
    primaryCta: { label: "Explore the Three Legs", href: "#three-legs" },
    secondaryCta: { label: "Our Blue Portfolio", href: "/portfolio" },
    image: heroFields,
  },
  threeLegs: [
    {
      num: "01",
      title: "Co-Investment Opportunities & Investor Education",
      tagline: "Beyond Transactions — Hands-On Portfolio Management",
      body: "We educate foundations, family offices, and corporate partners on why our ocean thesis unlocks superior value. Through our proprietary dealflow platform and transaction management, we provide institutional diligence memos and enable direct co-investments into high-conviction rounds, coupled with hands-on post-investment portfolio management.",
      highlights: [
        "Proprietary online deal room backed by 10,000+ investor network",
        "Curated diligence memos, commercialisation and regulatory roadmaps",
        "Active board and observer representation to drive corporate scale",
      ],
    },
    {
      num: "02",
      title: "Ecosystem Building, Insights & Blue Awards",
      tagline: "Study Sessions, Thought Leadership & Global Recognition",
      body: "We believe the future is blue. We nurture the cross-regional ocean ecosystem by conducting study sessions, policy workshops, executive roundtables, whitepapers, and proprietary market intelligence connecting Japan, APAC, and Europe — alongside hosting the prestigious Blue Awards celebrating pioneering ocean startups.",
      highlights: [
        "Executive study sessions & workshops for institutional allocators",
        "High-impact whitepapers on marine biotech & blue carbon",
        "The Blue Awards — spotlighting top ocean innovators across Japan, APAC & Europe",
      ],
    },
    {
      num: "03",
      title: "Dedicated Investment Vehicle",
      tagline: "Institutional Governance & Bilateral Deployment",
      body: "For qualified institutional partners, family offices, and strategic corporates seeking to deploy capital through our specialized investment vehicle, our collaborative infrastructure combines Luxembourg-governed operational excellence with Japanese on-the-ground implementation.",
      highlights: [
        "Structured under established Luxembourg institutional governance",
        "Connecting European deep-tech science with Japanese coastal implementation",
        "To partner with us in the investment vehicle, reach out to our joint team",
      ],
      cta: {
        text: "Reach out at info@umitopartners.com or invest@beyondimpact.vc",
        href: "mailto:info@umitopartners.com?cc=invest@beyondimpact.vc&subject=Blue%20Frontier%20Finance%20Investment%20Vehicle",
      },
    },
  ],
  missionCallout: {
    eyebrow: "Structural Inflection Point",
    title: "The marine fish supply chain is not 'at risk' — it is actively breaking.",
    body: "Overfished global stocks surged from 10% to 35.5% since 1974. Marine ingredients in aquafeed plummeted from 25% to 3%. Fishmeal and fish oil prices quadrupled. Yet our oceans generate 7% of global GDP while receiving less than 1% of sustainable investment dollars. We back the B2B innovators replacing fragile chains with regenerative, scalable solutions.",
    image: transitionRupture,
    stats: [
      { value: "35.5%", label: "Global marine fish stocks now overfished or collapsed" },
      { value: "25% → 3%", label: "Marine ingredients in aquafeed (2000–2023)" },
      { value: "4x – 9.5x", label: "Fishmeal and fish oil price inflation since 2000" },
      { value: "<1%", label: "Sustainable capital flowing to ocean solutions ($24T economy)" },
    ],
  },
  stats: [
    { value: "$200M+", label: "Combined track record across impact platforms & ocean initiatives" },
    { value: "33+", label: "Venture investments & certified sustainable marine projects" },
    { value: "7+ yrs", label: "Investing directly in early-stage bioeconomy & ocean solutions" },
    { value: "B Corp", label: "Japan's 1st certified ocean sustainability consulting pioneer" },
  ],
  sectors: [
    {
      name: "Blue Bio & Foods",
      desc: "Sustainable marine proteins, microalgae cultivation, fermentation-based seafood alternatives, and upcycled ocean ingredients.",
      image: sectorNutrition,
      market: "Potential Market Size >25B (2034)",
    },
    {
      name: "Marine Bio-Materials",
      desc: "Seaweed-based packaging, diatom silica (Algica®), marine biopolymers, and high-margin cosmetics & pharma ingredients.",
      image: sectorMaterials,
      market: "Potential Market Size >5B (2030)",
    },
    {
      name: "Ocean Climate-Tech",
      desc: "Marine carbon sequestration, ocean monitoring sensors, pollution remediation, and maritime decarbonization.",
      image: sectorPharma,
      market: "Potential Market Size >29B (2030)",
    },
  ],
  partnership: {
    title: "Partner with Blue Frontier Finance.",
    body: "Connecting European deep-tech science and Japanese operational leadership to accelerate the New Blue Economy. To explore co-investments, join our ecosystem study sessions, or partner in our investment vehicle, reach out to our joint team.",
    primaryCta: { label: "Email invest@beyondimpact.vc", href: "mailto:invest@beyondimpact.vc" },
    secondaryCta: { label: "Email info@umitopartners.com", href: "mailto:info@umitopartners.com" },
  },
};

export const about = {
  hero: {
    eyebrow: "Beyond Impact × UMITO Partners · Blue Frontier Finance",
    title: "A bilateral alliance for ocean resilience.",
    sub: "Blue Frontier Finance is a collaborative initiative between Beyond Impact — Europe's pioneer Article 9 SFDR impact venture platform — and UMITO Partners — Tokyo's premier ocean sustainability and sustainable fisheries consulting firm. Together, we bridge European deep-tech innovation with Japanese coastal and industrial implementation.",
    image: heroLab,
  },
  values: [
    {
      tag: "01",
      title: "Supply Chain Resilience",
      body: "Decoupling critical food and material supplies from collapsed wild fisheries. We invest in superior B2B alternatives with real unit economics.",
    },
    {
      tag: "02",
      title: "Bilateral Science Bridge",
      body: "Bridging Horizon Europe's €52B+ scientific consortia with Japan's deep maritime heritage, commercial seafood cooperatives, and corporate partners.",
    },
    {
      tag: "03",
      title: "Ocean Ecosystem Additionality",
      body: "Moving beyond passive mitigation to net-positive restoration — liberating marine habitats, sequestering carbon, and ensuring toxin-free nutrition.",
    },
  ],
  team: [
    {
      name: "Claire Smith",
      org: "Beyond Impact",
      role: "Founder & CIO",
      photo: teamClaire,
      bio: "Founder of Beyond Investing and Beyond Animal platform with 35+ years of financial management experience. Former Head of Equity Quantitative Strategies at Albourne Partners Limited, Head of Investor Derivative Marketing at UBS, and Head of Convertible Sales at Swiss Bank Corporation. Pioneer early investor in Geltor, EVERY, Mosa Meat, SuperMeat, and BlueNalu.",
    },
    {
      name: "Shunji Murakami",
      org: "UMITO Partners",
      role: "CEO, UMITO Partners",
      photo: teamShunji,
      bio: "CEO of UMITO Partners with over a decade of marine conservation and sustainable fisheries leadership across Japan. Former Japan Program Director at Wild Salmon Center and Ocean Outcomes (O2), and Executive Vice President at Seafood Legacy. Serves on Asia Pacific FIP Community of Practice Council and Japan's Aquaculture Industrialization Promotion Council.",
    },
    {
      name: "Sagar Tandon",
      org: "Beyond Impact",
      role: "Partner",
      photo: teamSagar,
      bio: "Specialised bioeconomy vehicle designer. Historically involved in setting up 2 impact vehicles — Gray Matters Capital (managing over $200M in AUM) and an Australian Government DFAT-backed impact vehicle. Led investments in 20+ early-stage ventures. Active mentor at Good Food Institute India & APAC, FI Food APAC, and Fashion for Good (Netherlands). Advisor at 2X Global Forum and 2X Ignite. Board seats: Swedish Algae Factory (Sweden), TissenBioFarm (South Korea), Perfat (Finland).",
    },
    {
      name: "Tarja Zudemberg",
      org: "Beyond Impact",
      role: "Partner",
      photo: teamTarja,
      bio: "20+ years of direct experience in venture capital, impact investing, and SME financing. Spent 13 years as CEO and Fund Manager at Almi Invest, executing 100+ transactions across 60+ portfolio companies and holding 30 board seats. Active angel investor in early-stage Nordic startups focused on sustainable climate and ocean goals.",
    },
  ],
  advisors: [
    {
      name: "D. Michael Adams",
      role: "Advisor & ICOM Member",
      affiliation: "Founder, Ocean Assets",
      photo: advisorMichael,
      bio: "Founded Ocean Assets in 2016 after a 30-year career in investment banking and a lifelong passion for the ocean. Established Ocean Assets Institute to mobilize private capital into impactful ocean-related projects and blue-economy ventures globally.",
    },
    {
      name: "Torsten Thiele",
      role: "Strategic Advisor",
      affiliation: "Founder, Global Ocean Trust",
      photo: advisorTorsten,
      bio: "Leading global expert in ocean governance and sustainable blue finance with over 20 years of experience in project and infrastructure finance at premier financial institutions. Dedicated to structuring innovative financing mechanisms for ocean resilience.",
    },
    {
      name: "Mirabelle Adams",
      role: "Venture Partner, Sourcing",
      affiliation: "HEG Geneva · Ocean Assets",
      photo: partnerMirabelle,
      bio: "BSc in International Business Management from HEG Geneva (2025). Multilingual in English, French, German, and Japanese. Led strategic project research for Ocean Assets and the Caribbean Biodiversity Fund, specializing in cross-border ocean deal origination.",
    },
    {
      name: "Peter Yu",
      role: "Venture Partner, Tech DD",
      affiliation: "Program Director, APAC-SCA",
      photo: partnerPeter,
      bio: "Program Director of the APAC Society for Cellular Agriculture (APAC-SCA), leading regulatory coordination and strategic partnerships across Asia-Pacific. Advises on novel food and biotechnology investments with prior equity research experience at BNP Paribas Securities.",
    },
  ],
  impactPillars: {
    eyebrow: "Impact Framework",
    title: "Three pillars of ocean impact — measured, verifiable, and net-positive.",
    sub: "Every company supported through Blue Frontier Finance is assessed against concrete ocean resilience metrics.",
    pillars: [
      {
        icon: "Sprout",
        name: "Marine Biodiversity & Restoration",
        points: [
          "Track animal lives spared and wild marine populations protected through cellular aquaculture and precision fermentation.",
          "Enable coastal habitat rewilding, seagrass regeneration, and mangrove preservation.",
          "Net-positive ecosystem gains measured via standardized marine biodiversity frameworks.",
        ],
      },
      {
        icon: "Globe2",
        name: "Blue Climate Action",
        points: [
          "Target aggressive methane mitigation through seaweed cultivation and functional microalgae.",
          "Prioritize high-durability marine carbon sequestration and maritime decarbonization.",
          "Benchmark all portfolio companies against global net-zero and science-aligned pathways.",
        ],
      },
      {
        icon: "HeartPulse",
        name: "Clean & Safe Marine Nutrition",
        points: [
          "Decouple human and animal diets from microplastics, mercury, PFAS, and heavy metal bioaccumulation.",
          "Eliminate antibiotics and zoonotic risks inherent in industrial aquaculture cage systems.",
          "Produce bio-available, nutrient-dense marine ingredients with superior taste and functionality.",
        ],
      },
    ],
  },
  credentials: [
    {
      org: "Beyond Impact VC",
      title: "Pioneer Impact VC & Article 9 Track Record",
      details: "Founded in 2017 with $191M+ AUM across venture vehicles, co-investments, and public indexes. Winner of IA 50 Emerging Impact Manager (2026) and Ethical Finance Awards Best Impact-Focused Firm (2024).",
      url: "https://beyondimpact.vc",
      displayUrl: "beyondimpact.vc",
    },
    {
      org: "UMITO Partners",
      title: "Japan's Leading Voice in the New Blue Economy",
      details: "B Corp Certified and named 'Regenerative Company 2025' by WIRED Japan. Deployed $10M+ across 10+ sustainable fisheries initiatives and achieved 5 prestigious MSC and ASC certifications across Japan.",
      url: "https://umitopartners.com",
      displayUrl: "umitopartners.com",
    },
  ],
};

export const advisory = {
  hero: {
    eyebrow: "Blue Frontier Finance — Platform Architecture",
    title: "Three legs driving the New Blue Economy.",
    sub: "We bridge European deep-tech and Japanese industrial execution — offering hands-on co-investments, transformative ecosystem building, and specialized vehicle partnerships.",
    image: heroLab,
  },
  legs: [
    {
      id: "co-investment",
      num: "01",
      eyebrow: "Direct Capital Deployment",
      title: "Co-Investment Opportunities & Investor Education",
      subtitle: "Beyond Transactions — Hands-On Portfolio Management",
      body: "We work directly with foundations, family offices, and corporate investors seeking exposure to the regenerative blue economy. We demystify the science, share comprehensive diligence memos, and structure direct co-investments into high-conviction ventures.",
      bullets: [
        "Educating allocators on market dynamics, unit economics, and regulatory milestones in marine bio and climate tech",
        "Proprietary dealflow originating from Beyond Animal's 10,000+ investor platform and UMITO Partners' maritime network",
        "Hands-on portfolio management beyond transactions: board representation, commercial partner introductions, and scaling assistance",
        "Transparent diligence memos covering IP defensibility, bioprocess scale-up, and techno-economic validation",
      ],
      ctaText: "Explore Co-Investments",
      ctaHref: "mailto:invest@beyondimpact.vc?subject=Co-Investment%20Opportunities%20Inquiry",
    },
    {
      id: "ecosystem",
      num: "02",
      eyebrow: "Ecosystem & Knowledge Leadership",
      title: "Ecosystem Building, Study Sessions & Blue Awards",
      subtitle: "The Future is Blue — Across Japan, APAC and Europe",
      body: "Transforming the ocean economy requires an informed investor community and empowered startup founders. We host study sessions, policy workshops, executive roundtables, and publish groundbreaking research connecting European science with Japanese industry.",
      bullets: [
        "Curated study sessions & executive workshops for institutional investors, corporations, and government agencies",
        "Proprietary insights, whitepapers, and market reports on marine biopolymers, aquafeed transitions, and blue carbon",
        "The Annual Blue Awards: spotlighting, mentoring, and awarding the most promising ocean startups across Japan, APAC, and Europe",
        "Bridging academia, research institutes, seafood cooperatives, and corporate innovation units",
      ],
      ctaText: "Join Our Study Sessions",
      ctaHref: "mailto:info@umitopartners.com?subject=Ecosystem%20%26%20Study%20Sessions%20Inquiry",
    },
    {
      id: "vehicle",
      num: "03",
      eyebrow: "Specialized Vehicle Partnership",
      title: "Partner with Us in the Investment Vehicle",
      subtitle: "Institutional Architecture & Cross-Border Deployment",
      body: "We maintain private, institutional-grade vehicle infrastructure to deploy targeted capital into pre-Series A through Series B deep-tech blue economy ventures. We invite aligned institutional allocators, strategic corporates, and family offices to collaborate directly with our joint team.",
      bullets: [
        "Structured under established Luxembourg institutional governance and AIFM oversight",
        "Bilateral Japan–Europe sourcing combining Japanese operational heritage with European deep-tech science",
        "Disciplined B2B selection targeting high-margin beachhead markets and avoiding commodity price traps",
        "Confidential institutional discussions available upon direct request",
      ],
      ctaText: "Connect with the Joint Team",
      ctaHref: "mailto:info@umitopartners.com?cc=invest@beyondimpact.vc&subject=Investment%20Vehicle%20Partnership%20Inquiry",
    },
  ],
};

export const portfolio = {
  hero: {
    eyebrow: "Blue Economy Portfolio",
    title: "Disruptive marine biotech, cell ag & bio-materials.",
    sub: "Pioneering companies driving the New Blue Economy across cellular aquaculture, diatom microalgae, precision fermentation, and synthetic biology.",
  },
  companies: [
    {
      name: "BlueNalu",
      category: "Cellular Aquaculture",
      focus: "Cell Ag Bluefin Tuna",
      raised: ">$100 million",
      region: "United States",
      desc: "Global pioneer in cellular agriculture producing premium, sushi-grade seafood directly from fish cells — eliminating overfishing, mercury, and microplastics while preserving ocean biodiversity.",
      deckNote: "Pioneer in cellular agriculture producing high-quality, sustainable seafood directly from fish cells.",
    },
    {
      name: "Swedish Algae Factory",
      category: "Microalgae & Diatoms",
      focus: "Diatom Nanomaterials (Algica®)",
      raised: ">€12 million",
      region: "Sweden (EU)",
      desc: "Cultivates microscopic diatoms to produce Algica®, a patented, circular silica nanomaterial used in over 60 personal care formulations, UV protection, skincare, and high-tech battery applications.",
      deckNote: "Cultivates microscopic diatoms to produce Algica, a high-performance silica material used in skincare, wound care, and biomaterials.",
    },
    {
      name: "Umami Bioworks",
      category: "Cellular Aquaculture",
      focus: "Cell Ag Aqua Nutrients & Crustaceans",
      raised: ">$10 million",
      region: "Singapore (APAC)",
      desc: "The world's first company to create cultivated crustaceans and fish species. Develops automated, modular production systems and AI-driven bioreactor software to scale cultivated seafood globally.",
      deckNote: "First company globally to create cultivated crustaceans; develops automated modular systems to efficiently scale cultivated seafood.",
    },
    {
      name: "Ingrediome",
      category: "Precision Fermentation",
      focus: "Cyanobacteria Fermentation",
      raised: ">$5 million",
      region: "Israel & US",
      desc: "Produces functional, highly nutritional bio-identical animal and seafood proteins using photosynthetic cyanobacterial precision fermentation driven by CO₂ and light.",
      deckNote: "Production of functional and highly nutritional animal proteins using cyanobacterial-based precision fermentation.",
    },
    {
      name: "Algama",
      category: "Microalgae Ingredients",
      focus: "Microalgae-Based Functional Ingredients",
      raised: ">€20 million",
      region: "France (EU)",
      desc: "Creates innovative functional nutrients and ingredients derived from microalgae extracts, delivering enhanced nutritional profiles, antioxidant properties, and superior emulsification for food and beverage.",
      deckNote: "Creating innovative functional nutrients and ingredients containing extracts of micro-algae, with improved nutritional and gustative properties.",
    },
    {
      name: "Geltor",
      category: "Synthetic Biology",
      focus: "Animal-Free Collagen & Biodesigned Proteins",
      raised: ">$100 million",
      region: "United States",
      desc: "Develops superior texture solutions and high-performance proteins using synthetic biology for premium nutrition, clinical skincare, personal care, and pharmaceutical therapeutics.",
      deckNote: "Developing superior texture solutions, designed and built with synthetic biology for use in nutrition, personal care and pharmaceuticals.",
    },
  ],
};

export const insights = {
  hero: {
    eyebrow: "Field Notes & Intelligence",
    title: "Strategy, signal and the New Blue Economy.",
    sub: "Perspectives from Beyond Impact and UMITO Partners on ocean supply-chain disruption, marine biotechnology, and ecosystem building.",
  },
  articles: [
    {
      tag: "Blue Thesis",
      title: "The marine supply chain is breaking — why the New Blue Economy is urgent.",
      excerpt: "Wild catch plateaus, marine feed prices surge 400%, and ocean biodiversity declines. We break down the bilateral Japan-Europe investment window.",
      date: "Nov 2026",
      readTime: "8 min",
    },
    {
      tag: "Ecosystem",
      title: "Why Japan and Europe are the twin engines of ocean innovation.",
      excerpt: "With Japan joining Horizon Europe Pillar II and Expo 2025 Osaka showcasing ocean deep tech, bilateral collaboration is turning into an industrial superpower.",
      date: "Oct 2026",
      readTime: "10 min",
    },
    {
      tag: "Specialist Filter",
      title: "Bypassing the commodity trap in marine bio and cultivated food.",
      excerpt: "Why we prioritize high-margin beachheads in cosmetics, functional ingredients, and high-value species before racing toward commodity price parity.",
      date: "Sep 2026",
      readTime: "7 min",
    },
    {
      tag: "Blue Awards",
      title: "Spotlighting pioneer ocean startups: insights from the Blue Awards.",
      excerpt: "From microalgae bio-factories to non-invasive ocean sensors, how early-stage ventures in APAC and Europe are solving critical supply bottlenecks.",
      date: "Aug 2026",
      readTime: "6 min",
    },
  ],
  newsletter: {
    title: "Join the Blue Frontier Community.",
    body: "Quarterly intelligence from the intersection of European deep tech and Japanese ocean industry. No spam — just pure signal.",
  },
};
