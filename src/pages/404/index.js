/* eslint-disable max-len */
// REACT import
import { Link } from 'react-router-dom';

// Components import
import Container from '../../components/Container';
import Button from '../../components/Button';

// Imports
import claireBulle from '../../../public/img/404.jpg';

import './style.scss';

function NotFound() {
  return (
    <Container className="container__notFound">
      <section className="notFound">
        <div className="notFound__leftBlock">
          <img src={claireBulle} alt="Page non trouvée" />
        </div>
        <div className="notFound__rightBlock">
          <header className="notFound__header header">
            <h2>Erreur 404&nbsp;!</h2>
          </header>
          <p>
            Oups&nbsp;! Il semblerait que vous vous soyez égaré...<br />
            La page que vous cherchez n'existe pas :(
          </p>
          <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="notFound" /></Link>
        </div>
      </section>
    </Container>
  );
}

export default NotFound;
