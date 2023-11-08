// Components imports
import Category from '../../components/Category';
import Media from '../../components/Media';
import Page from '../../components/Page';
import Hero from '../../components/hero';

function Home() {
  return (
    <Page>
      <Hero />
      <Category />
      <Media />
    </Page>
  );
}

export default Home;
