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
  });

  it('only renders LinkedIn as the social link', () => {
    render(<ContactIcons />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(1);
  });
});
