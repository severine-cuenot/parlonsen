/* eslint-disable max-len */
// React imports
import { Link } from 'react-router-dom';

// Component imports
import Button from '../../components/Button';
import Container from '../../components/Container';
// imports
import './style.scss';

function Policy() {
  // hiding email address from bot
  const emailPart1 = 'contact';
  const emailPart2 = 2 ** 6;
  const emailPart3 = String.fromCharCode(emailPart2);
  const emailPart4 = 'parlonsengrenoble.org';
  // const emailPart5 = emailPart1 + String.fromCharCode(emailPart2) + emailPart4;
  // const emailLink = `mailto:${emailPart5}`;
  const emailText = emailPart1 + emailPart3 + emailPart4;

  return (
    <Container className="container__credits">
      <section className="policy">
        <header className="policy__header header">
          <h1>Mentions légales</h1>
        </header>
        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site <em>Parlons-en&nbsp;!</em> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>
        <h2 className="header">édition du site</h2>
        <p>
          Le présent site, accessible à l'URL <u>https://parlonsengrenoble.org/</u> (le "Site"), est édité par&nbsp;: L'association <em>Parlons-en</em>, enregistrée auprès de la Préfecture de Grenoble sous le numéro , ayant son siège situé à 17, rue Abbé Grégoire, 38000 Grenoble, représentée par Claire Cuenot dûment habilitée.
        </p>
        <h2 className="header">Hébergement</h2>
        <p>
          Le Site est hébergé par la société <em>O2Switch</em>, située 222 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, (contact téléphonique&nbsp;: (+33) 4 44 44 60 40).
        </p>
        <h2 className="header">Directeur de publication</h2>

        <p>Le Directeur de la publication du Site est  .</p>

        <h2 className="header">Nous contacter</h2>
        <p>
          <ul>
            <li>Par téléphone&nbsp;: +33762546120</li>
            <li>Par email&nbsp;: {emailText}</li>
            <li>Par courrier&nbsp;: 17, rue Abbé Grégoire, 38000 Grenoble</li>
          </ul>
        </p>
        <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="credits" /></Link>
      </section>
    </Container>
  );
}

export default Policy;
