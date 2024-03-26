/* eslint-disable max-len */

// Components imports

// imports
import './style.scss';
import couv1 from '../../../public/img/couv_parlonsen1.png';
import couv2 from '../../../public/img/couv_parlonsen2.png';
import couv3 from '../../../public/img/couv_hals.png';
import couv4 from '../../../public/img/couv_carnet.png';
import couv5 from '../../../public/img/couv_cled12.png';
import couv6 from '../../../public/img/couv_dynamiques.png';
import couv7 from '../../../public/img/couv_habiter.png';
import couv8 from '../../../public/img/couv_telerama.png';
import couv9 from '../../../public/img/couv_solidarite.png';

import pdf1 from '../../../public/pdf/parlonsen-recit-pm2020-1.pdf';
import pdf2 from '../../../public/pdf/livretcapa_parlonsencausetoujours.pdf';
import pdf3 from '../../../public/pdf/parlons-en-espace-circulation.pdf';
import pdf4 from '../../../public/pdf/CarnetAliceRaconte.pdf';
import pdf5 from '../../../public/pdf/livret_parlonsen_Cled12.pdf';
import pdf6 from '../../../public/pdf/NouvellesDynamiques_mai2017.pdf';
import pdf7 from '../../../public/pdf/habiter.pdf';
import pdf8 from '../../../public/pdf/telerama.pdf';
import pdf9 from '../../../public/pdf/nuitdelasolidarite.pdf';

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
      <article className="oneLivret__card">
        <header className="oneLivret__header">
          <h3 className="header">Le Parlons-en comme espace de circulation</h3>
          <p className="oneLivret__date">2018 - Laure Brayer, Anthony Pecqueux - CNRS </p>
        </header>
        <div className="oneLivret__content-pdf-block">
          <a href={pdf3} target="_blank" rel="noreferrer">
            <img src={couv3} alt="Le Parlons-en comme espace de circulation" className="oneLivret__content-pdf-img" />
          </a>
          <p className="oneLivret__content-pdf-text">Cliquez sur l'image pour télécharger le pdf</p>
        </div>
      </article>
      <article className="oneLivret__card">
        <header className="oneLivret__header">
          <h3 className="header">Voyage au Lîeu</h3>
          <p className="oneLivret__date">2021 - Alice Raconte </p>
        </header>
        <div className="oneLivret__content-pdf-block">
          <a href={pdf4} target="_blank" rel="noreferrer">
            <img src={couv4} alt="Voyage au Lîeu" className="oneLivret__content-pdf-img" />
          </a>
          <p className="oneLivret__content-pdf-text">Cliquez sur l'image pour télécharger le pdf</p>
        </div>
      </article>
      <article className="oneLivret__card">
        <header className="oneLivret__header">
          <h3 className="header">Rencontres des Précaires d'ici et d'ailleurs</h3>
          <p className="oneLivret__date">2021 - Cled'12 </p>
        </header>
        <div className="oneLivret__content-pdf-block">
          <a href={pdf5} target="_blank" rel="noreferrer">
            <img src={couv5} alt="Rencontre des Précaires d'ici et d'ailleurs" className="oneLivret__content-pdf-img" />
          </a>
          <p className="oneLivret__content-pdf-text">Cliquez sur l'image pour télécharger le pdf</p>
        </div>
      </article>
      <article className="oneLivret__card">
        <header className="oneLivret__header">
          <h3 className="header">Nouvelles dynamiques pour la recherche culturelle</h3>
          <p className="oneLivret__date">2017 - Frédérique Aït-Touati, Anthony Pecqueux - CNRS </p>
        </header>
        <div className="oneLivret__content-pdf-block">
          <a href={pdf6} target="_blank" rel="noreferrer">
            <img src={couv6} alt="Nouvelles dynamiques pour la recherche culturelle" className="oneLivret__content-pdf-img" />
          </a>
          <p className="oneLivret__content-pdf-text">Cliquez sur l'image pour télécharger le pdf</p>
        </div>
      </article>
      <article className="oneLivret__card">
        <header className="oneLivret__header">
          <h3 className="header">Habiter&nbsp;: la part de l'être</h3>
          <p className="oneLivret__date">2019 - Dominique Belkis, Anne-Sophie Haeringer, Anthony Pecqueux et Michel Peroni - CNRS </p>
        </header>
        <div className="oneLivret__content-pdf-block">
          <a href={pdf7} target="_blank" rel="noreferrer">
            <img src={couv7} alt="Habiter : la part de l'être" className="oneLivret__content-pdf-img" />
          </a>
          <p className="oneLivret__content-pdf-text">Cliquez sur l'image pour télécharger le pdf</p>
        </div>
      </article>
      <article className="oneLivret__card">
        <header className="oneLivret__header">
          <h3 className="header">Penser autrement&nbsp;: La parole aux émotions</h3>
          <p className="oneLivret__date">2018 - Christophe Traïni - Télérama</p>
        </header>
        <div className="oneLivret__content-pdf-block">
          <a href={pdf8} target="_blank" rel="noreferrer">
            <img src={couv8} alt="Penser autrement : La parole aux émotions" className="oneLivret__content-pdf-img" />
          </a>
          <p className="oneLivret__content-pdf-text">Cliquez sur l'image pour télécharger le pdf</p>
        </div>
      </article>
      <article className="oneLivret__card">
        <header className="oneLivret__header">
          <h3 className="header">La nuit de la solidarité à Grenoble&nbsp;: Lettre ouverte à la Métro et à
            l'Observatoire de l'Hébergement et du Logement
          </h3>
          <p className="oneLivret__date">2019 - Parlons-en</p>
        </header>
        <div className="oneLivret__content-pdf-block">
          <a href={pdf9} target="_blank" rel="noreferrer">
            <img src={couv9} alt="La Nuit de La SoLidarité à GreNobLe" className="oneLivret__content-pdf-img" />
          </a>
          <p className="oneLivret__content-pdf-text">Cliquez sur l'image pour télécharger le pdf</p>
        </div>
      </article>
    </section>
  );
}

export default LivretCard;
