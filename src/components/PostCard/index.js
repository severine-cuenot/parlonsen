/* eslint-disable react/no-array-index-key */

// React imports
// import { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from '@graphcms/rich-text-react-renderer';
// import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
// import ModalImage from 'react-modal-image';

// imports
import './style.scss';

function PostCard({ posts }) {
  const unipopiaPosts = posts.filter((post) => post.node.categories.some((category) => category.nom === 'Unipopia'));

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
                image: ({ node }) => {
                  const imageUrl = node.children[0].src;
                  return (
                    <a href={imageUrl} target="_blank" rel="noopener noreferrer">
                      <img
                        alt={node.children[0].title}
                        src={imageUrl}
                        height={node.children[0].height}
                        width={node.children[0].width}
                      />
                    </a>
                  );
                },
              }}
            />
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
