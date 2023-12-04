/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */

// React imports
import PropTypes from 'prop-types';
import { RichText } from '@graphcms/rich-text-react-renderer';

// imports
import './style.scss';

function LeLieuPostcard({ posts }) {
  const leLieuPosts = posts.filter((post) => post.node.categories.some((category) => category.nom === 'Le Lîeu'));

  return (
    <article className="post__block">
      {leLieuPosts.map((lieu) => (
        <div key={lieu.node.slug}>
          <div className="post__title">
            {lieu.node.titre}
          </div>
          <div className="post__excerpt">
            {lieu.node.extrait}
          </div>
          <div className="post__content">
            {console.log('Contenu brut :', lieu.node.contenu.raw)}
            {/* {console.log('assets are you here :', lieu.node.fichier)} */}

            <RichText
              content={lieu.node.contenu.raw}
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
