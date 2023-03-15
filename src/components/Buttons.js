import React from 'react'

export default function Buttons(props){
    return(
        <div className="btn-container">
                                 <div className='email-btn'>
                                        <img src={require("../icons/emailIcon.png")} alt="email"/>
                                        <a href={props.email} target="_blank" rel="noreferrer" >Email</a>
                                 </div>
                                 
                                 <div className='linkedin-btn'>
                                        <img src={require("../icons/linkedin.png")} alt="linkedin"/>
                                        <a href={props.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                                 </div>
                        </div>
    )
}