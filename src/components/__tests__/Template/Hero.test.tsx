import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Songhee Han, PhD');
  });

  it('renders the tagline with FSU and program links', () => {
    render(<Hero />);

    const programLink = screen.getByRole('link', {
      name: /instructional systems/i,
    });
    expect(programLink).toHaveAttribute(
      'href',
      'https://annescollege.fsu.edu/instructional-systems-and-learning-technologies',
    );
    expect(programLink).toHaveAttribute('target', '_blank');
    expect(programLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(programLink).toHaveClass('hero-highlight');

    const fsuLink = screen.getByRole('link', {
      name: /florida state university/i,
    });
    expect(fsuLink).toHaveAttribute('href', 'https://www.fsu.edu/');
    expect(fsuLink).toHaveAttribute('target', '_blank');
    expect(fsuLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(fsuLink).toHaveClass('hero-highlight');
  });

  it('displays hero chips for credentials', () => {
    render(<Hero />);

    expect(screen.getByText('AIED')).toBeInTheDocument();
    expect(screen.getByText('Learning Analytics')).toBeInTheDocument();
    expect(screen.getByText('Problem/Game-Based Learning')).toBeInTheDocument();
    expect(screen.getByText('STEM Education')).toBeInTheDocument();
  });

  it('renders CTA buttons with correct links', () => {
    render(<Hero />);

    const aboutButton = screen.getByRole('link', { name: /about me/i });
    expect(aboutButton).toHaveAttribute('href', '/about');
    expect(aboutButton).toHaveClass('button-primary');

    const resumeButton = screen.getByRole('link', { name: /view resume/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('button-secondary');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
