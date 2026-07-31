import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import Sidebar from '@/components/Sidebar';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: "S'engager, Bénévole, partenaire, créateur | Safe Move Sénégal",
  description:
    "Trois façons de s'engager avec Safe Move Sénégal : bénévole de terrain, partenaire institutionnel ou créateur de contenu. Rejoins le mouvement pour des routes plus sûres au Sénégal.",
  alternates: { canonical: 'https://www.safemove-senegal.org/s-engager' },
};

export default function SEngagerPage() {
  return (
    <>
      <PageHero
        eyebrow="S'engager"
        title="Trois façons de <em>faire ta part</em> dès <span>aujourd'hui</span>"
        intro="Bénévole, partenaire ou créateur : il n'y a pas de petit engagement. Quelques heures par mois ou un partenariat structuré, chaque contribution compte pour transformer la route au Sénégal."
        image="/assets/images/campagnes/familles/familles-01.webp"
        imageAlt="Affiche de campagne familles, pacte Safe Move"
      />
      <Breadcrumb
        items={[
          { href: '/', label: 'Accueil' },
          { label: "S'engager", current: true },
        ]}
      />

      <section className="sms-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="sms-prose-intro">
                Safe Move Sénégal n'est pas une organisation qui cherche des spectateurs. Nous cherchons des acteurs. Des personnes qui donnent quelques heures, des institutions qui s'engagent, des créateurs qui transforment un message en émotion. Trois portes d'entrée, un même mouvement.
              </p>

              <h2>Porte d'entrée 01, Bénévole &amp; relais</h2>
              <p><strong>Quelques heures par mois, dans ton quartier.</strong> Le bénévolat de terrain est le cœur de Safe Move Sénégal. Tu rejoins une activité concrète, encadrée par un référent SMS :</p>
              <ul>
                <li>Brigades piétons aux heures de pointe (Jaar-Jaar bu Wóór)</li>
                <li>Certification des motos Jakarta en gare (Góorgóorlu Certifié)</li>
                <li>Équipement des charrettes les jours de lumo (Charrette bu Leer)</li>
                <li>Points de pause pour les routiers longue distance (Noflaay Routier)</li>
                <li>Animation d'un club scolaire (Pencc Ndongo)</li>
              </ul>
              <p>La formation est assurée par SMS. Tu choisis ton créneau, ta zone et ton dispositif. Tu n'as pas besoin d'expérience préalable, juste d'envie.</p>

              <h2>Porte d'entrée 02, Partenaire</h2>
              <p><strong>Écoles, collectivités, syndicats, entreprises.</strong> Le partenariat structurel permet d'ancrer la sécurité routière dans la durée :</p>
              <ul>
                <li>Clubs scolaires Pencc Ndongo dans ton établissement</li>
                <li>Causeries Diisoo Taxi dans ta station de taxi</li>
                <li>Points de pause Noflaay Routier dans ta station-service</li>
                <li>Données et plaidoyer partagés avec ton institution</li>
                <li>Co-financement d'un dispositif ou d'une campagne</li>
              </ul>
              <p>Les partenaires sont des co-constructeurs, pas des financeurs passifs. Ils participent au design des actions et à leur évaluation.</p>

              <h2>Porte d'entrée 03, Créateur SMS</h2>
              <p><strong>Ta créativité change des comportements.</strong> Photographes, vidéastes, illustrateurs, rappeurs, comédiens de théâtre forum, motion designers : vous êtes des membres à part entière du mouvement, pas des prestataires.</p>
              <ul>
                <li>Mention systématique du créateur sur chaque œuvre</li>
                <li>Co-construction des briefs créatifs avec l'équipe SMS</li>
                <li>Accès au réseau et aux événements du mouvement</li>
                <li>Label « Créateur SMS » pour les collaborateurs réguliers</li>
              </ul>

              <blockquote>Nous ne consommons pas la créativité. Nous la mettons en lumière. Chaque œuvre est créditée, chaque brief est co-construit.</blockquote>

              <h2>Comment postuler ?</h2>
              <p>
                Le plus simple : remplir le <Link href="/contact">formulaire de contact</Link> en indiquant ta porte d'entrée (bénévole, partenaire ou créateur). Tu peux aussi écrire directement à <a href="mailto:contact@safemove-senegal.org">contact@safemove-senegal.org</a>. Un référent SMS te répondra sous 72 heures pour caler un premier échange.
              </p>

              <div className="sms-cta-band">
                <h2>Prêt à faire le premier pas ?</h2>
                <div className="main-blue-button-hover">
                  <Link href="/contact">Contacte-nous</Link>
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
          { href: '/campagnes', label: 'Voir les campagnes vidéo' },
          { href: '/association', label: 'Qui sommes-nous' },
          { href: '/contact', label: 'Nous contacter' },
        ]}
      />
    </>
  );
}
