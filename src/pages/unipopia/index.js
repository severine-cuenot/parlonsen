/* eslint-disable max-len */
// React imports
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// Components imports
import PostCard from '../../components/PostCard';
import Page from '../../components/Page';
import Container from '../../components/Container';
import Header from '../../components/CategoriesHeader';
import Button from '../../components/Button';

// Imports
import getPosts from '../../../services/getPosts';
import nom from '../../../public/img/unipopia_nom.png';
import './style.scss';

function Unipopia() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const listOfPosts = await getPosts();
        setPostList(listOfPosts);
      }
      catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // mettre ces mp3 https://www.radio-gresivaudan.org/archive_sonore/parlons-en-luniversite-populaire-de-la-capacitation/
  return (
    <Page>
      <Header
        pageTitle="Unipopia"
        specificClass="unipopia__header"
      />
      <Container className="container__unipopia">
        <section className="unipopia__main-block">
          <article className="unipopia__article">
            <img src={nom} alt="Photos des rencontres" className="unipopia__article--img-left" />
            <p>
              L'<span className="em">UNI</span>versité <span className="em">POP</span>ulaire d'<span className="em">I</span>ci et d'<span className="em">A</span>illeurs permet la rencontre entre des groupes portés par des personnes précaires qui tentent de sortir de l'urgence et de changer les choses. Croiser des récits, des personnes et des parcours; mettre en lumière la diversité des manières d'agir, de s'organiser et de créer selon les territoires et les histoires. Affirmer les capacités que nous développons quand nous subissons la survie et la précarité. Se revendiquer chercheuses et chercheurs populaires&nbsp;!
            </p>
            <h2 className="header">Pour quoi faire&nbsp;?</h2>
            <p>
              Lorsque nous sommes en précarité dans nos groupes et dans nos vies, nous avons trop rarement les moyens d'aller à la rencontre d'initiatives qui s'inventent pourtant partout, dans la rue et dans les quartiers. UNIPOPIA a pour objectif de permettre ces rencontres et ces liens. Pour se soutenir, s'inspirer des pratiques des uns et des autres, se co-former, partager nos difficultés et nos réussites, produire et diffuser nos savoirs.
            </p>
            <h2 className="header">Octobre 2021&nbsp;: Lancement d'Unipopia au Lîeu</h2>
            <p>
              Trois jours de rencontres ont eu lieu à Grenoble, au Lîeu des Habitant-e-s de la rue et de la ville (Association Parlons-en)&nbsp;: "Rencontre des précaires d’ici et d'ailleurs&nbsp;: Comment des précaires ont inventé d'autres manières de faire pendant la crise sanitaire". Quinze groupes de France et de Belgique ont échangé autour de leurs actions, et ont imaginé le lancement d'une Université Populaire pour poursuivre l'aventure.
            </p>
            <p>
              Vous retrouverez sur cette page le début de l'aventure. RDV sur <a href="https://unipopia.org/" target="_blank" className="unipopia__link" rel="noreferrer">www.unipopia.org</a> ou sur <a href="mailto:contact@unipopia.org" target="_blank" className="unipopia__link" rel="noreferrer">contact@unipopia.org</a> pour les nouvelles&nbsp;!
            </p>
            <h2 className="header">Présentation</h2>
            <div className="unipopia__video-block">
              <iframe
                className="unipopia__video"
                src="https://www.dailymotion.com/embed/video/k2a5zNbMbXOe1JxVEpk?pubtool=oembed"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Rencontres d'octobre 2021 au Lîeu – vers une université populaire ?"
                loading="lazy"
              />
            </div>
            <h2 className="header">Les Actions</h2>
            <p>
              En 2022, L'Université a cheminé autour de groupes thématiques de recherche&nbsp;: La Cabane (Rue, squat, logement)&nbsp;; La Cagnotte (travail et rémunération)&nbsp;; La FourchEtte (accès à une alimentation digne)&nbsp;; et le Cybercafé (Fracture numérique). Chaque groupe se réunit en "virtuel" tous les mois.
            </p>
            <p>Des rencontres physiques ont été organisées&nbsp;:</p>
            <ul>
              <li>"Sortir de la charité&nbsp;: comment accéder à une alimentation digne&nbsp;?" à Saint-Etienne,</li>
              <li>"De l'hébergement imposé à l'habitat choisi" à Lyon,</li>
              <li>"De la survie à la vie&nbsp;: travail et reconnaissance des capacités" à Bobigny,</li>
              <li>"Territoire, économie, entraide" à Marseille.</li>
            </ul>
            <p>UNIPOPIA est financée par la Fondation Abbé Pierre et accompagnée par Periferia.</p>
          </article>
        </section>
        <PostCard posts={postList} />
        <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="credits" /></Link>
      </Container>
    </Page>
  );
}

export default Unipopia;
