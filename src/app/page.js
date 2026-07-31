import Link from 'next/link';
import VideoTabs from '@/components/VideoTabs';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Safe Move Sénégal, Association citoyenne pour la sécurité routière',
  description:
    "Safe Move Sénégal (SMS) est une association citoyenne de jeunes qui agit pour la sécurité routière et la mobilité durable au Sénégal : prévention, sensibilisation, formation et plaidoyer. 745 morts par an sur nos routes : agissons.",
  alternates: { canonical: 'https://www.safemove-senegal.org/' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qui est Safe Move Sénégal ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Safe Move Sénégal (SMS) est une organisation citoyenne portée par des jeunes issus des programmes de développement communautaire et d'innovation sociale. Ce n'est pas une ONG venue de l'extérieur : c'est un mouvement né du terrain, ancré dans les réalités locales, qui agit pour la sécurité routière et la mobilité durable au Sénégal.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de personnes meurent sur les routes du Sénégal chaque année ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Environ 745 personnes meurent chaque année sur les routes sénégalaises, soit près de 2 décès par jour, pour 5 200 accidents recensés et 8 500 blessés graves (ANASER 2025). 90 % de ces accidents sont liés à des comportements humains, donc évitables.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment devenir bénévole chez Safe Move Sénégal ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Il suffit d'écrire à contact@safemove-senegal.org ou de remplir le formulaire du site. Vous rejoignez ensuite une activité de terrain : brigade piétons aux heures de pointe, certification des motos Jakarta en gare, équipement des charrettes en bandes réfléchissantes ou animation d'un club scolaire. La formation est assurée par SMS.",
      },
    },
    {
      '@type': 'Question',
      name: 'Les créateurs et artistes peuvent-ils collaborer avec SMS ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Les créateurs sont des membres à part entière du mouvement, pas des prestataires. Photographes, vidéastes, illustrateurs, rappeurs, comédiens et motion designers co-construisent les briefs, sont systématiquement crédités et peuvent porter le label « Créateur SMS ».',
      },
    },
    {
      '@type': 'Question',
      name: 'Dans quelles régions du Sénégal SMS intervient-il ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La première année cible 4 régions pilotes, avec des tournées organisées notamment sur les axes Dakar-Thiès, Diourbel et Kaolack, et des zones d'équipement des charretiers à Thiès, Saint-Louis et Ziguinchor.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les objectifs de Safe Move Sénégal pour sa première année ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '10 000 personnes sensibilisées dans 4 régions pilotes, 100 jeunes leaders formés, 30 relais communautaires actifs, 10 écoles partenaires, 10 partenariats clés et plus de 500 contenus produits.',
      },
    },
  ],
};

const concepts = [
  {
    img: '/assets/images/campagnes/moto-jakarta/moto-jakarta-01.webp',
    alt: 'Campagne moto Jakarta de Safe Move Sénégal : « Sans casque, ta tête négocie avec le bitume. »',
    title: 'Góorgóorlu Certifié',
    span: 'Moto Jakarta · mensuel',
    desc: 'Certification volontaire en gare : casque, mécanique, papiers. Le sticker « Certifié SMS » devient un argument commercial. « Roule certifié. Roule respecté. »',
  },
  {
    img: '/assets/images/campagnes/taxi/taxi-01.webp',
    alt: 'Campagne taxis de Safe Move Sénégal : « Boucler la ceinture, 3 secondes. T\'en sortir vivant : une vie. »',
    title: 'Diisoo Taxi',
    span: 'Taximen · mensuel',
    desc: 'Causeries de 15 à 20 minutes en station, un thème par mois, macaron pare-brise et portrait du « Chauffeur Exemplaire ». « On cause. On roule mieux. »',
  },
  {
    img: '/assets/images/campagnes/transport-commun/transport-commun-01.webp',
    alt: 'Campagne transport en commun de Safe Move Sénégal pour les apprentis des cars rapides et Ndiaga Ndiaye',
    title: 'Coxeur bu Wóór',
    span: 'Apprentis du grand transport · trimestriel',
    desc: "Formation d'une heure en gare routière : surcharge, ouverture sécurisée des portes, premiers réflexes. Badge remis et suivi. « Lui, il gère. Et il gère bien. »",
  },
  {
    img: '/assets/images/campagnes/charrettes/charrettes-01.webp',
    alt: 'Campagne charretiers de Safe Move Sénégal : « La nuit, ta charrette disparaît avant toi. »',
    title: 'Charrette bu Leer',
    span: 'Charretiers · jours de marché',
    desc: 'Pose gratuite de bandes réfléchissantes les jours de lumo, à Thiès, Saint-Louis et Ziguinchor. Une solution simple qui sauve des vies. « On te voit. Tu rentres bien. »',
  },
  {
    img: '/assets/images/campagnes/pietons/pietons-01.webp',
    alt: 'Campagne piétons de Safe Move Sénégal : « Le passage piéton n\'est pas un détail. C\'est ta priorité. »',
    title: 'Jaar-Jaar bu Wóór',
    span: 'Piétons · deux fois par semaine',
    desc: 'Brigades de 4 à 6 bénévoles en gilets aux carrefours à risque, 7h-9h et 17h-19h. Accompagnement bienveillant, jamais de verbalisation. « Traverse bien. On t\'accompagne. »',
  },
  {
    img: '/assets/images/campagnes/routiers/routiers-01.webp',
    alt: 'Campagne routiers longue distance de Safe Move Sénégal sur la fatigue au volant',
    title: 'Noflaay Routier',
    span: 'Routiers longue distance · mensuel',
    desc: 'Points de pause en station-service sur les axes Dakar-Thiès, Diourbel et Kaolack : café offert, auto-évaluation fatigue, règle des 2 heures. « Une pause. Pas un risque. »',
  },
  {
    img: '/assets/images/campagnes/eleves/eleves-01.webp',
    alt: 'Campagne scolaire de Safe Move Sénégal : « Devant l\'école, ralentis ton pied. Pas notre futur. »',
    title: 'Pencc Ndongo',
    span: 'Élèves · club périscolaire',
    desc: "Club animé par des élèves capitaines formés par SMS : affiches, sketchs, quiz, puis restitution trimestrielle inter-écoles. « Ils en parlent. Ils le vivent. »",
  },
  {
    img: '/assets/images/campagnes/familles/familles-01.webp',
    alt: 'Campagne familles de Safe Move Sénégal : « Notre famille a un pacte. Ceinture. Téléphone. Vitesse. »',
    title: 'Njaboot bu Wóór',
    span: 'Familles · challenge continu',
    desc: 'Une famille signe un pacte en trois règles, ceinture, téléphone, vitesse, et le partage avec #PacteSafeMove. « Notre famille. Notre pacte. Notre sécurité. »',
  },
];

const missions = [
  { icon: 'fa-shield', title: 'Prévenir', desc: "Réduire les risques routiers auprès des jeunes, des piétons et des conducteurs de deux-roues, là où le danger est le plus concentré." },
  { icon: 'fa-bullhorn', title: 'Sensibiliser', desc: 'Des campagnes de proximité et des outils créatifs adaptés aux réalités locales : gares, marchés, carrefours, cours d\'école.' },
  { icon: 'fa-graduation-cap', title: 'Former', desc: 'Former les acteurs de la mobilité, chauffeurs, apprentis, élèves, collectivités, forces de l\'ordre, aux bonnes pratiques.' },
  { icon: 'fa-lightbulb-o', title: 'Innover', desc: 'Proposer et expérimenter des solutions locales, participatives et réplicables : un badge, une bande réfléchissante, un pacte familial.' },
  { icon: 'fa-users', title: 'Mobiliser', desc: 'Créer un réseau de jeunes leaders engagés pour des villes plus sûres, accessibles et inclusives, quartier par quartier.' },
  { icon: 'fa-gavel', title: 'Plaider', desc: 'Porter la voix des usagers vulnérables pour des politiques publiques ambitieuses et une meilleure réglementation de la mobilité.' },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Bannière */}
      <div className="main-banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="owl-carousel owl-banner">
                <div className="item header-text">
                  <h6>Sécurité routière · Mobilité durable</h6>
                  <h1>Chaque geste compte pour une <em>mobilité sûre</em> au <span>Sénégal</span>.</h1>
                  <p>Il y a des drames qu'on entend tous les jours aux infos. Et puis un jour, ce n'est plus une actualité : c'est ton cousin, ton voisin, ton enfant. Ce n'est pas une fatalité. C'est une responsabilité, et elle est à nous tous.</p>
                  <div className="down-buttons">
                    <div className="main-blue-button-hover">
                      <Link href="/s-engager">Rejoindre le mouvement</Link>
                    </div>
                    <div className="call-button">
                      <a href="mailto:contact@safemove-senegal.org"><i className="fa fa-envelope" aria-hidden="true"></i> contact@safemove-senegal.org</a>
                    </div>
                  </div>
                </div>
                <div className="item header-text">
                  <h6>Qui nous sommes</h6>
                  <h2>Un mouvement <em>né du terrain</em>, porté par la <span>jeunesse</span>.</h2>
                  <p>SMS n'est pas une ONG venue de l'extérieur avec des solutions préfabriquées. C'est une organisation citoyenne portée par des jeunes qui vivent les problèmes de la route, et qui veulent en être les premiers artisans de solutions.</p>
                  <div className="down-buttons">
                    <div className="main-blue-button-hover">
                      <Link href="/actions">Découvrir nos 8 actions</Link>
                    </div>
                    <div className="call-button">
                      <Link href="/chiffres"><i className="fa fa-bar-chart" aria-hidden="true"></i> Les chiffres du Sénégal</Link>
                    </div>
                  </div>
                </div>
                <div className="item header-text">
                  <h6>Créateurs &amp; partenaires</h6>
                  <h2>Tu crées. Tu t'engages. <em>SMS t'ouvre ses portes</em>.</h2>
                  <p>Photographes, vidéastes, illustrateurs, rappeurs, comédiens, motion designers : nous ne consommons pas la créativité, nous la mettons en lumière. Chaque œuvre est créditée, chaque brief est co-construit.</p>
                  <div className="down-buttons">
                    <div className="main-blue-button-hover">
                      <Link href="/s-engager">Devenir créateur SMS</Link>
                    </div>
                    <div className="call-button">
                      <Link href="/campagnes"><i className="fa fa-play-circle" aria-hidden="true"></i> Voir les campagnes</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <figure className="sms-banner-visual">
                <img src="/assets/images/campagnes/pietons/pietons-01.webp" alt="Affiche de campagne Safe Move Sénégal : « Le passage piéton n'est pas un détail. C'est ta priorité. »" width="1024" height="1024" loading="eager" />
                <figcaption>Campagne piétons, « Traverse là où c'est prévu pour toi. » Brigades SMS aux carrefours à risque, deux fois par semaine.</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="sms-hazard" role="presentation"></div>

      {/* Campagnes vidéo */}
      <section id="campagnes" className="our-videos section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading sms-heading-center">
                <h2>Regarde 30 secondes. <em>Tu ne conduiras plus pareil.</em></h2>
                <span>Nos campagnes</span>
                <p>Quatre films courts, tournés pour la route sénégalaise : la moto Jakarta, le taxi, l'école, la famille. Des mots simples, des gestes qui sauvent.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <VideoTabs />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / objectifs stratégiques */}
      <section id="mission" className="our-services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h2>Six leviers pour <em>transformer la route</em> au <span>Sénégal</span></h2>
                <span>Notre mission</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="text-center" style={{ maxWidth: '720px', margin: '0 auto 40px' }}>Face à l'augmentation des accidents et aux inégalités d'accès à une mobilité digne, Safe Move Sénégal agit pour transformer les comportements, les mentalités et les politiques publiques, en plaçant les citoyens au cœur du changement.</p>
              <div className="owl-carousel owl-services">
                {missions.map((m) => (
                  <div className="item" key={m.title}>
                    <div className="icon"><i className={`fa ${m.icon}`} aria-hidden="true"></i></div>
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'association */}
      <section id="association" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-image">
                <img src="/assets/images/campagnes/eleves/eleves-01.webp" alt="Affiche Safe Move Sénégal pour les zones scolaires : « Devant l'école, ralentis ton pied. Pas notre futur. »" width="1024" height="1024" loading="lazy" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <span>L'association</span>
                <h2>Se déplacer doit redevenir un <em>droit respecté</em>, pas un <span>risque assumé</span></h2>
                <p>Au Sénégal, l'insécurité routière est une crise silencieuse mais dévastatrice. Chaque jour, des vies sont brisées sur des routes qui auraient pu être sûres. Derrière les chiffres, un problème systémique : comportements à risque, faible culture de la sécurité, application inégale du code de la route, vétusté du parc roulant, absence d'éducation routière structurée. Les plus vulnérables, piétons, cyclistes, conducteurs de deux-roues, enfants scolarisés, paient le prix le plus lourd.</p>
                <p><strong>Nos valeurs nous tiennent debout :</strong> engagement citoyen, co-création avec celles et ceux qui vivent les problèmes, pragmatisme mesurable, solidarité envers les plus exposés, et intégrité entre ce que nous disons et ce que nous faisons.</p>
                <p><Link href="/association" style={{ fontWeight: '700', color: 'var(--green-600)' }}>En savoir plus sur l'association →</Link></p>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="fact-item">
                      <div className="count-area-content">
                        <div className="icon"><i className="fa fa-flag" aria-hidden="true"></i></div>
                        <div className="count-digit">8</div>
                        <div className="count-title">concepts opérationnels</div>
                        <p>Un dispositif par public : Jakarta, taxis, apprentis, charretiers, piétons, routiers, élèves, familles.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="fact-item">
                      <div className="count-area-content">
                        <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div className="count-digit">4</div>
                        <div className="count-title">régions pilotes</div>
                        <p>Un déploiement progressif et documenté, pensé pour être répliqué partout au Sénégal.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="fact-item">
                      <div className="count-area-content">
                        <div className="icon"><i className="fa fa-heart" aria-hidden="true"></i></div>
                        <div className="count-digit">10 000</div>
                        <div className="count-title">personnes visées an 1</div>
                        <p>Objectif première année, avec 100 jeunes formés et 30 relais communautaires actifs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifeste */}
      <section className="sms-manifesto" aria-labelledby="manifeste-titre">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <span className="sms-eyebrow">Pourquoi nous agissons</span>
              <h2 id="manifeste-titre" className="sms-visually-hidden">Pourquoi Safe Move Sénégal agit</h2>
              <blockquote>Au Sénégal, la route est devenue un lieu où l'on prie plus qu'on ne marche. Chaque croix au bord de la route raconte <em>une vie arrêtée trop tôt</em>.</blockquote>
              <p>Un accident évitable. Un espoir brisé. Nous refusons de regarder ailleurs : nous agissons ensemble pour que se déplacer ne soit plus un risque, mais un droit. Un pays où la sécurité routière devient un acte de citoyenneté, de dignité et d'amour pour la vie.</p>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="sms-riskrow">
                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                <div>
                  <b>Des routes meurtrières</b>
                  <span>745 décès et 8 500 blessés graves par an. Un drame toutes les 12 heures.</span>
                </div>
              </div>
              <div className="sms-riskrow">
                <i className="fa fa-motorcycle" aria-hidden="true"></i>
                <div>
                  <b>Les plus exposés</b>
                  <span>1<sup>re</sup> cause de décès chez les 15-24 ans. 38 % des accidents impliquent un deux-roues.</span>
                </div>
              </div>
              <div className="sms-riskrow">
                <i className="fa fa-users" aria-hidden="true"></i>
                <div>
                  <b>Une réponse citoyenne</b>
                  <span>90 % des accidents viennent du comportement humain : ils sont donc évitables, ensemble.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les chiffres */}
      <section id="chiffres" className="sms-figures section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading sms-heading-center">
                <h2>Le Sénégal <em>face à ses routes</em> : la réalité en <span>chiffres</span></h2>
                <span>Les données</span>
                <p>745 morts par an. 2 décès par jour. 90 % de facteur humain. Les chiffres ne sont pas des statistiques abstraites : ce sont des vies. <Link href="/chiffres" style={{ fontWeight: '700', color: 'var(--green-600)' }}>Voir tous les chiffres →</Link></p>
              </div>
            </div>
          </div>
          <div className="sms-bento">
            <div className="sms-bento-hero">
              <div className="sms-bento-hero-tag">Le constat</div>
              <div className="sms-bento-hero-num">745</div>
              <div className="sms-bento-hero-lbl">décès par an</div>
              <p>Sur les routes sénégalaises. Un drame toutes les 12 heures, chaque jour, toute l'année.</p>
              <cite>ANASER 2025</cite>
            </div>
            <div className="sms-bento-hero sms-bento-hero--red">
              <div className="sms-bento-hero-tag">L'opportunité</div>
              <div className="sms-bento-hero-num">90<span className="sms-bento-pct">%</span></div>
              <div className="sms-bento-hero-lbl">facteur humain</div>
              <p>Les accidents viennent du comportement. Donc ils sont évitables. C'est là que nous agissons.</p>
              <cite>ANASER / PWA</cite>
            </div>
            <div className="sms-bento-stat">
              <span className="sms-bento-dot"></span>
              <span className="sms-bento-stat-num">5 200</span>
              <span className="sms-bento-stat-lbl">accidents recensés par an</span>
              <cite>ANASER / Gendarmerie</cite>
            </div>
            <div className="sms-bento-stat">
              <span className="sms-bento-dot sms-bento-dot--amber"></span>
              <span className="sms-bento-stat-num">8 500</span>
              <span className="sms-bento-stat-lbl">blessés graves par an</span>
              <cite>ANASER 2025</cite>
            </div>
            <div className="sms-bento-stat">
              <span className="sms-bento-dot"></span>
              <span className="sms-bento-stat-num">27 000</span>
              <span className="sms-bento-stat-lbl">victimes au total chaque année</span>
              <cite>OMS / AFRO</cite>
            </div>
            <div className="sms-bento-stat">
              <span className="sms-bento-dot sms-bento-dot--amber"></span>
              <span className="sms-bento-stat-num">38<span className="sms-bento-pct">%</span></span>
              <span className="sms-bento-stat-lbl">des accidents impliquent un deux-roues</span>
              <cite>ANASER 2025</cite>
            </div>
            <div className="sms-bento-stat">
              <span className="sms-bento-dot sms-bento-dot--amber"></span>
              <span className="sms-bento-stat-num">72–75<span className="sms-bento-pct">%</span></span>
              <span className="sms-bento-stat-lbl">des accidents mortels surviennent la nuit</span>
              <cite>Données nationales</cite>
            </div>
            <div className="sms-bento-stat">
              <span className="sms-bento-dot"></span>
              <span className="sms-bento-stat-num">11 000</span>
              <span className="sms-bento-stat-lbl">accidents à Dakar seul</span>
              <cite>OMS / AFRO</cite>
            </div>
            <div className="sms-bento-stat sms-bento-stat--highlight">
              <span className="sms-bento-stat-num">1<sup>re</sup></span>
              <span className="sms-bento-stat-lbl">cause de décès chez les 15-24 ans</span>
              <p>Les accidents de la route tuent d'abord les jeunes. Ce sont eux que nous protégeons en priorité.</p>
              <cite>ANASER</cite>
            </div>
            <div className="sms-bento-wide">
              <div className="sms-bento-wide-amount">
                <span className="sms-bento-wide-num">163</span>
                <span className="sms-bento-wide-unit">milliards FCFA / an</span>
              </div>
              <div className="sms-bento-wide-divider"></div>
              <div className="sms-bento-wide-body">
                <span className="sms-bento-wide-lbl">Le coût économique des accidents</span>
                <p>Soit <strong>4 à 5 % du PIB national</strong> absorbé par les accidents de la route. Plus que le budget de plusieurs ministères réunis.</p>
              </div>
              <cite>Banque mondiale · ANASER</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Les 8 concepts */}
      <section id="concepts" className="our-portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading sms-heading-center">
                <h2>Huit actions de terrain, <em>un public à la fois</em></h2>
                <span>Nos actions</span>
                <p>Chaque action cible un public précis, avec un format adapté et un impact mesurable. <Link href="/actions" style={{ fontWeight: '700', color: 'var(--green-600)' }}>Découvrir les 8 dispositifs en détail →</Link></p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-carousel owl-portfolio">
                {concepts.map((c) => (
                  <div className="item" key={c.title}>
                    <div className="thumb">
                      <img src={c.img} alt={c.alt} width="1024" height="1024" loading="lazy" />
                      <div className="hover-effect">
                        <div className="inner-content">
                          <h3>{c.title}</h3>
                          <span>{c.span}</span>
                          <p>{c.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portes d'entrée */}
      <section id="agir" className="pricing-tables">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading sms-heading-center">
                <h2>Trois façons de <em>faire ta part</em> dès <span>aujourd'hui</span></h2>
                <span>S'engager</span>
                <p>Bénévole, partenaire ou créateur : il n'y a pas de petit engagement. <Link href="/s-engager" style={{ fontWeight: '700', color: 'var(--green-600)' }}>En savoir plus →</Link></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="item first-item">
                <h4>Bénévole &amp; relais</h4>
                <em>Porte d'entrée 01</em>
                <span>Quelques heures par mois, dans ton quartier.</span>
                <ul>
                  <li>Brigades piétons aux heures de pointe</li>
                  <li>Certification des motos Jakarta en gare</li>
                  <li>Équipement des charrettes les jours de lumo</li>
                  <li>Formation et encadrement assurés par SMS</li>
                </ul>
                <div className="main-blue-button-hover">
                  <Link href="/contact">Devenir bénévole</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item second-item">
                <h4>Partenaire</h4>
                <em>Porte d'entrée 02</em>
                <span>Écoles, collectivités, syndicats, entreprises.</span>
                <ul>
                  <li>Clubs scolaires Pencc Ndongo</li>
                  <li>Causeries en stations de taxi</li>
                  <li>Points de pause pour routiers</li>
                  <li>Données et plaidoyer partagés</li>
                </ul>
                <div className="main-blue-button-hover">
                  <Link href="/contact">Devenir partenaire</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item third-item">
                <h4>Créateur SMS</h4>
                <em>Porte d'entrée 03</em>
                <span>Ta créativité change des comportements.</span>
                <ul>
                  <li>Mention systématique du créateur</li>
                  <li>Co-construction des briefs créatifs</li>
                  <li>Accès au réseau et aux événements</li>
                  <li>Label « Créateur SMS » pour les réguliers</li>
                </ul>
                <div className="main-blue-button-hover">
                  <Link href="/contact">Proposer une collaboration</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <div id="newsletter" className="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <h2>Recevez nos actions près de chez vous</h2>
                    <form id="subscribe-form" action="#" method="post">
                      <label className="sms-visually-hidden" htmlFor="subscribe-city">Votre ville ou quartier</label>
                      <input type="text" name="ville" id="subscribe-city" placeholder="Votre ville ou quartier" required />
                      <label className="sms-visually-hidden" htmlFor="subscribe-email">Votre email</label>
                      <input type="email" name="email" id="subscribe-email" placeholder="Votre email" required />
                      <button type="submit" className="main-button">Je m'inscris</button>
                    </form>
                    <p className="sms-subscribe-note">Une lettre courte, des actions concrètes, aucun spam. Vous pouvez vous désinscrire à tout moment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section id="faq" className="sms-faq section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h2>Vos questions, <em>nos réponses</em></h2>
                <span>Questions fréquentes</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <details open>
                <summary>Qui est Safe Move Sénégal ?</summary>
                <p>Safe Move Sénégal (SMS) est une organisation citoyenne portée par des jeunes issus des programmes de développement communautaire et d'innovation sociale. Ce n'est pas une ONG venue de l'extérieur avec des solutions préfabriquées : c'est un mouvement né du terrain, ancré dans les réalités locales, qui agit pour la sécurité routière et la mobilité durable au Sénégal.</p>
              </details>
              <details>
                <summary>Combien de personnes meurent sur les routes du Sénégal chaque année ?</summary>
                <p>Environ 745 personnes perdent la vie chaque année sur les routes sénégalaises, soit près de 2 décès par jour, pour 5 200 accidents recensés et 8 500 blessés graves (ANASER 2025). 90 % de ces accidents sont liés au comportement humain : ils sont donc évitables.</p>
              </details>
              <details>
                <summary>Comment devenir bénévole chez Safe Move Sénégal ?</summary>
                <p>Écrivez à <a href="mailto:contact@safemove-senegal.org">contact@safemove-senegal.org</a> ou remplissez le formulaire de contact. Vous rejoignez ensuite une activité de terrain : brigade piétons aux heures de pointe, certification des motos Jakarta en gare, équipement des charrettes en bandes réfléchissantes ou animation d'un club scolaire. La formation est assurée par SMS.</p>
              </details>
              <details>
                <summary>Les créateurs et artistes peuvent-ils collaborer avec SMS ?</summary>
                <p>Oui, et c'est même au cœur de notre modèle. Photographes, vidéastes, illustrateurs, rappeurs, comédiens de théâtre forum et motion designers co-construisent les briefs, sont systématiquement crédités et peuvent porter le label « Créateur SMS ». Nous ne consommons pas la créativité : nous la mettons en lumière.</p>
              </details>
              <details>
                <summary>Dans quelles régions du Sénégal SMS intervient-il ?</summary>
                <p>La première année cible 4 régions pilotes. Les points de pause routiers couvrent les axes Dakar-Thiès, Diourbel et Kaolack ; les tournées d'équipement des charretiers passent par Thiès, Saint-Louis et Ziguinchor.</p>
              </details>
              <details>
                <summary>Quels sont vos objectifs pour la première année ?</summary>
                <p>10 000 personnes sensibilisées dans 4 régions pilotes, 100 jeunes leaders formés en sécurité routière, 30 relais communautaires actifs dans les quartiers, 10 écoles partenaires, plus de 10 partenariats clés et plus de 500 contenus produits pour les médias et les réseaux sociaux.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-heading">
                <span>Contact</span>
                <h2>Parlons de votre <em>engagement</em> pour des routes <span>plus sûres</span></h2>
                <div id="map">
                  <iframe src="https://maps.google.com/maps?q=Dakar,+S%C3%A9n%C3%A9gal&t=&z=11&ie=UTF8&iwloc=&output=embed" width="100%" height="360px" style={{ border: 0 }} loading="lazy" title="Carte de Dakar, Sénégal, zone d'action de Safe Move Sénégal" allowFullScreen></iframe>
                </div>
                <div className="info">
                  <span><i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:contact@safemove-senegal.org">contact@safemove-senegal.org</a></span>
                  <span><i className="fa fa-map-marker" aria-hidden="true"></i> <a href="#contact">Dakar, Sénégal<br />4 régions pilotes</a></span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
