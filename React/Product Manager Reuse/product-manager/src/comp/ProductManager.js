import React, { useState } from 'react'
const ProductManager =(props) => {
   
    const [title, setTitle] = useState(props.initialTitle); 
    const [price, setPrice] = useState(props.initialPrice);
    const [description, setDescription] = useState(props.initialDescription);
    const onSubmitHandler = e => {
        e.preventDefault();
        props.onSubmitProps({title, price,description});
    }
    return (
        <>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>title</label><br/>
                <input type="text"  name="title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>price</label><br/>
                <input type="text"  name="price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>description</label><br/>
                <input type="text"  name="description" onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
            </p>
            <input type="submit"/>
        </form>
        </>
    )
}
export default ProductManager;


