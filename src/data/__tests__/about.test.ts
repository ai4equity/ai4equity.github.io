import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains CV-backed profile sections', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('# Research Areas');
    expect(aboutMarkdown).toContain('# Education');
    expect(aboutMarkdown).toContain('# Recent Recognition');
    expect(aboutMarkdown).toContain('# Funded Work');
    expect(aboutMarkdown).toContain('# Teaching');
  });

  it('contains expected research terms', () => {
    expect(aboutMarkdown).toContain('educational equity');
    expect(aboutMarkdown).toContain('technology use');
    expect(aboutMarkdown).toContain('generative AI');
    expect(aboutMarkdown).toContain('Learning analytics');
    expect(aboutMarkdown).toContain('Educational chatbots');
    expect(aboutMarkdown).toContain('Graduate student research mentorship');
  });

  it('contains properly formatted headers', () => {
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThanOrEqual(6);
  });
});
