// import { useRouteError } from "react-router-dom";
// import React from 'react';

// export default function ErrorPage() {
//   const error = useRouteError();
//   console.error(error);

//   return (
//     <div id="error-page">
//       <h1>Oops!</h1>
//       <p>Sorry, an unexpected error has occurred.</p>
//       <p>
//         <i>{error.statusText || error.message}</i>
//       </p>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../layout/Main";
import "./ErrorPage.scss";

export function ErrorPage() {
  return (
    <>
      <Navbar />
      <Main>
        <div className="error-page">
          <h1>404</h1>
          <h2>Oops! La page que vous demandez n'existe pas</h2>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </Main>
    </>
  );
}

export default ErrorPage;