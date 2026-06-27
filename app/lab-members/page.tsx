import type { Metadata } from 'next';

import Cell from '@/components/Projects/Cell';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/labMembers';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'AI4Equity Lab Members',
  description: 'AI4Equity Lab members and research collaborators.',
  path: '/lab-members/',
});

export default function LabMembersPage() {
  const featuredMembers = data.filter((p) => p.featured);
  const otherMembers = data.filter((p) => !p.featured);

  return (
    <PageWrapper>
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">AI4Equity Lab Members</h1>
        </header>

        {featuredMembers.length > 0 && (
          <section className="projects-featured">
            <h2 className="projects-section-title">Leadership</h2>
            <div className="projects-grid projects-grid--featured">
              {featuredMembers.map((member) => (
                <Cell data={member} key={member.title} />
              ))}
            </div>
          </section>
        )}

        {otherMembers.length > 0 && (
          <section className="projects-other">
            <h2 className="projects-section-title">Members</h2>
            <div className="projects-grid">
              {otherMembers.map((member) => (
                <Cell data={member} key={member.title} />
              ))}
            </div>
          </section>
        )}
      </section>
    </PageWrapper>
  );
}
