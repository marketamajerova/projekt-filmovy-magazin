import React, { Children } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import Articles from './components/Articles';
import Home from './components/Home';
import Movies from './components/Movies';
import Reviews from './components/Reviews';
import Menu from './components/Menu';
import Movie from './components/Movie';

const App = () => {
  return (
    <div className="container">
      <header>
      </header>
      <main>
        <Menu />
        <Outlet />
      </main>

    </div>
  );
};

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'reviews',
        element: <Reviews />
      },
      {
        path: 'articles',
        element: <Articles />
      },
      {
        path: 'movies',
        element: <Movies />,
        children: [
          {
            path: 'movies/:movieId',
            element: <Movie />
          }
        ]
      },
    ]
  }
])

createRoot(
  document.querySelector('#app')).render(
    <RouterProvider router={router} />
  );
