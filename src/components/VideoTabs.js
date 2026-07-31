'use client';

import { useState } from 'react';

const videos = [
  {
    poster: '/assets/images/campagnes/moto-jakarta/moto-jakarta-01.webp',
    src: '/assets/video/campagne-moto-jakarta.webm',
    title: "Le casque, c'est non négociable",
    label: 'Moto Jakarta · Góorgóorlu Certifié',
    thumb: '/assets/images/campagnes/moto-jakarta/moto-jakarta-02.webp',
    thumbTitle: 'Moto Jakarta',
    thumbSub: "Le casque, c'est non négociable",
    downloadLabel: 'Télécharger la campagne moto Jakarta',
  },
  {
    poster: '/assets/images/campagnes/taxi/taxi-01.webp',
    src: '/assets/video/campagne-taxi.webm',
    title: 'Attache-toi. Attache ton client.',
    label: 'Taximen · Diisoo Taxi',
    thumb: '/assets/images/campagnes/taxi/taxi-02.webp',
    thumbTitle: 'Taximen',
    thumbSub: 'Attache-toi. Attache ton client.',
    downloadLabel: 'Télécharger la campagne taxis',
  },
  {
    poster: '/assets/images/campagnes/eleves/eleves-01.webp',
    src: '/assets/video/campagne-eleves.webm',
    title: 'Zone scolaire = vitesse réduite',
    label: 'Élèves · Pencc Ndongo',
    thumb: '/assets/images/campagnes/eleves/eleves-02.webp',
    thumbTitle: 'Élèves',
    thumbSub: "Devant l'école, ralentis",
    downloadLabel: 'Télécharger la campagne scolaire',
  },
  {
    poster: '/assets/images/campagnes/familles/familles-01.webp',
    src: '/assets/video/campagne-famille.webm',
    title: 'Ceinture. Téléphone. Vitesse.',
    label: 'Familles · Njaboot bu Wóór',
    thumb: '/assets/images/campagnes/familles/familles-02.webp',
    thumbTitle: 'Familles',
    thumbSub: 'Notre famille a un pacte',
    downloadLabel: 'Télécharger la campagne familles',
  },
];

export default function VideoTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="naccs">
      <div className="grid">
        <div className="row">
          <div className="col-lg-8">
            <ul className="nacc">
              {videos.map((v, i) => (
                <li key={i} className={i === active ? 'active' : ''}>
                  <div>
                    <div className="thumb">
                      <video controls preload="metadata" playsInline poster={v.poster}>
                        <source src={v.src} type="video/webm" />
                        Votre navigateur ne peut pas lire cette vidéo.{' '}
                        <a href={v.src}>{v.downloadLabel}</a>.
                      </video>
                      <div className="overlay-effect">
                        <h3>{v.title}</h3>
                        <span>{v.label}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4">
            <div className="menu">
              {videos.map((v, i) => (
                <div
                  key={i}
                  className={i === active ? 'active' : ''}
                  onClick={() => setActive(i)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="thumb">
                    <img src={v.thumb} alt={`Vignette de la campagne ${v.thumbTitle} de Safe Move Sénégal`} width="1024" height="1024" loading="lazy" />
                    <div className="inner-content">
                      <h4>{v.thumbTitle}</h4>
                      <span>{v.thumbSub}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
