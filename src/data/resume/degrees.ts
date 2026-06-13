export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'The University of Texas at Austin',
    degree: 'PhD, Curriculum and Instruction, Learning Technologies',
    link: 'https://www.utexas.edu/',
    year: 2024,
  },
  {
    school: 'The University of Texas at Austin',
    degree: 'MA, Curriculum and Instruction, Learning Technologies',
    link: 'https://www.utexas.edu/',
    year: 2019,
  },
  {
    school: 'Seoul National University of Education',
    degree: 'BEd, Elementary Education, Science & Technology Education',
    link: 'https://en.snue.ac.kr/',
    year: 2008,
  },
];

export default degrees;
