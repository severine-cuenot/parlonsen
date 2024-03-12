/* eslint-disable max-len */
import { RichText } from '@graphcms/rich-text-react-renderer';
import PropTypes from 'prop-types';

// Components imports

// imports
import './style.scss';

function CoeurCard({ posts }) {
  const coeurPosts = posts.filter((post) => post.node.categories.some((category) => category.nom === 'Coeur'));

  return (
    <section className="oneCoeur__block">
      {coeurPosts.map((coeur) => (
        <article key={coeur.node.slug} className="oneCoeur__card">
          <h3 className="oneCoeur__title header">
            {coeur.node.titre}
          </h3>
          <div className="oneCoeur__content">
            {console.log('Contenu brut :', coeur.node.contenu.raw.children)}

            <span className="oneCoeur__text">
              <RichText
                content={coeur.node.contenu.raw.children}
                renderers={{
                  bold: ({ children }) => <span className="strong">{children}</span>,
                  italic: ({ children }) => <span className="italic">{children}</span>,
                }}
              />
            </span>
            {/* Boucle pour afficher les fichiers */}
            {coeur.node.fichier && coeur.node.fichier.map((fichier) => (
              <img
                key={fichier.id}
                src={fichier.url}
                alt={fichier.nomDuFichier}
                title={fichier.nomDuFichier}
              />
            ))}

          </div>
        </article>
      ))}
    </section>
  );
}

CoeurCard.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        titre: PropTypes.string.isRequired,
        extrait: PropTypes.string,
        contenu: PropTypes.shape({
          raw: PropTypes.shape({
            children: PropTypes.array.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export default CoeurCard;
