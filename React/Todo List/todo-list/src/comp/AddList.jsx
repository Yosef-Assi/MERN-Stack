import React from 'react'
import { useState } from 'react'

const AddList = (props) => {
    const[todo,setTodo]=useState("");
    const [comp,setComp]=useState(false);
    const[list,setList]=useState([{todo,comp,"style":''}]);

    const sendForm =(e)=> {
        e.preventDefault();
        setTodo(e.target.value)
        setList(list=>[...list,{todo, comp,style:'' }])
        setTodo('')
    }
    const onClick = (e) => {
      setList(list => list.filter(list => list !== e)
      );
    }
    const handleChange = (e,item)=> {
      setComp(e.target.checked);
      item.comp=e.target.checked
      item.comp?item.style='line-through':item.style='none'
      setList([...list])
    }


  return (
    <div>
        
        <form onSubmit={sendForm}>
            <input onChange={(e)=>(setTodo(e.target.value))} value={todo}></input>
            <input type="submit" value="Add Todo"></input>
        </form>
        <div style={{marginLeft:'45%'}}> 
    {list.map((item, index) => (
    <div style={{display:'flex' }}>
      <p key={index} style={{textDecoration:item.style}}>{item.todo}</p>
      <button onClick={(e)=>onClick(item)}>Remove Item</button>
      <input type="checkbox" checked={item.comp} onChange={e=>{handleChange(e,item)}} />
      </div>
    ))}
  </div>
    <br></br>
    </div>
  )
}

export default AddList