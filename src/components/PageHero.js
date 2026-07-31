export default function PageHero({ eyebrow, title, intro, image, imageAlt }) {
  return (
    <section className="sms-page-hero" id="contenu">
      <div className="container">
        <div className="row">
          <div className={image ? 'col-lg-7' : 'col-lg-7'}>
            {eyebrow && <span className="sms-eyebrow">{eyebrow}</span>}
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
            {intro && <p>{intro}</p>}
          </div>
          {image && (
            <div className="col-lg-5">
              <div className="sms-hero-visual">
                <img src={image} alt={imageAlt || ''} width="640" height="640" loading="eager" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
