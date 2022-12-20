import { Link } from '@reach/router';
import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';


const AddAuthor = (props) => {
    const {onSubmitProps,initialName,errors}=props;
    const [name, setName] = useState(initialName); 
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProps({name});
    }
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <h4>add a new author</h4>
        <>
        <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name</label><br/>
                <input type="text"  name="name" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
          <p> <input type="submit"/> <Link to={"/"}>Cancel</Link></p> 
        </form>
        </>
    </div>
  )
}

export default AddAuthor