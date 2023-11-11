// React import
import { Route, Routes } from 'react-router-dom';

// Pages import
import Home from '../../pages/Home';
import Unipopia from '../../pages/unipopia';
import Lieu from '../../pages/lieu';
import Parlonsen from '../../pages/parlonsen';
import About from '../../pages/about';
import Media from '../../pages/media';
import Policy from '../../pages/policy';
import Credits from '../../pages/credit';
import NotFound from '../../pages/404';

// Components import
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

// Import
import './styles.css';

function App() {
  const posts = [];

  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/unipopia" element={<Unipopia posts={posts} />} />
        <Route path="/lieu" element={<Lieu />} />
        <Route path="/parlonsen" element={<Parlonsen />} />
        <Route path="/multimedia" element={<Media />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
      <AppFooter />
    </div>
  );
}

// == Export
export default App;
