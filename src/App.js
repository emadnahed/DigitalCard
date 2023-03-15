import React from 'react';
import Footer from './components/Footer';

import './App.css';
import Buttons from './components/Buttons';
import Text from './components/Text';
import MyInfo from './components/Myinfo';
import Imager from './components/Imager';
function App() {
  return (
    <>
    <div className="outer-container">
          <div className="inner-container">                                        
            <Imager imgf={require("./self2.png")} alt={"Mypic"} />
            <MyInfo name={"Emaad Nahed"} title={"Front-End Developer"} website={"https://www.google.com/"}/>
            <Buttons email={"mailto:emaadnahed@gmail.com"} linkedin={"https://www.linkedin.com/in/emaad-nahed-0789a1218/"}/>
            <Text about={"I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."} description={"Foodie, Music listener. Gamer. Internet of Things fascinator. Chicken wings. Technology lover. Travel geek. not Anime. Coffee fanatic."}/>
            <Footer twitter={"https://www.twitter.com/emaadnahed"} fb={"https://www.facebook.com/"} insta={"https://www.instagram.com/"} github={"https://github.com/emadnahed"}/>
          </div>
    </div>
</>                        
  );
}

export default App;
