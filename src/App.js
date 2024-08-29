import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './pages/NavBar';
import { ProjectPage } from './pages/ProjectsPage';
import { Home } from './pages/Home';
import { LevelZero } from './pages/LevelZeroProject';

function App() {
  return (
    <div className="App">
      <Router>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/levelzero" element={<LevelZero />} />
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
