import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import EmailLink from '../../Contact/EmailLink';

describe('EmailLink', () => {
  it('renders the email address', () => {
    render(<EmailLink />);

    expect(screen.getByText('FSU-related matters')).toBeInTheDocument();
    expect(screen.getByText('Non-FSU matters')).toBeInTheDocument();
    expect(screen.getByText('songheehan')).toBeInTheDocument();
    expect(screen.getByText('@fsu.edu')).toBeInTheDocument();
    expect(screen.getByText('songpublic9')).toBeInTheDocument();
    expect(screen.getByText('@gmail.com')).toBeInTheDocument();
  });

  it('renders mailto links', () => {
    render(<EmailLink />);

    expect(screen.getByRole('link', { name: /songheehan/i })).toHaveAttribute(
      'href',
      'mailto:songheehan@fsu.edu',
    );
    expect(screen.getByRole('link', { name: /songpublic9/i })).toHaveAttribute(
      'href',
      'mailto:songpublic9@gmail.com',
    );
  });
});
