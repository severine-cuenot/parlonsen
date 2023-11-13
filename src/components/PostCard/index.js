/* eslint-disable react/no-array-index-key */

// React imports
import PropTypes from 'prop-types';

// imports
import './style.scss';

// Had to make this function because of links that don't want to appear or be clickable
function getContentFragment(index, obj) {
  if (obj.text) {
    return obj.text;
  }

  if (obj.children && obj.children.length > 0) {
    return obj.children.map((item, i) => {
      if (item.type === 'link') {
        return (
          <a
            key={i}
            href={item.href}
            target={item.openInNewTab ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="post__hyperlinks"
          >
            {getContentFragment(i, item)}
          </a>
        );
      }
      return getContentFragment(i, item);
    });
  }

  return null;
}

function PostCard({ posts }) {
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
            {unipopia.node.contenu.raw.children.map((typeObj, index) => {
              const content = getContentFragment(index, typeObj);
              if (content) {
                return <p key={index} className="mb-8">{content}</p>;
              }
              return null;
            })}
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

export default PostCard;
