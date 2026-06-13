import type { Metadata } from 'next';
import PageWrapper from '@/components/Template/PageWrapper';
import writing from '@/data/writing';
import { createPageMetadata } from '@/lib/metadata';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: 'Publications',
  description:
    'Selected recent publications by Songhee Han on AI in education, learning analytics, MOOCs, and educational chatbots.',
  path: '/writing/',
});

interface WritingItemProps {
  item: (typeof writing)[number];
  showDate?: boolean;
}

function WritingItem({ item, showDate = true }: WritingItemProps) {
  const content = (
    <>
      {showDate && item.date && (
        <time className="writing-date" dateTime={item.date}>
          {formatDate(item.date)}
        </time>
      )}
      <h2 className="writing-title">{item.title}</h2>
      <p className="writing-description">{item.description}</p>
      <span className="writing-external" aria-hidden="true">
        ↗
      </span>
    </>
  );

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="writing-item"
    >
      {content}
    </a>
  );
}

export default function WritingPage() {
  const dated = writing
    .filter((item) => item.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const undated = writing.filter((item) => !item.date);

  return (
    <PageWrapper>
      <article className="writing-page">
        <header className="writing-header">
          <div className="writing-header-row">
            <h1 className="page-title">Publications</h1>
          </div>
          <p className="page-subtitle writing-intro">
            Selected recent publications are listed here. For a fuller and
            current publication record, see{' '}
            <a
              href="https://scholar.google.com/citations?user=nbDDsAsAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
            .
          </p>
        </header>

        <div className="writing-list">
          {dated.map((item) => (
            <WritingItem key={item.url} item={item} />
          ))}

          {undated.length > 0 && (
            <>
              <div className="writing-section-label">Guides</div>
              {undated.map((item) => (
                <WritingItem key={item.url} item={item} showDate={false} />
              ))}
            </>
          )}
        </div>
      </article>
    </PageWrapper>
  );
}
