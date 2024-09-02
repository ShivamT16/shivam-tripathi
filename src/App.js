import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { ProjectPage } from './pages/ProjectsPage';
import { Home } from './pages/Home';
import { LevelZero } from './pages/LevelZeroProject';
import { Blogs } from './pages/Blogs';
import { About } from './pages/About';
import { Error } from './pages/Error';

const appRouter = createBrowserRouter([

  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <ProjectPage /> },
  { path: "/projects/levelzero", element: <LevelZero /> },
  { path: "/blogs", element: <Blogs /> }  
])

function App() {
  return (
    <div className="App">

    <RouterProvider router={appRouter} />

    </div>
  );
}

export default App;