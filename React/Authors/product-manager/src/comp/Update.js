import React, { useEffect, useState } from 'react'
import axios from 'axios';

import AddAuthor from './AddAuthor';
import { navigate } from '@reach/router';
    
const Update = (props) => {
    const [author, setAuthor] = useState();
    const [errors, setErrors] = useState([]); 
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + props.id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, []);
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + props.id, author)
            .then(res=>{
                console.log(res)
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
        <>
        
        {loaded && (
            <AddAuthor
                onSubmitProps={updateAuthor}
                initialName={author.name}
                errors={errors}
            />
        )}
        </>
    )
}
    
export default Update;

