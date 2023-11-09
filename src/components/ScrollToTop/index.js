// React imports
import { useState } from 'react';
// import { FaArrowCircleUp } from 'react-icons/fa';
// import { Button } from './styles';

// Imports
import ToTop from '../../../public/img/totop.png';
import './style.scss';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    }
    else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div>
      <button
        type="button"
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      >
        <img src={ToTop} alt="Retourner au début de la page" className="toTop__icon" />
      </button>
    </div>
  );
}

export default ScrollToTop;
