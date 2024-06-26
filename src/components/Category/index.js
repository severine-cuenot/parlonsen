/* eslint-disable max-len */
// React imports
import { Link } from 'react-router-dom';

// Components import
import Button from '../Button';

// Imports
import './style.scss';
import card1 from '../../../public/img/thumb_unipopia.png';
import card2 from '../../../public/img/lieu.png';
import card3 from '../../../public/img/parlonsen.png';

function Category() {
  return (
    <section className="categories">
      <Link to="/parlonsen" className="oneCategory zoom">
        <article>
          <div>
            <img src={card3} alt="Illustration de nos réunions" className="oneCategory__img" />
          </div>
          <div>
            <h2 className="oneCategory__title">Le Parlons-en</h2>
            <p>Le Parlons-en est un espace de débat rassemblant les personnes concernées par les questions de la grande précarité&nbsp;: habitant-es de la rue, associations, acteurs sociaux, institutions, élu-es...</p>
          </div>
          <Button label="En savoir plus" type="button" btnstyle="oneCategory" />
        </article>
      </Link>
      <Link to="/lieu" className="oneCategory zoom">
        <article>
          <div>
            <img src={card2} alt="Illustration de nos réuions" className="oneCategory__img" />
          </div>
          <div>
            <h2 className="oneCategory__title">Le Lîeu</h2>
            <p>"Le Lîeu des Habitant·es de la Rue et de la Ville" est un espace d'accueil, de rencontre et de fabrication visant à permettre l'émergence de projets collectifs portés par des personnes de tous horizons.</p>
          </div>
          <Button label="En savoir plus" type="button" btnstyle="oneCategory" />
        </article>
      </Link>
      <Link to="/unipopia" className="oneCategory zoom">
        <article>
          <div>
            <img src={card1} alt="Illustration de nos réunions" className="oneCategory__img" />
          </div>
          <div>
            <h2 className="oneCategory__title">Unipopia</h2>
            <p>L'<span className="em">UNI</span>versité <span className="em">POP</span>ulaire d'<span className="em">I</span>ci et d'<span className="em">A</span>illeurs permet la rencontre entre des groupes portés par des personnes précaires qui tentent de sortir de l'urgence et de changer les choses.</p>
          </div>
          <Button label="En savoir plus" type="button" btnstyle="oneCategory" />
        </article>
      </Link>
    </section>
  );
}

export default Category;
