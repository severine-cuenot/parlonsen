/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */

// React imports
import PropTypes from 'prop-types';
import { RichText } from '@graphcms/rich-text-react-renderer';

// imports
import './style.scss';

function VideoCard({ posts }) {
  const videos = posts.filter((post) => post.node.categories.some((category) => category.nom === 'Vidéos'));

  return (
    <article className="post__block">
      {videos.map((video) => (
        <div key={video.node.slug}>
          <div className="post__title">
            {video.node.titre}
          </div>
          <div className="post__content">
            {console.log('Contenu brut :', video.node.contenu.raw.children)}
            {console.log('assets are you here :', video.node.fichier)}

            <RichText
              content={video.node.contenu.raw.children}
              renderers={{
                bold: ({ children }) => <span className="strong">{children}</span>,
                italic: ({ children }) => <span className="italic">{children}</span>,
              }}
            />

          </div>
          <div className="post__excerpt">
            {video.node.extrait}
          </div>
        </div>
      ))}
    </article>
  );
}

VideoCard.propTypes = {
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

export default VideoCard;
