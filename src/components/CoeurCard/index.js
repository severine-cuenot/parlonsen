/* eslint-disable max-len */

// Components imports

// imports
import './style.scss';
import Lillie from '../../../public/img/lillie.jpg';

function CoeurCard() {
  return (
    <section className="oneCoeur">
      <article className="oneCoeur__card">
        <header className="oneCoeur__header">
          <h3 className="header">Lillie</h3>
          <p className="oneCoeur__date">20 Octobre 2018 </p>
        </header>
        <div className="oneCoeur__content-pdf-block">
          <img src={Lillie} alt="Ma Lillie" className="oneCoeur__content-pdf-img" />
        </div>
      </article>
      <article className="oneCoeur__card">
        <header className="oneCoeur__header">
          <h3 className="header">Lillie</h3>
          <p className="oneCoeur__date">20 Octobre 2018 </p>
        </header>
        <div className="oneCoeur__content-pdf-block">
          <img src={Lillie} alt="Ma Lillie" className="oneCoeur__content-pdf-img" />
        </div>
      </article>
    </section>
  );
}

export default CoeurCard;
