import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductManager from './ProductManager';
    
const Update = (props) => {
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id)
            .then(res => {
                setPerson(res.data);
                setLoaded(res.data.description);
            })
    }, []);
    
    const updatePerson = person => {
        axios.put('http://localhost:8000/api/product/' + props.id, person)
            .then(res => console.log(res));
    }
    
    return (
        <>
        {loaded && (
            <ProductManager
                onSubmitProps={updatePerson}
                initialTitle={person.title}
                initialPrice={person.price}
                initialDescription={person.description}
            />
        )}
        </>
    )
}
    
export default Update;

