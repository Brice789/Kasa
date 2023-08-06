import React from 'react'
import "./Apartment.scss"
import { Link } from 'react-router-dom'

function Apartment() {
  return (
    <Link to ="/flat">
    <div className='apartment'>
    <img src = "https://picsum.photos/300/200" alt = "titre de l'image"></img>
    <div className = "apartement__subtitle">Titre de la location </div>
    
   
    </div>
    </Link>
  )
}

export default Apartment