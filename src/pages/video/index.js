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
// import videoImg from '../../../public/img/video_affiche.jpg';
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
        {/* <div className="video__header-block">
          <div className="video__header-block-img">
            <img src={videoImg} alt="Affiche Silence on parle" className="img-video" />
          </div>
          <p className="Onevideo__excerpt">
            Quand on est situation de précarité, quand on vit une exclusion ou que l'on n'a pas accès à ses droits, on n'est pas assez écoutés ni pris en compte. Malgré les récits qu'on porte et les luttes qu'on construit, on a du mal à se faire entendre.<br />
            "Silence! On parle!" est un dispositif pour porter ces voix dans la ville, interpeller les habitant-e-s et déclencher du débat avec les passant-e-s.<br />
            Le 20 octobre 2018, Place Félix Poulat à Grenoble, le Parlons-en a monté une scène ouverte. De manière  spontanée ou préparée, des personnes, des associations et des collectifs ont pris le micro. Vous retrouverez ici les extraits vidéos de ces interventions.
          </p>
        </div> */}
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
