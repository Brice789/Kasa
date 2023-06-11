import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider, useRoutes } from 'react-router-dom';
import App from './App.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Navbar from './components/Navbar.jsx';
import './index.scss';
import Footer from './layout/Footer.jsx';

// const HeaderLayout = () => 
// {
//   return (
//   <>
//   <Navbar/>
//   <Outlet/>
//   <Footer/>
//   </>
//   );
// };

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
   path:"/flat" ,
   element: <h1> Nos Apparements</h1>
  },
  {
    path:"/about" ,
    element:  <h1> A Propos</h1>,
   },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)




