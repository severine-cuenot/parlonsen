// React imports
import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

// Components imports
import PostCard from '../../components/PostCard';
import Page from '../../components/Page';
import Container from '../../components/Container';
import Header from '../../components/CategoriesHeader';

// Imports
import getPosts from '../../../services/getPosts';
// import headerIMG from '../../../public/img/reunion.jpg';
import './style.scss';

function Unipopia() {
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
        pageTitle="Unipopia"
        specificClass="unipopia__header"
      />
      <Container className="container__unipopia">
        <PostCard posts={postList} />
      </Container>
    </Page>
  );
}

export default Unipopia;
