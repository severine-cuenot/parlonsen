// Components imports
import Category from '../../components/Category';
import Media from '../../components/Media';
import Page from '../../components/Page';
import Hero from '../../components/hero';
import Feed from '../../components/Feed';
import ScrollToTop from '../../components/ScrollToTop';

function Home() {
  return (
    <Page>
      <Hero />
      <Category />
      <Feed />
      <Media />
      <ScrollToTop />
    </Page>
  );
}

export default Home;
