/* eslint-disable max-len */
// React imports
import { Link } from 'react-router-dom';

// Component imports
import Button from '../../components/Button';
import Container from '../../components/Container';
import Page from '../../components/Page';
import LivretCard from '../../components/LivretCard';

// imports
import './style.scss';

function Livret() {
  return (
    <Page>
      <header className="livret__header">
        <h1 className="livret__header--title header">Ecrits</h1>
      </header>
      <Container className="container__livret">
        <section>
          <LivretCard />
          <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="video1" /></Link>
          <Link to="/multimedia"><Button type="button" label="Retourner à la liste des média" btnstyle="video2" /></Link>
        </section>
      </Container>
    </Page>
  );
}

export default Livret;
