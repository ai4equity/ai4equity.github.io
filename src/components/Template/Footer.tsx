import Link from 'next/link';

import work from '@/data/resume/work';
import { AUTHOR_NAME } from '@/lib/utils';

import ThemePortrait from './ThemePortrait';

export default function Footer() {
  const currentRole = `${work[0].position} at ${work[0].name}`;

  return (
    <footer className="site-footer-new">
      <div className="footer-content">
        <div className="footer-identity">
          <Link href="/" className="footer-avatar">
            <ThemePortrait width={80} height={80} />
          </Link>
          <div className="footer-info">
            <h3>{AUTHOR_NAME}</h3>
            <p className="footer-role">{currentRole}</p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()}
            </p>
            <p className="footer-updated">Last update: June 13, 2026</p>
          </div>
        </div>

        <div className="footer-right">
          <nav className="footer-links" aria-labelledby="footer-links-heading">
            <h4 id="footer-links-heading" className="footer-links-label">
              Explore
            </h4>
            <div className="footer-links-grid">
              <Link href="/about">About</Link>
              <Link href="/resume">Resume</Link>
              <Link href="/projects">Grants</Link>
              <Link href="/lab-members">Lab Members</Link>
              <Link href="/writing">Publications</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>

          <div
            className="footer-social"
            aria-labelledby="footer-social-heading"
          >
            <h4 id="footer-social-heading" className="footer-social-label">
              Connect
            </h4>
            <div className="footer-contact-links">
              <a href="mailto:songpublic9@gmail.com">songpublic9@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
