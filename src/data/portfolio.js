import ambarImg from '../assets/projects/ambar.png';

export const projects = [
  {
    name: 'Modern Landing Page',
    desc: 'A responsive landing page for businesses or products, complete with animations.',
    tech: ['React', 'Tailwind CSS'],
    demo: 'https://demo-ambar-project.vercel.app',
    code: '#',
    image: ambarImg,
  },
  {
    name: 'Web App with Auth',
    desc: 'A complete web app with user login, a personal dashboard and a real-time database.',
    tech: ['React', 'Supabase', 'React Router'],
    demo: '#',
    code: '#',
  },
  {
    name: 'Payment Integration',
    desc: 'A store or booking system with Stripe checkout built in, running on a serverless backend.',
    tech: ['React', 'Supabase', 'Stripe'],
    demo: '#',
    code: '#',
  },
];

export const experience = [
  {
    role: 'AI Engineer',
    company: 'BYU Pathway',
    location: 'Idaho, USA',
    period: '2025 — Present',
    bullets: [
      'Developed Retrieval-Augmented Generation (RAG) solutions to improve the accuracy and relevance of AI-generated responses.',
      'Implemented semantic search systems using Pinecone and Azure AI Search for efficient document retrieval.',
      'Created and optimized vector indexing pipelines for storing and querying embeddings.',
      'Built backend services in Python to connect AI models, vector databases, and enterprise data sources.',
    ],
  },
  {
    role: 'Web Development Instructor',
    company: 'Funval',
    location: 'Guatemala City, Guatemala',
    period: '2023 — Present',
    bullets: [
      'Teach web development with a focus on HTML, CSS, Tailwind CSS, JavaScript, Node.js and React.',
      'Incorporated tools such as Git, GitHub, and Figma into course projects to mirror industry workflows.',
      'Guide students through real-world projects and debugging sessions, reinforcing modern development practices.',
    ],
  },
  {
    role: 'Academic Controller of Software Development',
    company: 'Funval',
    location: 'Guatemala City, Guatemala',
    period: '2023 — Present',
    bullets: [
      'Coordinated academic operations of the Web Development School, driving curriculum improvements and optimizing student learning outcomes.',
      'Introduced new tracking and feedback systems that improved engagement by 30%.',
      'Worked closely with developers and instructors to align course content with real-world software development workflows.',
    ],
  },
];

export const stackGroups = [
  { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'ReactJS'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'PHP', 'Laravel', 'Python', 'FastAPI'] },
  { label: 'Databases', items: ['MySQL', 'PostgreSQL', 'SQL', 'Firebase', 'Supabase'] },
  { label: 'AI / LLMs', items: ['RAG', 'LlamaIndex', 'Pinecone'] },
  { label: 'Tooling', items: ['Git', 'GitHub'] },
];

export const coreStack = ['React', 'Node.js', 'TypeScript', 'Python', 'FastAPI', 'Laravel', 'PostgreSQL', 'LLMs'];
