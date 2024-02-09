/* eslint-disable max-len */
// Imports
import './style.scss';
import Immeubles from '../../../public/img/immeubles-transparents-white.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__left-block">
        <header className="hero__title header">Parlons-en&nbsp;! - Grenoble</header>
        <p className="hero__text">Un espace de débat et de projets par les habitant.e.s de la rue et de la ville. </p>
        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea inventore sed minima praesentium quia aliquid quaerat quis facere eius, saepe officiis libero, culpa molestias. Excepturi reprehenderit minus fugit cumque laudantium.</p> */}
      </div>
      <div className="hero__right-block">
        <img src={Immeubles} alt="Des immeubles" className="hero__right-block-img" />
      </div>
    </section>
  );
}

export default Hero;
