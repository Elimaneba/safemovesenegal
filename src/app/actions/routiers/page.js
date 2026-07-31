import ActionLayout from '@/components/ActionLayout';

export const metadata = {
  title: 'Noflaay Routier, Points de pause pour les routiers longue distance | Safe Move Sénégal',
  description:
    "Noflaay Routier : points de pause en station-service sur les axes Dakar-Thiès, Diourbel et Kaolack. Café offert, auto-évaluation fatigue, règle des 2 heures. « Une pause. Pas un risque. »",
  alternates: { canonical: 'https://www.safemove-senegal.org/actions/routiers' },
};

const gallery = Array.from({ length: 10 }, (_, i) => ({
  src: `/assets/images/campagnes/routiers/routiers-${String(i + 1).padStart(2, '0')}.webp`,
  alt: `Affiche routiers ${String(i + 1).padStart(2, '0')}`,
}));

export default function RoutiersPage() {
  return (
    <ActionLayout
      eyebrow="Routiers · Mensuel"
      titleHtml="Noflaay <em>Routier</em>"
      intro="« Une pause. Pas un risque. » Points de pause en station-service sur les axes Dakar-Thiès, Diourbel et Kaolack : café offert, auto-évaluation fatigue, règle des 2 heures."
      image="/assets/images/campagnes/routiers/routiers-01.webp"
      imageAlt="Affiche de campagne routiers, fatigue au volant"
      breadcrumbLabel="Noflaay Routier"
      proseIntro="Les routiers longue distance sont les héros invisibles de l'économie sénégalaise. Ils livrent, ils approvisionnent, ils connectent les régions. Mais 72 à 75 % des accidents les plus mortels surviennent la nuit, entre 22h et 6h, souvent à cause de la fatigue. Noflaay Routier dit une chose simple : s'arrêter n'est pas perdre du temps, c'est sauver sa vie."
      ctaTitle="Tu es routier ou gérant de station ? Deviens partenaire de Noflaay Routier."
      gallery={gallery}
    >
      <h2>Le problème</h2>
      <p>La fatigue au volant est un tueur silencieux. Les routiers qui parcourent de longues distances, Dakar-Thiès, Diourbel, Kaolack, roulent parfois 10 à 12 heures d'affilée. Les micro-sommeils de quelques secondes suffisent à provoquer un accident fatal. La pression économique pousse à rouler toujours plus, à s'arrêter toujours moins.</p>

      <h2>La solution</h2>
      <p><strong>Noflaay Routier</strong> (« Repos du routier » en wolof) installe des <strong>points de pause</strong> dans des stations-service partenaires, une fois par mois, sur les trois axes les plus accidentogènes :</p>
      <ul>
        <li><strong>Axe Dakar-Thiès</strong>, fort trafic de marchandises</li>
        <li><strong>Axe Diourbel</strong>, trafic de transport de passagers et de fret</li>
        <li><strong>Axe Kaolack</strong>, longue distance, fatigue cumulée</li>
      </ul>
      <p>Au point de pause, le routier trouve :</p>
      <ul>
        <li>Un <strong>café offert</strong> et un espace pour s'asseoir, se détendre.</li>
        <li>Une <strong>grille d'auto-évaluation de la fatigue</strong> (sommeil, temps de conduite, état physique).</li>
        <li>La <strong>règle des 2 heures</strong> : pause de 15 minutes toutes les 2 heures de conduite.</li>
        <li>Une conversation bienveillante avec l'équipe SMS, pas de morale, juste des faits.</li>
      </ul>

      <blockquote>« Les yeux lourds, c'est le premier signal. Une pause de 15 minutes et tu repars. Pas de pause, c'est un risque que tu prends avec tout le monde sur la route. »</blockquote>

      <h2>Le déroulement type</h2>
      <ol>
        <li><strong>Installation en station-service partenaire</strong> (6h-14h, jour de fort trafic).</li>
        <li><strong>Accueil du routier</strong> : café, eau, grille d'auto-évaluation.</li>
        <li><strong>Échange</strong> : discussion sur la fatigue, le temps de conduite, les astuces.</li>
        <li><strong>Inscription</strong> dans le registre et remise d'un mémo cartonné « Règle des 2 heures » pour le tableau de bord.</li>
      </ol>

      <div className="sms-key-facts">
        <h3>Chiffres clés du dispositif</h3>
        <dl>
          <dt>3 axes</dt><dd>Dakar-Thiès, Diourbel, Kaolack</dd>
          <dt>2h</dt><dd>Fréquence de pause recommandée</dd>
          <dt>Mensuel</dt><dd>Une session par mois par axe</dd>
          <dt>72-75 %</dt><dd>Des accidents mortels surviennent la nuit</dd>
        </dl>
      </div>
    </ActionLayout>
  );
}
