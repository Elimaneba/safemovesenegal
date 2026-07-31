import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import Sidebar from '@/components/Sidebar';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: 'Les chiffres, Sécurité routière au Sénégal | Safe Move Sénégal',
  description:
    '745 morts par an, 5 200 accidents, 8 500 blessés graves, 90 % de facteur humain : la réalité de la sécurité routière au Sénégal en chiffres. Sources : ANASER, OMS, Banque mondiale.',
  alternates: { canonical: 'https://www.safemove-senegal.org/chiffres' },
};

export default function ChiffresPage() {
  return (
    <>
      <PageHero
        eyebrow="Les données"
        title="Le Sénégal <em>face à ses routes</em> : la réalité en <span>chiffres</span>"
        intro="745 morts par an. 2 décès par jour. 90 % de facteur humain. Les chiffres de la sécurité routière au Sénégal ne sont pas des statistiques abstraites : ce sont des vies, des familles, des futurs brisés."
      />
      <Breadcrumb
        items={[
          { href: '/', label: 'Accueil' },
          { label: 'Les chiffres', current: true },
        ]}
      />

      <section className="sms-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="sms-prose-intro">
                Les données ci-dessous sont issues de l'ANASER (Agence nationale de la sécurité routière), de l'OMS, de la Banque mondiale et de la Gendarmerie nationale. Elles dressent un portrait sans détour de la situation au Sénégal, et expliquent pourquoi Safe Move Sénégal agit.
              </p>

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

              <h2>Lire les chiffres autrement</h2>
              <p>
                Derrière chaque chiffre, il y a un visage. Un père qui ne rentre pas. Un enfant qui ne va plus à l'école. Une mère qui ne se déplace plus seule. Les données ne sont pas là pour effrayer : elles sont là pour réveiller. <strong>90 % des accidents sont liés au comportement humain</strong>, ce qui veut dire que 90 % sont évitables.
              </p>

              <blockquote>Les chiffres ne pleurent pas. Mais les familles, si. Chaque nombre est une vie. Chaque vie mérite qu'on agisse.</blockquote>

              <h2>Sources des données</h2>
              <ul>
                <li><strong>ANASER</strong> (Agence nationale de la sécurité routière), données 2025</li>
                <li><strong>OMS / AFRO</strong> (Organisation mondiale de la santé, bureau Afrique)</li>
                <li><strong>Banque mondiale</strong>, rapports sur le coût économique des accidents</li>
                <li><strong>Gendarmerie nationale</strong>, recensement des accidents 2025</li>
              </ul>

              <div className="sms-cta-band">
                <h2>Ces chiffres te touchent ? Agis avec nous.</h2>
                <div className="main-blue-button-hover">
                  <Link href="/s-engager">Je m'engage</Link>
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
          { href: '/association', label: 'Qui sommes-nous' },
          { href: '/actions', label: 'Nos 8 actions' },
          { href: '/campagnes', label: 'Voir les campagnes' },
          { href: '/s-engager', label: 'Devenir bénévole' },
        ]}
      />
    </>
  );
}
