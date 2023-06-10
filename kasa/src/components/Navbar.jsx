import React from 'react';
import {Link} from "react-router-dom";
import"./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar__logo">
    <img src = "logo.png" alt = "Logo"></img>
    </div>

    
    <Link to ="/">
    <div> Accueil</div>
    </Link>


    <Link to ="/about">
    <div>A Propos</div>
    </Link>
  

    
    </nav>

  )
}

export default Navbar