import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/Homepage";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import ErrorPage  from "../pages/ErrorPage";
import ApartmentPage from "../pages/ApartmentPage";


const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export const route = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/flat",
        element: <ApartmentPage />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);