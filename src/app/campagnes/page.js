import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import Sidebar from '@/components/Sidebar';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: 'Campagnes vidéo, Safe Move Sénégal',
  description:
    "Les campagnes vidéo de Safe Move Sénégal : des films courts tournés pour la route sénégalaise. Moto Jakarta, taxi, école, famille, charrettes, routiers, transport en commun.",
  alternates: { canonical: 'https://www.safemove-senegal.org/campagnes' },
};

const campaignVideos = [
  {
    title: 'Moto Jakarta, « Le casque, c\'est non négociable »',
    poster: '/assets/images/campagnes/moto-jakarta/moto-jakarta-02.webp',
    src: '/assets/video/campagne-moto-jakarta.webm',
    downloadLabel: 'Télécharger la campagne moto Jakarta',
    actionHref: '/actions/moto-jakarta',
    actionLabel: 'Découvrir le dispositif Góorgóorlu Certifié →',
  },
  {
    title: 'Taxi, « Attache-toi. Attache ton client. »',
    poster: '/assets/images/campagnes/taxi/taxi-02.webp',
    src: '/assets/video/campagne-taxi.webm',
    downloadLabel: 'Télécharger la campagne taxi',
    actionHref: '/actions/taxi',
    actionLabel: 'Découvrir le dispositif Diisoo Taxi →',
  },
  {
    title: 'Élèves, « Zone scolaire = vitesse réduite »',
    poster: '/assets/images/campagnes/eleves/eleves-02.webp',
    src: '/assets/video/campagne-eleves.webm',
    downloadLabel: 'Télécharger la campagne scolaire',
    actionHref: '/actions/eleves',
    actionLabel: 'Découvrir le dispositif Pencc Ndongo →',
  },
  {
    title: 'Famille, « Ceinture. Téléphone. Vitesse. »',
    poster: '/assets/images/campagnes/familles/familles-02.webp',
    src: '/assets/video/campagne-famille.webm',
    downloadLabel: 'Télécharger la campagne familles',
    actionHref: '/actions/familles',
    actionLabel: 'Découvrir le dispositif Njaboot bu Wóór →',
  },
  {
    title: 'Charrettes, « On te voit. Tu rentres bien. »',
    poster: '/assets/images/campagnes/charrettes/charrettes-02.webp',
    src: '/assets/video/campagne-charrettes.webm',
    downloadLabel: 'Télécharger la campagne charrettes',
    actionHref: '/actions/charrettes',
    actionLabel: 'Découvrir le dispositif Charrette bu Leer →',
  },
  {
    title: 'Routiers, « Une pause. Pas un risque. »',
    poster: '/assets/images/campagnes/routiers/routiers-02.webp',
    src: '/assets/video/campagne-routiers.webm',
    downloadLabel: 'Télécharger la campagne routiers',
    actionHref: '/actions/routiers',
    actionLabel: 'Découvrir le dispositif Noflaay Routier →',
  },
  {
    title: 'Transport en commun, « Lui, il gère. Et il gère bien. »',
    poster: '/assets/images/campagnes/transport-commun/transport-commun-02.webp',
    src: '/assets/video/campagne-transport-commun.webm',
    downloadLabel: 'Télécharger la campagne transport en commun',
    actionHref: '/actions/transport-commun',
    actionLabel: 'Découvrir le dispositif Coxeur bu Wóór →',
  },
];

export default function CampagnesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos campagnes"
        title="Regarde 30 secondes. <em>Tu ne conduiras plus pareil.</em>"
        intro="Des films courts, tournés pour la route sénégalaise : la moto Jakarta, le taxi, l'école, la famille, les charrettes, les routiers, le transport en commun. Des mots simples, des gestes qui sauvent."
      />
      <Breadcrumb
        items={[
          { href: '/', label: 'Accueil' },
          { label: 'Campagnes', current: true },
        ]}
      />

      <section className="sms-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="sms-prose-intro">
                Les campagnes vidéo de Safe Move Sénégal ne sont pas des publicités. Ce sont des histoires. 30 secondes qui regardent le conducteur dans les yeux et lui disent : ce geste, celui que tu fais sans y penser, c'est celui qui décide. Chaque film est co-construit avec des créateurs sénégalais, photographes, vidéastes, motion designers, et systématiquement crédité.
              </p>

              {campaignVideos.map((v) => (
                <div key={v.title}>
                  <h2 dangerouslySetInnerHTML={{ __html: v.title }} />
                  <div className="sms-page-video">
                    <video controls preload="metadata" playsInline poster={v.poster}>
                      <source src={v.src} type="video/webm" />
                      Votre navigateur ne peut pas lire cette vidéo.{' '}
                      <a href={v.src}>{v.downloadLabel}</a>.
                    </video>
                  </div>
                  <p>
                    <Link href={v.actionHref}>{v.actionLabel}</Link>
                  </p>
                </div>
              ))}

              <div className="sms-cta-band">
                <h2>Tu veux créer la prochaine campagne ?</h2>
                <div className="main-blue-button-hover">
                  <Link href="/s-engager">Devenir créateur SMS</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: '/actions', label: 'Nos 8 actions de terrain' },
          { href: '/association', label: 'Qui sommes-nous' },
          { href: '/chiffres', label: 'Les chiffres du Sénégal' },
          { href: '/s-engager', label: 'Devenir créateur SMS' },
        ]}
      />
    </>
  );
}
