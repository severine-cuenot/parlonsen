// React imports
import { useEffect, useState } from 'react';

// Components imports
import ParlonsEnPostCard from '../../components/PostCard/ParlonsEnPostcard';
import Page from '../../components/Page';
import Container from '../../components/Container';
import Header from '../../components/CategoriesHeader';

// Imports
import getPosts from '../../../services/getPosts';
import './style.scss';

function Parlonsen() {
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
        pageTitle="Le Parlons-en"
        specificClass="parlonsen__header"
      />
      <Container className="container__parlonsen">
        <ParlonsEnPostCard posts={postList} />
      </Container>
    </Page>
  );
}

export default Parlonsen;
