// React imports
import { Link } from 'react-router-dom';
import { useState } from 'react';

// imports
import './style.scss';
import 'external-svg-loader';
import burgerImg from '../../../public/img/burger.svg';
import crossImg from '../../../public/img/cross.svg';

function AppHeader() {
  const [isExpanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!isExpanded);
  };
  const img = isExpanded ? crossImg : burgerImg;
  const imgClass = isExpanded ? 'navbar__burger-svg-cross' : 'navbar__burger-svg';

  return (
    <div>
      <div className="mobile">
        <nav className="navbar" role="navigation" aria-label="Menu de navigation">
          <div className="navbar__left-block">
            <span className="header navbar__logo"><Link to="/">LLLP</Link></span>
            <button
              title="Ouvrir le menu"
              aria-label="Ouvrir le menu"
              className="navbar__burger"
              type="button"
              aria-expanded={isExpanded ? 'true' : 'false'}
              onClick={handleClick}
            >
              <svg
                data-src={img}
                alt={img}
                className={imgClass}
              />
              <span className="navbar__burger-text">Menu</span>
            </button>
          </div>
          <ul className={isExpanded ? 'navbar__expanded' : 'navbar__not-expanded'}>
            <li onClick={handleClick} className="navbar__expanded--element">Unipopia</li>
            <li onClick={handleClick} className="navbar__expanded--element">Le Lîeu</li>
            <li onClick={handleClick} className="navbar__expanded--element">Le Parlons-en</li>
            <li onClick={handleClick} className="navbar__expanded--element">Multimédia</li>
            <li onClick={handleClick} className="navbar__expanded--element">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="desktop">
        <nav className="navbar" role="navigation" aria-label="Menu de navigation">
          <div className="navbar__left-block header">
            LLLP
          </div>
          <div className="navbar__right-block">
            <ul className="navbar__right-block--list">
              <li>Unipopia</li>
              <li>Le Lîeu</li>
              <li>Le Parlons-en</li>
              <li>Multimédia</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default AppHeader;
