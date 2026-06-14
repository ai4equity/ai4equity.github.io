import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Songhee Han, Ph.D.</span>
        </h1>

        <p className="hero-tagline">
          Educational researcher and data scientist conducting design-based
          research on equity-focused learning interventions informed by
          observable behavioral data, generative AI use, and latent learner
          characteristics.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">AIED</span>
          <span className="hero-chip">Learning Analytics</span>
          <span className="hero-chip">Problem/Game-Based Learning</span>
          <span className="hero-chip">STEM Education</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
