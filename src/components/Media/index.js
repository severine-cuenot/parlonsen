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
      <header className="media__header header">Contenu Multimédia</header>
      <div className="media__block">
        <Link to="/video">
          <article className="media__card">
            <div>
              <img src={video} className="media__icon" alt="vidéo" />
            </div>
            <h3 className="media__title">Vidéos</h3>
          </article>
        </Link>
        <Link to="/video">
          <article className="media__card">
            <div>
              <img src={book} className="media__icon" alt="vidéo" />
            </div>
            <h3 className="media__title">Livrets</h3>
          </article>
        </Link>
        <Link to="/video">
          <article className="media__card">
            <div>
              <img src={podcast} className="media__icon" alt="vidéo" />
            </div>
            <h3 className="media__title">Podcasts</h3>
          </article>
        </Link>
        <Link to="/video">
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
