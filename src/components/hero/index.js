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
        <p>L'Association Parlons-en donne la parole aux personnes concernées par les questions de la grande précarité&nbsp;: habitant-es de la rue, associations, acteurs sociaux,  institutions, élu-es...</p>
      </div>
      <div className="hero__right-block">
        <img src={Immeubles} alt="Des immeubles" className="hero__right-block-img" />
      </div>
    </section>
  );
}

export default Hero;
