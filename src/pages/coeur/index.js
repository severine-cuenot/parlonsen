/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable max-len */
// React imports
import { Link } from 'react-router-dom';

// Component imports
import Button from '../../components/Button';
import Container from '../../components/Container';
import CoeurCard from '../../components/CoeurCard';
// imports
import './style.scss';

function Coeur() {
  return (
    <Container className="container__coeur">
      <section className="credits">
        <header className="credits__header header">
          <h2>&#10084;</h2>
        </header>
        <CoeurCard />
        <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="credits" /></Link>
      </section>
    </Container>
  );
}

export default Coeur;
