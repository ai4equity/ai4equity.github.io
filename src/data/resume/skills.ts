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
    category: ['Research'],
  },
  {
    title: 'Educational Chatbots',
    competency: 5,
    category: ['Learning Technologies', 'Research'],
  },
  {
    title: 'Learning Analytics',
    competency: 5,
    category: ['Methods', 'Research'],
  },
  {
    title: 'Educational Data Mining',
    competency: 5,
    category: ['Methods'],
  },
  {
    title: 'Educational Equity',
    competency: 5,
    category: ['Research'],
  },
  {
    title: 'Technology Use in Learning',
    competency: 5,
    category: ['Research'],
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
    category: [],
  },
  {
    title: 'Retrieval-Augmented Generation',
    competency: 4,
    category: ['Learning Technologies'],
  },
  {
    title: 'AI-Supported Mathematics Instruction',
    competency: 4,
    category: ['R&D'],
  },
  {
    title: 'Open-Source Chatbot Pipelines',
    competency: 4,
    category: ['R&D'],
  },
  {
    title: 'Learning Dashboard Pipelines',
    competency: 4,
    category: ['R&D'],
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
    category: ['Methods'],
  },
  {
    title: 'Doctoral Mentoring',
    competency: 4,
    category: ['Teaching'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const CATEGORY_COLOR: Pick<Category, 'color' | 'textColor'> = {
  color: 'var(--color-skill-2)',
  textColor: 'dark',
};

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

  return uniqueCategories.map((category) => ({
    name: category,
    ...CATEGORY_COLOR,
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
