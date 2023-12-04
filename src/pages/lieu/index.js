// React imports
import { useEffect, useState } from 'react';

// Components imports
import LeLieuPostcard from '../../components/PostCard/LeLieuPostcard';
import Page from '../../components/Page';
import Container from '../../components/Container';
import Header from '../../components/CategoriesHeader';

// Imports
import getPosts from '../../../services/getPosts';
import './style.scss';

function Lieu() {
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

  // const backgroundImage = headerIMG;

  return (
    <Page>
      <Header
        pageTitle="Le Lîeu"
        specificClass="lieu__header"
      />
      <Container className="container__lieu">
        <LeLieuPostcard posts={postList} />
      </Container>
    </Page>
  );
}

export default Lieu;
