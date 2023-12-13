/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */

// React imports
import PropTypes from 'prop-types';
import { RichText } from '@graphcms/rich-text-react-renderer';

// imports
import './style.scss';

function PostCard({ posts }) {
  const unipopiaPosts = posts
    .filter((post) => post.node.categories.some((category) => category.nom === 'Unipopia'))
    .sort((a, b) => {
      // Convertir les dates en objets Date pour la comparaison
      const dateA = new Date(a.node.dateArticle);
      const dateB = new Date(b.node.dateArticle);

      // Comparer les dates
      return dateB - dateA; // Tri décroissant (plus récent en haut)
    });

  // change the dateArticle format
  const formatDate = (rawDate) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = new Date(rawDate).toLocaleDateString('fr-FR', options);
    return formattedDate;
  };

  return (
    <article className="post__block">
      {unipopiaPosts.map((unipopia) => (
        <div key={unipopia.node.slug}>
          <header className="post__title">
            {unipopia.node.titre}
          </header>
          <div className="post__date">
            Article du {formatDate(unipopia.node.dateArticle)}
          </div>
          <div className="post__excerpt">
            {unipopia.node.extrait}
          </div>
          <div className="post__content">
            {/* {console.log('Contenu brut :', unipopia.node.contenu.raw)}
            {console.log('assets are you here :', unipopia.node.fichier)} */}
            {console.log('How many post do I have:', unipopiaPosts)}
            <RichText
              content={unipopia.node.contenu.raw}
              renderers={{
                bold: ({ children }) => <span className="strong">{children}</span>,
                italic: ({ children }) => <span className="italic">{children}</span>,
                h3: ({ children }) => <span className="post__content-h3">{children}</span>,
              }}
            />
            {/* Boucle pour afficher les fichiers */}
            {unipopia.node.fichier && unipopia.node.fichier.map((fichier) => (
              <a href={fichier.url} target="_blank" rel="noreferrer">
                <img
                  key={fichier.id}
                  src={fichier.url}
                  alt={fichier.nomDuFichier}
                  title={fichier.nomDuFichier}
                />
              </a>
            ))}
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
        }),
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
