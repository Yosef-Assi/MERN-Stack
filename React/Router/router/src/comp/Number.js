import React from 'react'

const Number = (props) => {

  return (
    <div>
        {isNaN(props.number) ? <p>the Word is : {props.number}</p> : <p>The Number is : {props.number}</p>}
    
    </div>
  )
}

export default Number