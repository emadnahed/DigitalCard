import React from 'react'


export default function MyInfo(props){
    return(
        <div className="myInfo">
            <h1>{props.name}</h1>
            <h2>{props.title}</h2>
            <a href={props.website} target="_blank" rel="noreferrer">Website</a>
    </div>
    )
}