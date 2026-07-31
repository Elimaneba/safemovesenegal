import ActionLayout from '@/components/ActionLayout';

export const metadata = {
  title: 'Pencc Ndongo, Clubs scolaires de sécurité routière | Safe Move Sénégal',
  description:
    "Pencc Ndongo : clubs périscolaires animés par des élèves capitaines formés par SMS. Affiches, sketchs, quiz et restitution trimestrielle inter-écoles. « Devant l'école, ralentis ton pied. Pas notre futur. »",
  alternates: { canonical: 'https://www.safemove-senegal.org/actions/eleves' },
};

const gallery = Array.from({ length: 9 }, (_, i) => ({
  src: `/assets/images/campagnes/eleves/eleves-${String(i + 1).padStart(2, '0')}.webp`,
  alt: `Affiche élèves ${String(i + 1).padStart(2, '0')}`,
}));

export default function ElevesPage() {
  return (
    <ActionLayout
      eyebrow="Élèves · Club périscolaire"
      titleHtml="Pencc <em>Ndongo</em>"
      intro="« Devant l'école, ralentis ton pied. Pas notre futur. » Club animé par des élèves capitaines formés par SMS : affiches, sketchs, quiz, puis restitution trimestrielle inter-écoles. « Ils en parlent. Ils le vivent. »"
      image="/assets/images/campagnes/eleves/eleves-01.webp"
      imageAlt="Affiche de campagne scolaire, zone scolaire"
      breadcrumbLabel="Pencc Ndongo"
      proseIntro="Les accidents de la route sont la première cause de décès chez les 15-24 ans au Sénégal. Devant l'école, c'est le moment le plus dangereux de la journée : enfants qui traversent en courant, véhicules qui ne ralentissent pas, deux-roues qui slaloment entre les piétons. Pencc Ndongo ne fait pas cours aux élèves : il leur donne la parole."
      ctaTitle="Ton école veut rejoindre le programme Pencc Ndongo ?"
      video={{
        poster: '/assets/images/campagnes/eleves/eleves-02.webp',
        src: '/assets/video/campagne-eleves.webm',
        downloadLabel: 'Télécharger la campagne scolaire',
      }}
      gallery={gallery}
    >
      <h2>Le problème</h2>
      <p>Les enfants et les adolescents sont les victimes les plus vulnérables de l'insécurité routière autour des écoles. Les zones scolaires ne sont pas toujours respectées, les passages piétons sont absents ou ignorés, et l'éducation routière n'est pas intégrée au programme scolaire. Les jeunes internalisent des comportements à risque qu'ils reproduiront plus tard en tant que conducteurs.</p>

      <h2>La solution</h2>
      <p><strong>Pencc Ndongo</strong> (« École de la sécurité » en wolof) crée des <strong>clubs périscolaires</strong> dans les écoles partenaires. Le club est animé par des <strong>élèves capitaines</strong>, formés par SMS, qui deviennent les ambassadeurs de la sécurité routière dans leur établissement. Les activités du club :</p>
      <ul>
        <li><strong>Affiches</strong> : création de visuels de sensibilisation exposés dans l'école.</li>
        <li><strong>Sketchs</strong> : théâtre forum sur des situations réelles (traversée, bus, moto).</li>
        <li><strong>Quiz</strong> : concours inter-classes sur le code de la route et les bons réflexes.</li>
        <li><strong>Restitution trimestrielle</strong> : rencontre inter-écoles pour partager les meilleures initiatives.</li>
      </ul>
      <p>L'objectif n'est pas que les élèves écoutent un adulte parler de sécurité. C'est qu'ils <strong>se l'approprient</strong>, qu'ils en parlent entre eux, qu'ils modèlent le comportement de leurs camarades.</p>

      <blockquote>« Devant l'école, ralentis ton pied. Pas notre futur. »</blockquote>

      <h2>Le déroulement type</h2>
      <ol>
        <li><strong>Sélection de l'école partenaire</strong> et accord avec la direction.</li>
        <li><strong>Formation des élèves capitaines</strong> (2 jours) : bases de la sécurité routière, animation de groupe, techniques créatives.</li>
        <li><strong>Club hebdomadaire</strong> (1h) : animé par les capitaines, encadré par un référent SMS.</li>
        <li><strong>Restitution trimestrielle</strong> : les capitaines présentent les actions du club aux autres écoles partenaires.</li>
      </ol>

      <div className="sms-key-facts">
        <h3>Chiffres clés du dispositif</h3>
        <dl>
          <dt>10</dt><dd>Écoles partenaires visées la première année</dd>
          <dt>Hebdo</dt><dd>Une session de club par semaine</dd>
          <dt>1<sup>re</sup></dt><dd>Cause de décès chez les 15-24 ans</dd>
          <dt>Trimestriel</dt><dd>Restitution inter-écoles</dd>
        </dl>
      </div>
    </ActionLayout>
  );
}
