export const profile = {
  name: 'Anuji Weragoda',
  role: 'Software Engineer',
  location: 'Sri Lanka',
  email: 'anujiwera@gmail.com',
  intro:
    'Computer Science graduate focused on building thoughtful, reliable software. I care about clean systems, fast interfaces, and the small details that make products feel effortless.',
  availability: 'Open to Software Engineer & Junior Software Engineer roles',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:anujiwera@gmail.com',
  },
}

export type Project = {
  id: string
  name: string
  category: string
  year: string
  summary: string
  description: string
  image: string
  tags: string[]
  links: { label: string; href: string }[]
  media?: { type: 'video'; src: string; poster?: string }
}

export const projects: Project[] = [
  {
    id: 'pac-dosing',
    name: 'AI-Based PAC Dosing System',
    category: 'Research · Edge AI · Water Systems',
    year: '2025',
    summary: 'Real-time PAC dosage prediction using ML, IoT sensing, and a multi-agent control loop.',
    description:
      'Designed and deployed an intelligent PAC dosing system for Sri Lankan drinking water treatment plants. The system combines sensor-driven data collection, regression-based prediction, and a multi-agent control layer deployed on edge hardware to automate dosage decisions in real time.',
    image: '/projects/Screenshot%202025-11-26%20115914B.png',
    tags: ['Python', 'Random Forest', 'IoT Sensors', 'Raspberry Pi', 'Multi-Agent Systems'],
    links: [
      { label: 'Research', href: '#' },
      { label: 'Project', href: '#' },
    ],
  },
  {
    id: 'atlas',
    name: 'Atlas Analytics',
    category: 'Full-stack · Data',
    year: '2024',
    summary: 'Real-time product analytics with sub-second query latency.',
    description:
      'A self-serve analytics platform that ingests event streams and renders live dashboards. Built a columnar aggregation layer and an incremental query cache to keep p95 dashboard loads under 400ms at millions of events per day.',
    image: '/projects/atlas-analytics.png',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Redis', 'WebSockets'],
    links: [
      { label: 'Case study', href: '#' },
      { label: 'Source', href: 'https://github.com' },
    ],
  },
  {
    id: 'semantic',
    name: 'Semantic Code Search',
    category: 'Developer tools · ML',
    year: '2024',
    summary: 'Natural-language search across large codebases.',
    description:
      'A command-palette code search engine that embeds functions with a fine-tuned model and ranks results by semantic similarity. Reduced average time-to-find for unfamiliar code by roughly 60% in an internal study.',
    image: '/projects/semantic-search.png',
    tags: ['Python', 'FastAPI', 'PyTorch', 'pgvector', 'React'],
    links: [
      { label: 'Live demo', href: '#' },
      { label: 'Source', href: 'https://github.com' },
    ],
  },
  {
    id: 'collab',
    name: 'Draft — Collaborative Editor',
    category: 'Real-time · Systems',
    year: '2023',
    summary: 'Conflict-free collaborative document editing.',
    description:
      'A real-time editor built on a CRDT engine with presence, comments, and offline support. Implemented the sync protocol from scratch and shipped a reconnection layer that resolves thousands of concurrent operations without data loss.',
    image: '/projects/collab-editor.png',
    tags: ['TypeScript', 'CRDT', 'Node.js', 'WebRTC', 'IndexedDB'],
    links: [
      { label: 'Case study', href: '#' },
      { label: 'Source', href: 'https://github.com' },
    ],
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  points: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    company: 'Eyepax Labs (Pvt) Ltd.',
    role: 'Junior Software Engineer',
    period: 'March 2026 — August 2026',
    location: 'Sri Lanka',
    points: [
      
      'Develop, test, and maintain robust web applications within an agile environment using modern software engineering frameworks. Handle both frontend and backend development while actively building efficient CI/CD pipelines to automate software deployments and creating custom scripts to streamline repetitive technical tasks.',
      'Participated in code reviews and collaborated with cross-functional teams to ensure high code quality.',
      'Leveraged AI-powered development tools and prompt engineering techniques to assist software development activities, optimize AI-generated outputs, improve code quality, streamline development workflows, and enhance overall productivity.',
      'Worked in R&D and software development initiatives focused on adapting AI-driven solutions into practical engineering workflows'
    ],
    stack: ['TypeScript', 'Next.js','React','Go','playwright', 'CI/CD', 'Agile', 'AI-assisted Development',],
  },
  {
    company: 'Eyepax Labs (Pvt) Ltd.',
    role: 'Software Engineer Intern',
    period: 'September 2025 — March 2026',
    location: 'Sri Lanka',
    points: [
      'Developed mobile applications using Flutter and Android in an agile environment including UI development, navigation flows, REST API integration, state management, and third-party services including Firebase and Adyen payment integration.',
      'Gained exposure to enterprise integration technologies including MuleSoft, Microsoft Power Apps, and MCP Servers.',
    ],
    stack: ['Flutter', 'Android', 'Firebase', 'REST APIs', 'MuleSoft'],
  },
  
]

export type SkillGroup = { category: string; skills: string[] }

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Go', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Vite', 'Accessibility'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'GraphQL', 'REST'],
  },
  {
    category: 'ML & Data',
    skills: ['PyTorch', 'scikit-learn', 'pandas', 'pgvector', 'NumPy'],
  },
  {
    category: 'Infrastructure',
    skills: ['Docker', 'AWS', 'Vercel', 'CI/CD', 'Linux', 'Kubernetes'],
  },
  {
    category: 'Practices',
    skills: ['Testing', 'System design', 'Code review', 'Agile', 'Observability'],
  },
]

export type Research = {
  title: string
  venue: string
  year: string
  summary: string
  problem: string
  solution: string
  contributions: string[]
  tags: string[]
  href: string
}

export const research: Research[] = [
  {
    title: 'AI-Based Poly Aluminium Chloride (PAC) Dosage Determination for Sri Lankan Drinking Water Treatment Plants',
    venue: 'Undergraduate Research Project',
    year: '2025',
    summary:
      'Designed and deployed an intelligent PAC dosing system integrating ML, IoT sensing, and a Multi-Agent System for real-time adaptive control at Moronthota Water Treatment Plant, Kegalle.',
    problem:
      'Manual PAC dosage selection relied on jar testing, which was slow, labour-intensive, and highly dependent on operator judgement.Hard to responsce rapid cahnges.',
    solution:
      'This research developed an AI-IoT system that uses real-time water quality data from sensors and machine learning to recommend PAC dosages automatically. The design combines a data agent, prediction agent, and control agent in a Multi-Agent System to monitor conditions, estimate the suitable dose, and apply it in a closed-loop operational workflow.',
    contributions: [
      'Demonstrated that simple lag-based features can effectively capture operational dynamics for PAC prediction without complex feature engineering.',
      'Established a robust method for handling imbalanced regression in a safety-critical industrial setting.',
      'Delivered a deployable and resource-conscious automated dosing system suited to real-world water treatment plants.',
      'Implemented a modular Multi-Agent System that improves scalability, coordination, and resilience in dosing decisions.',
    ],
    tags: ['Machine Learning', 'IoT', 'Multi-Agent Systems', 'Edge AI', 'Water Treatment'],
    href: '#',
  },
]

export type Education = {
  school: string
  degree: string
  period: string
  detail: string
  highlights: string[]
}

export const education: Education[] = [
  {
    school: 'University of Peradeniya',
    degree: 'B.Sc.(Honours) in Computer Science',
    period: '2021 — 2025',
    detail: 'Graduated with honors · GPA 3.72 / 4.00',
    highlights: [
      'Coursework: Algorithms, Distributed Systems, Machine Learning, Databases, Operating Systems',
    ],
  },
]
