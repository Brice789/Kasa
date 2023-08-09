
import React, { useEffect, useState } from 'react';
import "./ApartmentGrid.scss";
import Apartment from "./Apartment.jsx";
import database from '/src/database.json';

function ApartmentGrid() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchApartments();
  }, []);

  function fetchApartments() {
    setApartments(Object.values(database)); // Convertit les objets d'appartements en un tableau
  }

  return (
    <div className="grid">
      {apartments.map((apartment, index) => (
        <Apartment title={apartment.title} 
        image = {apartment.cover}
        />
      ))}
    </div>
  );
}

export default ApartmentGrid;