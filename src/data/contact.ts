import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons/faGoogleScholar';
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
  {
    link: 'https://scholar.google.com/citations?user=nbDDsAsAAAAJ&hl=en',
    label: 'Google Scholar',
    icon: faGoogleScholar,
  },
];

export default data;
