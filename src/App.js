

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DigitalCard from "./components/DigitalCard";
import FormCollection from "./components/FormCollection";

function App() {
    
  return (
    <BrowserRouter>
      <Routes>        
        <Route>          
        <Route path="/" element={<FormCollection/>} />
        <Route path="/DigitalCard" element={<DigitalCard />} />            
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
