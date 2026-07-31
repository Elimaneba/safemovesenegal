import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata = {
  title: 'Contact, Safe Move Sénégal',
  description:
    "Contactez Safe Move Sénégal : bénévolat, partenariat, création de contenu, informations. Écrivez à contact@safemove-senegal.org ou remplissez le formulaire.",
  alternates: { canonical: 'https://www.safemove-senegal.org/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre <em>engagement</em> pour des routes <span>plus sûres</span>"
        intro="Bénévolat, partenariat, création de contenu ou simple curiosité : écrivez-nous. Un référent Safe Move Sénégal vous répondra sous 72 heures."
      />
      <Breadcrumb
        items={[
          { href: '/', label: 'Accueil' },
          { label: 'Contact', current: true },
        ]}
      />

      <section className="sms-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div id="map" style={{ marginBottom: '30px' }}>
                <iframe
                  src="https://maps.google.com/maps?q=Dakar,+S%C3%A9n%C3%A9gal&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="360px"
                  style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                  loading="lazy"
                  title="Carte de Dakar, Sénégal, zone d'action de Safe Move Sénégal"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="info" style={{ marginTop: '20px' }}>
                <p style={{ fontSize: '18px' }}>
                  <i className="fa fa-envelope" style={{ background: 'var(--green-500)', color: '#fff', borderRadius: 'var(--radius-sm)', padding: '10px', marginRight: '10px' }}></i>{' '}
                  <a href="mailto:contact@safemove-senegal.org" style={{ color: 'var(--green-700)', fontWeight: '600' }}>contact@safemove-senegal.org</a>
                </p>
                <p style={{ fontSize: '18px' }}>
                  <i className="fa fa-map-marker" style={{ background: 'var(--green-500)', color: '#fff', borderRadius: 'var(--radius-sm)', padding: '10px', marginRight: '10px' }}></i>{' '}
                  Dakar, Sénégal, 4 régions pilotes
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <ContactForm variant="standalone" />
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: '/s-engager', label: "S'engager" },
          { href: '/actions', label: 'Nos 8 actions' },
          { href: '/association', label: 'Qui sommes-nous' },
          { href: '/campagnes', label: 'Voir les campagnes' },
        ]}
      />
    </>
  );
}
