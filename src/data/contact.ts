import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/ai4equity',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'mailto:sh24br@fsu.edu',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
