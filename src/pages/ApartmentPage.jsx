import React, { useEffect, useState } from "react";
import { DescriptionPanel } from "../components/DescriptionPanel";
import "./ApartmentPage.scss";
import { ImageBanner  } from "../components/ImageBanner";
// import { ApartmentHeader} from "../components/ApartmentHeader";
import { useApartment } from "../hooks/useApartment";

function ApartmentPage() {
 
  const flat = useApartment();
  // if (flat == null) return <div>Loading...</div>;
  return ( 


  <div className="apart">
    <div className="img">
      <img src = "https://picsum.photos/1100/400"  alt = "image" /> 
    </div>

    <div className="apartment-head">

    
    <div className="apartment-page-title" >
      <h1>Crazy loft on the canal saint martin</h1>
      <h2>Paris, Ile de France</h2>
          <div className="apart-tags">
            <p className="apart-tag">Cozy</p>
            <p className="apart-tag">Canak</p>
            <p className="apart-tag">Paris 16</p>
          </div>
    </div>


    <div className="apartment-owner">
      <div className="apartment-owner-details">
      <h3>Alexandre Dumas</h3>
      <div className="apartement-owner-badge"></div>
      </div>
          <div className="apartment-owner-star">
            <span>✰</span>
            <span>✰</span>
            <span>✰</span>
            <span>✰</span>
            <span>✰</span>
          </div>
    </div>

    </div>
  
    <div className="apartment-description">
      <p className="description-title">
        <span>Description</span>
      <i className="fa-solid fa-chevron-down"></i>
      </p>
      <p className="description-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, 
        tempore? Iure quo ab eius optio, vitae culpa ipsum, unde consectetur 
        obcaecati eum molestiae officiis quis fuga labore. Nam, alias vel.</p>
    </div>

    <div className="apartment-description">
    <p className="description-title">Description</p>
      <p className="description-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, 
        tempore? Iure quo ab eius optio, vitae culpa ipsum, unde consectetur 
        obcaecati eum molestiae officiis quis fuga labore. Nam, alias vel.</p>
    </div>

  </div>
  );
}

export default ApartmentPage;