import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="about footer-item">
              <div className="sms-footer-brand">
                <img src="/assets/images/mark-on-dark.svg" alt="Logo Safe Move Sénégal" width="44" height="44" />
                <span className="sms-wordmark">
                  <span className="nm">Safe Move</span>
                  <span className="sb">Sénégal</span>
                </span>
              </div>
              <p>Chaque geste compte pour une mobilité sûre. Association citoyenne pour la sécurité routière et la mobilité durable au Sénégal.</p>
              <a href="mailto:contact@safemove-senegal.org">contact@safemove-senegal.org</a>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/share/1EfSYywrop/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Safe Move Sénégal"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/safemovesenegal?igsh=dHRlYzY0NWh3cDZh&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Safe Move Sénégal"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="services footer-item">
              <h4>L'association</h4>
              <ul>
                <li><Link href="/association">Notre mission</Link></li>
                <li><Link href="/association">Qui sommes-nous</Link></li>
                <li><Link href="/chiffres">Les chiffres du Sénégal</Link></li>
                <li><Link href="/#faq">Questions fréquentes</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="community footer-item">
              <h4>Agir</h4>
              <ul>
                <li><Link href="/s-engager">Devenir bénévole</Link></li>
                <li><Link href="/s-engager">Devenir partenaire</Link></li>
                <li><Link href="/s-engager">Créateur SMS</Link></li>
                <li><Link href="/actions">Nos 8 actions</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="subscribe-newsletters footer-item">
              <h4>Lettre d'information</h4>
              <p>Nos actions et nos campagnes, directement dans votre boîte mail.</p>
              <form action="#" method="post">
                <label className="sms-visually-hidden" htmlFor="footer-email">Votre email</label>
                <input type="email" name="email" id="footer-email" placeholder="Votre email" required />
                <button type="submit" className="main-button" aria-label="S'inscrire à la lettre d'information">
                  <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="copyright">
              <p>
                © 2025 Safe Move Sénégal, Association citoyenne pour la sécurité routière et la mobilité durable.
                <br />
                « Chaque geste compte pour une mobilité sûre. » · Sources des données : <Link href="/chiffres">ANASER, OMS, Gendarmerie nationale, Banque mondiale</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
