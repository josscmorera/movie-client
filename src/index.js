import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import Movie from './Pages/Movie';
import Login from './Pages/Login';
import Movies from './Pages/Movies';
import AdminApp from './AdminApp';
import Register from './Pages/Register';
import Favorites from './Pages/Favorites';
import MovieForm from './Pages/MovieForm';
import AdminMovies from './Pages/AdminMovies';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Movies />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'movie/:id',
        element: <Movie />
      },
      {
        path: 'favorites',
        element: <Favorites />
      },
    ]
  },
  {
    path: '/admin/',
    element: <AdminApp />,
    children: [
      {
        index: true,
        element: <AdminMovies />
      },
      {
        path: 'login',
        element: <Login isAdmin={true} />
      },
      {
        path: 'movie/:id',
        element: <MovieForm />
      },
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
