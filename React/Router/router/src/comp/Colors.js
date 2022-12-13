import React from 'react'

const Colors = (props) => {
  return (
    <p style={{color:props.color1 , backgroundColor:props.color2}}>the World is :{props.hello}</p>
  )
}

export default Colors