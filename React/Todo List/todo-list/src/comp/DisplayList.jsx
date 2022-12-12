import React, { useState } from 'react'

const DisplayList = (props) => {
  const {todolist, setTodoList} = props;
  const removeSecond = (index) => {
  const newList = props.list1.filter((item,i) => i !== index);

  setTodoList(newList);
  console.log(todolist)
};
const onClick = (e) => {
  const newList2 = () => todolist.filter((task) => todolist.indexOf(task) !== e);

  setTodoList(newList2);
};

  return (
    <div style={{marginLeft:'45%'}}> 
    {props.list1.map((item, index) => (
    <div style={{display:'flex' }}>
      <p key={index}>{item.todo}</p>
      <button onClick={(e)=>onClick(item)}>Remove Item</button>
      <input type="checkbox" checked={item.checked} onChange/>
      </div>
    ))}
  </div>
  )
}

export default DisplayList