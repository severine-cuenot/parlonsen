/* eslint-disable max-len */
// React imports
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Component imports
import Button from '../../components/Button';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Photobox from '../../components/Photobox';

// imports
import getAssets from '../../../services/getAssets';
import './style.scss';

function Photo() {
  const [assetsList, setAssetsList] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const listOfAssets = await getAssets();
        setAssetsList(listOfAssets);
      }
      catch (error) {
        console.error('Error fetching assets:', error);
      }
    };

    fetchAssets();
  }, []);

  return (
    <Page>
      <header className="photo__header">
        <h1 className="photo__header--title header">Images</h1>
      </header>
      <Container className="container__photo">
        <section>
          <Photobox photos={assetsList} />
          <Link to="/"><Button type="button" label="Retourner à l'accueil" btnstyle="video1" /></Link>
          <Link to="/multimedia"><Button type="button" label="Retourner à la liste des média" btnstyle="video2" /></Link>
        </section>
      </Container>
    </Page>
  );
}

export default Photo;
