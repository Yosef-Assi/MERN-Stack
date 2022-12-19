import React, { useState,useEffect } from 'react'
import axios from 'axios';
import ProductsShow from './ProductsShow';
export default () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
   
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[people]);
    return (
        <>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
        <hr/>
        {loaded && <ProductsShow people={people}/>}
        
        </>
    )
}

