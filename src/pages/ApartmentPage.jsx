import React, { useEffect, useState } from "react";
import { DescriptionPanel } from "../components/DescriptionPanel";
import "./ApartmentPage.scss";
import { ImageBanner  } from "../components/ImageBanner";
// import { ApartmentHeader} from "../components/ApartmentHeader";
import { useApartment } from "../hooks/useApartment";

function ApartmentPage() {
 
  return ( 
  
  <div className="apart">
    <h1>Les appartements</h1>
    <div className="img">
      <img src = "https://picsum.photos/1100/400"  alt = "image" /> 
    </div>
    <div className="apartment-page-title" >
      <div className="apartment-page-subtitle">
        <p>Cozy</p>
        <p>Canak</p>
        <p>Paris 16</p>
      </div>
    </div>
  </div>
  );
}

export default ApartmentPage;