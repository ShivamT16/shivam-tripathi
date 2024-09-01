import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './pages/NavBar';
import { ProjectPage } from './pages/ProjectsPage';
import { Home } from './pages/Home';
import { LevelZero } from './pages/LevelZeroProject';
import { Blogs } from './pages/Blogs';
import { About } from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/levelzero" element={<LevelZero />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
