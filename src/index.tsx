import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from 'routes/Home';
import ErrorPage from 'routes/ErrorPage';

import './styles/styles.css';
import './styles/tailwind.output.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
