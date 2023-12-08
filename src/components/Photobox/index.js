/* eslint-disable max-len */

// React imports
import { useState } from 'react';
import PropTypes from 'prop-types';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// imports
import './style.scss';

function Photobox({ photos }) {
  const [index, setIndex] = useState(-1);
  const photoObjects = photos.map((photo) => ({
    src: photo.url,
    alt: photo.nomDuFichier,
    title: photo.nomDuFichier,
    height: photo.height,
    width: photo.width,
  }));

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={photoObjects}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={photoObjects}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}

Photobox.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default Photobox;
