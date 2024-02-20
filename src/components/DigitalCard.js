import React from "react";
import "../App.css";
import Buttons from "./Buttons";
import Text from "./Text";
import Footer from "./Footer";
import MyInfo from "./Myinfo";
import Imager from "./Imager";
import { useLocation } from "react-router-dom";

export default function DigitalCard() {
  const location = useLocation();
  const formData = location.state.formData;
  
  const {
    imageUrl,
    email,
    alt,
    name,
    website,
    jobTitle,
    linkedin,
    about,
    description,
    twitter,
    facebook,
    instaGram,
    github,
  } = formData;
  
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <Imager imgf={imageUrl} alt={alt} />

          <MyInfo name={name} title={jobTitle} website={website} />

          <Buttons email={email} linkedin={linkedin} />

          <Text about={about} description={description} />

          <Footer
            twitter={twitter}
            fb={facebook}
            insta={instaGram}
            github={github}
          />
        </div>
      </div>      
    </>
  );
}
