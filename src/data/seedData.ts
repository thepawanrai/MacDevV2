import type { Program, LeadInquiry, LiveSession, SiteSettings, User, VideoTestimonial } from '../types/index.ts';

export const initialSiteSettings: SiteSettings = {
  brandName: 'Mastermind Alliance Coaching (MAC)',
  tagline: 'Achieving Success Together.',
  founderName: 'Deepak Verma',
  founderTitle: 'Founder, Mastermind Alliance Coaching',
  contactPhone: '+91 831 853 9056',
  contactEmail: 'mastermindalliancecoaching@gmail.com',
  contactAddress: 'Vibhuti Khand, Gomti Nagar',
  contactCityState: 'Lucknow, Uttar Pradesh, India',
  whatsappNumber: '+91 831 853 9056',
  isConfirmedByOwner: true,
  announcementText: 'Core B2C Curriculum: GoalMaster, SalesMaster & LifeMaster. Explore Emotional Intelligence training for individuals & enterprise teams.',
  announcementActive: true,
};

export const initialUsers: User[] = [
  {
    id: 'user-deepak',
    name: 'Deepak Verma',
    email: 'officedeepakverma@gmail.com',
    role: 'admin',
    bio: 'Deepak Verma is one of India’s leading Life Coaches, Breakthrough Strategists, and Corporate Trainers with 15+ years of experience in transforming lives. Having guided over 25,000 people, he empowers individuals and organizations with clarity, confidence, and purpose. Mission: "I want to empower the youth of our country spiritually."',
    createdAt: '2025-01-01T00:00:00Z',
  },
  {
    id: 'user-learner-demo',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    role: 'learner',
    phone: '+91 98765 43210',
    bio: 'Sales professional & aspiring team leader in Lucknow.',
    createdAt: '2026-02-15T00:00:00Z',
  },
];

export const initialPrograms: Program[] = [
  // 1. CORE B2C: GoalMaster
  {
    id: 'prog-goalmaster',
    slug: 'goalmaster',
    title: 'GoalMaster',
    summary: 'Turn your goals into a clear, structured action plan. Overcome procrastination, eliminate distractions, and build sustained daily momentum.',
    description: 'GoalMaster is designed for individuals who want greater clarity about what they want to achieve, a more structured approach to planning, and practical steps to move from intention to action. First conducted in 2025 as an intensive live workshop, GoalMaster is an established program concept focused on milestone decomposition, daily accountability rhythms, and overcoming psychological barriers to year-long goals.',
    category: 'Personal Growth & Life Management',
    audience: 'Individual (B2C)',
    instructor: 'Deepak Verma',
    instructorTitle: 'Founder & Mentor, Mastermind Alliance Coaching',
    deliveryMode: 'Offline / In-Person',
    duration: 'Structured 4-Week Sprint or Intensive Weekend Workshop',
    status: 'past',
    statusLabel: 'Established Concept — Register Your Interest',
    priceDisplay: 'Register for Next Edition Updates',
    currency: 'INR',
    datesText: 'First Conducted 2025 • New Edition Under Planning',
    timezone: 'IST (UTC+5:30)',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    outcomes: [
      'Clarifying personal, financial, and professional goals with laser precision',
      'Turning long-term ambitions into 90-day actionable execution blueprints',
      'Identifying subconscious distractions, friction triggers, and limiting patterns',
      'Improving daily focus, emotional discipline, and execution consistency',
      'Building ironclad personal accountability and tracking progress daily'
    ],
    prerequisites: [
      'Willingness to complete a 360-degree personal audit and maintain daily habit logs'
    ],
    modules: [
      {
        id: 'mod-gm-1',
        programId: 'prog-goalmaster',
        title: 'Module 1: The Clarity Blueprint — Beyond New Year Resolutions',
        description: 'Why standard goal-setting fails and how structured clarity unlocks dormant potential.',
        order: 1,
        lessons: [
          {
            id: 'les-gm-101',
            moduleId: 'mod-gm-1',
            title: 'Deconstructing 12-Month Ambitions into 90-Day Execution Units',
            description: 'Why shorter planning cycles dramatically increase accountability and results.',
            durationMinutes: 45,
            order: 1,
            keyTakeaways: [
              'The danger of "annual thinking" and chronic urgency deficits',
              'The weekly scorecard: Lead measures vs. lag measures',
              'Designing your non-negotiable personal standard'
            ],
            resources: [
              { id: 'res-gm-1', title: '90-Day Target Decomposition Worksheet', type: 'worksheet', url: '#', size: '280 KB' },
              { id: 'res-gm-2', title: 'Daily Habit Architecture Template', type: 'pdf', url: '#', size: '350 KB' }
            ]
          },
          {
            id: 'les-gm-102',
            moduleId: 'mod-gm-1',
            title: 'Friction Elimination & Overcoming Chronic Procrastination',
            description: 'The psychological roots of task resistance and tactical friction-reduction techniques.',
            durationMinutes: 40,
            order: 2,
            keyTakeaways: [
              'The 5-minute activation rule for high-friction tasks',
              'Distraction audits: Removing energy leaks from your environment'
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'When will the next edition of GoalMaster be conducted?',
        answer: 'GoalMaster was conducted in 2025. Dates for the next cohort will be announced once venue arrangements in Lucknow and online seats are finalized. Register your interest to receive priority notification.'
      },
      {
        question: 'Is this workshop only for business owners or can professionals join?',
        answer: 'GoalMaster is designed for any individual—working professional, entrepreneur, or student—who wants a structured system to plan and achieve their highest-priority goals.'
      }
    ],
    actionType: 'waitlist'
  },

  // 2. CORE B2C: SalesMaster
  {
    id: 'prog-sales-master',
    slug: 'salesmaster',
    title: 'SalesMaster',
    summary: 'Build the skills behind better sales conversations. Master customer psychology, consultative discovery, objection handling, and closing.',
    description: 'SalesMaster is designed to help sales professionals strengthen their communication, understand customer needs, handle objections constructively, build trust, and approach the sales process with greater confidence and discipline. Delivered by Deepak Verma, the curriculum emphasizes Emotional Intelligence in customer conversations, active listening, and consultative value presentation rather than manipulative pressure tactics.',
    category: 'Sales & Business Performance',
    audience: 'Individual (B2C)',
    instructor: 'Deepak Verma',
    instructorTitle: 'Founder & Mentor, Mastermind Alliance Coaching',
    deliveryMode: 'Offline / In-Person',
    duration: '2 Full Days (Intensive In-Person Bootcamp)',
    location: 'Lucknow, Uttar Pradesh',
    status: 'upcoming',
    statusLabel: 'Offline Bootcamp — October 2026',
    priceDisplay: 'Waitlist Open • Registrations Announcing Soon',
    currency: 'INR',
    datesText: 'Proposed: October 2026 (Dates & Venue confirming)',
    timezone: 'IST (UTC+5:30)',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    outcomes: [
      'Customer psychology and deep needs discovery without premature pitching',
      'Trust-building and empathetic communication that positions you as an advisor',
      'Presenting value effectively so price becomes a secondary conversation',
      'Listening 70% of the time and asking targeted diagnostic questions',
      'Constructive objection handling and ethical negotiation battle drills',
      'Systematic follow-up protocols, relationship nurturing, and confident closing',
      'Harnessing Emotional Intelligence to read buyer cues and manage sales anxiety'
    ],
    prerequisites: [
      'Active sales role, entrepreneurship, or commitment to professional selling career'
    ],
    modules: [
      {
        id: 'mod-sm-1',
        programId: 'prog-sales-master',
        title: 'Day 1: Buyer Psychology & High-Trust Discovery',
        description: 'Understanding buyer hesitation, framing compelling value, and deep discovery questioning.',
        order: 1,
        lessons: [
          {
            id: 'les-sm-101',
            moduleId: 'mod-sm-1',
            title: 'The Psychology of Buying Decisions & Emotional Triggers',
            description: 'Why people buy emotionally and justify logically, and how to speak to core buyer pain points.',
            durationMinutes: 90,
            order: 1,
            keyTakeaways: [
              'The 3 buyer filters: Trust in you, trust in the product, trust in their own capability',
              'Deep-dive questioning framework: From symptom to real business need',
              'Avoiding premature pitching and high-pressure alienation'
            ],
            resources: [
              { id: 'res-sm-1', title: 'Consultative Discovery Script Blueprint', type: 'worksheet', url: '#', size: '320 KB' }
            ]
          }
        ]
      },
      {
        id: 'mod-sm-2',
        programId: 'prog-sales-master',
        title: 'Day 2: Live Objection Drills, Negotiation & Closing',
        description: 'Hands-on simulation drills tackling the top 10 market objections with Emotional Intelligence.',
        order: 2,
        lessons: [
          {
            id: 'les-sm-201',
            moduleId: 'mod-sm-2',
            title: 'Objection Neutralization Without Conflict',
            description: 'Reframing buyer skepticism into an exploration of collaborative value.',
            durationMinutes: 90,
            order: 1,
            keyTakeaways: [
              'The Validate-Clarify-Reframe method',
              'Handling "Your price is too high" with integrity and calm poise'
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'When will exact dates and venue for the October 2026 bootcamp be announced?',
        answer: 'Final venue contracts in Lucknow and seating capacity are currently being finalized. Joining the waitlist guarantees priority access to registration before public release.'
      },
      {
        question: 'Is this training suitable for beginners in sales?',
        answer: 'Yes. The frameworks begin with fundamental consultative principles and progress to intensive live roleplay drills suitable for both emerging and seasoned sales professionals.'
      }
    ],
    actionType: 'waitlist'
  },

  // 3. CORE B2C: LifeMaster
  {
    id: 'prog-life-master',
    slug: 'lifemaster',
    title: 'LifeMaster',
    summary: 'Design a more purposeful life. Gain clarity about your aspirations, strengthen your mindset, and build daily discipline towards the life you want.',
    description: 'LifeMaster is envisioned as a flagship personal-development experience for people who want to gain clarity about their goals, reconnect with their aspirations, strengthen their mindset, and take practical steps towards the life they want to create. Developed by Deepak Verma, LifeMaster bridges values alignment, Emotional Intelligence, habit consistency, and daily focus without empty motivational hype.',
    category: 'Personal Growth & Life Management',
    audience: 'Individual (B2C)',
    instructor: 'Deepak Verma',
    instructorTitle: 'Founder & Mentor, Mastermind Alliance Coaching',
    deliveryMode: 'Live Online Cohort',
    duration: '8 Weeks (Weekly Intensive + Guided Coaching)',
    status: 'upcoming',
    statusLabel: 'Flagship Program — Priority Waitlist',
    priceDisplay: 'Priority Waitlist Access',
    currency: 'INR',
    datesText: 'Proposed Launch: Upcoming Period (Details Confirming)',
    timezone: 'IST (UTC+5:30)',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    outcomes: [
      'Personal and life-goal clarity: Define what truly matters across career and life',
      'Values, priorities, and confident decision-making during crossroads',
      'Mindset, self-awareness, and conquering subconscious limiting patterns',
      'Emotional Intelligence and emotional self-management under life pressure',
      'Focus, discipline, and building daily habits that survive high-stress days',
      'Constructing a practical, measurable action plan for the future'
    ],
    prerequisites: [
      'Commitment to 3 hours per week of practice and reflective implementation'
    ],
    modules: [
      {
        id: 'mod-lm-1',
        programId: 'prog-life-master',
        title: 'Module 1: Mental Clarity & Purpose Architecture',
        description: 'Deconstructing mental roadblocks and aligning personal objectives with measurable milestones.',
        order: 1,
        lessons: [
          {
            id: 'les-lm-101',
            moduleId: 'mod-lm-1',
            title: 'Foundations of Self-Awareness and Personal Vision',
            description: 'Why standard goal-setting fails and how structured clarity unlocks dormant potential.',
            durationMinutes: 45,
            order: 1,
            keyTakeaways: [
              'Distinguish between surface wishes and core performance drives',
              'The 5-layer clarity matrix used by high-performing professionals',
              'Drafting your non-negotiable personal standard'
            ],
            resources: [
              { id: 'res-lm-1', title: 'Personal Purpose Audit Sheet', type: 'worksheet', url: '#', size: '280 KB' },
              { id: 'res-lm-2', title: 'Values Hierarchy Guide', type: 'pdf', url: '#', size: '420 KB' }
            ]
          },
          {
            id: 'les-lm-102',
            moduleId: 'mod-lm-1',
            title: 'Emotional Self-Management & Overcoming Friction',
            description: 'Managing stress, emotional regulation, and eliminating chronic delay habits.',
            durationMinutes: 50,
            order: 2,
            keyTakeaways: [
              'Action precedes motivation: The 5-minute activation rule',
              'Emotional regulation under career uncertainty'
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'When will LifeMaster open for enrollment?',
        answer: 'LifeMaster is planned as our flagship personal-growth program for the upcoming period. Confirming dates and format details are in progress. Join the waitlist to be informed immediately.'
      }
    ],
    actionType: 'waitlist'
  },

  // 4. CORE MAC SUBJECT: Emotional Intelligence
  {
    id: 'prog-emotional-intelligence',
    slug: 'emotional-intelligence',
    title: 'Emotional Intelligence: The Human Advantage in a Changing World',
    summary: 'Master self-awareness, emotional self-regulation, empathy, constructive conflict navigation, and high-trust leadership across workforce, management, and executive levels.',
    description: 'In a world of increasing pressure, changing expectations, and constant interaction, technical knowledge alone is not enough. The ability to understand emotions, manage reactions, communicate with empathy, and build meaningful relationships can make a powerful difference in personal and professional life. Through Emotional Intelligence training, Mastermind Alliance Coaching helps individuals and organizations develop greater self-awareness, emotional regulation, empathy, communication, relationship management, and responsible decision-making. Led by Deepak Verma, this curriculum provides tailored pathways for frontline workforce, team managers, and senior organizational leaders.',
    category: 'Emotional Intelligence & Human Effectiveness',
    audience: 'Corporate & Teams (B2B)',
    instructor: 'Deepak Verma',
    instructorTitle: 'Founder & Mentor, Mastermind Alliance Coaching',
    deliveryMode: 'Hybrid (Online + Classroom)',
    duration: 'Modular 4-Week Program or 2-Day Executive Workshop',
    status: 'enrolling',
    statusLabel: 'Workforce, Manager & Leadership Tracks Open',
    priceDisplay: 'Tailored Corporate & Team Proposals',
    currency: 'INR',
    datesText: 'Ongoing Corporate Inquiries Open',
    timezone: 'IST (UTC+5:30)',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    outcomes: [
      'Self-awareness: Identify personal emotional triggers and recognize how emotional states influence decision-making',
      'Emotional regulation: Manage stress and maintain cognitive poise under intense deadlines and market pressure',
      'Empathetic communication: Listen actively and interpret non-verbal and emotional cues in customer and team discussions',
      'Constructive conflict handling: Transform disagreements into productive problem-solving dialogues without defensiveness',
      'Psychological safety & trust: Cultivate an organizational culture of mutual respect, accountability, and psychological safety',
      'Responsible decision-making: Balance logical data with human impact when steering teams through organizational change'
    ],
    prerequisites: [
      'Open to enterprise teams, department leaders, and individual professionals seeking relational mastery'
    ],
    modules: [
      {
        id: 'mod-eq-1',
        programId: 'prog-emotional-intelligence',
        title: 'Pathway A: Emotional Intelligence for the Workforce & Employees',
        description: 'Foundations of personal self-awareness, emotional regulation, and constructive peer collaboration.',
        order: 1,
        lessons: [
          {
            id: 'les-eq-101',
            moduleId: 'mod-eq-1',
            title: 'Self-Awareness & Understanding Emotional Triggers',
            description: 'Recognizing subconscious emotional patterns before they cause workplace friction.',
            durationMinutes: 45,
            order: 1,
            keyTakeaways: [
              'The gap between stimulus and emotional response',
              'Mapping your top 3 workplace frustration triggers',
              'Maintaining emotional equilibrium during client demands'
            ],
            resources: [
              { id: 'res-eq-1', title: 'Workplace Emotional Trigger Audit', type: 'worksheet', url: '#', size: '290 KB' }
            ]
          },
          {
            id: 'les-eq-102',
            moduleId: 'mod-eq-1',
            title: 'Empathetic Communication & Active Listening',
            description: 'Listening to understand rather than simply waiting to reply.',
            durationMinutes: 40,
            order: 2,
            keyTakeaways: [
              'The 3 levels of active listening in collaborative projects',
              'Receiving performance feedback constructively without defensiveness'
            ]
          }
        ]
      },
      {
        id: 'mod-eq-2',
        programId: 'prog-emotional-intelligence',
        title: 'Pathway B: Emotional Intelligence for Managers',
        description: 'Managing team dynamics, handling difficult conversations, and building psychological safety.',
        order: 2,
        lessons: [
          {
            id: 'les-eq-201',
            moduleId: 'mod-eq-2',
            title: 'Managing Difficult Conversations & Emotional De-escalation',
            description: 'Structuring sensitive feedback sessions that preserve dignity and foster growth.',
            durationMinutes: 50,
            order: 1,
            keyTakeaways: [
              'The SBI (Situation-Behavior-Impact) empathetic feedback framework',
              'De-escalating heated interpersonal friction between reports',
              'Fostering psychological safety for candid team problem-solving'
            ]
          }
        ]
      },
      {
        id: 'mod-eq-3',
        programId: 'prog-emotional-intelligence',
        title: 'Pathway C: Emotional Intelligence for Leaders & Executives',
        description: 'Leading through uncertainty, inspiring discretionary effort, and empathetic decision-making under pressure.',
        order: 3,
        lessons: [
          {
            id: 'les-eq-301',
            moduleId: 'mod-eq-3',
            title: 'Executive Poise & Leading Through Uncertainty',
            description: 'How senior leaders regulate organizational anxiety and communicate vision during crises.',
            durationMinutes: 60,
            order: 1,
            keyTakeaways: [
              'Emotional contagion: How a leader’s demeanor shapes company culture',
              'Responsible decision-making under ambiguity and conflicting priorities',
              'Balancing empathy with uncompromising execution standards'
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'How is Emotional Intelligence customized for corporate teams?',
        answer: 'We conduct a preliminary organizational assessment with department heads to calibrate exercises around your team’s actual workplace scenarios, cross-functional dependencies, and customer touchpoints.'
      },
      {
        question: 'Does this program use generic psychometric tests?',
        answer: 'No. As part of MAC’s content integrity, we focus strictly on actionable behavioral skills, observable communication drills, and daily habit scorecards rather than unverified commercial psychometrics.'
      }
    ],
    actionType: 'proposal'
  },

  // 5. Core Leadership Program (with EQ Integration)
  {
    id: 'prog-core-leadership',
    slug: 'core-leadership-program',
    title: 'Core Leadership Program',
    summary: 'Essential fundamentals for emerging leaders: self-mastery, emotional regulation, accountability, proactive communication, and high-trust team coordination.',
    description: 'Transitioning from individual contributor to team leader is one of the most difficult career pivots. The Core Leadership Program equips supervisors, managers, and aspiring leaders with the essential toolkit: self-awareness, radical ownership, active delegation, clear communication, emotional self-management, and goal alignment.',
    category: 'Leadership & Team Development',
    audience: 'Corporate & Teams (B2B)',
    instructor: 'Deepak Verma',
    instructorTitle: 'Founder & Mentor, Mastermind Alliance Coaching',
    deliveryMode: 'Hybrid (Online + Classroom)',
    duration: '4 Weeks or 2-Day Corporate Workshop',
    status: 'enrolling',
    statusLabel: 'Corporate Bookings Open',
    priceDisplay: 'Tailored Corporate Packages',
    currency: 'INR',
    timezone: 'IST (UTC+5:30)',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    outcomes: [
      'Transition mindset from individual performance to collective team enablement',
      'Establish a culture of ownership and accountability without micromanagement',
      'Apply Emotional Intelligence to understand individual and team emotional triggers',
      'Communicate priorities clearly across cross-functional colleagues and reports',
      'Run concise, outcome-driven team reviews and decision meetings'
    ],
    prerequisites: [
      'Current or prospective leadership responsibilities within an organization'
    ],
    modules: [
      {
        id: 'mod-cl-1',
        programId: 'prog-core-leadership',
        title: 'Module 1: The Foundations of Leadership Credibility',
        description: 'How leadership influence is built through consistency, ethics, and emotional regulation.',
        order: 1,
        lessons: [
          {
            id: 'les-cl-101',
            moduleId: 'mod-cl-1',
            title: 'Leading by Example: Radical Accountability & Emotional Poise',
            description: 'Why team standards mirror the leader’s personal discipline.',
            durationMinutes: 45,
            order: 1,
            keyTakeaways: [
              'The circle of influence vs. circle of concern for managers',
              'Eliminating blame language from team culture'
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'Can this program be delivered on-site at our corporate premises?',
        answer: 'Yes. Mastermind Alliance Coaching delivers customized on-site workshops across Lucknow and regional centers, as well as live hybrid cohorts.'
      }
    ],
    actionType: 'proposal'
  },

  // 6. Leadership Development Program (with EQ Integration)
  {
    id: 'prog-leadership-dev',
    slug: 'leadership-development-program',
    title: 'Leadership Development Program',
    summary: 'Advanced capabilities for mid-to-senior leaders: coaching conversations, delegation, conflict navigation, psychological safety, and high-performance culture.',
    description: 'Designed for experienced leaders, business unit heads, and senior executives who need to build autonomous, high-performing teams. Emphasizes coaching frameworks over directive management, strategic alignment, constructive conflict resolution, and sustaining team motivation through market challenges with high Emotional Intelligence.',
    category: 'Leadership & Team Development',
    audience: 'Corporate & Teams (B2B)',
    instructor: 'Deepak Verma',
    instructorTitle: 'Founder & Mentor, Mastermind Alliance Coaching',
    deliveryMode: 'Hybrid (Online + Classroom)',
    duration: '6 Weeks Modular / Executive Offsite',
    status: 'enrolling',
    statusLabel: 'Executive Offsite / Corporate',
    priceDisplay: 'Custom Executive Proposal',
    currency: 'INR',
    timezone: 'IST (UTC+5:30)',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
    outcomes: [
      'Master structured 1-on-1 coaching conversations that elevate subordinate capability',
      'Delegate authority effectively with clear boundaries and escalation protocols',
      'Resolve interpersonal and inter-departmental conflict with empathetic mediation',
      'Drive execution rigor while fostering genuine psychological safety and trust'
    ],
    prerequisites: [
      'Direct management of teams, business divisions, or organizational departments'
    ],
    modules: [
      {
        id: 'mod-ld-1',
        programId: 'prog-leadership-dev',
        title: 'Module 1: High-Impact Coaching Conversations',
        description: 'Using inquiry and diagnostic feedback instead of telling team members what to do.',
        order: 1,
        lessons: [
          {
            id: 'les-ld-101',
            moduleId: 'mod-ld-1',
            title: 'The GROW Model in Real Management Scenarios',
            description: 'Goal, Reality, Options, and Way Forward applied to practical team dilemmas.',
            durationMinutes: 50,
            order: 1,
            keyTakeaways: [
              'Ask instead of telling: Unlocking ownership in direct reports',
              'Structured feedback scripts that motivate rather than discourage'
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'What delivery formats are supported for corporate clients?',
        answer: 'We provide executive keynotes, half-day workshops, full-day intensives, multi-day modular training, and residential leadership retreats.'
      }
    ],
    actionType: 'proposal'
  },

  // 7. Real Estate Sales Mastery
  {
    id: 'prog-real-estate-mastery',
    slug: 'real-estate-sales-mastery',
    title: 'Real Estate Sales Mastery',
    summary: 'Industry-specific training for real estate consultants: buyer qualification, trust building, site-visit mastery, emotional objection handling, and closing.',
    description: 'Real estate is high-ticket consultative selling where buyer anxiety runs high. The Real Estate Sales Mastery (also known as the Real Estate Success Blueprint) trains developers, channel partners, and property consultants on buyer psychology, qualifying high-intent prospects, structuring experiential site visits, and navigating buyer emotional hesitation.',
    category: 'Industry Training',
    audience: 'Corporate & Teams (B2B)',
    instructor: 'Deepak Verma',
    instructorTitle: 'Founder & Mentor, Mastermind Alliance Coaching',
    deliveryMode: 'Offline / In-Person',
    duration: '2-Day Intensive or 4-Week Program',
    status: 'enrolling',
    statusLabel: 'Industry Specialized — Enrolling',
    priceDisplay: 'Corporate / Team Booking',
    currency: 'INR',
    timezone: 'IST (UTC+5:30)',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    outcomes: [
      'Filter window-shoppers from serious investors & end-users in the first 10 minutes',
      'Script and execute experiential property site visits that build emotional connection',
      'Address buyer emotional hesitation around completion, appreciation, and documentation',
      'Close deals ethically without immediately caving to heavy commission splits or discounts'
    ],
    prerequisites: [
      'Real estate brokers, builders sales teams, property consultants, or sales managers'
    ],
    modules: [
      {
        id: 'mod-re-1',
        programId: 'prog-real-estate-mastery',
        title: 'Module 1: The High-Ticket Property Buyer Psychology',
        description: 'How high-net-worth and middle-class home buyers make emotional and financial decisions.',
        order: 1,
        lessons: [
          {
            id: 'les-re-101',
            moduleId: 'mod-re-1',
            title: 'Lead Discovery & Intent Qualification',
            description: 'The exact questions to ask before scheduling a site visit.',
            durationMinutes: 45,
            order: 1,
            keyTakeaways: [
              'Timeline, budget, decision-maker, and pain matrix',
              'Building instant trust over initial telephone inquiries'
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'Is this training suitable for individual property agents or full builder teams?',
        answer: 'Both formats are supported: corporate in-house team training for developers/agencies, and scheduled open-batch workshops in Lucknow.'
      }
    ],
    actionType: 'proposal'
  },

  // 8. Insurance Sales Training
  {
    id: 'prog-insurance-sales',
    slug: 'insurance-sales-training',
    title: 'Insurance Sales Training',
    summary: 'Ethical, trust-based insurance selling: needs discovery, financial protection discussions, emotional empathy, and client retention.',
    description: 'Insurance products protect families and businesses, but customers are naturally skeptical of pushy tactics. This specialized program teaches financial advisors and agency managers how to conduct respectful needs analysis, clearly articulate risk protection without fear-mongering, apply emotional intelligence to understand client vulnerabilities, and build generational client trust. Note: Mastermind Alliance Coaching teaches ethical communication and sales skills; no financial, investment, or income guarantees are made.',
    category: 'Industry Training',
    audience: 'Corporate & Teams (B2B)',
    instructor: 'Deepak Verma',
    instructorTitle: 'Founder & Mentor, Mastermind Alliance Coaching',
    deliveryMode: 'Hybrid (Online + Classroom)',
    duration: 'Full-Day Workshop or 3-Week Cohort',
    status: 'enrolling',
    statusLabel: 'Ethical Advisory Training',
    priceDisplay: 'Agency & Corporate Rates',
    currency: 'INR',
    timezone: 'IST (UTC+5:30)',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    outcomes: [
      'Shift from product selling to client-centric financial security discovery',
      'Explain policy terms, benefits, and long-term commitments with absolute clarity',
      'Apply Emotional Intelligence to handle sensitive objections around death and illness',
      'Cultivate an ethical referral pipeline and maintain high policy renewal persistence'
    ],
    prerequisites: [
      'Licensed insurance advisors, agency development managers, and financial consultants'
    ],
    modules: [
      {
        id: 'mod-ins-1',
        programId: 'prog-insurance-sales',
        title: 'Module 1: The Human Side of Risk & Protection',
        description: 'Communicating future security without aggressive scare tactics.',
        order: 1,
        lessons: [
          {
            id: 'les-ins-101',
            moduleId: 'mod-ins-1',
            title: 'Needs Analysis: Uncovering What Truly Matters',
            description: 'Guiding clients through systematic evaluation of family obligations.',
            durationMinutes: 40,
            order: 1,
            keyTakeaways: [
              'Structured family asset and liability review interview',
              'How to listen 70% of the time during client consultations'
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'Does this course teach investment products or advisory laws?',
        answer: 'No. The course focuses purely on communication, consultative client discovery, ethics, and professional relationship management.'
      }
    ],
    actionType: 'proposal'
  },

  // 9. Network Marketing Professional Training
  {
    id: 'prog-network-marketing',
    slug: 'network-marketing-training',
    title: 'Network Marketing Professional Training',
    summary: 'Ethical prospecting, respectful invitations, relationship building, team onboarding, and sustained leadership. No income hype.',
    description: 'Ground yourself in ethical, professional direct selling and network marketing. Deepak Verma guides participants away from pushy, relationship-damaging tactics toward authentic value communication, proper prospect qualification, emotional intelligence in handling rejection, and supportive team mentorship. Note: No income guarantees are promised or implied.',
    category: 'Industry Training',
    audience: 'Corporate & Teams (B2B)',
    instructor: 'Deepak Verma',
    instructorTitle: 'Founder & Mentor, Mastermind Alliance Coaching',
    deliveryMode: 'Hybrid (Online + Classroom)',
    duration: '1-Day Intensive or 4-Week Cohort',
    status: 'enrolling',
    statusLabel: 'Professional Direct Selling',
    priceDisplay: 'Team & Open Batch',
    currency: 'INR',
    timezone: 'IST (UTC+5:30)',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    outcomes: [
      'Master pressure-free prospecting and professional invitations',
      'Present product and business value with honesty and clarity',
      'Manage rejection with emotional poise and self-regulation',
      'Onboard new team members with a structured 30-day action plan'
    ],
    prerequisites: [
      'Direct sellers and network marketing associates seeking professional conduct'
    ],
    modules: [
      {
        id: 'mod-nm-1',
        programId: 'prog-network-marketing',
        title: 'Module 1: Relationship-First Direct Selling',
        description: 'Protecting personal relationships and building professional credibility.',
        order: 1,
        lessons: [
          {
            id: 'les-nm-101',
            moduleId: 'mod-nm-1',
            title: 'The Respectful Invitation Protocol',
            description: 'How to invite curiosity without mystery tactics or deceptive pressure.',
            durationMinutes: 35,
            order: 1,
            keyTakeaways: [
              'Never corner friends or family: Offering an open evaluation',
              'Separating personal self-worth from prospect acceptance'
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'Does this program guarantee any financial earnings or downlines?',
        answer: 'No. MAC does not guarantee income. The focus is strictly on professional skills, ethical communication, discipline, and customer relationship building.'
      }
    ],
    actionType: 'proposal'
  },

  // 10. Master Your Communication Skills
  {
    id: 'prog-communication-skills',
    slug: 'master-your-communication-skills',
    title: 'Master Your Communication Skills',
    summary: 'Build conversational poise, concise articulation, empathetic listening, and authoritative professional presence in any setting.',
    description: 'Clear communication is the master catalyst for all personal and professional progress. This interactive online program helps learners overcome hesitations, speak with confidence in English and Hindi professional environments, structure ideas concisely with the PREP framework, and master interpersonal empathy.',
    category: 'Communication & Public Speaking',
    audience: 'Individual (B2C)',
    instructor: 'Deepak Verma',
    instructorTitle: 'Founder & Mentor, Mastermind Alliance Coaching',
    deliveryMode: 'Online Self-Paced',
    duration: '5 Modules (Self-Paced with Video & Audio Exercises)',
    status: 'on-demand',
    statusLabel: 'Self-Paced Learning Available',
    price: 3499,
    currency: 'INR',
    priceDisplay: '₹3,499 (Instant Access)',
    timezone: 'IST (UTC+5:30)',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    outcomes: [
      'Speak concisely and structure your thoughts using the 3-point PREP framework',
      'Overcome communication anxiety and hesitation during business discussions',
      'Master active listening and tone modulation to avoid misunderstandings',
      'Communicate with executive presence across meetings, emails, and phone calls'
    ],
    prerequisites: [
      'Desire to practice verbal exercises and voice recording assignments'
    ],
    modules: [
      {
        id: 'mod-comm-1',
        programId: 'prog-communication-skills',
        title: 'Module 1: The Core Architecture of Clarity',
        description: 'Eliminating filler words, rambling, and verbal vagueness.',
        order: 1,
        lessons: [
          {
            id: 'les-comm-101',
            moduleId: 'mod-comm-1',
            title: 'Structuring Thoughts on the Spot: The Point-Reason-Example Framework',
            description: 'How to respond intelligently when asked for an impromptu opinion.',
            durationMinutes: 28,
            order: 1,
            keyTakeaways: [
              'The PREP system: Point, Reason, Example, Point',
              'Why pausing for 2 seconds makes you look confident, not slow',
              'Tactics to stop using filler sounds (um, like, basically)'
            ],
            resources: [
              { id: 'res-comm-1', title: 'PREP Speaking Framework Template', type: 'worksheet', url: '#', size: '190 KB' }
            ]
          },
          {
            id: 'les-comm-102',
            moduleId: 'mod-comm-1',
            title: 'Tone, Pacing, and Voice Modulation',
            description: 'Using pitch, pause, and pace to command attention without shouting.',
            durationMinutes: 32,
            order: 2,
            keyTakeaways: [
              'The power of the purposeful silence before key points',
              'Inflection traps: Avoiding uptalk when stating facts'
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'Are lessons in English or Hindi?',
        answer: 'Concepts and slides are presented in English with clear, practical explanations that bridge English and Hindi professional vocabulary.'
      }
    ],
    actionType: 'enroll'
  },

  // 11. Institutional Soft-Skills Training (B2G)
  {
    id: 'prog-institutional-training',
    slug: 'institutional-training',
    title: 'Institutional Soft-Skills & Public Service Training',
    summary: 'Tailored institutional programs for public sector organizations, banks, insurance institutions, and government bodies.',
    description: 'Designed specifically for public servants, bank officers, and institutional personnel who interface with citizens and enterprise stakeholders. Fosters professional conduct, patient communication, emotional resilience, ethical teamwork, and efficient citizen-facing service. Note: MAC provides private executive development programs; we do not imply government empanelment or official contracts without formal documentation.',
    category: 'Institutional Training',
    audience: 'Institutions & Public Sector (B2G)',
    instructor: 'Deepak Verma',
    instructorTitle: 'Founder & Mentor, Mastermind Alliance Coaching',
    deliveryMode: 'Offline / In-Person',
    duration: 'Full-Day, 2-Day, or Multi-Session Formats',
    status: 'enrolling',
    statusLabel: 'Formal Institutional Inquiries Welcome',
    priceDisplay: 'Institutional Proposal',
    currency: 'INR',
    timezone: 'IST (UTC+5:30)',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    outcomes: [
      'Elevate citizen-facing empathy, patience, and professional communication',
      'Strengthen inter-departmental collaboration, mutual respect, and workflow handoffs',
      'De-escalate tense public interactions with dignity and institutional decorum',
      'Enhance time management, file processing focus, and workplace ethics'
    ],
    prerequisites: [
      'Formal request from department head, institution director, or HR coordinator'
    ],
    modules: [
      {
        id: 'mod-inst-1',
        programId: 'prog-institutional-training',
        title: 'Module 1: Citizen-Centric Communication & Dignity',
        description: 'Building public trust through courteous, solution-driven conduct.',
        order: 1,
        lessons: [
          {
            id: 'les-inst-101',
            moduleId: 'mod-inst-1',
            title: 'De-escalation in Public Interaction Settings',
            description: 'Techniques for managing agitated visitors with calm professionalism.',
            durationMinutes: 45,
            order: 1,
            keyTakeaways: [
              'Empathy statements that reduce citizen hostility',
              'Maintaining institutional neutrality and dignity'
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'Can modules be adapted to specific institutional mandates?',
        answer: 'Yes. Every institutional curriculum is customized around department guidelines, operational objectives, and participant seniority.'
      }
    ],
    actionType: 'proposal'
  }
];

export const initialLiveSessions: LiveSession[] = [
  {
    id: 'session-1',
    programId: 'prog-communication-skills',
    programTitle: 'Master Your Communication Skills',
    title: 'Live Practice Lab: Impromptu Speaking & Overcoming Filler Words',
    description: 'An interactive live session with Deepak Verma where learners practice the PREP framework and receive real-time coaching.',
    date: '2026-10-25',
    time: '19:30 - 21:00',
    timezone: 'IST',
    instructor: 'Deepak Verma',
    status: 'scheduled',
    instructions: 'Please bring a quiet workspace, working microphone, and your PREP worksheet ready for exercise drills. Join link will activate 15 minutes before the session.',
  },
  {
    id: 'session-2',
    programId: 'prog-sales-master',
    programTitle: 'SalesMaster',
    title: 'Pre-Bootcamp Orientation: Field Discovery & Emotional Mindset',
    description: 'Special orientation webinar for upcoming SalesMaster candidates discussing foundational sales mindset.',
    date: '2026-10-31',
    time: '18:00 - 19:15',
    timezone: 'IST',
    instructor: 'Deepak Verma',
    status: 'scheduled',
    instructions: 'Mandatory for registered participants. Meeting link and access credentials are provided in your dashboard.',
  }
];

export const initialLeads: LeadInquiry[] = [
  {
    id: 'lead-1',
    segment: 'B2B',
    name: 'Amitabh Srivastava',
    email: 'amitabh.s@avadhproperties.in',
    phone: '+91 94150 12345',
    organization: 'Avadh Real Estate Group',
    designation: 'Director of Sales',
    participantCount: 24,
    programInterest: 'Real Estate Sales Mastery',
    preferredFormat: '2-Day In-Person Workshop in Lucknow',
    message: 'We want to upskill our Lucknow sales team to handle buyer objections and improve site-visit conversion ratios before Diwali.',
    status: 'New',
    createdAt: '2026-10-15T10:30:00Z',
    notes: 'High priority corporate lead. Requested custom dates in early November.'
  },
  {
    id: 'lead-2',
    segment: 'Keynote',
    name: 'Sunita Mehra',
    email: 's.mehra@leadershipforum-up.org',
    phone: '+91 98390 67890',
    organization: 'UP Business Leadership Forum',
    designation: 'Convener',
    participantCount: 150,
    programInterest: 'Keynote: Achieving Success Together',
    preferredFormat: 'Keynote Address (45-60 mins)',
    message: 'Inviting Deepak Verma to deliver the opening keynote at our annual leadership summit in Lucknow.',
    status: 'Proposal Sent',
    createdAt: '2026-10-12T14:15:00Z',
    notes: 'Speaker profile sent. Follow up on Tuesday.'
  },
  {
    id: 'lead-3',
    segment: 'B2C',
    name: 'Vikas Pandey',
    email: 'vikas.p@gmail.com',
    phone: '+91 87654 32190',
    programInterest: 'LifeMaster Priority Waitlist',
    preferredFormat: 'Live Online Cohort',
    message: 'Interested in joining the LifeMaster flagship cohort as soon as dates are confirmed.',
    status: 'New',
    createdAt: '2026-10-17T09:20:00Z'
  }
];

export const initialVideoTestimonials: VideoTestimonial[] = [
  {
    id: 'vid-1',
    youtubeId: '_DgV_0HzU_0',
    youtubeUrl: 'https://www.youtube.com/watch?v=_DgV_0HzU_0',
    title: 'Participant Experience & Transformation with Deepak Verma Sir',
    speakerName: 'Executive Participant',
    speakerRole: 'Leadership & Sales Coaching Review',
    keyHighlight: 'A transformative experience breaking down sales hesitation, goal setting clarity, and emotional discipline in professional life.'
  },
  {
    id: 'vid-2',
    youtubeId: 'hySKSzlGgCs',
    youtubeUrl: 'https://www.youtube.com/watch?v=hySKSzlGgCs',
    title: 'Practical Impact & Team Enablement Review',
    speakerName: 'Corporate Learner',
    speakerRole: 'Mastermind Coaching Participant',
    keyHighlight: 'Direct, practical frameworks that delivered immediate improvements in workplace communication, focus, and consultative selling.'
  },
  {
    id: 'vid-3',
    youtubeId: 'CozxsWj2Tg0',
    youtubeUrl: 'https://www.youtube.com/watch?v=CozxsWj2Tg0',
    title: 'Mindset Shift & Goal Achievement Testimonial',
    speakerName: 'Program Graduate',
    speakerRole: 'Goal Clarity & Performance Review',
    keyHighlight: 'How structured accountability and Deepak Verma sir’s mentoring eliminated procrastination and unlocked true potential.'
  }
];

export interface TrainingSessionFeeTier {
  duration: string;
  format: string;
  fee: number;
  feeDisplay: string;
  description: string;
  badge: string;
}

export const trainingSessionFeeStructure: TrainingSessionFeeTier[] = [
  {
    duration: '60 Minutes',
    format: 'Keynote / Power Talk',
    fee: 30000,
    feeDisplay: '₹30,000',
    description: 'High-energy opening or closing keynote for summits, college events, and corporate conventions.',
    badge: 'Keynote'
  },
  {
    duration: '3 Hours',
    format: 'Half-Day Workshop',
    fee: 60000,
    feeDisplay: '₹60,000',
    description: 'Targeted skill-building intensive with interactive drills, worksheets, and actionable frameworks.',
    badge: 'Half-Day'
  },
  {
    duration: '6 Hours',
    format: 'Full-Day Training',
    fee: 100000,
    feeDisplay: '₹1,00,000',
    description: 'Comprehensive 1-day deep dive with case studies, live roleplays, and behavioral transformation.',
    badge: 'Full-Day'
  },
  {
    duration: '3 Days 2 Nights',
    format: 'Residential Program (3D2N)',
    fee: 300000,
    feeDisplay: '₹3,00,000',
    description: 'Immersive offsite retreat for executive leadership, deep cultural alignment, and life mastery.',
    badge: 'Residential Retreat'
  }
];

export interface OfficialTrainingProgram {
  id: string;
  number: number;
  title: string;
  duration: string;
  durationCategory: '60 Mins' | '3 Hours' | '6 Hours' | '3D2N' | 'Modular / 7 Days';
  feeDisplay: string;
  feeAmount: number;
  description: string;
  category: string;
  targetAudience: string;
  benefits: string[];
}

export const official17TrainingPrograms: OfficialTrainingProgram[] = [
  {
    id: 'tp-1',
    number: 1,
    title: 'Positive Attitude & Decision Making',
    duration: '3 Hours',
    durationCategory: '3 Hours',
    feeDisplay: '₹60,000',
    feeAmount: 60000,
    description: 'Build resilience, cultivate optimism, and develop powerful decision-making skills for professional & personal excellence.',
    category: 'Personal Growth & Mindset',
    targetAudience: 'Professionals, Teams & Leaders',
    benefits: ['Cognitive reframing under acute stress', 'High-speed, low-anxiety decision matrices', 'Eliminating toxic workplace cynicism']
  },
  {
    id: 'tp-2',
    number: 2,
    title: 'Self Discipline & Stress Management',
    duration: '3 Hours',
    durationCategory: '3 Hours',
    feeDisplay: '₹60,000',
    feeAmount: 60000,
    description: 'Learn proven tools to stay disciplined, reduce stress, and create balance in a fast-paced world.',
    category: 'Personal Growth & Mindset',
    targetAudience: 'Corporate Employees, Executives & Youth',
    benefits: ['Stress self-regulation and nervous system calm', 'Subconscious habit architecture', 'Preventing chronic professional burnout']
  },
  {
    id: 'tp-3',
    number: 3,
    title: 'Master Your Communication Skills',
    duration: '6 Hours',
    durationCategory: '6 Hours',
    feeDisplay: '₹1,00,000',
    feeAmount: 100000,
    description: 'Enhance verbal, non-verbal & public communication for leadership impact and stronger human connections.',
    category: 'Communication & Leadership',
    targetAudience: 'Managers, Sales Teams & Rising Professionals',
    benefits: ['Empathetic & assertive workplace dialogue', 'Non-verbal authority & body language', 'Constructive conflict handling & mediation']
  },
  {
    id: 'tp-4',
    number: 4,
    title: 'Master Your Goals, Master Your Life',
    duration: '3 Hours',
    durationCategory: '3 Hours',
    feeDisplay: '₹60,000',
    feeAmount: 60000,
    description: 'Deep dive into goal-setting frameworks that drive clarity, focus & long-term achievement.',
    category: 'Goal Clarity & Execution',
    targetAudience: 'Entrepreneurs, Executives & High Performers',
    benefits: ['90-day milestone decomposition', 'Friction elimination & daily scorecards', 'Bridging the intention-to-execution gap']
  },
  {
    id: 'tp-5',
    number: 5,
    title: 'Time Management & Professional Excellence',
    duration: '3 Hours',
    durationCategory: '3 Hours',
    feeDisplay: '₹60,000',
    feeAmount: 60000,
    description: 'Practical tools to prioritize tasks, enhance productivity & create professional mastery.',
    category: 'Productivity & Workplace Mastery',
    targetAudience: 'Teams, Managers & Business Owners',
    benefits: ['Priority quadrants & deep work routines', 'Eliminating meeting fatigue & digital distractions', 'Daily momentum protocols']
  },
  {
    id: 'tp-6',
    number: 6,
    title: 'Team Motivation & Human Relationships',
    duration: '3 Days 2 Nights (3D2N)',
    durationCategory: '3D2N',
    feeDisplay: '₹3,00,000',
    feeAmount: 300000,
    description: 'A transformative residential program to build synergy, emotional intelligence & high-performing teams.',
    category: 'Team Building & Synergy',
    targetAudience: 'Cross-functional Teams & Corporate Divisions',
    benefits: ['Deep trust exercises & vulnerability loops', 'Shared purpose & cultural alignment', 'Eliminating inter-departmental friction']
  },
  {
    id: 'tp-7',
    number: 7,
    title: 'Public Speaking Skills',
    duration: '6 Hours',
    durationCategory: '6 Hours',
    feeDisplay: '₹1,00,000',
    feeAmount: 100000,
    description: 'Overcome stage fear, master storytelling, and deliver high-impact presentations with confidence.',
    category: 'Communication & Influence',
    targetAudience: 'Leaders, Keynote Aspirants & Founders',
    benefits: ['Stage presence & vocal modulation', 'Storytelling frameworks for persuasion', 'Live audience engagement drills']
  },
  {
    id: 'tp-8',
    number: 8,
    title: 'Best Life Management',
    duration: '3 Hours',
    durationCategory: '3 Hours',
    feeDisplay: '₹60,000',
    feeAmount: 60000,
    description: 'Discover strategies for holistic life mastery – health, wealth, relationships & mindset.',
    category: 'Life Mastery & Emotional Intelligence',
    targetAudience: 'Individuals & Professionals at Career Crossroads',
    benefits: ['Holistic life balance audit', 'Energy & mental resilience optimization', 'Meaningful relationship deepening']
  },
  {
    id: 'tp-9',
    number: 9,
    title: 'Be Your Own Creator (Leadership Development Program)',
    duration: '3 Days 2 Nights (3D2N)',
    durationCategory: '3D2N',
    feeDisplay: '₹3,00,000',
    feeAmount: 300000,
    description: 'An immersive leadership journey designed to transform vision into action.',
    category: 'Executive Leadership',
    targetAudience: 'Founders, Senior Directors & Executives',
    benefits: ['Visionary thinking & strategic blueprinting', 'Overcoming self-limiting identity loops', 'Commanding leadership presence']
  },
  {
    id: 'tp-10',
    number: 10,
    title: 'Parenting is Fun',
    duration: '3 Hours',
    durationCategory: '3 Hours',
    feeDisplay: '₹60,000',
    feeAmount: 60000,
    description: 'Modern parenting strategies to raise confident, disciplined & happy children.',
    category: 'Family & Life Skills',
    targetAudience: 'Parents, Educators & Family Mentors',
    benefits: ['Parent-child emotional bonding', 'Managing digital distractions & screen time', 'Instilling values & positive self-discipline']
  },
  {
    id: 'tp-11',
    number: 11,
    title: 'Advance Leadership Program',
    duration: '3 Hours',
    durationCategory: '3 Hours',
    feeDisplay: '₹60,000',
    feeAmount: 60000,
    description: 'For managers & leaders aiming to unlock influence, authority & next-level leadership skills.',
    category: 'Management & Leadership',
    targetAudience: 'Mid to Senior Level Managers & Team Leads',
    benefits: ['Leading without micromanagement', 'Cultivating accountability in team members', 'Delegation & strategic foresight']
  },
  {
    id: 'tp-12',
    number: 12,
    title: 'Enjoy Your Study & Exams',
    duration: '3 Hours',
    durationCategory: '3 Hours',
    feeDisplay: '₹60,000',
    feeAmount: 60000,
    description: 'Student-focused program to overcome exam stress and develop peak performance learning strategies.',
    category: 'Youth & Students',
    targetAudience: 'School & College Students, Competitive Aspirants',
    benefits: ['Eliminating exam anxiety & memory blocks', 'Accelerated learning & retention systems', 'Peak focus during test hours']
  },
  {
    id: 'tp-13',
    number: 13,
    title: 'Power of Thoughts (Leadership Development Program)',
    duration: '3 Days 2 Nights (3D2N)',
    durationCategory: '3D2N',
    feeDisplay: '₹3,00,000',
    feeAmount: 300000,
    description: 'Learn the science of mindset, thoughts & energy to shape leadership and destiny.',
    category: 'Mindset & Energy Architecture',
    targetAudience: 'Leadership Cohorts & Entrepreneurs',
    benefits: ['Quantum shift in self-belief', 'Subconscious reprogramming & mental clarity', 'Emotional mastery under high pressure']
  },
  {
    id: 'tp-14',
    number: 14,
    title: 'Happy Marriage Life',
    duration: '3 Hours / 3D2N',
    durationCategory: '3 Hours',
    feeDisplay: '₹60,000 (3 Hours) / ₹3,00,000 (3D2N)',
    feeAmount: 60000,
    description: 'From understanding to communication – a program designed for couples to thrive together.',
    category: 'Relationships & Harmony',
    targetAudience: 'Couples & Family Units',
    benefits: ['Non-violent communication & active listening', 'Resolving chronic friction points', 'Deep emotional intimacy & spiritual alignment']
  },
  {
    id: 'tp-15',
    number: 15,
    title: 'Special Training Program for Real Estate',
    duration: '6 Hours (1 Day Program) / 7 Days Program',
    durationCategory: '6 Hours',
    feeDisplay: '₹1,00,000 (1-Day) / Custom for 7-Day',
    feeAmount: 100000,
    description: 'Specially designed for real estate professionals to boost client engagement, negotiation skills, and closing techniques.',
    category: 'Industry Sales Training',
    targetAudience: 'Real Estate Brokers, Developers & Sales Agents',
    benefits: ['High-trust site visit protocols', 'Overcoming property pricing objections', 'Consultative luxury closing scripts']
  },
  {
    id: 'tp-16',
    number: 16,
    title: 'High-Performance Sales Training Program',
    duration: '6 Hours (1 Day Program) / 7 Days Program',
    durationCategory: '6 Hours',
    feeDisplay: '₹1,00,000 (1-Day) / Custom for 7-Day',
    feeAmount: 100000,
    description: 'A transformational program to master persuasion, closing strategies, and customer psychology for unbeatable sales growth.',
    category: 'Sales Mastery',
    targetAudience: 'B2B/B2C Sales Teams, Account Executives',
    benefits: ['Live objection neutralization laboratories', 'Consultative discovery psychology', 'High-conversion deal structuring']
  },
  {
    id: 'tp-17',
    number: 17,
    title: 'Unbeatable Training Program for Network Marketing',
    duration: '6 Hours (1 Day Program) / 7 Days Program',
    durationCategory: '6 Hours',
    feeDisplay: '₹1,00,000 (1-Day) / Custom for 7-Day',
    feeAmount: 100000,
    description: 'Step-by-step framework for network marketing leaders to build teams, inspire confidence, and create exponential growth.',
    category: 'Industry Sales Training',
    targetAudience: 'Network Marketing Leaders & Downline Teams',
    benefits: ['Duplicable team onboarding systems', 'Overcoming pyramid stigmas with integrity', 'Downline motivation & retention blueprints']
  }
];
