// React imports
import { Link } from 'react-router-dom';

// Component imports
import Button from '../../components/Button';
import Container from '../../components/Container';
import OnePodcast from '../../components/OnePodcast';
// imports
import './style.scss';

function Podcast() {
  return (
    <Container className="container__podcast">
      <section className="Podcast">
        <header className="Podcast__header header">
          <h2>Podcasts</h2>
        </header>
        <OnePodcast />
        <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="Podcast" /></Link>
        <Link to="/multimedia"><Button type="button" label="Retourner à la liste des média" btnstyle="Podcast" /></Link>
      </section>
    </Container>
  );
}

export default Podcast;
