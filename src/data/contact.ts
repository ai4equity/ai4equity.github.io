import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://www.linkedin.com/in/songhee-han/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
];

export default data;
