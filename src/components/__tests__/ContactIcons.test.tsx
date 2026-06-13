import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ContactIcons from '../Contact/ContactIcons';

describe('ContactIcons', () => {
  it('renders contact icons', () => {
    render(<ContactIcons />);

    // Check if GitHub link is present
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      expect.stringContaining('github.com'),
    );

    // Check if email links are present
    const fsuEmailLink = screen.getByRole('link', {
      name: /fsu-related email/i,
    });
    expect(fsuEmailLink).toBeInTheDocument();
    expect(fsuEmailLink).toHaveAttribute('href', 'mailto:songheehan@fsu.edu');

    const nonFsuEmailLink = screen.getByRole('link', {
      name: /non-fsu email/i,
    });
    expect(nonFsuEmailLink).toBeInTheDocument();
    expect(nonFsuEmailLink).toHaveAttribute(
      'href',
      'mailto:songpublic9@gmail.com',
    );
  });

  it('has correct number of contact links', () => {
    render(<ContactIcons />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});
