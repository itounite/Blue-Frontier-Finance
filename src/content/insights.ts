// Insights — long-form essays and opinion pieces from the Beyond Impact team.
// Each insight renders as its own page at /insights/:slug
import fundraisingWinterBlip from "@/assets/insights/fundraising-winter-blip.png";
import theresaPortrait from "@/assets/insights/theresa-rothenbuecher.png";
import seaweedFarmPhoto from "@/assets/insights/seaweed-farm-uroa-zanzibar.jpg";
import facultyBiotechPhoto from "@/assets/insights/faculty-food-engineering-biotechnology.jpg";



export interface Insight {
  slug: string;
  title: string;
  author: string;
  authorRole?: string;
  authorImage?: string;
  date: string;
  category: string;
  excerpt: string;
  // Body is an array of blocks. "p" = paragraph, "h2" = subhead, "ul" = bullet list, "quote" = blockquote
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "quote"; text: string; cite?: string }
    | { type: "img"; src: string; alt: string; caption?: string; credit?: { name: string; url: string; license?: string; licenseUrl?: string } }
  >;

}

export const insights: Insight[] = [
  {
    slug: "why-biotechnology-is-the-only-long-term-plan-humanity-has-left",
    title: "Why Biotechnology Is the Only Long-Term Plan Humanity Has Left",
    author: "Theresa Rothenbücher",
    authorRole: "Scientific Expert, Beyond Impact",
    authorImage: theresaPortrait,
    date: "October 14, 2026",
    category: "Biotechnology",
    excerpt: "Theresa Rothenbücher on replacing fossil-based supply chains with biotechnology, the policy momentum behind the bioeconomy, and our responsibility to build a lasting alternative.",
    body: [
      { type: "img", src: facultyBiotechPhoto, alt: "Scientist working in the Faculty of Food Engineering and Biotechnology", caption: "Biotechnology labs bring biological production from scientific research toward industrial applications.", credit: { name: "Ibrahim Khairov / Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Faculty_of_Food_Engineering_and_Biotechnology_1.jpg", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/" } },
      { type: "p", text: "Sometimes, I wonder what the world would look like if we had kept worshiping nature instead of human-centered religions. What if we had retained a deep, visceral respect for the natural systems that nourish us?" },
      { type: "p", text: "And sometimes I ask myself \"What if mineral oil had never existed?\"" },
      { type: "p", text: "What if humanity had been forced, out of sheer necessity, to take the complex, elegant paths of biology instead of relying on cheap fossil carbon?" },
      { type: "p", text: "When whale populations were facing total collapse in the 19th century, it wasn't empathy, or conservation policies that saved them, it was the discovery that we could burn petroleum instead of whale blubber. Decades later, when chemists developed synthetic plastics, they did so with the best of intentions. They created durable, lightweight materials to solve immediate human problems. Nobody could have imagined the scale at which we would produce them, or the absurd, single-use items we would create from it." },
      { type: "p", text: "We can be forgiving of the generations living in the first half of the 20th century. Up until the 1970s, it was hard to predict the true planetary footprint of industrialization." },
      { type: "p", text: "But history will not be so mild to us." },
      { type: "p", text: "We know exactly what happens if we continue on the trajectory of recent decades. We have the data, we see the thermal anomalies, and we are witnessing ecosystem collapse in real time. We are witnessing mass extinction and loss of biodiversity. The generations before us built a quick fix; a short-sighted, fossil-fueled industrial model. It was never a long-term solution." },
      { type: "p", text: "It is now our responsibility to dismantle this unsustainable industry and build a bio-based economy that keeps humans, animals, and the planet alive." },
      { type: "img", src: seaweedFarmPhoto, alt: "Seaweed farming at Uroa on the coast of Zanzibar", caption: "Seaweed farming at Uroa, Zanzibar — regenerative ocean cultivation already feeding communities without depleting the planet.", credit: { name: "Moongateclimber / Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Seaweed_farm_uroa_zanzibar.jpg", license: "Public Domain" } },
      { type: "p", text: "We are living in exciting times. We are the ones that will introduce the industrial pivot point." },
      { type: "p", text: "The encouraging truth is that we don't have to start from scratch. Over the past decades, biotech innovators have developed the foundational tools required to replace fossil-based supply chains right now. While not every bio-based material or cellular product has reached the technical maturity required for industrial upscaling, we are getting remarkably close to making petroleum-based solutions obsolete." },
      { type: "p", text: "We are living through a massive historical pivot." },
      { type: "p", text: "Governments and global markets have finally realized that the path forward goes through biotechnology. The EU, US among other nations are injecting public capital into biotech for food, medicine, materials and other industries to ensure resilience and national security. For investors, this marks a fundamental shift: investments in the bioeconomy are now significantly de-risked by policy tailwinds, regulatory frameworks, and public co-funding." },
      { type: "p", text: "Look at Singapore. Facing extreme land constraints and supply chain fragility, they had to act. They became the first nation to approve cultivated meat and heavily fund cellular agriculture because pressure forces innovation. Just like when society ran out of blubber." },
      { type: "p", text: "Systemic shifts happen fastest when a system is under immense pressure. Is there anyone left who hasn't realized that we have reached the boiling point?" },
      { type: "p", text: "As scientists, founders, and investors, we are the ones that can make the change happen. We are building the permanent replacement. Biotechnology gives us the opportunity to produce food, materials, and medicine without depleting the planet." },
      { type: "p", text: "The technology is ready, the market pressure is undeniable, and the policy momentum is here. The only question that's left is: \"Will you be part of the solution?\"" },
    ],
  },
  {
    slug: "great-china-food-wall",
    title: "The Great China Food Wall",
    author: "Sagar Tandon",
    date: "May 15, 2026",
    category: "Geopolitics & Food",
    excerpt:
      "The long game of re-engineering the global food chain — how China is applying its EV playbook to advanced nutrition, human food, pet food and the bioeconomy.",
    body: [
      { type: "p", text: "China's approach to the future is defined by a long-term commitment to resilience, sovereignty, social cohesion, and the green transition. This mindset is deeply rooted in the core principles of Confucianism, which prioritizes social harmony and stability over disruptive, short-term gains. To understand China's impact is not necessarily to \"take a side,\" but to recognize that a patient, multi-decadal commitment is required to transition toward a kinder, cleaner, and healthier world." },
      { type: "p", text: "While many Western democratic states fuelled the initial phase of the green transition, some have lost momentum, retreating toward extractive energy methods or slowing down in favour of short-term appeasement politics. In contrast, Confucian-inspired states in Pacific Asia — regardless of their specific political systems — are acting with a rational, logical consistency that often eludes the West." },
      { type: "p", text: "I believe in Dao Foods' thesis that China needs protein diversification and biomanufacturing for its food security, and I also believe China is going to lead the advanced nutrition, human food, pet food, bioeconomy, and animal-free economy sectors, because it is committed and continually deepening its commitment. When China sets its mind on something it considers strategic for the nation, it will be realized." },
      { type: "h2", text: "From EVs to Advanced Nutrition & Human Food" },
      { type: "p", text: "Just as China revolutionised the Electric Vehicle market, it is now applying the same playbook to food security. By diversifying protein sources and investing in biomanufacturing, China is positioning itself to lead the global bioeconomy. According to a recent report by Systemiq Ltd and the Moore Foundation, China has moved beyond treating advanced nutrition as a niche innovation and is instead classifying human food and pet food biosolutions as a strategic national priority to reduce dependence on imported soy and beef." },
      { type: "p", text: "Chinese solar reached 70% market share in 15 years. Chinese EVs reached 70% market share in 13 years. China is now in the early stages of a food systems transition, with advanced nutrition, human food and pet food increasingly treated as a strategic priority rather than a niche innovation." },
      { type: "h2", text: "The China Playbook: A Five-Phase Strategy" },
      { type: "ul", items: [
        "Strategic Prioritisation: The central government integrates advanced nutrition, human food and pet food into five-year plans with binding production targets, ensuring investment follows administrative mandates rather than market speculation.",
        "Financial & Infrastructure De-Risking: State-owned banks provide low-cost, long-term capital, while regional governments build shared bioreactors to lower the 'cost of failure' for private startups.",
        "Induced Demand Creation: The state guarantees early adoption through military rations, school lunch programmes, and government procurement, creating predictable revenue streams before the retail market even matures.",
        "Entrepreneurial Cost Competition: Dense supplier ecosystems and university partnerships force rapid iteration. As the sector consolidates, firms achieve price parity with traditional animal proteins.",
        "Export & Standards Leadership: China aims to export 'turnkey' advanced nutrition, human food and pet food production facilities to Belt and Road countries and to set international ISO standards for production, locking in a structural global advantage.",
      ]},
      { type: "h2", text: "Confucian Capitalism" },
      { type: "p", text: "The Confucian approach to capitalism differs fundamentally from the Western model, viewing the market through the lens of moral duty and social stability rather than solely in terms of individual profit. It suggests that economic activity should serve the collective harmony of the state and its people, creating a framework where private enterprise and social responsibility are inextricably linked." },
      { type: "p", text: "Impact investing, by its very nature, requires extreme patience and long-term thinking — qualities that I believe make China and Japan the natural lead for centuries to come. This Confucianist approach to capitalism has the potential to make the entire system more ethical, and China is uniquely well-suited for this evolution." },
      { type: "p", text: "In essence, China is not waiting for plant-based trends to dictate the future of food; it is using a state-led industrial strategy to mandate a bioeconomy revolution. By applying the same logic that allowed them to dominate the EV and renewable energy sectors, China is poised to lead the world in advanced nutrition, human food and pet food. This patient capital approach, rooted in Confucian values of harmony and long-term stability, offers a stark alternative to the often-exhausted cycles of Western political shifts." },
    ],
  },
  {
    slug: "the-great-reckoning",
    title: "The Great Reckoning",
    author: "Sagar Tandon",
    date: "April 1, 2026",
    category: "Strategy",
    excerpt:
      "Doubling down on a kinder, cleaner, healthier world — why committed fund managers will outlast the hype cycle.",
    body: [
      { type: "p", text: "The role of a fund manager is to be an honest, committed, and trusted intermediary. If that honesty, commitment, and trust fade, there is little a fund manager can do to regain investors' trust in a thesis they have formulated with deep sectoral insights and trends." },
      { type: "p", text: "The issue I see with several funds in the private markets space is that they have such a short attention span and are driven by mega-trends that, in most cases, are just hype and lead to Ponzi-like behaviour. Many fund managers can show very high paper marks over a short period of a few years, while the committed fund managers who stick to fundamental catalysts are ridiculed for remaining honest and steadfast." },
      { type: "quote", text: "Our value system is always present in our actions — consciously or unconsciously. At the same time, much care and profound reflections are needed to make explicit and justify what is ethically desirable and what is not.", cite: "3TH1CS — A reinvention of ethics in the digital age" },
      { type: "h2", text: "Still Committed Since 2018" },
      { type: "p", text: "At Beyond Impact, we remain deeply committed to the space we have been invested in since 2018. Beachhead markets may have shifted, and go-to-market strategies have evolved, but the essence remains: we need a production transition in food, materials, nutrition, pharmaceuticals, and personal care that allows us to decouple our existence from the abuse of nature." },
      { type: "p", text: "A valuation correction can, and perhaps should, happen, but there is still a future for advanced nutrition, human food and pet food innovations, and we remain firm believers. Some markets are showing more positive signals than others, but the market itself has not disappeared; it has only vanished in the eyes of consultants or funds that were overexposed during the hype when money poured in only to leave for the next trend." },
      { type: "p", text: "On the brighter side, those who found a way to survive these tough times — when almost no new money is flowing — are showing real resilience. This is a time when we should be talking about resilience and sovereignty regarding food, materials, and energy." },
      { type: "h2", text: "Structural Shifts in Northern Europe" },
      { type: "p", text: "Our conviction is further bolstered by the structural shifts occurring across the Nordics and the Netherlands. Helsinki is currently pioneering a landmark 'Meat and Dairy-Free' food policy for 2030, signalling a clear political mandate to decouple municipal procurement from high-emission animal agriculture. This is not just a lifestyle choice; it is a strategic sovereign decision to build a resilient, localised food system." },
      { type: "p", text: "The Netherlands provides an equally compelling blueprint for the future of retail and governance. Dutch supermarkets are now leading the world by transparently reporting their 'protein split,' with many committed to reaching a 60/40 plant-to-animal ratio by 2030. While the 'hype' investors fled, the Precision Fermentation market has surged to an estimated $5.5 billion in 2026, growing at a staggering 48% CAGR." },
      { type: "h2", text: "From Hype to Habit" },
      { type: "p", text: "Ultimately, we are doubling down because the 'hype' has been replaced by 'habit' and 'industrial scale.' We aren't interested in the quick paper-mark fix of a hype cycle; we are interested in the compounding returns of a world that has no choice but to reinvent how it feeds and heals itself. We remain patient, we remain committed, and we remain convinced that the most resilient companies — the ones that will bring systemic change — are being forged in this exact moment of market fear." },
    ],
  },
  {
    slug: "untapped-climate-opportunity",
    title: "The Untapped Climate Opportunity",
    author: "Beyond Impact VC",
    date: "April 5, 2024",
    category: "Climate",
    excerpt:
      "Why advanced nutrition, human food and pet food represent the single largest under-funded climate financing opportunity in the global economy.",
    body: [
      { type: "p", text: "Climate change is one of the biggest threats facing our planet today. With greenhouse gas emissions continuing to rise, we must find innovative solutions to reduce emissions and mitigate the impacts of climate change. One promising solution is the development of advanced nutrition, human food, and pet food solutions, which offer a significant and untapped opportunity for climate financing." },
      { type: "p", text: "Advanced nutrition, which includes plant-based proteins, human food innovations and cultured meat, has the potential to reduce greenhouse gas emissions from animal agriculture drastically. Animal agriculture is responsible for a significant portion of global greenhouse gas emissions, with estimates ranging from 14.5% to 51% of all emissions." },
      { type: "p", text: "According to a report from RethinkX, advanced nutrition and alternative solutions could capture up to 10% of the global meat market by 2035. This shift would result in a reduction of up to 2.4 gigatons of greenhouse gas emissions annually, equivalent to taking 527 million cars off the road. Furthermore, the report suggests that this shift could save up to $1.4 trillion in environmental costs by 2050." },
      { type: "h2", text: "Biggest Emissions Cuts Per Dollar" },
      { type: "p", text: "According to Boston Consulting Group, investment in plant-based meat delivers the biggest emissions cuts of all sectors, at roughly 4.3 billion tonnes of CO2-equivalent saved per $1 trillion invested — far ahead of cement, iron and steel, chemicals, buildings, cars, shipping, electricity, aviation, and trucks." },
      { type: "ul", items: [
        "The shift to alternative beef, pork, chicken, and egg alternatives will save more than one gigaton of CO2e by 2035.",
        "Producing animal alternatives emits 30% to 90% fewer GHGs than conventional meat, fish, dairy, and egg production.",
        "Cultivated meat requires up to 78% less water than beef, and plant-based meat requires 99% less water than conventional meat.",
      ]},
      { type: "h2", text: "Capital Requirements" },
      { type: "p", text: "According to BCG's report Food for Thought: The Protein Transformation, almost 30 million tons of bioreactor capacity for microorganisms and animal cells will be needed in the base case, requiring up to $30 billion in investment capital. The extrusion capacity needed for plant-based proteins will require up to $28 billion in investment. In APAC alone, PwC, Rabobank, and Temasek estimate $750 billion in additional funding is needed by 2030 to meet rising protein demand." },
      { type: "p", text: "Advanced nutrition, human food, and pet food offer a significant and untapped climate financing opportunity. By investing in the development and scaling of these technologies, we can reduce greenhouse gas emissions, create economic opportunities, and contribute to sustainable development." },
    ],
  },
  {
    slug: "role-of-ai-in-alternative-proteins",
    title: "Role of AI in Advanced Nutrition, Human Food & Pet Food",
    author: "Beyond Impact VC",
    date: "May 2, 2024",
    category: "Technology",
    excerpt:
      "AI is an enabler, not a thesis. How it is accelerating recombinant proteins, cultivated meat, and bioprocess design.",
    body: [
      { type: "p", text: "AI advancements have propelled advanced nutrition, human food, and pet food forward, revolutionising how researchers design, optimise, and scale up recombinant protein production, plant-based nutrition, and cultivated meat production processes." },
      { type: "h2", text: "Design, Optimise, and Scale Recombinant Protein Production" },
      { type: "p", text: "Central to the shift toward advanced nutrition, human food, and pet food is recombinant protein production, a biotechnological process that harnesses the power of microorganisms to produce proteins with diverse applications." },
      { type: "ul", items: [
        "Protein engineering and design: AI algorithms analyse complex protein structures, predict functionalities, and modify genetic sequences to optimise properties — resulting in proteins with improved nutritional profiles, enhanced functionalities, and reduced allergenicity.",
        "Discovery of the right strain: AI-driven high-throughput screening expedites the identification of the most promising microbial strains capable of producing target proteins.",
        "Reducing trial & error: AI-powered predictive analytics enable researchers to anticipate the behaviour of biological systems, saving valuable time and resources.",
      ]},
      { type: "p", text: "While AlphaFold itself is not directly involved in producing advanced nutrition and food biotechnology ingredients, its accurate predictions of protein structures can revolutionise the field of protein engineering and design." },
      { type: "h2", text: "Cultivated Meat: Efficiency, Scalability, Cost" },
      { type: "ul", items: [
        "Cell-line identification & development: AI algorithms aid in selecting and engineering the most productive and stable cell lines for meat production and can predict sensory profile and taste based on cell lines and cultivation conditions.",
        "Bioprocess optimisation: AI-driven automation and data analytics monitor and control nutrient supply, temperature, and pH levels in bioreactors.",
        "Nutrient and media optimisation: AI optimises cell-culture media by predicting the ideal combination of nutrients and growth factors required for efficient cell growth, reducing reliance on costly and scarce ingredients.",
      ]},
      { type: "p", text: "We don't think, as investors and entrepreneurs, we should be obsessed with AI. Instead, we should be obsessed with the end outcome we want to achieve in advanced nutrition, human food, and pet food — mimicking animal-derived meats, seafood, and dairy in a kinder, cleaner, and healthier way. AI is an enabler. We are not going to put money in a company because it is 'AI', but rather because it is leveraging AI to help scale biomanufacturing and overall product formulation, making it more cost-effective and efficient." },
    ],
  },
  {
    slug: "animal-free-for-biodiversity",
    title: "Animal-Free for Biodiversity",
    author: "Sagar Tandon",
    date: "March 21, 2025",
    category: "Biodiversity",
    excerpt:
      "Beyond Impact for decarbonisation, biodiversity, climate impact, blue ocean and health & wellness.",
    body: [
      { type: "p", text: "Our current production practices for food, materials, ingredients, pharmaceuticals, and personal care exponentially lead to species extinction and make biodiversity vulnerable. The world is facing a biodiversity crisis, with the 2022 Living Planet Report showing an average 69% decline in wildlife populations between 1970 and 2018. According to the IUCN, over 28% of species assessed are threatened with extinction." },
      { type: "p", text: "We firmly position Beyond Impact VC to help reduce carbon emissions, accelerate decarbonisation, provide healthier, kinder, cleaner alternatives, and make biodiversity resilient — by relieving the land (avoiding deforestation and abuse of the blue ocean), reducing water consumption, and avoiding zoonotic diseases altogether." },
      { type: "p", text: "To my knowledge, little capital has moved to preserve biodiversity by investing in animal-free solutions. We believe we are spearheading the movement and educating our peers, LPs, scientists, and innovators." },
      { type: "h2", text: "The Numbers" },
      { type: "ul", items: [
        "Livestock farming occupies 77% of global agricultural land while providing only 18% of global calories (FAO).",
        "Deforestation for grazing and feed crops is a leading cause of habitat destruction. Pasture expansion for cattle production has been linked to 80% of Amazon clearing.",
        "FAO fishery stocks within biologically sustainable levels decreased to 62.3% in 2021.",
        "Livestock contributes approximately 14.5% of global greenhouse gas emissions, with cattle accounting for around 62% of the livestock sector's emissions.",
        "The majority of emerging infectious diseases have come from wild or farmed animals.",
      ]},
      { type: "h2", text: "The Case for Animal-Free Solutions" },
      { type: "ul", items: [
        "With supportive policy, a shift toward advanced nutrition, human food, and pet food can enable 44% of land across 10 evaluated European countries to transition to agroecological farming, domestic food production, and nature restoration.",
        "If 50% of leading animal products (pork, chicken, beef, milk) are substituted with animal-free products globally, the net reduction of forest and natural land will almost entirely halt.",
        "Eliminating livestock could save up to 1.6 billion hectares of wild habitats, protecting critical ecosystems.",
      ]},
      { type: "p", text: "We see biodiversity impact as vital as a focus on decarbonisation and GHG reduction because healthy ecosystems are the foundation of life on Earth, providing essential services like clean air, water, pollination, and climate regulation. Addressing biodiversity loss and climate change creates a virtuous cycle: protecting species and ecosystems enhances carbon sequestration and resilience, ensuring a healthier, more sustainable planet for all." },
      { type: "p", text: "We are investing in nature-positive solutions so humanity can live in harmony with nature. Let us make our biodiversity resilient and help all species breathe and live in accordance with nature." },
    ],
  },
  {
    slug: "biomaterials-untapped-climate-opportunity",
    title: "Biomaterials: An Untapped Climate Opportunity",
    author: "Beyond Impact VC",
    date: "July 8, 2025",
    category: "Materials",
    excerpt:
      "From plastics to textiles to building materials — why next-gen biomaterials are the climate story no one is telling.",
    body: [
      { type: "p", text: "Many of the technology stacks we see in next-gen food and biopharmaceuticals are the same ones in the materials space. Although the application of these technologies to materials is relatively new, they have widespread impact on the climate and the lives of animals and humans." },
      { type: "p", text: "I don't hear much about biomaterials' potential role in curbing climate change. It is not just plastics but textiles, building materials, pharmaceuticals, and more. The most interesting argument I left to ponder is durability versus degradability — providing functional durability while the material is in use, and degradability when it no longer is. Easier said than done." },
      { type: "h2", text: "The Markets" },
      { type: "ul", items: [
        "Bioplastics currently represent roughly 0.5% of the over 400 million tonnes of plastic produced annually. Global bioplastics production capacity is set to increase from around 2.18 million tonnes in 2023 to approximately 7.43 million tonnes in 2028.",
        "The global synthetic fibres market was valued at $66.11 billion in 2022 and is expected to grow at 7.4% CAGR through 2030.",
        "The animal leather market is worth nearly $100 billion annually (UNIDO).",
        "The wool market is estimated at $38.97 billion in 2024, expected to reach $45.61 billion by 2029.",
        "The global silk market is valued at $17.2 billion in 2022 and projected to grow to $28.5 billion by 2030.",
        "The fashion industry was responsible for 2.1 billion tonnes of GHG emissions in 2018 — about 4% of the global total.",
      ]},
      { type: "h2", text: "Why It Matters" },
      { type: "p", text: "Our dependence on animals and petroleum-based products is causing substantial environmental degradation, damage to local ecosystems, biodiversity loss, polluted water sources, and rising emissions. We need to think beyond energy transition if we are serious about decarbonisation, and press on solutions that help us transition consumption in materials, food, medicines, and skincare." },
      { type: "quote", text: "In aquatic invertebrates, microplastics cause a decline in feeding behaviour and fertility, slow down larval growth, increase oxygen consumption, and stimulate reactive oxygen species. In fish, microplastics may cause structural damage to the intestine, liver, gills, and brain.", cite: "Zolotova et al., Harmful effects of microplastic pollution on animal health" },
      { type: "p", text: "We can't continue hampering nature for our consumption; we need to find creative ways to decouple our dependence on animals and, in turn, alleviate their suffering and prevent biodiversity loss. We are excited about biomaterials — not only because they don't have microplastics but also because many of them, such as seaweed-based materials, can significantly help improve aquatic life and ocean pH balance." },
    ],
  },
  {
    slug: "the-nordic-edge",
    title: "The Nordic Edge",
    author: "Sagar Tandon",
    date: "October 2, 2025",
    category: "Regional",
    excerpt:
      "Why the New Nordics (Nordics + Baltics) are an undercapitalised innovation powerhouse — and our edge as a global investor.",
    body: [
      { type: "p", text: "The New Nordics (Nordics + Baltics) region is often celebrated for its high quality of life, progressive policies, and leadership in sustainability. But beyond the postcard-perfect imagery lies something even more compelling: an undercapitalised innovation powerhouse with the right ingredients to solve some of the world's toughest challenges in climate, health, and industrial sustainability." },
      { type: "h2", text: "1. An Undervalued Innovation Powerhouse" },
      { type: "p", text: "Nordic countries rank among the highest in economic complexity — on par with the US and UK — yet receive far less venture capital relative to their innovation output. Finland has the most PhDs per capita in Europe. Sweden and Denmark are biotech leaders, home to Novo Nordisk, the world's largest biotech company. The region excels in industrial biotech, applied biotech, bioeconomy, green chemistry, advanced nutrition, human food and pet food; however, early-stage funding remains scarce, creating a pricing advantage for investors who can navigate technical risk." },
      { type: "h2", text: "2. Strong Science, Weak Global Capitalisation = Asymmetric Opportunity" },
      { type: "p", text: "Most Nordic startups are funded locally, meaning few international investors compete at Series A and beyond, especially in hard-science sectors. This allows us to shape rounds, cap tables, and governance early with a focus on long-term scaling, and to bridge Nordic science with global markets — particularly in Asia, where we have strong networks for R&D partnerships, biomanufacturing, and commercialisation." },
      { type: "h2", text: "3. Cost-Competitive, Green Biomanufacturing" },
      { type: "p", text: "Finland's nuclear- and renewable-powered grid offers some of the cheapest, lowest-carbon bioprocessing capacity in Europe. With fermentation and scale-up infrastructure expanding fast, the Nordics are becoming a hub for sustainable production — critical as global supply chains prioritise resilience and decarbonisation." },
      { type: "h2", text: "4. Decentralisation = Resilience & Capital Efficiency" },
      { type: "p", text: "Since the 1970s, Nordic giants like Atlas Copco, Handelsbanken, and Indutrade have thrived under decentralised models, emphasising autonomy, local accountability, and long-term thinking. Flatter organisations mean faster pivots; capital efficiency is baked into company-building culture; and long-term alignment with stakeholders reduces friction." },
      { type: "h2", text: "5. Trust as Economic Infrastructure" },
      { type: "p", text: "Nordic societies consistently top global trust surveys, leading to lower fraud and governance risks, stronger ESG outcomes — often without heavy-handed mandates — and easier collaboration between academia, startups, and corporations." },
      { type: "h2", text: "Why Beyond Impact Is Betting on the Nordics" },
      { type: "p", text: "Our thesis is simple: the best science, paired with the right capital and governance, can solve global problems faster. The Nordics offer elite research talent without Silicon Valley salary inflation, undervalued deal flow in climate tech, biotech, and industrial innovation, and a culture built for long-term impact, not just short-term hype." },
    ],
  },
  {
    slug: "ingredients-for-a-sustainable-future",
    title: "Ingredients for a Sustainable Future",
    author: "Claire Smith",
    date: "2025",
    category: "White Paper",
    excerpt:
      "Redefining the food system through science, innovation, and investment — the Beyond Impact white paper.",
    body: [
      { type: "h2", text: "A Turning Point for Food" },
      { type: "p", text: "The way we produce, process, and consume food is the single greatest determinant of our planet's future. It touches everything: climate, biodiversity, water, health, and equity. Yet, for decades, food has been overlooked in global sustainability strategies — overshadowed by energy, mobility, or infrastructure. That era is ending." },
      { type: "p", text: "The global food system is now recognised as the most powerful lever for achieving climate stability and social resilience. It contributes up to one-third of global greenhouse gas emissions, uses 70% of freshwater, and drives 90% of deforestation. But, if transformed, it could become a restorative force — regenerating ecosystems, improving nutrition, and creating economic opportunity." },
      { type: "h2", text: "Why Food Is the Lever for Change" },
      { type: "ul", items: [
        "Food generates 26–34% of all greenhouse gas emissions.",
        "It uses 90% of freshwater withdrawals.",
        "It occupies 43% of the planet's ice- and desert-free land surface.",
        "80% of agricultural land is dedicated to livestock and feed, yet provides less than 20% of human calories.",
        "800 million people go hungry, while 2 billion are overweight, and one-third of all food is wasted.",
      ]},
      { type: "p", text: "By shifting from animal-dependent systems to plant- and micro-organism-based ones, we can cut emissions by over 80%, free up three-quarters of agricultural land for rewilding or carbon capture, reduce water use by 90%, and restore ecosystems and biodiversity at scale. If we fix food, we fix the future." },
      { type: "h2", text: "The Planetary Boundary Crisis" },
      { type: "p", text: "The Stockholm Resilience Centre identifies nine planetary boundaries within which humanity can safely operate. We have already crossed six of them: climate change, biosphere integrity, land-system change, freshwater use, nitrogen and phosphorus flows, and novel entities. Agriculture and food production are major drivers of nearly all these breaches." },
      { type: "h2", text: "Rethinking Ingredients" },
      { type: "p", text: "We are entering the age of biofabricated ingredients — the next great leap after the first agricultural and industrial revolutions. Precision fermentation acts as nature's smallest factories. Cellular agriculture delivers real meat without slaughter. Molecular farming turns plants into biofactories. Together with circular and digital tools, these technologies enable a data-driven food system that reduces waste, accelerates discovery, and aligns nutrition with planetary boundaries." },
      { type: "h2", text: "Market Opportunity" },
      { type: "p", text: "Investing in food innovation is no longer philanthropy — it's future-proof capitalism. The capital flowing today will determine who leads the trillion-dollar food economy of tomorrow." },
      { type: "h2", text: "Beyond Impact's Thesis" },
      { type: "p", text: "We invest early in companies redefining the building blocks of the food system — ingredient platforms and sustainable protein systems alike. These companies demonstrate that decarbonising protein is not a theoretical exercise — it is a commercial and regulatory reality unfolding now." },
      { type: "quote", text: "The future of food will not be built brand by brand, but system by system." },
      { type: "p", text: "The future of food will be built on science, ethics, and circularity — not extraction. The tools exist. The capital is mobilising. The time is now." },
    ],
  },
  {
    slug: "beyond-energy-consumption-transition",
    title: "Beyond Energy: Why We Need a Consumption Transition to Decarbonise",
    author: "Sagar Tandon",
    date: "2024",
    category: "Climate",
    excerpt:
      "Sequestering carbon, sparing animals — the dual climate opportunity of animal-free biotech.",
    body: [
      { type: "p", text: "Our objective is to clearly outline the importance of going beyond just energy transition and, therefore, also focusing on transitioning how we consume and manufacture products. While energy transition is a big talking point at many climate conferences, we need to shed light on the potential for decarbonisation with biotech and bioeconomy solutions that ultimately shift how we manufacture and produce what we eat, wear, and take as medicines." },
      { type: "p", text: "The global decarbonisation market is expected to grow at 11.5% CAGR from 2023 to 2032, reaching $2.54 trillion by 2032. Is there a better manufacturing method that's less extractive, cleaner, and kinder to Mother Nature? We don't just need energy transition; we need consumption transition." },
      { type: "h2", text: "Reliance on Animals" },
      { type: "p", text: "The global economy's reliance on animals significantly contributes to greenhouse gas emissions and climate change. Livestock farming alone accounts for around 14.5% of global human-induced emissions. Removing our reliance on animals and transitioning to animal-free alternatives can drastically reduce our carbon footprint and accelerate economic decarbonisation." },
      { type: "p", text: "Animal-free food, materials, and ingredients have substantially lower carbon, land, and water footprints than animal-derived counterparts. For example, animal-free meat and dairy products can reduce emissions by 30–90%. Similarly, animal-free ingredients in cosmetics have a much smaller environmental impact." },
      { type: "h2", text: "The Dual Climate Opportunity" },
      { type: "p", text: "Investing in solutions like Yeastup (upcycled protein from spent brewer's yeast), Algama (ingredients from microalgae, which act as excellent carbon sinks), and Ingrediome (precision fermentation using cyanobacteria) can supercharge decarbonisation. These circular solutions leverage organisms that actively remove carbon, creating a double climate benefit." },
      { type: "ul", items: [
        "Plant-based and lab-grown meat alternatives can partially replace traditional livestock farming, which accounts for approximately 7.1 gigatonnes of CO2-equivalent per year (14.5% of total anthropogenic GHG emissions).",
        "Enhancing current forestry and agricultural practices could increase carbon sequestration by approximately 25%.",
        "Sugarcane genetically modified for biodiesel could yield around 6,700 litres per hectare — significantly higher than soybeans at approximately 500 litres per hectare.",
      ]},
      { type: "p", text: "Decoupling from animals opens up opportunities to utilise more sustainable agricultural practices that sequester carbon, improve soil health, and support biodiversity. This shift from industrial animal agriculture is crucial in meeting global climate targets and building a more sustainable, low-carbon future." },
      { type: "p", text: "At Beyond Impact, we believe offering an alternative to climate financing is vital. As a race, we can decarbonise by changing our consumption patterns. The animal-free economy provides a great alternative. We truly believe we are on the cusp of a generational shift to decarbonise every aspect of our existence — cleaner, healthier, and kinder to people, planet, and animals." },
    ],
  },
  {
    slug: "dialogues-sagar-shunji-part-1",
    title: "Dialogues With Sagar & Shunji — Part 1",
    author: "Sagar Tandon × Shunji Murakami",
    date: "May 28, 2026",
    category: "Blue Economy",
    excerpt:
      "Restoring the Ocean While Growing Industry — the origins of Blue Frontier Fund (BFF) and the philosophy behind a new partnership between Beyond Impact and UMITO Partners.",
    body: [
      { type: "p", text: "Ocean investment is accelerating globally, yet within ocean impact investing, investors with genuine on-the-ground fisheries knowledge are rare — and fisheries practitioners who understand how investment works are rarer still. Against that backdrop, Beyond Impact and UMITO Partners have begun co-developing the ocean-focused impact fund Blue Frontier Fund (BFF). In Part 1, Partner Sagar Tandon (Beyond Impact) and Founder Shunji Murakami (UMITO Partners) discuss the origins of the fund and the future they are working to build." },
      { type: "p", text: "This conversation was originally published by UMITO Partners (text by Eri Ishida). The full original article is available at umitopartners.com." },

      { type: "h2", text: "Where does our capital flow? — The origins of Beyond Impact" },
      { type: "p", text: "Sagar traces Beyond Impact back to Claire Smith's conviction, taking shape around 2016, that the health of the planet, of people, and of all living beings is fundamentally interconnected. The starting question was simple: where is my capital actually going? Passive vehicles like the S&P 500 are rational wealth-compounding tools, but many of the underlying companies are not actively driving positive change for society or the environment." },
      { type: "p", text: "From that question, Claire launched the ETF Beyond Investing, which has grown to roughly USD 133 million in AUM. But the team realised an ETF could shift capital flows without fundamentally transforming companies or markets — so the next step was direct investment in innovators, particularly startups working on the SDG 12 agenda of responsible consumption and production." },

      { type: "h2", text: "Kinder, cleaner, healthier" },
      { type: "p", text: "Sagar describes the three pillars at the centre of Beyond Impact's investment philosophy. 'Kinder' is the belief that there must be a fundamentally different way for people to relate to the planet, to each other, and to all living beings. 'Healthier' reflects the view that low environmental impact alone is not enough — if something harms human health, it cannot genuinely be called sustainable. 'Cleaner' is a challenge to the status quo across food, materials, and cosmetics, pushing toward simpler formulations and more biologically derived inputs. The three are deeply interconnected and sit at the centre of every investment decision." },

      { type: "h2", text: "The arc of impact investing — and today's inflection point" },
      { type: "p", text: "Sagar recalls entering the field in the early 2000s through microfinance and education, when philanthropic capital flowed from developed to emerging economies. Over time, philanthropists evolved into impact investors as market mechanisms came to be seen as a more durable way to address social challenges. Today, mainstream institutional investors increasingly treat impact investing as a legitimate asset class." },
      { type: "p", text: "Yet structural gaps remain. UN and UNCTAD estimates put the SDG financing gap in developing countries at roughly USD 2.5–4 trillion per year; GIIN estimates the global impact investing market at around USD 1.6 trillion in 2023. Murakami frames the gap as the defining opportunity for impact investors, because that is precisely where fundamental, systemic change becomes possible." },
      { type: "p", text: "Sagar returns to Eiichi Shibusawa's concept of the 'harmony of morality and economy' as the heart of impact investing — building companies and deploying capital in ways that create harmony between society and nature, so the next generation inherits a future in which both can flourish." },

      { type: "h2", text: "Impact or return? — Beyond the trade-off" },
      { type: "p", text: "Sagar explains how Beyond Impact navigates the perennial question of whether impact and financial return can coexist. The process begins with conventional investment analysis — assessing the business on its financial and commercial merits — before applying the impact lens. For impact to be real and durable, the underlying solution must be commercially viable; equally, the team will not invest in an opportunity that is commercially sound but cannot articulate a clear Theory of Change. LCA and other quantitative tools are standard for verifying expected impact on climate-related startups." },
      { type: "p", text: "Investment agreements also embed protective covenants: if a portfolio company that initially provided a positive solution comes to cause harm to the climate, nature, or animals, Beyond Impact retains the right to divest. With LPs, the message is direct — being an impact fund does not mean accepting below-market returns. The aim is market-rate returns, equivalent to what investors would expect from a mainstream VC." },

      { type: "h2", text: "Why UMITO Partners entered blue finance" },
      { type: "p", text: "Murakami describes UMITO Partners' founding belief that fishers are the key actors in solving ocean challenges. But as the team continued its sustainable fisheries consulting, the pace at which fisheries can transition toward sustainability simply could not keep pace with environmental deterioration. Policy work carries significant systemic leverage, yet it is slow, volatile, and largely outside the private sector's direct control." },
      { type: "p", text: "The team asked what the private sector could do to generate direct, scalable impact. The answer: support innovations capable of regenerating the ocean environment — backed by stable, patient capital. Consulting, by contrast, has a structural ceiling; the more impact you try to generate, the more human time it demands. Ocean challenges are complex and interconnected, requiring not a single solution but a portfolio of complementary solutions deployed in parallel." },
      { type: "p", text: "Murakami notes that the decision to enter blue finance was made not in a meeting room but during a team retreat in nature — sitting together by a riverbank after an afternoon in a mountain stream. He frames UMITO Partners not as a 'solution provider' but as an 'ecosystem player' — convinced that what resolves systemic ocean challenges is Collective Impact: people from different disciplines working under a shared agenda to create change none could achieve alone." },

      { type: "h2", text: "How Beyond Impact and UMITO Partners came together" },
      { type: "p", text: "Beyond Impact had built deep expertise across next-generation food systems, bio-derived materials, advanced nutrition, and bio-derived cosmetic ingredients. The ocean was a clear strategic priority where its expertise was limited — and as a lean team, entering with conviction required the right partner. UMITO Partners' depth of knowledge on ocean challenges and strong on-the-ground network across Asian island communities matched exactly what they were looking for." },
      { type: "p", text: "For Murakami, the partnership was rooted in the seriousness both Sagar and Claire brought to impact investing. For Sagar, the human dimension was decisive — a handshake carrying as much weight as a legal contract. What struck him was that Murakami had come to the field from years working close to fishing communities, engaging firsthand with the social and environmental dimensions of that work." },

      { type: "h2", text: "Innovators and fishers, building trust together" },
      { type: "p", text: "Murakami emphasises that fishers play an irreplaceable role that runs deeper than food supply — essential to national and food security, cultural continuity, and community cohesion. The embodied, experiential knowledge fishers have built across generations cannot be acquired quickly, and is precisely the kind of knowledge that should be integrated into emerging technologies and solutions." },
      { type: "p", text: "Sagar adds that innovation tends to generate anxiety, but these technologies should not replace fishers — they should expand what is possible for them. The vision of innovators and fishers evolving together, building trust and working side by side, is both realistic and nature-positive. What BFF is ultimately working to restore is natural capital — but the cultural capital that fishing communities have cultivated over generations is equally a form of value that must be integrated into that vision." },

      { type: "p", text: "Read the full original interview (text by Eri Ishida) on UMITO Partners: https://umitopartners.com/en/stories/restoring-the-ocean-while-growing-industry-part-1/" },
    ],
  },
  {
    slug: "dialogues-sagar-shunji-part-2",
    title: "Dialogues With Sagar & Shunji — Part 2",
    author: "Sagar Tandon × Shunji Murakami",
    date: "May 28, 2026",
    category: "Blue Economy",
    excerpt:
      "The New Blue Economy — investment themes, exit strategy, the Japanese opportunity, and the vision behind a regenerative model for the ocean.",
    body: [
      { type: "p", text: "In Part 2, Sagar Tandon (Beyond Impact) and Shunji Murakami (UMITO Partners) go deeper into the specific technologies and investment themes Blue Frontier Fund (BFF) is targeting, the fund's exit strategy, the opportunity in the Japanese market, and the concrete vision behind the 'New Blue Economy.' Originally published by UMITO Partners (text by Eri Ishida)." },

      { type: "h2", text: "Six portfolio companies had turned blue" },
      { type: "p", text: "Sagar explains that the blue economy was not originally part of Beyond Impact's investment strategy. But stepping back to look at the portfolio, the team realised six companies were already operating in the blue bioeconomy — working with microalgae, cyanobacteria and marine bacteria, plant-based or cultivated seafood, and bio-based ingredients derived from seaweed and microalgae. The conclusion: blue cannot exist without green, and green cannot exist without blue. Terrestrial life, marine life, and the global climate system are deeply interconnected." },
      { type: "p", text: "Compared with forests, terrestrial biodiversity, and decarbonisation, the ocean is dramatically underrepresented in climate investment conversations. Plant-based meat alternatives had already attracted significant commercial investment; plant-based or cultivated seafood had received a fraction. The technical barrier is higher — cultivating complex marine organisms is scientifically far more challenging than cultivating bovine cells — but Sagar sees that difficulty as the opportunity. Microalgae and seaweed remain resources of extraordinary versatility and sustainability whose potential is largely untapped at commercial scale." },

      { type: "h2", text: "Solutions, not commodities — Beyond Impact's investment framework" },
      { type: "p", text: "The Beyond Group operates multiple investment vehicles. On the ETF side, Beyond Investing has grown to approximately USD 133 million in AUM. On the venture side, Beyond Impact operates as a dedicated impact VC with three active vehicles. Combined AUM across ETFs and VC funds exceeds USD 160 million." },
      { type: "p", text: "Within the kinder/cleaner/healthier framework, the largest investment domain is Advanced Nutrition — a concept broader and more precise than 'food tech.' The focus is on underlying ingredients and production processes: human food, pet food, advanced nutrition, alternative lipids, and advanced bio-derived molecules used in flavours, fragrances, and colorants. On the technology side, the team covers precision fermentation, cellular agriculture, molecular farming, and fungi- and mycelium-based platforms — actively seeking cross-sector technologies that are not locked into a single application but can be deployed across food, materials, and pharmaceuticals." },
      { type: "p", text: "The second domain is biomaterials: biodegradable or bio-based alternatives to petroleum- and animal-derived inputs, including next-generation replacements for plastics, polyurethane, and leather. The third is the intersection of Advanced Nutrition with healthcare and beauty. Across these domains, Beyond Impact has invested in close to 30 companies." },
      { type: "p", text: "Investment criteria are consistent: high value-add and strong margin potential, global scalability, and a defensible technical moat. The team does not invest in commodity-priced products — precisely where tension between impact and economic return tends to emerge. The focus is on companies that may appear limited in initial market size but carry the potential for exponential impact over time, as scale and volume drive unit costs down enough to displace conventional, high-impact alternatives. Particular emphasis is placed on multi-purpose, circular platforms: a single technology such as precision fermentation can produce proteins for food applications and raw materials for pharmaceuticals and cosmetics simultaneously." },

      { type: "h2", text: "BFF's investment thesis" },
      { type: "p", text: "BFF builds on Beyond Impact's expertise across biotech, biomaterials, and advanced nutrition — and adds the ocean as the defining axis. At the core are solutions that contribute to ocean restoration, or that leverage marine resources such as microalgae and seaweed to transform existing industries. 'Direct impact' means the technology directly contributes to the conservation of marine ecosystems. 'Indirect impact' means transforming land-based food and materials systems in ways that reduce pressure on the ocean. Holding both lenses simultaneously is what makes BFF distinctive." },
      { type: "p", text: "BFF's three core themes are blue food, biotechnology, and B2B solutions within ocean-related innovation. The focus is on deep biotech companies, ventures across the blue bioeconomy, and in some cases adjacent non-biotech domains such as materials science. The ambition is for BFF to deliver returns fully competitive with mainstream ventures — and, on that basis, to build BFF 2 and BFF 3, expanding the scale of impact with each successive vehicle." },

      { type: "h2", text: "Designing exits — delivering returns without diluting impact" },
      { type: "p", text: "In the near term, M&A exits represent the most significant opportunity, as large corporations accelerate acquisitions of innovative startups. Some companies will also emerge as category leaders and pursue independent growth through IPO. The risk both partners are always conscious of is 'impact dilution' — the erosion of a company's original mission through an ill-suited transaction. Beyond Impact is therefore extremely deliberate about identifying acquirers who will sustain and scale the impact, and about structuring exit terms with protective post-sale conditions. Murakami adds that how impact persists post-exit, and how impact covenants carry through a transaction, are areas both teams want to continue developing together." },

      { type: "h2", text: "From extraction to regeneration — the New Blue Economy" },
      { type: "p", text: "Murakami highlights the systems-level context: approximately 26% of global greenhouse gas emissions come from the food sector, with around 14% attributable to animal protein production specifically. Approximately 78% of eutrophication in the world's ocean and freshwater systems is driven by agriculture — meaning land-based protein production is directly degrading marine environments through nutrient runoff. Advancing alternative and sustainable solutions is not optional; it is necessary." },
      { type: "p", text: "Sagar emphasises biodiversity. Many species are being pushed toward extinction by continuous extraction of natural resources. If BFF can quantify its contribution to biodiversity outcomes, that would represent extraordinary value. Fish oil is a compelling example: DHA and omega-3s consumed globally as supplements are predominantly sourced from wild-caught fish, placing significant pressure on stocks. Viable alternatives could shift this entire industry from extraction to regeneration." },
      { type: "p", text: "As marine ecosystems recover and grow richer, fish stocks rebound and fishers can sustain higher yields over time. What emerges is a healthier, more balanced relationship between human society and the natural world — mapping directly onto UMITO Partners' purpose of harmonising sustainable ties with the ocean." },

      { type: "h2", text: "Three strengths of Japan, and a bridge between Europe and Asia" },
      { type: "p", text: "Sagar sees Japan at the intersection of significant opportunity and real structural challenge. First, Japan is one of the very few developed markets genuinely trying to build sustainable finance from within — in most developed economies, impact capital has historically flowed outward to emerging markets, but Japan is asking how it itself transforms. Second, Japanese conglomerates are highly active in their search for innovation, and the food manufacturing sector has an exceptionally sophisticated industrial base; connecting emerging innovations into that base creates significant upside. Third, Japan holds an extraordinary depth of accumulated ocean knowledge — much of it living in fishing and coastal communities who have spent generations understanding fish behaviour, fishing grounds, and the seasonal rhythms of the sea." },
      { type: "p", text: "Murakami notes the structural barriers that make it hard for Japanese ocean startups to scale, and frames BFF as a hub: supporting Japanese startups in expanding globally while also attracting leading international companies into Japan. Sagar describes the mechanism as reconnecting East and West — moving beyond unidirectional trade (such as Norwegian salmon exported to Japan) toward a bidirectional flow of ideas, technologies, and resources. A Swedish microalgae supplement reaching Japan; a Japanese seaweed innovation expanding into Europe. The aim is a global ecosystem where ocean innovators converge across cultures, markets, and technological frontiers." },
      { type: "p", text: "Murakami closes on the scale of impact available across the island nations and coastal countries of the Asia-Pacific — regions of acute and urgent need that BFF will prioritise accordingly. Connecting the best ocean innovation across borders, generating new opportunities and sustainable solutions: that is the mission both teams see for BFF." },

      { type: "p", text: "Read the full original interview (text by Eri Ishida) on UMITO Partners: https://umitopartners.com/en/stories/restoring-the-ocean-while-growing-industry-part-2/" },
    ],
  },
  {
    slug: "alternative-protein-comeback",
    title: "Advanced Nutrition & Food-Tech Comeback?",
    author: "Sagar Tandon",
    date: "July 20, 2026",
    category: "Alternative Proteins",
    excerpt:
      "Encouraging patterns emerging — after 30 brutal months, sovereign strategies from Japan, Ireland, the Netherlands, Germany, the EU and China are pulling advanced nutrition, human food and pet food back to the centre of the bioeconomy transition.",
    body: [
      { type: "p", text: "The last 30 months or so have been brutal for the advanced nutrition, human food, pet food and food-tech industry. Despite overall growing trends towards a shift that is kinder to the planet, there has been paranoia among capital owners (more than capital allocators) about the space, heated valuations, and redirection of all venture capital to artificial intelligence." },
      { type: "p", text: "Claire and I believed that advanced nutrition, human food and pet food innovations, no matter what, would need to make a comeback if we were serious about the transition. It is not possible to decarbonize or reduce the past, present, and future footprints of human impact on the planet without changing the way we produce not only food but also materials, personal care products, and pharmaceuticals. We need to change and challenge the way we produce everything, and it is not just a consumer-sentiment issue; by and large, consumers are conscious of their actions." },
      { type: "p", text: "But for this we need commitment from private capital owners, states, and sovereign wealth funds to have a long view — at least 10-30 years — grounded in resilience, food security, and tackling changing climate conditions, which hurts how much calories and proteins we can produce. We need to find the most sustainable ways to produce, but the way of production also needs to be rooted in biology and nature. I say biology because many food activists and environmentalists conflate biotech with something unnatural; it is not." },
      { type: "quote", text: "It is biological time risk. This is the risk that a productive biological system has already entered a phase of decline, but the financial system has not yet noticed because the final commercial shortage has not yet appeared on the procurement desk. … Capital can buy many things. It cannot compress biological time.", cite: "The Biological Asset Trillionaire" },
      { type: "p", text: "Everything we eat today, in some ways, has been designed by humans to meet human caloric and nutritional needs. Our generation thinks we are the only ones tinkering with nature to grow food and produce materials. That is factually and objectively untrue; all our past civilizations, our ancestors, worked hard to find ways to make crops more resilient, increase yields, and make our bananas seedless. Our ancestors were the original bioengineers. They practiced selective breeding to transform wild grasses into staple crops like wheat and corn. They even engineered convenience into nature itself, creating the seedless bananas and watermelons we take for granted." },
      { type: "p", text: "Now we are moving from field to cells and breeding to brewing. This shift towards a food system built on precision fermentation, cellular cultivation, and molecular farming is not a rejection of our agricultural past, but an evolution — a revolution compelled by necessity and enabled by unprecedented understanding." },
      { type: "p", text: "There is so much fear in the air surrounding terms like \"GMO\" and \"lab-grown food.\" This fear is understandable but ultimately misplaced. We must reframe the conversation: virtually everything we eat today is the product of genetic modification, achieved through centuries of selective breeding. The question is not if we should modify our food, but how we do it. We should actively promote the next generation of ethical genetic engineering — techniques that are more precise, controlled, and transparent than the blunt instrument of historical breeding." },
      { type: "p", text: "We are not creating artificial life; we are harnessing the innate power of yeast, microbes, and animal cells — the same biological forces that have always existed — and providing them with a clean, controlled environment. This represents the ultimate humane food, eliminating industrial animal agriculture and moving from factory farms to food factories. It is a deeply decarbonizing and regenerative path, one that could allow us to rewild billions of acres of farmland, transforming food production from the planet's most significant source of greenhouse gas emissions into a tool for its regeneration." },
      { type: "p", text: "We are seeing, from China to Japan to the EU (Germany, Ireland), thoughtful contemplation on advanced nutrition, human food and pet food strategy, wrapped up with focus areas like food security, resilience, and bioeconomy." },

      { type: "h2", text: "Japan" },
      { type: "p", text: "Japan has unveiled a draft roadmap to invest about $60 billion USD in food technology by 2040 as part of a broader strategy to strengthen its economy and food security, with ¥1T ($6.2B) allocated to new foods. The plan focuses on four key areas: indoor farming, land-based aquaculture, food machinery, and new foods, with indoor farming receiving the largest share of funding. Overall, the government aims to drive more than ¥370 trillion in combined public and private investment across 17 strategic industries by 2040." },
      { type: "p", text: "Further reading: Green Queen — https://www.greenqueen.com.hk/japan-growth-strategy-public-private-investment-roadmap-new-foods/" },

      { type: "h2", text: "Ireland" },
      { type: "p", text: "Ireland takes over the Presidency of the Council of the EU, with a commitment to reinforcing EU resilience in emerging sectors such as biotechnology. Over the next six months, Ireland will guide the Council's work and legislative priorities — including discussions around the first EU Biotech Act and the next EU Framework Program for Research and Innovation (FP10). According to GFI's latest analysis, the country has ranked among Europe's top 10 nations in advanced nutrition and food biotechnology research every year since 2020." },

      { type: "h2", text: "Netherlands" },
      { type: "p", text: "The Netherlands is cementing its position as a global leader in foodtech by heavily investing in open-access scale-up facilities and public research. This strategy aims to shift the retail market away from traditional animal proteins toward plant-based alternatives and cellular agriculture. The country remains the only EU nation to have authorized public tastings of cultivated meat and actively opposes proposed EU-wide bans on lab-grown proteins." },
      { type: "img", src: "https://substackcdn.com/image/fetch/$s_!vf_g!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8bd720bc-b0ae-4728-b3f1-35bbd2063301_816x507.png", alt: "Netherlands foodtech scale-up infrastructure supporting plant-based and cellular agriculture" },

      { type: "h2", text: "Germany" },
      { type: "p", text: "The German government sets a new ambition for low-emission advanced nutrition, human food and pet food solutions produced through food biotech: to establish a business-driven innovation ecosystem and to launch products made in Germany on the world market by 2028. Germany has one of Europe's strongest research bases in advanced nutrition and industrial biotech. Read the full Germany Biotechnology Roadmap: https://hightech-agenda-deutschland.de/roadmaps/biotechnologie/" },

      { type: "h2", text: "EU-wide" },
      { type: "p", text: "The European Commission has published its long-awaited EU Protein Plan. The plan acknowledges the importance of plant proteins for Europe's future food security, resilience, autonomy, competitiveness, public health, and climate goals. For more, see the European Vegetarian Union cover: https://www.euroveg.eu/eu-protein-plan/" },
      { type: "p", text: "On 10 June 2026, the Commission launched three new initiatives to support the marketability of bio-based products:" },
      { type: "ul", items: [
        "the Bio-based Europe Alliance (BEA) to support market scale-up,",
        "the Bioeconomy Investment Deployment Group (BIDG) to improve access to finance,",
        "and the Expert Group on Bioeconomy to support implementation by Member States.",
      ]},
      { type: "p", text: "Europe must step up its commitment to the bioeconomy, and we at Beyond Impact VC are committed to the bioeconomy, as we believe the transition to bio solutions would lead to a kinder, cleaner, healthier world — not just for humans but also for nature at large." },
      { type: "img", src: "https://substackcdn.com/image/fetch/$s_!wars!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe94b4116-e12f-4872-94f7-651ddd55570c_1280x643.jpeg", alt: "Beyond Impact and European bioeconomy investment collaboration" },
      { type: "p", text: "We are proud backers of several bio solutions. Claire Smith, my colleague and founder of Beyond Impact VC, represented us at the first meeting of the Bioeconomy Investment Development Group, to which we were handpicked. Learn more from the Circular Bio-based Europe Joint Undertaking: https://www.cbe.europa.eu/news/mobilising-finance-scale-europes-bio-based-sector" },

      { type: "h2", text: "China" },
      { type: "p", text: "Other regional protein strategies, with China leading, maximize production across all protein pathways. They reinforce innovation in fermentation to supply protein across the full agri-food chain, including healthier and more sustainable food for citizens. There is strong recognition that only through strength across diversity can food security be achieved. China is pursuing an 'all-of-the-above' protein strategy, investing heavily in fermentation, recognizing that food security means sovereignty over biological manufacturing." },
      { type: "img", src: "https://substackcdn.com/image/fetch/$s_!GHpI!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F69ed97f8-cec1-4af9-9bb8-7f8f822d66b5_549x386.png", alt: "China advanced nutrition and bioeconomy strategy chart", caption: "Courtesy: Systemiq / Gordon and Betty Moore Foundation" },

      { type: "p", text: "According to analyses by institutions such as the Stockholm Resilience Center and Nature, the system is buckling under its own weight. Food production alone exceeds planetary boundaries; globalizing the Western diet would require three to five Earths." },
      { type: "p", text: "The journey from engineering seedless bananas to brewing proteins is a continuous arc of human innovation. The objective facts paint a clear picture: the old system is unsustainable and on the verge of collapse. The new narrative is one of hope, built on a better understanding of life's building blocks — a story of building a food system that is not only kinder and cleaner but also in true harmony with the natural world it depends on." },
      { type: "img", src: "https://substackcdn.com/image/fetch/$s_!cU72!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff6f9f27c-9252-4ca9-97f8-64c22890324b_1280x800.png", alt: "From seedless bananas to brewing proteins — the arc of human bioengineering", caption: "Picture credits: WePlanet — Seedless Bananas to Brewing Proteins & More by Sagar Tandon" },

      { type: "p", text: "The bioeconomy transition is reaching almost every sector and industry. But a critical issue is that extractive industries — such as petrochemicals, animal agriculture, and forestry — are built on a long history of government protection and subsidies. Many have become monopolies that disregard environmental costs, thereby keeping the prices of products such as chemical fertilizers, animal-sourced proteins, and materials artificially low. This means that a 1-to-1 comparison makes bio-based solutions seem outrageously expensive." },
      { type: "p", text: "Systemic change generates significant economic returns, but it takes patience. When short-term capital retreats, long-term sovereign and patient capital must step forward; we believe this is exactly the right time to support the sector and accelerate the transition to a kinder, cleaner, and healthier world." },
      { type: "p", text: "Our conviction at Beyond Impact is further strengthened by structural shifts across Europe, especially Northern Europe, particularly in the Nordics and the Netherlands. Helsinki's landmark plan to halve meat and dairy procurement by 2030 is one example of the growing political commitment to decouple public procurement from high-emission animal agriculture." },
      { type: "p", text: "In Service of Humanity, Sagar Tandon, Partner, Beyond Impact." },
    ],
  },
  {
    slug: "help-the-oceans-breathe-again",
    title: "Help the Oceans Breathe Again",
    author: "Sagar Tandon",
    date: "July 20, 2026",
    category: "Blue Economy",
    excerpt:
      "There is no green transition without a proper blue transition — a personal reckoning with water, and why Beyond Impact is investing in disruptive deep tech that restores rather than extracts from our oceans.",
    body: [
      { type: "p", text: "I grew up in a landlocked area, in a very small place somewhere in northern India. There was one river — just one — and it died. I don't fully know why. I imagine climate change played a significant role, or perhaps it was a combination of neglect, abstraction, and the slow violence of development that doesn't account for living things. Whatever the reason, its disappearance deprived the region's subsistence fisherfolk of their primary food source. They didn't just lose a river; they lost their livelihoods, their identity, their connection to something larger than themselves." },
      { type: "p", text: "I didn't have a romantic relationship with the ocean or water while growing up. It wasn't a common part of life; the geography of my birth dictated that distance. Water was practical — something to drink, something to wash with, something that could also disappear without warning. But as I grew older and moved to different places — especially in archipelagic countries — my relationship with water and with nature in general completely transformed." },
      { type: "p", text: "Now, I find it difficult to live in a landlocked area without access to water. I love observing water — the rhythm of waves, the way light plays on its surface, the endless conversation between tide and shore. It gives me a sense of calmness and serenity that I cannot explain, only feel. Each shore tells a different story, but they all share the same language: patience, persistence, and power." },
      { type: "img", src: "https://substackcdn.com/image/fetch/$s_!zJdL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F547c9657-c313-468e-9800-8c1e02a74ed0_1024x723.jpeg", alt: "Coral reef fish", caption: "\"Coral Reef fish\" by designatednaphour, licensed under CC BY 2.0" },
      { type: "quote", text: "The view of a shoreline is nature's way of reminding us where one world ends and another begins." },
      { type: "p", text: "It is also, I have come to believe, a mirror — reflecting back to us how we treat the planet that sustains us." },

      { type: "h2", text: "The Blue Transition is Non-Negotiable" },
      { type: "p", text: "There is no green transition without a proper blue transition. That means rethinking how we look at our oceans, rivers, streams, lakes, and other water bodies. It is critical to remember that they are not bottomless pits or trash cans. They are not infinite pools of natural resources that we can keep extracting to feed ourselves, heal ourselves (through marine ingredients used in pharmaceuticals and healthcare), or pump petroleum from. There must be a limit — or at least some level of sensitivity." },
      { type: "p", text: "Our oceans are dying. Whether you look at collapsing fish stocks, declining aquatic biodiversity, floating plastic islands, embedded microplastics in every water body, or dying coral reefs, the impact is undeniable. The crisis is far deeper than simply transitioning from petroleum-based fuels to net-zero battery packs. We don't hear enough about this, but we need a new transition economy — one that helps us move toward a kinder, cleaner, and healthier world rooted in SDG 12: Responsible Consumption and Production. In particular, we need a production transition: a fundamental rethink of how we produce everything — not just energy, but our food, materials, personal care products, and pharmaceuticals." },
      { type: "quote", text: "This is not an environmental issue. This is a civilization issue. How we treat our oceans is how we treat our future." },

      { type: "h2", text: "The Protein Diversification Imperative" },
      { type: "p", text: "When it comes to blue foods, we rely heavily on seafood for proteins and aqua-nutrients. But we need to understand that we are not just exploiting aquatic life through overconsumption; we are also damaging entire local ecosystems. We desperately need protein diversification — especially when it comes to seafood. As a corollary, we need to think beyond traditional aqua-nutrients extracted from fish and explore cell culturing, microalgal fractionation, biorefining, seaweed, and other cutting-edge approaches." },
      { type: "img", src: "https://substackcdn.com/image/fetch/$s_!MCi5!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F217f7efe-ecd4-4423-8c7c-00635741bd25_4640x3093.jpeg", alt: "Seaweed farming in Nusa Lembongan, Bali", caption: "\"Seaweed farming — Nusa Lembongan, Bali\" by Jean-Marie Hullot, licensed under CC BY-SA 2.0" },
      { type: "p", text: "For a second, even if we set aside the ethical and moral debate over whether fish are sentient, we must acknowledge the factual reality: overfishing has severely depleted fish stocks. According to the UN's Food and Agriculture Organization (FAO), more than one-third of assessed fish stocks are currently overfished. Overfishing doesn't just reduce the number of fish; it alters their biology, changes their growth rates, and disrupts overall aquatic biodiversity. We are playing with nature at a scale we don't fully comprehend, wrapped in our own cognitive dissonance." },
      { type: "quote", text: "We know the oceans are dying, yet we continue to extract from them. We know microplastics are in our blood, yet we continue to produce. This cognitive dissonance is not a failure of information — it is a failure of imagination. Our job at Beyond Impact is to imagine — and fund — a different way." },

      { type: "h2", text: "Beyond Mitigation, Toward Additionality" },
      { type: "p", text: "We need to think about new blue foods — not just those that are sustainable on paper, but those that push the boundaries of how we see food and produce it. We need to examine the entire supply chain. As my friend and partner Shunji Murakami says, we must rethink beyond mitigation strategies and look for innovative solutions that deliver additionality — real, measurable, systemic impact that goes beyond simply reducing harm." },
      { type: "p", text: "This personal reckoning with water didn't just change how I feel — it changed how I invest. And that is precisely the lens through which we view our work at Beyond Impact. We are a fund focused on innovative solutions that drive additionality — solutions that push the boundaries of thinking, science, and possibility. That is why we call it Beyond Impact. Some wonder if we are just another impact fund. We are not. We are the impact fund — one that looks beyond traditional approaches to impact investing and private markets. We believe that by investing in disruptive, deep-tech innovations, we can change the trajectory of impact and bring about system-level change." },
      { type: "p", text: "That is why we don't invest only in food-tech. We invest in system-level change — by backing platform companies that not only serve the food market but also transform all the derivatives and ingredients we currently derive from animals and nature, offering bio-based alternatives that are superior, scalable, and sustainable. We view this through a regenerative, humane, and systemic lens: nature provides not only food to eat, but also ingredients that heal our bodies, rejuvenate our flesh, and provide materials to wear, build, and create products." },
      { type: "quote", text: "True impact investing does not ask 'how do we do less harm?' but rather 'how do we do more good?'" },

      { type: "h2", text: "The Case for Marine Ingredients" },
      { type: "p", text: "Many people have written long-form reports and investment theses on the blue economy. I don't want to repeat them. Instead, I want to offer a fresh perspective on why we at Beyond Impact decided to enter this space — and why we chose to partner with Umito Partners." },
      { type: "p", text: "The marine ecosystem is a largely untapped reservoir of high-barrier intellectual property — including unique proteins, polyunsaturated fatty acids, and secondary metabolites with applications in chronic-illness treatments spanning neuroprotection, oncology, and cardiovascular defense. The transformation of the pharmaceutical endotoxin testing space perfectly illustrates this zero-extraction return engine. When the U.S. Pharmacopeia officially recognized synthetic, recombinant alternatives as safe and effective in May 2025, it didn't just slow down wild horseshoe crab harvesting — it triggered an immediate, systemic race among Eli Lilly, GSK, Amgen, and Moderna to permanently adopt cell-grown, bio-identical alternatives like recombinant cascade reagent (rCR) technology." },
      { type: "quote", text: "This is the inflection point we are betting on: the moment when biology becomes manufacturing, and when extraction becomes obsolete." },

      { type: "h2", text: "Our Two Investment Lenses in the Blue Economy" },
      { type: "p", text: "We fundamentally look at ventures in the blue economy through two lenses." },
      { type: "p", text: "1. Ventures that Utilize Ocean Resources — companies that cultivate or harvest marine resources such as microalgae or diatoms to create functional ingredients or high-performance materials, generating revenue from sustainable biomass without depleting wild stocks." },
      { type: "ul", items: [
        "Swedish Algae Factory — cultivates microscopic diatoms to produce \"Algica,\" a high-performance, naturally nanoporous silica material. Already commercially validated in premium skincare as an ocean-safe SPF booster and a moisturizer rivalling hyaluronic acid, its true 100x horizon lies in advanced wound care and MedTech, where uniform mesoporous architecture enables controlled release of active substances over precise days-to-weeks windows.",
        "Ingrediome — operates a precision fermentation platform that biosynthesizes nature-identical muscle proteins using only sunlight and CO₂ with cyanobacteria (blue-green algae), removing standard carbohydrate feedstocks from the equation and resolving critical feed-scarcity choke points.",
      ]},
      { type: "p", text: "2. Ventures that Replace the Usage of Marine Resources — companies that leverage cellular agriculture or precision fermentation to create alternatives that eliminate the need to harvest wild fish or deplete marine ecosystems, bypassing extraction entirely." },
      { type: "ul", items: [
        "Umami Bioworks — following its acquisition of crustacean pioneer Shiok Meats, Umami has evolved into a broader biomanufacturing platform. Using its AI-driven Alkemyst platform, it optimizes automated cell line development and continuous biomanufacturing, and recently unveiled the world's first animal-free, bioreactor-grown PDRN — a high-demand marine bioactive traditionally extracted from salmon sperm and used in anti-aging skincare and regenerative wound care.",
        "BlueNalu — a global leader in cultivated seafood, targeting high-value species such as bluefin tuna and establishing deep strategic partnerships with global supply chain leaders.",
      ]},
      { type: "p", text: "Through our partnership with Umito, we are specifically seeking out these exact zero-extraction inflection points — focusing on Blue Bio & Foods and Marine Bio-Materials." },

      { type: "h2", text: "Our Connection with Japan" },
      { type: "img", src: "https://substackcdn.com/image/fetch/$s_!CR7K!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fada66d85-0ab1-443f-b1ab-a15befd11b02_1023x680.jpeg", alt: "Fuji seaweed salad", caption: "\"Fuji seaweed salad\" by khawkins04, licensed under CC BY 2.0" },
      { type: "p", text: "This is where our thesis becomes truly distinctive. Several of our portfolio companies maintain deep, high-value connections to Japan's industrial, scientific, and corporate ecosystems — and we see this as a strategic bridge between Europe, Japan, and ASEAN." },
      { type: "ul", items: [
        "SuperMeat operates under a structured technology development and R&D framework with Japanese food and amino acid giant Ajinomoto, leveraging their \"AminoScience\" expertise to engineer plant-derived transferrin protein alternatives that drastically slash cell-culture media costs.",
        "BlueNalu has secured direct investment from Sumitomo Corporation and executed major commercial MoUs with Mitsubishi Corporation to evaluate regulatory frameworks and market scaling for its cultivated Bluefin Tuna Toro, while collaborating with Tokyo's Cellular Agriculture Study Group at Tama University.",
        "Gourmey (France) has explicitly designated Japan as a Tier-1, high-margin target market for its premium cultivated foie gras and poultry, establishing active networks with elite Tokyo culinary ambassadors and fine-food distributors.",
        "Umami Bioworks anchors this regional strategy through a landmark commercial distribution MoU with Japanese functional-ingredient pioneer Nippon Barrier Free, to scale automated biomanufacturing software and high-value marine bioactives — such as cell-grown PDRN derived from localized species like the Japanese eel — across 19 global markets.",
        "Mosa Meat brought Japanese mega-conglomerate Mitsubishi Corporation onto its cap table during its Series B fundraising round, instantly gaining access to Mitsubishi's global R&D infrastructure, food science divisions, and retail networks.",
        "Geltor maintains a highly lucrative commercial partnership with NAGASE Specialty Materials — a key subsidiary of the multibillion-dollar, Kyoto-founded NAGASE Group — to drive B2B distribution and formulation integration for its biodesigned animal-free human collagen and bioidentical human elastin across elite skincare networks.",
      ]},
      { type: "quote", text: "Japan is not just a market for us — it is a partner in reimagining what the bioeconomy can look like. Its scientific rigor, corporate longevity, and cultural reverence for the ocean make it the ideal co-architect of this transition." },

      { type: "h2", text: "Bridging Continents, Restoring Oceans" },
      { type: "p", text: "With Umito's deep expertise in ocean-based solutions and its Japan-based presence, we can marry our core competencies in bioeconomy solutions and biodiversity impact investments to build a European–Japanese–ASEAN bridge. This creates an oversized impact on the oceans and the communities that rely on them — and beyond." },
      { type: "quote", text: "Our goal, in essence, is to help the oceans breathe again — by investing in disruptive deep tech that restores rather than extracts." },
      { type: "img", src: "https://substackcdn.com/image/fetch/$s_!tlYl!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2e02686e-8060-4b1b-87de-5a75fdf40922_1000x563.png", alt: "Beyond Impact × Umito Partners partnership announcement", caption: "Read the partnership announcement on Umito Partners" },

      { type: "h2", text: "Suggested Reading & Key Reports" },
      { type: "ul", items: [
        "FAO (2026). The State of World Fisheries and Aquaculture (SOFIA) 2026. Food and Agriculture Organization of the United Nations, Rome.",
        "UNCTAD (2025). The Ocean Economy: Trade, Investment, and Sustainable Development. United Nations Conference on Trade and Development, Geneva.",
        "World Bank (2025). Blue Economy: A New Frontier for Sustainable Growth. World Bank Group, Washington D.C.",
        "OECD (2025). Marine Bioactive Compounds: Regulatory Pathways and Market Potential. OECD, Paris.",
        "Ellen MacArthur Foundation (2025). The Bio-based Materials Transition: Lessons from the Ocean. Cowes.",
        "High Level Panel for a Sustainable Ocean Economy (2025). Ocean Solutions for a Net-Zero, Nature-Positive Future. Ocean Panel, Washington D.C.",
      ]},
      { type: "img", src: "https://substackcdn.com/image/fetch/$s_!yT_c!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56a39568-4455-437a-b586-1e5d3fd87e4c_1024x767.jpeg", alt: "A Lego fish on a Lego bicycle", caption: "\"A Lego fish on a Lego bicycle\" by oskay, licensed under CC BY 2.0" },
      { type: "p", text: "Lastly, let us give fish a free(dom) ride so they feel free from the chains and nets of human beings, rather than being trapped by them." },
      { type: "p", text: "In Service of Humanity, Sagar Tandon, Partner, Beyond Impact VC." },
    ],
  },
  {
    slug: "food-system-is-broken-lets-rebuild-it",
    title: "The Food System Is Broken. Let's Rebuild It.",
    author: "Claire Smith",
    date: "October 29, 2025",
    category: "Food Systems",
    excerpt:
      "A decisive moment in food production — how biotechnology, precision fermentation, cellular agriculture, molecular farming and AI can rebuild a humane, decarbonising and regenerative food system. Originally published in GreenMoney Journal.",
    body: [
      { type: "img", src: "https://greenmoney.com/wp-content/uploads/2025/10/The-Food-System-is-broken.jpg", alt: "The Food System is broken — Perfat Technologies gelled vegetable oils", caption: "Above: Perfat Technologies is replacing saturated fats with healthier gelled vegetable oils." },
      { type: "p", text: "We are at a decisive moment in food production." },
      { type: "p", text: "The ways we grow, process and consume food have brought humanity to the edge of ecological and social breakdown. At the same time, they provide the greatest opportunity to redesign our systems. Food is not only sustenance; it is the most powerful lever we have to influence climate, biodiversity, water use, public health, and social equity." },
      { type: "p", text: "The food system impacts nearly every environmental and economic indicator, yet it has long received less attention than energy or transportation when it comes to sustainability strategies. At Beyond Impact, we seek out scalable B2B solutions that are humane, decarbonising and regenerative across nutrition, ingredients, pharmaceuticals and materials." },
      { type: "p", text: "This article examines how technology can transform the food system into a sustainable and resilient economy." },

      { type: "h2", text: "The global food system is in crisis" },
      { type: "p", text: "The global food system is at a tipping point. Agriculture consumes over 90% of the world's freshwater, occupies 43% of habitable land, and accounts for 26 to 34% of global greenhouse gas emissions. Industrial livestock production has already breached five of nine planetary boundaries, according to the Stockholm Resilience Centre. These include greenhouse gases, freshwater use, biodiversity loss, and nutrient cycles. If every person ate like the average American or European, humanity would require three to five planets to sustain itself." },
      { type: "p", text: "Yet, hunger remains a daily reality. Approximately 800 million people go hungry while two billion are overweight or obese. Meanwhile, one-third of all food produced is wasted, roughly 1.3 billion tons each year. This waste contributes 8 to 10% of global emissions. Water use is another critical issue. Producing one kilogram of beef consumes more than 15,000 litres of water, enough to fill a small swimming pool. By contrast, making one kilogram of lentils requires just 1,250 litres. Methane emissions from ruminants, 84 times more potent than CO₂ over 20 years, remain a major contributor to climate change." },
      { type: "p", text: "Agricultural runoff fuels algal blooms, dead zones, and biodiversity loss in rivers and oceans. Ammonia and particulate emissions from livestock farming contribute to thousands of premature deaths each year. Over 70% of antibiotics are used in animal agriculture, accelerating antimicrobial resistance. The system is also inefficient: half the world's habitable land is used for agriculture, yet 80% of that land supports livestock, which provides less than 20% of the calories." },
      { type: "p", text: "The current system is unsustainable, inefficient and inequitable. The scale of these challenges underscores the urgent need for innovation, investment and systemic transformation." },

      { type: "h2", text: "The opportunity for transformation" },
      { type: "p", text: "Transforming the food system is a critical ecological need and a massive economic opportunity. The combined market for animal-protein, functional ingredients and animal-free materials exceeds $2.7 trillion. Biotechnology is key to capturing this value, enabling the production of proteins like insulin and collagen without animals. Advanced nutrition, human food, and pet food alone could represent over $300 billion by 2035, with mainstream adoption possible by 2030 through supportive regulation and investment." },
      { type: "img", src: "https://greenmoney.com/wp-content/uploads/2025/10/Geltor-Collume-marine-inspired-vegan-collagen.jpg", alt: "Geltor Collume marine-inspired animal-free collagen", caption: "Collume® is a marine-inspired polypeptide, 100% animal-free, made through biodesign to create one of the first animal-free collagens for hair and skin. Image courtesy of Geltor." },
      { type: "p", text: "The opportunity extends beyond food. Materials derived from fermentation, mycelium or algae offer the potential to replace petrochemical or animal-derived inputs in textiles, packaging, and coatings. Geltor is pioneering the synthetic biology (synbio) frontier by engineering animal-free collagen for cosmetics and wellness. A new wave of material innovation is successfully decoupling industries from their reliance on animal and unsustainable inputs. Leading the charge are PLHYDE, with its zero-plastic leather made from upcycled produce, and Human Material Loop, which offers hotels a wool alternative from hair waste at competitive prices — collectively slashing the environmental footprint of their sectors." },
      { type: "img", src: "https://greenmoney.com/wp-content/uploads/2025/10/Plhyde-plant-based-zero-plastic-leather.jpg", alt: "PLHYDE plant-based zero-plastic leather", caption: "From PLHYDE — a fully sustainable, zero-plastic, bespoke plant-based leather material made from upcycled fruit and vegetables." },

      { type: "h2", text: "Innovation in ingredients" },
      { type: "p", text: "The foundation of change lies in the ingredients we use. Advances in biotechnology, upcycling and sustainable inputs create new opportunities to decouple food production from environmental harm." },
      { type: "p", text: "Precision fermentation enables microorganisms, such as yeast and fungi, to produce animal-like proteins, fats, and enzymes. The EVERY Company has scaled the production of authentic egg proteins through precision fermentation, utilizing a patented process to deliver its EVERY® Real Egg Protein — entirely without the need for chickens. Similarly, Paleo leverages precision fermentation to produce bio-identical heme proteins, such as myoglobin, with applications in the food, nutraceutical, personal care and pharmaceutical industries. These technologies reduce emissions by up to 90%, water use by 99%, and land use by more than 95%. They eliminate animal waste and the need for antibiotics." },
      { type: "p", text: "Cellular agriculture enables the growth of real animal cells, resulting in the production of meat in bioreactors. BlueNalu, Gourmey and Mosa Meat are demonstrating that cultivated meat can meet commercial and culinary standards. This approach significantly reduces greenhouse gas emissions, water usage, and land use compared to conventional livestock." },
      { type: "img", src: "https://greenmoney.com/wp-content/uploads/2025/10/Mosa-Meat.jpg", alt: "Mosa Meat cultivated beef", caption: "Image courtesy of Mosa Meat." },
      { type: "p", text: "Molecular farming utilizes plants as bioreactors to produce functional proteins. Nobell Foods produces casein from soybeans, Moolec Science generates myoglobin in safflower, and BioBetter expresses growth factors in tobacco plants. Molecular farming has lower capital requirements and energy use than fermentation or cell culture and can leverage existing agricultural infrastructure." },
      { type: "p", text: "Upcycling transforms food byproducts into high-value ingredients. Renewal Mill converts soybean pulp into protein- and fibre-rich flour, and YeastUp extracts proteins and fibres from spent brewers' yeast. Upcycling avoids new land use, reduces landfill methane emissions and builds circular supply chains." },
      { type: "img", src: "https://greenmoney.com/wp-content/uploads/2025/10/Algama-Foods-products.jpg", alt: "Algama Foods microalgae-based products", caption: "Image courtesy of Algama Foods." },
      { type: "p", text: "Sustainable inputs, such as microalgae, fungi and pulses, are being harnessed to create high-nutrition, low-impact ingredients. Companies like Algama utilize microalgae to create cost-effective egg replacers, while Ingrediome employs precision fermentation with cyanobacteria to produce authentic meat proteins for deli products, significantly reducing environmental impact. Together, these innovations form a new wave of resilient, scalable ingredients that support a healthier planet." },

      { type: "h2", text: "Technology and data" },
      { type: "p", text: "Artificial intelligence and digital tools are accelerating the development of new foods. AI can optimise formulations, predict taste and texture, model mouthfeel, and simulate nutrition profiles. Climax Foods uses machine learning to replicate cheese textures without dairy, reducing product development cycles from years to months." },
      { type: "p", text: "AI also identifies novel blends of plant fibres and oils to mimic animal fats. This reduces development time, lowers costs and helps overcome consumer resistance to plant-based or cultivated products. Companies are combining AI with sustainable inputs, using fungi as scaffolds for cultured meat or algae in fermentation media to lower costs." },
      { type: "img", src: "https://greenmoney.com/wp-content/uploads/2025/10/Paleo-produces-bio-identical-heme-proteins-such-as-myoglobin.jpg", alt: "Paleo bio-identical heme proteins including myoglobin", caption: "Paleo produces bio-identical heme proteins including myoglobin." },
      { type: "p", text: "These digital tools are enabling modular, flexible and scalable innovation. Ingredients can be adapted to local tastes, regional crops can be used effectively, and supply chains become more resilient to climate or market shocks. AI is no longer a peripheral tool; it is integral to creating a new, 21st-century food system." },

      { type: "h2", text: "Beyond food" },
      { type: "p", text: "The same foundational bio-innovations that are transforming our food system are now actively reshaping the materials landscape. We are moving beyond food to a world where animal-free collagen, mycelium leather and textiles derived from algae offer viable, sustainable alternatives. These novel materials reduce emissions throughout the entire product lifecycle, support a circular economy, and offer consumers ethical choices." },
      { type: "quote", text: "For the food industry, this means the opportunity to fully decarbonize supply chains by complementing novel protein innovations with biodegradable packaging and next-generation coatings, all produced without the use of petrochemicals or animal inputs." },
      { type: "p", text: "Furthermore, the cell-ag approach is rapidly expanding beyond food and materials into high-value industrial markets. Companies are establishing critical beachheads in nutraceuticals, personal care and pharmaceuticals. A prime example is TissenBioFarm's collaboration on the DR.KJ brand, which leverages proprietary biotissue engineering to create high-performance, regenerative skincare, demonstrating a straightforward and successful path from lab-based innovation to a premium consumer product." },

      { type: "h2", text: "Challenges" },
      { type: "p", text: "Significant barriers still hinder the growth of novel food technologies. Outdated regulatory frameworks struggle to keep pace with innovations like cellular agriculture, requiring harmonized, science-based standards to facilitate scaling. Infrastructure is another major constraint, as large-scale production depends on specialized bioreactors and facilities, necessitating shared hubs and public investment." },
      { type: "quote", text: "Consumer skepticism and perceptions of \"lab-grown\" products must be addressed through transparency and clear labelling." },
      { type: "p", text: "Furthermore, powerful legacy industries and their lobbying influence pose a substantial obstacle. Finally, for true global impact, these innovations must reach emerging markets through technology transfer and regional partnerships to ensure equitable adoption." },

      { type: "h2", text: "A call to action" },
      { type: "p", text: "The transformation of our food system is a pivotal step toward decarbonising our economy and building a regenerative future. Entrepreneurs, investors, policymakers and industry professionals now have the opportunity to shape a system where food nourishes people and preserves the planet. This requires integrating novel ingredients, investing in B2B infrastructure, advocating for clear policy, and educating consumers — all to reduce our collective footprint and make our methods more humane." },
      { type: "p", text: "This future is already unfolding. Imagine a world where burgers grow in bioreactors, desserts originate from upcycled grains and proteins are produced directly from plants without harming animals. These innovations are genuine today. Cell-cultivated meat offers a kinder alternative in restaurants, upcycled snacks provide a healthier choice in supermarkets, and algae-based proteins are appearing on shelves." },
      { type: "p", text: "We have the knowledge, tools, and experience to redefine how food is produced. Beyond Impact is proud to partner with the B2B innovators and pioneers who are leading this cleaner, kinder, healthier revolution." },
      { type: "p", text: "Together, we can build a food system that sustains life, strengthens communities, and preserves ecosystems for future generations." },

      { type: "img", src: "https://greenmoney.com/wp-content/uploads/2025/10/Claire-Smith-founder-of-Beyond-Investing.png", alt: "Claire Smith, founder of Beyond Investing", caption: "Claire Smith, founder of Beyond Impact." },
      { type: "p", text: "Article by Claire Smith, founder of humane investment platform Beyond Impact, an environmentalist with 33 years of experience in finance and investment at top-tier banks and investment houses." },
      { type: "p", text: "Originally published in GreenMoney Journal on October 29, 2025 — https://greenmoney.com/the-food-system-is-broken-lets-rebuild-it/" },
    ],
  },
  {
    slug: "fundraising-winter-is-a-blip",
    title: "Fundraising Winter is a Blip",
    author: "Claire Smith",
    date: "Q2 2024",
    category: "Alternative Proteins",
    excerpt:
      "Claire Smith, CEO of Beyond Impact VC, on surviving market cycles, why the current fundraising winter will pass, and what it takes to join her portfolio — featured in Protein Production Technology International.",
    body: [
      { type: "p", text: "The latest issue of Protein Production Technology International features an in-depth look at the advanced nutrition, human food and pet food investment landscape. They interviewed 10 experts from around the world, including Claire Smith, CEO of Beyond Impact VC." },
      { type: "p", text: "In the feature, Smith shares valuable insights on what it takes to join her portfolio, the most promising technologies in the industry, and her honest opinion on the current financial market." },
      { type: "img", src: fundraisingWinterBlip, alt: "Claire Smith interview in Protein Production Technology International — 'This fundraising winter is a blip'", caption: "Claire Smith featured in Protein Production Technology International, Q2 2024." },
      { type: "h2", text: "The entire food industry that relies on animal-based proteins or functional ingredients will be disrupted in the near future" },
      { type: "p", text: "An early pioneer of advanced nutrition, human food and pet food investment and longtime plant-based, Beyond Impact's Claire Smith has witnessed a great deal of change in the sector and, as she explains, she's adjusted her own approach accordingly. \"In the early days of 2017, we focused on pioneering human food and pet food companies creating nutrition and dairy substitutes for the animal-free/vegetarian lifestyle market. The thesis then focused on the potential for these products to disrupt the conventional food industry by offering convenient, animal-free options." },
      { type: "p", text: "\"I now prioritize investments in B2B biotech companies focused on novel methods of producing proteins, fats, and other ingredients through precision fermentation, cell culturing, and other synbio platforms. I now invest further upstream, where core IP and technological capabilities are being developed." },
      { type: "p", text: "\"My current investment lens looks at companies for B2B clients (food, skincare, materials) with the appeal and potential to disrupt animal industrials action through cost-competitive, functional, and sustainable ingredients enabled by their proprietary biotech platforms.\"" },
      { type: "h2", text: "Animal-free investing" },
      { type: "p", text: "When it comes to advanced nutrition, human food, and pet food, specifically, Smith details a clear-cut strategy for those seeking her investment. \"We don't invest in anything that relies on animals, including insects or companies that serve the animal/fish feed industry. Not only are insects sentient creatures that deserve our respect and consideration, but insect-based protein production may also not be as sustainable,\" she says." },
      { type: "p", text: "And although there are several opportunities she isn't remotely interested in, Smith describes herself as technology agnostic. \"Ingredients and materials can be synthesized/produced from various technologies such as plant-based, biomass fermentation, molecular farming, algae fermentation, cellular agriculture, gas fermentation, precision fermentation, etc. We evaluate each on its own merits with the aim of identifying the right application that provides a healthier, cleaner, and environmentally friendlier substitute that can reduce costs (to achieve price parity) and provide the right taste, texture, and feel.\"" },
      { type: "h2", text: "Disruption in the near future" },
      { type: "p", text: "With that in mind, what areas does Smith predict as having the most potential to achieve those goals? \"The entire food industry that relies on animal-based proteins or functional ingredients will be disrupted in the near future, as reliance on animals is inefficient from an environmental, supply chain, and financial standpoint,\" she notes. \"A some of these companies crack the code with scale and technical challenges, production of non-animal-derived ingredients, including proteins, will flourish and impact the meat, dairy, seafood, and pet industries. We are already seeing strong adoption in the dairy and meat alternatives segments, which will rapidly rise as these startups crack the cost-parity challenge." },
      { type: "p", text: "\"Our analysis is not only based on consumer adoption, but we are also seeing huge interest among large ingredient, food, meat, seafood, and dairy companies.\" Smith reveals that Beyond Impact is currently closing transactions with two companies, one in South Korea and another in Switzerland. \"One focuses on extracting proteins and other high-value functional ingredients such as fibers from spent brewers' yeast with some strong commercialization commitments,\" she reveals. \"The other one has strong IP/patents that can fundamentally change the reliance on grow-th factors, FBS, and FBS-free media required for cultured meat production. Hence, it can make cultivated meat production closer to price parity with fully cultured meat products without a hybrid approach.\"" },
      { type: "h2", text: "A blip, not a bust" },
      { type: "p", text: "Commenting on today's investment market, Smith adds, \"This fundraising winter is a blip, which I can say with confidence as I have survived and lived through the 1987 crash, the Asian crisis, the dot-com bubble, and the 2008 global financial crash. I am here for the long haul from an impact standpoint and value/patient investment standpoint. This will clean out a lot of bad apples (both entrepreneurs and investors) from the market, especially those driven by hype and not by fundamentals." },
      { type: "quote", text: "This fundraising winter is a blip and will clear out a lot of bad apples (both investors and entrepreneurs).", cite: "Claire Smith, CEO, Beyond Impact" },
      { type: "p", text: "\"Observing many 'bad apples' over the years means Smith can easily detail how her ethical and transparent approach differs. \"We are absolutely against animal-derived ingredients and products in the advanced nutrition, human food and pet food landscape, and we go to extreme lengths with our companies to incorporate terms and clauses that they are not conducting animal testing, selling to the animal/fish feed industry, or selling hybrid animal-derived meat combined with alternative meat products. We are the only animal-free Article 9 SFDR fund, which shows how nascent the climate financing space is in recognizing the connection between climate change, the biodiversity crisis, and the economy's current dependence on animal-derived products and ingredients.\"" },
      { type: "p", text: "Originally published in Protein Production Technology International, Q2 2024. Read the full feature: https://hubs.ly/Q02x4h3d0" },
    ],
  },
];



export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
