/* eslint-disable max-len */
// React imports
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Component imports
import Button from '../../components/Button';
import Container from '../../components/Container';
import Page from '../../components/Page';
import LivretCard from '../../components/LivretCard';
import ReportCard from '../../components/ReportCard';

// imports
import './style.scss';
import getReports from '../../../services/getReports';

function Livret() {
  const [reportsList, setReportsList] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const listOfReports = await getReports();
        setReportsList(listOfReports);
      }
      catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

  return (
    <Page>
      <header className="livret__header">
        <h1 className="livret__header--title header">écrits</h1>
      </header>
      <Container className="container__livret">
        <section>
          <article>
            <header className="livret__section--title header">Nos livrets</header>
            <LivretCard />
          </article>
          <article className="reports__section">
            <header className="reports__header header">Nos comptes-rendus</header>
            <ReportCard reports={reportsList} />
          </article>
          <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="video1" /></Link>
          <Link to="/multimedia"><Button type="button" label="Retourner à la liste des médias" btnstyle="video2" /></Link>
        </section>
      </Container>
    </Page>
  );
}

export default Livret;
