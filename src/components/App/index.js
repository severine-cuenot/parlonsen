// React import
import { Route, Routes } from 'react-router-dom';
import useScrollTop from '../../hooks';

// Pages import
import Home from '../../pages/Home';
import Unipopia from '../../pages/unipopia';
import Lieu from '../../pages/lieu';
import Parlonsen from '../../pages/parlonsen';
import About from '../../pages/about';
import Policy from '../../pages/policy';
import Credits from '../../pages/credit';
import NotFound from '../../pages/404';
import Multimedia from '../../pages/multimedia';
import Podcast from '../../pages/podcast';
import Video from '../../pages/video';
import Livret from '../../pages/livret';
import Photo from '../../pages/photo';

// Components import
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';
import ScrollToTop from '../ScrollToTop';

// Import
import './styles.css';

function App() {
  useScrollTop();
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/unipopia" element={<Unipopia />} />
        <Route path="/lieu" element={<Lieu />} />
        <Route path="/parlonsen" element={<Parlonsen />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/video" element={<Video />} />
        <Route path="/ecrit" element={<Livret />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
      <ScrollToTop />
      <AppFooter />
    </div>
  );
}

// == Export
export default App;
