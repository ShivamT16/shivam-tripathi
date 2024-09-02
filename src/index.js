import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProjectPage } from './pages/ProjectsPage';
import { Home } from './pages/Home';
import { LevelZero } from './pages/LevelZeroProject';
import { Blogs } from './pages/Blogs';
import { About } from './pages/About';
import { Error } from './pages/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([

  { path: "/", 
    element: <App />,
    children: [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <ProjectPage /> },
  { path: "/projects/levelzero", element: <LevelZero /> },
  { path: "/blogs", element: <Blogs /> }  
    ], 
    errorElement: <Error /> },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

