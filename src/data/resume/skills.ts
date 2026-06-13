export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
  {
    title: 'AI in Education',
    competency: 5,
    category: ['R&D', 'Research'],
  },
  {
    title: 'Educational Chatbots',
    competency: 5,
    category: ['Learning Technologies', 'R&D', 'Research'],
  },
  {
    title: 'Learning Analytics',
    competency: 5,
    category: ['Methods', 'R&D', 'Research'],
  },
  {
    title: 'Educational Data Mining',
    competency: 5,
    category: ['Methods', 'R&D', 'Research'],
  },
  {
    title: 'Educational Equity',
    competency: 5,
    category: ['Research'],
  },
  {
    title: 'Technology Use in Learning',
    competency: 5,
    category: ['Learning Technologies', 'R&D', 'Research'],
  },
  {
    title: 'MOOCs',
    competency: 5,
    category: ['Learning Technologies'],
  },
  {
    title: 'Problem-Based Learning',
    competency: 4,
    category: ['Instructional Design'],
  },
  {
    title: 'Learning Technologies',
    competency: 4,
    category: ['Learning Technologies'],
  },
  {
    title: 'Retrieval-Augmented Generation',
    competency: 4,
    category: ['Learning Technologies', 'R&D'],
  },
  {
    title: 'Teacher-Led AI Design',
    competency: 4,
    category: ['R&D'],
  },
  {
    title: 'AI-Supported Mathematics Instruction',
    competency: 4,
    category: ['R&D'],
  },
  {
    title: 'Open-Source Chatbot Pipelines',
    competency: 4,
    category: ['Learning Technologies', 'R&D'],
  },
  {
    title: 'Learning Dashboard Pipelines',
    competency: 4,
    category: ['Learning Technologies', 'R&D'],
  },
  {
    title: 'Open Educational Resources',
    competency: 4,
    category: ['Learning Technologies', 'R&D'],
  },
  {
    title: 'Quantitative Research',
    competency: 4,
    category: ['Methods'],
  },
  {
    title: 'Training Curriculum and Instruction',
    competency: 4,
    category: ['Instructional Design'],
  },
  {
    title: 'Research Synthesis',
    competency: 4,
    category: ['Methods', 'R&D'],
  },
  {
    title: 'Doctoral Mentoring',
    competency: 4,
    category: ['Teaching'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' },
  { color: 'var(--color-skill-2)', textColor: 'dark' },
  { color: 'var(--color-skill-3)', textColor: 'light' },
  { color: 'var(--color-skill-4)', textColor: 'light' },
  { color: 'var(--color-skill-5)', textColor: 'dark' },
  { color: 'var(--color-skill-6)', textColor: 'dark' },
];

const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

const CATEGORY_ORDER = [
  'R&D',
  'Instructional Design',
  'Learning Technologies',
  'Methods',
  'Research',
  'Teaching',
];

function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort((a, b) => {
    const aIndex = CATEGORY_ORDER.indexOf(a);
    const bIndex = CATEGORY_ORDER.indexOf(b);

    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return a.localeCompare(b);
  });

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
