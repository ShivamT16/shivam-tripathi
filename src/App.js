import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Navbar } from './pages/NavBar';
import { Intro } from './pages/Intro';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Router>

      <Navbar />
      <Intro />
      <Projects />
      <Skills />
      
      </Router>
    </div>
  );
}

export default App;
