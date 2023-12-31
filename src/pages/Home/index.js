// Components imports
import Category from '../../components/Category';
import Media from '../../components/Media';
import Page from '../../components/Page';
import Hero from '../../components/hero';
import Feed1 from '../../components/Feed';

function Home() {
  return (
    <Page>
      <Hero />
      <Category />
      <Feed1 />
      <Media />
    </Page>
  );
}

export default Home;
