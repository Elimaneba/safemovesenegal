import ActionLayout from '@/components/ActionLayout';

export const metadata = {
  title: 'Jaar-Jaar bu Wóór, Brigades piétons aux carrefours à risque | Safe Move Sénégal',
  description:
    "Jaar-Jaar bu Wóór : brigades de 4 à 6 bénévoles en gilets réfléchissants aux carrefours à risque de Dakar, 7h-9h et 17h-19h. Accompagnement bienveillant, jamais de verbalisation. « Traverse bien. On t'accompagne. »",
  alternates: { canonical: 'https://www.safemove-senegal.org/actions/pietons' },
};

const gallery = Array.from({ length: 10 }, (_, i) => ({
  src: `/assets/images/campagnes/pietons/pietons-${String(i + 1).padStart(2, '0')}.webp`,
  alt: `Affiche piétons ${String(i + 1).padStart(2, '0')}`,
}));

export default function PietonsPage() {
  return (
    <ActionLayout
      eyebrow="Piétons · 2x par semaine"
      titleHtml="Jaar-Jaar bu <em>Wóór</em>"
      intro="« Traverse bien. On t'accompagne. » Brigades de 4 à 6 bénévoles en gilets réfléchissants aux carrefours à risque, 7h-9h et 17h-19h. Accompagnement bienveillant, jamais de verbalisation."
      image="/assets/images/campagnes/pietons/pietons-01.webp"
      imageAlt="Affiche de campagne piétons, passage piéton"
      breadcrumbLabel="Jaar-Jaar bu Wóór"
      proseIntro="Le piéton est l'usager le plus vulnérable de la route. Sans protection, sans carrosserie, sans casque. Aux carrefours à risque de Dakar, traverser peut devenir un défi quotidien. Les brigades Jaar-Jaar bu Wóór ne jugent pas : elles accompagnent, elles protègent, elles rendent le passage piéton naturel."
      ctaTitle="Deviens brigadier piéton dans ton quartier."
      gallery={gallery}
    >
      <h2>Le problème</h2>
      <p>Les piétons représentent une part importante des victimes d'accidents de la route en milieu urbain. Aux heures de pointe, les carrefours deviennent chaotiques : véhicules pressés, piétons invisibles, passages piétons ignorés. Les enfants, les personnes âgées et les personnes à mobilité réduite sont les plus exposés.</p>

      <h2>La solution</h2>
      <p><strong>Jaar-Jaar bu Wóór</strong> (« Marche fiable » en wolof) déploie des brigades de <strong>4 à 6 bénévoles en gilets réfléchissants</strong> aux carrefours les plus à risque, deux fois par semaine, aux heures de pointe :</p>
      <ul>
        <li><strong>7h-9h</strong> : accompagnement des enfants vers l'école et des travailleurs vers le transport.</li>
        <li><strong>17h-19h</strong> : accompagnement des retours à domicile, moment le plus accidentogène.</li>
      </ul>
      <p>Les brigadiers ne verbalisent jamais. Ils accompagnent les piétons à travers le passage, font signe aux véhicules de ralentir, et distribuent un mot souriant aux conducteurs qui s'arrêtent. L'approche est <strong>100 % bienveillante</strong> : on ne sanctionne pas, on éduque par l'exemple.</p>

      <blockquote>« Le passage piéton n'est pas un détail. C'est ta priorité. »</blockquote>

      <h2>Le déroulement type</h2>
      <ol>
        <li><strong>Identification des carrefours à risque</strong> (avec la commune et les données d'accidents).</li>
        <li><strong>Formation des brigadiers</strong> (2h) : posture, signaux, gestion des conflits, premiers secours de base.</li>
        <li><strong>Déploiement</strong> : 4-6 bénévoles en gilets, avec panneaux portatifs « Merci de vous arrêter ».</li>
        <li><strong>Retour d'expérience</strong> : compte-rendu hebdomadaire (nombre de piétons accompagnés, incidents, observations).</li>
      </ol>

      <div className="sms-key-facts">
        <h3>Chiffres clés du dispositif</h3>
        <dl>
          <dt>4-6</dt><dd>Bénévoles par brigade</dd>
          <dt>2x/semaine</dt><dd>Fréquence par carrefour</dd>
          <dt>7h-9h / 17h-19h</dt><dd>Tranches horaires aux heures de pointe</dd>
          <dt>0</dt><dd>Verbalisation, 100 % bienveillance</dd>
        </dl>
      </div>
    </ActionLayout>
  );
}
