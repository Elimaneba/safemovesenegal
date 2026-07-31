import ActionLayout from '@/components/ActionLayout';

export const metadata = {
  title: 'Charrette bu Leer, Équipement des charrettes en bandes réfléchissantes | Safe Move Sénégal',
  description:
    "Charrette bu Leer : pose gratuite de bandes réfléchissantes sur les charrettes les jours de lumo à Thiès, Saint-Louis et Ziguinchor. « On te voit. Tu rentres bien. »",
  alternates: { canonical: 'https://www.safemove-senegal.org/actions/charrettes' },
};

const gallery = Array.from({ length: 10 }, (_, i) => ({
  src: `/assets/images/campagnes/charrettes/charrettes-${String(i + 1).padStart(2, '0')}.webp`,
  alt: `Affiche charrettes ${String(i + 1).padStart(2, '0')}`,
}));

export default function CharrettesPage() {
  return (
    <ActionLayout
      eyebrow="Charretiers · Jours de marché"
      titleHtml="Charrette bu <em>Leer</em>"
      intro="« On te voit. Tu rentres bien. » Pose gratuite de bandes réfléchissantes sur les charrettes les jours de lumo, à Thiès, Saint-Louis et Ziguinchor. Une solution simple qui sauve des vies."
      image="/assets/images/campagnes/charrettes/charrettes-01.webp"
      imageAlt="Affiche de campagne charrettes, bandes réfléchissantes"
      breadcrumbLabel="Charrette bu Leer"
      proseIntro="La charrette, c'est des milliers de trajets entre le champ et le marché, entre le village et la ville. Le soir, sur les routes sans éclairage, elle est invisible. Un camion qui arrive ne la voit qu'au dernier moment. Quelques bandes réfléchissantes suffisent à changer cela."
      ctaTitle="Tu veux aider à équiper des charrettes dans ta région ?"
      gallery={gallery}
    >
      <h2>Le problème</h2>
      <p>Les charrettes circulent souvent à la nuit tombée, sur des axes routiers non éclairés. Sans dispositif réfléchissant, elles sont pratiquement invisibles pour les véhicules motorisés. Les collisions charrette-véhicule sont particulièrement meurtrières pour le charretier et son animal, et surviennent majoritairement entre 18h et 22h.</p>

      <h2>La solution</h2>
      <p><strong>Charrette bu Leer</strong> (« Charrette visible » en wolof) installe des <strong>bandes réfléchissantes</strong> gratuitement sur les charrettes, les jours de lumo (marché hebdomadaire), là où les charretiers se rassemblent. L'opération se déroule en trois régions pilotes :</p>
      <ul>
        <li><strong>Thiès</strong>, axe très fréquenté par les charrettes agricoles</li>
        <li><strong>Saint-Louis</strong>, charrettes de transport de marchandises</li>
        <li><strong>Ziguinchor</strong>, charrettes rurales sur des routes étroites</li>
      </ul>
      <p>Les bandes sont posées sur les côtés et à l'arrière de la charrette. L'opération prend 5 minutes par charrette et est entièrement gratuite pour le charretier.</p>

      <blockquote>« La nuit, ta charrette disparaît avant toi. Avec les bandes, on te voit. Tu rentres bien. »</blockquote>

      <h2>Le déroulement type</h2>
      <ol>
        <li><strong>Repérage des jours de lumo</strong> dans les trois régions pilotes.</li>
        <li><strong>Installation d'un stand SMS</strong> à l'entrée du marché, tenu par 3-4 bénévoles.</li>
        <li><strong>Pose des bandes</strong> (5 min/charrette) : côtés + arrière, avec explication au charretier.</li>
        <li><strong>Inscription</strong> dans le registre (nom, village, nombre de charrettes équipées).</li>
      </ol>

      <div className="sms-key-facts">
        <h3>Chiffres clés du dispositif</h3>
        <dl>
          <dt>5 min</dt><dd>Temps de pose par charrette</dd>
          <dt>3 régions</dt><dd>Thiès, Saint-Louis, Ziguinchor</dd>
          <dt>Gratuit</dt><dd>Pose entièrement gratuite pour le charretier</dd>
          <dt>Jours de lumo</dt><dd>Fréquence calée sur les marchés hebdomadaires</dd>
        </dl>
      </div>
    </ActionLayout>
  );
}
