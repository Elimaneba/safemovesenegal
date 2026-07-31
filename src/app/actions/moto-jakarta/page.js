import ActionLayout from '@/components/ActionLayout';

export const metadata = {
  title: 'Góorgóorlu Certifié, Certification des motos Jakarta | Safe Move Sénégal',
  description:
    "Góorgóorlu Certifié : le dispositif de Safe Move Sénégal pour la certification volontaire des motos Jakarta en gare. Casque, mécanique, papiers vérifiés. « Roule certifié. Roule respecté. »",
  alternates: { canonical: 'https://www.safemove-senegal.org/actions/moto-jakarta' },
};

const gallery = Array.from({ length: 10 }, (_, i) => ({
  src: `/assets/images/campagnes/moto-jakarta/moto-jakarta-${String(i + 1).padStart(2, '0')}.webp`,
  alt: `Affiche moto Jakarta ${String(i + 1).padStart(2, '0')}`,
}));

export default function MotoJakartaPage() {
  return (
    <ActionLayout
      eyebrow="Moto Jakarta · Mensuel"
      titleHtml="Góorgóorlu <em>Certifié</em>"
      intro="« Roule certifié. Roule respecté. » La certification volontaire des motos Jakarta en gare : un contrôle simple sur trois points, casque, mécanique, papiers, qui transforme la sécurité en argument commercial."
      image="/assets/images/campagnes/moto-jakarta/moto-jakarta-01.webp"
      imageAlt="Affiche de campagne moto Jakarta : certification du casque et de la mécanique"
      breadcrumbLabel="Góorgóorlu Certifié"
      proseIntro="Les motos Jakarta sont le sang de la mobilité dakaroise. Elles transportent, livrent, connectent. Mais sans casque, sans freins fiables, sans papiers en règle, elles sont aussi la première cause d'accidents graves chez les jeunes. Plutôt que de stigmatiser, Safe Move Sénégal valorise : un sticker, une fierté, un engagement."
      ctaTitle="Envie de certifier ta moto ou de devenir bénévole en gare ?"
      video={{
        poster: '/assets/images/campagnes/moto-jakarta/moto-jakarta-02.webp',
        src: '/assets/video/campagne-moto-jakarta.webm',
        downloadLabel: 'Télécharger la campagne moto Jakarta',
      }}
      gallery={gallery}
    >
      <h2>Le problème</h2>
      <p>Au Sénégal, 38 % des accidents de la route impliquent un deux-roues. Les conducteurs de moto Jakarta sont parmi les plus exposés : trajets quotidiens à grande vitesse, pression du temps, casques absents ou non homologués, mécanique parfois défaillante. Les accidents de moto sont souvent mortels ou gravement blessants, en particulier pour la tête.</p>

      <h2>La solution</h2>
      <p><strong>Góorgóorlu Certifié</strong> est un dispositif volontaire organisé en gare, une fois par mois. Les conducteurs de moto Jakarta se présentent pour un contrôle en trois points :</p>
      <ul>
        <li><strong>Casque :</strong> présence, état, homologation. SMS distribue des casques homologués à prix social pour ceux qui n'en ont pas.</li>
        <li><strong>Mécanique :</strong> freins, feux, pneus, rétroviseurs. Un mécanicien partenaire vérifie et répare sur place les défauts mineurs.</li>
        <li><strong>Papiers :</strong> permis, assurance, carte grise. Accompagnement administratif pour la mise en conformité.</li>
      </ul>
      <p>À l'issue du contrôle, le conducteur reçoit un <strong>sticker « Certifié SMS »</strong> à apposer sur sa moto. Ce sticker devient un argument commercial : les clients préfèrent monter sur une moto certifiée. La sécurité se transforme en avantage économique.</p>

      <blockquote>« Sans casque, ta tête négocie avec le bitume. Avec un casque, ta tête rentre à la maison. »</blockquote>

      <h2>Le déroulement type</h2>
      <ol>
        <li><strong>Installation en gare</strong> (7h-12h) : stand SMS, mécanicien partenaire, stock de casques.</li>
        <li><strong>Contrôle individuel</strong> (10-15 min par moto) : grille de vérification en 3 points.</li>
        <li><strong>Remise du sticker</strong> et photo pour la page « Mur de la certification » sur les réseaux sociaux.</li>
        <li><strong>Suivi mensuel</strong> : contrôle de la présence du sticker et du casque aux mêmes carrefours.</li>
      </ol>

      <div className="sms-key-facts">
        <h3>Chiffres clés du dispositif</h3>
        <dl>
          <dt>3</dt><dd>Points de contrôle : casque, mécanique, papiers</dd>
          <dt>Mensuel</dt><dd>Fréquence des sessions de certification en gare</dd>
          <dt>~50</dt><dd>Motos certifiées par session</dd>
          <dt>1 sticker</dt><dd>Visibilité permanente sur la moto</dd>
        </dl>
      </div>
    </ActionLayout>
  );
}
