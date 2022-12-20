import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import React, { useEffect, useState } from 'react'

const ProductsShow = (props) => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setPeople(res.data));
    }, [people])
    
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId))
    }
    return (
        <div>
        {people.map((person, idx) => {
            return (
                <p key={idx}>
                    <Link to={"/product/" + person._id + "/edit"}>
                        {person.title}
                    </Link>
                    |
                    <Link to={"/product/" + person._id + "/edit"}>
                        Edit
                    </Link> 
                    |
                   <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/>
                </p>
            )
        })}
    </div>
    )
}
    
export default ProductsShow;

