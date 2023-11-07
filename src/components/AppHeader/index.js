// React imports
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

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

  return (
    <div>
      <div className="mobile">
        <nav className="navbar" role="navigation" aria-label="Menu de navigation">
          <div className="navbar__block">
            <span className="header navbar__logo"><Link to="/">LLLPE</Link></span>
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
              />
              <span className="navbar__burger-text">Menu</span>
            </button>
          </div>
          <ul className={isExpanded ? 'navbar__expanded' : 'navbar__not-expanded'}>
            <li onClick={handleClick} className="navbar__expanded--element"><NavLink to="unipopia">Unipopia</NavLink></li>
            <li onClick={handleClick} className="navbar__expanded--element"><NavLink to="lieu">Le Lîeu</NavLink></li>
            <li onClick={handleClick} className="navbar__expanded--element"><NavLink to="parlonsen">Le Parlons-en</NavLink></li>
            <li onClick={handleClick} className="navbar__expanded--element"><NavLink to="multimedia">Multimédia</NavLink></li>
            <li onClick={handleClick} className="navbar__expanded--element"><NavLink to="about">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="desktop">
        <nav className="dsk-navbar" role="navigation" aria-label="Menu de navigation">
          <div className="dsk-navbar__left-block">
            <Link to="/" className="dsk-navbar__logo header">LLLPE</Link>
          </div>
          <div className="dsk-navbar__right-block">
            <ul className="dsk-navbar__right-block--list">
              <li className="dsk-navbar__right-block--element"><NavLink to="unipopia" activeclassname="active">Unipopia</NavLink></li>
              <li className="dsk-navbar__right-block--element"><NavLink to="lieu" activeclassname="active">Le Lîeu</NavLink></li>
              <li className="dsk-navbar__right-block--element"><NavLink to="parlonsen" activeclassname="active">Le Parlons-en</NavLink></li>
              <li className="dsk-navbar__right-block--element"><NavLink to="multimedia" activeclassname="active">Multimédia</NavLink></li>
              <li className="dsk-navbar__right-block--element"><NavLink to="about" activeclassname="active">Contact</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default AppHeader;
