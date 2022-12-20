import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AddAuthor from './AddAuthor';
const Create = () => {
    const [author, setAuthor] = useState([]);
    const [errors, setErrors] = useState([]); 

    const createAuthor = product  => {
        axios.post('http://localhost:8000/api/author', product )
            .then(res=>{
                setAuthor([...author, res.data]);
                navigate("/")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })         
    }
    return (
        <div>
            <AddAuthor onSubmitProps={createAuthor} initialName="" errors={errors}/>
        </div>
    )
 
}

export default Create