// React imports
import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

// Components imports
import PostCard from '../../components/PostCard';

// Imports
import getPosts from '../../../services/getPosts';
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

  return (
    <div className="unipopia">
      <h1 className="header">Ceci est la page Unipopia</h1>
      <PostCard posts={postList} />
    </div>
  );
}

// Unipopia.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default Unipopia;
