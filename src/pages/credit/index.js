/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable max-len */
// React imports
import { Link } from 'react-router-dom';

// Component imports
import Button from '../../components/Button';
import Container from '../../components/Container';
// imports
import './style.scss';

function Credits() {
  return (
    <Container className="container__credits">
      <section className="credits">
        <header className="credits__header header">
          <h1>Crédits</h1>
        </header>
        <ul className="credits__text" role="list">
          <li>&diams; Illustration de la page 404 et design du site réalisés par <a href="http://nineinjections.fr/" target="_blank" rel="noreferrer" title="design et illustrations du site">Nine</a></li>
          <li>&diams; Icon des vidéos créée par <a href="https://www.flaticon.com/free-icons/video" target="_blank" rel="noreferrer" title="video icons">Freepik - Flaticon</a></li>
          <li>&diams; Icon des livres créée par <a href="https://www.flaticon.com/free-icons/book" title="book icons" target="_blank" rel="noreferrer">mikan933 - Flaticon</a></li>
          <li>&diams; Icon des podcasts créée par<a href="https://www.flaticon.com/free-icons/podcast" title="podcast icons" target="_blank" rel="noreferrer"> Freepik - Flaticon</a></li>
          <li>&diams; Icon des images créée par <a href="https://www.flaticon.com/free-icons/picture" title="picture icons" target="_blank" rel="noreferrer">FauzIDEA - Flaticon</a></li>
          <li>&diams; Icon du "go to top" créée par <a href="https://www.flaticon.com/free-icons/top" title="top icons" target="_blank" rel="noreferrer">Mayor Icons - Flaticon</a></li>
        </ul>
        <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="credits" /></Link>
      </section>
    </Container>
  );
}

export default Credits;
