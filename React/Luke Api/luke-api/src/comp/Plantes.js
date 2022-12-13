
import React, { useState,useEffect } from 'react'
import axios from 'axios';
const Plantes = (props) => {
    const [plantes,setPlantes]=useState('')
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/`+props.idp)
             .then( response => setPlantes(response.data) )
             .catch( err => console.log(err));
       
    },[props.idp] );
  return (
    <>
    <h3>Name :{plantes.name}</h3>
    <p>Climate :{plantes.climate}</p>
    <p>Terrain :{plantes.terrain}</p>
    <p>Surface Water :{plantes.surface_water}</p>
    <p>Population :{plantes.population}</p>
     </>
  )
}

export default Plantes