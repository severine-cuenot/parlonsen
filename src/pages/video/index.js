/* eslint-disable max-len */
// React imports
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Component imports
import Button from '../../components/Button';
import Container from '../../components/Container';
import Page from '../../components/Page';
import VideoCard from '../../components/VideoCard';

// imports
// import videoImg from '../../../public/img/img_yt.jpg';
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
      <header className="video__header">
        <h1 className="video__header--title header">Vidéos</h1>
        <div className="video__header-block">
          {/* <div className="video__header-block-img">
            <img src={videoImg} alt="Affiche Silence on parle" className="img-video" />
          </div> */}
          <p className="Onevideo__excerpt">
            Accédez à la chaîne Youtube du Lîeu <a href="https://www.youtube.com/@telelieu4042" target="_blank" rel="noreferrer">ici</a>.
          </p>
        </div>
      </header>
      <Container className="container__video">
        <section>
          <VideoCard posts={postList} />
          <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="video1" /></Link>
          <Link to="/multimedia"><Button type="button" label="Retourner à la liste des médias" btnstyle="video2" /></Link>
        </section>
      </Container>
    </Page>
  );
}

export default Podcast;
