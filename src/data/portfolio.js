import ambarImg from '../assets/projects/ambar.png';

const projectsBase = [
  {
    id: 'landing',
    tech: ['React', 'Tailwind CSS'],
    demo: 'https://demo-ambar-project.vercel.app',
    code: '#',
    image: ambarImg,
  },
  {
    id: 'webapp',
    tech: ['React', 'Supabase', 'React Router'],
    demo: '#',
    code: '#',
  },
  {
    id: 'payment',
    tech: ['React', 'Supabase', 'Stripe'],
    demo: '#',
    code: '#',
  },
];

const projectsText = {
  en: {
    landing: {
      name: 'Modern Landing Page',
      desc: 'A responsive landing page for businesses or products, complete with animations.',
    },
    webapp: {
      name: 'Web App with Auth',
      desc: 'A complete web app with user login, a personal dashboard and a real-time database.',
    },
    payment: {
      name: 'Payment Integration',
      desc: 'A store or booking system with Stripe checkout built in, running on a serverless backend.',
    },
  },
  es: {
    landing: {
      name: 'Landing Page Moderna',
      desc: 'Una landing page responsiva para negocios o productos, con animaciones incluidas.',
    },
    webapp: {
      name: 'Web App con Autenticación',
      desc: 'Una web app completa con inicio de sesión, un dashboard personal y una base de datos en tiempo real.',
    },
    payment: {
      name: 'Integración de Pagos',
      desc: 'Una tienda o sistema de reservas con checkout de Stripe integrado, corriendo sobre un backend serverless.',
    },
  },
};

export function getProjects(lang) {
  return projectsBase.map((p) => ({ ...p, ...projectsText[lang][p.id] }));
}

const experienceBase = [
  {
    id: 'byu',
    company: 'BYU Pathway',
    location: 'Idaho, USA',
    period: '2025 — Present',
  },
  {
    id: 'instructor',
    company: 'Funval',
    location: 'Guatemala City, Guatemala',
    period: '2023 — Present',
  },
  {
    id: 'controller',
    company: 'Funval',
    location: 'Guatemala City, Guatemala',
    period: '2023 — Present',
  },
];

const experienceText = {
  en: {
    byu: {
      role: 'AI Engineer',
      bullets: [
        'Developed Retrieval-Augmented Generation (RAG) solutions to improve the accuracy and relevance of AI-generated responses.',
        'Implemented semantic search systems using Pinecone and Azure AI Search for efficient document retrieval.',
        'Created and optimized vector indexing pipelines for storing and querying embeddings.',
        'Built backend services in Python to connect AI models, vector databases, and enterprise data sources.',
      ],
    },
    instructor: {
      role: 'Web Development Instructor',
      bullets: [
        'Teach web development with a focus on HTML, CSS, Tailwind CSS, JavaScript, Node.js and React.',
        'Incorporated tools such as Git, GitHub, and Figma into course projects to mirror industry workflows.',
        'Guide students through real-world projects and debugging sessions, reinforcing modern development practices.',
      ],
    },
    controller: {
      role: 'Academic Controller of Software Development',
      bullets: [
        'Coordinated academic operations of the Web Development School, driving curriculum improvements and optimizing student learning outcomes.',
        'Introduced new tracking and feedback systems that improved engagement by 30%.',
        'Worked closely with developers and instructors to align course content with real-world software development workflows.',
      ],
    },
  },
  es: {
    byu: {
      role: 'AI Engineer',
      bullets: [
        'Desarrollé soluciones de Retrieval-Augmented Generation (RAG) para mejorar la precisión y relevancia de las respuestas generadas por IA.',
        'Implementé sistemas de búsqueda semántica usando Pinecone y Azure AI Search para una recuperación eficiente de documentos.',
        'Creé y optimicé pipelines de indexación vectorial para almacenar y consultar embeddings.',
        'Construí servicios backend en Python para conectar modelos de IA, bases de datos vectoriales y fuentes de datos empresariales.',
      ],
    },
    instructor: {
      role: 'Instructor de Desarrollo Web',
      bullets: [
        'Enseño desarrollo web con enfoque en HTML, CSS, Tailwind CSS, JavaScript, Node.js y React.',
        'Incorporé herramientas como Git, GitHub y Figma en los proyectos del curso para reflejar flujos de trabajo de la industria.',
        'Guío a los estudiantes en proyectos reales y sesiones de debugging, reforzando prácticas modernas de desarrollo.',
      ],
    },
    controller: {
      role: 'Controlador Académico de Desarrollo de Software',
      bullets: [
        'Coordiné las operaciones académicas de la Escuela de Desarrollo Web, impulsando mejoras curriculares y optimizando los resultados de aprendizaje de los estudiantes.',
        'Introduje nuevos sistemas de seguimiento y retroalimentación que mejoraron el engagement en un 30%.',
        'Trabajé de cerca con desarrolladores e instructores para alinear el contenido del curso con flujos de trabajo reales de desarrollo de software.',
      ],
    },
  },
};

export function getExperience(lang) {
  return experienceBase.map((e) => ({ ...e, ...experienceText[lang][e.id] }));
}

const stackGroupsBase = [
  { id: 'frontend', items: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'ReactJS'] },
  { id: 'backend', items: ['Node.js', 'Express', 'PHP', 'Laravel', 'Python', 'FastAPI'] },
  { id: 'databases', items: ['MySQL', 'PostgreSQL', 'SQL', 'Firebase', 'Supabase'] },
  { id: 'ai', items: ['RAG', 'LlamaIndex', 'Pinecone'] },
  { id: 'tooling', items: ['Git', 'GitHub'] },
];

const stackLabels = {
  en: {
    frontend: 'Frontend',
    backend: 'Backend',
    databases: 'Databases',
    ai: 'AI / LLMs',
    tooling: 'Tooling',
  },
  es: {
    frontend: 'Frontend',
    backend: 'Backend',
    databases: 'Bases de datos',
    ai: 'IA / LLMs',
    tooling: 'Herramientas',
  },
};

export function getStackGroups(lang) {
  return stackGroupsBase.map((g) => ({ label: stackLabels[lang][g.id], items: g.items }));
}

export const coreStack = ['React', 'Node.js', 'TypeScript', 'Python', 'FastAPI', 'Laravel', 'PostgreSQL', 'LLMs'];
