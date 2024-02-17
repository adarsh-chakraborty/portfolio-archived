import Pages from './pages/Pages';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-4CH34PWCC3";


function App() { 
 ReactGA.initialize(TRACKING_ID);
 
  return (
    <Router>
      <Pages />
    </Router>
  );
}

export default App;
