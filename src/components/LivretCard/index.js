/* eslint-disable max-len */

// Components imports

// imports
import './style.scss';
import couv1 from '../../../public/img/couv_parlonsen1.png';
import couv2 from '../../../public/img/couv_parlonsen2.png';

import pdf1 from '../../../public/pdf/parlonsen-recit-pm2020-1.pdf';
import pdf2 from '../../../public/pdf/livretcapa_parlonsencausetoujours.pdf';

function LivretCard() {
  return (
    <section className="oneLivret">
      <article className="oneLivret__card">
        <header className="oneLivret__header">
          <h3 className="header">Parlons-en – Récit d'une odyssée improbable</h3>
          <p className="oneLivret__date">2008/2020 - Pierre Mahey</p>
        </header>
        <div className="oneLivret__content-pdf-block">
          <a href={pdf1} target="_blank" rel="noreferrer">
            <img src={couv1} alt="Parlons-en – Récit d'une odyssée improbable" className="oneLivret__content-pdf-img" />
          </a>
          <p className="oneLivret__content-pdf-text">Cliquez sur l'image pour télécharger le pdf</p>
        </div>
      </article>
      <article className="oneLivret__card">
        <header className="oneLivret__header">
          <h3 className="header">Parlons-en ou cause toujours&nbsp;? Le débat, qu'est-ce qu'on y gagne quand on est à la rue&nbsp;?</h3>
          <p className="oneLivret__date">2009 - Livret Capacitation citoyenne </p>
        </header>
        <div className="oneLivret__content-pdf-block">
          <a href={pdf2} target="_blank" rel="noreferrer">
            <img src={couv2} alt="Parlons-en ou cause toujours ?" className="oneLivret__content-pdf-img" />
          </a>
          <p className="oneLivret__content-pdf-text">Cliquez sur l'image pour télécharger le pdf</p>
        </div>
      </article>
    </section>
  );
}

export default LivretCard;
