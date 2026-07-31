import Link from 'next/link';

export default function RelatedLinks({ links }) {
  return (
    <section className="sms-related">
      <div className="container">
        <h2>Aller plus loin</h2>
        <div className="sms-related-grid">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
