/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable max-len */
// React imports
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Component imports
import Button from '../../components/Button';
import Container from '../../components/Container';
import CoeurCard from '../../components/CoeurCard';

// imports
import getPosts from '../../../services/getPosts';
import './style.scss';

function Coeur() {
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
    <Container className="container__coeur">
      <section className="coeur">
        <header className="coeur__header header">
          <h2>&#10084;</h2>
        </header>
        <CoeurCard posts={postList} />
      </section>
      <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="about" /></Link>
    </Container>
  );
}

export default Coeur;
