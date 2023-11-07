// React imports
import { Link } from 'react-router-dom';

// Imports
import './style.scss';
import fbimg from '../../../public/img/facebook.png';

function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__topblock">
        <div className="footer__right-block">
          <h1 className="footer__right-block-title header">LLLPE</h1>
          <p>
            Un espace de débat et de projets par les habitant.e.s de la rue et de la ville
          </p>
          <a href="https://www.facebook.com/p/Le-Lîeu-100070756573019/" target="_blank" rel="noreferrer"><img src={fbimg} alt="Rejoignez-nous sur Facebook" className="footer__fbimg-dsktop" /></a>
        </div>
        <nav className="footer__left-block">
          <div className="footer__left-block1">
            <ul>
              <h2 className="footer__left-block-title">Explorer</h2>
              <li><Link to="/unipopia">Unipopia</Link></li>
              <li><Link to="/lieu">Le Lîeu</Link></li>
              <li><Link to="/parlonsen">Le Parlons-en</Link></li>
            </ul>
            <ul>
              <h2 className="footer__left-block-title">Contenu multimédia</h2>
              <li><Link to="/multimedia">Vidéos</Link></li>
              <li><Link to="/multimedia">Livrets</Link></li>
              <li><Link to="/multimedia">Podcasts</Link></li>
              <li><Link to="/multimedia">Photos</Link></li>
            </ul>
          </div>
          <div className="footer__left-block2">
            <ul>
              <h2 className="footer__left-block-title">à propos</h2>
              <li><Link to="/about">Nous trouver</Link></li>
              <li><Link to="/about">Nous contacter</Link></li>
              <li><a href="https://www.facebook.com/p/Le-Lîeu-100070756573019/" target="_blank" rel="noreferrer"><img src={fbimg} alt="Rejoignez-nous sur Facebook" className="footer__fbimg-mobile" /></a></li>
            </ul>
            <ul>
              <h2 className="footer__left-block-title">Légal</h2>
              <li><Link to="/policy">Mentions légales</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <hr className="footer__separation" />
      <div className="footer__copyright">
        <p>Tous droits réservés &copy; LLLPE {year}</p>
        <p>Site réalisé par <a href="http://severine-cuenot.surge.sh/">Nine</a></p>
      </div>
    </footer>
  );
}

export default AppFooter;
