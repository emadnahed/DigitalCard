import React from 'react'


export default function Text(props){
    return( 
    <div className='txt-info'>
        <h1>About</h1>
        <p>{props.about}</p>

        <h1>interests</h1>
        <p>{props.description}</p>
  </div>)
}