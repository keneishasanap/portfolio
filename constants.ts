import { Project, Role, Award, Certification } from './types';

export const PORTFOLIO_ITEMS: Project[] = [
  {
    id: '1',
    title: 'Eco-Conscious Brand Strategy',
    category: 'Product Marketing',
    imageUrl: 'https://picsum.photos/600/400?grayscale',
    description: 'Developed a go-to-market strategy for a sustainable fashion line, increasing engagement by 45%.'
  },
  {
    id: '2',
    title: 'Urban Mobility UX Research',
    category: 'User Experience',
    imageUrl: 'https://picsum.photos/600/401?grayscale',
    description: 'Conducted user interviews and usability testing to redesign a transit app interface.'
  },
  {
    id: '3',
    title: 'Digital Wellness Campaign',
    category: 'Social Media',
    imageUrl: 'https://picsum.photos/600/402?grayscale',
    description: 'Led a cross-platform campaign focusing on mental health awareness in the digital age.'
  },
  {
    id: '4',
    title: 'Tech For Good: Editorial',
    category: 'Content Creation',
    imageUrl: 'https://picsum.photos/600/403?grayscale',
    description: 'A series of long-form articles analyzing the impact of AI on creative industries.'
  }
];

export const EXPERIENCE_ITEMS: Role[] = [
  {
    id: 'sasa',
    title: 'Director of Events',
    company: 'South Asian Student Association\nPace University, New York City',
    period: 'September 2025 - May 2026',
    description: [
      'Led the strategy, planning, and execution of cultural, social, and professional events for a diverse student community.',
      'Translated student needs into engaging experiences through user-centered thinking, strong communication, and cross-functional collaboration.',
      'Managed timelines, budgets, and teams, coordinated logistics, and partnered with sponsors and campus organizations.',
      'Used feedback and engagement data to iterate on programming and improve impact.',
      'Strengthened ability to define problems, align stakeholders, and deliver thoughtful, experience-driven solutions.'
    ]
  },
  {
    id: '0',
    title: 'Administrative Associate',
    company: 'Athletics Center, Oklahoma Christian University',
    period: 'May 2023 - May 2024',
    description: [
      'Product Operations & Data Management: Managed the end-to-end user onboarding process via [Name of Software, e.g., Mindbody/ZenPlanner], overseeing membership creation, digital contract execution, and database integrity for a diverse client base.',
      'User Experience (UX) Optimization: Acted as the primary point of contact for facility access, streamlining the "check-in" workflow to reduce wait times and improve the daily entry experience for [Number] members.',
      'Cross-Functional Communication: Served as the liaison between athletic staff and members, translating facility policies and membership terms into clear, accessible information to drive retention and resolve billing or access friction.',
      'Conflict Resolution & Retention: Proactively addressed user pain points regarding account status or facility barriers, utilizing empathetic communication to maintain high satisfaction scores and minimize churn.',
      'Core Skills: User Onboarding, CRM Management, Technical Troubleshooting, Stakeholder Relations.'
    ]
  },
  {
    id: '1',
    title: 'Co-Producer & Lead Anchor',
    company: 'Eagle Angle (CBS Channel 9)\nStudent-Produced Live Newscast | Weekly Broadcast',
    period: 'May 2022 - May 2023',
    description: [
      'End-to-End Product Ownership: Managed the full lifecycle of a weekly live broadcast, from initial story ideation and script development to final delivery, ensuring 100% on-time "launch" for every episode.',
      'Cross-Functional Leadership: Coordinated a technical crew and a team of reporters to synchronize live segments, graphics, and audio, maintaining high production standards under high-pressure, real-time constraints.',
      'Strategic Communication: As Lead Anchor, translated complex local news into engaging, concise narratives for a broadcast audience, maintaining brand authority and "user" (viewer) trust.',
      'Agile Problem Solving: Directed live troubleshooting during technical outages and breaking news shifts, demonstrating the ability to pivot strategy instantly without compromising output quality.',
      'Core Competencies: Live Production, Lifecycle Management, Narrative Strategy, High-Pressure Decision Making.'
    ]
  },
  {
    id: 'res-ops',
    title: 'Residential Operations Associate',
    company: 'Office of Residential Life',
    period: 'May - July 2023',
    description: [
      'Product Quality Assurance (QA): Conducted rigorous "launch-readiness" inspections for residential units, ensuring all physical "features" met strict safety, aesthetic, and functional standards prior to user move-in.',
      'Standard Operating Procedures (SOP): Developed and followed detailed checklists to standardize the inspection process, identifying "bugs" (maintenance issues) and coordinating with facilities teams for rapid resolution.',
      'User Experience (UX) Oversight: Managed the critical "Handover" phase of the student lifecycle, ensuring a seamless and high-quality first impression for new residents to minimize initial friction and support requests.',
      'Cross-Functional Coordination: Liaised between administrative offices and maintenance departments to track "ticket" status, ensuring all high-priority repairs were completed against tight seasonal deadlines.',
      'Core Skills: Quality Control, Operational Readiness, Cross-functional Coordination.'
    ]
  },
  {
    id: 'ciu-marketing',
    title: 'Head of Social Media & Marketing',
    company: 'Change Is Us\n[Diana Award Recognized Organization]',
    period: 'Aug 2020 – Nov 2021',
    description: [
      'Growth Strategy: Architected the foundational social media roadmap for a Diana Award-winning organization, driving brand relevance and audience visibility through data-driven content concepts and promotional campaigns.',
      'Technical Synthesis & Research: Translated complex environmental data—specifically regarding Fast Fashion and Carbon Footprints—into high-impact, accessible informational content to optimize user education and engagement.',
      'Brand Positioning: Conceptualized and executed end-to-end media strategies, ensuring narrative consistency across all digital touchpoints to scale organizational reach.',
      'Core Skills: Growth Marketing, Audience Analytics, Content Lifecycle Management.'
    ]
  },
  {
    id: 'ciu-rnd',
    title: 'Co-Head of Research & Development',
    company: 'Change Is Us\n[Diana Award Recognized Organization]',
    period: 'Aug 2020 – Nov 2021',
    description: [
      'Strategic Partnerships: Orchestrated large-scale collaborations with multiple NGOs to execute emergency relief initiatives, successfully raising thousands of dollars for pandemic-response food drives.',
      'Donor Relations & Outreach: Scaled fundraising efforts by designing targeted outreach campaigns and managing high-value stakeholder relationships during a period of global crisis.',
      'Impact Documentation: Collaborated with the executive team to document and verify social impact metrics, contributing to the organization’s recognition by the Diana Award for excellence in humanitarian work.',
      'Core Skills: Stakeholder Management, Fundraising Strategy, Cross-Functional Leadership.'
    ]
  }
];

export const INTERNATIONAL_EXPERIENCE = {
  title: "International Relations & Strategic Advocacy",
  subtitle: "Global Delegate | Policy Strategist | Stakeholder Management",
  intro: "Results-oriented professional with a proven track record of navigating complex international frameworks to drive consensus on high-stakes global issues. Leveraging experience from the United Nations Headquarters (NY) and the Vienna International Centre (UNOV), I specialize in synthesizing technical data into actionable narratives and managing diverse stakeholder interests—core competencies I now apply to Product Strategy and Strategic Communications.",
  items: [
    {
      id: 'un-csw',
      title: 'United Nations Delegate',
      company: 'Commission on the Status of Women (CSW69)\nUnited Nations HQ, New York',
      period: '2025',
      description: [
        'Strategic Advocacy: Spearheaded policy recommendations regarding the representation of women in media, focusing on inclusive content frameworks and the elimination of algorithmic bias.',
        'Stakeholder Alignment: Negotiated with global media conglomerates and government bodies to align on standardized metrics for gender-diverse storytelling.',
        'Data Synthesis: Analyzed global media consumption trends to draft briefing papers that explored the final policy conclusions for 190+ member states.',
        'Core Skills: Inclusive Design, Media Strategy, Executive Stakeholder Management.'
      ]
    },
    {
      id: 'un-iaea',
      title: 'United Nations Student Representative',
      company: 'International Atomic Energy Agency (IAEA)\nUnited Nations Office, Vienna',
      period: '2023',
      description: [
        'Regulatory Frameworks: Contributed to the development of global safety regulations, ensuring technical protocols met international safety and security benchmarks.',
        'Risk Mitigation: Collaborated with technical experts to synthesize complex safety data into actionable policy for non-technical diplomatic leaders.',
        'Cross-Border Collaboration: Facilitated multilateral negotiations to harmonize safety standards across diverse regulatory environments, reducing friction in international technical cooperation.',
        'Core Skills: Regulatory Compliance, Risk Assessment, Technical Communication.'
      ]
    }
  ]
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert1',
    imageUrl: 'https://lh3.googleusercontent.com/d/1btZ4GP-E-KpAALoS6YhaXJwFjpQmGjFv',
    title: 'Professional Certification 1'
  },
  {
    id: 'cert2',
    imageUrl: 'https://lh3.googleusercontent.com/d/1-hgzzLiMLIJ9UdDOlDdUBeOZyeI-LyBX',
    title: 'Professional Certification 2'
  },
  {
    id: 'cert3',
    imageUrl: 'https://lh3.googleusercontent.com/d/1AK1vpGz2eLq0XU6AlEajnWPtnUi3kP7o',
    title: 'Professional Certification 3'
  }
];

export const RECOGNITION_CATEGORIES = [
  {
    title: "Leadership & Academic Excellence",
    items: [
      {
        id: 'l1',
        title: 'Dyson Society of Fellows',
        organization: 'Pace University',
        year: '2026'
      },
      {
        id: 'l2',
        title: 'National Society of Leadership and Success (NSLS)',
        organization: 'Pace University Charter Society',
        year: '2025'
      },
      {
        id: 'l3',
        title: 'University Dean’s List Recipient',
        organization: 'Pace University, NYC',
        year: '2024'
      },
      {
        id: 'l4',
        title: 'Women\'s Leadership Initiative Fellow',
        organization: 'Pace University',
        year: '2024 - 2026'
      },
      {
        id: 'l5',
        title: 'University Honors Program',
        organization: 'Oklahoma Christian University',
        year: '2022',
        description: 'Selected for the competitive honors track based on academic rigor and leadership potential.'
      },
      {
        id: 'l6',
        title: 'Principal’s Honor Roll',
        organization: 'Memorial High School',
        year: '2022'
      }
    ]
  },
  {
    title: "Creative & Media Awards",
    items: [
      {
        id: 'c1',
        title: '1st Place & Published Author',
        organization: 'Soundings Literary and Visual Arts Journal',
        year: '2023',
        description: 'Recognized as the First Place recipient in the Poetry Category; successfully authored and published multiple works in a competitive, peer-reviewed journal.'
      },
      {
        id: 'c2',
        title: '3rd Place State Award: Video PSA',
        organization: 'Oklahoma Broadcast Education Association (OBEA)',
        year: '2023',
        description: 'Recognized in a state-wide competition for excellence in broadcast production and public service messaging.'
      }
    ]
  }
];