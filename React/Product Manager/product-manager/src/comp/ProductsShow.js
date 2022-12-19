import { Link } from '@reach/router';
import React from 'react'
import axios from 'axios';

const ProductsShow = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h2>All Products</h2>
            {props.people.map( (person, i) =>
            <>

                <Link to={`/product/${person._id}`}> <p key={i}>{person.title}</p></Link>
                {/* <Link to={"/" + person._id}>
                </Link>
                    | */}
                    <button onClick={(e)=>{deleteProduct(person._id)}}>
                        Delete
                    </button>
            </>
            )}
        </div>
    )
}
    
export default ProductsShow;

