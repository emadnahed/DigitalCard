import React from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import Text from "./Text";
import MyInfo from "./Myinfo";
import Imager from "./Imager";
import Footer from "./Footer";

export default function Samplecard() {
  return (
    <>
      <div className="sample">
        <Link
          className="sample-btn"
          style={{ textDecoration: "none", color: "white", marginTop: '19px' }}
          to="/"
        >
          Go Back
        </Link>

        <div className="outer-container">
          <div className="inner-container">
            <Imager imgf={require("../assets/self2.png")} alt={"Mypic"} />
            <MyInfo
              name={"Emaad Nahed"}
              title={"Front-End Developer"}
              website={"https://www.google.com/"}
            />
            <Buttons
              email={"mailto:emaadnahed@gmail.com"}
              linkedin={"https://www.linkedin.com/in/emaad-nahed-0789a1218/"}
            />
            <Text
              about={
                "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
              }
              description={
                "Foodie, Music listener. Gamer. Internet of Things fascinator. Chicken wings. Technology lover. Travel geek. not Anime. Coffee fanatic."
              }
            />
            <Footer
              twitter={"https://www.twitter.com/emaadnahed"}
              fb={"https://www.facebook.com/"}
              insta={"https://www.instagram.com/"}
              github={"https://github.com/emadnahed"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
