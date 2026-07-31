import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import Sidebar from '@/components/Sidebar';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: "L'association, Safe Move Sénégal",
  description:
    "Safe Move Sénégal : une association citoyenne portée par des jeunes, née du terrain, qui agit pour la sécurité routière et la mobilité durable au Sénégal. Découvrez notre mission, nos valeurs et notre manifeste.",
  alternates: { canonical: 'https://www.safemove-senegal.org/association' },
};

const objectives = [
  { num: '10 000', label: 'Personnes sensibilisées dans 4 régions pilotes' },
  { num: '100', label: 'Jeunes leaders formés en sécurité routière' },
  { num: '30', label: 'Relais communautaires actifs dans les quartiers' },
  { num: '10', label: 'Écoles partenaires avec des clubs Pencc Ndongo' },
  { num: '10+', label: 'Partenariats clés (institutions, entreprises, syndicats)' },
  { num: '500+', label: 'Contenus produits pour les médias et réseaux sociaux' },
];

export default function AssociationPage() {
  return (
    <>
      <PageHero
        eyebrow="L'association"
        title="Se déplacer doit redevenir un <em>droit respecté</em>, pas un <span>risque assumé</span>"
        intro="Safe Move Sénégal (SMS) est une organisation citoyenne portée par des jeunes issus des programmes de développement communautaire et d'innovation sociale. Ce n'est pas une ONG venue de l'extérieur : c'est un mouvement né du terrain, ancré dans les réalités locales."
        image="/assets/images/campagnes/eleves/eleves-01.webp"
        imageAlt="Affiche Safe Move Sénégal pour les zones scolaires"
      />
      <Breadcrumb
        items={[
          { href: '/', label: 'Accueil' },
          { label: "L'association", current: true },
        ]}
      />

      <section className="sms-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="sms-prose-intro">
                Au Sénégal, l'insécurité routière est une crise silencieuse mais dévastatrice. Chaque jour, des vies sont brisées sur des routes qui auraient pu être sûres. Derrière les chiffres, un problème systémique : comportements à risque, faible culture de la sécurité, application inégale du code de la route, vétusté du parc roulant, absence d'éducation routière structurée. Les plus vulnérables, piétons, cyclistes, conducteurs de deux-roues, enfants scolarisés, paient le prix le plus lourd.
              </p>

              <h2>Notre mission</h2>
              <p>Safe Move Sénégal agit pour transformer les comportements, les mentalités et les politiques publiques, en plaçant les citoyens au cœur du changement. Six leviers structurent notre action :</p>
              <ul>
                <li><strong>Prévenir</strong>, Réduire les risques routiers auprès des jeunes, des piétons et des conducteurs de deux-roues, là où le danger est le plus concentré.</li>
                <li><strong>Sensibiliser</strong>, Des campagnes de proximité et des outils créatifs adaptés aux réalités locales : gares, marchés, carrefours, cours d'école.</li>
                <li><strong>Former</strong>, Former les acteurs de la mobilité, chauffeurs, apprentis, élèves, collectivités, forces de l'ordre, aux bonnes pratiques.</li>
                <li><strong>Innover</strong>, Proposer et expérimenter des solutions locales, participatives et réplicables : un badge, une bande réfléchissante, un pacte familial.</li>
                <li><strong>Mobiliser</strong>, Créer un réseau de jeunes leaders engagés pour des villes plus sûres, accessibles et inclusives, quartier par quartier.</li>
                <li><strong>Plaider</strong>, Porter la voix des usagers vulnérables pour des politiques publiques ambitieuses et une meilleure réglementation de la mobilité.</li>
              </ul>

              <h2>Nos valeurs</h2>
              <ul>
                <li><strong>Engagement citoyen</strong>, Nous croyons que chaque Sénégalais peut être acteur de la sécurité routière.</li>
                <li><strong>Co-création</strong>, Nous construisons avec celles et ceux qui vivent les problèmes, pas pour eux.</li>
                <li><strong>Pragmatisme mesurable</strong>, Chaque action doit avoir un impact concret et évaluable.</li>
                <li><strong>Solidarité</strong>, Nous priorisons les plus exposés : piétons, enfants, deux-roues, charretiers.</li>
                <li><strong>Intégrité</strong>, Ce que nous disons et ce que nous faisons sont une seule chose.</li>
              </ul>

              <blockquote>Au Sénégal, la route est devenue un lieu où l'on prie plus qu'on ne marche. Chaque croix au bord de la route raconte une vie arrêtée trop tôt. Nous refusons de regarder ailleurs : nous agissons ensemble pour que se déplacer ne soit plus un risque, mais un droit.</blockquote>

              <h2>Nos objectifs pour la première année</h2>
              <div className="sms-key-facts">
                <h3>Cap 2025</h3>
                <div className="sms-kf-grid">
                  {objectives.map((obj) => (
                    <div className="sms-kf-item" key={obj.num}>
                      <span className="sms-kf-num">{obj.num}</span>
                      <span className="sms-kf-label">{obj.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h2>Nos régions d'intervention</h2>
              <p>
                La première année cible 4 régions pilotes, avec des tournées organisées notamment sur les axes Dakar-Thiès, Diourbel et Kaolack, et des zones d'équipement des charretiers à Thiès, Saint-Louis et Ziguinchor. Le déploiement est progressif et documenté, pensé pour être répliqué partout au Sénégal.
              </p>

              <div className="sms-cta-band">
                <h2>Tu veux rejoindre le mouvement Safe Move Sénégal ?</h2>
                <div className="main-blue-button-hover">
                  <Link href="/s-engager">Je m'engage</Link>
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
          { href: '/chiffres', label: 'Les chiffres du Sénégal' },
          { href: '/campagnes', label: 'Voir les campagnes vidéo' },
          { href: '/s-engager', label: 'Devenir bénévole' },
        ]}
      />
    </>
  );
}
