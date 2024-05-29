/* eslint-disable max-len */

// React imports
import { useState, useEffect } from 'react';

// Components imports
import UnipopiaPodcats from '../OnePodcast/unipopia_podcasts';
import OnePodcast from '../OnePodcast/index';

// imports
import './style.scss';

function PodcastsTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    // Mettre automatiquement le focus sur la première tab lors du chargement de la page
    const firstTabButton = document.querySelector('.post__tab-content');
    if (firstTabButton) {
      firstTabButton.focus();
    }
  }, []);

  // Définir le contenu de chaque onglet
  const tabs = [
    { buttonContent: 'Les podcasts du Parlons-en', content: <OnePodcast /> },
    { buttonContent: 'Les podcasts d\'Unipopia', content: <UnipopiaPodcats /> },
  ];

  return (
    <div className="post__frame">
      <div className="post__tab-block">
        <div className="post__tab">
          {tabs.map((obj, index) => (
            <button
              type="button"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`post__tab-content header ${selectedTab === index ? 'active' : ''}`}
              onClick={() => setSelectedTab(index)}
            >
              {obj.buttonContent}
            </button>
          ))}
        </div>
      </div>
      <article className="post__block">
        <div className="post__videos-block">
          {tabs[selectedTab].content}
        </div>
      </article>
    </div>
  );
}

export default PodcastsTabs;
