/* eslint-disable max-len */

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
        <div key={video.node.slug} className="post__videoCard">
          <h3 className="post__videoCardTitle header">
            {video.node.titre}
          </h3>
          <div className="post__videoCardContent">
            {console.log('Contenu brut :', video.node.contenu.raw.children)}

            <RichText
              content={video.node.contenu.raw.children}
              renderers={{
                bold: ({ children }) => <span className="strong">{children}</span>,
                italic: ({ children }) => <span className="italic">{children}</span>,
                link: ({ children }) => (
                  <div className="post__video">
                    <iframe
                      className="post__video-block"
                      src={children}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.node.titre}
                      loading="lazy"
                    />
                  </div>
                ),
              }}
            />
            <div className="post__video">
              <iframe
                className="post__video-block"
                src={video.node.extrait}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.node.titre}
                loading="lazy"
              />
            </div>

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
