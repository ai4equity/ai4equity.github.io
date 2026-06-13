import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import EmailLink from '../../Contact/EmailLink';

describe('EmailLink', () => {
  it('renders the email address', () => {
    render(<EmailLink />);

    expect(screen.getByText('sh24br')).toBeInTheDocument();
    expect(screen.getByText('@fsu.edu')).toBeInTheDocument();
  });

  it('renders a mailto link', () => {
    render(<EmailLink />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'mailto:sh24br@fsu.edu');
  });
});
