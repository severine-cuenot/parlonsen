/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */

// React imports
import { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from '@graphcms/rich-text-react-renderer';
// import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import ModalImage from 'react-modal-image';

// imports
import './style.scss';

function PostCard({ posts }) {
  const unipopiaPosts = posts.filter((post) => post.node.categories.some((category) => category.nom === 'Unipopia'));
  const [clickedImage, setClickedImage] = useState('');

  return (
    <article className="post__block">
      {unipopiaPosts.map((unipopia) => (
        <div key={unipopia.node.slug}>
          <div className="post__title">
            {unipopia.node.titre}
          </div>
          <div className="post__excerpt">
            {unipopia.node.extrait}
          </div>
          <div className="post__content">
            {console.log('Contenu brut :', unipopia.node.contenu.raw)}
            <RichText
              content={unipopia.node.contenu.raw}
              renderers={{
                image: ({ node }) => (
                  <a href={`https://media.graphassets.com/resize=width:${node.width},height:${node.height}/${node.handle}`} target="_blank" rel="noreferrer">
                    <img
                      alt={node.title}
                      src={node.src}
                      height={node.height}
                      width={node.width}
                      onClick={() => {
                        setClickedImage(node.src ?? '');
                      }}
                    />
                  </a>
                ),
              }}
            />
            {clickedImage && (
            <ModalImage
              large={clickedImage}
              title="Image Title"
          // @ts-expect-error The types for this library aren't updated, but it does support the onClose prop
          // See https://github.com/aautio/react-modal-image/tree/master#lightbox-only-api-for-advanced-usage
              onClose={() => setClickedImage(null)}
            />
            )}
          </div>
        </div>
      ))}
    </article>
  );
}

PostCard.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        titre: PropTypes.string.isRequired,
        extrait: PropTypes.string,
        auteur: PropTypes.shape({
          nom: PropTypes.string.isRequired,
        }).isRequired,
        contenu: PropTypes.shape({
          raw: PropTypes.shape({
            children: PropTypes.array.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export default PostCard;
