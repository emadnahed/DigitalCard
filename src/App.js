

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
        <Route index element={<FormCollection />} />          
        <Route path="/DigitalCard" element={<DigitalCard />} />            
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
