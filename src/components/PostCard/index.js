import { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from '@graphcms/rich-text-react-renderer';
import ModalImage from 'react-modal-image';
import './style.scss';

function PostCard({ posts }) {
  const unipopiaPosts = posts.filter((post) => post.node.categories.some((category) => category.nom === 'Unipopia'));
  const [clickedImage, setClickedImage] = useState(null);

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
            <RichText
              content={unipopia.node.contenu.raw}
              renderers={{
                image: ({ node }) => (
                  <div>
                    <ModalImage
                      alt={node.title}
                      small={node.src}
                      large={node.src}
                      hideZoom
                      onClick={() => setClickedImage(node.src)}
                    />
                  </div>
                ),
              }}
            />
            {clickedImage && (
              <ModalImage
                alt="Clicked Image"
                small={clickedImage}
                large={clickedImage}
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
