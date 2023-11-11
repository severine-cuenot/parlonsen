/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
// React imports
import React from 'react';
import PropTypes from 'prop-types';
// import { useEffect, useState } from 'react';

// imports
import './style.scss';

function PostCard({ post }) {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div>
      <div>{post.titre}</div>
      <div>{post.extrait}</div>
      <div>
        {post.contenu.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
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
};

export default PostCard;
