// React imports
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Component imports
import Button from '../../components/Button';
import Container from '../../components/Container';
import Page from '../../components/Page';
import OnePodcast from '../../components/OnePodcast';

// imports
import logoRadio from '../../../public/img/gresivaudan-logo-white.png';
import getPosts from '../../../services/getPosts';
import './style.scss';

function Podcast() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const listOfPosts = await getPosts();
        setPostList(listOfPosts);
      }
      catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <Page>
      <header className="podcast__header">
        <h1 className="podcast__header--title header">Podcasts</h1>
        <div className="podcast__header-block">
          <div className="podcast__header-block-img">
            <a href="https://www.radio-gresivaudan.org/" title="Page officielle de radio Gresivaudan" target="_blank" rel="noreferrer">
              <img src={logoRadio} alt="Radio Gresivaudan" className="img-gresivaudan" />
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
          <OnePodcast posts={postList} />
          <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="podcast1" /></Link>
          <Link to="/multimedia"><Button type="button" label="Retourner à la liste des média" btnstyle="podcast2" /></Link>
        </section>
      </Container>
    </Page>
  );
}

export default Podcast;
