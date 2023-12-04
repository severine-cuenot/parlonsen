/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */

// React imports
// import { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from '@graphcms/rich-text-react-renderer';

// imports
import './style.scss';

function VideoCard({ posts }) {
  const unipopiaPosts = posts.filter((post) => post.node.categories.some((category) => category.nom === 'Unipopia'));

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
            {console.log('Contenu brut :', unipopia.node.contenu.raw)}
            {console.log('assets are you here :', unipopia.node.fichier)}

            <RichText
              content={unipopia.node.contenu.raw}
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
