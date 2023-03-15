import React from 'react'

export default function Imager(props){
    return(  
        <div className="img-container">
            <img src={props.imgf} alt={props.alt}/>
        </div>
  )
}