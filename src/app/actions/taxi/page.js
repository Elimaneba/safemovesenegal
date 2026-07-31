import ActionLayout from '@/components/ActionLayout';

export const metadata = {
  title: 'Diisoo Taxi, Causeries sécurité avec les taximen | Safe Move Sénégal',
  description:
    "Diisoo Taxi : causeries de 15 à 20 minutes en station de taxi, un thème par mois. Macaron pare-brise, portrait du Chauffeur Exemplaire. « On cause. On roule mieux. »",
  alternates: { canonical: 'https://www.safemove-senegal.org/actions/taxi' },
};

const gallery = Array.from({ length: 10 }, (_, i) => ({
  src: `/assets/images/campagnes/taxi/taxi-${String(i + 1).padStart(2, '0')}.webp`,
  alt: `Affiche taxi ${String(i + 1).padStart(2, '0')}`,
}));

export default function TaxiPage() {
  return (
    <ActionLayout
      eyebrow="Taximen · Mensuel"
      titleHtml="Diisoo <em>Taxi</em>"
      intro="« On cause. On roule mieux. » Des causeries de 15 à 20 minutes en station de taxi, un thème par mois. Le macaron pare-brise et le portrait du Chauffeur Exemplaire transforment la sécurité en fierté professionnelle."
      image="/assets/images/campagnes/taxi/taxi-01.webp"
      imageAlt="Affiche de campagne taxi, ceinture de sécurité"
      breadcrumbLabel="Diisoo Taxi"
      proseIntro="Le taxi, c'est des milliers de trajets par jour, des centaines de passagers qui se fient à un chauffeur. Quand le chauffeur boucle sa ceinture, le passager aussi. Quand le chauffeur respecte la vitesse, tout le monde rentre vivant. Diisoo Taxi parle aux taximen comme des professionnels, pas comme des fautifs."
      ctaTitle="Tu es taximen ? Tu veux accueillir une causerie dans ta station ?"
      video={{
        poster: '/assets/images/campagnes/taxi/taxi-02.webp',
        src: '/assets/video/campagne-taxi.webm',
        downloadLabel: 'Télécharger la campagne taxi',
      }}
      gallery={gallery}
    >
      <h2>Le problème</h2>
      <p>Beaucoup de taximen roulent sans ceinture, décrochent leur téléphone au volant et pressent la vitesse pour multiplier les courses. Les passagers, par mimétisme, font de même. Résultat : les taxis sont impliqués dans une part importante des accidents urbains, souvent avec des passagers à bord.</p>

      <h2>La solution</h2>
      <p><strong>Diisoo Taxi</strong> organise des causeries courtes en station de taxi, une fois par mois. Un thème par session, abordé de façon conviviale et concrète :</p>
      <ul>
        <li><strong>Mois 1, Ceinture :</strong> « Boucler la ceinture, 3 secondes. T'en sortir vivant : une vie. »</li>
        <li><strong>Mois 2, Téléphone :</strong> « Un message peut attendre. Une vie, non. »</li>
        <li><strong>Mois 3, Vitesse :</strong> « 10 km/h de moins, c'est 15 m de gagné pour s'arrêter. »</li>
        <li><strong>Mois 4, Fatigue :</strong> « Les yeux lourds, c'est le premier signal. Écoute-le. »</li>
      </ul>
      <p>À l'issue de chaque causerie, le chauffeur reçoit un <strong>macaron pare-brise</strong> indiquant le thème du mois. Les chauffeurs qui participent à au moins 6 causeries dans l'année sont nominés pour le titre de <strong>« Chauffeur Exemplaire »</strong>, avec portrait publié sur les réseaux sociaux de SMS.</p>

      <blockquote>« Attache-toi. Attache ton client. Trois secondes qui valent une vie. »</blockquote>

      <h2>Le déroulement type</h2>
      <ol>
        <li><strong>Arrivée en station</strong> (9h-11h, jour de faible affluence) : l'équipe SMS installe un stand léger.</li>
        <li><strong>Causerie</strong> (15-20 min) : présentation du thème, échange avec les chauffeurs, démonstrations.</li>
        <li><strong>Remise du macaron</strong> et inscription sur le registre de participation.</li>
        <li><strong>Portrait photo</strong> pour les réseaux sociaux (avec accord du chauffeur).</li>
      </ol>

      <div className="sms-key-facts">
        <h3>Chiffres clés du dispositif</h3>
        <dl>
          <dt>15-20 min</dt><dd>Durée d'une causerie en station</dd>
          <dt>4 thèmes</dt><dd>Ceinture, téléphone, vitesse, fatigue</dd>
          <dt>Mensuel</dt><dd>Une session par mois par station partenaire</dd>
          <dt>6/12</dt><dd>Causeries minimum pour être nominé Chauffeur Exemplaire</dd>
        </dl>
      </div>
    </ActionLayout>
  );
}
