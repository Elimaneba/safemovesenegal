import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 15;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide (JSON attendu).' }, { status: 400 });
  }

  const { name, email, city, engagement, message, website } = body;

  if (website) {
    return NextResponse.json({ ok: true, spam: true });
  }

  const fields = {};
  if (!name || name.trim().length < 2) fields.name = 'Veuillez indiquer votre nom.';
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fields.email = 'Veuillez indiquer un email valide.';
  if (!city || city.trim().length < 2) fields.city = 'Veuillez indiquer votre ville ou quartier.';
  if (!message || message.trim().length < 10) fields.message = 'Votre message doit faire au moins 10 caractères.';

  if (Object.keys(fields).length > 0) {
    return NextResponse.json({ error: 'Certains champs sont invalides.', fields }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'contact@safemove-senegal.org';
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Safe Move Sénégal <site@safemove-senegal.org>';

  if (!apiKey) {
    console.error('RESEND_API_KEY manquant.');
    return NextResponse.json(
      { error: "Le service d'envoi d'email n'est pas configuré. Écrivez-nous à contact@safemove-senegal.org." },
      { status: 500 }
    );
  }

  const html = `
    <h2>Nouveau message — Safe Move Sénégal</h2>
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>Email :</strong> ${escapeHtml(email)}</p>
    <p><strong>Ville / Quartier :</strong> ${escapeHtml(city)}</p>
    <p><strong>Porte d'entrée :</strong> ${escapeHtml(engagement || 'Non précisé')}</p>
    <hr>
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  const text = `Nouveau message — Safe Move Sénégal\n\nNom : ${name}\nEmail : ${email}\nVille : ${city}\nPorte d'entrée : ${engagement || 'Non précisé'}\n\nMessage :\n${message}`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[SMS] Nouveau message de ${name}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      console.error('Resend error:', res.status, errData);
      return NextResponse.json(
        { error: "L'envoi a échoué côté serveur. Écrivez-nous à contact@safemove-senegal.org." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Erreur réseau. Écrivez-nous à contact@safemove-senegal.org.' },
      { status: 500 }
    );
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
