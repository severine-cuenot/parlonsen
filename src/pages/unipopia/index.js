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
              Vous retrouverez sur cette page le début de l'aventure. RDV sur www.unipopia.org ou sur contact@unipopia.org pour les nouvelles&nbsp;!
            </p>
            <h2 className="header">Les groupes</h2>

            Y participent aujourd’hui: 

            Terrain d’Entente (Saint Etienne) 

            D-Base (Drôme) 

            Parlons-en (Grenoble) 

            Mme RueTabaga (Grenoble) 

            Street Reporters (Lyon) 

            Résidence de demain (Paris) 

            Après-M (Marseille) 

            Amelior (Montreuil) 

            CHO3 (Marseille) 

            Coeurs Résistants (Rennes) 

            C Prévu (Charleroi, Belgique) 

            UNIPOPIA est financée par la Fondation Abbé Pierre et accompagnée par Periferia 

            LES ACTIONS 

            En 2022, L’Université a cheminé autour de groupes thématiques de recherche: La Cabane (Rue, squat, logement); La Cagnotte (travail et rémunération); La FourchEtte (accès à une alimentation digne); et le Cybercafé (Fracture numérique). Chaque groupe se réunit en «virtuel» tous les mois. 

            Des rencontres physiques ont été organisées : 

            • «Sortir de la charité: comment accéder à une alimentation digne?» à Saint-Etienne, 

            • «De l’hébergement imposé à l’habitat choisi» à Lyon, 

            • «De la survie à la vie: travail et reconnaissance des capacités» à Bobigny, 

            • «Territoire, économie, entraide» à Marseille.
          </article>
        </section>
        <PostCard posts={postList} />
      </Container>
    </Page>
  );
}

export default Unipopia;
