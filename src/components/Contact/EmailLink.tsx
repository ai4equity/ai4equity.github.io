const EMAIL = 'sh24br@fsu.edu';

export default function EmailLink() {
  const [prefix, domain] = EMAIL.split('@');

  return (
    <div className="contact-email-container">
      <a href={`mailto:${EMAIL}`} className="contact-email-link">
        <span className="contact-email-prefix">{prefix}</span>
        <span className="contact-email-domain">@{domain}</span>
      </a>
    </div>
  );
}
