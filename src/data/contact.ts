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
    link: 'mailto:songheehan@fsu.edu',
    label: 'FSU-related email',
    icon: faEnvelope,
  },
  {
    link: 'mailto:songpublic9@gmail.com',
    label: 'Non-FSU email',
    icon: faEnvelope,
  },
];

export default data;
