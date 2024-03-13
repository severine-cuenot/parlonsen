/* eslint-disable max-len */
// React imports
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Components imports
import LeLieuPostcard from '../../components/PostCard/LeLieuPostcard';
import Page from '../../components/Page';
import Container from '../../components/Container';
import Button from '../../components/Button';
// import Header from '../../components/CategoriesHeader';

// Imports
import getPosts from '../../../services/getPosts';
import planLieu from '../../../public/img/lieu_plan.png';
import reunion from '../../../public/img/dessin_lieu.png';
import projets from '../../../public/img/DessinCoquille.png';
import toutou from '../../../public/img/toutoupanier.jpg';
import calendar from '../../../public/img/calendar.png';
import plaquette from '../../../public/pdf/plaquettelieu2021_web.pdf';
import livret from '../../../public/pdf/LivretLieu2021_Fonctionnement.pdf';
import projet from '../../../public/pdf/plaquette_projet_lieu2017.pdf';
import piscine from '../../../public/pdf/photospiscinelieu.pdf';
import CR1 from '../../../public/pdf/cr_lieu_1-imaginerunlocal_janv13.pdf';
import CR2 from '../../../public/pdf/cr_lieu_2-local100lieux_reu15mars2013.pdf';
import CR3 from '../../../public/pdf/cr_lieu_3-suitepiscine-lieux-sept2014.pdf';
import CR4 from '../../../public/pdf/cr_lieu_4-crdecollagepiscine.pdf';
import CR5 from '../../../public/pdf/cr_lieu_5-crlieu-5novembre.pdf';
import CR6 from '../../../public/pdf/cr_lieu_6-crlieu11dec14.pdf';
import CR7 from '../../../public/pdf/cr_lieu_7-recc81union_licc82eu_octobre2o16.pdf';
import CR8 from '../../../public/pdf/cr_lieu_8_parlonsen_lieu_juin17_web.pdf';
import CR9 from '../../../public/pdf/cr_lieu-9-28fevrier2018_mdhchorierberriat.pdf';

import './style.scss';

function Lieu() {
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
      <header className="lieu__header">
        <h1 className="header">
          <span className="lieu__header--yellowText">Le L</span><span className="lieu__header--blueText">î</span><span className="lieu__header--yellowText">eu</span>
        </h1>
      </header>
      <Container className="container__lieu">
        <section className="lieu__main-block">
          <nav className="lieu__nav">
            <ul>
              <li>
                &diams; Télécharger le dossier du projet <a href={projet} className="lieu__nav-link" target="_blank" rel="noreferrer">ici</a>.
              </li>
              <li>
                &diams; Télécharger la plaquette <a href={plaquette} className="lieu__nav-link" target="_blank" rel="noreferrer">ici</a>.
              </li>
              <li>
                &diams; Télécharger le livret de fonctionnement <a href={livret} className="lieu__nav-link" target="_blank" rel="noreferrer">ici</a>.
              </li>
              <li>
                &diams; En quelques photos&nbsp;: de la Piscine au Lîeu, en passant par les Grands Voisins, un livret à voir <a href={piscine} className="lieu__nav-link" target="_blank" rel="noreferrer">ici</a>.
              </li>
            </ul>
          </nav>
          <article className="lieu__article">
            <h2 className="header">Le Lîeu, c'est quoi&nbsp;? </h2>
            <img src={planLieu} alt="Le plan du Lîeu" className="lieu__article--img-left img-rounded" />
            <p>
              "Le Lîeu des Habitant·es de la Rue et de la Ville" est un espace d'accueil, de rencontre et de fabrication visant à permettre l'émergence de projets collectifs portés par des personnes de tous horizons.
            </p>
            <p>
              Il entend lutter contre les phénomènes d'exclusion et d'humiliation, la violence due à la pauvreté, l'isolement ou le handicap.
            </p>
            <p>
              Il est né de la conviction que l'on manque de lieux dans la ville&nbsp;: pas assez de lieux pour se poser, se rencontrer, débattre, fabriquer, s'organiser, faire ensemble.
            </p>
            <p>
              Ce manque de lieux est particulièrement fort lorsqu'on vit des situations d'exclusion ou de grande précarité&nbsp;: sans toit, voix, droit, papier...
            </p>
            <p>
              "Le Lîeu" n'est pas un accueil de jour ni un espace offrant des services. C'est un lieu disponible aux initiatives des personnes en galère. Il propose des espaces matériels et des possibilités de rencontres pour faciliter la parole et l'action collective.
            </p>
            <h3>Le budget participatif 2017</h3>
            <p>
              L'association «Parlons-en» a présenté le projet du Lîeu lors du Budget Participatif de la Ville de Grenoble en 2017, et des Grenoblois·es ont voté en sa faveur. La Ville a alors aménagé et mis à disposition un local situé 17 rue Abbé Grégoire, quartier Saint-Bruno.
            </p>
            <h3>Une convention avec la Ville de Grenoble</h3>
            <p>
              L'association a signé en juillet 2019 une convention de mise à disposition de locaux avec la Ville de Grenoble. La durée de la convention est de 3 ans renouvelables. Nos référents sont la Ville et le CCAS (Centre Communal d'Action Sociale, Direction d'Action Sociale lutte contre la pauvreté et la précarité). Cette mise à disposition est gratuite: nous n’avons pas de loyer à payer.
            </p>
            <h3>Les locaux</h3>
            <p>
              L'espace est constitué d'une salle polyvalente de 70m2 incluant un coin cuisine, d'un espace-cocon de 20m2, d’une cour de 160m2 et de deux ateliers de 25m2.
            </p>
            <h3>Qui peut demander&nbsp;?</h3>
            <p>
              Toute personne, collectif et/ou association peut demander la mise à disposition de tout ou partie des locaux. <HashLink to="/about#nouscontacter" className="lieu__nav-link">écrivez-nous</HashLink>&nbsp;!
            </p>
            <img src={projets} alt="Dessin de Cled'12" className="lieu__article--img-center" />
          </article>
          <article className="lieu__article">
            <h2 className="header">Valeurs </h2>
            <h3>Lutte contre l'excLusion</h3>
            <p>
              La lutte contre la précarité n’est pas une affaire individuelle mais une affaire collective. Cette lutte doit être portée par les personnes concernées. Les activités et les projets qui prennent vie au Lîeu ne doivent pas être "faits pour/à la place/au nom des" personnes en galère.
            </p>
            <h3>HorizontaLité</h3>
            <p>
              Nous souhaitons que ce Lîeu ne reproduise pas de rapports hiérarchiques dans son fonctionnement ni dans ses décisions. Nous voulons éviter une distinction entre des "accueillants" et des "accueillis".
            </p>
            <h3>Gratuité</h3>
            <p>
              Toutes les activités qui s'y déroulent sont gratuites. Aucune activité à visée lucrative ou commerciale ne peut se tenir au Lîeu.
            </p>
            <h3>Non discrimination</h3>
            <p>
              Le Lîeu s'oppose aux comportements et paroles discriminatoires quels qu'ils soient (racisme, sexisme, homophobie, agisme...)
            </p>
            <h3>Indépendance</h3>
            <p>
              Le Lîeu est indépendant de tous partis politiques et religions. Toute forme de propagande y est interdite.
            </p>
            <h3>InconditionnaLité</h3>
            <p>
              Le Lîeu s'inspire des droits humains fondamentaux selon lesquels toute personne est respectée dans sa dignité et ses droits. Le Lîeu garantit l'accueil de toute personne qui en pousse la porte, quelle que soit sa situation personnelle ou administrative.
            </p>
            <h3>Anonymat et confidentiaLité</h3>
            <p>
              Le Lîeu respecte l'anonymat des personnes ne désirant pas donner leur identité. Il garantit aux personnes la confdentialité sur leurs paroles ou comportements.
            </p>
            <img src={toutou} alt="Le plan du Lîeu" className="lieu__article--img-center img-rounded" />
          </article>
          <article className="lieu__article">
            <h2 className="header">Accédez à notre calendrier </h2>
            <p>
              Pour télécharger le calendrier, <a href="https://framagenda.org/remote.php/dav/public-calendars/HCYYTSQZWAQHT07R/?export" target="_blank" rel="noreferrer" className="lieu__nav-link">cliquez ici</a>.<br />
              Pour y accéder directement en ligne, <a href="https://framagenda.org/apps/calendar/p/HCYYTSQZWAQHT07R/dayGridMonth/now" target="_blank" rel="noreferrer" className="lieu__nav-link">cliquez ici</a>.
            </p>
            <a href="https://framagenda.org/apps/calendar/p/HCYYTSQZWAQHT07R/dayGridMonth/now" target="_blank" rel="noreferrer" title="Cliquez ici pour accéder à l'agenda en ligne"><img src={calendar} alt="L'agenda des événements" className="lieu__article--img-center img-rounded" /></a>
          </article>
          <article className="lieu__article">
            <h2 className="header">Compte-rendus</h2>
            <p>
              <ul className="oneReport__text">
                <li className="oneReport__li">
                  <a href={CR1} target="_blank" rel="noreferrer" className="oneReport__link">
                    1- Janvier 2013&nbsp;: Un local pour les gens de la rue
                  </a>
                </li>
                <li className="oneReport__li">
                  <a href={CR2} target="_blank" rel="noreferrer" className="oneReport__link">
                    2- Mars 2013&nbsp;: Le local des 100 lieux
                  </a>
                </li>
                <li className="oneReport__li">
                  <a href={CR3} target="_blank" rel="noreferrer" className="oneReport__link">
                    3- Septembre 2014&nbsp;: Le lieu des sans lieux&nbsp;?
                  </a>
                </li>
                <li className="oneReport__li">
                  <a href={CR4} target="_blank" rel="noreferrer" className="oneReport__link">
                    4- Octobre 2014&nbsp;: La Piscine largue les amarres
                  </a>
                </li>
                <li className="oneReport__li">
                  <a href={CR5} target="_blank" rel="noreferrer" className="oneReport__link">
                    5- Novembre 2014&nbsp;: Atelier de lancement du LîEU
                  </a>
                </li>
                <li className="oneReport__li">
                  <a href={CR6} target="_blank" rel="noreferrer" className="oneReport__link">
                    6- Décembre 2014&nbsp;: Création du Collectif - Lîeu
                  </a>
                </li>
                <li className="oneReport__li">
                  <a href={CR7} target="_blank" rel="noreferrer" className="oneReport__link">
                    7- Octobre 2016&nbsp;: Réunion Projet de Lîeu
                  </a>
                </li>
                <li className="oneReport__li">
                  <a href={CR8} target="_blank" rel="noreferrer" className="oneReport__link">
                    8- Juin 2017&nbsp;: Le Lîeu
                  </a>
                </li>
                <li className="oneReport__li">
                  <a href={CR9} target="_blank" rel="noreferrer" className="oneReport__link">
                    9- Février 2018&nbsp;: Maison des Habitants Chorier-Berriat
                  </a>
                </li>
              </ul>
              <img src={reunion} alt="On pense au projet" className="lieu__article--img-center" />
            </p>
          </article>
        </section>
        <LeLieuPostcard posts={postList} />
        <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="credits" /></Link>
      </Container>
    </Page>
  );
}

export default Lieu;
