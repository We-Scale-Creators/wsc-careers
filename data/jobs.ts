export interface JobSection {
  title: string;
  content?: string;
  listItems?: { bold: string; text: string }[];
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  location: string;
  type: string;
  compensation: string;
  compensationShort: string;
  summary: string;
  sections: JobSection[];
}

export const jobs: Job[] = [
  {
    id: "head-of-performance-marketing",
    slug: "head-of-performance-marketing",
    title: "Head of Performance Marketing",
    shortTitle: "Head of Perf. Marketing",
    location: "Remote (U.S. preferred)",
    type: "Full-Time Contractor",
    compensation: "$12,000/month base + profit share",
    compensationShort: "$12K/mo + Profit Share",
    summary:
      "Own overall marketing strategy, growth opportunities, and performance trajectory for every offer in the WSC portfolio. Lead war rooms, guide creative strategy, and drive results across 10\u201315+ active creator partnerships.",

    sections: [
      {
        title: "Who We Are",
        content:
          "We Scale Creators is a performance marketing agency that partners with top influencers and info-product creators to build, launch, and scale high-performing offers.\n\nWe operate on a profit-share model. We front all capital and ad spend, build funnels, run paid traffic, and scale aggressively. Our partners pay nothing upfront. We only win when they win.\n\nOur portfolio includes creators like Cheryl Porter (38M+ followers) alongside established info-product businesses across fitness, finance, career coaching, health, and business education. We have generated over $50M in revenue for our partners and currently manage multiple seven-figure monthly offers across a growing portfolio of 10 to 15 active creator partnerships.",
      },
      {
        title: "The Role",
        content:
          "We are hiring a Head of Performance Marketing to own the overall marketing strategy, growth opportunities, and performance trajectory for every offer in the WSC portfolio. This role reports directly to the co-founders and sits in the strategic leadership layer of the company.\n\nYou will lead pod war room meetings, work hands-on with media buyers, copywriters, designers, and editors to ensure strategy translates into results, and bring new funnel concepts, ad angles, and split-test ideas to the table every week. You will collaborate with our Creative Director on creative concepts, bringing the marketing angle and audience insight while the Creative Director owns final creative direction.\n\nYou will also own all weekly client calls, providing performance updates and strategic recommendations directly to the creators we partner with. This requires someone who can speak confidently about results and build trust with high-profile partners.\n\nYou will have access to our proprietary Internal Hub, an AI-powered platform built on $50M+ in performance data that provides copy generation, creative briefing, and performance analytics tools designed to multiply your strategic output across a large portfolio.",
      },
      {
        title: "What You Will Own",
        listItems: [
          {
            bold: "Marketing Strategy:",
            text: "Own the overall marketing strategy for each offer in the portfolio. This includes funnel architecture, ad angle development, audience targeting strategy, offer positioning, and growth roadmaps. You are the person responsible for making sure every offer is moving forward.",
          },
          {
            bold: "War Room Leadership:",
            text: "Lead pod war rooms 2 to 3 times per week. Open each session by reviewing performance data, identifying what is working, what is underperforming, and where the opportunities are. Set the strategic context that the Creative Director and execution team use to make decisions.",
          },
          {
            bold: "Growth Opportunities:",
            text: "Continuously identify and recommend new funnel types, new angles for ads, new split tests, and new monetization approaches. You are the person who sees what is possible and pushes the team to go after it.",
          },
          {
            bold: "Hands-On Collaboration:",
            text: "Work directly and hands-on with the media buyer, copywriter, designers, and editors on the overall success of each offer. This is not about reviewing their individual deliverables line by line. It is about making sure the strategy you set is being executed effectively and that the results reflect it.",
          },
          {
            bold: "Creative Concept Development:",
            text: "Collaborate with the Creative Director to develop creative concepts for ad campaigns. You bring the marketing strategy, the angle, the audience insight. The Creative Director makes the final call on creative direction and execution.",
          },
          {
            bold: "Client Communication:",
            text: "Own all weekly client calls across the portfolio. Provide performance updates, strategic recommendations, and growth plans directly to the creators we partner with. Build and maintain strong relationships based on trust and results.",
          },
          {
            bold: "Performance Analysis:",
            text: "Review ROAS, CPA, CVR, EPC, and funnel metrics across all offers on a daily and weekly basis. Use our Internal Hub and attribution tools to identify trends, diagnose problems, and make data-backed strategic recommendations.",
          },
          {
            bold: "Leadership Collaboration:",
            text: "Work directly with the co-founders on marketing strategy, results, and growth opportunities for specific offers. Participate in strategic planning and provide input on new client onboarding, offer development, and portfolio-level decisions.",
          },
        ],
      },
      {
        title: "Requirements",
        listItems: [
          {
            bold: "Performance Marketing Experience:",
            text: "3 to 5 years in direct response performance marketing with a strong track record of scaling offers to six or seven figures in monthly revenue. Info-products, coaching, or creator economy experience is strongly preferred.",
          },
          {
            bold: "Strategic Thinking:",
            text: "Proven ability to develop marketing strategies across multiple offers simultaneously. You should be able to look at an offer, identify the bottleneck in the funnel, and recommend a specific test or strategic shift to fix it.",
          },
          {
            bold: "Full-Funnel Understanding:",
            text: "Deep knowledge of front-end acquisition funnels, low-ticket to high-ticket ascension models, email sequences, upsell flows, and backend monetization. You need to understand how the entire revenue engine works, not just the ads.",
          },
          {
            bold: "Media Buying Literacy:",
            text: "You do not need to be a media buyer, but you need to understand ad accounts well enough to look at campaign data and have an informed conversation about what to change. You should be fluent in ROAS, CPA, CPM, CTR, and how they connect to funnel performance.",
          },
          {
            bold: "Data-Driven Decision Making:",
            text: "Comfortable reviewing performance dashboards, attribution data (we use Hyros), and funnel analytics to make strategic recommendations. Gut instinct is valuable, but data wins.",
          },
          {
            bold: "Client-Facing Confidence:",
            text: "This role requires weekly calls with high-profile creators and business owners. You must be articulate, professional, and confident when presenting results and recommendations. Creators trust us with their brand. You need to reinforce that trust every week.",
          },
          {
            bold: "Communication & Leadership:",
            text: "Strong communicator who can lead a war room, set strategic direction for a team, and clearly articulate the rationale behind marketing decisions. You are not managing people. You are leading strategy.",
          },
          {
            bold: "Versatility Across Niches:",
            text: "Ability to develop marketing strategies across multiple niches simultaneously. Our portfolio spans vocal coaching, business acquisition, trading education, career coaching, functional medicine, and more.",
          },
          {
            bold: "Speed & Adaptability:",
            text: "Comfortable in a fast-moving environment where strategy evolves weekly based on real performance data. You do not get attached to plans that are not working.",
          },
          {
            bold: "Nice to Have:",
            text: "Agency founder or operator background. Experience building and scaling your own offers or running marketing for a portfolio of clients.",
          },
        ],
      },
      {
        title: "Compensation & Benefits",
        listItems: [
          {
            bold: "Base Salary:",
            text: "$12,000 per month.",
          },
          {
            bold: "Profit Share:",
            text: "Percentage of pod profit across all offers you oversee. This role spans the entire portfolio, which means your profit share scales as the company grows. Significant upside for the right person.",
          },
          {
            bold: "Strategic Leadership:",
            text: "You sit in the strategic leadership layer alongside the co-founders and Creative Director. This is not a middle-management role. Your decisions directly shape the trajectory of a $50M+ portfolio.",
          },
          {
            bold: "AI-Powered Tools:",
            text: "Access to our proprietary Internal Hub built on $50M+ in performance data. This platform provides copy generation, creative briefing, and performance analytics designed to multiply your strategic output.",
          },
          {
            bold: "Growth Path:",
            text: "As WSC scales to 15+ offers and beyond, this role grows in scope, compensation, and strategic influence. The right person in this seat becomes a true partner in the business.",
          },
          {
            bold: "Remote & Flexible:",
            text: "Fully remote, results-driven culture. We care about output, not hours logged.",
          },
        ],
      },
      {
        title: "Apply",
        content:
          "Click the button below, fill out your application, and our team will reach out to discuss next steps.",
      },
    ],
  },
  {
    id: "senior-copywriter",
    slug: "senior-copywriter",
    title: "Senior Copywriter",
    shortTitle: "Senior Copywriter",
    location: "Remote (U.S.-based)",
    type: "Full-Time Contractor",
    compensation: "$7,000\u2013$8,000/month base + profit share",
    compensationShort: "$7K\u2013$8K/mo + Profit Share",
    summary:
      "Own copy across a portfolio of 5\u20138 creator offers generating six and seven figures monthly. Write high-converting ads, funnels, emails, and VSLs at volume.",

    sections: [
      {
        title: "Who We Are",
        content:
          "We Scale Creators is a performance marketing agency that partners with top influencers and info-product creators to build, launch, and scale high-performing offers.\n\nWe operate on a profit-share model: we front all capital and ad spend, build funnels, run paid traffic, and scale aggressively. Our partners pay nothing upfront \u2014 we only win when they win.\n\nOur portfolio includes creators like Cheryl Porter (38M+ followers) alongside established info-product businesses across fitness, finance, career coaching, health, and business education. We\u2019ve generated $50M+ in revenue for our partners and currently manage multiple seven-figure monthly offers.",
      },
      {
        title: "The Role",
        content:
          "We\u2019re hiring a Senior Copywriter to own copy across a portfolio of 5\u20138 creator offers generating six and seven figures monthly.\n\nYou won\u2019t be writing in a vacuum. You\u2019ll work inside a pod-based team structure alongside a designer, media buyer, video editors, and virtual assistants, with creative direction from our Creative Director and marketing strategy from our Head of Performance Marketing.\n\nYou\u2019ll participate in war room meetings where you pitch ad concepts, receive performance data, and collaborate on split-test strategies in real time.\n\nThis is not an entry-level role. We need someone who can take a creative brief, internalize a client\u2019s voice, and produce high-converting copy across ads, funnels, emails, and VSLs without hand-holding.\n\nYou\u2019ll have strategic direction and feedback loops, but between meetings, you execute autonomously and at volume.\n\nThis is a high-base + profit share role with significant upside as the portfolio grows.",
      },
      {
        title: "What You\u2019ll Do",
        listItems: [
          {
            bold: "Ad Copy at Volume:",
            text: "Write 40\u201350+ ad copy variations per week across your assigned offers \u2014 hooks, bodies, angles, and overlay text for both video and image ads.",
          },
          {
            bold: "Funnel Copy & CRO:",
            text: "Write and optimize landing pages, order forms, upsell pages, and checkout flows. Run weekly split-tests with a CRO mindset, using data to drive decisions.",
          },
          {
            bold: "Long-Form Sales Copy:",
            text: "Write VSL scripts, sales letters, email sequences, and upsell copy for both new launches and existing offers.",
          },
          {
            bold: "Awareness-Level Targeting:",
            text: "Write across the full awareness spectrum (problem aware, solution aware, product aware, and most aware), tailoring messaging to where the audience is in their journey.",
          },
          {
            bold: "War Room Participation:",
            text: "Participate in pod war rooms 2\u20133x/week where you\u2019ll pitch creative concepts, review performance data, and collaborate with the team on what\u2019s working and what to test next.",
          },
          {
            bold: "Cross-Functional Collaboration:",
            text: "Work directly with our designer on ad creative pairing (your copy + their visuals), our media buyer on performance feedback loops, and our video editors on hook/body scripting.",
          },
          {
            bold: "AI & Systems:",
            text: "Use our internal AI-powered tools, templates, and frameworks to move fast. We\u2019ve built systems to accelerate copy production \u2014 you\u2019ll leverage them, not fight them.",
          },
        ],
      },
      {
        title: "Requirements",
        listItems: [
          {
            bold: "Direct Response Copywriting:",
            text: "3+ years writing conversion-driven ads, VSLs, emails, and sales pages in the direct response space. Info-products, coaching, or creator economy experience strongly preferred.",
          },
          {
            bold: "Proven Performance:",
            text: "Show us measurable results \u2014 CTR, CVR, ROAS, revenue generated, or before/after funnel metrics. We care about what your copy did, not just what it looked like.",
          },
          {
            bold: "CRO & Data Literacy:",
            text: "Experience running split-tests and making data-driven improvements. You should be comfortable reading ad account metrics and understanding what they mean for your copy.",
          },
          {
            bold: "Versatility Across Niches:",
            text: "Ability to write across multiple niches and adopt different brand voices quickly. Our portfolio spans vocal coaching, business acquisition, trading education, career coaching, health, and more.",
          },
          {
            bold: "Speed + Quality:",
            text: "Can produce high-volume copy without sacrificing quality. 40\u201350+ ad variations per week is the baseline, not the ceiling.",
          },
          {
            bold: "Communication:",
            text: "Clear communicator who thrives in a collaborative environment. You\u2019ll be in war rooms with the team multiple times per week and need to articulate your thinking.",
          },
        ],
      },
      {
        title: "Compensation & Benefits",
        listItems: [
          {
            bold: "Base Salary:",
            text: "$7,000\u2013$8,000/month depending on experience.",
          },
          {
            bold: "Profit Share:",
            text: "Percentage of pod profit across the offers you work on. As the portfolio scales, your bonus grows with it \u2014 top performers earn well above base.",
          },
          {
            bold: "High-Impact Work:",
            text: "Write for some of the biggest creators and offers in the info-product space. Your copy will be seen by millions.",
          },
          {
            bold: "Growth Path:",
            text: "As WSC scales to 15+ offers across multiple pods, top performers move into senior leadership roles with expanded scope and compensation.",
          },
          {
            bold: "Remote & Flexible:",
            text: "Fully remote, results-driven culture. We care about output, not hours logged.",
          },
        ],
      },
      {
        title: "Apply",
        content:
          "Click the button below, fill out your application, and our team will reach out to discuss next steps.",
      },
    ],
  },
  {
    id: "senior-media-buyer",
    slug: "senior-media-buyer",
    title: "Senior Media Buyer",
    shortTitle: "Senior Media Buyer",
    location: "Remote (U.S. preferred)",
    type: "Full-Time Contractor",
    compensation: "$7,000\u2013$8,000/month base + profit share",
    compensationShort: "$7K\u2013$8K/mo + Profit Share",
    summary:
      "Manage and scale paid media campaigns across Meta, LinkedIn, and YouTube, deploying $150K\u2013$300K+ in monthly ad spend per client across 5\u20138 active offers.",

    sections: [
      {
        title: "Who We Are",
        content:
          "We Scale Creators is a performance marketing agency that partners with top influencers and info-product creators to build, launch, and scale high-performing offers.\n\nWe operate on a profit-share model. We front all capital and ad spend, build funnels, run paid traffic, and scale aggressively. Our partners pay nothing upfront. We only win when they win.\n\nOur portfolio includes creators like Cheryl Porter (38M+ followers) alongside established info-product businesses across fitness, finance, career coaching, health, and business education. We have generated over $50M in revenue for our partners and currently manage multiple seven-figure monthly offers.",
      },
      {
        title: "The Role",
        content:
          "We are hiring a Senior Media Buyer who is equal parts data-driven performance marketer and creative strategist. You will manage and scale paid media campaigns across Meta (primary), LinkedIn, and YouTube, deploying $150K to $300K+ in monthly ad spend per client across a portfolio of 5 to 8 active offers.\n\nThis is a pivotal role within our pod-based team structure. You will work alongside a copywriter, designer, video editors, and virtual assistants with creative direction from our Creative Director and marketing strategy from our Head of Performance Marketing and directly from Leadership.\n\nYou will participate in war room meetings multiple times per week where the team reviews performance data, identifies opportunities, and plans the next round of creative tests.\n\nYou must thrive in a fast-paced environment, be obsessed with numbers and rapid iteration, and have the ownership mentality to drive consistent scale.\n\nWhen a campaign is working, you scale it. When it is not, you kill it fast and move on. We follow a Keep/Kill/Scale methodology and expect you to make those calls with confidence.\n\nThis is a high-base plus profit share role with significant upside as the portfolio grows.",
      },
      {
        title: "What You Will Do",
        listItems: [
          {
            bold: "Campaign Strategy & Execution:",
            text: "Own end-to-end execution of paid campaigns across Meta, LinkedIn, and YouTube. This includes strategy, audience segmentation, targeting, budget allocation, and ongoing optimization.",
          },
          {
            bold: "Rapid Creative Launching:",
            text: "Launch new video, static, and copy creatives within a 12-hour turnaround. Speed of testing is a competitive advantage and a core expectation of this role.",
          },
          {
            bold: "Budget Management & Scaling:",
            text: "Strategically deploy and manage $150K to $300K+ in monthly ad spend per client. You will be responsible for scaling winning campaigns aggressively while maintaining target KPIs.",
          },
          {
            bold: "Keep/Kill/Scale Methodology:",
            text: "Evaluate every campaign, ad set, and creative through a Keep/Kill/Scale framework. Identify winners fast, cut losers faster, and allocate budget to what is performing. No emotional attachment to creative.",
          },
          {
            bold: "Testing & Optimization:",
            text: "Implement rigorous split-testing across audiences, placements, creatives, and copy. Identify creative fatigue and audience saturation before they impact performance. Proactively recommend new test angles.",
          },
          {
            bold: "Attribution & Analytics:",
            text: "Use Hyros for attribution tracking alongside platform-native analytics. Deliver detailed weekly performance reports covering ROAS, CPA, CTR, and CPM with clear insights, diagnostics, and recommended action plans.",
          },
          {
            bold: "War Room Participation:",
            text: "Join pod war rooms 2 to 3 times per week. Review performance data with the team, provide feedback on which creatives are winning or losing, and collaborate on what to test next.",
          },
          {
            bold: "Cross-Functional Collaboration:",
            text: "Work directly with our copywriter, designer, and leadership team to guide winning ad creation. Provide clear feedback on what types of hooks, angles, and visuals are performing so the creative team can produce more of what works.",
          },
        ],
      },
      {
        title: "Requirements",
        listItems: [
          {
            bold: "Direct Response Media Buying:",
            text: "3+ years managing performance-based paid media campaigns. Info-products, coaching, or creator economy experience is strongly preferred.",
          },
          {
            bold: "Proven Scale:",
            text: "Track record of scaling campaigns to six or seven figures in monthly revenue across paid media platforms. Show us the numbers.",
          },
          {
            bold: "Platform Proficiency:",
            text: "Deep expertise in Meta Business Manager (required). Working knowledge of LinkedIn Ads and YouTube Ads. Experience with Advantage+ campaigns is a plus.",
          },
          {
            bold: "Attribution Expertise:",
            text: "Experience with Hyros or similar third-party attribution platforms. You should understand the difference between platform-reported and actual performance.",
          },
          {
            bold: "Creative Testing Frameworks:",
            text: "Strong understanding of how to structure creative tests, read results, and translate performance data into actionable creative briefs for the team.",
          },
          {
            bold: "KPI Analysis:",
            text: "Ability to derive insights from CPA, ROAS, CTR, CPM, and funnel conversion data that influence both creative and budget allocation decisions.",
          },
          {
            bold: "Speed & Decisiveness:",
            text: "Comfortable making fast budget and optimization decisions with real money on the line. Hesitation costs money in this role.",
          },
          {
            bold: "Communication:",
            text: "Excellent communicator who can clearly articulate what is working, what is not, and why. You will be in war rooms with the team multiple times per week and on performance calls with leadership.",
          },
          {
            bold: "Availability:",
            text: "U.S.-based or willing to work full-time during U.S. business hours.",
          },
        ],
      },
      {
        title: "Compensation & Benefits",
        listItems: [
          {
            bold: "Base Salary:",
            text: "$7,000 to $8,000 per month, depending on experience.",
          },
          {
            bold: "Profit Share:",
            text: "Percentage of pod profit across the offers you manage. As the portfolio scales, your bonus grows with it. Top performers earn well above base.",
          },
          {
            bold: "Real Budget, Real Impact:",
            text: "You will manage millions in annual ad spend across some of the biggest offers in the creator economy. This is not a small-budget testing role.",
          },
          {
            bold: "Performance Feedback Loop:",
            text: "Your optimization decisions directly impact revenue. You will see the results of your work in real-time, every single day.",
          },
          {
            bold: "Growth Path:",
            text: "As WSC scales to 15+ offers across multiple pods, top performers move into senior leadership roles with expanded scope and compensation.",
          },
          {
            bold: "Remote & Flexible:",
            text: "Fully remote, results-driven culture. We care about output, not hours logged.",
          },
        ],
      },
      {
        title: "Apply",
        content:
          "Click the button below, fill out your application, and our team will reach out to discuss next steps.",
      },
    ],
  },
  {
    id: "graphic-designer",
    slug: "graphic-designer",
    title: "Graphic Designer (Direct-Response Advertising)",
    shortTitle: "Graphic Designer",
    location: "Remote (U.S. business hours)",
    type: "Full-Time Contractor",
    compensation: "$3,500\u2013$4,500/month",
    compensationShort: "$3.5K\u2013$4.5K/mo",
    summary:
      "Design scroll-stopping paid ads, high-performing funnel graphics, and brand-consistent visuals that drive millions in revenue across our creator portfolio.",

    sections: [
      {
        title: "Who We Are",
        content:
          "We Scale Creators is a performance marketing agency that partners with top influencers and info-product creators to build, launch, and scale high-performing offers.\n\nWe operate on a profit-share model. We front all capital and ad spend, build funnels, run paid traffic, and scale aggressively. Our partners pay nothing upfront. We only win when they win.\n\nOur portfolio includes creators like Cheryl Porter (38M+ followers) alongside established info-product businesses across fitness, finance, career coaching, health, and business education. We have generated over $50M in revenue for our partners and currently manage multiple seven-figure monthly offers.",
      },
      {
        title: "The Role",
        content:
          "We are hiring a Graphic Designer who can blend conversion metrics with creative firepower. You will design scroll-stopping paid ads, high-performing funnel graphics, and brand-consistent visuals that drive millions in revenue.\n\nThis is a fast-paced, high-output role embedded inside our pod-based team structure. You will work alongside a copywriter, media buyer, video editors, and virtual assistants with creative direction from our Creative Director and Founders directly. Your work gets tested in-market every single week, which means you will see direct, measurable results from what you create.\n\nYou will receive creative briefs, overlay copy from our copywriting team, and brand guidelines for each client. Your job is to turn those inputs into compelling, conversion-focused ad creatives and funnel assets at volume and on deadline.",
      },
      {
        title: "What You Will Do",
        listItems: [
          {
            bold: "Ad Creative Production:",
            text: "Design 10+ high-converting paid image ads per client per week. This includes static ads, carousel ads, and graphic overlays for video content.",
          },
          {
            bold: "Funnel Graphics:",
            text: "Create sales page graphics, upsell and downsell visuals, testimonial graphics, order bump assets, and checkout page elements.",
          },
          {
            bold: "Concept Translation:",
            text: "Turn hooks, copy, and offers into compelling, conversion-focused designs. You are not just making things look good. You are designing for action.",
          },
          {
            bold: "Creative Research:",
            text: "Analyze market leaders and competitors for design inspiration and performance insights. Stay current on what is working in paid advertising creative.",
          },
          {
            bold: "Team Collaboration:",
            text: "Work directly with our copywriter on ad creative pairing (their copy plus your visuals) and our media buyer on performance feedback. Participate in pod war rooms where the team reviews results and plans new concepts.",
          },
          {
            bold: "Brand Consistency:",
            text: "Maintain visual alignment with each client\u2019s brand guidelines while pushing creative boundaries. Every client has a different look and feel, and you will need to move between them quickly.",
          },
          {
            bold: "Rapid Iteration:",
            text: "When an ad creative shows early signs of performance, be ready to produce variations quickly. Speed of iteration is a competitive advantage.",
          },
        ],
      },
      {
        title: "Requirements",
        listItems: [
          {
            bold: "Direct-Response Design Experience:",
            text: "1 to 2 years designing ads for direct-response marketing campaigns. Info-products, coaching, or creator economy experience is a plus.",
          },
          {
            bold: "Portfolio with Results:",
            text: "Strong portfolio showing paid ad creatives and funnel graphics. We want to see work that was designed to convert, not just look good. If you can share performance data on your designs, even better.",
          },
          {
            bold: "Design for Conversion:",
            text: "Deep understanding of visual hierarchy, attention-grabbing layouts, and design principles that drive clicks and purchases. Aesthetics matter, but performance matters more.",
          },
          {
            bold: "Tool Proficiency:",
            text: "Proficiency in Adobe Creative Suite, Figma, or similar design tools. You should be fast and efficient in your primary tool.",
          },
          {
            bold: "High Volume, High Quality:",
            text: "Proven ability to produce at high volume without sacrificing quality. This role requires consistent output across multiple clients every week.",
          },
          {
            bold: "Tight Deadlines:",
            text: "Comfortable working in a high-speed environment with non-negotiable deadlines. When a campaign needs creative, it cannot wait.",
          },
          {
            bold: "Communication:",
            text: "Strong communication skills for cross-functional collaboration. You will receive feedback from the Creative Director and need to implement revisions quickly and accurately.",
          },
          {
            bold: "Availability:",
            text: "Must be available during U.S. business hours for real-time collaboration, war room meetings, and feedback loops. Timezone is flexible as long as availability is consistent.",
          },
        ],
      },
      {
        title: "Compensation & Benefits",
        listItems: [
          {
            bold: "Base Salary:",
            text: "$3,500 to $4,500 per month, depending on experience and portfolio strength.",
          },
          {
            bold: "High-Impact Work:",
            text: "Design ads and funnels for some of the biggest creators and offers in the info-product space. Your work will be seen by millions of people all around the world.",
          },
          {
            bold: "Direct Performance Feedback:",
            text: "Unlike most design roles, you will see exactly how your creatives perform in-market every week. This is an incredible learning environment for any designer who wants to get better fast.",
          },
          {
            bold: "Growth Opportunity:",
            text: "As WSC scales to 15+ offers across multiple pods, high performers take on more responsibility and higher compensation.",
          },
          {
            bold: "Remote & Flexible:",
            text: "Fully remote, results-driven culture. We care about output, not hours logged.",
          },
        ],
      },
      {
        title: "Apply",
        content:
          "Click the button below, fill out your application, and our team will reach out to discuss next steps.",
      },
    ],
  },
];
