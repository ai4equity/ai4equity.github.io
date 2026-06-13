import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '@/data/contact';

export default function ContactIcons() {
  return (
    <ul className="icons">
      {data.map((s) => {
        const isEmail = s.link.startsWith('mailto:');

        return (
          <li key={s.label}>
            <a
              href={s.link}
              aria-label={isEmail ? s.label : `${s.label} (opens in new tab)`}
              title={s.label}
              {...(!isEmail
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <FontAwesomeIcon icon={s.icon} className="size-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
