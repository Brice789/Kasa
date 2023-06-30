import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Link } from 'react-router-dom';
import { RouterProvider} from 'react-router-dom';


// import { createBrowserRouter, Outlet, RouterProvider, useRoutes } from 'react-router-dom';
// import routerz from './router/router.jsx';

import App from './App.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
   path:"/flat" ,
   element: <h1>Nos Apparements</h1>
  },
  {
    path:"/about" ,
    element:  <h1>A Propos</h1>,
   },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
