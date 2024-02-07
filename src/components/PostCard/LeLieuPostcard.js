/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */

// React imports
import PropTypes from 'prop-types';
import { RichText } from '@graphcms/rich-text-react-renderer';

// imports
import './style.scss';

function LeLieuPostcard({ posts }) {
  const leLieuPosts = posts
    .filter((post) => post.node.categories.some((category) => category.nom === 'Le Lîeu'))
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
      {leLieuPosts.map((lieu) => (
        <div key={lieu.node.slug}>
          <header className="post__title">
            {lieu.node.titre}
          </header>
          <div className="post__date">
            Article du {formatDate(lieu.node.dateArticle)}
          </div>
          <div className="post__excerpt">
            {lieu.node.extrait}
          </div>
          <div className="post__content">
            {console.log('Contenu brut :', lieu.node.contenu.raw)}
            {/* {console.log('assets are you here :', lieu.node.fichier)} */}

            <RichText
              content={lieu.node.contenu.raw}
              renderers={{
                bold: ({ children }) => <span className="strong">{children}</span>,
                italic: ({ children }) => <span className="italic">{children}</span>,
                h3: ({ children }) => <span className="post__content-h3">{children}</span>,
              }}
            />
            {/* Boucle pour afficher les fichiers */}
            {lieu.node.fichier && lieu.node.fichier.map((fichier) => (
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

LeLieuPostcard.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        titre: PropTypes.string.isRequired,
        extrait: PropTypes.string,
        auteur: PropTypes.shape({
          nom: PropTypes.string,
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

export default LeLieuPostcard;
