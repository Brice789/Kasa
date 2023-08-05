import React from 'react';
import "./ApartmentGrid.scss";
import Apartement from "./Apartment.jsx"

function ApartmentGrid() {
  return (
    <div className="grid">

    <Apartement/>
    <Apartement/>
    <Apartement/>
    <Apartement/>
    
    </div>
  );
}

export default ApartmentGrid;