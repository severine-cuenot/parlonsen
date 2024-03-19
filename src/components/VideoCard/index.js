/* eslint-disable max-len */

// React imports
import PropTypes from 'prop-types';
import { RichText } from '@graphcms/rich-text-react-renderer';

// imports
import './style.scss';

function VideoCard({ posts }) {
  // const videos = posts.filter((post) => post.node.categories.some((category) => category.nom === 'Vidéos'));

  const videos = posts
    .filter((post) => post.node.categories.some((category) => category.nom === 'Vidéos'))
    .sort((a, b) => {
      // Convertir les dates en objets Date pour la comparaison
      const dateA = new Date(a.node.dateArticle);
      const dateB = new Date(b.node.dateArticle);

      // Comparer les dates
      return dateB - dateA; // Tri décroissant (plus récent en haut)
    });
  // change the dateArticle format
  const formatDate = (rawDate) => {
    const options = { month: 'long', year: 'numeric' };
    const formattedDate = new Date(rawDate).toLocaleDateString('fr-FR', options);
    return formattedDate;
  };

  return (
    <>
      <article className="post__block">
        <h2>Les vidéos du Parlons-en</h2>
        <div className="post__videos-block">
          {videos.map((video) => (
            <div key={video.node.slug} className="post__videoCard">
              <h3 className="post__videoCardTitle header">
                {video.node.titre}
              </h3>
              <div className="post__videoCardDate">
                {formatDate(video.node.dateArticle)}
              </div>
              <div className="post__videoCardContent">
                {console.log('Contenu brut :', video.node.contenu.raw.children)}

                <RichText
                  content={video.node.contenu.raw.children}
                  renderers={{
                    bold: ({ children }) => <span className="strong">{children}</span>,
                    italic: ({ children }) => <span className="italic">{children}</span>,
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
        </div>
      </article>
      <article className="post__block">
        <h2>Silence on parle&nbsp;!</h2>
        <div className="post__videos-block">
          {videos.map((video) => (
            <div key={video.node.slug} className="post__videoCard">
              <h3 className="post__videoCardTitle header">
                {video.node.titre}
              </h3>
              <div className="post__videoCardDate">
                {formatDate(video.node.dateArticle)}
              </div>
              <div className="post__videoCardContent">
                {console.log('Contenu brut :', video.node.contenu.raw.children)}

                <RichText
                  content={video.node.contenu.raw.children}
                  renderers={{
                    bold: ({ children }) => <span className="strong">{children}</span>,
                    italic: ({ children }) => <span className="italic">{children}</span>,
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
        </div>
      </article>
    </>
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
