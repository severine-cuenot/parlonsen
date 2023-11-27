// React imports
import { Link } from 'react-router-dom';

// Component imports
import Button from '../../components/Button';
import Container from '../../components/Container';
import Page from '../../components/Page';
import OnePodcast from '../../components/OnePodcast';

// imports

import logoRadio from '../../../public/img/gresivaudan-logo.svg';
import './style.scss';

function Podcast() {
  return (
    <Page>
      <header className="podcast__header">
        <h2 className="podcast__header--title header">Podcasts</h2>
        <div className="podcast__header-block">
          <div className="podcast__header-block-img">
            <a href="https://www.radio-gresivaudan.org/" target="_blank" title="Page officielle de radio Gresivaudan" rel="noreferrer">
              <img src={logoRadio} alt="Radio Gresivaudan" />
            </a>
          </div>
          <p className="OnePodcast__excerpt">
            Depuis octobre 2018, les "Parlons-en" sont diffusés sur <em className="podcast__em">Radio Grésivaudan</em> chaque 4ème mercredi du mois&nbsp;! <br />
            Plus d'infos sur le site de <em className="podcast__em"><a href="https://www.radio-gresivaudan.org/?s=parlons-en" target="__blank" rel="noreferrer">Radio Grésivaudan</a></em>.
          </p>
        </div>
      </header>
      <Container className="container__podcast">
        <section>
          <OnePodcast />
          <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="podcast1" /></Link>
          <Link to="/multimedia"><Button type="button" label="Retourner à la liste des média" btnstyle="podcast2" /></Link>
        </section>
      </Container>
    </Page>
  );
}

export default Podcast;
