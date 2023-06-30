// import React from 'react';
import "./App.css";

import Navbar from "./components/Navbar.jsx" ;
import Banner from "./layout/Banner.jsx" ;
import ApartementGrid from "./components/ApartementGrid.jsx";
import Main2 from "./layout/Main2.jsx";
import Footer from "./layout/Footer.jsx";

function App() {
  return (
    <div>

      <Navbar/>

      <Main2>

        <Banner/>
        <ApartementGrid />

      </Main2>

      <Footer/>
      
    </div>

  )
}

export default App
