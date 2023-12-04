/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */

// React imports
import PropTypes from 'prop-types';
import { RichText } from '@graphcms/rich-text-react-renderer';

// imports
import './style.scss';

function VideoCard({ posts }) {
  const videos = posts.filter((post) => post.node.categories.some((category) => category.nom === 'Videos'));
  console.log('Nombre total d\'articles :', posts.length);
  console.log('Nombre d\'articles dans la catégorie Vidéos :', videos.length);

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
            {/* Boucle pour afficher les fichiers */}
            {video.node.fichier && video.node.fichier.map((fichier) => (
              <iframe
                key={fichier.id}
                width="853"
                height="480"
                src={fichier.lienvideo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={fichier.nomDuFichier}
              />
            ))}

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
