import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Services from './components/Services';
import Events from './components/Events';
import Calendar from './components/Calendar';
import Service from './components/Service';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/services/:id",
        element: <Service />
      },
      {
        path: "/events",
        element: <Events />
      },
      {
        path: "/calendar",
        element: <Calendar />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


