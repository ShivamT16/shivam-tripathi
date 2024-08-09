import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Navbar } from './pages/NavBar';
import { Intro } from './pages/Intro';
import { Projects } from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Intro />
      <Projects />
      
      </Router>
    </div>
  );
}

export default App;
