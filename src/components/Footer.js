import React from "react";


export default function Footer(props){
    return(
        <div className='social'>
                        <a href={props.twitter} target="_blank" rel="noreferrer"><img src={require("../icons/Twitter.png")} alt="Twitter"/></a>
                        <a href={props.fb} target="_blank" rel="noreferrer"><img src={require("../icons/Facebook.png")} alt="Facebook"/></a>
                        <a href={props.insta} target="_blank" rel="noreferrer"><img src={require("../icons/Instagram.png")} alt="Instagram"/></a>
                        <a href={props.github} target="_blank" rel="noreferrer"><img src={require("../icons/GitHub.png")} alt="GitHub"/></a>
                        </div>
    )
}


