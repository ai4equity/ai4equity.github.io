import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import Navigation from '../../Template/Navigation';

// Mock usePathname to control active state
const mockPathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname(),
}));

describe('Navigation', () => {
  beforeEach(() => {
    mockPathname.mockReturnValue('/');
  });

  it('renders the logo link to home', () => {
    render(<Navigation />);
    const logo = screen.getByRole('link', { name: /sh/i });
    expect(logo).toHaveAttribute('href', '/');
  });

  it('renders navigation links for all non-index routes', () => {
    render(<Navigation />);

    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /publications/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /grants/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /ai4equity lab members/i }),
    ).toBeInTheDocument();
  });

  it('marks home route as active when on homepage', () => {
    mockPathname.mockReturnValue('/');
    render(<Navigation />);

    // About link should not be active
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).not.toHaveClass('active');
  });

  it('marks about route as active when on about page', () => {
    mockPathname.mockReturnValue('/about');
    render(<Navigation />);

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toHaveClass('active');
    expect(aboutLink).toHaveAttribute('aria-current', 'page');
  });

  it('marks nested routes as active', () => {
    mockPathname.mockReturnValue('/resume/skills');
    render(<Navigation />);

    const resumeLink = screen.getByRole('link', { name: /resume/i });
    expect(resumeLink).toHaveClass('active');
  });

  it('renders navigation actions', () => {
    render(<Navigation />);

    const navActions = document.querySelector('.nav-actions');
    expect(navActions).toBeInTheDocument();
    expect(document.querySelector('.theme-toggle')).not.toBeInTheDocument();
  });
});
