import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Navbar } from './pages/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
      <h1> Shivam Tripathi </h1>
      <Navbar />

      </Router>
    </div>
  );
}

export default App;
