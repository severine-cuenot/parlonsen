/* eslint-disable max-len */
// React imports
import { Link } from 'react-router-dom';

// Components import
import Button from '../Button';

// Imports
import './style.scss';
import card1 from '../../../public/img/reunion.jpg';
import card2 from '../../../public/img/lieu.jpg';
import card3 from '../../../public/img/parlonsen.jpg';

function Category() {
  return (
    <section className="categories">
      <Link to="/unipopia" className="oneCategory">
        <article>
          <div>
            <img src={card1} alt="Illustration de nos réuions" className="oneCategory__img" />
          </div>
          <div>
            <h2 className="oneCategory__title">Unipopia</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, assumenda? Beatae atque quos rerum amet, iusto facere officiis veritatis nam eaque officia error! Dicta numquam illum, voluptatem voluptatibus animi repellat.</p>
          </div>
          <Button label="En savoir plus" type="button" btnstyle="oneCategory-dskbtn" />
        </article>
      </Link>
      <Link to="/lieu" className="oneCategory">
        <article>
          <div>
            <img src={card2} alt="Illustration de nos réuions" className="oneCategory__img" />
          </div>
          <div>
            <h2 className="oneCategory__title">Le Lîeu</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, assumenda? Beatae atque quos rerum amet, iusto facere officiis veritatis nam eaque officia error! Dicta numquam illum, voluptatem voluptatibus animi repellat.</p>
          </div>
          <Button label="En savoir plus" type="button" btnstyle="oneCategory-dskbtn" />
        </article>
      </Link>
      <Link to="/parlonsen" className="oneCategory">
        <article>
          <div>
            <img src={card3} alt="Illustration de nos réuions" className="oneCategory__img" />
          </div>
          <div>
            <h2 className="oneCategory__title">Le Parlons-en</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, assumenda? Beatae atque quos rerum amet, iusto facere officiis veritatis nam eaque officia error! Dicta numquam illum, voluptatem voluptatibus animi repellat.</p>
          </div>
          <Button label="En savoir plus" type="button" btnstyle="oneCategory-dskbtn" />
        </article>
      </Link>
    </section>
  );
}

export default Category;
