import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import ClientScripts from '@/components/ClientScripts';

export const viewport = {
  themeColor: '#128A52',
};

export const metadata = {
  metadataBase: new URL('https://www.safemove-senegal.org'),
  title: 'Safe Move Sénégal, Association citoyenne pour la sécurité routière',
  description:
    "Safe Move Sénégal (SMS) est une association citoyenne de jeunes qui agit pour la sécurité routière et la mobilité durable au Sénégal : prévention, sensibilisation, formation et plaidoyer. 745 morts par an sur nos routes : agissons.",
  keywords:
    'sécurité routière Sénégal, mobilité durable, association sécurité routière Dakar, accidents de la route Sénégal, moto Jakarta casque, prévention routière, ANASER, sensibilisation piétons, bénévolat Sénégal',
  authors: [{ name: 'Safe Move Sénégal' }],
  robots: 'index, follow, max-image-preview:large',
  alternates: { canonical: 'https://www.safemove-senegal.org/' },
  openGraph: {
    type: 'website',
    siteName: 'Safe Move Sénégal',
    locale: 'fr_SN',
    url: 'https://www.safemove-senegal.org/',
    title: 'Safe Move Sénégal, Chaque geste compte pour une mobilité sûre',
    description:
      "Association citoyenne pour la sécurité routière et la mobilité durable au Sénégal. 8 concepts d'action sur le terrain : Jakarta, taxis, piétons, charretiers, routiers, élèves, familles.",
    images: [{ url: '/assets/images/campagnes/pietons/pietons-01.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safe Move Sénégal, Chaque geste compte pour une mobilité sûre',
    description:
      'Sécurité routière et mobilité durable au Sénégal : prévenir, sensibiliser, former, innover, mobiliser, plaider.',
    images: ['/assets/images/campagnes/pietons/pietons-01.webp'],
  },
  icons: {
    icon: '/assets/images/mark.svg',
    type: 'image/svg+xml',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Bootstrap core CSS */}
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        {/* Additional CSS Files */}
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/templatemo-onix-digital.css" />
        <link rel="stylesheet" href="/assets/css/animated.css" />
        <link rel="stylesheet" href="/assets/css/owl.css" />
        {/* Charte graphique Safe Move Sénégal (surcouche, toujours en dernier) */}
        <link rel="stylesheet" href="/assets/css/sms-brand.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: 'Safe Move Sénégal',
              alternateName: 'SMS',
              url: 'https://www.safemove-senegal.org/',
              logo: 'https://www.safemove-senegal.org/assets/images/mark.svg',
              email: 'contact@safemove-senegal.org',
              slogan: 'Chaque geste compte pour une mobilité sûre.',
              description:
                "Association citoyenne portée par des jeunes, Safe Move Sénégal agit pour la sécurité routière et la mobilité durable au Sénégal : prévention, sensibilisation de proximité, formation des acteurs de la mobilité, innovation locale et plaidoyer.",
              foundingDate: '2025',
              sameAs: [
                'https://www.facebook.com/share/1EfSYywrop/?mibextid=wwXIfr',
                'https://www.instagram.com/safemovesenegal',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dakar',
                addressCountry: 'SN',
              },
              areaServed: { '@type': 'Country', name: 'Sénégal' },
              knowsAbout: [
                'Sécurité routière',
                'Mobilité durable',
                'Prévention des accidents de la route',
                'Éducation routière en milieu scolaire',
                'Sensibilisation des conducteurs de moto Jakarta',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Informations et partenariats',
                email: 'contact@safemove-senegal.org',
                availableLanguage: ['fr', 'wo'],
              },
            }),
          }}
        />
      </head>
      <body>
        <a className="sms-skip-link" href="#top">
          Aller au contenu principal
        </a>
        <Preloader />
        <Header />
        {children}
        <Footer />
        <ClientScripts />
      </body>
    </html>
  );
}
