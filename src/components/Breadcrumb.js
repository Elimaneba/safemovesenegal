import Link from 'next/link';

export default function Breadcrumb({ items }) {
  return (
    <nav className="sms-breadcrumb" aria-label="Fil d'Ariane">
      <div className="container">
        <ol>
          {items.map((item, i) => (
            <li key={i} aria-current={item.current ? 'page' : undefined}>
              {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
