const EMAILS = [
  {
    label: 'FSU-related matters',
    email: 'songheehan@fsu.edu',
  },
  {
    label: 'Non-FSU matters',
    email: 'songpublic9@gmail.com',
  },
];

export default function EmailLink() {
  return (
    <div className="contact-email-list">
      {EMAILS.map(({ label, email }) => {
        const [prefix, domain] = email.split('@');

        return (
          <div className="contact-email-container" key={email}>
            <div className="contact-email-label">{label}</div>
            <a href={`mailto:${email}`} className="contact-email-link">
              <span className="contact-email-prefix">{prefix}</span>
              <span className="contact-email-domain">@{domain}</span>
            </a>
          </div>
        );
      })}
    </div>
  );
}
