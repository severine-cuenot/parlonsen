// React imports
import { Link } from 'react-router-dom';

// Components import

// Imports
import './style.scss';
import video from '../../../public/img/video-icon.png';
import book from '../../../public/img/book-icon.png';
import podcast from '../../../public/img/podcast-icon.png';
import photo from '../../../public/img/photo-icon.png';

function Media() {
  return (
    <section className="media">
      <header className="media__header header">
        <h2>Contenu Multimédia</h2>
      </header>
      <div className="media__block">
        <Link to="/multimedia/video" className="media__link">
          <article className="media__card">
            <div>
              <img src={video} className="media__icon" alt="vidéo" />
            </div>
            <h3 className="media__title">Vidéos</h3>
          </article>
        </Link>
        <Link to="/multimedia/ecrit" className="media__link">
          <article className="media__card">
            <div>
              <img src={book} className="media__icon" alt="vidéo" />
            </div>
            <h3 className="media__title">Ecrits</h3>
          </article>
        </Link>
        <Link to="/multimedia/podcast" className="media__link">
          <article className="media__card">
            <div>
              <img src={podcast} className="media__icon" alt="vidéo" />
            </div>
            <h3 className="media__title">Podcasts</h3>
          </article>
        </Link>
        <Link to="/multimedia/photo" className="media__link">
          <article className="media__card">
            <div>
              <img src={photo} className="media__icon" alt="vidéo" />
            </div>
            <h3 className="media__title">Photos</h3>
          </article>
        </Link>
      </div>
    </section>
  );
}

export default Media;
