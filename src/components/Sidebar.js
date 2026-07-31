import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/actions', label: 'Nos 8 actions' },
  { href: '/association', label: "L'association" },
  { href: '/chiffres', label: 'Les chiffres' },
  { href: '/campagnes', label: 'Campagnes vidéo' },
  { href: '/s-engager', label: "S'engager" },
  { href: '/contact', label: 'Contact' },
];

export default function Sidebar({ title = 'Navigation', links = navLinks }) {
  return (
    <aside className="sms-sidebar">
      <h3>{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
