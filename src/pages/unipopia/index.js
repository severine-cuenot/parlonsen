/* eslint-disable max-len */
// React imports
import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

// Components imports
import PostCard from '../../components/PostCard';
import Page from '../../components/Page';
import Container from '../../components/Container';
import Header from '../../components/CategoriesHeader';

// Imports
import getPosts from '../../../services/getPosts';
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

  return (
    <Page>
      <Header
        pageTitle="Unipopia"
        specificClass="unipopia__header"
      />
      <Container className="container__unipopia">
        <section className="unipopia__main-block">
          <article className="unipopia__article">
            <p>
              L'UNIVERSITÉ POPULAIRE D'ICI ET D'AILLEURS permet la rencontre entre des groupes portés par des personnes précaires qui tentent de sortir de l'urgence et de changer les choses. Croiser des récits, des personnes et des parcours; mettre en lumière la diversité des manières d'agir, de s'organiser et de créer selon les territoires et les histoires. Affirmer les capacités que nous développons quand nous subissons la survie et la précarité. Se revendiquer chercheuses et chercheurs populaires&nbsp;!
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
            <h2 className="header">Les groupes</h2>
            <p>Y participent aujourd'hui&nbsp;:</p>
            <ul>
              <li>Terrain d'Entente (Saint Etienne)</li>
              <li>D-Base (Drôme)</li>
              <li>Parlons-en (Grenoble)</li>
              <li>Mme RueTabaga (Grenoble)</li>
              <li>Street Reporters (Lyon)</li>
              <li>Résidence de demain (Paris)</li>
              <li>Après-M (Marseille)</li>
              <li>Amelior (Montreuil)</li>
              <li>CHO3 (Marseille)</li>
              <li>Coeurs Résistants (Rennes)</li>
              <li>C Prévu (Charleroi, Belgique)</li>
            </ul>
            <p>UNIPOPIA est financée par la Fondation Abbé Pierre et accompagnée par Periferia.</p>
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
          </article>
        </section>
        <PostCard posts={postList} />
      </Container>
    </Page>
  );
}

export default Unipopia;
