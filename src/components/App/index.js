// React import
import { Route, Routes} from 'react-router-dom';

// Pages import
import Home from '../../pages/Home';

// Components import
import AppHeader from '../AppHeader';

// Import
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
