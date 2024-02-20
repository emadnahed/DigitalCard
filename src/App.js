

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DigitalCard from "./components/DigitalCard";
import FormCollection from "./components/FormCollection";

function App() {
    
  return (
    <BrowserRouter>
      {/* <FormCollection/> */}

      {/* <DigitalCard />; */}

      <Routes>        
        <Route>          
        <Route path="/" element={<h1>Hiiii</h1>} />
        <Route path="/DigitalCard" element={<DigitalCard />} />            
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
