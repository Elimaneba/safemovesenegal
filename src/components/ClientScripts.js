'use client';

import { useEffect } from 'react';

const SCRIPTS = [
  '/vendor/jquery/jquery.min.js',
  '/vendor/bootstrap/js/bootstrap.bundle.min.js',
  '/assets/js/owl-carousel.js',
  '/assets/js/animation.js',
  '/assets/js/imagesloaded.js',
  '/assets/js/custom.js',
];

let loadedOnce = false;

export default function ClientScripts() {
  useEffect(() => {
    if (loadedOnce) return;
    loadedOnce = true;

    const loadScript = (src) =>
      new Promise((resolve) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          resolve();
          return;
        }
        const el = document.createElement('script');
        el.src = src;
        el.defer = true;
        el.onload = resolve;
        el.onerror = resolve;
        document.body.appendChild(el);
      });

    (async () => {
      for (const src of SCRIPTS) {
        await loadScript(src);
      }
    })();
  }, []);

  return null;
}
