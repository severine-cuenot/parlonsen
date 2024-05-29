/* eslint-disable max-len */
// React imports
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// Component imports
import Button from '../../components/Button';
import Container from '../../components/Container';
import Page from '../../components/Page';
// import OnePodcast from '../../components/OnePodcast';
import PodcastsTabs from '../../components/PodcastsTabs';

// imports
// import logoRadio from '../../../public/img/gresivaudan-logo-white.png';
import jeanno from '../../../public/img/podcast_jean_no.png';
// import getPosts from '../../../services/getPosts';
import './style.scss';

function Podcast() {
  // const [postList, setPostList] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const listOfPosts = await getPosts();
  //       setPostList(listOfPosts);
  //     }
  //     catch (error) {
  //       console.error('Error fetching posts:', error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);
  return (
    <Page>
      <header className="podcast__header">
        <h1 className="podcast__header--title header">Podcasts</h1>
        <div className="podcast__header-block">
          <div className="podcast__header-block-img">
            <a href="https://www.radio-gresivaudan.org/" title="Page officielle de radio Gresivaudan" target="_blank" rel="noreferrer">
              <img src={jeanno} alt="Radio Gresivaudan" className="img-gresivaudan" />
            </a>
          </div>
          <p className="OnePodcast__excerpt">
            Depuis octobre 2018, les "Parlons-en" étaient diffusés sur  <em className="podcast__em"><a href="https://www.radio-gresivaudan.org/nos-emissions/parlons-en/" target="__blank" rel="noreferrer">Radio Grésivaudan</a></em> grâce à notre ami Jean-No, "Jean-No d'la radio".<br />
            Tu nous as quittés en juillet 2023.<br />
            Tu nous manques fort, on ne t'oublie pas&nbsp;! <br />
          </p>
        </div>
      </header>
      <Container className="container__podcast">
        <section>
          <PodcastsTabs />
          {/* <OnePodcast posts={postList} /> */}
          <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="podcast1" /></Link>
          <Link to="/multimedia"><Button type="button" label="Retourner à la liste des médias" btnstyle="podcast2" /></Link>
        </section>
      </Container>
    </Page>
  );
}

export default Podcast;
