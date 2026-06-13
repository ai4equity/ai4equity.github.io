/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Florida State University',
    position: 'Faculty, Instructional Systems & Learning Technologies',
    url: 'https://education.fsu.edu/',
    startDate: '2024-08-01',
    summary: `Faculty member in Instructional Systems & Learning Technologies, Educational Psychology & Learning Systems, Anne Spencer Daves College of Education, Health, and Human Sciences.`,
    highlights: [
      'Researches learning technologies, AI-supported learning, educational chatbots, learning analytics, and equity in online learning.',
      'Teaches graduate courses including Inquiry and Measurement for Practitioners, Research on Learning, Instruction, and Performance Systems, Introduction to Instructional Systems, Trends and Issues in Instructional Design, and Evaluation of Instruction and Training in HPT.',
      'Leads funded work on equity in online learning, open-source chatbot pipelines, retrieval-augmented generation, dashboards, and AI4Equity Lab.',
      'Serves on doctoral committees and program, department, professional, and community service roles.',
    ],
  },
];

export default work;
