'use client';

import { useState } from 'react';

export default function ContactForm({ variant = 'default' }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '' });

  const formStyle =
    variant === 'standalone'
      ? {
          backgroundImage: 'none',
          backgroundColor: 'var(--surface-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-md)',
          padding: '44px 40px',
        }
      : undefined;

  const inputStyle =
    variant === 'standalone'
      ? {
          width: '100%',
          border: '1.5px solid var(--border-strong)',
          borderRadius: 'var(--radius-sm)',
          background: 'var(--white)',
          color: 'var(--ink-900)',
          padding: '12px 14px',
          height: 'auto',
          marginBottom: '18px',
          fontFamily: 'var(--font-sans)',
          fontSize: '15px',
        }
      : undefined;

  const textareaStyle =
    variant === 'standalone'
      ? { ...inputStyle, minHeight: '120px', resize: 'vertical' }
      : undefined;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = {};
    new FormData(form).forEach((value, key) => {
      data[key] = value;
    });

    setLoading(true);
    setStatus({ message: '', type: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const payload = await res.json().catch(() => ({}));

      if (res.ok && payload.ok) {
        form.reset();
        setStatus({
          message: 'Message envoyé. Merci ! Nous revenons vers vous sous 48 h.',
          type: 'success',
        });
      } else {
        const firstFieldError =
          payload.fields && Object.keys(payload.fields).length > 0
            ? payload.fields[Object.keys(payload.fields)[0]]
            : null;
        setStatus({
          message:
            firstFieldError ||
            payload.error ||
            "L'envoi a échoué. Écrivez-nous à contact@safemove-senegal.org.",
          type: 'error',
        });
      }
    } catch {
      setStatus({
        message:
          'Connexion impossible. Vérifiez votre réseau ou écrivez-nous à contact@safemove-senegal.org.',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} noValidate style={formStyle}>
      <div className="row">
        <div className="col-lg-12">
          <fieldset>
            <label htmlFor="name">Nom et prénom</label>
            <input type="text" name="name" id="name" placeholder="Aïssatou Diop" autoComplete="name" required style={inputStyle} />
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="vous@exemple.sn" autoComplete="email" required style={inputStyle} />
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <label htmlFor="city">Ville ou quartier</label>
            <input type="text" name="city" id="city" placeholder="Dakar, Thiès, Saint-Louis…" required style={inputStyle} />
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <label htmlFor="engagement">Votre porte d'entrée</label>
            <select name="engagement" id="engagement" style={inputStyle}>
              <option>Bénévole de terrain</option>
              <option>Relais communautaire</option>
              <option>Partenaire institutionnel</option>
              <option>Partenaire technique (auto-école, transporteur, syndicat)</option>
              <option>Créateur de contenu</option>
              <option>École ou établissement scolaire</option>
              <option>Autre / je veux en savoir plus</option>
            </select>
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <label htmlFor="message">Votre message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Dites-nous en quelques mots comment vous souhaitez agir."
              minLength="10"
              required
              style={textareaStyle}
            ></textarea>
          </fieldset>
        </div>
        <div className="sms-honeypot" aria-hidden="true">
          <label htmlFor="website">Ne pas remplir ce champ</label>
          <input type="text" name="website" id="website" tabIndex="-1" autoComplete="off" />
        </div>
        <div className="col-lg-12">
          <fieldset>
            <button type="submit" id="form-submit" className="main-button" disabled={loading}>
              {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}
            </button>
            <p
              className={`sms-form-status${status.type ? ' is-' + status.type : ''}`}
              role="status"
              aria-live="polite"
              hidden={!status.message}
            >
              {status.message}
            </p>
          </fieldset>
        </div>
      </div>
    </form>
  );
}
