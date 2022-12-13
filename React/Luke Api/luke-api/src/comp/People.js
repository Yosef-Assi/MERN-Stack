import React, { useState,useEffect } from 'react'
import axios from 'axios';

const People = (props) => {
    const [peoples,setPeople]=useState([])
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`+props.ida)
             .then( response => setPeople(response.data) )
             .catch( err => console.log(err));
       
    },[props.ida] );
  return (
    <>

    <h3>Name :{peoples.name}</h3> 
    <p>Height :{peoples.height} cm</p>
    <p>Mass :{peoples.mass} kg</p>
    <p>Hair Color :{peoples.hair_color}</p>
    <p>Skin Color :{peoples.skin_color}</p>
    </>
  )
}

export default People