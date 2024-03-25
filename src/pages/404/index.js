// REACT import
import { Link } from 'react-router-dom';

// Components import
import Container from '../../components/Container';
import Button from '../../components/Button';

import './style.scss';

function NotFound() {
  return (
    <Container className="container__notFound">
      <section className="notFound">
        <header className="coeur__header header">
          <h2>Erreur 404&nbsp;!</h2>
        </header>
        <p>La page que vous chercher n'existe pas :(</p>
        <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="coeur" /></Link>
      </section>
    </Container>
  );
}

export default NotFound;
