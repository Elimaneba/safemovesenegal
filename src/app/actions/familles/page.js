import ActionLayout from '@/components/ActionLayout';

export const metadata = {
  title: 'Njaboot bu Wóór, Pacte familial de sécurité routière | Safe Move Sénégal',
  description:
    "Njaboot bu Wóór : une famille signe un pacte en trois règles, ceinture, téléphone, vitesse, et le partage avec #PacteSafeMove. « Notre famille. Notre pacte. Notre sécurité. »",
  alternates: { canonical: 'https://www.safemove-senegal.org/actions/familles' },
};

const gallery = Array.from({ length: 10 }, (_, i) => ({
  src: `/assets/images/campagnes/familles/familles-${String(i + 1).padStart(2, '0')}.webp`,
  alt: `Affiche familles ${String(i + 1).padStart(2, '0')}`,
}));

export default function FamillesPage() {
  return (
    <ActionLayout
      eyebrow="Familles · Challenge continu"
      titleHtml="Njaboot bu <em>Wóór</em>"
      intro="« Notre famille a un pacte. Ceinture. Téléphone. Vitesse. » Une famille signe un pacte en trois règles et le partage avec #PacteSafeMove. « Notre famille. Notre pacte. Notre sécurité. »"
      image="/assets/images/campagnes/familles/familles-01.webp"
      imageAlt="Affiche de campagne familles, pacte Safe Move"
      breadcrumbLabel="Njaboot bu Wóór"
      proseIntro="La route ne commence pas au volant. Elle commence à la maison, dans les conversations, dans les exemples que les parents donnent aux enfants. Quand un père boucle sa ceinture, ses enfants bouclent la leur. Quand une mère pose son téléphone en conduisant, ses enfants retiennent le geste. Njaboot bu Wóór formalise ce que chaque famille sait déjà : la sécurité est une affaire de famille."
      ctaTitle="Ta famille est prête à signer le pacte ?"
      video={{
        poster: '/assets/images/campagnes/familles/familles-02.webp',
        src: '/assets/video/campagne-famille.webm',
        downloadLabel: 'Télécharger la campagne familles',
      }}
      gallery={gallery}
    >
      <h2>Le problème</h2>
      <p>Les comportements à risque se transmettent en famille. Un parent qui ne boucle pas sa ceinture, qui tient son téléphone au volant, qui accélère en zone résidentielle, enseigne implicitement à ses enfants que ces comportements sont normaux. Les campagnes générales ne suffisent pas : il faut un engagement personnel, au niveau de la famille, pour changer les habitudes.</p>

      <h2>La solution</h2>
      <p><strong>Njaboot bu Wóór</strong> (« Famille fiable » en wolof) invite chaque famille à signer un <strong>pacte en trois règles</strong> :</p>
      <ul>
        <li><strong>Ceinture :</strong> « Chaque trajet, chaque passager, ceinture bouclée. Même pour 500 mètres. »</li>
        <li><strong>Téléphone :</strong> « Pas de téléphone au volant. Un message peut attendre. Une vie, non. »</li>
        <li><strong>Vitesse :</strong> « On respecte les limitations. Dans les quartiers, on ralentit. »</li>
      </ul>
      <p>La famille signe le pacte (physiquement ou en ligne), le photographie et le partage avec le hashtag <strong>#PacteSafeMove</strong>. Le défi est continu : chaque mois, SMS met en lumière les nouvelles familles engagées et partage leurs témoignages.</p>

      <blockquote>« Notre famille a un pacte. Ceinture. Téléphone. Vitesse. Trois règles. Une vie. »</blockquote>

      <h2>Le déroulement type</h2>
      <ol>
        <li><strong>Découverte du pacte</strong> : via les réseaux sociaux, un événement SMS, ou le site web.</li>
        <li><strong>Signature</strong> : la famille signe le pacte (formulaire en ligne ou papier lors d'un événement).</li>
        <li><strong>Partage</strong> : photo du pacte signé avec #PacteSafeMove sur les réseaux sociaux.</li>
        <li><strong>Mise en lumière</strong> : SMS partage le témoignage de la famille sur ses canaux.</li>
      </ol>

      <div className="sms-key-facts">
        <h3>Chiffres clés du dispositif</h3>
        <dl>
          <dt>3 règles</dt><dd>Ceinture, téléphone, vitesse</dd>
          <dt>#PacteSafeMove</dt><dd>Hashtag officiel du challenge</dd>
          <dt>Continu</dt><dd>Pas de date limite, le pacte est permanent</dd>
          <dt>Famille</dt><dd>Unité d'engagement : tous les membres signent</dd>
        </dl>
      </div>
    </ActionLayout>
  );
}
