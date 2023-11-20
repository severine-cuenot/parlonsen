// Components import
import Page from '../../components/Page';
import Container from '../../components/Container';
import Media from '../../components/Media';

import './style.scss';

function Multimedia() {
  return (
    <Page>
      <Container className="container__multimedia">
        <Media />
      </Container>
    </Page>
  );
}

export default Multimedia;
