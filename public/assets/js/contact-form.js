/**
 * Formulaire de contact Safe Move Sénégal.
 * Envoie les données à /api/contact (fonction serverless Resend) sans recharger la page.
 */
(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  var button = form.querySelector('button[type="submit"]');
  var status = form.querySelector('[data-form-status]');
  var buttonLabel = button ? button.innerHTML : '';

  function setStatus(message, type) {
    if (!status) return;
    status.textContent = message;
    status.className = 'sms-form-status' + (type ? ' is-' + type : '');
    status.hidden = !message;
  }

  function setLoading(isLoading) {
    if (!button) return;
    button.disabled = isLoading;
    button.innerHTML = isLoading ? 'Envoi en cours…' : buttonLabel;
  }

  function firstFieldError(fields) {
    if (!fields) return null;
    var keys = Object.keys(fields);
    return keys.length ? fields[keys[0]] : null;
  }

  form.setAttribute('novalidate', 'novalidate');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var data = {};
    new FormData(form).forEach(function (value, key) {
      data[key] = value;
    });

    setLoading(true);
    setStatus('', null);

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (response) {
        return response
          .json()
          .catch(function () {
            return {};
          })
          .then(function (payload) {
            return { ok: response.ok, payload: payload };
          });
      })
      .then(function (result) {
        if (result.ok && result.payload.ok) {
          form.reset();
          setStatus(
            'Message envoyé. Merci ! Nous revenons vers vous sous 48 h.',
            'success'
          );
          return;
        }

        setStatus(
          firstFieldError(result.payload.fields) ||
            result.payload.error ||
            "L'envoi a échoué. Écrivez-nous à contact@safemove-senegal.org.",
          'error'
        );
      })
      .catch(function () {
        setStatus(
          'Connexion impossible. Vérifiez votre réseau ou écrivez-nous à contact@safemove-senegal.org.',
          'error'
        );
      })
      .then(function () {
        setLoading(false);
      });
  });
})();
