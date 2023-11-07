/* eslint-disable max-len */
// Components import

// Imports
import './style.scss';
import card1 from '../../../public/img/reunion.jpg';

function Category() {
  return (
    <section className="categories">
      <article className="oneCategory">
        <div>
          <img src={card1} alt="Illustration de nos réuions" className="oneCategory__img" />
        </div>
        <div>
          <h2 className="oneCategory__title">Unipopia</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, assumenda? Beatae atque quos rerum amet, iusto facere officiis veritatis nam eaque officia error! Dicta numquam illum, voluptatem voluptatibus animi repellat.</p>
        </div>
        <div>BTN</div>
      </article>
      <article className="oneCategory">
        <div>
          <img src={card1} alt="Illustration de nos réuions" className="oneCategory__img" />
        </div>
        <div>TEXTE</div>
        <div>BTN</div>
      </article>
      <article className="oneCategory">
        <div>
          <img src={card1} alt="Illustration de nos réuions" className="oneCategory__img" />
        </div>
        <div>TEXTE</div>
        <div>BTN</div>
      </article>
    </section>
  );
}

export default Category;
