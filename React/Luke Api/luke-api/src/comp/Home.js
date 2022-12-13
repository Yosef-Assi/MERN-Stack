import React, { useState } from 'react'
import { navigate } from '@reach/router'
const Home = () => {
    const states = [
        'people',
        'plantes',
    ];
    const [select,setSelect] = useState(states[0]);
    const [ind,setInd] = useState(0)

   
    const handleSumbit = e =>{
        e.preventDefault()
        if(select=="people"){
            navigate('/people/'+ind);
        }
        else {
            navigate('/planets/'+ind);
        }
    }
  return (
    <form onSubmit={handleSumbit}>
        <h3>Search about for </h3>
    <select value={select} onChange={e => setSelect(e.target.value)}>
    {states.map( (st, idx) => 
                    <option key={idx} value={st}>{st}</option>
                )}
            </select>
        
       <p>ID <input type="number" onChange={e => setInd(e.target.value)}/></p>
       <input type="submit" value="Search"></input>
  </form>
  )
}

export default Home