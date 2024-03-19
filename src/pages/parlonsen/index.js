/* eslint-disable max-len */
// React imports
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';

// Components imports
import ParlonsEnPostCard from '../../components/PostCard/ParlonsEnPostcard';
import Page from '../../components/Page';
import Container from '../../components/Container';
import Header from '../../components/CategoriesHeader';
import Button from '../../components/Button';

// Imports
import getPosts from '../../../services/getPosts';
import pdf1 from '../../../public/pdf/parlonsen-recit-pm2020-1.pdf';
import './style.scss';
import banSinges from '../../../public/img/ban_singes.jpg';
import imgPlaquettes from '../../../public/img/mini_plaquettes_parlonsen.png';
import hautparleur from '../../../public/img/hautparleur.png';
import plaquette from '../../../public/pdf/plaquetteparlonsen_web.pdf';

function Parlonsen() {
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

  // const backgroundImage = headerIMG;

  return (
    <Page>
      <Header
        pageTitle="Le Parlons-en"
        specificClass="parlonsen__header"
      />
      <Container className="container__parlonsen">
        <section className="parlonsen__main-block">
          <nav className="parlonsen__nav">
            <ul>
              <li>
                &diams; Pour télécharger en PDF un récit retraçant l'histoire et les enjeux du Parlons-en sur 10&nbsp;ans&nbsp;: <a href={pdf1} className="parlonsen__nav-link" target="_blank" rel="noreferrer"><span className="underline">Le Parlons-en – Récit d'une odyssée improbable</span> – 2008/2020. Un livre de Pierre Mahey</a>
              </li>
              {/* <li>
                &diams; Pour les dates et thèmes des prochaines rencontres, <HashLink to="/parlonsen#newsParlonsEn" className="parlonsen__nav-link">Cliquez ici</HashLink>.
              </li> */}
              <li>
                &diams; Pour les comptes-rendus, <Link to="/ecrit" className="parlonsen__nav-link">c'est ici</Link>.
              </li>
              <li>
                &diams; Pour les podcasts Parlons-en, <Link to="/podcast" className="parlonsen__nav-link">c'est ici</Link>.
              </li>
              <li>
                &diams; Et pour les dernières actualités, <a href={pdf1} className="parlonsen__nav-link" target="_blank" rel="noreferrer">c'est sur Facebook</a>.
              </li>
              <li>
                &diams; Télécharger la plaquette <a href={plaquette} className="parlonsen__nav-link" target="_blank" rel="noreferrer">ici</a>.
              </li>
            </ul>
          </nav>

          <article className="parlonsen__article">
            <img src={banSinges} alt="Parlons-en !" className="parlonsen__article--img-left img-rounded" />
            <p>
              Le Parlons-en est un espace de débat rassemblant les personnes concernées par les questions de la grande précarité&nbsp;: habitant-es de la rue, associations, acteurs sociaux,  institutions, élu-es… Originaire de Charleroi en Belgique, en 2000, il a été mis en place à Grenoble en 2009. Animé par l'association arpenteurs jusqu'en 2o15, il est aujourd'hui porté par l'association "Parlons-en".
            </p>
            <h2 className="header">Pour quoi faire&nbsp;?</h2>
            <ul>
              <li>Pour que ceux qui n'ont habituellement pas la parole la prennent</li>
              <li>Pour changer les regards sur les habitants de la rue, et révéler la violence qu'ils subissent</li>
              <li>Pour développer du projet collectif</li>
              <li>Pour réfléchir avec une autre logique que celle de la réponse individuelle à des demandes et des besoins de “bénéficiaires”</li>
              <li>Pour créer d'autres liens entre les différents acteurs qui agissent contre la précarité</li>
              <li>Pour faire évoluer les politiques publiques en matière de participation et de lutte contre la précarité.</li>
            </ul>
            <img src={imgPlaquettes} alt="Photos des rencontres" className="parlonsen__article--img-right" />
            <h2 className="header">Comment se déroulent les rencontres&nbsp;?</h2>
            <ul>
              <li><span className="strong">Petit déjeuner</span>&nbsp;: on se rencontre autour du café</li>
              <li><span className="strong">"Les actualités de la rue"</span>&nbsp;: chacun peut s'exprimer, débattre des problèmes qu'il rencontre au quotidien dans la rue, partager des infos ou des alertes…</li>
              <li><span className="strong">Débat</span> ou temps de travail collectif sur un thème choisi parmi les différents sujets qui ont émergé au fil des rencontres précédentes, avec l'intervention d'une ou plusieurs personnes "spécialistes"</li>
              <li><span className="strong">Repas</span> pour terminer la rencontre</li>
            </ul>
            <img src={hautparleur} alt="Parlons-en !" className="parlonsen__article--img-center" />
          </article>
        </section>
        <span id="newsParlonsEn">&nbsp;</span>
        <ParlonsEnPostCard posts={postList} />
        <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="credits" /></Link>
      </Container>
    </Page>
  );
}

export default Parlonsen;
