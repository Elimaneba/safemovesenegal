import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import Sidebar from '@/components/Sidebar';
import RelatedLinks from '@/components/RelatedLinks';

const sidebarLinks = [
  { href: '/actions/moto-jakarta', label: 'Góorgóorlu Certifié' },
  { href: '/actions/taxi', label: 'Diisoo Taxi' },
  { href: '/actions/transport-commun', label: 'Coxeur bu Wóór' },
  { href: '/actions/charrettes', label: 'Charrette bu Leer' },
  { href: '/actions/pietons', label: 'Jaar-Jaar bu Wóór' },
  { href: '/actions/routiers', label: 'Noflaay Routier' },
  { href: '/actions/eleves', label: 'Pencc Ndongo' },
  { href: '/actions/familles', label: 'Njaboot bu Wóór' },
];

export default function ActionLayout({
  eyebrow,
  titleHtml,
  intro,
  image,
  imageAlt,
  breadcrumbLabel,
  proseIntro,
  children,
  ctaTitle,
  video,
  gallery,
  keyFacts,
  canonical,
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={titleHtml}
        intro={intro}
        image={image}
        imageAlt={imageAlt}
      />
      <Breadcrumb
        items={[
          { href: '/', label: 'Accueil' },
          { href: '/actions', label: 'Nos actions' },
          { label: breadcrumbLabel, current: true },
        ]}
      />

      <section className="sms-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="sms-prose-intro">{proseIntro}</p>

              {children}

              {video && (
                <>
                  <h2>Vidéo de campagne</h2>
                  <div className="sms-page-video">
                    <video controls preload="metadata" playsInline poster={video.poster}>
                      <source src={video.src} type="video/webm" />
                      Votre navigateur ne peut pas lire cette vidéo.{' '}
                      <a href={video.src}>{video.downloadLabel}</a>.
                    </video>
                  </div>
                </>
              )}

              {gallery && gallery.length > 0 && (
                <>
                  <h2>Galerie d'affiches</h2>
                  <div className="sms-gallery">
                    {gallery.map((g, i) => (
                      <figure key={i}>
                        <img src={g.src} alt={g.alt} width="640" height="640" loading="lazy" />
                      </figure>
                    ))}
                  </div>
                </>
              )}

              <div className="sms-cta-band">
                <h2>{ctaTitle}</h2>
                <div className="main-blue-button-hover">
                  <Link href="/s-engager">Je m'engage</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <Sidebar title="Les 8 dispositifs" links={sidebarLinks} />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: '/actions', label: 'Toutes nos actions' },
          { href: '/campagnes', label: 'Voir les campagnes vidéo' },
          { href: '/chiffres', label: 'Les chiffres du Sénégal' },
          { href: '/s-engager', label: 'Devenir bénévole' },
        ]}
      />
    </>
  );
}
