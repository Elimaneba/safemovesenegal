'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/campagnes', label: 'Campagnes' },
  { href: '/actions', label: 'Actions' },
  { href: '/association', label: "L'association" },
  { href: '/chiffres', label: 'Les chiffres' },
  { href: '/s-engager', label: "S'engager" },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link href="/" className="logo" aria-label="Safe Move Sénégal, accueil">
                <img src="/assets/images/mark.svg" alt="Logo Safe Move Sénégal : double chevron jaune et blanc sur carré vert" width="42" height="42" />
                <span className="sms-wordmark">
                  <span className="nm">Safe Move</span>
                  <span className="sb">Sénégal</span>
                </span>
              </Link>
              <ul className="nav">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={isActive(item.href) ? 'active' : ''}>
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <div className="main-red-button-hover">
                    <Link href="/s-engager">Je m'engage</Link>
                  </div>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
