import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import Sidebar from '@/components/Sidebar';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: 'Nos actions de terrain, Safe Move Sénégal',
  description:
    "Découvrez les 8 dispositifs de Safe Move Sénégal : certification des motos Jakarta, causeries taxi, formation des apprentis, équipement des charrettes, brigades piétons, points de pause routiers, clubs scolaires et pactes familiaux.",
  alternates: { canonical: 'https://www.safemove-senegal.org/actions' },
};

const actions = [
  { slug: 'moto-jakarta', img: '/assets/images/campagnes/moto-jakarta/moto-jakarta-01.webp', alt: 'Campagne moto Jakarta, Góorgóorlu Certifié', tag: 'Moto Jakarta · Mensuel', title: 'Góorgóorlu Certifié', desc: 'Certification volontaire en gare : casque, mécanique, papiers. Le sticker « Certifié SMS » devient un argument commercial.' },
  { slug: 'taxi', img: '/assets/images/campagnes/taxi/taxi-01.webp', alt: 'Campagne taxis, Diisoo Taxi', tag: 'Taximen · Mensuel', title: 'Diisoo Taxi', desc: 'Causeries de 15 à 20 minutes en station, un thème par mois, macaron pare-brise et portrait du « Chauffeur Exemplaire ».' },
  { slug: 'transport-commun', img: '/assets/images/campagnes/transport-commun/transport-commun-01.webp', alt: 'Campagne transport en commun, Coxeur bu Wóór', tag: 'Apprentis · Trimestriel', title: 'Coxeur bu Wóór', desc: "Formation d'une heure en gare routière : surcharge, ouverture sécurisée des portes, premiers réflexes. Badge remis et suivi." },
  { slug: 'charrettes', img: '/assets/images/campagnes/charrettes/charrettes-01.webp', alt: 'Campagne charretiers, Charrette bu Leer', tag: 'Charretiers · Jours de marché', title: 'Charrette bu Leer', desc: 'Pose gratuite de bandes réfléchissantes les jours de lumo à Thiès, Saint-Louis et Ziguinchor. Une solution simple qui sauve des vies.' },
  { slug: 'pietons', img: '/assets/images/campagnes/pietons/pietons-01.webp', alt: 'Campagne piétons, Jaar-Jaar bu Wóór', tag: 'Piétons · 2x par semaine', title: 'Jaar-Jaar bu Wóór', desc: 'Brigades de 4 à 6 bénévoles en gilets aux carrefours à risque, 7h-9h et 17h-19h. Accompagnement bienveillant, jamais de verbalisation.' },
  { slug: 'routiers', img: '/assets/images/campagnes/routiers/routiers-01.webp', alt: 'Campagne routiers, Noflaay Routier', tag: 'Routiers · Mensuel', title: 'Noflaay Routier', desc: 'Points de pause en station-service sur les axes Dakar-Thiès, Diourbel et Kaolack : café offert, auto-évaluation fatigue, règle des 2 heures.' },
  { slug: 'eleves', img: '/assets/images/campagnes/eleves/eleves-01.webp', alt: 'Campagne scolaire, Pencc Ndongo', tag: 'Élèves · Club périscolaire', title: 'Pencc Ndongo', desc: "Club animé par des élèves capitaines formés par SMS : affiches, sketchs, quiz, puis restitution trimestrielle inter-écoles." },
  { slug: 'familles', img: '/assets/images/campagnes/familles/familles-01.webp', alt: 'Campagne familles, Njaboot bu Wóór', tag: 'Familles · Challenge continu', title: 'Njaboot bu Wóór', desc: 'Une famille signe un pacte en trois règles, ceinture, téléphone, vitesse, et le partage avec #PacteSafeMove.' },
];

const sidebarLinks = actions.map((a) => ({ href: `/actions/${a.slug}`, label: a.title }));

export default function ActionsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos actions"
        title="Huit dispositifs de terrain, <em>un public à la fois</em>"
        intro="Safe Move Sénégal ne fait pas de la sensibilisation en l'air. Chaque action cible un public précis, avec un format adapté, un rythme calé sur la vie réelle et un impact mesurable. Découvrez nos 8 concepts opérationnels."
      />
      <Breadcrumb
        items={[
          { href: '/', label: 'Accueil' },
          { label: 'Nos actions', current: true },
        ]}
      />

      <section className="sms-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="sms-prose-intro">
                La route sénégalaise tue 745 personnes par an. 90 % de ces accidents sont liés à des comportements humains. Plutôt que de dénoncer, Safe Move Sénégal agit : huit dispositifs concrets, pensés avec les usagers, pour les usagers. Chacun répond à un risque identifié et propose une solution simple, réutilisable et mesurable.
              </p>

              <div className="sms-actions-grid">
                {actions.map((a) => (
                  <Link key={a.slug} className="sms-action-card" href={`/actions/${a.slug}`}>
                    <div className="thumb">
                      <img src={a.img} alt={a.alt} width="640" height="640" loading="lazy" />
                    </div>
                    <div className="body">
                      <span className="tag">{a.tag}</span>
                      <h3>{a.title}</h3>
                      <p>{a.desc}</p>
                      <span className="more">Découvrir le dispositif</span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="sms-cta-band">
                <h2>Tu veux rejoindre une action sur le terrain ?</h2>
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
          { href: '/campagnes', label: 'Voir les campagnes vidéo' },
          { href: '/chiffres', label: 'Les chiffres du Sénégal' },
          { href: '/association', label: 'Qui sommes-nous' },
          { href: '/s-engager', label: 'Devenir bénévole' },
        ]}
      />
    </>
  );
}
