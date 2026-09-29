# Website Revision Log

This file records completed revisions to [Songhee Han's website](https://ai4equity.github.io/).
Entries are newest first, using the date in America/New_York. This record begins
on September 29, 2026; earlier history remains in Git.

Maintenance instructions for future revision sessions are in
[AGENTS.md](./AGENTS.md#revision-record-standing-instruction).

## September 29, 2026

### Footer update date

- Changed the shared footer from **Last update: August 15, 2026** to
  **Last update: September 29, 2026**.
- Updated `src/components/Template/Footer.tsx` and its existing test in
  `src/components/__tests__/Template/Footer.test.tsx`.
- Validation: all 271 tests, formatting, lint, and the production build passed.
- **Status: deployed and verified** on the live homepage and Grants page.
- Release: [PR #3](https://github.com/ai4equity/ai4equity.github.io/pull/3),
  merge commit `ea6ee99`;
  [successful deployment](https://github.com/ai4equity/ai4equity.github.io/actions/runs/36581188686).

### EPA grant image and key phrases

- Added an AI-generated environmental education illustration to the EPA grant
  card on [Grants](https://ai4equity.github.io/projects), matching the textured
  teal, cream, and warm gold style of the other grant images.
- The image depicts educators using a tablet for outdoor environmental learning.
  Saved it as `public/images/projects/epa-environmental-education.jpg` and
  referenced it in `src/data/projects.ts`.
- Kept only **Environmental Education** and **AI-Enhanced Learning** as the card's
  key phrases; removed **Place-Based Learning** from the tags.
- Validation: all 271 tests, formatting, lint, and the production build passed.
- **Status: deployed and verified**. The live card showed the image and exactly
  the two requested tags; the downloaded image matched the saved asset.
- Release: [PR #2](https://github.com/ai4equity/ai4equity.github.io/pull/2),
  merge commit `6f53d9e`;
  [successful deployment](https://github.com/ai4equity/ai4equity.github.io/actions/runs/36580460271).

### EPA grant added to Grants and About

- Added the following award as the first entry on
  [Grants](https://ai4equity.github.io/projects) and under **Funded Work** on
  [About](https://ai4equity.github.io/about):

  > Han, S. (Co-PI; Education Lead). A national consortium for just-in-time,
  > AI-enhanced, place-based environmental education training. Funded by the
  > U.S. Environmental Protection Agency. January 2027-December 2028.
  > Total award: $4.65M plus $1.66M in cost share.

- Updated `src/data/projects.ts` and `src/data/about.ts`.
- Validation: all 271 tests, formatting, lint, and the production build passed.
- **Status: deployed and verified**. Confirmed the complete award details and
  first-entry placement on both live pages.
- Release: [PR #1](https://github.com/ai4equity/ai4equity.github.io/pull/1),
  merge commit `1804ed7`;
  [successful deployment](https://github.com/ai4equity/ai4equity.github.io/actions/runs/36579487351).
