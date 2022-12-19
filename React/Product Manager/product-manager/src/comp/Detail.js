import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams,Link } from '@reach/router'    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div>
            <h4>TITLE: {product.title}</h4>
            <p>PRICE: {product.price}$</p>
            <p>PRICE: {product.description}</p>
            <Link to={"/product/" + product._id + "/edit"}>
    Edit
</Link>


        </div>
    )
}
    
export default Detail;

