/* eslint-disable max-len */
// React imports
import { Link } from 'react-router-dom';

// Components import
import Button from '../../components/Button';
import Container from '../../components/Container';

// Imports
import './style.scss';

function About() {
  // hiding email address from bot
  const emailPart1 = 'contact';
  const emailPart2 = 2 ** 6;
  const emailPart3 = String.fromCharCode(emailPart2);
  const emailPart4 = 'parlonsengrenoble.org';
  const emailPart5 = emailPart1 + String.fromCharCode(emailPart2) + emailPart4;
  const emailLink = `mailto:${emailPart5}`;
  const emailText = emailPart1 + emailPart3 + emailPart4;

  return (
    <section className="about">
      <header className="about__header">
        <h2 className="about__header--title header">à propos de nous</h2>
        <p className="about__header--text">Nous nous situons au 17, rue Abbé Grégoire, 38000 Grenoble,<br />
          à dix minutes à pied de la gare et à deux pas de la Place St Bruno.
        </p>
      </header>
      <Container className="container__about">
        <article className="about__map-block">
          <div className="about__map-section">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.9517796023947!2d5.710139875978157!3d45.18807235182051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af5ff88feee45%3A0xfee463c80bc3e997!2zTGUgTMOuZXU!5e0!3m2!1sfr!2sfr!4v1699610249841!5m2!1sfr!2sfr" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Le Lîeu" className="about__map-iframe" />
          </div>
          <div className="about__map-text">
            <h3 className="about__map-subtitle">Accueil&nbsp;:</h3>
            <ul>
              <li>&diams; Gratuit</li>
              <li>&diams; Respect de l'anonymat</li>
              <li>&diams; Chiens admis</li>
            </ul>
            <h3 className="about__map-subtitle">Pour nous rejoindre&nbsp;:</h3>
            <ul>
              <li>&diams; <em>En transports en commun&nbsp;:</em> Tram A ou B, arrêt St Bruno</li>
              <li>&diams; <em>En voiture&nbsp;:</em> coordonnées GPS&nbsp;: 45.188229,5.712708</li>
            </ul>
            <span id="nouscontacter">&nbsp;</span>
            <h3 className="about__map-subtitle">Pour nous contacter&nbsp;:</h3>
            <ul>
              <li>&diams; <em>Par téléphone&nbsp;:</em> 07 62 54 61 20</li>
              <li>&diams; <em>Par e-mail&nbsp;:</em> <a href={emailLink} className="about__link">{emailText}</a></li>
            </ul>
            <h3 className="about__map-subtitle">N'hésitez pas à faire un tour sur ces sites&nbsp;:</h3>
            <ul>
              <li>&diams; <a href="https://unipopia.org/" target="_blank" rel="noreferrer" className="about__link">Unipopia</a></li>
              <li>&diams; <a href="https://www.facebook.com/profile.php?id=100068312592785" target="_blank" rel="noreferrer" className="about__link">Association Mon Chien Ma Vie</a></li>
              <li>&diams; <a href="https://solivet.org/" target="_blank" rel="noreferrer" className="about__link">Solivet</a></li>
            </ul>
            <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="about" /></Link>
          </div>
        </article>
      </Container>
    </section>
  );
}

export default About;
