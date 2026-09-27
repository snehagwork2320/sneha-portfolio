export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  label?: string;
  category: string;
  technologies: string[];
  description: string;
  impact?: string;
  architectureNodes?: string[];
  keyCapabilities: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: {
    problem: string;
    context: string;
    approach: string;
    architecture: {
      title: string;
      diagram: string[];
      details: string;
    };
    implementation: string;
    challenges: string;
    results: string[];
    learnings: string;
    futureWork: string;
  };
}

export interface ResearchTopic {
  id: string;
  title: string;
  category: string;
  status: string;
  question: string;
  hypothesis: string;
  experiment: string;
  observation: string;
  nextQuestion: string;
  technologies: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  focus: string[];
  achievements: string[];
  impact: string[];
  technologies: string[];
}

export interface HackathonItem {
  name: string;
  award?: string;
  location?: string;
  teamsCount?: string;
  role?: string;
  description: string;
  isMajor?: boolean;
}

export interface SystemArchitectureLayer {
  layer: string;
  name: string;
  category: string;
  tech: string[];
  description: string;
  connectedTo: string[];
  metrics?: string;
}

export const PERSONAL_INFO = {
  name: "SNEHA GUPTA",
  location: "Borivali, Mumbai, Maharashtra",
  phone: "+91 9137797120",
  email: "gsnehu829@gmail.com",
  linkedin: "https://linkedin.com/in/sneha-gupta",
  linkedinDisplay: "linkedin.com/in/sneha-gupta",
  github: "https://github.com/snehagwork2320",
  githubDisplay: "github.com/snehagwork2320",
  degree: "B.Tech, Electronics & Computer Science",
  institution: "Shree L. R. Tiwari College of Engineering",
  duration: "2025 – Present",
  cgpa: "N/A",
  primaryPositioning: "Electronics & Computer Science Undergraduate | Full-Stack Developer",
  secondaryPositioning: "React.js · Node.js · TypeScript · Express.js · Supabase · MongoDB",
  heroHeadline: "I BUILD FULL-STACK APPLICATIONS FROM DATABASE TO UI.",
  heroSubtext: "React.js · Node.js · TypeScript · Express.js · Supabase · Generative AI",
  heroIntro: "Electronics and Computer Science student who enjoys building things end to end - from the database to the UI. Comfortable working across the stack with React, Node.js, and TypeScript, and have picked up a few AI tools along the way, including a small LLM-based project.",
  status: "OPEN TO DEVELOPER & FULL-STACK ROLES",
  careerTarget: "Full-Stack Developer / Software Engineering Roles",
  strengths: ["Full-Stack Development", "Public Speaking", "Event Planning & Logistics", "Cross-Functional Collaboration", "Problem Solving"],
  summary: "Electronics and Computer Science student who enjoys building things end to end - from the database to the UI. Comfortable working across the stack with React, Node.js, and TypeScript, and have picked up a few AI tools along the way, including a small LLM-based project. Outside of coding, I run event operations for my college's R&D committee, where I've hosted programs in front of a few hundred people and learned to keep a dozen moving parts on track. Looking for a developer role where I can keep learning while contributing real work."
};

export const KEY_NUMBERS = [
  { value: "4", label: "Featured Projects", context: "CRM, AI Assistant, Event App, Portfolio" },
  { value: "R&D", label: "Committee Member", context: "College Operations & Logistics" },
  { value: "300+", label: "Audience Hosted", context: "Public Speaking & Program Anchor" },
  { value: "2025—Present", label: "B.Tech ECS", context: "Shree L. R. Tiwari College" },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "crm-platform",
    number: "01",
    title: "CRM Platform for Sales & Lead Management",
    subtitle: "Sales Pipeline & Lead Tracking with Role-Based JWT Auth",
    label: "FEATURED FULL-STACK PROJECT",
    category: "Full-Stack Web App",
    technologies: ["React.js", "Node.js", "Express.js", "Supabase", "REST API", "JWT Authentication"],
    description: "A CRM built with React on the front end and Node/Express on the back end, backed by Supabase, for tracking leads and where they stand in the sales pipeline.",
    impact: "Full-Stack Sales Pipeline & Role-Based Access Control",
    architectureNodes: ["React Frontend", "Express API Gateway", "JWT Auth Middleware", "Supabase Database", "Pipeline Visualizer"],
    keyCapabilities: [
      "A CRM built with React on the front end and Node/Express on the back end, backed by Supabase, for tracking leads and where they stand in the sales pipeline.",
      "Added JWT-based login and role-based access so different users only see what they should."
    ],
    githubUrl: "https://github.com/snehagwork2320",
    caseStudy: {
      problem: "Sales teams need a clear, centralized platform to monitor leads and pipeline stages while ensuring data privacy through strict role-based access.",
      context: "Managing lead status transitions manually often leads to lost deals and disorganized communication.",
      approach: "Engineered a responsive React client connected to Express REST endpoints and Supabase PostgreSQL with secure JWT authentication.",
      architecture: {
        title: "CRM Lead Pipeline & Authentication Architecture",
        diagram: [
          "React.js Single Page Client",
          "Node.js / Express.js REST API",
          "JWT Security & Role-Based Access Controller",
          "Supabase (PostgreSQL) Database Engine"
        ],
        details: "Implements JWT validation for API routes ensuring users can only access data aligned with their role permissions."
      },
      implementation: "Built using React.js with modular state components, backed by Express.js REST services and Supabase database tables.",
      challenges: "Configuring seamless role-based routing and secure state persistence across sessions.",
      results: [
        "Interactive sales pipeline tracking with live lead status updates",
        "Secure role-based access control protecting sensitive client data"
      ],
      learnings: "Mastered full-stack authentication flows, role-based authorization, and relational database operations in Supabase.",
      futureWork: "Adding automated email notifications for lead stage updates and sales analytics reports."
    }
  },
  {
    id: "ai-email-assistant",
    number: "02",
    title: "AI-Powered Email Reply Assistant",
    subtitle: "Context-Aware Automated Reply Generator with Tone Calibration",
    label: "AI / LLM TOOL",
    category: "Generative AI",
    technologies: ["Python", "Streamlit", "Generative AI", "LLM Integration"],
    description: "A small Streamlit tool that reads an email you paste in and drafts a reply, matching the tone you ask for.",
    impact: "Automated Email Reply Generation & Time Saving",
    architectureNodes: ["Email Input Formatter", "Tone Selection Engine", "LLM Prompt Pipeline", "Streamlit UI"],
    keyCapabilities: [
      "A small Streamlit tool that reads an email you paste in and drafts a reply, matching the tone you ask for.",
      "Built mainly to save time on repetitive replies - paste, generate, copy."
    ],
    githubUrl: "https://github.com/snehagwork2320",
    caseStudy: {
      problem: "Drafting repetitive email responses consumes valuable working hours, often leading to inconsistent communication tone.",
      context: "Generative AI can analyze incoming message context and craft tailored responses in seconds.",
      approach: "Created a lightweight Streamlit interface connected to LLM APIs that processes email text and outputs tone-adjusted reply options.",
      architecture: {
        title: "Generative AI Email Processing Pipeline",
        diagram: [
          "Streamlit User Interface",
          "Email Parsing & Context Extractor",
          "Tone Parameter Calibration",
          "LLM Response Synthesis",
          "Editable Draft Output"
        ],
        details: "Formats user prompts dynamically based on selected tone (Formal, Casual, Concise, Professional)."
      },
      implementation: "Developed in Python using Streamlit for rapid interactive UI deployment and LLM API integrations.",
      challenges: "Ensuring prompt templates maintain email context without introducing irrelevant details.",
      results: [
        "Rapid response generation in seconds across multiple customized tones",
        "Streamlined workflow: paste, generate tone-matched reply, copy"
      ],
      learnings: "Gained practical experience with prompt engineering, LLM integration, and rapid prototyping in Streamlit.",
      futureWork: "Exploring browser extension integration for direct one-click email client replies."
    }
  },
  {
    id: "event-management-system",
    number: "03",
    title: "Event Management System",
    subtitle: "Web Platform for Event Creation, Registration & Attendee Tracking",
    label: "FULL-STACK WEB APP",
    category: "Web Application",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    description: "A web app for creating events and letting people register and get tracked as attendees.",
    impact: "End-to-End Event Operations & Attendee Management",
    architectureNodes: ["HTML/CSS/JS Client", "Express API Controller", "MongoDB Event Store", "Attendee Registration Manager"],
    keyCapabilities: [
      "A web app for creating events and letting people register and get tracked as attendees.",
      "Backend runs on Node/Express with MongoDB storing event and registration data."
    ],
    githubUrl: "https://github.com/snehagwork2320",
    caseStudy: {
      problem: "Event organizers need an intuitive system to publish upcoming events, collect participant signups, and track attendance.",
      context: "Campus and community events require real-time registration data to coordinate logistics smoothly.",
      approach: "Designed a clean full-stack web application with Node/Express handling route requests and MongoDB managing event and registrant collections.",
      architecture: {
        title: "Event System & Data Persistence Flow",
        diagram: [
          "Interactive Frontend (HTML5 / CSS3 / JS)",
          "Node.js & Express.js REST API",
          "MongoDB Document Database",
          "Attendee Registration Counter"
        ],
        details: "Stores event details and linked registration documents for quick lookups and real-time attendance counts."
      },
      implementation: "Built using vanilla JavaScript, HTML5, and CSS3 on the client with Node.js, Express.js, and MongoDB on the server.",
      challenges: "Ensuring database queries handle duplicate registrations gracefully and return accurate attendee counts.",
      results: [
        "Complete web portal for event creation and participant registration",
        "Reliable MongoDB storage for event schedules and registered users"
      ],
      learnings: "Deepened knowledge of NoSQL database modeling, CRUD API design, and asynchronous server routes.",
      futureWork: "Adding QR code generation for quick check-ins at event entrances."
    }
  },
  {
    id: "personal-portfolio",
    number: "04",
    title: "Personal Portfolio Website",
    subtitle: "Responsive Developer Portfolio & Contact Form Backend",
    label: "PORTFOLIO SITE",
    category: "Web Development",
    technologies: ["React.js", "TypeScript", "Node.js"],
    description: "My portfolio site, built in React and TypeScript with a small Node.js backend for the contact form.",
    impact: "Modular Modern Developer Portfolio",
    architectureNodes: ["React Component Tree", "TypeScript Type Definitions", "Node.js Contact Dispatcher", "Responsive Layout Engine"],
    keyCapabilities: [
      "My portfolio site, built in React and TypeScript with a small Node.js backend for the contact form.",
      "Kept the components simple and reusable so it's easy to update as I add new projects."
    ],
    githubUrl: "https://github.com/snehagwork2320/sneha-portfolio",
    caseStudy: {
      problem: "Developers need a modern, clean, and fast personal portfolio site to showcase projects and facilitate direct recruiter contact.",
      context: "A reusable, component-driven design makes it seamless to expand content as new projects are completed.",
      approach: "Crafted a responsive application using React.js and TypeScript, styled with custom CSS and enhanced with smooth animations.",
      architecture: {
        title: "Portfolio Architecture & Component Structure",
        diagram: [
          "React & TypeScript UI Components",
          "Centralized Data Store (portfolioData.ts)",
          "Node.js Contact Form Dispatcher"
        ],
        details: "Employs modular component design pattern for high maintainability."
      },
      implementation: "Developed with React.js, TypeScript, and modern styling utilities.",
      challenges: "Structuring reusable data interfaces to allow instantaneous updates without modifying component logic.",
      results: [
        "Published fast, interactive personal portfolio website",
        "Clean, simple component design easily updated for future projects"
      ],
      learnings: "Mastered component architecture in React with TypeScript interfaces and responsive UI optimization.",
      futureWork: "Integrating live blog section for technical writing and project updates."
    }
  }
];

export const TECHNICAL_SKILLS = {
  languages: [
    { name: "C", level: "Core", desc: "Procedural programming & logic fundamentals" },
    { name: "C++", level: "Core", desc: "Object-oriented programming & data structures" },
    { name: "JavaScript", level: "Advanced", desc: "ES6+, Async/Await, DOM manipulation, REST APIs" },
    { name: "TypeScript", level: "Advanced", desc: "Type-safe web applications & component development" },
    { name: "HTML5", level: "Advanced", desc: "Semantic structural web markup" },
    { name: "CSS3", level: "Advanced", desc: "Responsive design, Flexbox, Grid, custom styling" }
  ],
  frameworksAndLibraries: [
    { name: "React.js", desc: "Component architecture, dynamic UI states, hooks, reusable components" },
    { name: "TypeScript", desc: "Type safety, interface definitions, scalable React applications" },
    { name: "Express.js", desc: "RESTful API routes, server middleware, HTTP request handling" },
    { name: "Node.js", desc: "Asynchronous backend runtime environment" },
    { name: "JWT Auth", desc: "JSON Web Tokens, role-based access control & secure authentication" },
    { name: "HTML5 & CSS3", desc: "Modern responsive web interfaces and CSS layout styling" }
  ],
  toolsAndPlatforms: [
    { name: "Streamlit", desc: "Python web apps for rapid AI tool prototyping" },
    { name: "Git & GitHub", desc: "Version control, commit history, repository collaboration" },
    { name: "Postman", desc: "API testing, endpoint validation, payload debugging" },
    { name: "Prompt Engineering", desc: "Basic prompt crafting & integration with LLMs" }
  ],
  conceptsAndPractices: [
    { name: "Full-Stack Development", desc: "Building applications end to end - from database to UI" },
    { name: "RESTful API Design", desc: "Endpoint structure, JSON data exchange, HTTP methods" },
    { name: "Role-Based Access Control", desc: "JWT authorization & user permission security" },
    { name: "Component-Driven Design", desc: "Modular, simple, and reusable UI components" }
  ],
  databasesAndInfrastructure: [
    { name: "MongoDB", desc: "NoSQL document storage, schemas, event & registration data" },
    { name: "Supabase (PostgreSQL)", desc: "Relational database, lead tracking, backend storage" }
  ],
  aiTools: [
    { name: "Generative AI / LLMs", desc: "Integration of LLM APIs for automated text generation" },
    { name: "Streamlit AI Apps", desc: "Rapid UI wrapping for AI-assisted tools" }
  ],
  softSkills: [
    "Public Speaking & Event Hosting (hundreds of attendees)",
    "Event Planning & Operations Management",
    "Cross-Functional Team Collaboration",
    "Problem Solving & First-Principles Thinking",
    "Adaptability & Continuous Learning"
  ]
};

export const EDUCATION = {
  degree: "B.Tech, Electronics & Computer Science",
  institution: "Shree L. R. Tiwari College of Engineering",
  university: "Mumbai University",
  location: "Mumbai, Maharashtra",
  period: "2025 – Present",
  cgpa: "Undergraduate",
  coursework: [
    "Electronics & Circuits",
    "Computer Science Fundamentals",
    "Full-Stack Web Development",
    "Database Management Systems",
    "Data Structures & Algorithms",
    "Object-Oriented Programming (C++ / C)",
    "Software Engineering",
    "Generative AI & LLM Tools"
  ]
};

export const EDUCATION_LIST = [
  {
    institution: "Shree L. R. Tiwari College of Engineering",
    degree: "B.Tech, Electronics & Computer Science",
    period: "2025 – Present",
    location: "Mumbai, Maharashtra",
    details: "Focusing on Electronics, Computer Science, Full-Stack Web Development, and Software Engineering."
  },
  {
    institution: "Thakur College of Science and Commerce",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2023 – 2025",
    location: "Kandivali, Mumbai, Maharashtra",
    details: "Higher Secondary Education focusing on Science and Mathematics stream."
  },
  {
    institution: "St. Xavier's High School",
    degree: "Secondary School Certificate (SSC)",
    period: "Completed 2023",
    location: "Mumbai, Maharashtra",
    details: "Secondary Education with strong academic foundation."
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "rd-committee",
    company: "Research & Development (R&D) Committee",
    role: "Active Committee Member & Event Operations Lead",
    location: "Mumbai, Maharashtra",
    period: "2025 – Present",
    focus: [
      "Technical Event Operations & Logistics",
      "Public Speaking & Program Hosting",
      "Stakeholder Coordination"
    ],
    achievements: [
      "Plan and run technical events end to end - budgeting, logistics, and making sure things actually happen on time.",
      "Anchor and host college events in front of audiences of a few hundred people.",
      "Act as the go-between for students, faculty advisors, and outside participants when something needs sorting out.",
      "Write up what worked and what didn't after each event so the next one runs smoother."
    ],
    impact: [
      "Hosted programs in front of audiences of a few hundred people",
      "Kept dozens of moving parts on track across event logistics and team operations"
    ],
    technologies: ["Event Operations", "Public Speaking", "Budgeting", "Logistics", "Team Coordination"]
  }
];

export const CERTIFICATIONS = [
  { title: "C Programming Certification", domain: "Programming Fundamentals & Logic" },
  { title: "C++ Programming Certification", domain: "Object-Oriented Programming & Data Structures" },
  { title: "Web Development Certification", domain: "Frontend & Full-Stack Web Development" },
  { title: "Hackathon Participation Certificate", domain: "Competitive Problem Solving & Prototyping" }
];

export const HACKATHONS: HackathonItem[] = [
  {
    name: "Hackathon Participation",
    award: "CERTIFICATE OF PARTICIPATION",
    location: "College Level / Pan-India",
    teamsCount: "Competitive Prototyping",
    role: "Full-Stack Developer",
    description: "Participated in competitive hackathons prototyping web applications and technical solutions under sprint constraints.",
    isMajor: true
  }
];

export const EXTRACURRICULAR = [
  {
    title: "R&D Committee Operations",
    role: "Active Member",
    highlight: "Host for 300+ people",
    description: "Plan and run technical events end to end - budgeting, logistics, and hosting college programs in front of large audiences."
  },
  {
    title: "Event Anchoring & Public Speaking",
    role: "Host",
    highlight: "College Speaker",
    description: "Anchor college events, keeping program schedules seamless and engaging with attendees."
  },
  {
    title: "Inter-Team Liaison",
    role: "Coordinator",
    highlight: "Student-Faculty Bridge",
    description: "Act as the go-between for students, faculty advisors, and outside participants to ensure event success."
  },
  {
    title: "Post-Event Retrospectives",
    role: "Documentation",
    highlight: "Operations Improvement",
    description: "Write up detailed post-event analysis of what worked and what didn't so subsequent events run smoother."
  }
];

export const RESEARCH_TOPICS: ResearchTopic[] = [
  {
    id: "llm-email-tone",
    title: "Generative AI Prompt Calibration for Tone Adaptation",
    category: "Generative AI",
    status: "ACTIVE EXPLORATION",
    question: "How can prompt engineering template structures optimize LLM responses for specific tone requirements?",
    hypothesis: "Structured context framing paired with few-shot tone examples yields consistently tone-calibrated email responses.",
    experiment: "Tested email draft generation across formal, polite, persuasive, and concise tone flags using Streamlit UI.",
    observation: "Explicit tone constraint instructions reduced email revision iterations significantly.",
    nextQuestion: "Can real-time user editing feedback automatically tune subsequent draft prompts?",
    technologies: ["Python", "Streamlit", "LLM APIs", "Prompt Engineering"]
  }
];

export const SYSTEMS_ARCHITECTURE_LAYERS: SystemArchitectureLayer[] = [
  {
    layer: "LAYER 01",
    name: "FRONTEND",
    category: "User Interfaces",
    tech: ["React.js", "TypeScript", "HTML5", "CSS3"],
    description: "Component-driven, responsive client interfaces with reusable UI elements.",
    connectedTo: ["APPLICATION LAYER"]
  },
  {
    layer: "LAYER 02",
    name: "APPLICATION LAYER",
    category: "Backend APIs & Business Logic",
    tech: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    description: "Express API routes handling request validation, authentication, and pipeline logic.",
    connectedTo: ["FRONTEND", "DATABASES"]
  },
  {
    layer: "LAYER 03",
    name: "DATABASES",
    category: "Persistence & Storage",
    tech: ["Supabase (PostgreSQL)", "MongoDB"],
    description: "Relational database tables and document collections for leads, users, and event data.",
    connectedTo: ["APPLICATION LAYER"]
  }
];

export const CURRENTLY_EXPLORING = [
  "Full-Stack React & Node.js Application Architectures",
  "Supabase PostgreSQL Row-Level Security & Role Access",
  "Generative AI & Streamlit Developer Tooling",
  "Event Operations & Large-Scale Public Speaking"
];
