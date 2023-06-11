// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import ErrorPage from "./components/ErrorPage.jsx";

// import './index.scss'

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//    path:"/flat" ,
//    element: <h1> nos apparements</h1>
//   },
//   {
//     path:"/about" ,
//     element:  <h1>a Propos</h1>,
//    },

  
// ])


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   <RouterProvider router={router} />
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useRoutes } from 'react-router-dom';
import App from './App.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Navbar from './components/Navbar.jsx';

import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/flat',
    element: <h1>Nos appartements</h1>,
  },
  {
    path: '/about',
    element: <h1>À propos</h1>,
  },
]);

function AppWithNavbar() {
  const routeResult = useRoutes(router);

  return (
    <div>
      <Navbar />
      {routeResult}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <AppWithNavbar />
    </RouterProvider>
  </React.StrictMode>
);

