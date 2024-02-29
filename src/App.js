

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DigitalCard from "./components/DigitalCard";
import FormCollection from "./components/FormCollection";
import Navbar from './components/Navbar'
import Samplecard from "./components/Samplecard";


function App() {
    
  return (
    <BrowserRouter>
      <Routes>        
        
        <Route path="/" element={<Navbar/>} >
        <Route index element={<FormCollection/>} />
        <Route path="samplecard" element={<Samplecard/>} />
        <Route path="/DigitalCard" element={<DigitalCard />} />            
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
