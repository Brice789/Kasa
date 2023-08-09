import React from 'react'
import "./Apartment.scss"
import { Link } from 'react-router-dom'

function Apartment(props) {
  return (
    <Link to ="/flat">
    <div className='apartment'>
    <img src = {props.image} alt = "titre de l'image"></img>
    <div className = "apartement__subtitle">{props.title} </div>
    </div>
    </Link>
  )
}

export default Apartment