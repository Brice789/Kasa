import React from 'react';
import './Banner.scss';

function Banner() {
  return (
    <div className="banner">
      <img src="home.jpg" alt="Banner home" />
      <div className="text-overlay">Chez vous, partout et ailleurs</div>
    </div>
  );
}

export default Banner;
