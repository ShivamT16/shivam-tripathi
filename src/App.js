import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Navbar } from './pages/NavBar';
import { Intro } from './pages/Intro';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Intro />

      </Router>
    </div>
  );
}

export default App;
