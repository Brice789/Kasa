import React from 'react'
import "./Apartement.scss"
import { Link } from 'react-router-dom'

function Apartement() {
  return (
    <div className='apartement'>
    <Link to ="/flat">
    <div className = "apartement__subtitle">Titre de la location </div>
    </Link>
    
    </div>
  )
}

export default Apartement