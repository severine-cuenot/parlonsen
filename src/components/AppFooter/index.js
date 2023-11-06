// React imports
import { Link } from 'react-router-dom';

// Imports
import './style.scss';

function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__topblock">
        <div className="footer__right-block">
          <h1>LLLPE</h1>
          <p>
            Un espace de débat et de projets par les habitant.e.s de la rue et de la ville
          </p>
        </div>
        <nav className="footer__left-block">
          <ul>
            <h2>Explorer</h2>
            <li>Unipopia</li>
            <li>Le Lîeu</li>
            <li>Le Parlons-en</li>
          </ul>
          <ul>
            <h2>Contenu multimédia</h2>
            <li>Vidéos</li>
            <li>Livrets</li>
            <li>Podcasts</li>
            <li>Photos</li>
          </ul>
          <ul>
            <h2>à propos</h2>
            <li>Nous trouver</li>
            <li>Nous contacter</li>
          </ul>
        </nav>
      </div>
      <div className="footer__copyright">
        <p>Tous droits réservés &copy; Séverine Cuenot {year}<br />
          <Link to="/credits" className="footer__link">&#9825; Crédits </Link>
        </p>
      </div>
    </footer>
  );
}

export default AppFooter;
