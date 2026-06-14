export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image?: string;
  visualTone?: 'teal' | 'coral' | 'gold' | 'violet';
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'Bridging the AI Adoption Gap',
    subtitle:
      'Anne Spencer Daves College of Education, Health, and Human Sciences',
    image: '/images/projects/generative-ai-math-instruction.jpg',
    date: '2026-01-01',
    desc: 'PI. Teacher-led design and implementation of generative AI-supported mathematics instruction. Funded by Anne Spencer Daves College of Education, Health, and Human Sciences, Florida State University. Total award $25,213.59.',
    tech: ['Generative AI', 'Mathematics Instruction', 'Teacher-Led Design'],
    featured: true,
  },
  {
    title: 'Advancing Equity in Online Learning',
    subtitle: 'First Year Assistant Professor Grant',
    image: '/images/projects/equity-online-learning.jpg',
    date: '2025-06-01',
    desc: 'PI. Examination of an open-source chatbot enhanced by customized datasets and open educational resources. Funded by Florida State University. Total award $20,000.',
    tech: ['Educational Chatbots', 'Open Educational Resources', 'Equity'],
    featured: true,
  },
  {
    title: 'RAG Chatbot and Dashboard Pipelines',
    subtitle: 'FSU / AWS Funding for Computer Support Seed Fund',
    image: '/images/projects/rag-dashboard-pipelines.jpg',
    date: '2025-04-01',
    desc: "PI. Large language model-powered retrieval-augmented generation chatbot and dashboard pipelines for students' academic success. Total award $20,000.",
    tech: ['Large Language Models', 'RAG', 'Dashboards'],
    featured: true,
  },
  {
    title: 'Launching AI4Equity Lab',
    subtitle:
      'Anne Spencer Daves College of Education, Health, and Human Sciences',
    image: '/images/projects/ai4equity-lab.jpg',
    date: '2024-08-01',
    desc: 'Director. Funded support for launching AI4Equity Lab at Florida State University. Total award $9,950.',
    tech: ['AI4Equity', 'Learning Technologies', 'Online Learning'],
  },
];

export default data;
