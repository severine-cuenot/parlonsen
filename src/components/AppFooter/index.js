// React imports
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Imports
import './style.scss';
import fbimg from '../../../public/img/facebook.png';

function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__topblock">
        <div className="footer__right-block">
          <h1 className="footer__right-block-title header">Le Parlons-en</h1>
          <p>
            Un espace de débat et de projets par les habitant.e.s de la rue et de la ville
          </p>
          <a href="https://www.facebook.com/p/Le-Lîeu-100070756573019/" target="_blank" rel="noreferrer"><img src={fbimg} alt="Rejoignez-nous sur Facebook" className="footer__fbimg-dsktop" /></a>
        </div>
        <nav className="footer__left-block">
          <div className="footer__left-block1">
            <ul>
              <h3 className="footer__left-block-title">Explorer</h3>
              <li><Link to="/parlonsen" className="link">Le Parlons-en</Link></li>
              <li><Link to="/lieu" className="link">Le Lîeu</Link></li>
              <li><Link to="/unipopia" className="link">Unipopia</Link></li>
            </ul>
            <ul>
              <h3 className="footer__left-block-title">Contenu multimédia</h3>
              <li><Link to="/multimedia/video" className="link">Vidéos</Link></li>
              <li><Link to="/multimedia/ecrit" className="link">Ecrits</Link></li>
              <li><Link to="/multimedia/podcast" className="link">Podcasts</Link></li>
              <li><Link to="/multimedia/multimedia" className="link">Photos</Link></li>
            </ul>
          </div>
          <div className="footer__left-block3">
            <ul>
              <h3 className="footer__left-block-title">à propos</h3>
              <li><Link to="/about" className="link">Nous trouver</Link></li>
              <li><HashLink to="/about#nouscontacter" className="link">Nous contacter</HashLink></li>
              <li><a href="https://www.facebook.com/p/Le-Lîeu-100070756573019/" target="_blank" rel="noreferrer"><img src={fbimg} alt="Rejoignez-nous sur Facebook" className="footer__fbimg-mobile" /></a></li>
            </ul>
            <ul>
              <h3 className="footer__left-block-title">Légal</h3>
              <li><Link to="/policy" className="link">Mentions légales</Link></li>
              <li><Link to="/credits" className="link">Crédits</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <hr className="footer__separation" />
      <div className="footer__copyright">
        <p>Tous droits réservés &copy; {year} Association Parlons-en </p>
        <p>Site réalisé par <a href="http://severine-cuenot.surge.sh/" className="link">Nine</a></p>
      </div>
    </footer>
  );
}

export default AppFooter;
