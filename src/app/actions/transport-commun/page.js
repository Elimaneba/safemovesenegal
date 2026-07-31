import ActionLayout from '@/components/ActionLayout';

export const metadata = {
  title: 'Coxeur bu Wóór, Formation des apprentis du transport en commun | Safe Move Sénégal',
  description:
    "Coxeur bu Wóór : formation d'une heure en gare routière pour les apprentis des cars rapides et Ndiaga Ndiaye. Surcharge, ouverture des portes, premiers réflexes. Badge remis et suivi.",
  alternates: { canonical: 'https://www.safemove-senegal.org/actions/transport-commun' },
};

const gallery = Array.from({ length: 10 }, (_, i) => ({
  src: `/assets/images/campagnes/transport-commun/transport-commun-${String(i + 1).padStart(2, '0')}.webp`,
  alt: `Affiche transport en commun ${String(i + 1).padStart(2, '0')}`,
}));

export default function TransportCommunPage() {
  return (
    <ActionLayout
      eyebrow="Apprentis · Trimestriel"
      titleHtml="Coxeur bu <em>Wóór</em>"
      intro="« Lui, il gère. Et il gère bien. » Formation d'une heure en gare routière pour les apprentis du transport en commun : surcharge, ouverture sécurisée des portes, premiers réflexes. Badge remis et suivi."
      image="/assets/images/campagnes/transport-commun/transport-commun-01.webp"
      imageAlt="Affiche de campagne transport en commun"
      breadcrumbLabel="Coxeur bu Wóór"
      proseIntro="Les apprentis des cars rapides et des Ndiaga Ndiaye sont les yeux et les mains du transport en commun sénégalais. Ce sont eux qui ouvrent les portes, gèrent la montée et la descente des passagers, signalent les arrêts. Leur rôle est crucial, et pourtant, ils ne reçoivent presque aucune formation structurée. Coxeur bu Wóór change cela."
      ctaTitle="Tu es apprenti ou transporteur ? Rejoins le programme Coxeur bu Wóór."
      gallery={gallery}
    >
      <h2>Le problème</h2>
      <p>Les accidents dans le transport en commun surviennent souvent à la montée ou à la descente : portes ouvertes en mouvement, surcharge de voyageurs debout, arrêts brutaux. Les apprentis, souvent jeunes et sans formation, reproduisent les gestes qu'ils ont vus chez leurs aînés, y compris les mauvais.</p>

      <h2>La solution</h2>
      <p><strong>Coxeur bu Wóór</strong> (« Apprenti fiable » en wolof) propose une formation courte et pratique en gare routière, une fois par trimestre. Au programme :</p>
      <ul>
        <li><strong>Surcharge :</strong> reconnaître le nombre maximal de passagers debout, refuser poliment l'excès.</li>
        <li><strong>Ouverture des portes :</strong> ne jamais ouvrir en mouvement, vérifier la descente complète avant le départ.</li>
        <li><strong>Premiers réflexes :</strong> quoi faire en cas d'accident, d'incendie ou de malaise d'un passager.</li>
        <li><strong>Communication :</strong> annoncer les arrêts clairement, garder le calme avec les passagers difficiles.</li>
      </ul>
      <p>À l'issue de la formation, l'apprenti reçoit un <strong>badge « Coxeur bu Wóór »</strong> et est inscrit dans un registre de suivi. Les transporteurs partenaires s'engagent à n'employer que des apprentis certifiés.</p>

      <blockquote>« Lui, il gère. Et il gère bien. », c'est ainsi que les passagers doivent pouvoir penser en voyant un apprenti certifié.</blockquote>

      <h2>Le déroulement type</h2>
      <ol>
        <li><strong>Convocation en gare</strong> (jour de faible affluence) : groupe de 15-20 apprentis.</li>
        <li><strong>Formation interactive</strong> (1h) : présentation, démonstrations, jeux de rôle, quiz.</li>
        <li><strong>Remise du badge</strong> et photo pour le registre.</li>
        <li><strong>Suivi trimestriel</strong> : contrôle de la présence du badge et évaluation des retours passagers.</li>
      </ol>

      <div className="sms-key-facts">
        <h3>Chiffres clés du dispositif</h3>
        <dl>
          <dt>1h</dt><dd>Durée de la formation en gare</dd>
          <dt>Trimestriel</dt><dd>Une session par trimestre par gare partenaire</dd>
          <dt>15-20</dt><dd>Apprentis formés par session</dd>
          <dt>1 badge</dt><dd>Visibilité permanente sur l'uniforme</dd>
        </dl>
      </div>
    </ActionLayout>
  );
}
