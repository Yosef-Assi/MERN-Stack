import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductManager from '../comp/ProductManager';
import ProductsShow from '../comp/ProductsShow';
export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[people]);
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }
    const createPerson = product  => {
        axios.post('http://localhost:8000/api/product', product )
            .then(res=>{
                setPeople([...people, res.data]);
            })
    }
    return (
        <div>
           <ProductManager onSubmitProps={createPerson} initialTitle="" initialPrice="" initialDescription=""/>
           <hr/>
           {loaded && <ProductsShow people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}

