import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ContactIcons from '../Contact/ContactIcons';

describe('ContactIcons', () => {
  it('renders contact icons', () => {
    render(<ContactIcons />);

    const linkedInLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/songhee-han/',
    );

    const scholarLink = screen.getByRole('link', {
      name: /google scholar/i,
    });
    expect(scholarLink).toBeInTheDocument();
    expect(scholarLink).toHaveAttribute(
      'href',
      'https://scholar.google.com/citations?user=nbDDsAsAAAAJ&hl=en',
    );
  });

  it('only renders LinkedIn and Google Scholar as social links', () => {
    render(<ContactIcons />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(2);
  });
});
