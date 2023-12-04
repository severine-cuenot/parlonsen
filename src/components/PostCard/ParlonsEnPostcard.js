/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */

// React imports
import PropTypes from 'prop-types';
import { RichText } from '@graphcms/rich-text-react-renderer';

// imports
import './style.scss';

function ParlonsEnPostCard({ posts }) {
  const parlonsEnPosts = posts.filter((post) => post.node.categories.some((category) => category.nom === 'Parlons-en'));

  return (
    <article className="post__block">
      {parlonsEnPosts.map((parlonsen) => (
        <div key={parlonsen.node.slug}>
          <div className="post__title">
            {parlonsen.node.titre}
          </div>
          <div className="post__excerpt">
            {parlonsen.node.extrait}
          </div>
          <div className="post__content">
            {console.log('Contenu brut :', parlonsen.node.contenu.raw)}
            {/* {console.log('assets are you here :', parlonsen.node.fichier)} */}

            <RichText
              content={parlonsen.node.contenu.raw}
            />
            {/* Boucle pour afficher les fichiers */}
            {parlonsen.node.fichier && parlonsen.node.fichier.map((fichier) => (
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

ParlonsEnPostCard.propTypes = {
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

export default ParlonsEnPostCard;
